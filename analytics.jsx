// analytics.jsx — Carga de Google Analytics (GA4) con consentimiento.
// ──────────────────────────────────────────────────────────────────────────
// - Solo carga si APP_CONFIG.analytics.measurementId está configurado.
// - Solo activa el tracking si el usuario ACEPTÓ cookies (banner).
// - Expone helpers: Analytics.accept(), .decline(), .hasConsent(),
//   .trackPage(name), .trackEvent(name, params).

(function () {
  const CONSENT_KEY = 'wd_cookie_consent'; // 'accepted' | 'declined'
  const cfg = (window.APP_CONFIG && window.APP_CONFIG.analytics) || {};
  const GA_ID = cfg.measurementId || '';

  let loaded = false;

  function hasConsent() {
    try { return localStorage.getItem(CONSENT_KEY) === 'accepted'; }
    catch { return false; }
  }
  function consentState() {
    try { return localStorage.getItem(CONSENT_KEY) || ''; }
    catch { return ''; }
  }

  function loadGtag() {
    if (loaded || !GA_ID) return;
    loaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    // No usamos new Date() aquí dentro del arg de gtag para evitar restricciones
    // del entorno; GA acepta un timestamp numérico.
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function accept() {
    try { localStorage.setItem(CONSENT_KEY, 'accepted'); } catch {}
    loadGtag();
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'accepted' }));
  }
  function decline() {
    try { localStorage.setItem(CONSENT_KEY, 'declined'); } catch {}
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: 'declined' }));
  }

  function trackPage(name) {
    if (!hasConsent() || !window.gtag) return;
    window.gtag('event', 'page_view', { page_title: name, page_path: '/' + name });
  }
  function trackEvent(name, params) {
    if (!hasConsent() || !window.gtag) return;
    window.gtag('event', name, params || {});
  }

  // Si ya había consentimiento de una visita anterior, cargar GA de una vez.
  if (GA_ID && hasConsent()) loadGtag();

  window.Analytics = {
    accept, decline, hasConsent, consentState, trackPage, trackEvent,
    CONSENT_KEY,
    enabled: !!GA_ID,
  };
})();
