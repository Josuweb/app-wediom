// support.jsx — Botón de soporte flotante con FAQ + email + WhatsApp.
// Componente: <SupportButton/>  (se monta una vez en App, no recibe props).
// Lee contacto desde APP_CONFIG.support.

const SUPPORT_FAQ = [
  {
    q: '¿Wediom English es gratis?',
    a: 'Sí. Por ahora todo el contenido de niveles A1 y A2 es gratuito. Más adelante habrá planes de pago con funciones extra, pero te avisaremos antes.',
  },
  {
    q: '¿Cómo se guarda mi progreso?',
    a: 'Tu progreso se guarda en tu cuenta y en este navegador. Si inicias sesión en otro dispositivo, se sincroniza automáticamente.',
  },
  {
    q: 'Olvidé mi contraseña, ¿qué hago?',
    a: 'Escríbenos por email o WhatsApp con el correo de tu cuenta y te ayudamos a recuperarla.',
  },
  {
    q: 'El audio (pronunciación) no suena',
    a: 'Verifica el volumen y que tu navegador permita audio. La función usa la voz del sistema; en algunos navegadores hay que tocar la pantalla una vez antes de que suene.',
  },
  {
    q: '¿Puedo usarlo desde el celular?',
    a: 'Sí, Wediom English funciona en celular, tablet y computadora desde el navegador.',
  },
];

function SupportButton() {
  const cfg = window.APP_CONFIG || {};
  const sup = cfg.support || {};
  const [open, setOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(null);

  const email = sup.email || '';
  const wa = (sup.whatsapp || '').replace(/[^0-9]/g, '');
  const waMsg = encodeURIComponent(sup.whatsappMessage || 'Hola, necesito ayuda.');
  const waLink = wa ? `https://wa.me/${wa}?text=${waMsg}` : '';
  const mailLink = email
    ? `mailto:${email}?subject=${encodeURIComponent('Soporte - ' + ((cfg.brand && cfg.brand.name) || 'Wediom English'))}`
    : '';

  function track(ch) { window.Analytics && window.Analytics.trackEvent('support_click', { channel: ch }); }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Soporte y ayuda"
        title="¿Necesitas ayuda?"
        style={{
          position: 'fixed', right: 18, bottom: 18, zIndex: 2147483000,
          width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'var(--indigo)', color: 'white', fontSize: 24,
          boxShadow: '0 6px 20px rgba(99,102,241,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
        {open ? '✕' : '💬'}
      </button>

      {/* Panel */}
      {open && (
        <div style={{
          position: 'fixed', right: 18, bottom: 84, zIndex: 2147483000,
          width: 'min(360px, calc(100vw - 36px))', maxHeight: 'calc(100vh - 120px)',
          background: 'var(--surface)', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ background: 'var(--indigo)', color: 'white', padding: '16px 18px' }}>
            <div style={{ fontWeight: 900, fontSize: 17 }}>¿Necesitas ayuda? 🦉</div>
            <div style={{ fontSize: 13, opacity: 0.9 }}>Revisa las preguntas frecuentes o escríbenos.</div>
          </div>

          <div style={{ padding: '12px 16px', overflowY: 'auto' }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase',
                          letterSpacing: '0.06em', margin: '4px 0 8px' }}>Preguntas frecuentes</div>
            {SUPPORT_FAQ.map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '10px 0', fontFamily: 'var(--font)', fontWeight: 800, fontSize: 14,
                  color: 'var(--text)', display: 'flex', justifyContent: 'space-between', gap: 8,
                }}>
                  <span>{item.q}</span>
                  <span style={{ color: 'var(--faint)' }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p style={{ padding: '0 0 12px', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)', display: 'flex',
                        flexDirection: 'column', gap: 8 }}>
            {waLink && (
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp')}
                 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          padding: '11px', borderRadius: 'var(--r-md)', textDecoration: 'none',
                          background: '#25D366', color: 'white', fontWeight: 900, fontSize: 14.5 }}>
                <span style={{ fontSize: 18 }}>📱</span> Escríbenos por WhatsApp
              </a>
            )}
            {mailLink && (
              <a href={mailLink} onClick={() => track('email')}
                 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          padding: '11px', borderRadius: 'var(--r-md)', textDecoration: 'none',
                          background: 'var(--indigo-light)', color: 'var(--indigo-dark)', fontWeight: 900,
                          fontSize: 14.5, border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 18 }}>✉️</span> Enviar un email
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

window.SupportButton = SupportButton;
