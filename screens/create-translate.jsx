// Ejercicio: Crear y Traducir — banco de palabras con corrección automática.
// El alumno arma la oración en inglés tocando fichas según los parámetros dados
// (tiempo verbal, forma, pronombre, verbo, complemento) y luego la traduce al
// español. 100 ejercicios pre-generados sin repetir.

// ── Pronombres ──────────────────────────────────────────────────────────────
// enNum: persona/número en inglés · esIdx: índice de conjugación en español
const CT2_PRONOUNS = [
  { en: 'I',    es: 'Yo',       enNum: '1s', esIdx: 0 },
  { en: 'You',  es: 'Tú',       enNum: '2s', esIdx: 1 },
  { en: 'He',   es: 'Él',       enNum: '3s', esIdx: 2 },
  { en: 'She',  es: 'Ella',     enNum: '3s', esIdx: 2 },
  { en: 'We',   es: 'Nosotros', enNum: '1p', esIdx: 3 },
  { en: 'They', es: 'Ellos',    enNum: '3p', esIdx: 4 },
];

// ── Conjugación de auxiliares en español (índices: yo, tú, él/ella, nos, ellos)
const CT2_ESTAR = {
  pres: ['estoy', 'estás', 'está', 'estamos', 'están'],
  imp:  ['estaba', 'estabas', 'estaba', 'estábamos', 'estaban'],
  fut:  ['estaré', 'estarás', 'estará', 'estaremos', 'estarán'],
};
const CT2_IR_PRES = ['voy', 'vas', 'va', 'vamos', 'van'];

// ── Verbos curados — conjugación completa en inglés y español ────────────────
const CT2_VERBS = [
  {
    en: 'work', es: 'trabajar', base: 'work', third: 'works', past: 'worked', ing: 'working',
    esGer: 'trabajando',
    esPres: ['trabajo', 'trabajas', 'trabaja', 'trabajamos', 'trabajan'],
    esPret: ['trabajé', 'trabajaste', 'trabajó', 'trabajamos', 'trabajaron'],
    esFut:  ['trabajaré', 'trabajarás', 'trabajará', 'trabajaremos', 'trabajarán'],
    comps: [
      { en: ['in', 'an', 'office'], es: ['en', 'una', 'oficina'] },
      { en: ['every', 'day'],       es: ['todos', 'los', 'días'] },
    ],
  },
  {
    en: 'eat', es: 'comer', base: 'eat', third: 'eats', past: 'ate', ing: 'eating',
    esGer: 'comiendo',
    esPres: ['como', 'comes', 'come', 'comemos', 'comen'],
    esPret: ['comí', 'comiste', 'comió', 'comimos', 'comieron'],
    esFut:  ['comeré', 'comerás', 'comerá', 'comeremos', 'comerán'],
    comps: [
      { en: ['an', 'apple'], es: ['una', 'manzana'] },
      { en: ['pizza'],       es: ['pizza'] },
    ],
  },
  {
    en: 'study', es: 'estudiar', base: 'study', third: 'studies', past: 'studied', ing: 'studying',
    esGer: 'estudiando',
    esPres: ['estudio', 'estudias', 'estudia', 'estudiamos', 'estudian'],
    esPret: ['estudié', 'estudiaste', 'estudió', 'estudiamos', 'estudiaron'],
    esFut:  ['estudiaré', 'estudiarás', 'estudiará', 'estudiaremos', 'estudiarán'],
    comps: [
      { en: ['English'], es: ['inglés'] },
      { en: ['math'],    es: ['matemáticas'] },
    ],
  },
  {
    en: 'live', es: 'vivir', base: 'live', third: 'lives', past: 'lived', ing: 'living',
    esGer: 'viviendo',
    esPres: ['vivo', 'vives', 'vive', 'vivimos', 'viven'],
    esPret: ['viví', 'viviste', 'vivió', 'vivimos', 'vivieron'],
    esFut:  ['viviré', 'vivirás', 'vivirá', 'viviremos', 'vivirán'],
    comps: [
      { en: ['in', 'Mexico'], es: ['en', 'México'] },
      { en: ['here'],         es: ['aquí'] },
    ],
  },
  {
    en: 'drink', es: 'beber', base: 'drink', third: 'drinks', past: 'drank', ing: 'drinking',
    esGer: 'bebiendo',
    esPres: ['bebo', 'bebes', 'bebe', 'bebemos', 'beben'],
    esPret: ['bebí', 'bebiste', 'bebió', 'bebimos', 'bebieron'],
    esFut:  ['beberé', 'beberás', 'beberá', 'beberemos', 'beberán'],
    comps: [
      { en: ['coffee'], es: ['café'] },
      { en: ['water'],  es: ['agua'] },
    ],
  },
  {
    en: 'read', es: 'leer', base: 'read', third: 'reads', past: 'read', ing: 'reading',
    esGer: 'leyendo',
    esPres: ['leo', 'lees', 'lee', 'leemos', 'leen'],
    esPret: ['leí', 'leíste', 'leyó', 'leímos', 'leyeron'],
    esFut:  ['leeré', 'leerás', 'leerá', 'leeremos', 'leerán'],
    comps: [
      { en: ['a', 'book'],   es: ['un', 'libro'] },
      { en: ['the', 'news'], es: ['las', 'noticias'] },
    ],
  },
  {
    en: 'play', es: 'jugar', base: 'play', third: 'plays', past: 'played', ing: 'playing',
    esGer: 'jugando',
    esPres: ['juego', 'juegas', 'juega', 'jugamos', 'juegan'],
    esPret: ['jugué', 'jugaste', 'jugó', 'jugamos', 'jugaron'],
    esFut:  ['jugaré', 'jugarás', 'jugará', 'jugaremos', 'jugarán'],
    comps: [
      { en: ['soccer'], es: ['fútbol'] },
      { en: ['tennis'], es: ['tenis'] },
    ],
  },
  {
    en: 'write', es: 'escribir', base: 'write', third: 'writes', past: 'wrote', ing: 'writing',
    esGer: 'escribiendo',
    esPres: ['escribo', 'escribes', 'escribe', 'escribimos', 'escriben'],
    esPret: ['escribí', 'escribiste', 'escribió', 'escribimos', 'escribieron'],
    esFut:  ['escribiré', 'escribirás', 'escribirá', 'escribiremos', 'escribirán'],
    comps: [
      { en: ['a', 'letter'], es: ['una', 'carta'] },
      { en: ['an', 'email'], es: ['un', 'correo'] },
    ],
  },
  {
    en: 'visit', es: 'visitar', base: 'visit', third: 'visits', past: 'visited', ing: 'visiting',
    esGer: 'visitando',
    esPres: ['visito', 'visitas', 'visita', 'visitamos', 'visitan'],
    esPret: ['visité', 'visitaste', 'visitó', 'visitamos', 'visitaron'],
    esFut:  ['visitaré', 'visitarás', 'visitará', 'visitaremos', 'visitarán'],
    comps: [
      { en: ['the', 'museum'], es: ['el', 'museo'] },
      { en: ['my', 'family'],  es: ['a', 'mi', 'familia'] },
    ],
  },
  {
    en: 'cook', es: 'cocinar', base: 'cook', third: 'cooks', past: 'cooked', ing: 'cooking',
    esGer: 'cocinando',
    esPres: ['cocino', 'cocinas', 'cocina', 'cocinamos', 'cocinan'],
    esPret: ['cociné', 'cocinaste', 'cocinó', 'cocinamos', 'cocinaron'],
    esFut:  ['cocinaré', 'cocinarás', 'cocinará', 'cocinaremos', 'cocinarán'],
    comps: [
      { en: ['dinner'], es: ['la', 'cena'] },
      { en: ['rice'],   es: ['arroz'] },
    ],
  },
  {
    en: 'travel', es: 'viajar', base: 'travel', third: 'travels', past: 'traveled', ing: 'traveling',
    esGer: 'viajando',
    esPres: ['viajo', 'viajas', 'viaja', 'viajamos', 'viajan'],
    esPret: ['viajé', 'viajaste', 'viajó', 'viajamos', 'viajaron'],
    esFut:  ['viajaré', 'viajarás', 'viajará', 'viajaremos', 'viajarán'],
    comps: [
      { en: ['to', 'Spain'], es: ['a', 'España'] },
      { en: ['by', 'train'], es: ['en', 'tren'] },
    ],
  },
  {
    en: 'listen', es: 'escuchar', base: 'listen', third: 'listens', past: 'listened', ing: 'listening',
    esGer: 'escuchando',
    esPres: ['escucho', 'escuchas', 'escucha', 'escuchamos', 'escuchan'],
    esPret: ['escuché', 'escuchaste', 'escuchó', 'escuchamos', 'escucharon'],
    esFut:  ['escucharé', 'escucharás', 'escuchará', 'escucharemos', 'escucharán'],
    comps: [
      { en: ['to', 'music'],     es: ['música'] },
      { en: ['to', 'the', 'radio'], es: ['la', 'radio'] },
    ],
  },
];

// ── Tiempos ─────────────────────────────────────────────────────────────────
const CT2_TENSES = [
  { id: 'pres',    name: 'Presente Simple',   icon: '☀️', color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D' } },
  { id: 'presC',   name: 'Presente Continuo', icon: '⏳', color: { bg: '#DBEAFE', text: '#1E3A8A', border: '#93C5FD' } },
  { id: 'past',    name: 'Pasado Simple',     icon: '🕰️', color: { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4' } },
  { id: 'pastC',   name: 'Pasado Continuo',   icon: '🎞️', color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD' } },
  { id: 'fut',     name: 'Futuro Simple',     icon: '🚀', color: { bg: '#FFE4E6', text: '#9F1239', border: '#FCA5A5' } },
  { id: 'futC',    name: 'Futuro Continuo',   icon: '🛰️', color: { bg: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC' } },
  { id: 'goingto', name: 'Going to',          icon: '🎯', color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7' } },
];
const CT2_FORMS = ['afirmativa', 'negativa', 'interrogativa'];

// Palabras que conservan mayúscula a mitad de oración
const CT2_PROPER_EN = new Set(['English', 'Mexico', 'Spain', 'I']);
const CT2_PROPER_ES = new Set(['México', 'España']);

// ── Auxiliares de conjugación inglesa ────────────────────────────────────────
function ct2Be(num)     { return num === '1s' ? 'am' : num === '3s' ? 'is' : 'are'; }
function ct2BePast(num) { return (num === '1s' || num === '3s') ? 'was' : 'were'; }
function ct2Do(num)     { return num === '3s' ? 'does' : 'do'; }

// ── Constructores de oraciones (devuelven tokens lógicos) ────────────────────
function ct2English({ pron, verb, comp, tenseId, form }) {
  const P = pron.en, num = pron.enNum, c = comp.en;
  const { base, third, past, ing } = verb;
  const isQ = form === 'interrogativa', isN = form === 'negativa';
  switch (tenseId) {
    case 'pres':
      if (isQ) return [ct2Do(num), P, base, ...c];
      if (isN) return [P, ct2Do(num), 'not', base, ...c];
      return [P, (num === '3s' ? third : base), ...c];
    case 'presC':
      if (isQ) return [ct2Be(num), P, ing, ...c];
      if (isN) return [P, ct2Be(num), 'not', ing, ...c];
      return [P, ct2Be(num), ing, ...c];
    case 'past':
      if (isQ) return ['did', P, base, ...c];
      if (isN) return [P, 'did', 'not', base, ...c];
      return [P, past, ...c];
    case 'pastC':
      if (isQ) return [ct2BePast(num), P, ing, ...c];
      if (isN) return [P, ct2BePast(num), 'not', ing, ...c];
      return [P, ct2BePast(num), ing, ...c];
    case 'fut':
      if (isQ) return ['will', P, base, ...c];
      if (isN) return [P, 'will', 'not', base, ...c];
      return [P, 'will', base, ...c];
    case 'futC':
      if (isQ) return ['will', P, 'be', ing, ...c];
      if (isN) return [P, 'will', 'not', 'be', ing, ...c];
      return [P, 'will', 'be', ing, ...c];
    case 'goingto':
      if (isQ) return [ct2Be(num), P, 'going', 'to', base, ...c];
      if (isN) return [P, ct2Be(num), 'not', 'going', 'to', base, ...c];
      return [P, ct2Be(num), 'going', 'to', base, ...c];
    default: return [];
  }
}

function ct2Spanish({ pron, verb, comp, tenseId, form }) {
  const P = pron.es, i = pron.esIdx, c = comp.es;
  const neg = form === 'negativa' ? ['no'] : [];
  switch (tenseId) {
    case 'pres':    return [P, ...neg, verb.esPres[i], ...c];
    case 'presC':   return [P, ...neg, CT2_ESTAR.pres[i], verb.esGer, ...c];
    case 'past':    return [P, ...neg, verb.esPret[i], ...c];
    case 'pastC':   return [P, ...neg, CT2_ESTAR.imp[i], verb.esGer, ...c];
    case 'fut':     return [P, ...neg, verb.esFut[i], ...c];
    case 'futC':    return [P, ...neg, CT2_ESTAR.fut[i], verb.esGer, ...c];
    case 'goingto': return [P, ...neg, CT2_IR_PRES[i], 'a', verb.es, ...c];
    default: return [];
  }
}

function ct2Cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }
function ct2CaseEn(tokens) {
  return tokens.map((w, i) => i === 0 ? ct2Cap(w) : (CT2_PROPER_EN.has(w) ? w : w.toLowerCase()));
}
function ct2CaseEs(tokens) {
  return tokens.map((w, i) => i === 0 ? ct2Cap(w) : (CT2_PROPER_ES.has(w) ? w : w.toLowerCase()));
}

function ct2Shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function ct2Rand(n) { return Math.floor(Math.random() * n); }

// Distractores: otras formas del verbo que NO aparecen en la respuesta correcta
function ct2EnDistractors(verb, correct) {
  const used = new Set(correct.map(w => w.toLowerCase()));
  const forms = [...new Set([verb.base, verb.third, verb.past, verb.ing])];
  return forms.filter(f => !used.has(f.toLowerCase()));
}
function ct2EsDistractors(verb, correct) {
  const used = new Set(correct.map(w => w.toLowerCase()));
  const pool = [...new Set([...verb.esPres, ...verb.esPret, ...verb.esFut, verb.esGer])];
  return ct2Shuffle(pool.filter(f => !used.has(f.toLowerCase()))).slice(0, 3);
}

// Crea el set de fichas (correctas + distractores) ya barajado, con id estable
function ct2Tiles(correct, distractors) {
  return ct2Shuffle([...correct, ...distractors]).map((word, id) => ({ id, word }));
}

// ── Genera el pool de 100 ejercicios únicos ──────────────────────────────────
function ct2BuildPool() {
  const seen = new Set();
  const pool = [];
  let guard = 0;
  while (pool.length < 100 && guard < 8000) {
    guard++;
    const vi = ct2Rand(CT2_VERBS.length);
    const pi = ct2Rand(CT2_PRONOUNS.length);
    const ti = ct2Rand(CT2_TENSES.length);
    const fi = ct2Rand(CT2_FORMS.length);
    const ci = ct2Rand(2);
    const key = `${vi}-${pi}-${ti}-${fi}-${ci}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const verb = CT2_VERBS[vi], pron = CT2_PRONOUNS[pi], tense = CT2_TENSES[ti];
    const form = CT2_FORMS[fi], comp = verb.comps[ci];
    const spec = { verb, pron, tenseId: tense.id, form, comp };

    const enTokens = ct2CaseEn(ct2English(spec));
    const esTokens = ct2CaseEs(ct2Spanish(spec));

    pool.push({
      verb, pron, tense, form, comp,
      enTokens, esTokens,
      enPunct: form === 'interrogativa' ? '?' : '.',
      esPunct: form === 'interrogativa' ? '?' : '.',
      enTiles: ct2Tiles(enTokens, ct2EnDistractors(verb, enTokens)),
      esTiles: ct2Tiles(esTokens, ct2EsDistractors(verb, esTokens)),
    });
  }
  return pool;
}

// Texto final de una oración (con puntuación, ¿? en español)
function ct2Sentence(tokens, punct, isEs) {
  const body = tokens.join(' ');
  if (isEs && punct === '?') return `¿${body}?`;
  return body + punct;
}

function ct2Speak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}

// ── Componente ───────────────────────────────────────────────────────────────
function CreateTranslateScreen({ onExit }) {
  const [pool]                = React.useState(() => ct2BuildPool());
  const [started, setStarted] = React.useState(false);
  const [idx, setIdx]         = React.useState(0);
  const [phase, setPhase]     = React.useState('en');     // 'en' | 'es'
  const [placed, setPlaced]   = React.useState([]);        // ids de fichas en orden
  const [checked, setChecked] = React.useState(null);      // null | true | false
  const [score, setScore]     = React.useState({ en: 0, es: 0 });
  const [shake, setShake]     = React.useState(false);

  const total  = pool.length;
  const isDone = idx >= total;
  const ex     = pool[idx];

  // ── Intro ─────────────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: 'linear-gradient(135deg, #0EA5E9, #0369A1)',
          borderRadius: 'var(--r-2xl)', padding: '32px 36px', color: 'white',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(14,165,233,0.35)',
        }}>
          <div style={{ fontSize: 38, marginBottom: 12 }}>✍️</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>Crear y Traducir</div>
          <div style={{ fontSize: 14, opacity: 0.92, fontWeight: 600, lineHeight: 1.65 }}>
            <strong>100 ejercicios aleatorios</strong> sin repetir. En cada uno te digo en
            español qué oración formar: el <strong>tiempo verbal</strong>, si es
            <strong> afirmativa, negativa o pregunta</strong>, el <strong>pronombre</strong> y
            el <strong>complemento</strong>. El verbo te lo doy con su traducción.<br/><br/>
            <strong>① Arma</strong> la oración en inglés tocando las palabras en orden, y
            <strong> ② tradúcela</strong> al español de la misma forma. Te corrijo al instante.
          </div>
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            <button className="btn btn-ghost" style={{ color: 'white', border: '2px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.1)' }} onClick={onExit}>
              ← Volver
            </button>
            <button className="btn btn-primary" style={{ background: 'white', color: '#0369A1', boxShadow: '0 4px 0 rgba(0,0,0,0.2)', flex: 1 }} onClick={() => setStarted(true)}>
              ▶ EMPEZAR
            </button>
          </div>
        </div>
        <div style={{
          background: 'var(--amber-light)', border: '1.5px solid var(--amber)',
          borderRadius: 'var(--r-lg)', padding: '12px 16px', fontSize: 12.5,
          fontWeight: 700, color: 'var(--amber-dark)', lineHeight: 1.6,
        }}>
          💡 <strong>Ojo:</strong> en el banco de palabras hay fichas trampa (formas del verbo
          que no van). Elige la conjugación correcta según el tiempo y el pronombre.
        </div>
      </div>
    );
  }

  // ── Done ──────────────────────────────────────────────────────────────────
  if (isDone) {
    const totalCorrect = score.en + score.es;
    const pct = Math.round((totalCorrect / (total * 2)) * 100);
    return (
      <div style={{ maxWidth: 720 }}>
        <div style={{
          background: pct >= 80 ? 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))'
                                : 'linear-gradient(135deg, #0EA5E9, #0369A1)',
          borderRadius: 'var(--r-2xl)', padding: '36px', color: 'white', textAlign: 'center',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
        }}>
          <div style={{ fontSize: 56, marginBottom: 10 }}>{pct >= 80 ? '🏆' : '💪'}</div>
          <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 4 }}>{pct}%</div>
          <div style={{ fontSize: 15, opacity: 0.9, fontWeight: 700 }}>
            {totalCorrect} de {total * 2} respuestas correctas
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 20, textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Oraciones en inglés</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#0284C7' }}>{score.en}<span style={{ fontSize: 16, color: 'var(--muted)' }}>/{total}</span></div>
          </div>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 20, textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Traducciones</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--emerald)' }}>{score.es}<span style={{ fontSize: 16, color: 'var(--muted)' }}>/{total}</span></div>
          </div>
        </div>
        <button className="btn btn-primary btn-lg" style={{ background: '#0284C7', boxShadow: '0 4px 0 #075985' }} onClick={onExit}>
          ← VOLVER AL INICIO
        </button>
      </div>
    );
  }

  // ── Ejercicio activo ──────────────────────────────────────────────────────
  const isEs    = phase === 'es';
  const tiles   = isEs ? ex.esTiles : ex.enTiles;
  const correct = isEs ? ex.esTokens : ex.enTokens;
  const punct   = isEs ? ex.esPunct : ex.enPunct;
  const bank    = tiles.filter(t => !placed.includes(t.id));
  const answer  = placed.map(id => tiles.find(t => t.id === id));
  const progress = (idx + (isEs ? 0.5 : 0)) / total;

  const formLabel = ex.form === 'interrogativa' ? 'interrogativa (pregunta)' : ex.form;
  const correctSentence = ct2Sentence(correct, punct, isEs);

  function placeTile(id)  { if (checked === null) setPlaced(p => [...p, id]); }
  function removeTile(id) { if (checked === null) setPlaced(p => p.filter(x => x !== id)); }
  function clearAnswer()  { if (checked === null) setPlaced([]); }

  function handleCheck() {
    const ans = answer.map(t => t.word);
    const ok = ans.length === correct.length && ans.every((w, i) => w === correct[i]);
    setChecked(ok);
    if (ok) {
      setScore(s => ({ ...s, [phase]: s[phase] + 1 }));
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  function handleContinue() {
    if (phase === 'en') {
      setPhase('es'); setPlaced([]); setChecked(null);
    } else {
      setIdx(i => i + 1); setPhase('en'); setPlaced([]); setChecked(null);
    }
  }

  const isCorrect = checked === true;

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
            <span style={{ color: '#0284C7' }}>{isEs ? '② Traducir' : '① Crear'}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: '#0EA5E9' }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score.en + score.es}
        </div>
      </div>

      {/* Consigna */}
      <div style={{
        background: ex.tense.color.bg, border: `2px solid ${ex.tense.color.border}`,
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
      }}>
        {!isEs ? (
          <>
            <div style={{ fontSize: 13, fontWeight: 900, color: ex.tense.color.text, marginBottom: 12 }}>
              {ex.tense.icon} Forma una oración <span style={{ textDecoration: 'underline' }}>{formLabel}</span> en inglés:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '7px 12px', fontSize: 13.5, fontWeight: 700 }}>
              <span style={{ color: ex.tense.color.text, opacity: 0.7 }}>Tiempo:</span>
              <span style={{ color: ex.tense.color.text }}>{ex.tense.name}</span>
              <span style={{ color: ex.tense.color.text, opacity: 0.7 }}>Pronombre:</span>
              <span style={{ color: ex.tense.color.text }}>{ex.pron.en} <em style={{ opacity: 0.7 }}>({ex.pron.es})</em></span>
              <span style={{ color: ex.tense.color.text, opacity: 0.7 }}>Verbo:</span>
              <span style={{ color: ex.tense.color.text, display: 'flex', alignItems: 'center', gap: 8 }}>
                <strong>{ex.verb.base}</strong> <em style={{ opacity: 0.7 }}>— {ex.verb.es}</em>
                <button onClick={() => ct2Speak(ex.verb.base)} title="Escuchar verbo" style={{
                  background: ex.tense.color.text, border: 'none', borderRadius: 6, width: 24, height: 24,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </button>
              </span>
              <span style={{ color: ex.tense.color.text, opacity: 0.7 }}>Complemento:</span>
              <span style={{ color: ex.tense.color.text }}>{ex.comp.en.join(' ')} <em style={{ opacity: 0.7 }}>({ex.comp.es.join(' ')})</em></span>
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 13, fontWeight: 900, color: ex.tense.color.text, marginBottom: 10 }}>
              🇪🇸 Ahora traduce esta oración al español:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button onClick={() => ct2Speak(ct2Sentence(ex.enTokens, ex.enPunct, false))} style={{
                background: ex.tense.color.text, border: 'none', borderRadius: 'var(--r-sm)',
                width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </button>
              <span style={{ fontSize: 19, fontWeight: 800, color: ex.tense.color.text, fontStyle: 'italic' }}>
                "{ct2Sentence(ex.enTokens, ex.enPunct, false)}"
              </span>
            </div>
          </>
        )}
      </div>

      {/* Tablero */}
      <div className={shake ? 'shake' : ''} style={{
        background: 'white',
        border: `2px solid ${checked === null ? 'var(--border)' : isCorrect ? 'var(--emerald)' : 'var(--rose)'}`,
        borderRadius: 'var(--r-2xl)', padding: '20px 22px', boxShadow: 'var(--shadow-sm)',
      }}>
        {/* Área de respuesta */}
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
              Toca las palabras de abajo en orden...
            </span>
          )}
          {answer.map(t => (
            <button key={t.id} onClick={() => removeTile(t.id)} disabled={checked !== null}
              style={{
                background: checked === null ? 'var(--indigo)' : isCorrect ? 'var(--emerald)' : 'var(--rose)',
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

        {/* Banco de palabras */}
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

        {/* Comprobar / feedback */}
        {checked === null ? (
          <div style={{ marginTop: 20 }}>
            <button className={`btn btn-lg${answer.length ? ' btn-primary' : ''}`}
              disabled={answer.length === 0} onClick={handleCheck}
              style={answer.length ? { background: '#0EA5E9', boxShadow: '0 4px 0 #0369A1' } : {}}>
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
                  {!isEs && (
                    <button onClick={() => ct2Speak(correctSentence)} title="Escuchar" style={{
                      background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button className="btn btn-lg" onClick={handleContinue} style={{
              background: isCorrect ? 'var(--emerald)' : 'var(--rose)', color: 'white',
              boxShadow: `0 4px 0 ${isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)'}`,
            }}>
              {phase === 'en' ? '→ TRADUCIR AL ESPAÑOL' : (idx + 1 >= total ? 'TERMINAR' : 'SIGUIENTE EJERCICIO')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.CreateTranslateScreen = CreateTranslateScreen;
