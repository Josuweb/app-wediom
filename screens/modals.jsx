// Sección de Verbos Modales — teoría, estructura, usos + práctica.

const MODALS = [
  {
    id: 'can', word: 'can',
    meaning: 'habilidad · permiso informal · posibilidad',
    color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' },
    icon: '💪',
    translations: [
      { label: 'poder (presente)', forms: ['yo puedo', 'tú puedes', 'él/ella puede', 'nosotros podemos', 'ellos pueden'] },
    ],
    theory: 'Expresa habilidad, permiso informal o posibilidad en el presente. Es invariable: no cambia con la persona (I can, he can, they can).',
    structure: {
      aff: { formula: 'Sujeto + can + verbo base', example: 'I can swim.' },
      neg: { formula: 'Sujeto + cannot / can\'t + verbo base', example: 'She can\'t drive.' },
      q:   { formula: 'Can + sujeto + verbo base?', example: 'Can you help me?' },
    },
    uses: [
      { meaning: 'Habilidad presente',  en: 'I can speak English.',        es: 'Puedo hablar inglés.' },
      { meaning: 'Permiso informal',    en: 'Can I go to the bathroom?',   es: '¿Puedo ir al baño?' },
      { meaning: 'Posibilidad general', en: 'It can rain in April.',       es: 'Puede llover en abril.' },
      { meaning: 'Petición informal',   en: 'Can you open the door?',      es: '¿Puedes abrir la puerta?' },
    ],
  },
  {
    id: 'could', word: 'could',
    meaning: 'pasado de can · cortesía · posibilidad hipotética',
    color: { bg: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC', solid: '#0284C7' },
    icon: '🕰️',
    translations: [
      { label: 'poder (pasado — podía…)',       forms: ['yo podía', 'tú podías', 'él/ella podía', 'nosotros podíamos', 'ellos podían'] },
      { label: 'poder (condicional — podría…)', forms: ['yo podría', 'tú podrías', 'él/ella podría', 'nosotros podríamos', 'ellos podrían'] },
    ],
    theory: 'Pasado de "can". Se usa para habilidades en el pasado, peticiones formales/educadas, posibilidad hipotética y sugerencias suaves.',
    structure: {
      aff: { formula: 'Sujeto + could + verbo base', example: 'I could swim at five.' },
      neg: { formula: 'Sujeto + could not / couldn\'t + verbo base', example: 'We couldn\'t find it.' },
      q:   { formula: 'Could + sujeto + verbo base?', example: 'Could you help me?' },
    },
    uses: [
      { meaning: 'Habilidad pasada',       en: 'I could read when I was four.', es: 'Podía leer cuando tenía cuatro años.' },
      { meaning: 'Petición formal',        en: 'Could you pass the salt?',      es: '¿Podrías pasarme la sal?' },
      { meaning: 'Posibilidad hipotética', en: 'It could rain later.',          es: 'Podría llover más tarde.' },
      { meaning: 'Sugerencia',             en: 'We could go to the cinema.',    es: 'Podríamos ir al cine.' },
    ],
  },
  {
    id: 'may', word: 'may',
    meaning: 'posibilidad media (50–70%) · puede que… · permiso formal',
    color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', solid: '#10B981' },
    icon: '🎓',
    translations: [
      { label: 'puede que + subjuntivo · posibilidad 50–70%', forms: ['puede que yo vaya', 'puede que tú vengas', 'puede que él/ella llegue', 'puede que nosotros viajemos', 'puede que ellos lleguen'] },
      { label: 'poder (permiso formal — puedo…)', forms: ['yo puedo', 'tú puedes', 'él/ella puede', 'nosotros podemos', 'ellos pueden'] },
    ],
    theory: 'Indica posibilidad media (50–70%) — "puede que…" — y permiso formal. Es más cortés y formal que "can". Cuando algo es bastante probable pero no seguro, usa "may".',
    structure: {
      aff: { formula: 'Sujeto + may + verbo base', example: 'You may enter.' },
      neg: { formula: 'Sujeto + may not + verbo base', example: 'You may not enter.' },
      q:   { formula: 'May + sujeto + verbo base?', example: 'May I come in?' },
    },
    uses: [
      { meaning: 'Permiso formal',      en: 'May I leave early?',          es: '¿Puedo salir temprano?' },
      { meaning: 'Posibilidad (50/50)', en: 'It may snow tonight.',        es: 'Puede que nieve esta noche.' },
      { meaning: 'Deseo formal',        en: 'May you have a happy year.',  es: 'Que tengas un año feliz.' },
      { meaning: 'Concesión',           en: 'You may be right.',           es: 'Puede que tengas razón.' },
    ],
  },
  {
    id: 'might', word: 'might',
    meaning: 'posibilidad baja (30–50%) · podría · quizás · menos probable que "may"',
    color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD', solid: '#7C3AED' },
    icon: '🔮',
    translations: [
      { label: 'poder (condicional — podría…) · posibilidad 30–50%', forms: ['yo podría', 'tú podrías', 'él/ella podría', 'nosotros podríamos', 'ellos podrían'] },
      { label: 'quizás / tal vez + subjuntivo', forms: ['quizás yo vaya', 'quizás tú vengas', 'quizás él/ella llegue', 'quizás nosotros viajemos', 'quizás ellos lleguen'] },
    ],
    theory: 'Indica posibilidad baja (30–50%) — "podría" / "quizás" —, menos probable que "may". Es la opción más común para hablar de posibilidades inciertas en inglés cotidiano: cuando algo es posible pero poco seguro.',
    structure: {
      aff: { formula: 'Sujeto + might + verbo base', example: 'I might go.' },
      neg: { formula: 'Sujeto + might not + verbo base', example: 'She might not come.' },
      q:   { formula: 'Might + sujeto + verbo base?', example: 'Might I ask?' },
    },
    uses: [
      { meaning: 'Posibilidad débil',    en: 'I might go to the gym later.', es: 'Tal vez vaya al gimnasio más tarde.' },
      { meaning: 'Sugerencia suave',     en: 'You might try this method.',   es: 'Podrías probar este método.' },
      { meaning: 'Duda',                 en: 'He might be at home.',         es: 'Tal vez esté en casa.' },
      { meaning: 'Petición muy formal',  en: 'Might I make a suggestion?',   es: '¿Podría hacer una sugerencia?' },
    ],
  },
  {
    id: 'will', word: 'will',
    meaning: 'futuro · promesas · decisiones espontáneas',
    color: { bg: '#FFE4E6', text: '#9F1239', border: '#FCA5A5', solid: '#E11D48' },
    icon: '🚀',
    translations: [
      { label: 'verbo en futuro (terminación -é / -ás / -á / -emos / -án)', forms: ['yo viajaré', 'tú viajarás', 'él/ella viajará', 'nosotros viajaremos', 'ellos viajarán'] },
    ],
    theory: 'Auxiliar del Futuro Simple. Se usa para decisiones espontáneas, promesas, predicciones y ofrecimientos. En español equivale a la terminación del futuro del verbo principal.',
    structure: {
      aff: { formula: 'Sujeto + will + verbo base', example: 'I will help you.' },
      neg: { formula: 'Sujeto + will not / won\'t + verbo base', example: 'He won\'t come.' },
      q:   { formula: 'Will + sujeto + verbo base?', example: 'Will you come?' },
    },
    uses: [
      { meaning: 'Futuro simple',         en: 'I will travel tomorrow.',   es: 'Viajaré mañana.' },
      { meaning: 'Decisión espontánea',   en: 'I\'ll get the door!',       es: '¡Yo abro la puerta!' },
      { meaning: 'Promesa',               en: 'I will call you.',          es: 'Te llamaré.' },
      { meaning: 'Predicción',            en: 'It will be sunny.',         es: 'Estará soleado.' },
      { meaning: 'Ofrecimiento',          en: 'I\'ll carry that for you.', es: 'Yo te llevo eso.' },
    ],
  },
  {
    id: 'would', word: 'would',
    meaning: 'condicional · cortesía · hábito pasado',
    color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#D97706' },
    icon: '🎀',
    translations: [
      { label: 'verbo en condicional (terminación -ía / -ías / -ía / -íamos / -ían)', forms: ['yo viajaría', 'tú viajarías', 'él/ella viajaría', 'nosotros viajaríamos', 'ellos viajarían'] },
    ],
    theory: 'Condicional (haría / iría / sería). También se usa para peticiones formales, hábitos del pasado y preferencias.',
    structure: {
      aff: { formula: 'Sujeto + would + verbo base', example: 'I would travel.' },
      neg: { formula: 'Sujeto + would not / wouldn\'t + verbo base', example: 'I wouldn\'t do that.' },
      q:   { formula: 'Would + sujeto + verbo base?', example: 'Would you like coffee?' },
    },
    uses: [
      { meaning: 'Condicional',          en: 'I would buy a house if I had money.', es: 'Compraría una casa si tuviera dinero.' },
      { meaning: 'Petición educada',     en: 'Would you like some tea?',            es: '¿Te gustaría un té?' },
      { meaning: 'Hábito pasado',        en: 'When I was a kid, I would play outside every day.', es: 'Cuando era niño, jugaba afuera todos los días.' },
      { meaning: 'Preferencia',          en: 'I would rather stay home.',           es: 'Preferiría quedarme en casa.' },
    ],
  },
  {
    id: 'should', word: 'should',
    meaning: 'consejo · recomendación · obligación leve',
    color: { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4', solid: '#DB2777' },
    icon: '💡',
    translations: [
      { label: 'deber (condicional) + infinitivo', forms: ['yo debería', 'tú deberías', 'él/ella debería', 'nosotros deberíamos', 'ellos deberían'] },
    ],
    theory: 'Expresa consejo, recomendación, obligación leve o expectativa. Es más suave que "must".',
    structure: {
      aff: { formula: 'Sujeto + should + verbo base', example: 'You should rest.' },
      neg: { formula: 'Sujeto + should not / shouldn\'t + verbo base', example: 'You shouldn\'t smoke.' },
      q:   { formula: 'Should + sujeto + verbo base?', example: 'Should I call him?' },
    },
    uses: [
      { meaning: 'Consejo',         en: 'You should rest more.',           es: 'Deberías descansar más.' },
      { meaning: 'Recomendación',   en: 'You should try the pasta here.',  es: 'Deberías probar la pasta aquí.' },
      { meaning: 'Expectativa',     en: 'The package should arrive today.', es: 'El paquete debería llegar hoy.' },
      { meaning: 'Obligación leve', en: 'Students should study daily.',    es: 'Los estudiantes deberían estudiar a diario.' },
    ],
  },
  {
    id: 'must', word: 'must',
    meaning: 'obligación fuerte · prohibición · deducción lógica',
    color: { bg: '#FEE2E2', text: '#7F1D1D', border: '#FCA5A5', solid: '#DC2626' },
    icon: '⚠️',
    translations: [
      { label: 'deber (presente) + infinitivo',    forms: ['yo debo', 'tú debes', 'él/ella debe', 'nosotros debemos', 'ellos deben'] },
      { label: 'tener que + infinitivo',           forms: ['yo tengo que', 'tú tienes que', 'él/ella tiene que', 'nosotros tenemos que', 'ellos tienen que'] },
    ],
    theory: 'Expresa obligación fuerte, prohibición (en negativo) o deducción lógica con mucha certeza.',
    structure: {
      aff: { formula: 'Sujeto + must + verbo base', example: 'I must study.' },
      neg: { formula: 'Sujeto + must not / mustn\'t + verbo base (prohibición)', example: 'You mustn\'t smoke here.' },
      q:   { formula: 'Must + sujeto + verbo base?', example: 'Must I go?' },
    },
    uses: [
      { meaning: 'Obligación fuerte', en: 'I must finish this today.',      es: 'Debo terminar esto hoy.' },
      { meaning: 'Prohibición',       en: 'You must not smoke here.',       es: 'No debes fumar aquí.' },
      { meaning: 'Deducción lógica',  en: 'She must be tired.',             es: 'Debe estar cansada.' },
      { meaning: 'Regla o norma',     en: 'Passengers must wear a seatbelt.', es: 'Los pasajeros deben usar cinturón.' },
    ],
  },
];

// ── Pool de ejercicios para la práctica ─────────────────────────────────────
const MODAL_DRILLS = [
  // CAN
  { modal: 'can', form: 'aff', en: ['I','can','swim'],                              es: 'Yo puedo nadar.' },
  { modal: 'can', form: 'aff', en: ['She','can','speak','three','languages'],       es: 'Ella puede hablar tres idiomas.' },
  { modal: 'can', form: 'neg', en: ['We','can','not','come','to','the','party'],    es: 'Nosotros no podemos venir a la fiesta.' },
  { modal: 'can', form: 'q',   en: ['Can','you','help','me'],                       es: '¿Puedes ayudarme?' },
  { modal: 'can', form: 'aff', en: ['He','can','play','the','guitar'],              es: 'Él puede tocar la guitarra.' },

  // COULD
  { modal: 'could', form: 'aff', en: ['I','could','read','at','five'],              es: 'Yo podía leer a los cinco años.' },
  { modal: 'could', form: 'q',   en: ['Could','you','pass','the','salt'],           es: '¿Podrías pasarme la sal?' },
  { modal: 'could', form: 'aff', en: ['We','could','go','to','the','cinema'],       es: 'Podríamos ir al cine.' },
  { modal: 'could', form: 'neg', en: ['She','could','not','find','her','keys'],     es: 'Ella no podía encontrar sus llaves.' },
  { modal: 'could', form: 'aff', en: ['They','could','win','the','game'],           es: 'Ellos podrían ganar el partido.' },

  // MAY
  { modal: 'may', form: 'q',   en: ['May','I','come','in'],                         es: '¿Puedo pasar? (formal)' },
  { modal: 'may', form: 'aff', en: ['It','may','rain','tonight'],                   es: 'Puede llover esta noche.' },
  { modal: 'may', form: 'aff', en: ['You','may','leave','now'],                     es: 'Puedes irte ahora. (formal)' },
  { modal: 'may', form: 'aff', en: ['She','may','need','help'],                     es: 'Ella puede necesitar ayuda.' },
  { modal: 'may', form: 'q',   en: ['May','I','use','your','pen'],                  es: '¿Puedo usar tu bolígrafo? (formal)' },

  // MIGHT
  { modal: 'might', form: 'aff', en: ['I','might','go','to','the','gym'],           es: 'Tal vez vaya al gimnasio.' },
  { modal: 'might', form: 'aff', en: ['It','might','rain','tomorrow'],              es: 'Podría llover mañana.' },
  { modal: 'might', form: 'neg', en: ['She','might','not','come'],                  es: 'Tal vez ella no venga.' },
  { modal: 'might', form: 'aff', en: ['We','might','travel','in','summer'],         es: 'Quizá viajemos en verano.' },
  { modal: 'might', form: 'aff', en: ['You','might','need','a','coat'],             es: 'Podrías necesitar un abrigo.' },

  // WILL
  { modal: 'will', form: 'aff', en: ['I','will','travel','tomorrow'],               es: 'Yo viajaré mañana.' },
  { modal: 'will', form: 'aff', en: ['She','will','arrive','late'],                 es: 'Ella llegará tarde.' },
  { modal: 'will', form: 'aff', en: ['We','will','study','tonight'],                es: 'Nosotros estudiaremos esta noche.' },
  { modal: 'will', form: 'neg', en: ['They','will','not','come'],                   es: 'Ellos no vendrán.' },
  { modal: 'will', form: 'q',   en: ['Will','you','dance'],                         es: '¿Bailarás?' },

  // WOULD
  { modal: 'would', form: 'aff', en: ['I','would','travel','more'],                 es: 'Yo viajaría más.' },
  { modal: 'would', form: 'q',   en: ['Would','you','help'],                        es: '¿Ayudarías?' },
  { modal: 'would', form: 'aff', en: ['He','would','buy','a','house'],              es: 'Él compraría una casa.' },
  { modal: 'would', form: 'neg', en: ['We','would','not','study','late'],           es: 'Nosotros no estudiaríamos tarde.' },
  { modal: 'would', form: 'aff', en: ['They','would','dance','all','night'],        es: 'Ellos bailarían toda la noche.' },

  // SHOULD
  { modal: 'should', form: 'aff', en: ['You','should','rest'],                      es: 'Tú deberías descansar.' },
  { modal: 'should', form: 'aff', en: ['I','should','study','more'],                es: 'Yo debería estudiar más.' },
  { modal: 'should', form: 'neg', en: ['She','should','not','smoke'],               es: 'Ella no debería fumar.' },
  { modal: 'should', form: 'q',   en: ['Should','we','go'],                         es: '¿Deberíamos ir?' },
  { modal: 'should', form: 'aff', en: ['They','should','be','here'],                es: 'Ellos deberían estar aquí.' },

  // MUST
  { modal: 'must', form: 'aff', en: ['I','must','finish','today'],                  es: 'Yo debo terminar hoy.' },
  { modal: 'must', form: 'neg', en: ['You','must','not','smoke','here'],            es: 'Tú no debes fumar aquí.' },
  { modal: 'must', form: 'aff', en: ['We','must','respect','the','rules'],          es: 'Nosotros debemos respetar las reglas.' },
  { modal: 'must', form: 'aff', en: ['She','must','be','tired'],                    es: 'Ella debe estar cansada.' },
  { modal: 'must', form: 'aff', en: ['They','must','arrive','at','six'],            es: 'Ellos deben llegar a las seis.' },
];

const MODAL_WORDS = ['can','could','may','might','will','would','should','must'];

function mdSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function mdShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function mdCap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

// Construye las fichas (palabras correctas + modales distractores) para un drill
function mdBuildTiles(drill) {
  const isQ = drill.form === 'q';
  const distractorWords = mdShuffle(MODAL_WORDS.filter(w => w !== drill.modal)).slice(0, 3);
  const distractors = distractorWords.map(w => isQ ? mdCap(w) : w);
  return mdShuffle([...drill.en, ...distractors]).map((word, id) => ({ id, word }));
}

function mdPunct(form) { return form === 'q' ? '?' : '.'; }
function mdSentence(tokens, form) {
  const body = tokens.join(' ') + mdPunct(form);
  return body;
}

// ── Resumen comparativo ─────────────────────────────────────────────────────
const MD_ES_SHORT = {
  can:    'poder · puedo, puedes…',
  could:  'podía · podría',
  may:    'puede que · puedo (formal)',
  might:  'podría · quizás',
  will:   'futuro (-é, -ás, -á…)',
  would:  'condicional (-ía, -ías, -ía…)',
  should: 'debería',
  must:   'debo · tengo que',
};
const MD_QUICK_EX = {
  can:    { en: 'I can swim.',         es: 'Puedo nadar.' },
  could:  { en: 'I could swim at 5.',  es: 'Podía nadar a los 5.' },
  may:    { en: 'You may enter.',      es: 'Puedes entrar.' },
  might:  { en: 'It might rain.',      es: 'Podría llover.' },
  will:   { en: 'I will help.',        es: 'Yo ayudaré.' },
  would:  { en: 'I would travel.',     es: 'Yo viajaría.' },
  should: { en: 'You should rest.',    es: 'Deberías descansar.' },
  must:   { en: 'I must study.',       es: 'Debo estudiar.' },
};

function useMdNarrow(maxPx) {
  const [narrow, setNarrow] = React.useState(() =>
    typeof window !== 'undefined' && window.matchMedia(`(max-width: ${maxPx}px)`).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxPx}px)`);
    const handler = (e) => setNarrow(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [maxPx]);
  return narrow;
}

function ModalsComparisonTable({ activeId, onPick }) {
  const narrow = useMdNarrow(760);
  const cols = '92px 1.3fr 1.3fr 1.8fr';

  if (narrow) {
    return (
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          📊 Resumen — Vista rápida (toca para ver detalle)
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {MODALS.map(m => {
            const ex = MD_QUICK_EX[m.id];
            const sel = m.id === activeId;
            return (
              <button key={m.id} onClick={() => onPick(m.id)} style={{
                textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font)',
                background: sel ? m.color.bg : 'white',
                border: `2px solid ${sel ? m.color.solid : m.color.border}`,
                borderRadius: 'var(--r-lg)', padding: '12px 14px',
                boxShadow: sel ? `0 2px 0 ${m.color.text}33` : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <span style={{
                    fontSize: 15, fontWeight: 900, color: 'white',
                    background: m.color.solid, padding: '2px 10px', borderRadius: 6,
                  }}>
                    {m.word}
                  </span>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: m.color.text, flex: 1, minWidth: 0 }}>
                    {m.meaning}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, marginBottom: 4 }}>
                  <strong style={{ color: m.color.text }}>ES:</strong> {MD_ES_SHORT[m.id]}
                </div>
                <div style={{ fontSize: 13, color: m.color.text, fontStyle: 'italic', fontWeight: 700 }}>
                  "{ex.en}" → <span style={{ color: 'var(--muted)' }}>{ex.es}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        📊 Tabla comparativa — Vista rápida (haz click en una fila)
      </div>
      <div style={{
        background: 'white', border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: cols,
          background: 'var(--bg)', padding: '10px 14px', gap: 12,
          borderBottom: '1.5px solid var(--border)',
        }}>
          {['Modal', 'Significado', 'Equivalente ES', 'Ejemplo'].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {h}
            </div>
          ))}
        </div>
        {MODALS.map((m, i) => {
          const ex = MD_QUICK_EX[m.id];
          const sel = m.id === activeId;
          return (
            <div key={m.id}
              onClick={() => onPick(m.id)}
              style={{
                display: 'grid', gridTemplateColumns: cols,
                padding: '12px 14px', gap: 12, alignItems: 'center',
                borderBottom: i < MODALS.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer', transition: 'background 0.12s',
                background: sel ? m.color.bg : 'white',
              }}
              onMouseEnter={e => { if (!sel) e.currentTarget.style.background = m.color.bg; }}
              onMouseLeave={e => { if (!sel) e.currentTarget.style.background = 'white'; }}
              >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 18 }}>{m.icon}</span>
                <span style={{
                  fontSize: 13.5, fontWeight: 900, color: 'white',
                  background: m.color.solid, padding: '3px 10px', borderRadius: 6,
                }}>
                  {m.word}
                </span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text)', fontWeight: 600, lineHeight: 1.35 }}>
                {m.meaning}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 700, lineHeight: 1.35 }}>
                {MD_ES_SHORT[m.id]}
              </div>
              <div style={{ fontSize: 12.5, color: m.color.text, fontStyle: 'italic', fontWeight: 700, lineHeight: 1.35 }}>
                "{ex.en}" → <span style={{ color: 'var(--muted)', fontWeight: 600 }}>{ex.es}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Pantalla principal ──────────────────────────────────────────────────────
function ModalsScreen() {
  const [view, setView]               = React.useState('theory'); // 'theory' | 'practice'
  const [practiceFilter, setFilter]   = React.useState(null);     // null = todos | id de modal
  const [activeId, setActiveId]       = React.useState('can');
  const detailRef                     = React.useRef(null);

  if (view === 'practice') {
    return <ModalsPracticeScreen filter={practiceFilter} onExit={() => setView('theory')}/>;
  }

  const m = MODALS.find(x => x.id === activeId);

  function startPractice(filter) {
    setFilter(filter);
    setView('practice');
  }
  function pickModal(id) {
    setActiveId(id);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 20, boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 38 }}>🎩</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Verbos Modales</div>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600, lineHeight: 1.5 }}>
              Auxiliares que expresan habilidad, posibilidad, permiso, obligación o consejo.
              Siempre van seguidos del <strong>verbo en forma base</strong> (sin "to") y no
              cambian con la persona.
            </div>
          </div>
          {typeof ThemePracticeButton === 'function' && <ThemePracticeButton theoryId="modals"/>}
        </div>
      </div>

      <ModalsComparisonTable activeId={activeId} onPick={pickModal}/>

      {/* Pills selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {MODALS.map(it => {
          const sel = it.id === activeId;
          return (
            <button key={it.id} onClick={() => setActiveId(it.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 800, fontSize: 14,
              padding: '8px 16px', borderRadius: 999,
              background: sel ? it.color.solid : 'white',
              color: sel ? 'white' : it.color.text,
              border: `2px solid ${sel ? it.color.solid : it.color.border}`,
              boxShadow: sel ? `0 3px 0 ${it.color.text}33` : 'none',
              transition: 'all 0.12s',
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}>
              <span>{it.icon}</span>
              {it.word}
            </button>
          );
        })}
      </div>

      {/* Active modal card */}
      <div ref={detailRef} style={{
        background: 'white', border: `2px solid ${m.color.border}`,
        borderRadius: 'var(--r-2xl)', padding: '28px 30px', boxShadow: 'var(--shadow-sm)',
      }}>
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18, paddingBottom: 18, borderBottom: `1.5px dashed ${m.color.border}` }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, fontSize: 28,
            background: m.color.bg, border: `2px solid ${m.color.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {m.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 30, fontWeight: 900, color: m.color.text, lineHeight: 1, letterSpacing: '-0.5px' }}>
              {m.word}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: m.color.text, opacity: 0.75, marginTop: 4, marginBottom: 12 }}>
              {m.meaning}
            </div>
            {/* Conjugaciones */}
            {m.translations.map((t, ti) => (
              <div key={ti} style={{ marginTop: ti === 0 ? 0 : 10 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: m.color.text, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  {t.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {t.forms.map((f, fi) => (
                    <span key={fi} style={{
                      background: m.color.bg, color: m.color.text,
                      border: `1.5px solid ${m.color.border}`,
                      borderRadius: 999, padding: '4px 11px',
                      fontSize: 12.5, fontWeight: 800,
                    }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teoría */}
        <MdSection title="📖 Teoría" color={m.color}>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--text)', fontWeight: 600 }}>
            {m.theory}
          </p>
        </MdSection>

        {/* Estructura */}
        <MdSection title="🧩 Estructura" color={m.color}>
          <div style={{ display: 'grid', gap: 10 }}>
            <MdStructRow type="Afirmativa"    data={m.structure.aff} color={m.color} accent="#10B981"/>
            <MdStructRow type="Negativa"      data={m.structure.neg} color={m.color} accent="#E11D48"/>
            <MdStructRow type="Interrogativa" data={m.structure.q}   color={m.color} accent="#F59E0B"/>
          </div>
        </MdSection>

        {/* Usos */}
        <MdSection title="🎯 Usos" color={m.color}>
          <div style={{ display: 'grid', gap: 10 }}>
            {m.uses.map((u, i) => (
              <div key={i} style={{
                background: m.color.bg, border: `1.5px solid ${m.color.border}`,
                borderRadius: 'var(--r-lg)', padding: '12px 16px',
              }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: m.color.text, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  {u.meaning}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                  <button onClick={() => mdSpeak(u.en)} title="Escuchar" style={{
                    background: m.color.solid, border: 'none', borderRadius: 6, width: 24, height: 24,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </button>
                  <span style={{ fontSize: 15, fontWeight: 800, color: m.color.text }}>{u.en}</span>
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 32 }}>
                  → {u.es}
                </div>
              </div>
            ))}
          </div>
        </MdSection>

      </div>
    </div>
  );
}

function MdSection({ title, color, children, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : 20 }}>
      <div style={{
        fontSize: 12, fontWeight: 900, color: color.text,
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function MdStructRow({ type, data, color, accent }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12,
      alignItems: 'center', background: 'var(--bg)', border: '1.5px solid var(--border)',
      borderRadius: 'var(--r-lg)', padding: '10px 14px',
    }}>
      <div style={{
        fontSize: 11, fontWeight: 900, color: 'white',
        background: accent, padding: '4px 8px', borderRadius: 6, textAlign: 'center',
        textTransform: 'uppercase', letterSpacing: '0.04em',
      }}>
        {type}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)', marginBottom: 2 }}>
          {data.formula}
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: color.text, fontStyle: 'italic' }}>
          "{data.example}"
        </div>
      </div>
    </div>
  );
}

// ── Pantalla de práctica ────────────────────────────────────────────────────
function ModalsPracticeScreen({ filter, onExit }) {
  const [pool] = React.useState(() => {
    const filtered = filter ? MODAL_DRILLS.filter(d => d.modal === filter) : MODAL_DRILLS;
    return mdShuffle(filtered).map(d => ({ ...d, tiles: mdBuildTiles(d) }));
  });
  const [idx, setIdx]         = React.useState(0);
  const [placed, setPlaced]   = React.useState([]);
  const [checked, setChecked] = React.useState(null);
  const [score, setScore]     = React.useState(0);
  const [shake, setShake]     = React.useState(false);

  const total  = pool.length;
  const isDone = idx >= total;
  const ex     = pool[idx];
  const progress = total ? (idx + (checked !== null ? 1 : 0)) / total : 0;
  const modalDef = ex ? MODALS.find(x => x.id === ex.modal) : null;

  function placeTile(id)  { if (checked === null) setPlaced(p => [...p, id]); }
  function removeTile(id) { if (checked === null) setPlaced(p => p.filter(x => x !== id)); }
  function clearAnswer()  { if (checked === null) setPlaced([]); }

  function handleCheck() {
    const ans = placed.map(id => ex.tiles.find(t => t.id === id).word);
    const ok = ans.length === ex.en.length && ans.every((w, i) => w === ex.en[i]);
    setChecked(ok);
    if (ok) setScore(s => s + 1);
    else { setShake(true); setTimeout(() => setShake(false), 400); }
  }
  function handleNext() {
    setIdx(i => i + 1); setPlaced([]); setChecked(null);
  }

  if (isDone) {
    const pct = Math.round((score / total) * 100);
    return (
      <div style={{ maxWidth: 720 }}>
        <div style={{
          background: pct >= 80 ? 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))'
                                : 'linear-gradient(135deg, #6366F1, #4338CA)',
          borderRadius: 'var(--r-2xl)', padding: '36px', color: 'white', textAlign: 'center',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
        }}>
          <div style={{ fontSize: 56, marginBottom: 10 }}>{pct >= 80 ? '🏆' : '💪'}</div>
          <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 4 }}>{pct}%</div>
          <div style={{ fontSize: 15, opacity: 0.9, fontWeight: 700 }}>
            {score} de {total} oraciones correctas
          </div>
        </div>
        <button className="btn btn-primary btn-lg" onClick={onExit} style={{ background: '#4338CA', boxShadow: '0 4px 0 #312E81' }}>
          ← VOLVER A LA TEORÍA
        </button>
      </div>
    );
  }

  const isCorrect = checked === true;
  const correctSentence = mdSentence(ex.en, ex.form);
  const bank   = ex.tiles.filter(t => !placed.includes(t.id));
  const answer = placed.map(id => ex.tiles.find(t => t.id === id));

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={onExit} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)' }}>
            <span>Ejercicio {idx + 1} / {total}</span>
            <span style={{ color: modalDef.color.text }}>{filter ? `practicando "${filter}"` : 'todos los modales'}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: modalDef.color.solid }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* Prompt */}
      <div style={{
        background: modalDef.color.bg, border: `2px solid ${modalDef.color.border}`,
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: modalDef.color.text, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
          🇪🇸 Traduce esta oración al inglés
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: modalDef.color.text, fontStyle: 'italic' }}>
          "{ex.es}"
        </div>
      </div>

      {/* Board */}
      <div className={shake ? 'shake' : ''} style={{
        background: 'white',
        border: `2px solid ${checked === null ? 'var(--border)' : isCorrect ? 'var(--emerald)' : 'var(--rose)'}`,
        borderRadius: 'var(--r-2xl)', padding: '20px 22px', boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          Tu respuesta
        </div>
        <div style={{
          minHeight: 56, border: '2px dashed var(--border-strong)', borderRadius: 'var(--r-lg)',
          padding: '10px 12px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center',
          background: 'var(--bg)', marginBottom: 6,
        }}>
          {answer.length === 0 && (
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--faint)', fontStyle: 'italic' }}>
              Toca las palabras del banco en orden…
            </span>
          )}
          {answer.map(t => (
            <button key={t.id} onClick={() => removeTile(t.id)} disabled={checked !== null}
              style={{
                background: checked === null ? modalDef.color.solid : isCorrect ? 'var(--emerald)' : 'var(--rose)',
                color: 'white', border: 'none', borderRadius: 'var(--r-md)',
                padding: '9px 14px', fontSize: 15, fontWeight: 800, fontFamily: 'var(--font)',
                cursor: checked === null ? 'pointer' : 'default',
                boxShadow: '0 2px 0 rgba(0,0,0,0.18)',
              }}>
              {t.word}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 14, minHeight: 18 }}>
          {checked === null && answer.length > 0 && (
            <button onClick={clearAnswer} style={{
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)',
              fontSize: 11.5, fontWeight: 800, color: 'var(--faint)',
            }}>
              ↺ Limpiar
            </button>
          )}
        </div>

        <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          Banco de palabras
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, minHeight: 44 }}>
          {bank.map(t => (
            <button key={t.id} onClick={() => placeTile(t.id)} disabled={checked !== null}
              style={{
                background: 'white', color: 'var(--text)',
                border: '2px solid var(--border-strong)', borderRadius: 'var(--r-md)',
                padding: '9px 14px', fontSize: 15, fontWeight: 800, fontFamily: 'var(--font)',
                cursor: checked !== null ? 'default' : 'pointer',
                opacity: checked !== null ? 0.5 : 1,
                boxShadow: '0 2px 0 var(--border-strong)',
              }}>
              {t.word}
            </button>
          ))}
          {bank.length === 0 && (
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--faint)', fontStyle: 'italic' }}>
              (todas las palabras están en tu respuesta)
            </span>
          )}
        </div>

        {checked === null ? (
          <div style={{ marginTop: 20 }}>
            <button className={`btn btn-lg${answer.length ? ' btn-primary' : ''}`}
              disabled={answer.length === 0} onClick={handleCheck}
              style={answer.length ? { background: modalDef.color.solid, boxShadow: `0 4px 0 ${modalDef.color.text}` } : {}}>
              COMPROBAR
            </button>
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                background: isCorrect ? 'var(--emerald)' : 'var(--rose)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {isCorrect
                  ? <svg width="20" height="20" viewBox="0 0 24 24"><path d="M5 12l5 5 9-11" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 900, fontSize: 16, color: isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)' }}>
                  {isCorrect ? '¡Correcto!' : 'Respuesta correcta:'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)' }}>
                    {correctSentence}
                  </span>
                  <button onClick={() => mdSpeak(correctSentence)} title="Escuchar" style={{
                    background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <button className="btn btn-lg" onClick={handleNext} style={{
              background: isCorrect ? 'var(--emerald)' : 'var(--rose)', color: 'white',
              boxShadow: `0 4px 0 ${isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)'}`,
            }}>
              {idx + 1 >= total ? 'TERMINAR' : 'SIGUIENTE'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ModalsScreen = ModalsScreen;
