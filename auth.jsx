// auth.jsx — Capa de autenticación y sincronización de progreso.
// ──────────────────────────────────────────────────────────────────────────
// DOS MODOS según APP_CONFIG.api.baseUrl:
//   • baseUrl vacío  → MODO LOCAL: cuentas en localStorage (sin PHP). Para
//                       desarrollar el front sin backend.
//   • baseUrl puesto → MODO BACKEND: habla con la API PHP+MySQL en VenHost.
//
// Contrato de la API (PHP):
//   POST  {base}/register.php  {name,email,password}      → {ok,user,token}
//   POST  {base}/login.php     {email,password}           → {ok,user,token}
//   POST  {base}/logout.php    (Bearer token)             → {ok}
//   GET   {base}/me.php        (Bearer token)             → {ok,user}
//   GET   {base}/progress.php  (Bearer token)             → {ok,progress}
//   POST  {base}/progress.php  (Bearer) {progress:{...}}  → {ok}
//
// user = { id, name, email, role: 'user' | 'admin' }
//
// La sesión (token + user) se guarda en localStorage 'wd_session'.
// El progreso real sigue viviendo en las claves efj_* de localStorage; esta
// capa solo lo empaqueta para sincronizarlo con el servidor.

(function () {
  const cfg = window.APP_CONFIG || {};
  const BASE = (cfg.api && cfg.api.baseUrl) || '';
  const LOCAL_MODE = !BASE;

  const SESSION_KEY = 'wd_session';
  const LOCAL_USERS_KEY = 'wd_local_users'; // solo modo local
  // Claves de progreso que se sincronizan con el servidor.
  const PROGRESS_KEYS = ['efj_user', 'efj_progress', 'efj_completed_sections', 'efj_theory_seen'];

  // ── Progreso por usuario en MODO LOCAL (aísla cuentas sin backend) ──────────
  function saveLocalProgress(email) {
    if (!email) return;
    const blob = {};
    PROGRESS_KEYS.forEach(k => { const v = localStorage.getItem(k); if (v != null) blob[k] = v; });
    try { localStorage.setItem('wd_lp_' + email, JSON.stringify(blob)); } catch {}
  }
  function loadLocalProgress(email) {
    // Limpia el progreso compartido y carga el del usuario (si lo hubiera).
    PROGRESS_KEYS.forEach(k => localStorage.removeItem(k));
    try {
      const blob = JSON.parse(localStorage.getItem('wd_lp_' + email) || 'null');
      if (blob) PROGRESS_KEYS.forEach(k => { if (blob[k] != null) localStorage.setItem(k, blob[k]); });
    } catch {}
  }
  // Cambia de cuenta local: guarda lo del usuario saliente y carga el entrante.
  function localSwitchTo(email) {
    const cur = getSession();
    if (cur && cur.user && cur.user.email && cur.user.email !== email) saveLocalProgress(cur.user.email);
    loadLocalProgress(email);
  }

  // En modo local, estos emails se tratan como administradores.
  const LOCAL_ADMIN_EMAILS = ['wediom8@gmail.com', 'morajosue57@gmail.com'];
  function isLocalAdminEmail(email) { return LOCAL_ADMIN_EMAILS.includes((email || '').toLowerCase()); }

  // ── Sesión ────────────────────────────────────────────────────────────────
  function getSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  }
  function setSession(s) {
    if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new CustomEvent('auth-changed', { detail: s }));
  }
  function getUser() { const s = getSession(); return s ? s.user : null; }
  function getToken() { const s = getSession(); return s ? s.token : null; }
  function isAuthenticated() { return !!getSession(); }
  function isAdmin() { const u = getUser(); return !!u && u.role === 'admin'; }

  // ── Helpers HTTP ────────────────────────────────────────────────────────────
  async function apiPost(path, body) {
    const res = await fetch(BASE + path, {
      method: 'POST',
      headers: authHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(body || {}),
    });
    return parse(res);
  }
  async function apiGet(path) {
    const res = await fetch(BASE + path, { method: 'GET', headers: authHeaders() });
    return parse(res);
  }
  function authHeaders(extra) {
    const h = extra || {};
    const t = getToken();
    if (t) h['Authorization'] = 'Bearer ' + t;
    return h;
  }
  async function parse(res) {
    let data = {};
    try { data = await res.json(); } catch {}
    if (!res.ok || data.ok === false) {
      throw new Error(data.error || ('Error ' + res.status));
    }
    return data;
  }

  // ── Política de contraseña (debe coincidir con api/config.php) ────────────────
  const PW_MIN = (cfg.security && cfg.security.passwordMinLength) || 8;
  // Valida y devuelve mensaje de error, o '' si es válida.
  function passwordError(password) {
    if (!password || password.length < PW_MIN) return `La contraseña debe tener al menos ${PW_MIN} caracteres.`;
    if (password.length > 200) return 'La contraseña es demasiado larga.';
    if (!/[a-z]/.test(password)) return 'La contraseña debe incluir una letra minúscula.';
    if (!/[A-Z]/.test(password)) return 'La contraseña debe incluir una letra mayúscula.';
    if (!/[0-9]/.test(password)) return 'La contraseña debe incluir un número.';
    return '';
  }

  // ── Validación básica ───────────────────────────────────────────────────────
  function validate(name, email, password, isRegister) {
    if (isRegister && (!name || name.trim().length < 2)) throw new Error('Ingresa tu nombre.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Email inválido.');
    if (isRegister) {
      const pe = passwordError(password);
      if (pe) throw new Error(pe);
    } else if (!password) {
      throw new Error('Ingresa tu contraseña.');
    }
  }

  // ── reCAPTCHA v3 ──────────────────────────────────────────────────────────────
  // Solo se activa en PRODUCCIÓN (con backend). En modo local no hay servidor que
  // verifique el token y el dominio (localhost/file://) no está registrado en la
  // clave → así evitamos el error "dominio no válido" mientras desarrollas.
  const RECAPTCHA_KEY = (!cfg.isLocalMode && cfg.security && cfg.security.recaptchaSiteKey) || '';
  function getRecaptchaToken(action) {
    return new Promise((resolve) => {
      if (!RECAPTCHA_KEY || !window.grecaptcha || !window.grecaptcha.execute) return resolve('');
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(RECAPTCHA_KEY, { action })
            .then(resolve).catch(() => resolve(''));
        });
      } catch { resolve(''); }
    });
  }

  // ── Registro ───────────────────────────────────────────────────────────────
  async function register(name, email, password) {
    email = (email || '').trim().toLowerCase();
    validate(name, email, password, true);
    if (LOCAL_MODE) return localRegister(name, email, password);
    const recaptcha = await getRecaptchaToken('register');
    const data = await apiPost('/register.php', { name: name.trim(), email, password, recaptcha });
    setSession({ token: data.token, user: data.user });
    return data.user;
  }

  // ── Login ──────────────────────────────────────────────────────────────────
  async function login(email, password) {
    email = (email || '').trim().toLowerCase();
    validate(null, email, password, false);
    if (LOCAL_MODE) return localLogin(email, password);
    const recaptcha = await getRecaptchaToken('login');
    const data = await apiPost('/login.php', { email, password, recaptcha });
    setSession({ token: data.token, user: data.user });
    return data.user;
  }

  // ── Logout ─────────────────────────────────────────────────────────────────
  async function logout() {
    if (LOCAL_MODE) {
      const cur = getUser();
      if (cur && cur.email) saveLocalProgress(cur.email);   // guarda antes de salir
      PROGRESS_KEYS.forEach(k => localStorage.removeItem(k)); // deja limpio para el siguiente
    } else {
      try { await apiPost('/logout.php', {}); } catch {}
    }
    setSession(null);
  }

  // ── Verificar sesión (al cargar la app) ──────────────────────────────────────
  async function refreshMe() {
    if (!isAuthenticated()) return null;
    if (LOCAL_MODE) return getUser();
    try {
      const data = await apiGet('/me.php');
      const s = getSession();
      setSession({ token: s.token, user: data.user });
      return data.user;
    } catch (e) {
      // token inválido/expirado → cerrar sesión local
      setSession(null);
      return null;
    }
  }

  // ── Sincronización de progreso ───────────────────────────────────────────────
  function collectProgress() {
    const blob = {};
    PROGRESS_KEYS.forEach(k => { const v = localStorage.getItem(k); if (v != null) blob[k] = v; });
    return blob;
  }
  function applyProgress(blob) {
    if (!blob || typeof blob !== 'object') return;
    PROGRESS_KEYS.forEach(k => {
      if (blob[k] != null) localStorage.setItem(k, blob[k]);
    });
    window.dispatchEvent(new CustomEvent('progress-synced'));
  }
  // Sube el progreso local al servidor (debounced desde la app).
  async function pushProgress() {
    if (LOCAL_MODE || !isAuthenticated()) return;
    try { await apiPost('/progress.php', { progress: collectProgress() }); } catch {}
  }
  // Baja el progreso del servidor y lo aplica a localStorage.
  // Aísla cuentas: limpia el progreso local antes de aplicar el del servidor,
  // para que al cambiar de usuario en el mismo navegador no se mezclen datos.
  async function pullProgress() {
    if (LOCAL_MODE || !isAuthenticated()) return;
    try {
      const data = await apiGet('/progress.php');
      PROGRESS_KEYS.forEach(k => localStorage.removeItem(k));
      if (data.progress) applyProgress(data.progress);
      window.dispatchEvent(new CustomEvent('progress-synced'));
    } catch {}
  }

  // ── Implementación MODO LOCAL (sin backend) ──────────────────────────────────
  function localUsers() {
    try { return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveLocalUsers(u) { localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(u)); }
  // Hash trivial SOLO para modo local (no es seguridad real; el backend usa bcrypt).
  function weakHash(s) {
    let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
    return String(h);
  }
  function localRegister(name, email, password) {
    const users = localUsers();
    if (users[email]) throw new Error('Ese email ya está registrado.');
    const role = isLocalAdminEmail(email) ? 'admin' : 'user';
    const user = { id: 'local-' + email, name: name.trim(), email, role };
    users[email] = { ...user, pass: weakHash(password) };
    saveLocalUsers(users);
    localSwitchTo(email); // cuenta nueva → progreso limpio y aislado
    setSession({ token: 'local-token', user });
    return user;
  }
  function localLogin(email, password) {
    const users = localUsers();
    const rec = users[email];
    // Atajo admin en local: si no existe ningún usuario aún, permite crear el
    // admin al vuelo con el email admin (comodidad de desarrollo).
    if (!rec) {
      if (isLocalAdminEmail(email)) return localRegister('Admin', email, password);
      throw new Error('Usuario no encontrado. ¿Quieres crear una cuenta?');
    }
    if (rec.pass !== weakHash(password)) throw new Error('Contraseña incorrecta.');
    const user = { id: rec.id, name: rec.name, email: rec.email, role: rec.role };
    localSwitchTo(email); // carga el progreso aislado de esta cuenta
    setSession({ token: 'local-token', user });
    return user;
  }

  // Cargar el script de reCAPTCHA v3 una sola vez (si hay clave configurada).
  if (RECAPTCHA_KEY && !document.getElementById('recaptcha-v3')) {
    const s = document.createElement('script');
    s.id = 'recaptcha-v3';
    s.async = true;
    s.src = 'https://www.google.com/recaptcha/api.js?render=' + encodeURIComponent(RECAPTCHA_KEY);
    document.head.appendChild(s);
  }

  window.Auth = {
    LOCAL_MODE,
    getUser, getToken, isAuthenticated, isAdmin,
    register, login, logout, refreshMe,
    pushProgress, pullProgress, collectProgress, applyProgress,
    passwordError, PW_MIN, recaptchaEnabled: !!RECAPTCHA_KEY,
  };
})();
