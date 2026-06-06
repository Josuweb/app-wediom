// config.jsx — Configuración central de la app pública (Wediom English)
// ──────────────────────────────────────────────────────────────────────────
// Edita SOLO este archivo para cambiar marca, contacto, Analytics o la URL
// del backend. Todo lo demás de la app lee de aquí (window.APP_CONFIG).
//
// Se carga ANTES que cualquier otro script en index.html.

const APP_CONFIG = {
  // ── Marca ────────────────────────────────────────────────────────────────
  brand: {
    name: 'Wediom English',
    short: 'Wediom',
    tagline: 'Aprende inglés desde el español, ciudad por ciudad',
    // Año para el footer / legales (se actualiza solo con new Date abajo).
  },

  // ── Contacto / Soporte ─────────────────────────────────────────────────────
  support: {
    email: 'wediom8@gmail.com',
    // Número de WhatsApp en formato internacional SIN '+' ni espacios.
    // Ej: '51999888777'. Déjalo vacío ('') para ocultar el botón de WhatsApp.
    whatsapp: '12035511239',
    // Mensaje pre-rellenado al abrir WhatsApp.
    whatsappMessage: 'Hola, necesito ayuda con Wediom English 🦉',
  },

  // ── Google Analytics (GA4) ─────────────────────────────────────────────────
  // Pega aquí tu Measurement ID (formato G-XXXXXXXXXX).
  // Déjalo vacío ('') para NO cargar Analytics (útil en local).
  analytics: {
    measurementId: 'G-5C69WBXN81',
  },

  // ── Seguridad ──────────────────────────────────────────────────────────────
  security: {
    // reCAPTCHA v3 (anti-bots). Pega aquí tu CLAVE DEL SITIO (site key).
    // La clave SECRETA va en api/config.php (nunca en el front).
    // Déjalo vacío ('') para desactivar reCAPTCHA (login normal sin captcha).
    recaptchaSiteKey: '6Ld2hQ8tAAAAAAKhSJwxXNb_HzDzDqTiXbS6F5-Q',
    // Requisitos de contraseña (deben coincidir con api/config.php).
    passwordMinLength: 8,
  },

  // ── Backend (PHP + MySQL en VenHost) ───────────────────────────────────────
  api: {
    // Dominio de PRODUCCIÓN (subdominio). El backend vive en /api de ese dominio.
    prodHost: 'app.wediom.com',
    // baseUrl se RESUELVE abajo automáticamente:
    //   • En app.wediom.com  → usa el backend real (https://app.wediom.com/api).
    //   • En local (file://, localhost, otro host) → queda vacío = MODO LOCAL
    //     (login contra localStorage; ideal para desarrollar el front sin PHP).
    // Si quieres forzar una URL fija (p. ej. XAMPP), escríbela aquí directamente.
    baseUrl: '',
  },

  // ── Legal ──────────────────────────────────────────────────────────────────
  legal: {
    company: 'Wediom English',
    // País / jurisdicción que aplica a Términos y Privacidad.
    country: 'Perú',
    lastUpdated: '2026-06-05',
  },
};

// Año actual para el footer (calculado en runtime, no hardcodeado).
APP_CONFIG.year = new Date().getFullYear();

// Resuelve baseUrl según el host: en el subdominio de producción usa el backend
// real; en cualquier otro lugar (local) lo deja vacío → modo local automático.
// (No se sobrescribe si ya pusiste una baseUrl fija manualmente.)
if (!APP_CONFIG.api.baseUrl
    && typeof location !== 'undefined'
    && location.hostname === APP_CONFIG.api.prodHost) {
  APP_CONFIG.api.baseUrl = 'https://' + APP_CONFIG.api.prodHost + '/api';
}

// ¿Estamos en modo local sin backend? (api.baseUrl vacío)
APP_CONFIG.isLocalMode = !APP_CONFIG.api.baseUrl;

window.APP_CONFIG = APP_CONFIG;
