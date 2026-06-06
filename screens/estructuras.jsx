// Estructuras esenciales — There is / There are + Have / Has.
// Dos pills con teoría, estructura, usos y ejemplos para cada una.

const EST_TOPICS = [
  {
    id: 'there',
    word: 'There is / There are',
    short: '"hay" — describe lo que existe en un lugar',
    icon: '📦',
    color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' },
    theory: 'Se traduce como "hay" en español. Sirve para indicar que algo existe, está presente o disponible en un lugar. Se usa "there is" con singular y "there are" con plural.',
    forms: [
      { type: 'Afirmativa singular',  formula: 'There is + a/an + sustantivo singular', example: 'There is a cat on the sofa.',          accent: '#10B981' },
      { type: 'Afirmativa plural',    formula: 'There are + sustantivo plural',          example: 'There are three books on the table.', accent: '#10B981' },
      { type: 'Negativa singular',    formula: "There isn't + a/an + singular",          example: "There isn't a problem.",              accent: '#E11D48' },
      { type: 'Negativa plural',      formula: "There aren't + any + plural",            example: "There aren't any chairs.",            accent: '#E11D48' },
      { type: 'Pregunta singular',    formula: 'Is there + a/an + singular?',            example: 'Is there a hospital near here?',      accent: '#F59E0B' },
      { type: 'Pregunta plural',      formula: 'Are there + any + plural?',              example: 'Are there any messages for me?',      accent: '#F59E0B' },
    ],
    uses: [
      { meaning: 'Describir un lugar',       en: 'There are many parks in my city.',           es: 'Hay muchos parques en mi ciudad.' },
      { meaning: 'Contar cosas',             en: 'There is one apple in the basket.',          es: 'Hay una manzana en la cesta.' },
      { meaning: 'Mencionar algo que existe',en: 'There is a problem with my computer.',       es: 'Hay un problema con mi computadora.' },
      { meaning: 'Preguntar por algo',       en: 'Is there a bathroom here?',                  es: '¿Hay un baño aquí?' },
      { meaning: 'Negar la existencia',      en: "There aren't any students in the classroom.", es: 'No hay ningún estudiante en el salón.' },
    ],
    tip: 'No confundas con "It is / They are" — esos se traducen como "es / son". "There is / are" siempre significa "hay".',
  },

  {
    id: 'have',
    word: 'Have / Has',
    short: '"tener" — posesión, relaciones y características',
    icon: '🤝',
    color: { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4', solid: '#EC4899' },
    theory: 'Significa "tener". Usa "have" con I / you / we / they y "has" con he / she / it. Para negar y preguntar usa "do / does" como auxiliar.',
    forms: [
      { type: 'Afirmativa (I/you/we/they)', formula: 'Sujeto + have + objeto',           example: 'I have two brothers.',         accent: '#10B981' },
      { type: 'Afirmativa (he/she/it)',     formula: 'Sujeto + has + objeto',            example: 'She has a new car.',           accent: '#10B981' },
      { type: 'Negativa (I/you/we/they)',   formula: "Sujeto + don't have + objeto",     example: "I don't have time.",           accent: '#E11D48' },
      { type: 'Negativa (he/she/it)',       formula: "Sujeto + doesn't have + objeto",   example: "He doesn't have money.",       accent: '#E11D48' },
      { type: 'Pregunta (I/you/we/they)',   formula: 'Do + sujeto + have + objeto?',     example: 'Do you have a pen?',           accent: '#F59E0B' },
      { type: 'Pregunta (he/she/it)',       formula: 'Does + sujeto + have + objeto?',   example: 'Does she have a brother?',     accent: '#F59E0B' },
    ],
    uses: [
      { meaning: 'Posesión',              en: 'I have a new phone.',          es: 'Tengo un teléfono nuevo.' },
      { meaning: 'Relaciones familiares', en: 'She has two sisters.',         es: 'Ella tiene dos hermanas.' },
      { meaning: 'Características físicas', en: 'He has blue eyes.',           es: 'Él tiene ojos azules.' },
      { meaning: 'Estados físicos',       en: 'I have a headache.',           es: 'Tengo dolor de cabeza.' },
      { meaning: 'Animales / mascotas',   en: 'My family has a dog and a cat.', es: 'Mi familia tiene un perro y un gato.' },
    ],
    tip: 'En negativos y preguntas se usa "do/does + have", NO "haven\'t". Ejemplo: "Do you have a car?" ✓ (no "Have you a car?").',
  },
];

function estSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}

function EstructurasScreen() {
  const [activeId, setActiveId] = React.useState('there');
  const t = EST_TOPICS.find(x => x.id === activeId);

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #F43F5E, #BE123C)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 22, boxShadow: '0 8px 24px rgba(244,63,94,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 38 }}>📦</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Estructuras esenciales</div>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600, lineHeight: 1.55 }}>
              Dos pilares del inglés básico: <strong>There is / There are</strong> ("hay") y
              <strong> Have / Has</strong> ("tener"). Teoría, estructura, usos y ejemplos.
            </div>
          </div>
        </div>
      </div>

      {/* Pills selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {EST_TOPICS.map(it => {
          const sel = it.id === activeId;
          return (
            <button key={it.id} onClick={() => setActiveId(it.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 800, fontSize: 14,
              padding: '10px 18px', borderRadius: 999,
              background: sel ? it.color.solid : 'white',
              color: sel ? 'white' : it.color.text,
              border: `2px solid ${sel ? it.color.solid : it.color.border}`,
              boxShadow: sel ? `0 3px 0 ${it.color.text}33` : 'none',
              transition: 'all 0.12s',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span>{it.icon}</span>
              {it.word}
            </button>
          );
        })}
      </div>

      {/* Active topic card */}
      <div style={{
        background: 'white', border: `2px solid ${t.color.border}`,
        borderRadius: 'var(--r-2xl)', padding: '28px 30px', boxShadow: 'var(--shadow-sm)',
      }}>
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18, paddingBottom: 18, borderBottom: `1.5px dashed ${t.color.border}` }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, fontSize: 28,
            background: t.color.bg, border: `2px solid ${t.color.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {t.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: t.color.text, lineHeight: 1.1, letterSpacing: '-0.3px' }}>
              {t.word}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: t.color.text, opacity: 0.75, marginTop: 4 }}>
              {t.short}
            </div>
          </div>
        </div>

        {/* Teoría */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: t.color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            📖 Teoría
          </div>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--text)', fontWeight: 600 }}>
            {t.theory}
          </p>
        </div>

        {/* Estructura */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: t.color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            🧩 Estructura
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10,
          }}>
            {t.forms.map((f, i) => (
              <div key={i} style={{
                background: 'var(--bg)', border: '1.5px solid var(--border)',
                borderRadius: 'var(--r-lg)', padding: '10px 14px',
              }}>
                <div style={{
                  display: 'inline-block', background: f.accent, color: 'white',
                  fontSize: 10.5, fontWeight: 900, letterSpacing: '0.05em',
                  padding: '3px 8px', borderRadius: 6, marginBottom: 6,
                  textTransform: 'uppercase',
                }}>
                  {f.type}
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>
                  {f.formula}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <button onClick={() => estSpeak(f.example)} title="Escuchar" style={{
                    background: t.color.solid, border: 'none', borderRadius: 5,
                    width: 22, height: 22, cursor: 'pointer', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </button>
                  <span style={{ fontSize: 13, fontWeight: 700, color: t.color.text, fontStyle: 'italic' }}>
                    "{f.example}"
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usos */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: t.color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            🎯 Usos
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            {t.uses.map((u, i) => (
              <div key={i} style={{
                background: t.color.bg, border: `1.5px solid ${t.color.border}`,
                borderRadius: 'var(--r-lg)', padding: '12px 16px',
              }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: t.color.text, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  {u.meaning}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                  <button onClick={() => estSpeak(u.en)} title="Escuchar" style={{
                    background: t.color.solid, border: 'none', borderRadius: 6, width: 24, height: 24,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </button>
                  <span style={{ fontSize: 15, fontWeight: 800, color: t.color.text }}>{u.en}</span>
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 32 }}>
                  → {u.es}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        {t.tip && (
          <div style={{
            background: '#FEF3C7', border: '1.5px solid #FCD34D',
            borderRadius: 'var(--r-lg)', padding: '12px 16px',
            fontSize: 13, color: '#78350F', fontWeight: 600, lineHeight: 1.55,
          }}>
            💡 <strong>Tip:</strong> {t.tip}
          </div>
        )}
      </div>
    </div>
  );
}

window.EstructurasScreen = EstructurasScreen;
