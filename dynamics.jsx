// dynamics.jsx — Niveles y dinámicas por estado.
// ──────────────────────────────────────────────────────────────────────────
// Cada TEMA (17) tiene 3 NIVELES → 51 nodos:
//   Nivel 1 = estado A (6 dinámicas, con ayuda)
//   Nivel 2 = estado B (6 dinámicas, con ayuda)
//   Nivel 3 = examen del tema (mezcla, SIN ayuda)
// El contenido y las imágenes son propios de cada estado.
//
// PILOTO: Presente Continuo (a1-1) → California (N1) + Nevada (N2) + Examen.

// Dinámicas por estado (5 c/u) — parseadas del txt de contenido secuencial
// (dynamics-content.jsx). Texto temático por ciudad/tema, vocabulario progresivo.
const STATE_DYNAMICS = (typeof window !== 'undefined' && window.STATE_DYNAMICS_RAW) ? window.STATE_DYNAMICS_RAW : {};

// Ayuda (teoría + estructura) por tema. Pilotada para Presente Continuo.
const THEME_HELP = {
  'a1-1': {
    title: 'Presente Continuo',
    aux: 'am / is / are',
    structure: {
      affirmative: 'Subject + am/is/are + verbo-ing',
      negative: 'Subject + am/is/are + not + verbo-ing',
      question: 'Am/Is/Are + subject + verbo-ing?',
    },
    // Qué auxiliar usa cada pronombre (para temas de tiempos verbales).
    pronouns: [
      { p: 'I', aux: 'am' },
      { p: 'He / She / It', aux: 'is' },
      { p: 'You / We / They', aux: 'are' },
    ],
    usage: 'Para acciones que ocurren ahora mismo. Pistas: now, right now, at the moment.',
    example: { en: 'She is studying right now.', es: 'Ella está estudiando ahora mismo.' },
  },
  'a1-2': {
    title: 'Presente Simple', aux: 'do / does',
    structure: {
      affirmative: 'Subject + verbo (+ -s/-es con He/She/It)',
      negative: "Subject + don't/doesn't + verbo",
      question: 'Do/Does + subject + verbo?',
    },
    pronouns: [
      { p: 'I / You / We / They', aux: 'do' },
      { p: 'He / She / It', aux: 'does' },
    ],
    usage: 'Rutinas, hábitos y hechos generales. Pistas: every day, usually, always.',
    example: { en: 'He works in Phoenix.', es: 'Él trabaja en Phoenix.' },
  },
  'a1-3': {
    title: 'Artículos (a / an / the)',
    usage: '"a/an" = uno cualquiera (an antes de vocal). "the" = algo específico ya conocido.',
    example: { en: 'I see a dog and the dog is big.', es: 'Veo un perro y el perro es grande.' },
  },
  'a1-4': {
    title: 'Números',
    usage: 'Cardinales (one, two…) para contar; ordinales (first, second…) para orden y fechas.',
    example: { en: 'I have three apples.', es: 'Tengo tres manzanas.' },
  },
  'a1-5': {
    title: 'Adverbios de Frecuencia',
    usage: 'always, usually, often, sometimes, never. Van antes del verbo principal.',
    example: { en: 'She always drinks coffee.', es: 'Ella siempre toma café.' },
  },
  'a1-6': {
    title: 'Pronombres',
    pronouns: [
      { p: 'Yo / Tú', aux: 'I / You' },
      { p: 'Él / Ella / Eso', aux: 'He / She / It' },
      { p: 'Nosotros / Ellos', aux: 'We / They' },
    ],
    usage: 'Reemplazan al sujeto. Acompañan a am/is/are según la persona.',
    example: { en: 'They are my friends.', es: 'Ellos son mis amigos.' },
  },
  'a1-7': {
    title: 'Preposiciones',
    usage: 'in (dentro), on (sobre), at (en un punto), under, next to… ubican en lugar/tiempo.',
    example: { en: 'The book is on the table.', es: 'El libro está sobre la mesa.' },
  },
  'a1-8': {
    title: 'There is / There are',
    structure: {
      affirmative: 'There is (singular) / There are (plural)',
      negative: "There isn't / There aren't",
      question: 'Is there…? / Are there…?',
    },
    usage: 'Para decir que algo existe o hay algo. There is + singular, There are + plural.',
    example: { en: 'There are two cars.', es: 'Hay dos autos.' },
  },
  'a1-9': {
    title: 'Has / Have',
    pronouns: [
      { p: 'I / You / We / They', aux: 'have' },
      { p: 'He / She / It', aux: 'has' },
    ],
    usage: 'Para posesión. He/She/It usan "has"; el resto usa "have".',
    example: { en: 'She has a cat.', es: 'Ella tiene un gato.' },
  },
  'a2-1': {
    title: 'Futuro Simple (Will)', aux: 'will',
    structure: {
      affirmative: 'Subject + will + verbo',
      negative: "Subject + won't + verbo",
      question: 'Will + subject + verbo?',
    },
    usage: 'Decisiones espontáneas, promesas y predicciones. Pistas: tomorrow, next week.',
    example: { en: 'I will call you tomorrow.', es: 'Te llamaré mañana.' },
  },
  'a2-2': {
    title: 'Futuro Continuo', aux: 'will be',
    structure: {
      affirmative: 'Subject + will be + verbo-ing',
      negative: "Subject + won't be + verbo-ing",
      question: 'Will + subject + be + verbo-ing?',
    },
    usage: 'Acción en progreso en un momento futuro. Pistas: this time tomorrow, at 8 pm.',
    example: { en: 'I will be working at 8 pm.', es: 'Estaré trabajando a las 8 pm.' },
  },
  'a2-3': {
    title: 'Futuro · Going to', aux: 'going to',
    structure: {
      affirmative: 'Subject + am/is/are + going to + verbo',
      negative: 'Subject + am/is/are + not + going to + verbo',
      question: 'Am/Is/Are + subject + going to + verbo?',
    },
    pronouns: [
      { p: 'I', aux: 'am going to' },
      { p: 'He / She / It', aux: 'is going to' },
      { p: 'You / We / They', aux: 'are going to' },
    ],
    usage: 'Planes ya decididos o predicciones con evidencia. Pistas: planned, look at those clouds.',
    example: { en: 'I am going to travel next month.', es: 'Voy a viajar el próximo mes.' },
  },
  'a2-4': {
    title: 'Pasado Continuo', aux: 'was / were',
    structure: {
      affirmative: 'Subject + was/were + verbo-ing',
      negative: "Subject + wasn't/weren't + verbo-ing",
      question: 'Was/Were + subject + verbo-ing?',
    },
    pronouns: [
      { p: 'I / He / She / It', aux: 'was' },
      { p: 'You / We / They', aux: 'were' },
    ],
    usage: 'Acción en progreso en un momento del pasado. Pistas: while, when, at 5 pm yesterday.',
    example: { en: 'They were playing soccer.', es: 'Ellos estaban jugando fútbol.' },
  },
  'a2-5': {
    title: 'Pasado Simple', aux: 'did',
    structure: {
      affirmative: 'Subject + verbo-ed (o irregular)',
      negative: "Subject + didn't + verbo",
      question: 'Did + subject + verbo?',
    },
    usage: 'Acciones terminadas en el pasado. Pistas: yesterday, last week, ago, in 2010.',
    example: { en: 'She visited Chicago last year.', es: 'Ella visitó Chicago el año pasado.' },
  },
  'a2-6': {
    title: 'Verbos Modales',
    usage: 'can (poder), must (deber), should (debería), may/might (quizá). Van antes del verbo base.',
    example: { en: 'You should study more.', es: 'Deberías estudiar más.' },
  },
  'a2-7': {
    title: 'Adjetivos',
    usage: 'Describen al sustantivo y van ANTES de él. Comparativos: -er/more; superlativos: -est/most.',
    example: { en: 'It is a beautiful city.', es: 'Es una ciudad hermosa.' },
  },
  'a2-8': {
    title: 'Cuantificadores',
    usage: 'some/any, much/many, a lot of, few/little. Indican cantidad.',
    example: { en: 'There are many people.', es: 'Hay muchas personas.' },
  },
};

// Construye el examen (Nivel 3): mezcla de ambos estados, hasta 10 dinámicas.
function buildExam(d1, d2) {
  return [...d1.slice(0, 5), ...d2.slice(0, 5)];
}
function _icon(slug) { return (typeof window.stateIcon === 'function') ? window.stateIcon(slug) : null; }

// Imagen representativa de un LUGAR por estado (carpeta assets/states/<slug>/img).
const STATE_LANDMARK = {
  california: 'Golden-Gate-Bridge.png',
  nevada: 'Vegas.png',
  // Lugares tomados de las tarjetas (imagen del sitio en la parte superior).
  arizona: 'gran-canon.png',
  oregon: 'crater-lake.png',
  wyoming: 'yellowstone.png',
  colorado: 'garden-of-gods.png',
  // Estados de los temas finales (tarjeta como imagen de lugar).
  illinois: 'landmark.png', missouri: 'landmark.png', arkansas: 'landmark.png',
  louisiana: 'landmark.png', mississippi: 'landmark.png', alabama: 'landmark.png',
  tennessee: 'landmark.png', kentucky: 'landmark.png', 'new-york': 'landmark.png',
  ...(typeof window !== 'undefined' && window.GEN_LANDMARK ? window.GEN_LANDMARK : {}),
};
function _landmark(slug) {
  return STATE_LANDMARK[slug] ? `assets/states/${slug}/img/${STATE_LANDMARK[slug]}` : null;
}

// Devuelve los 3 niveles de un tema (usa STEP_LEVELS de states.jsx).
function getThemeLevels(stepId) {
  const lv = (window.STEP_LEVELS || {})[stepId];
  if (!lv) return [];
  const [s1, n1, c1] = lv[0];
  const [s2, n2, c2] = lv[1];
  const d1 = STATE_DYNAMICS[s1] || [];
  const d2 = STATE_DYNAMICS[s2] || [];
  const help = THEME_HELP[stepId] || null;
  const exam = (typeof window !== 'undefined' && window.EXAM_DYNAMICS_RAW && window.EXAM_DYNAMICS_RAW[stepId])
    || buildExam(d1, d2);
  // Número global de estado (1..34): por el orden del tema en el camino.
  const ti = (window.LEARNING_PATH || []).findIndex(s => s.id === stepId);
  const n1num = ti >= 0 ? ti * 2 + 1 : null;
  const n2num = ti >= 0 ? ti * 2 + 2 : null;
  return [
    { id: stepId + '-1', n: 1, exam: false, slug: s1, state: n1, city: c1, stateNum: n1num, icon: _icon(s1), landmark: _landmark(s1), label: `Nivel 1 · ${n1}`, dynamics: d1, help, ready: d1.length > 0 },
    { id: stepId + '-2', n: 2, exam: false, slug: s2, state: n2, city: c2, stateNum: n2num, icon: _icon(s2), landmark: _landmark(s2), label: `Nivel 2 · ${n2}`, dynamics: d2, help, ready: d2.length > 0 },
    { id: stepId + '-3', n: 3, exam: true, label: 'Examen', dynamics: exam, help: null, ready: exam.length > 0 },
  ];
}

// ── Progreso por nivel (localStorage 'efj_levels') ──────────────────────────
function getDoneLevels() {
  try { return new Set(JSON.parse(localStorage.getItem('efj_levels') || '[]')); } catch { return new Set(); }
}
function isLevelDone(id) { return getDoneLevels().has(id); }
function markLevelDone(id) {
  const s = getDoneLevels();
  if (s.has(id)) return;
  s.add(id);
  localStorage.setItem('efj_levels', JSON.stringify([...s]));
  window.dispatchEvent(new CustomEvent('section-completed', { detail: id }));
}

// Lista ordenada de los 51 niveles (3 por tema del LEARNING_PATH).
function allLevelIds() {
  const ids = [];
  (window.LEARNING_PATH || []).forEach(s => { ids.push(s.id + '-1', s.id + '-2', s.id + '-3'); });
  return ids;
}
// Un nivel está desbloqueado si el anterior (en el camino global) está hecho.
function isLevelUnlockedById(id) {
  if (typeof isAdminMode === 'function' && isAdminMode()) return true;
  const ids = allLevelIds();
  const i = ids.indexOf(id);
  if (i <= 0) return true;
  return isLevelDone(ids[i - 1]);
}
// Tema completo = su examen (nivel 3) está hecho.
function isThemeComplete(stepId) { return isLevelDone(stepId + '-3'); }

window.STATE_DYNAMICS = STATE_DYNAMICS;
window.THEME_HELP = THEME_HELP;
window.getThemeLevels = getThemeLevels;
window.isLevelDone = isLevelDone;
window.markLevelDone = markLevelDone;
window.isLevelUnlockedById = isLevelUnlockedById;
window.isThemeComplete = isThemeComplete;
