<?php
// api/me.php — Devuelve el usuario de la sesión actual (verifica el token).
require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') json_err('Método no permitido.', 405);

$user = require_user();
json_ok(['user' => $user]);
