<?php
// api/login.php — Inicia sesión con email + contraseña.
require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_err('Método no permitido.', 405);

// Anti fuerza bruta: limitar intentos de login por IP.
$rlKey = 'login:' . client_ip();
rate_limit_check($rlKey, RL_LOGIN_MAX, RL_WINDOW_MIN);

$in       = body();
$email    = strtolower(trim($in['email'] ?? ''));
$password = (string)($in['password'] ?? '');

// reCAPTCHA (si está configurado)
verify_recaptcha($in['recaptcha'] ?? '', 'login');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) json_err('Email inválido.');
if ($password === '') json_err('Ingresa tu contraseña.');

gc_sessions();

$stmt = db()->prepare('SELECT id, name, email, password_hash, role FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

// Mensaje genérico para no revelar si el email existe.
if (!$user || !password_verify($password, $user['password_hash'])) {
  rate_limit_hit($rlKey); // contar solo intentos fallidos
  json_err('Email o contraseña incorrectos.', 401);
}

$userId = (int)$user['id'];
$token  = create_session($userId);

json_ok([
  'token' => $token,
  'user'  => ['id' => $userId, 'name' => $user['name'], 'email' => $user['email'], 'role' => $user['role']],
]);
