<?php
// api/register.php — Crea una cuenta nueva y devuelve sesión.
require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_err('Método no permitido.', 405);

// Anti fuerza bruta: limitar registros por IP.
rate_limit_check('register:' . client_ip(), RL_REGISTER_MAX, RL_WINDOW_MIN);

$in       = body();
$name     = trim($in['name'] ?? '');
$email    = strtolower(trim($in['email'] ?? ''));
$password = (string)($in['password'] ?? '');

// reCAPTCHA (si está configurado)
verify_recaptcha($in['recaptcha'] ?? '', 'register');

// Validación
if (mb_strlen($name) < 2)  json_err('Ingresa tu nombre.');
if (mb_strlen($name) > 100) json_err('El nombre es demasiado largo.');
// Quitar caracteres de control del nombre (defensa básica anti-inyección de payloads).
$name = preg_replace('/[\x00-\x1F\x7F]/u', '', $name);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 190) json_err('Email inválido.');
$pwErr = password_policy_error($password);
if ($pwErr) json_err($pwErr);

gc_sessions();
rate_limit_hit('register:' . client_ip());

// ¿Email ya registrado?
$stmt = db()->prepare('SELECT id FROM users WHERE email = ?');
$stmt->execute([$email]);
if ($stmt->fetch()) json_err('Ese email ya está registrado.', 409);

$role = is_admin_email($email) ? 'admin' : 'user';
$hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => BCRYPT_COST]);

$stmt = db()->prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)');
$stmt->execute([$name, $email, $hash, $role]);
$userId = (int)db()->lastInsertId();

$token = create_session($userId);

json_ok([
  'token' => $token,
  'user'  => ['id' => $userId, 'name' => $name, 'email' => $email, 'role' => $role],
]);
