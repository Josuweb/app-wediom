<?php
// api/config.php — Configuración del backend (Wediom English).
// ──────────────────────────────────────────────────────────────────────────
// EDITA estos valores en el hosting (VenHost → cPanel) con los datos de tu
// base de datos MySQL. NO subas este archivo a un repositorio público.

// ── Base de datos MySQL ─────────────────────────────────────────────────────
// En cPanel, crea una BD y un usuario, y asígnalo a la BD. cPanel suele
// prefijar el nombre con tu cuenta, ej: 'tucuenta_wediom'.
define('DB_HOST', 'localhost');
define('DB_NAME', 'wediomcom_app');
define('DB_USER', 'wediomcom_appjj');
define('DB_PASS', 'kpX87pg3LWuFHWsNxukV');
define('DB_CHARSET', 'utf8mb4');

// ── Administradores ─────────────────────────────────────────────────────────
// Los usuarios que se registren con estos emails reciben rol 'admin' (acceso
// total). Separa varios con coma. Sin espacios alrededor de la coma.
define('ADMIN_EMAILS', 'wediom8@gmail.com,morajosue57@gmail.com');

// ── Sesiones ────────────────────────────────────────────────────────────────
// Duración del token de sesión, en días.
define('SESSION_DAYS', 30);

// ── Seguridad: contraseñas ───────────────────────────────────────────────────
// Coste de bcrypt (parámetro alto = más seguro pero más lento). 12 es robusto.
define('BCRYPT_COST', 12);
// Longitud mínima (debe coincidir con config.jsx → security.passwordMinLength).
define('PASSWORD_MIN', 8);

// ── Seguridad: rate limiting (anti fuerza bruta) ─────────────────────────────
// Máximo de intentos por IP dentro de la ventana, para login y registro.
define('RL_LOGIN_MAX', 8);       // intentos de login fallidos
define('RL_REGISTER_MAX', 5);    // registros nuevos
define('RL_WINDOW_MIN', 15);     // ventana en minutos

// ── Seguridad: reCAPTCHA v3 ──────────────────────────────────────────────────
// Pega aquí tu CLAVE SECRETA de reCAPTCHA v3 (la del sitio va en config.jsx).
// Déjalo vacío ('') para desactivar la verificación de captcha.
define('RECAPTCHA_SECRET', '6Ld2hQ8tAAAAAEcBfFfCVETqMqm945_V1nUZoPWs');
// Puntuación mínima aceptada (0.0 a 1.0). 0.5 es el valor recomendado por Google.
define('RECAPTCHA_MIN_SCORE', 0.5);

// ── CORS ────────────────────────────────────────────────────────────────────
// En producción, el front y /api viven en el MISMO dominio (app.wediom.com) →
// no hace falta CORS, pero fijar el origen exacto es más seguro que '*'.
// Para pruebas locales (XAMPP con el front en otro origen), pon aquí ese origen,
// ej: 'http://localhost:5500'. Usa '*' solo si necesitas permitir cualquiera.
define('CORS_ORIGIN', 'https://app.wediom.com');
