<?php
// api/helpers.php — Conexión PDO, CORS, respuestas JSON y autenticación.
require_once __DIR__ . '/config.php';

// ── CORS + cabeceras comunes ─────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . CORS_ORIGIN);
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('X-Content-Type-Options: nosniff');

// Respuesta a preflight (navegador) → 204 sin cuerpo.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Rechazar cuerpos de petición desproporcionados (defensa básica).
if (isset($_SERVER['CONTENT_LENGTH']) && (int)$_SERVER['CONTENT_LENGTH'] > 524288) {
  http_response_code(413);
  echo json_encode(['ok' => false, 'error' => 'Petición demasiado grande.']);
  exit;
}

// ── Respuestas JSON ──────────────────────────────────────────────────────────
function json_ok($data = []) {
  echo json_encode(array_merge(['ok' => true], $data));
  exit;
}
function json_err($message, $code = 400) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $message]);
  exit;
}

// ── Conexión a la base de datos ──────────────────────────────────────────────
function db() {
  static $pdo = null;
  if ($pdo !== null) return $pdo;
  $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
  try {
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES => false,
    ]);
  } catch (PDOException $e) {
    json_err('No se pudo conectar a la base de datos.', 500);
  }
  return $pdo;
}

// ── ¿Este email es administrador? ────────────────────────────────────────────
function is_admin_email($email) {
  $email = strtolower(trim($email));
  foreach (explode(',', ADMIN_EMAILS) as $a) {
    if (strtolower(trim($a)) === $email && $email !== '') return true;
  }
  return false;
}

// ── Lectura del cuerpo JSON ──────────────────────────────────────────────────
function body() {
  $raw = file_get_contents('php://input');
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

// ── Token bearer del header Authorization ─────────────────────────────────────
function bearer_token() {
  $headers = function_exists('getallheaders') ? getallheaders() : [];
  $auth = $headers['Authorization'] ?? $headers['authorization'] ?? ($_SERVER['HTTP_AUTHORIZATION'] ?? '');
  if (preg_match('/Bearer\s+(.+)/i', $auth, $m)) return trim($m[1]);
  return '';
}

// ── Usuario autenticado a partir del token (o 401) ────────────────────────────
function require_user() {
  $token = bearer_token();
  if (!$token) json_err('No autenticado.', 401);
  $stmt = db()->prepare(
    'SELECT u.id, u.name, u.email, u.role
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token = ? AND s.expires_at > NOW()'
  );
  $stmt->execute([$token]);
  $user = $stmt->fetch();
  if (!$user) json_err('Sesión inválida o expirada.', 401);
  $user['id'] = (int)$user['id'];
  return $user;
}

// ── Crear sesión (token) para un usuario ──────────────────────────────────────
function create_session($userId) {
  $token = bin2hex(random_bytes(32));
  $stmt = db()->prepare(
    'INSERT INTO sessions (token, user_id, expires_at)
     VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? DAY))'
  );
  $stmt->execute([$token, $userId, SESSION_DAYS]);
  return $token;
}

// ── Limpieza ocasional de sesiones expiradas ──────────────────────────────────
function gc_sessions() {
  try { db()->query('DELETE FROM sessions WHERE expires_at < NOW()'); } catch (Exception $e) {}
}

// ── IP del cliente (best-effort en hosting compartido) ────────────────────────
function client_ip() {
  $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
  // Algunos hostings ponen la IP real detrás de un proxy:
  if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
    $ip = trim($parts[0]);
  }
  return substr($ip, 0, 45); // cabe IPv6
}

// ── Rate limiting (anti fuerza bruta) ─────────────────────────────────────────
// Lanza 429 si se superó el máximo de "hits" para $key en la ventana.
function rate_limit_check($key, $max, $windowMin) {
  try {
    // Limpieza ocasional de registros viejos.
    db()->prepare('DELETE FROM rate_limits WHERE created_at < DATE_SUB(NOW(), INTERVAL ? MINUTE)')
        ->execute([max($windowMin, 60)]);
    $stmt = db()->prepare(
      'SELECT COUNT(*) AS c FROM rate_limits
        WHERE rl_key = ? AND created_at > DATE_SUB(NOW(), INTERVAL ? MINUTE)'
    );
    $stmt->execute([$key, $windowMin]);
    $row = $stmt->fetch();
    if ($row && (int)$row['c'] >= $max) {
      json_err('Demasiados intentos. Espera unos minutos e inténtalo de nuevo.', 429);
    }
  } catch (PDOException $e) { /* si falla la tabla, no bloqueamos */ }
}
function rate_limit_hit($key) {
  try { db()->prepare('INSERT INTO rate_limits (rl_key) VALUES (?)')->execute([$key]); }
  catch (PDOException $e) {}
}

// ── Política de contraseña (servidor) ─────────────────────────────────────────
// Devuelve mensaje de error o '' si es válida.
function password_policy_error($password) {
  if (strlen($password) < PASSWORD_MIN) return 'La contraseña debe tener al menos ' . PASSWORD_MIN . ' caracteres.';
  if (strlen($password) > 200) return 'La contraseña es demasiado larga.';
  if (!preg_match('/[a-z]/', $password)) return 'La contraseña debe incluir una letra minúscula.';
  if (!preg_match('/[A-Z]/', $password)) return 'La contraseña debe incluir una letra mayúscula.';
  if (!preg_match('/[0-9]/', $password)) return 'La contraseña debe incluir un número.';
  return '';
}

// ── Verificación reCAPTCHA v3 ─────────────────────────────────────────────────
// Si RECAPTCHA_SECRET está vacío, no se exige captcha (devuelve true).
function verify_recaptcha($token, $expectedAction) {
  if (RECAPTCHA_SECRET === '') return true; // captcha desactivado
  if (!$token) json_err('Verificación de seguridad fallida. Recarga la página.', 400);
  $post = http_build_query([
    'secret'   => RECAPTCHA_SECRET,
    'response' => $token,
    'remoteip' => client_ip(),
  ]);
  $result = null;
  // Intento 1: cURL (lo más común en hostings).
  if (function_exists('curl_init')) {
    $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
    curl_setopt_array($ch, [
      CURLOPT_RETURNTRANSFER => true, CURLOPT_POST => true,
      CURLOPT_POSTFIELDS => $post, CURLOPT_TIMEOUT => 8,
    ]);
    $result = curl_exec($ch);
    curl_close($ch);
  }
  // Intento 2: file_get_contents si cURL no está disponible.
  if ($result === null || $result === false) {
    $ctx = stream_context_create(['http' => [
      'method' => 'POST',
      'header' => 'Content-Type: application/x-www-form-urlencoded',
      'content' => $post, 'timeout' => 8,
    ]]);
    $result = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $ctx);
  }
  if ($result === false || $result === null) {
    // No se pudo verificar (red caída). No bloqueamos para no dejar fuera a usuarios reales.
    return true;
  }
  $data = json_decode($result, true);
  if (!is_array($data) || empty($data['success'])) {
    json_err('Verificación de seguridad fallida.', 403);
  }
  if (isset($data['score']) && $data['score'] < RECAPTCHA_MIN_SCORE) {
    json_err('Actividad sospechosa detectada. Inténtalo de nuevo.', 403);
  }
  return true;
}
