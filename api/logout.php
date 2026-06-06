<?php
// api/logout.php — Cierra la sesión (borra el token actual).
require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_err('Método no permitido.', 405);

$token = bearer_token();
if ($token) {
  $stmt = db()->prepare('DELETE FROM sessions WHERE token = ?');
  $stmt->execute([$token]);
}
json_ok();
