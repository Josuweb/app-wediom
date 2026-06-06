// Sección Artículos — a / an / the. Teoría compacta + botón de "Marcar aprendido"

const ART_EXAMPLES = {
  a:   [['a cat', 'un gato'], ['a dog', 'un perro'], ['a book', 'un libro'], ['a university', 'una universidad (suena "yu")']],
  an:  [['an apple', 'una manzana'], ['an hour', 'una hora (h muda)'], ['an umbrella', 'un paraguas'], ['an honest man', 'un hombre honesto']],
  the: [['the sun', 'el sol'], ['the book I bought', 'el libro que compré'], ['the United States', 'los EE.UU.'], ['the best', 'el mejor']],
};

function artSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}

function ArticulosScreen() {
  const completed = window.isSectionCompleted ? window.isSectionCompleted('articulos') : false;
  const [marked, setMarked] = React.useState(completed);
  function markDone() {
    if (window.markSectionCompleted) window.markSectionCompleted('articulos');
    setMarked(true);
  }

  return (
    <div style={{ maxWidth: 1000 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #A855F7, #7E22CE)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 22, boxShadow: '0 8px 24px rgba(168,85,247,0.32)',
        display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
      }}>
        <div style={{ fontSize: 42 }}>📰</div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Artículos</div>
          <div style={{ fontSize: 13.5, opacity: 0.92, fontWeight: 600, lineHeight: 1.55 }}>
            Tres palabras pequeñas que se usan TODO el tiempo:
            <strong> a / an </strong> (un, una) y <strong>the</strong> (el, la, los, las).
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

      {/* Regla principal */}
      <div style={{
        background: '#D1FAE5', border: '2px solid #6EE7B7',
        borderRadius: 'var(--r-xl)', padding: '16px 20px', marginBottom: 20,
      }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: '#064E3B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
          🎯 Regla rápida
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 14, lineHeight: 1.7, color: '#064E3B', fontWeight: 600 }}>
          <li><strong>a</strong> → antes de sonido de CONSONANTE: <em>a cat, a dog, a university</em> (suena "yu")</li>
          <li><strong>an</strong> → antes de sonido de VOCAL: <em>an apple, an hour</em> (h muda)</li>
          <li><strong>the</strong> → cuando ya se sabe DE QUÉ hablamos (algo específico o único)</li>
        </ul>
      </div>

      {/* Tabla de los 3 */}
      <div style={{
        display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', marginBottom: 24,
      }}>
        <ArtCard
          title="A" color="#10B981" border="#6EE7B7" bg="#D1FAE5"
          subtitle="un / una"
          rule="Antes de sonido de CONSONANTE."
          examples={ART_EXAMPLES.a}/>
        <ArtCard
          title="An" color="#0EA5E9" border="#7DD3FC" bg="#E0F2FE"
          subtitle="un / una"
          rule="Antes de sonido de VOCAL (a, e, i, o, u)."
          examples={ART_EXAMPLES.an}/>
        <ArtCard
          title="The" color="#7C3AED" border="#C4B5FD" bg="#EDE9FE"
          subtitle="el / la / los / las"
          rule="Cuando hablamos de algo ESPECÍFICO, único o ya conocido."
          examples={ART_EXAMPLES.the}/>
      </div>

      {/* Cuándo NO usar artículo */}
      <div style={{
        background: 'white', border: '2px solid var(--border-strong)',
        borderRadius: 'var(--r-xl)', padding: '18px 22px', marginBottom: 24,
      }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--text)', marginBottom: 10 }}>
          🚫 Cuándo NO usar artículo
        </div>
        <ul style={{ margin: 0, paddingLeft: 22, fontSize: 13.5, lineHeight: 1.65, color: 'var(--muted)', fontWeight: 600 }}>
          <li>Sustantivos en plural cuando hablas en general: <em>"Dogs are friendly"</em> (los perros son amistosos)</li>
          <li>Sustantivos incontables generales: <em>"Water is important"</em> (el agua es importante)</li>
          <li>Nombres propios y países (con excepciones): <em>"Mexico is beautiful"</em>, <em>"I live in Madrid"</em></li>
          <li>Idiomas, deportes, comidas: <em>"I speak English"</em>, <em>"I play soccer"</em>, <em>"breakfast at 8"</em></li>
        </ul>
      </div>

    </div>
  );
}

function ArtCard({ title, color, border, bg, subtitle, rule, examples }) {
  return (
    <div style={{
      background: 'white', border: `2px solid ${border}`,
      borderRadius: 'var(--r-xl)', padding: '18px 20px',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'baseline', gap: 8,
        background: bg, padding: '6px 14px', borderRadius: 'var(--r-md)', marginBottom: 10,
      }}>
        <span style={{ fontSize: 28, fontWeight: 900, color }}>{title}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color, opacity: 0.75 }}>{subtitle}</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', lineHeight: 1.5, marginBottom: 12 }}>
        {rule}
      </div>
      <div style={{ display: 'grid', gap: 6 }}>
        {examples.map(([en, es], i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 10px', background: bg, borderRadius: 'var(--r-md)',
          }}>
            <button onClick={() => artSpeak(en)} title="Escuchar" style={{
              background: color, border: 'none', borderRadius: 5, width: 22, height: 22,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <span style={{ fontSize: 13.5, fontWeight: 800, color }}>{en}</span>
            <span style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 'auto' }}>{es}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.ArticulosScreen = ArticulosScreen;
