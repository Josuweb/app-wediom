// Repaso — construye una oración base y conjúgala en los 7 tiempos verbales

// ── Pronombres (incluyen conjugación auxiliar en inglés + español) ──────────
const REPASO_PRONOUNS = [
  { en: 'I',    es: 'Yo',       conj: 0, be: 'am',  wasWere: 'was',  estar: 'estoy',    estarPast: 'estaba',     estarFut: 'estaré',    ir: 'voy a'   },
  { en: 'You',  es: 'Tú',       conj: 1, be: 'are', wasWere: 'were', estar: 'estás',    estarPast: 'estabas',    estarFut: 'estarás',   ir: 'vas a'   },
  { en: 'He',   es: 'Él',       conj: 2, be: 'is',  wasWere: 'was',  estar: 'está',     estarPast: 'estaba',     estarFut: 'estará',    ir: 'va a'    },
  { en: 'She',  es: 'Ella',     conj: 2, be: 'is',  wasWere: 'was',  estar: 'está',     estarPast: 'estaba',     estarFut: 'estará',    ir: 'va a'    },
  { en: 'We',   es: 'Nosotros', conj: 3, be: 'are', wasWere: 'were', estar: 'estamos',  estarPast: 'estábamos',  estarFut: 'estaremos', ir: 'vamos a' },
  { en: 'They', es: 'Ellos',    conj: 4, be: 'are', wasWere: 'were', estar: 'están',    estarPast: 'estaban',    estarFut: 'estarán',   ir: 'van a'   },
];

// ── Verbos: índice de conjugación es { 0:yo, 1:tú, 2:él/ella, 3:nosotros, 4:ellos } ──
const REPASO_VERBS = [
  {
    id: 'play-soccer', emoji: '⚽',
    base:'play', third:'plays', past:'played', ing:'playing', complement:'soccer',
    inf:'jugar', ger:'jugando', complementES:'fútbol',
    simple:     ['juego','juegas','juega','jugamos','juegan'],
    pastSimple: ['jugué','jugaste','jugó','jugamos','jugaron'],
    future:     ['jugaré','jugarás','jugará','jugaremos','jugarán'],
  },
  {
    id: 'eat-pizza', emoji: '🍕',
    base:'eat', third:'eats', past:'ate', ing:'eating', complement:'pizza',
    inf:'comer', ger:'comiendo', complementES:'pizza',
    simple:     ['como','comes','come','comemos','comen'],
    pastSimple: ['comí','comiste','comió','comimos','comieron'],
    future:     ['comeré','comerás','comerá','comeremos','comerán'],
  },
  {
    id: 'study-english', emoji: '📚',
    base:'study', third:'studies', past:'studied', ing:'studying', complement:'English',
    inf:'estudiar', ger:'estudiando', complementES:'inglés',
    simple:     ['estudio','estudias','estudia','estudiamos','estudian'],
    pastSimple: ['estudié','estudiaste','estudió','estudiamos','estudiaron'],
    future:     ['estudiaré','estudiarás','estudiará','estudiaremos','estudiarán'],
  },
  {
    id: 'read-book', emoji: '📖',
    base:'read', third:'reads', past:'read', ing:'reading', complement:'a book',
    inf:'leer', ger:'leyendo', complementES:'un libro',
    simple:     ['leo','lees','lee','leemos','leen'],
    pastSimple: ['leí','leíste','leyó','leímos','leyeron'],
    future:     ['leeré','leerás','leerá','leeremos','leerán'],
  },
  {
    id: 'drink-coffee', emoji: '☕',
    base:'drink', third:'drinks', past:'drank', ing:'drinking', complement:'coffee',
    inf:'tomar', ger:'tomando', complementES:'café',
    simple:     ['tomo','tomas','toma','tomamos','toman'],
    pastSimple: ['tomé','tomaste','tomó','tomamos','tomaron'],
    future:     ['tomaré','tomarás','tomará','tomaremos','tomarán'],
  },
  {
    id: 'watch-movie', emoji: '🎬',
    base:'watch', third:'watches', past:'watched', ing:'watching', complement:'a movie',
    inf:'ver', ger:'viendo', complementES:'una película',
    simple:     ['veo','ves','ve','vemos','ven'],
    pastSimple: ['vi','viste','vio','vimos','vieron'],
    future:     ['veré','verás','verá','veremos','verán'],
  },
  {
    id: 'write-letter', emoji: '✉️',
    base:'write', third:'writes', past:'wrote', ing:'writing', complement:'a letter',
    inf:'escribir', ger:'escribiendo', complementES:'una carta',
    simple:     ['escribo','escribes','escribe','escribimos','escriben'],
    pastSimple: ['escribí','escribiste','escribió','escribimos','escribieron'],
    future:     ['escribiré','escribirás','escribirá','escribiremos','escribirán'],
  },
  {
    id: 'visit-family', emoji: '🏡',
    base:'visit', third:'visits', past:'visited', ing:'visiting', complement:'my family',
    inf:'visitar', ger:'visitando', complementES:'a mi familia',
    simple:     ['visito','visitas','visita','visitamos','visitan'],
    pastSimple: ['visité','visitaste','visitó','visitamos','visitaron'],
    future:     ['visitaré','visitarás','visitará','visitaremos','visitarán'],
  },
];

// ── Definiciones de los 7 tiempos verbales ──────────────────────────────────
const REPASO_TENSES = [
  {
    key: 'pres-simple', name: 'Presente Simple', icon: '☀️',
    color: { bg:'#FEF9C3', text:'#A16207', border:'#FDE047', solid:'#EAB308' },
    aux: 'do / does', auxEs: 'Verbo conjugado', auxEsItalic: true,
    structure: {
      affirmative: 'Subject + verb (+ -s / -es para He/She/It)',
      negative:    "Subject + do/does + not + verb (don't / doesn't)",
      question:    'Do/Does + subject + verb?',
    },
    tip: 'Acciones habituales, rutinas o hechos generales. Pistas: every day, usually, always.',
    buildEN: (p, v) => `${p.en} ${p.conj === 2 ? v.third : v.base} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${v.simple[p.conj]} ${v.complementES}.`,
  },
  {
    key: 'pres-cont', name: 'Presente Continuo', icon: '⏳',
    color: { bg:'#CFFAFE', text:'#0E7490', border:'#67E8F9', solid:'#06B6D4' },
    aux: 'am / is / are', auxEs: 'estoy / estás / está', auxEsItalic: false,
    structure: {
      affirmative: 'Subject + am/is/are + verb-ing',
      negative:    'Subject + am/is/are + not + verb-ing',
      question:    'Am/Is/Are + subject + verb-ing?',
    },
    tip: 'Acciones que están pasando ahora mismo. Pistas: now, right now, at the moment.',
    buildEN: (p, v) => `${p.en} ${p.be} ${v.ing} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${p.estar} ${v.ger} ${v.complementES}.`,
  },
  {
    key: 'fut-simple', name: 'Futuro Simple', icon: '🚀',
    color: { bg:'#FCE7F3', text:'#BE185D', border:'#F9A8D4', solid:'#EC4899' },
    aux: 'will', auxEs: 'Verbo en futuro', auxEsItalic: true,
    structure: {
      affirmative: 'Subject + will + verb',
      negative:    "Subject + will + not + verb (won't)",
      question:    'Will + subject + verb?',
    },
    tip: 'Decisiones espontáneas, promesas y predicciones sin evidencia. Pistas: tomorrow, next week, probably.',
    buildEN: (p, v) => `${p.en} will ${v.base} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${v.future[p.conj]} ${v.complementES}.`,
  },
  {
    key: 'fut-cont', name: 'Futuro Continuo', icon: '🛰️',
    color: { bg:'#DBEAFE', text:'#1D4ED8', border:'#93C5FD', solid:'#3B82F6' },
    aux: 'will be', auxEs: 'estaré / estarás / estará', auxEsItalic: false,
    structure: {
      affirmative: 'Subject + will be + verb-ing',
      negative:    "Subject + will not be + verb-ing (won't be)",
      question:    'Will + subject + be + verb-ing?',
    },
    tip: 'Acciones que estarán en progreso en un momento futuro. Pistas: this time tomorrow, at 8 pm.',
    buildEN: (p, v) => `${p.en} will be ${v.ing} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${p.estarFut} ${v.ger} ${v.complementES}.`,
  },
  {
    key: 'going-to', name: 'Futuro · Going to', icon: '🎯',
    color: { bg:'#ECFCCB', text:'#4D7C0F', border:'#BEF264', solid:'#84CC16' },
    aux: 'going to', auxEs: 'voy a / vas a / va a', auxEsItalic: false,
    structure: {
      affirmative: 'Subject + am/is/are + going to + verb',
      negative:    'Subject + am/is/are + not + going to + verb',
      question:    'Am/Is/Are + subject + going to + verb?',
    },
    tip: 'Planes ya decididos o predicciones con evidencia visible. Pistas: planned, look at those clouds.',
    buildEN: (p, v) => `${p.en} ${p.be} going to ${v.base} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${p.ir} ${v.inf} ${v.complementES}.`,
  },
  {
    key: 'past-simple', name: 'Pasado Simple', icon: '🕰️',
    color: { bg:'#FEE2E2', text:'#991B1B', border:'#FCA5A5', solid:'#DC2626' },
    aux: 'did', auxEs: 'Verbo en pasado', auxEsItalic: true,
    structure: {
      affirmative: 'Subject + verb-ed (o forma irregular)',
      negative:    "Subject + did + not + verb (didn't)",
      question:    'Did + subject + verb?',
    },
    tip: 'Acciones terminadas en el pasado. Pistas: yesterday, last week, ago, in 2010.',
    buildEN: (p, v) => `${p.en} ${v.past} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${v.pastSimple[p.conj]} ${v.complementES}.`,
  },
  {
    key: 'past-cont', name: 'Pasado Continuo', icon: '🎞️',
    color: { bg:'#F3E8FF', text:'#6B21A8', border:'#D8B4FE', solid:'#9333EA' },
    aux: 'was / were', auxEs: 'estaba / estabas / estaban', auxEsItalic: false,
    structure: {
      affirmative: 'Subject + was/were + verb-ing',
      negative:    "Subject + was/were + not + verb-ing (wasn't / weren't)",
      question:    'Was/Were + subject + verb-ing?',
    },
    tip: 'Acciones en progreso en un momento específico del pasado. Pistas: while, when, at 5 pm yesterday.',
    buildEN: (p, v) => `${p.en} ${p.wasWere} ${v.ing} ${v.complement}.`,
    buildES: (p, v) => `${p.es} ${p.estarPast} ${v.ger} ${v.complementES}.`,
  },
];

// ── Datos del cuadro comparativo ────────────────────────────────────────────
const REPASO_TABLE = {
  'pres-simple': {
    auxWhen:    'Solo en preguntas y negativos (en afirmativo no aparece).',
    auxMeaning: 'No traduce — solo marca la negación o pregunta. does = he/she/it.',
    endingEN:   'verbo base · 3.ª persona: + -s / -es',
    endingES:   '-o, -as, -a, -amos, -an',
    useShort:   'Rutinas, hábitos y hechos generales (every day, always).',
  },
  'pres-cont': {
    auxWhen:    'Siempre — en todas las oraciones.',
    auxMeaning: 'estoy / estás / está / estamos / están (verbo "estar").',
    endingEN:   'verbo + -ing',
    endingES:   '-ando / -iendo',
    useShort:   'Acciones que ocurren ahora mismo (now, right now).',
  },
  'fut-simple': {
    auxWhen:    'Siempre — afirmativo, negativo y pregunta.',
    auxMeaning: 'No traduce literal — equivale a la terminación -ré / -rás del verbo en futuro.',
    endingEN:   'will + verbo base',
    endingES:   '-ré, -rás, -rá, -remos, -rán',
    useShort:   'Decisiones espontáneas, promesas y predicciones (tomorrow, probably).',
  },
  'fut-cont': {
    auxWhen:    'Siempre.',
    auxMeaning: 'estaré / estarás / estará / estaremos / estarán (futuro de "estar").',
    endingEN:   'will be + verbo-ing',
    endingES:   'estaré / estarás… + -ando / -iendo',
    useShort:   'Acción en progreso en un momento futuro (this time tomorrow).',
  },
  'going-to': {
    auxWhen:    'Siempre — usa am/is/are antes de going to.',
    auxMeaning: 'voy a / vas a / va a / vamos a / van a.',
    endingEN:   'going to + verbo base',
    endingES:   'voy a / vas a… + infinitivo (-ar / -er / -ir)',
    useShort:   'Planes ya decididos o predicciones con evidencia visible.',
  },
  'past-simple': {
    auxWhen:    'Solo en preguntas y negativos (en afirmativo no aparece).',
    auxMeaning: 'No traduce — marca el pasado en negativos y preguntas.',
    endingEN:   'verbo + -ed (regular) o forma irregular',
    endingES:   '-é, -aste, -ó, -amos, -aron',
    useShort:   'Acciones terminadas en el pasado (yesterday, last week, ago).',
  },
  'past-cont': {
    auxWhen:    'Siempre.',
    auxMeaning: 'estaba / estabas / estaba / estábamos / estaban (pasado de "estar").',
    endingEN:   'was / were + verbo-ing',
    endingES:   'estaba / estabas… + -ando / -iendo',
    useShort:   'Acción en progreso en un momento del pasado (while, when, at 5 pm).',
  },
};

function RepasoComparativeTable() {
  const cols = [
    { key: 'name',       label: 'Tiempo' },
    { key: 'aux',        label: 'Auxiliar' },
    { key: 'auxWhen',    label: '¿Cuándo aux?' },
    { key: 'auxMeaning', label: 'Significado / Ref.' },
    { key: 'endingEN',   label: 'Verbo 🇬🇧' },
    { key: 'endingES',   label: 'Verbo 🇪🇸' },
    { key: 'useShort',   label: 'Uso del tiempo' },
  ];

  return (
    <div style={{ marginTop: 26 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4,
      }}>
        <div style={{ fontSize: 22 }}>📊</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--text)' }}>
          Cuadro comparativo de los 7 tiempos
        </div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600, marginBottom: 14 }}>
        Tu chuleta para repasar de un vistazo.
      </div>

      <div style={{
        background: 'white',
        border: '2px solid var(--border-strong)',
        borderRadius: 'var(--r-xl)',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <table style={{
          width: '100%',
          minWidth: 680,
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          fontFamily: 'var(--font)',
        }}>
          <colgroup>
            <col style={{ width: '13%' }}/>
            <col style={{ width: '10%' }}/>
            <col style={{ width: '14%' }}/>
            <col style={{ width: '18%' }}/>
            <col style={{ width: '14%' }}/>
            <col style={{ width: '13%' }}/>
            <col style={{ width: '18%' }}/>
          </colgroup>
          <thead>
            <tr style={{ background: 'var(--bg)' }}>
              {cols.map(c => (
                <th key={c.key} style={{
                  padding: '10px 7px', textAlign: 'left',
                  fontSize: 10, fontWeight: 900, color: 'var(--faint)',
                  textTransform: 'uppercase', letterSpacing: '0.04em',
                  borderBottom: '2px solid var(--border-strong)',
                  lineHeight: 1.25,
                }}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {REPASO_TENSES.map((t, idx) => {
              const cells = REPASO_TABLE[t.key];
              const rowBg = idx % 2 === 0 ? 'white' : '#FAFBFC';
              return (
                <tr key={t.key} style={{ borderBottom: '1px solid var(--border)', background: rowBg }}>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    borderRight: '1px solid var(--border)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 14 }}>{t.icon}</span>
                      <span style={{
                        fontWeight: 900, fontSize: 10.5,
                        color: t.color.text,
                        background: t.color.bg,
                        padding: '3px 6px',
                        borderRadius: 5,
                        border: `1px solid ${t.color.border}`,
                        lineHeight: 1.2,
                      }}>{t.name}</span>
                    </div>
                  </td>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    fontSize: 11, fontWeight: 800, color: t.color.text,
                    fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                    wordBreak: 'break-word', lineHeight: 1.4,
                  }}>{t.aux}</td>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    fontSize: 11, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4,
                  }}>{cells.auxWhen}</td>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    fontSize: 11, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4,
                  }}>{cells.auxMeaning}</td>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    fontSize: 11, fontWeight: 700, color: 'var(--text)', lineHeight: 1.4,
                    fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                    wordBreak: 'break-word',
                  }}>{cells.endingEN}</td>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    fontSize: 11, fontWeight: 700, color: 'var(--text)', lineHeight: 1.4,
                    fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                    wordBreak: 'break-word',
                  }}>{cells.endingES}</td>
                  <td style={{
                    padding: '10px 7px', verticalAlign: 'top',
                    fontSize: 11, fontWeight: 600, color: 'var(--muted)', lineHeight: 1.4,
                  }}>{cells.useShort}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Generador de distractores en español ────────────────────────────────────
function rpShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSpanishOptions(tense, pronoun, verb) {
  const correct = tense.buildES(pronoun, verb);
  const distractors = new Set();
  REPASO_TENSES.forEach(t => {
    if (t.key !== tense.key) distractors.add(t.buildES(pronoun, verb));
  });
  const others = rpShuffle([...distractors]).slice(0, 2);
  return rpShuffle([
    { text: correct, correct: true },
    ...others.map(t => ({ text: t, correct: false })),
  ]);
}

// ── Tarjeta de un tiempo verbal ─────────────────────────────────────────────
function RepasoTenseCard({ tense, pronoun, verb, onAnswered }) {
  const [options] = React.useState(() => buildSpanishOptions(tense, pronoun, verb));
  const [picked, setPicked] = React.useState(null);
  const [answered, setAnswered] = React.useState(false);

  const en = tense.buildEN(pronoun, verb);
  const correctES = tense.buildES(pronoun, verb);
  const c = tense.color;

  function speak(text) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  function handlePick(opt) {
    if (answered) return;
    setPicked(opt.text);
    setAnswered(true);
    onAnswered && onAnswered(opt.correct);
  }

  return (
    <div style={{
      background: 'white', border: `2px solid ${c.border}`,
      borderRadius: 'var(--r-2xl)', overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
    }}>
      {/* Header */}
      <div style={{
        background: c.bg, color: c.text,
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `2px solid ${c.border}`,
      }}>
        <div style={{ fontSize: 22 }}>{tense.icon}</div>
        <div style={{ fontWeight: 900, fontSize: 16, flex: 1 }}>{tense.name}</div>
        <span style={{
          background: c.solid, color: 'white',
          padding: '5px 12px', borderRadius: 999,
          fontSize: 12, fontWeight: 900, letterSpacing: '0.02em',
          boxShadow: `0 2px 0 ${c.text}33`,
          whiteSpace: 'nowrap',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}>{tense.aux}</span>
          <span style={{ opacity: 0.7 }}>/</span>
          <span style={{ fontStyle: tense.auxEsItalic ? 'italic' : 'normal', fontWeight: tense.auxEsItalic ? 700 : 900 }}>
            {tense.auxEs}
          </span>
        </span>
      </div>

      <div style={{ padding: '18px 20px' }}>
        {/* Oración en inglés */}
        <div style={{
          background: c.bg, borderRadius: 'var(--r-lg)',
          padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 14,
        }}>
          <button onClick={() => speak(en)} style={{
            background: c.solid, border: 'none', borderRadius: 'var(--r-sm)',
            width: 36, height: 36, cursor: 'pointer', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 17, fontWeight: 800, color: c.text, fontStyle: 'italic' }}>
            "{en}"
          </div>
        </div>

        {/* Estructura + Tip */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 10, marginBottom: 16 }}>
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)', padding: '10px 12px',
          }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
              🧩 Estructura
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { tag: '✅', label: 'Afirmativa', text: tense.structure.affirmative, color: 'var(--emerald-dark)' },
                { tag: '❌', label: 'Negativa',   text: tense.structure.negative,    color: 'var(--rose-dark)' },
                { tag: '❓', label: 'Pregunta',   text: tense.structure.question,    color: 'var(--violet-dark)' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 11.5, lineHeight: 1.45 }}>
                  <span style={{ fontSize: 11 }}>{row.tag}</span>
                  <div>
                    <span style={{ fontWeight: 900, color: row.color }}>{row.label}: </span>
                    <span style={{ fontWeight: 700, color: 'var(--text)', fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}>{row.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)', padding: '10px 12px',
          }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
              💡 Tip clave
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--text)', lineHeight: 1.45 }}>
              {tense.tip}
            </div>
          </div>
        </div>

        {/* Pregunta de traducción */}
        <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          🇪🇸 Elige la traducción correcta:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {options.map((o, i) => {
            let cls = 'choice-card';
            if (answered) {
              if (o.correct) cls += ' correct';
              else if (picked === o.text) cls += ' wrong';
            } else if (picked === o.text) {
              cls += ' selected';
            }
            return (
              <div key={i} className={cls} onClick={() => handlePick(o)}
                style={{ fontSize: 14, padding: '11px 14px', cursor: answered ? 'default' : 'pointer' }}>
                {o.text}
              </div>
            );
          })}
        </div>

        {answered && picked !== correctES && (
          <div style={{
            marginTop: 10, padding: '8px 12px', borderRadius: 'var(--r-sm)',
            background: 'var(--emerald-light)', color: 'var(--emerald-dark)',
            fontSize: 13, fontWeight: 700,
          }}>
            ✓ Correcto: <em>{correctES}</em>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Vista enfocada de UN tiempo verbal (sección propia en el sidebar) ───────
function TenseTheoryScreen({ tenseKey }) {
  const t = REPASO_TENSES.find(x => x.key === tenseKey);
  if (!t) return <div style={{ padding: 20, fontWeight: 700 }}>Tiempo verbal no encontrado.</div>;
  const table = REPASO_TABLE[tenseKey] || {};
  const c = t.color;

  // Paso del camino al que pertenece esta teoría + estado de su práctica.
  const step = (typeof LEARNING_PATH !== 'undefined') ? LEARNING_PATH.find(s => s.theory === 't-' + tenseKey) : null;
  const stepIdx = step ? LEARNING_PATH.indexOf(step) + 1 : null;
  const unit = (step && step.unitId && typeof UNITS !== 'undefined') ? UNITS.find(u => u.id === step.unitId) : null;
  let practiceStarted = false;
  if (unit) {
    try {
      const prog = JSON.parse(localStorage.getItem('efj_progress') || '{}');
      practiceStarted = unit.lessons.some(l => (prog[l.id] || l.status) === 'done');
    } catch {}
  }
  function startPractice() {
    if (step && step.unitId) window.dispatchEvent(new CustomEvent('start-unit', { detail: step.unitId }));
  }
  const exPron = [REPASO_PRONOUNS[0], REPASO_PRONOUNS[2], REPASO_PRONOUNS[5]]; // I, He, They
  const exVerbs = [REPASO_VERBS[0], REPASO_VERBS[7]]; // play soccer, visit family

  // Auxiliar que usa cada pronombre en ESTE tiempo.
  function auxForPronoun(p) {
    switch (tenseKey) {
      case 'pres-cont':   return p.be;                 // am / is / are
      case 'past-cont':   return p.wasWere;            // was / were
      case 'fut-cont':    return 'will be';
      case 'going-to':    return p.be + ' going to';   // am/is/are going to
      case 'fut-simple':  return 'will';
      case 'pres-simple': return p.conj === 2 ? 'does' : 'do';
      case 'past-simple': return 'did';
      default:            return t.aux;
    }
  }

  function speak(text) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', paddingBottom: 84 }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${c.solid}, ${c.text})`,
        borderRadius: 'var(--r-2xl)', padding: '24px 26px', color: 'white',
        marginBottom: 20, boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ fontSize: 34, marginBottom: 6 }}>{t.icon}</div>
        <div style={{ fontSize: 25, fontWeight: 900 }}>{t.name}</div>
        <div style={{ fontSize: 13.5, opacity: 0.95, fontWeight: 700, marginTop: 6, lineHeight: 1.5 }}>
          {t.tip}
        </div>
        <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.2)', padding: '6px 12px', borderRadius: 999,
          fontSize: 13, fontWeight: 900 }}>
          <span style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}>{t.aux}</span>
          <span style={{ opacity: 0.7 }}>/</span>
          <span>{t.auxEs}</span>
        </div>
      </div>

      {/* Estructura */}
      {/* Estructura (protagonista) + tabla de auxiliares (angosta, secundaria) */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '4 1 300px', background: 'white', border: `2px solid ${c.border}`,
        borderRadius: 'var(--r-xl)', padding: '16px 18px' }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase',
          letterSpacing: '0.08em', marginBottom: 10 }}>🧩 Estructura</div>
        {[
          { tag: '✅', label: 'Afirmativa', text: t.structure.affirmative, color: 'var(--emerald-dark)' },
          { tag: '❌', label: 'Negativa',   text: t.structure.negative,    color: 'var(--rose-dark)' },
          { tag: '❓', label: 'Pregunta',   text: t.structure.question,    color: 'var(--violet-dark)' },
        ].map(row => (
          <div key={row.label} style={{ display: 'flex', gap: 8, alignItems: 'flex-start',
            fontSize: 13.5, lineHeight: 1.5, marginBottom: 6 }}>
            <span>{row.tag}</span>
            <div><span style={{ fontWeight: 900, color: row.color }}>{row.label}: </span>
              <span style={{ fontWeight: 700, fontFamily: 'ui-monospace, Menlo, monospace' }}>{row.text}</span></div>
          </div>
        ))}
        {(table.auxWhen || table.auxMeaning) && (
          <div style={{ marginTop: 10, background: c.bg, borderRadius: 'var(--r-md)', padding: '10px 12px',
            fontSize: 12.5, color: c.text, fontWeight: 700, lineHeight: 1.5 }}>
            <strong>Auxiliar:</strong> {table.auxWhen} {table.auxMeaning}
          </div>
        )}
      </div>

      {/* Tabla pronombre → auxiliar (ancho completo, en su propia fila) */}
      <div style={{ flex: '1 1 100%', width: '100%', background: 'var(--bg)',
        border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '12px 14px' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase',
          letterSpacing: '0.07em', marginBottom: 6 }}>Auxiliar por pronombre</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font)' }}>
          <tbody>
            {REPASO_PRONOUNS.map(p => (
              <tr key={p.en} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '4px 4px', fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>
                  {p.en} <span style={{ color: 'var(--faint)', fontWeight: 600 }}>· {p.es}</span>
                </td>
                <td style={{ padding: '4px 4px', fontSize: 12, fontWeight: 700, color: 'var(--muted)',
                  textAlign: 'right', fontFamily: 'ui-monospace, Menlo, monospace' }}>{auxForPronoun(p)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      {/* Ejemplos */}
      <div style={{ fontSize: 12, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase',
        letterSpacing: '0.06em', marginBottom: 10 }}>🗣️ Ejemplos</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
        {exVerbs.flatMap(v => exPron.map(p => {
          const en = t.buildEN(p, v); const es = t.buildES(p, v);
          return (
            <div key={`${v.id}-${p.en}`} style={{ background: 'white', border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <button onClick={() => speak(en)} aria-label="Escuchar" style={{ background: c.solid, border: 'none',
                borderRadius: 'var(--r-sm)', width: 32, height: 32, cursor: 'pointer', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/></svg>
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 800, color: c.text, fontStyle: 'italic' }}>"{en}"</div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 700 }}>{es}</div>
              </div>
            </div>
          );
        }))}
      </div>

    </div>
  );
}

// ── Pantalla principal ──────────────────────────────────────────────────────
function RepasoScreen({ tenseKey } = {}) {
  if (tenseKey) return <TenseTheoryScreen tenseKey={tenseKey}/>;
  const [pronounIdx, setPronounIdx] = React.useState(0);
  const [verbIdx, setVerbIdx] = React.useState(null);
  const [started, setStarted] = React.useState(false);
  const [score, setScore] = React.useState({ ok: 0, total: 0 });
  const [round, setRound] = React.useState(0); // forza re-render de RepasoTenseCard al reiniciar

  const pronoun = REPASO_PRONOUNS[pronounIdx];
  const verb = verbIdx !== null ? REPASO_VERBS[verbIdx] : null;

  function handleAnswered(isCorrect) {
    setScore(s => ({ ok: s.ok + (isCorrect ? 1 : 0), total: s.total + 1 }));
  }

  function reset() {
    setStarted(false);
    setVerbIdx(null);
    setScore({ ok: 0, total: 0 });
    setRound(r => r + 1);
  }

  // ── Builder ───────────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div style={{ maxWidth: 1200 }}>
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, var(--indigo), var(--violet-dark))',
          borderRadius: 'var(--r-2xl)', padding: '28px 32px', color: 'white',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
        }}>
          <div style={{ fontSize: 34, marginBottom: 8 }}>🧱</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 6 }}>Repaso de tiempos verbales</div>
          <div style={{ fontSize: 14, opacity: 0.9, fontWeight: 600, lineHeight: 1.55 }}>
            Construye una oración base y conjúgala en los <strong>7 tiempos verbales</strong> que ya hemos visto.
            Para cada tiempo, recuerda el uso del auxiliar, su tip clave y elige la traducción correcta.
          </div>
        </div>

        {/* Cuadro comparativo de los 7 tiempos — chuleta inicial */}
        <RepasoComparativeTable/>

        <div style={{ marginTop: 28 }}/>

        {/* Paso 1 — Pronombre */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 10 }}>
            ① Elige el sujeto
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: 8 }}>
            {REPASO_PRONOUNS.map((p, i) => {
              const active = i === pronounIdx;
              return (
                <button key={p.en} onClick={() => setPronounIdx(i)} style={{
                  padding: '14px 8px', borderRadius: 'var(--r-lg)',
                  border: `2px solid ${active ? 'var(--indigo)' : 'var(--border)'}`,
                  background: active ? 'var(--indigo-light)' : 'white',
                  cursor: 'pointer', fontFamily: 'var(--font)',
                  display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center',
                  transition: 'all 0.12s',
                }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: active ? 'var(--indigo-dark)' : 'var(--text)' }}>{p.en}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>{p.es}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Paso 2 — Verbo */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 10 }}>
            ② Elige el verbo y su complemento
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
            {REPASO_VERBS.map((v, i) => {
              const active = i === verbIdx;
              return (
                <button key={v.id} onClick={() => setVerbIdx(i)} style={{
                  padding: '12px 10px', borderRadius: 'var(--r-lg)',
                  border: `2px solid ${active ? 'var(--violet)' : 'var(--border)'}`,
                  background: active ? 'var(--violet-light)' : 'white',
                  cursor: 'pointer', fontFamily: 'var(--font)',
                  display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center',
                  transition: 'all 0.12s',
                }}>
                  <div style={{ fontSize: 22 }}>{v.emoji}</div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: active ? 'var(--violet-dark)' : 'var(--text)' }}>
                    {v.base} {v.complement}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>
                    {v.inf} {v.complementES}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview + CTA */}
        <div style={{
          background: 'white', border: '2px dashed var(--border-strong)',
          borderRadius: 'var(--r-xl)', padding: '18px 20px',
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16,
        }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Oración base
          </div>
          <div style={{ flex: 1, fontSize: 18, fontWeight: 800, color: verb ? 'var(--indigo)' : 'var(--faint)', fontStyle: 'italic' }}>
            {verb ? `"${pronoun.en} ${verb.base} ${verb.complement}."` : '"…"'}
          </div>
        </div>

        <button className="btn btn-primary btn-lg"
          disabled={verb === null}
          onClick={() => setStarted(true)}>
          ▶ EMPEZAR REPASO
        </button>
      </div>
    );
  }

  // ── Review ────────────────────────────────────────────────────────────────
  const baseSentence = `${pronoun.en} ${verb.base} ${verb.complement}`;
  const completed = score.total >= REPASO_TENSES.length;
  const pct = score.total > 0 ? Math.round((score.ok / score.total) * 100) : 0;

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Header con oración base */}
      <div style={{
        background: 'linear-gradient(135deg, var(--indigo), var(--violet-dark))',
        borderRadius: 'var(--r-2xl)', padding: '20px 24px', color: 'white',
        marginBottom: 20, boxShadow: '0 8px 20px rgba(99,102,241,0.25)',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{ fontSize: 34 }}>{verb.emoji}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 800, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
            Tu oración base
          </div>
          <div style={{ fontSize: 22, fontWeight: 900 }}>"{baseSentence}."</div>
        </div>
        <button onClick={reset} className="btn btn-ghost"
          style={{ color: 'white', border: '2px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', boxShadow: 'none' }}>
          ↺ Otra
        </button>
      </div>

      {/* Score pill */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
        background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)',
        padding: '10px 14px',
      }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--muted)' }}>
          Progreso: <strong style={{ color: 'var(--indigo)' }}>{score.total}/{REPASO_TENSES.length}</strong>
        </div>
        <div style={{ flex: 1 }} className="progress-bar">
          <div className="progress-fill" style={{ width: `${(score.total / REPASO_TENSES.length) * 100}%` }}/>
        </div>
        <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--emerald-dark)' }}>
          ✓ {score.ok}
        </div>
      </div>

      {/* 7 cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {REPASO_TENSES.map(t => (
          <RepasoTenseCard key={`${round}-${t.key}`} tense={t} pronoun={pronoun} verb={verb} onAnswered={handleAnswered}/>
        ))}
      </div>

      {/* Footer */}
      {completed && (
        <div style={{
          marginTop: 20, background: pct >= 80 ? 'var(--emerald-light)' : 'var(--amber-light)',
          border: `2px solid ${pct >= 80 ? 'var(--emerald)' : 'var(--amber)'}`,
          borderRadius: 'var(--r-xl)', padding: '18px 20px',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{ fontSize: 34 }}>{pct >= 80 ? '🏆' : '💪'}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: pct >= 80 ? 'var(--emerald-dark)' : 'var(--amber-dark)' }}>
              {pct}% — {score.ok} de {REPASO_TENSES.length} correctas
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', marginTop: 2 }}>
              {pct >= 80 ? '¡Excelente! Repasa con otra oración para reforzar.' : 'Buen intento. Prueba otra oración para mejorar.'}
            </div>
          </div>
          <button className="btn btn-primary" onClick={reset}>↺ NUEVO REPASO</button>
        </div>
      )}
    </div>
  );
}

window.RepasoScreen = RepasoScreen;
