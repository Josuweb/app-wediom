// Sección de Pronombres — cuadro comparativo de los 5 tipos.

const PR_ROWS = [
  { person: '1ª sing',     sujeto: 'I',    sujetoEs: 'yo',
    objeto: 'me',  objetoEs: 'me',
    dem: { en: 'this',  es: 'este / esta / esto' },
    adjPos: 'my',   adjPosEs: 'mi',
    pronPos: 'mine', pronPosEs: 'mío / mía' },
  { person: '2ª sing',     sujeto: 'you',  sujetoEs: 'tú',
    objeto: 'you', objetoEs: 'te',
    dem: null,
    adjPos: 'your', adjPosEs: 'tu',
    pronPos: 'yours', pronPosEs: 'tuyo / tuya' },
  { person: '3ª sing (M)', sujeto: 'he',   sujetoEs: 'él',
    objeto: 'him', objetoEs: 'lo / le',
    dem: null,
    adjPos: 'his',  adjPosEs: 'su',
    pronPos: 'his',   pronPosEs: 'suyo (de él)' },
  { person: '3ª sing (F)', sujeto: 'she',  sujetoEs: 'ella',
    objeto: 'her', objetoEs: 'la / le',
    dem: null,
    adjPos: 'her',  adjPosEs: 'su',
    pronPos: 'hers',  pronPosEs: 'suya (de ella)' },
  { person: '3ª sing (N)', sujeto: 'it',   sujetoEs: 'ello / eso',
    objeto: 'it',  objetoEs: 'lo',
    dem: { en: 'that', es: 'ese / aquel / eso' },
    adjPos: 'its',  adjPosEs: 'su',
    pronPos: 'its',   pronPosEs: 'suyo (de ello)' },
  { person: '1ª pl',       sujeto: 'we',   sujetoEs: 'nosotros / nosotras',
    objeto: 'us',  objetoEs: 'nos',
    dem: { en: 'these', es: 'estos / estas' },
    adjPos: 'our',  adjPosEs: 'nuestro / nuestra',
    pronPos: 'ours',  pronPosEs: 'nuestro / nuestra' },
  { person: '2ª pl',       sujeto: 'you',  sujetoEs: 'ustedes / vosotros',
    objeto: 'you', objetoEs: 'los / las',
    dem: null,
    adjPos: 'your', adjPosEs: 'su / vuestro',
    pronPos: 'yours', pronPosEs: 'suyo / vuestro' },
  { person: '3ª pl',       sujeto: 'they', sujetoEs: 'ellos / ellas',
    objeto: 'them', objetoEs: 'los / las / les',
    dem: { en: 'those', es: 'esos / aquellos' },
    adjPos: 'their', adjPosEs: 'su',
    pronPos: 'theirs', pronPosEs: 'suyo / suya (de ellos)' },
];

const PR_TYPE_INFO = [
  {
    id: 'sujeto',
    label: 'Pronombre de sujeto',
    icon: '👤',
    color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD' },
    desc: 'Realiza la acción del verbo. Va antes del verbo: I work, she eats, they play.',
  },
  {
    id: 'objeto',
    label: 'Pronombre de objeto',
    icon: '🎯',
    color: { bg: '#FEE2E2', text: '#7F1D1D', border: '#FCA5A5' },
    desc: 'Recibe la acción del verbo o va después de una preposición: She calls me, give it to him.',
  },
  {
    id: 'dem',
    label: 'Pronombre demostrativo',
    icon: '👉',
    color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD' },
    desc: 'Señala personas o cosas según cercanía (this/that) y número (these/those). No varía por persona, sino por distancia y cantidad.',
  },
  {
    id: 'adjPos',
    label: 'Adjetivo posesivo',
    icon: '🏷️',
    color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D' },
    desc: 'Acompaña a un sustantivo para indicar posesión: my book, your car, their house.',
  },
  {
    id: 'pronPos',
    label: 'Pronombre posesivo',
    icon: '🔑',
    color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7' },
    desc: 'Reemplaza al sustantivo. No lleva sustantivo después: That book is mine, this car is hers.',
  },
];

function prSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function usePrNarrow(maxPx) {
  const [narrow, setNarrow] = React.useState(() =>
    typeof window !== 'undefined' && window.matchMedia(`(max-width: ${maxPx}px)`).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxPx}px)`);
    const h = (e) => setNarrow(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [maxPx]);
  return narrow;
}

// ── Celda con palabra inglesa + traducción ──────────────────────────────────
function PrCell({ en, es, color }) {
  if (!en) {
    return <span style={{ fontSize: 13, color: 'var(--faint)', fontStyle: 'italic' }}>—</span>;
  }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button onClick={() => prSpeak(en)} title={`Escuchar "${en}"`} style={{
          background: color.border, border: 'none', borderRadius: 4,
          width: 18, height: 18, cursor: 'pointer', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: color.text,
        }}>
          <svg width="9" height="9" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
        <span style={{ fontSize: 14, fontWeight: 900, color: color.text }}>{en}</span>
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 24, lineHeight: 1.2 }}>
        {es}
      </div>
    </div>
  );
}

function PronombresScreen() {
  const narrow = usePrNarrow(820);
  const completed = window.isSectionCompleted ? window.isSectionCompleted('pronombres') : false;
  const [marked, setMarked] = React.useState(completed);
  function markDone() {
    if (window.markSectionCompleted) window.markSectionCompleted('pronombres');
    setMarked(true);
  }

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #F97316, #C2410C)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 20, boxShadow: '0 8px 24px rgba(249,115,22,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 38 }}>👥</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Pronombres</div>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600, lineHeight: 1.5 }}>
              Cuadro comparativo de los <strong>5 tipos de pronombres</strong> en inglés con
              su traducción al español. Toca 🔊 en cualquier celda para escuchar la pronunciación.
            </div>
          </div>
        </div>
      </div>

      {/* Tabla principal */}
      <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        📊 Tabla comparativa
      </div>

      {!narrow ? <PrWideTable/> : <PrNarrowStack/>}

      {/* Nota demostrativos */}
      <div style={{
        background: '#EDE9FE', border: '1.5px solid #C4B5FD',
        borderRadius: 'var(--r-lg)', padding: '12px 16px',
        marginTop: 14, marginBottom: 22, fontSize: 12.5, lineHeight: 1.55,
        color: '#5B21B6', fontWeight: 600,
      }}>
        💡 <strong>Nota sobre demostrativos:</strong> los demostrativos no cambian con la
        persona (yo, tú, él…) sino con la <strong>cercanía</strong> (cerca/lejos) y el
        <strong> número</strong> (singular/plural). Por eso solo aparecen llenas las filas
        que corresponden a singular cerca (this), plural cerca (these), singular lejos
        (that) y plural lejos (those).
      </div>

      {/* Explicación por tipo */}
      <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        📖 ¿Qué hace cada tipo?
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 10, marginBottom: 22,
      }}>
        {PR_TYPE_INFO.map(t => (
          <div key={t.id} style={{
            background: t.color.bg, border: `1.5px solid ${t.color.border}`,
            borderRadius: 'var(--r-lg)', padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 20 }}>{t.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 900, color: t.color.text }}>{t.label}</span>
            </div>
            <div style={{ fontSize: 12.5, lineHeight: 1.5, color: t.color.text, fontWeight: 600 }}>
              {t.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Mini-tabla demostrativos */}
      <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        👉 Pronombres demostrativos en detalle
      </div>
      <div style={{
        background: 'white', border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '110px 1fr 1fr',
          background: 'var(--bg)', padding: '10px 14px', gap: 12,
          borderBottom: '1.5px solid var(--border)',
          fontSize: 11, fontWeight: 900, color: 'var(--faint)',
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>
          <div></div>
          <div>Cerca (this / these)</div>
          <div>Lejos (that / those)</div>
        </div>
        {[
          { lbl: 'Singular', cerca: { en: 'this',  es: 'este / esta / esto' },  lejos: { en: 'that',  es: 'ese / aquel / eso' } },
          { lbl: 'Plural',   cerca: { en: 'these', es: 'estos / estas' },        lejos: { en: 'those', es: 'esos / aquellos' } },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '110px 1fr 1fr',
            padding: '12px 14px', gap: 12, alignItems: 'center',
            borderBottom: i === 0 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: 'var(--muted)', textTransform: 'uppercase' }}>
              {r.lbl}
            </div>
            <PrCell en={r.cerca.en} es={r.cerca.es} color={{ text: '#5B21B6', border: '#C4B5FD' }}/>
            <PrCell en={r.lejos.en} es={r.lejos.es} color={{ text: '#5B21B6', border: '#C4B5FD' }}/>
          </div>
        ))}
      </div>

    </div>
  );
}

function PrWideTable() {
  const cols = 'minmax(95px, 0.7fr) 1.1fr 1.1fr 1.2fr 1.1fr 1.2fr';
  const headers = [
    { lbl: 'Persona',          color: null },
    { lbl: 'Sujeto',           color: PR_TYPE_INFO[0].color },
    { lbl: 'Objeto',           color: PR_TYPE_INFO[1].color },
    { lbl: 'Demostrativo',     color: PR_TYPE_INFO[2].color },
    { lbl: 'Adj. Posesivo',    color: PR_TYPE_INFO[3].color },
    { lbl: 'Pron. Posesivo',   color: PR_TYPE_INFO[4].color },
  ];
  return (
    <div style={{
      background: 'white', border: '1px solid var(--border)',
      borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
    }}>
      {/* Header */}
      <div style={{
        display: 'grid', gridTemplateColumns: cols,
        background: 'var(--bg)', padding: '10px 14px', gap: 12,
        borderBottom: '1.5px solid var(--border)',
      }}>
        {headers.map(h => (
          <div key={h.lbl} style={{
            fontSize: 11, fontWeight: 900,
            color: h.color ? h.color.text : 'var(--faint)',
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {h.lbl}
          </div>
        ))}
      </div>
      {PR_ROWS.map((r, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: cols,
          padding: '12px 14px', gap: 12, alignItems: 'center',
          borderBottom: i < PR_ROWS.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {r.person}
          </div>
          <PrCell en={r.sujeto}  es={r.sujetoEs}  color={PR_TYPE_INFO[0].color}/>
          <PrCell en={r.objeto}  es={r.objetoEs}  color={PR_TYPE_INFO[1].color}/>
          <PrCell en={r.dem?.en} es={r.dem?.es}   color={PR_TYPE_INFO[2].color}/>
          <PrCell en={r.adjPos}  es={r.adjPosEs}  color={PR_TYPE_INFO[3].color}/>
          <PrCell en={r.pronPos} es={r.pronPosEs} color={PR_TYPE_INFO[4].color}/>
        </div>
      ))}
    </div>
  );
}

function PrNarrowStack() {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {PR_ROWS.map((r, i) => (
        <div key={i} style={{
          background: 'white', border: '1.5px solid var(--border)',
          borderRadius: 'var(--r-lg)', padding: '12px 14px',
        }}>
          <div style={{
            fontSize: 11.5, fontWeight: 900, color: 'var(--muted)',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10,
          }}>
            {r.person}
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <PrRowItem type={PR_TYPE_INFO[0]} en={r.sujeto}  es={r.sujetoEs}/>
            <PrRowItem type={PR_TYPE_INFO[1]} en={r.objeto}  es={r.objetoEs}/>
            <PrRowItem type={PR_TYPE_INFO[2]} en={r.dem?.en} es={r.dem?.es}/>
            <PrRowItem type={PR_TYPE_INFO[3]} en={r.adjPos}  es={r.adjPosEs}/>
            <PrRowItem type={PR_TYPE_INFO[4]} en={r.pronPos} es={r.pronPosEs}/>
          </div>
        </div>
      ))}
    </div>
  );
}

function PrRowItem({ type, en, es }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '110px 1fr', gap: 10,
      alignItems: 'center',
      background: type.color.bg, border: `1px solid ${type.color.border}`,
      borderRadius: 'var(--r-md)', padding: '8px 10px',
    }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: type.color.text, display: 'flex', alignItems: 'center', gap: 5 }}>
        <span>{type.icon}</span>
        <span>{type.label.replace('Pronombre de ', '').replace('Pronombre ', '').replace('Adjetivo ', 'Adj. ')}</span>
      </div>
      <PrCell en={en} es={es} color={type.color}/>
    </div>
  );
}

window.PronombresScreen = PronombresScreen;
