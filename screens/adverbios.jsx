// Sección Adverbios de Frecuencia — always, usually, often, sometimes, rarely, never

const ADV_FREQ = [
  { en: 'always',     es: 'siempre',       pct: 100, color: '#10B981', shadow: '#064E3B' },
  { en: 'usually',    es: 'usualmente',    pct: 90,  color: '#34D399', shadow: '#065F46' },
  { en: 'often',      es: 'a menudo',      pct: 70,  color: '#0EA5E9', shadow: '#075985' },
  { en: 'sometimes',  es: 'a veces',       pct: 50,  color: '#F59E0B', shadow: '#92400E' },
  { en: 'seldom',     es: 'pocas veces',   pct: 20,  color: '#F97316', shadow: '#9A3412' },
  { en: 'rarely',     es: 'rara vez',      pct: 10,  color: '#EF4444', shadow: '#991B1B' },
  { en: 'never',      es: 'nunca',         pct: 0,   color: '#7F1D1D', shadow: '#450A0A' },
];

function advSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}

function AdverbiosScreen() {
  const completed = window.isSectionCompleted ? window.isSectionCompleted('adverbios') : false;
  const [marked, setMarked] = React.useState(completed);
  function markDone() {
    if (window.markSectionCompleted) window.markSectionCompleted('adverbios');
    setMarked(true);
  }

  return (
    <div style={{ maxWidth: 1000 }}>
      <div style={{
        background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 22, boxShadow: '0 8px 24px rgba(139,92,246,0.32)',
        display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
      }}>
        <div style={{ fontSize: 42 }}>⏱️</div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Adverbios de Frecuencia</div>
          <div style={{ fontSize: 13.5, opacity: 0.92, fontWeight: 600, lineHeight: 1.55 }}>
            Palabras como <strong>always, usually, often, sometimes, rarely, never</strong> que indican
            con qué frecuencia ocurre algo.
          </div>
        </div>
        {marked && (
          <div style={{
            background: 'rgba(255,255,255,0.25)', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 900,
          }}>
            ✓ Aprendido
          </div>
        )}
      </div>

      {/* Escala visual */}
      <div style={{
        background: 'white', border: '2px solid var(--border)',
        borderRadius: 'var(--r-xl)', padding: '18px 22px', marginBottom: 16,
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--text)', marginBottom: 14 }}>
          📊 Escala de frecuencia (de + a –)
        </div>
        <div style={{ display: 'grid', gap: 7 }}>
          {ADV_FREQ.map(a => (
            <div key={a.en} style={{
              display: 'grid', gridTemplateColumns: '54px 130px 1fr 90px 30px',
              alignItems: 'center', gap: 10,
              padding: '7px 12px', background: '#F8FAFC',
              borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
            }}>
              <span style={{
                fontSize: 11, fontWeight: 900, color: 'white',
                background: a.color, padding: '3px 8px', borderRadius: 999, textAlign: 'center',
              }}>{a.pct}%</span>
              <span style={{ fontSize: 15, fontWeight: 900, color: a.color }}>{a.en}</span>
              <div style={{ height: 8, background: '#E5E7EB', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${a.pct}%`, height: '100%', background: a.color, borderRadius: 999 }}/>
              </div>
              <span style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic' }}>{a.es}</span>
              <button onClick={() => advSpeak(a.en)} title="Escuchar" style={{
                background: a.color, border: 'none', borderRadius: 5, width: 22, height: 22,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Regla de posición */}
      <div style={{
        background: '#EDE9FE', border: '2px solid #C4B5FD',
        borderRadius: 'var(--r-xl)', padding: '16px 20px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: '#5B21B6', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
          📌 ¿Dónde va el adverbio?
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 13.5, lineHeight: 1.75, color: '#5B21B6', fontWeight: 600 }}>
          <li>Va <strong>ANTES</strong> del verbo principal: <em>"I <u>always</u> drink coffee"</em></li>
          <li>Va <strong>DESPUÉS</strong> del verbo <em>to be</em>: <em>"She is <u>usually</u> happy"</em></li>
          <li>Va <strong>ENTRE</strong> el auxiliar y el verbo: <em>"I have <u>never</u> been to Paris"</em></li>
          <li><strong>Sometimes</strong> y <strong>usually</strong> pueden ir también al principio o al final: <em>"Sometimes I cook"</em></li>
        </ul>
      </div>

      {/* Ejemplos */}
      <div style={{
        background: 'white', border: '2px solid var(--border)',
        borderRadius: 'var(--r-xl)', padding: '18px 22px', marginBottom: 16,
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--text)', marginBottom: 12 }}>
          💬 Ejemplos prácticos
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            ['I always wake up at 7 AM.',              'Siempre me levanto a las 7 AM.'],
            ['She usually drinks tea in the morning.', 'Ella usualmente toma té por la mañana.'],
            ['We often go to the cinema on Fridays.',  'A menudo vamos al cine los viernes.'],
            ['Sometimes I cook dinner for my family.', 'A veces cocino la cena para mi familia.'],
            ['He rarely calls me.',                    'Él rara vez me llama.'],
            ["I have never been to Japan.",            'Nunca he estado en Japón.'],
          ].map(([en, es], i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px', background: '#FAFAFA', borderRadius: 'var(--r-md)',
              border: '1px solid var(--border)',
            }}>
              <button onClick={() => advSpeak(en)} title="Escuchar" style={{
                background: 'var(--indigo)', border: 'none', borderRadius: 5, width: 22, height: 22,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </button>
              <span style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--text)' }}>{en}</span>
              <span style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 'auto' }}>{es}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

window.AdverbiosScreen = AdverbiosScreen;
