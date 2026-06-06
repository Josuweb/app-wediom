<?php
// api/progress.php — Lee (GET) o guarda (POST) el progreso del usuario.
// El progreso es un blob JSON con las claves efj_* del front-end.
require_once __DIR__ . '/helpers.php';

$user = require_user();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $stmt = db()->prepare('SELECT progress FROM users WHERE id = ?');
  $stmt->execute([$user['id']]);
  $row = $stmt->fetch();
  $progress = ($row && $row['progress']) ? json_decode($row['progress'], true) : null;
  json_ok(['progress' => $progress]);
}

if ($method === 'POST') {
  $in = body();
  $progress = $in['progress'] ?? null;
  if (!is_array($progress)) json_err('Progreso inválido.');

  // Límite de tamaño defensivo (evita abusos). 256 KB es de sobra.
  $json = json_encode($progress);
  if (strlen($json) > 262144) json_err('El progreso es demasiado grande.', 413);

  $stmt = db()->prepare('UPDATE users SET progress = ? WHERE id = ?');
  $stmt->execute([$json, $user['id']]);
  json_ok();
}

json_err('Método no permitido.', 405);
