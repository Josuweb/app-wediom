// screens/login.jsx — Pantalla de Login / Registro (gate de entrada).
// Usa window.Auth (modo local o backend según APP_CONFIG.api.baseUrl).
// Props: onAuthed(user), onShowLegal('terms'|'privacy')

function LoginScreen({ onAuthed, onShowLegal }) {
  const brand = (window.APP_CONFIG && window.APP_CONFIG.brand) || { name: 'Wediom English' };
  const [mode, setMode] = React.useState('login'); // 'login' | 'register'
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);
  const [error, setError] = React.useState('');
  const [busy, setBusy] = React.useState(false);

  const isRegister = mode === 'register';

  async function submit(e) {
    e.preventDefault();
    setError('');
    if (isRegister && !accepted) {
      setError('Debes aceptar los Términos y la Política de Privacidad.');
      return;
    }
    setBusy(true);
    try {
      const user = isRegister
        ? await window.Auth.register(name, email, password)
        : await window.Auth.login(email, password);
      // Tras login: bajar progreso del servidor (si hay backend).
      await window.Auth.pullProgress();
      window.Analytics && window.Analytics.trackEvent(isRegister ? 'sign_up' : 'login');
      onAuthed && onAuthed(user);
    } catch (err) {
      setError(err.message || 'Ocurrió un error. Intenta de nuevo.');
    } finally {
      setBusy(false);
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px', fontSize: 15, fontFamily: 'var(--font)',
    border: '2px solid var(--border)', borderRadius: 'var(--r-md)', outline: 'none',
    background: 'var(--surface)', color: 'var(--text)',
  };
  const labelStyle = { fontSize: 13, fontWeight: 800, color: 'var(--muted)', marginBottom: 6, display: 'block' };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20, background: 'linear-gradient(160deg, var(--indigo-light), var(--bg))',
    }}>
      <div style={{
        width: '100%', maxWidth: 420, background: 'var(--surface)',
        borderRadius: 'var(--r-2xl)', boxShadow: 'var(--shadow-lg)', padding: '32px 28px',
      }}>
        {/* Marca */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <Mascot size={76}/>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: 'var(--text)' }}>{brand.name}</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', textAlign: 'center' }}>
            {isRegister ? 'Crea tu cuenta gratis y empieza a aprender' : 'Inicia sesión para continuar'}
          </p>
        </div>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {isRegister && (
            <div>
              <label style={labelStyle}>Nombre</label>
              <input style={inputStyle} type="text" value={name} placeholder="Tu nombre"
                     autoComplete="name" onChange={e => setName(e.target.value)} />
            </div>
          )}
          <div>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" value={email} placeholder="tu@email.com"
                   autoComplete="email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>Contraseña</label>
            <div style={{ position: 'relative' }}>
              <input style={{ ...inputStyle, paddingRight: 46 }} type={showPass ? 'text' : 'password'}
                     value={password} placeholder={isRegister ? 'Mínimo 8 caracteres' : 'Tu contraseña'}
                     autoComplete={isRegister ? 'new-password' : 'current-password'}
                     onChange={e => setPassword(e.target.value)} />
              <button type="button" onClick={() => setShowPass(s => !s)} aria-label="Mostrar contraseña"
                      style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                               background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, padding: 6 }}>
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
            {isRegister && (
              <PasswordHints password={password} />
            )}
          </div>

          {isRegister && (
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--muted)', cursor: 'pointer' }}>
              <input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)}
                     style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }} />
              <span>
                Acepto los{' '}
                <a onClick={(e) => { e.preventDefault(); onShowLegal && onShowLegal('terms'); }}
                   href="#" style={{ color: 'var(--indigo)', fontWeight: 800 }}>Términos</a>{' '}y la{' '}
                <a onClick={(e) => { e.preventDefault(); onShowLegal && onShowLegal('privacy'); }}
                   href="#" style={{ color: 'var(--indigo)', fontWeight: 800 }}>Política de Privacidad</a>.
              </span>
            </label>
          )}

          {error && (
            <div style={{ background: 'var(--rose-light)', color: 'var(--rose-dark)', padding: '10px 12px',
                          borderRadius: 'var(--r-sm)', fontSize: 13, fontWeight: 700 }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={busy} style={{
            width: '100%', padding: '13px', fontSize: 16, fontWeight: 900, fontFamily: 'var(--font)',
            color: 'white', background: 'var(--indigo)', border: 'none', borderRadius: 'var(--r-md)',
            cursor: busy ? 'wait' : 'pointer', opacity: busy ? 0.7 : 1,
            boxShadow: '0 4px 0 var(--indigo-shadow)',
          }}>
            {busy ? 'Cargando…' : (isRegister ? 'Crear cuenta' : 'Iniciar sesión')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 18, fontSize: 14, color: 'var(--muted)' }}>
          {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <button onClick={() => { setMode(isRegister ? 'login' : 'register'); setError(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--indigo)', fontWeight: 900,
                           cursor: 'pointer', fontFamily: 'var(--font)', fontSize: 14 }}>
            {isRegister ? 'Inicia sesión' : 'Regístrate gratis'}
          </button>
        </div>

        {window.Auth && window.Auth.recaptchaEnabled && (
          <p style={{ marginTop: 14, fontSize: 10.5, color: 'var(--faint)', textAlign: 'center', lineHeight: 1.5 }}>
            Protegido por reCAPTCHA. Aplican la{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
               style={{ color: 'var(--faint)' }}>Privacidad</a> y{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"
               style={{ color: 'var(--faint)' }}>Condiciones</a> de Google.
          </p>
        )}

        {window.Auth && window.Auth.LOCAL_MODE && (
          <p style={{ marginTop: 16, fontSize: 11, color: 'var(--faint)', textAlign: 'center' }}>
            Modo local (sin servidor): las cuentas se guardan solo en este navegador.
          </p>
        )}
      </div>
    </div>
  );
}

// Indicador visual de requisitos de contraseña (registro).
function PasswordHints({ password }) {
  const rules = [
    { ok: password.length >= ((window.Auth && window.Auth.PW_MIN) || 8), label: `Mínimo ${(window.Auth && window.Auth.PW_MIN) || 8} caracteres` },
    { ok: /[a-z]/.test(password), label: 'Una minúscula' },
    { ok: /[A-Z]/.test(password), label: 'Una mayúscula' },
    { ok: /[0-9]/.test(password), label: 'Un número' },
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', marginTop: 8 }}>
      {rules.map((r, i) => (
        <span key={i} style={{ fontSize: 12, fontWeight: 700,
          color: r.ok ? 'var(--emerald-dark)' : 'var(--faint)' }}>
          {r.ok ? '✓' : '○'} {r.label}
        </span>
      ))}
    </div>
  );
}

window.LoginScreen = LoginScreen;
window.PasswordHints = PasswordHints;
