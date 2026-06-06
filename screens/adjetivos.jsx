// Sección de Adjetivos — lista, reglas de comparación y práctica.

const AJ_LIST = [
  // 1 sílaba → + er / + est
  { en: 'tall',    es: 'alto',         comp: 'taller',    sup: 'tallest',     group: 'er' },
  { en: 'short',   es: 'bajo / corto', comp: 'shorter',   sup: 'shortest',    group: 'er' },
  { en: 'small',   es: 'pequeño',      comp: 'smaller',   sup: 'smallest',    group: 'er' },
  { en: 'fast',    es: 'rápido',       comp: 'faster',    sup: 'fastest',     group: 'er' },
  { en: 'slow',    es: 'lento',        comp: 'slower',    sup: 'slowest',     group: 'er' },
  { en: 'old',     es: 'viejo',        comp: 'older',     sup: 'oldest',      group: 'er' },
  { en: 'young',   es: 'joven',        comp: 'younger',   sup: 'youngest',    group: 'er' },
  { en: 'new',     es: 'nuevo',        comp: 'newer',     sup: 'newest',      group: 'er' },
  { en: 'cold',    es: 'frío',         comp: 'colder',    sup: 'coldest',     group: 'er' },
  { en: 'cheap',   es: 'barato',       comp: 'cheaper',   sup: 'cheapest',    group: 'er' },
  { en: 'strong',  es: 'fuerte',       comp: 'stronger',  sup: 'strongest',   group: 'er' },
  { en: 'rich',    es: 'rico',         comp: 'richer',    sup: 'richest',     group: 'er' },
  { en: 'poor',    es: 'pobre',        comp: 'poorer',    sup: 'poorest',     group: 'er' },
  { en: 'smart',   es: 'inteligente',  comp: 'smarter',   sup: 'smartest',    group: 'er' },
  { en: 'kind',    es: 'amable',       comp: 'kinder',    sup: 'kindest',     group: 'er' },

  // 1 sílaba terminada en -e → + r / + st
  { en: 'nice',    es: 'agradable',    comp: 'nicer',     sup: 'nicest',      group: 'r' },
  { en: 'large',   es: 'grande',       comp: 'larger',    sup: 'largest',     group: 'r' },
  { en: 'safe',    es: 'seguro',       comp: 'safer',     sup: 'safest',      group: 'r' },
  { en: 'close',   es: 'cercano',      comp: 'closer',    sup: 'closest',     group: 'r' },
  { en: 'late',    es: 'tarde',        comp: 'later',     sup: 'latest',      group: 'r' },
  { en: 'wide',    es: 'ancho',        comp: 'wider',     sup: 'widest',      group: 'r' },
  { en: 'simple',  es: 'simple',       comp: 'simpler',   sup: 'simplest',    group: 'r' },

  // 1 sílaba CVC → doble consonante + er / est
  { en: 'big',     es: 'grande',       comp: 'bigger',    sup: 'biggest',     group: 'cvc' },
  { en: 'hot',     es: 'caliente',     comp: 'hotter',    sup: 'hottest',     group: 'cvc' },
  { en: 'fat',     es: 'gordo',        comp: 'fatter',    sup: 'fattest',     group: 'cvc' },
  { en: 'thin',    es: 'delgado',      comp: 'thinner',   sup: 'thinnest',    group: 'cvc' },
  { en: 'sad',     es: 'triste',       comp: 'sadder',    sup: 'saddest',     group: 'cvc' },
  { en: 'wet',     es: 'mojado',       comp: 'wetter',    sup: 'wettest',     group: 'cvc' },

  // 2 sílabas terminadas en -y → -ier / -iest
  { en: 'happy',   es: 'feliz',        comp: 'happier',   sup: 'happiest',    group: 'y' },
  { en: 'easy',    es: 'fácil',        comp: 'easier',    sup: 'easiest',     group: 'y' },
  { en: 'busy',    es: 'ocupado',      comp: 'busier',    sup: 'busiest',     group: 'y' },
  { en: 'pretty',  es: 'bonito',       comp: 'prettier',  sup: 'prettiest',   group: 'y' },
  { en: 'funny',   es: 'gracioso',     comp: 'funnier',   sup: 'funniest',    group: 'y' },
  { en: 'lazy',    es: 'perezoso',     comp: 'lazier',    sup: 'laziest',     group: 'y' },
  { en: 'heavy',   es: 'pesado',       comp: 'heavier',   sup: 'heaviest',    group: 'y' },
  { en: 'early',   es: 'temprano',     comp: 'earlier',   sup: 'earliest',    group: 'y' },

  // 2+ sílabas → more / most
  { en: 'beautiful',   es: 'hermoso',     comp: 'more beautiful',   sup: 'most beautiful',   group: 'more' },
  { en: 'expensive',   es: 'caro',        comp: 'more expensive',   sup: 'most expensive',   group: 'more' },
  { en: 'important',   es: 'importante',  comp: 'more important',   sup: 'most important',   group: 'more' },
  { en: 'difficult',   es: 'difícil',     comp: 'more difficult',   sup: 'most difficult',   group: 'more' },
  { en: 'interesting', es: 'interesante', comp: 'more interesting', sup: 'most interesting', group: 'more' },
  { en: 'comfortable', es: 'cómodo',      comp: 'more comfortable', sup: 'most comfortable', group: 'more' },
  { en: 'dangerous',   es: 'peligroso',   comp: 'more dangerous',   sup: 'most dangerous',   group: 'more' },
  { en: 'famous',      es: 'famoso',      comp: 'more famous',      sup: 'most famous',      group: 'more' },

  // Irregulares
  { en: 'good',   es: 'bueno', comp: 'better',           sup: 'best',                 group: 'irreg' },
  { en: 'bad',    es: 'malo',  comp: 'worse',            sup: 'worst',                group: 'irreg' },
  { en: 'far',    es: 'lejos', comp: 'farther / further', sup: 'farthest / furthest', group: 'irreg' },
  { en: 'little', es: 'poco',  comp: 'less',             sup: 'least',                group: 'irreg' },
];

const AJ_GROUPS = [
  { id: 'er',    label: '1 sílaba → + er / + est',                       color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD' } },
  { id: 'r',     label: '1 sílaba terminada en -e → + r / + st',         color: { bg: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC' } },
  { id: 'cvc',   label: '1 sílaba CVC → doble consonante + er / est',    color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD' } },
  { id: 'y',     label: '2 sílabas terminadas en -y → -ier / -iest',     color: { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4' } },
  { id: 'more',  label: '2+ sílabas → more / most',                      color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D' } },
  { id: 'irreg', label: 'Irregulares',                                   color: { bg: '#FEE2E2', text: '#7F1D1D', border: '#FCA5A5' } },
];

const AJ_SECTIONS = [
  { id: 'list',  label: 'Lista',         icon: '📚', color: { bg: '#EEF2FF', text: '#3730A3', border: '#A5B4FC', solid: '#6366F1' } },
  { id: 'super', label: 'Superioridad',  icon: '⬆️', color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' } },
  { id: 'infer', label: 'Inferioridad',  icon: '⬇️', color: { bg: '#FEE2E2', text: '#7F1D1D', border: '#FCA5A5', solid: '#DC2626' } },
  { id: 'equal', label: 'Igualdad',      icon: '⚖️', color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', solid: '#10B981' } },
  { id: 'top',   label: 'Superlativos',  icon: '🏆', color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#D97706' } },
];

const AJ_DRILLS = [
  { en: ['He','is','taller','than','me'],                              es: 'Él es más alto que yo.' },
  { en: ['This','book','is','more','interesting','than','that','one'], es: 'Este libro es más interesante que ese.' },
  { en: ['She','is','as','tall','as','her','sister'],                  es: 'Ella es tan alta como su hermana.' },
  { en: ['This','car','is','less','expensive','than','that','one'],    es: 'Este coche es menos caro que ese.' },
  { en: ['He','is','the','tallest','in','the','class'],                es: 'Él es el más alto de la clase.' },
  { en: ['I','am','faster','than','you'],                              es: 'Soy más rápido que tú.' },
  { en: ['This','is','the','most','expensive','book'],                 es: 'Este es el libro más caro.' },
  { en: ['She','is','less','happy','today'],                           es: 'Ella es menos feliz hoy.' },
  { en: ['I','am','not','as','fast','as','him'],                       es: 'No soy tan rápido como él.' },
  { en: ['My','car','is','better','than','yours'],                     es: 'Mi coche es mejor que el tuyo.' },
  { en: ['This','is','the','worst','day'],                             es: 'Este es el peor día.' },
  { en: ['She','is','prettier','than','her','cousin'],                 es: 'Ella es más bonita que su prima.' },
  { en: ['My','house','is','as','big','as','yours'],                   es: 'Mi casa es tan grande como la tuya.' },
  { en: ['You','are','the','smartest'],                                es: 'Tú eres el más inteligente.' },
  { en: ['This','is','less','important'],                              es: 'Esto es menos importante.' },
  { en: ['He','is','the','best','student'],                            es: 'Él es el mejor estudiante.' },
  { en: ['Today','is','hotter','than','yesterday'],                    es: 'Hoy hace más calor que ayer.' },
  { en: ['This','box','is','the','heaviest'],                          es: 'Esta caja es la más pesada.' },
];

const AJ_DISTRACT_POOL = ['more', 'less', 'most', 'least', 'than', 'as', 'the', 'not', 'best', 'worst'];

// Lista completa de adjetivos comunes (ordenada alfabéticamente)
const AJ_FULL = [
  // A
  { en: 'able',        es: 'capaz' },
  { en: 'afraid',      es: 'asustado' },
  { en: 'angry',       es: 'enojado' },
  { en: 'anxious',     es: 'ansioso' },
  { en: 'available',   es: 'disponible' },
  { en: 'awake',       es: 'despierto' },
  { en: 'awesome',     es: 'increíble' },
  { en: 'awful',       es: 'horrible' },
  // B
  { en: 'bad',         es: 'malo' },
  { en: 'beautiful',   es: 'hermoso / bonito' },
  { en: 'big',         es: 'grande' },
  { en: 'bitter',      es: 'amargo' },
  { en: 'black',       es: 'negro' },
  { en: 'blind',       es: 'ciego' },
  { en: 'blue',        es: 'azul' },
  { en: 'bored',       es: 'aburrido (sentir)' },
  { en: 'boring',      es: 'aburrido (cosa)' },
  { en: 'brave',       es: 'valiente' },
  { en: 'bright',      es: 'brillante' },
  { en: 'brown',       es: 'marrón' },
  { en: 'busy',        es: 'ocupado' },
  // C
  { en: 'calm',        es: 'tranquilo' },
  { en: 'careful',     es: 'cuidadoso' },
  { en: 'cheap',       es: 'barato' },
  { en: 'cheerful',    es: 'alegre' },
  { en: 'clean',       es: 'limpio' },
  { en: 'clear',       es: 'claro' },
  { en: 'clever',      es: 'listo' },
  { en: 'close',       es: 'cercano' },
  { en: 'cloudy',      es: 'nublado' },
  { en: 'cold',        es: 'frío' },
  { en: 'colorful',    es: 'colorido' },
  { en: 'comfortable', es: 'cómodo' },
  { en: 'common',      es: 'común' },
  { en: 'complete',    es: 'completo' },
  { en: 'confident',   es: 'seguro de sí' },
  { en: 'confused',    es: 'confundido' },
  { en: 'cool',        es: 'fresco / genial' },
  { en: 'correct',     es: 'correcto' },
  { en: 'crazy',       es: 'loco' },
  { en: 'creative',    es: 'creativo' },
  { en: 'curious',     es: 'curioso' },
  { en: 'cute',        es: 'lindo' },
  // D
  { en: 'dangerous',   es: 'peligroso' },
  { en: 'dark',        es: 'oscuro' },
  { en: 'dead',        es: 'muerto' },
  { en: 'deep',        es: 'profundo' },
  { en: 'delicious',   es: 'delicioso' },
  { en: 'different',   es: 'diferente' },
  { en: 'difficult',   es: 'difícil' },
  { en: 'dirty',       es: 'sucio' },
  { en: 'dry',         es: 'seco' },
  { en: 'dull',        es: 'soso / aburrido' },
  // E
  { en: 'early',       es: 'temprano' },
  { en: 'easy',        es: 'fácil' },
  { en: 'elegant',     es: 'elegante' },
  { en: 'empty',       es: 'vacío' },
  { en: 'excellent',   es: 'excelente' },
  { en: 'excited',     es: 'emocionado' },
  { en: 'exciting',    es: 'emocionante' },
  { en: 'exhausted',   es: 'agotado' },
  { en: 'expensive',   es: 'caro' },
  // F
  { en: 'famous',      es: 'famoso' },
  { en: 'fancy',       es: 'elegante / sofisticado' },
  { en: 'far',         es: 'lejano' },
  { en: 'fast',        es: 'rápido' },
  { en: 'fat',         es: 'gordo' },
  { en: 'fine',        es: 'bien / fino' },
  { en: 'flat',        es: 'plano' },
  { en: 'foolish',     es: 'tonto' },
  { en: 'fresh',       es: 'fresco' },
  { en: 'friendly',    es: 'amigable' },
  { en: 'full',        es: 'lleno' },
  { en: 'funny',       es: 'gracioso' },
  // G
  { en: 'generous',    es: 'generoso' },
  { en: 'gentle',      es: 'suave / amable' },
  { en: 'good',        es: 'bueno' },
  { en: 'gorgeous',    es: 'precioso' },
  { en: 'gray',        es: 'gris' },
  { en: 'great',       es: 'genial / estupendo' },
  { en: 'green',       es: 'verde' },
  { en: 'grumpy',      es: 'gruñón' },
  // H
  { en: 'handsome',    es: 'guapo' },
  { en: 'happy',       es: 'feliz' },
  { en: 'hard',        es: 'duro / difícil' },
  { en: 'healthy',     es: 'sano' },
  { en: 'heavy',       es: 'pesado' },
  { en: 'helpful',     es: 'servicial / útil' },
  { en: 'high',        es: 'alto' },
  { en: 'honest',      es: 'honesto' },
  { en: 'hot',         es: 'caliente' },
  { en: 'huge',        es: 'enorme' },
  { en: 'hungry',      es: 'hambriento' },
  // I
  { en: 'ideal',       es: 'ideal' },
  { en: 'important',   es: 'importante' },
  { en: 'impossible',  es: 'imposible' },
  { en: 'incredible',  es: 'increíble' },
  { en: 'innocent',    es: 'inocente' },
  { en: 'intelligent', es: 'inteligente' },
  { en: 'interesting', es: 'interesante' },
  // J
  { en: 'jealous',     es: 'celoso' },
  { en: 'juicy',       es: 'jugoso' },
  // K
  { en: 'kind',        es: 'amable' },
  // L
  { en: 'large',       es: 'grande' },
  { en: 'last',        es: 'último' },
  { en: 'late',        es: 'tarde / tardío' },
  { en: 'lazy',        es: 'perezoso' },
  { en: 'light',       es: 'ligero / claro' },
  { en: 'little',      es: 'pequeño / poco' },
  { en: 'lively',      es: 'animado' },
  { en: 'lonely',      es: 'solitario' },
  { en: 'long',        es: 'largo' },
  { en: 'loud',        es: 'ruidoso' },
  { en: 'lovely',      es: 'encantador' },
  { en: 'low',         es: 'bajo' },
  { en: 'lucky',       es: 'afortunado' },
  // M
  { en: 'mad',         es: 'enojado / loco' },
  { en: 'magic',       es: 'mágico' },
  { en: 'mean',        es: 'mezquino / cruel' },
  { en: 'messy',       es: 'desordenado' },
  { en: 'modern',      es: 'moderno' },
  { en: 'mysterious',  es: 'misterioso' },
  // N
  { en: 'narrow',      es: 'estrecho' },
  { en: 'nasty',       es: 'desagradable' },
  { en: 'naughty',     es: 'travieso' },
  { en: 'near',        es: 'cercano' },
  { en: 'new',         es: 'nuevo' },
  { en: 'nice',        es: 'agradable' },
  { en: 'noisy',       es: 'ruidoso' },
  { en: 'normal',      es: 'normal' },
  // O
  { en: 'obvious',     es: 'obvio' },
  { en: 'odd',         es: 'raro / impar' },
  { en: 'old',         es: 'viejo / antiguo' },
  { en: 'open',        es: 'abierto' },
  { en: 'ordinary',    es: 'común / corriente' },
  { en: 'original',    es: 'original' },
  // P
  { en: 'painful',     es: 'doloroso' },
  { en: 'patient',     es: 'paciente' },
  { en: 'perfect',     es: 'perfecto' },
  { en: 'pink',        es: 'rosa' },
  { en: 'plain',       es: 'sencillo / liso' },
  { en: 'polite',      es: 'cortés' },
  { en: 'poor',        es: 'pobre' },
  { en: 'popular',     es: 'popular' },
  { en: 'positive',    es: 'positivo' },
  { en: 'powerful',    es: 'poderoso' },
  { en: 'pretty',      es: 'bonito' },
  { en: 'proud',       es: 'orgulloso' },
  { en: 'purple',      es: 'morado' },
  // Q
  { en: 'quick',       es: 'rápido' },
  { en: 'quiet',       es: 'callado / silencioso' },
  // R
  { en: 'rainy',       es: 'lluvioso' },
  { en: 'rare',        es: 'raro' },
  { en: 'raw',         es: 'crudo' },
  { en: 'ready',       es: 'listo' },
  { en: 'real',        es: 'real' },
  { en: 'red',         es: 'rojo' },
  { en: 'rich',        es: 'rico' },
  { en: 'ripe',        es: 'maduro' },
  { en: 'romantic',    es: 'romántico' },
  { en: 'rough',       es: 'áspero / rudo' },
  { en: 'round',       es: 'redondo' },
  { en: 'rude',        es: 'grosero' },
  // S
  { en: 'sad',         es: 'triste' },
  { en: 'safe',        es: 'seguro' },
  { en: 'salty',       es: 'salado' },
  { en: 'scared',      es: 'asustado' },
  { en: 'secret',      es: 'secreto' },
  { en: 'selfish',     es: 'egoísta' },
  { en: 'serious',     es: 'serio' },
  { en: 'sharp',       es: 'afilado / agudo' },
  { en: 'short',       es: 'bajo / corto' },
  { en: 'shy',         es: 'tímido' },
  { en: 'silly',       es: 'tonto' },
  { en: 'simple',      es: 'simple / sencillo' },
  { en: 'sleepy',      es: 'soñoliento' },
  { en: 'slow',        es: 'lento' },
  { en: 'small',       es: 'pequeño' },
  { en: 'smart',       es: 'inteligente' },
  { en: 'smooth',      es: 'suave / liso' },
  { en: 'soft',        es: 'suave / blando' },
  { en: 'solid',       es: 'sólido' },
  { en: 'sore',        es: 'dolorido' },
  { en: 'sour',        es: 'agrio' },
  { en: 'special',     es: 'especial' },
  { en: 'spicy',       es: 'picante' },
  { en: 'square',      es: 'cuadrado' },
  { en: 'stale',       es: 'rancio / pasado' },
  { en: 'strange',     es: 'extraño' },
  { en: 'strict',      es: 'estricto' },
  { en: 'strong',      es: 'fuerte' },
  { en: 'stupid',      es: 'estúpido' },
  { en: 'successful',  es: 'exitoso' },
  { en: 'sunny',       es: 'soleado' },
  { en: 'sweet',       es: 'dulce' },
  // T
  { en: 'tall',        es: 'alto' },
  { en: 'tasty',       es: 'sabroso' },
  { en: 'terrible',    es: 'terrible' },
  { en: 'thick',       es: 'grueso' },
  { en: 'thin',        es: 'delgado' },
  { en: 'thirsty',     es: 'sediento' },
  { en: 'tidy',        es: 'ordenado' },
  { en: 'tight',       es: 'apretado' },
  { en: 'tiny',        es: 'diminuto' },
  { en: 'tired',       es: 'cansado' },
  { en: 'tough',       es: 'duro / resistente' },
  { en: 'true',        es: 'verdadero' },
  // U
  { en: 'ugly',        es: 'feo' },
  { en: 'unique',      es: 'único' },
  { en: 'unkind',      es: 'desagradable' },
  { en: 'useful',      es: 'útil' },
  { en: 'useless',     es: 'inútil' },
  // V
  { en: 'vague',       es: 'vago' },
  { en: 'valuable',    es: 'valioso' },
  // W
  { en: 'warm',        es: 'cálido / templado' },
  { en: 'weak',        es: 'débil' },
  { en: 'weird',       es: 'extraño' },
  { en: 'wet',         es: 'mojado' },
  { en: 'white',       es: 'blanco' },
  { en: 'wide',        es: 'ancho' },
  { en: 'wild',        es: 'salvaje' },
  { en: 'windy',       es: 'ventoso' },
  { en: 'wise',        es: 'sabio' },
  { en: 'wonderful',   es: 'maravilloso' },
  { en: 'worried',     es: 'preocupado' },
  { en: 'wrong',       es: 'equivocado' },
  // Y
  { en: 'yellow',      es: 'amarillo' },
  { en: 'young',       es: 'joven' },
];

function ajSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function ajShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function useAjNarrow(maxPx) {
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

// ── Pantalla principal ──────────────────────────────────────────────────────
function AdjetivosScreen() {
  const [view, setView]       = React.useState('theory');
  const [section, setSection] = React.useState('list');

  if (view === 'practice') {
    return <AjPracticeScreen onExit={() => setView('theory')}/>;
  }

  function goPractice() { setView('practice'); }

  const sec = AJ_SECTIONS.find(s => s.id === section);

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #DB2777, #9D174D)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 20, boxShadow: '0 8px 24px rgba(219,39,119,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 38 }}>🎨</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Adjetivos</div>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600, lineHeight: 1.5 }}>
              Lista de adjetivos comunes y sus formas de comparación: <strong>superioridad,
              inferioridad, igualdad y superlativos</strong>. Practica al final con ejercicios
              de armado de oraciones.
            </div>
          </div>
        </div>
      </div>

      {/* Pills selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {AJ_SECTIONS.map(s => {
          const isSel = s.id === section;
          return (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 800, fontSize: 14,
              padding: '8px 16px', borderRadius: 999,
              background: isSel ? s.color.solid : 'white',
              color: isSel ? 'white' : s.color.text,
              border: `2px solid ${isSel ? s.color.solid : s.color.border}`,
              boxShadow: isSel ? `0 3px 0 ${s.color.text}33` : 'none',
              transition: 'all 0.12s',
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}>
              <span>{s.icon}</span>
              {s.label}
            </button>
          );
        })}
      </div>

      {section === 'list'  && <AjListView/>}
      {section === 'super' && <AjSuperView onPractice={goPractice}/>}
      {section === 'infer' && <AjInferView onPractice={goPractice}/>}
      {section === 'equal' && <AjEqualView onPractice={goPractice}/>}
      {section === 'top'   && <AjTopView onPractice={goPractice}/>}
    </div>
  );
}

// ── Vista: Lista ────────────────────────────────────────────────────────────
function AjListView() {
  const [practiceMode, setPracticeMode] = React.useState(false);
  const [revealed, setRevealed]         = React.useState(() => new Set());

  function toggleReveal(idx) {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  }
  function togglePractice() {
    setPracticeMode(p => !p);
    setRevealed(new Set());
  }
  function revealAll() { setRevealed(new Set(AJ_FULL.map((_, i) => i))); }
  function hideAll()   { setRevealed(new Set()); }

  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 14, flexWrap: 'wrap',
        background: 'white', border: '1.5px solid var(--border)',
        borderRadius: 'var(--r-lg)', padding: '12px 16px',
      }}>
        <div style={{ flex: 1, minWidth: 220, fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
          📚 <strong>{AJ_FULL.length} adjetivos</strong> ordenados alfabéticamente con su traducción.
          Toca 🔊 para escuchar la pronunciación.
        </div>
        <button onClick={togglePractice} style={{
          background: practiceMode ? '#FCD34D' : '#6366F1',
          color: practiceMode ? '#92400E' : 'white',
          border: 'none', borderRadius: 999, padding: '8px 14px',
          fontSize: 12.5, fontWeight: 800, cursor: 'pointer', fontFamily: 'var(--font)',
          whiteSpace: 'nowrap',
        }}>
          {practiceMode ? '✓ Práctica activa' : '🎯 Activar práctica'}
        </button>
      </div>

      {practiceMode && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap',
          background: 'var(--amber-light)', border: '1.5px solid var(--amber)',
          borderRadius: 'var(--r-lg)', padding: '10px 14px',
        }}>
          <div style={{ fontSize: 18 }}>👀</div>
          <div style={{ flex: 1, fontSize: 12.5, fontWeight: 700, color: 'var(--amber-dark)' }}>
            Toca cualquier celda para revelar su traducción.
          </div>
          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--amber-dark)', whiteSpace: 'nowrap' }}>
            {revealed.size} / {AJ_FULL.length} reveladas
          </div>
          <button onClick={revealed.size === AJ_FULL.length ? hideAll : revealAll} style={{
            background: 'white', border: '1.5px solid var(--amber)', color: 'var(--amber-dark)',
            borderRadius: 999, padding: '5px 12px', fontSize: 11.5, fontWeight: 800,
            cursor: 'pointer', fontFamily: 'var(--font)', whiteSpace: 'nowrap',
          }}>
            {revealed.size === AJ_FULL.length ? 'Ocultar todas' : 'Revelar todas'}
          </button>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        padding: 8,
        boxShadow: 'var(--shadow-sm)',
        columnGap: 4,
      }}>
        {AJ_FULL.map((a, i) => {
          const isHidden   = practiceMode && !revealed.has(i);
          const isRevealed = practiceMode && revealed.has(i);
          return (
            <div key={i}
              onClick={() => practiceMode && toggleReveal(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '7px 10px',
                borderBottom: '1px solid var(--border)',
                cursor: practiceMode ? 'pointer' : 'default',
                background: isRevealed ? 'var(--emerald-light)' : 'transparent',
                borderRadius: isRevealed ? 6 : 0,
                transition: 'background 0.12s',
              }}>
              <button onClick={(e) => { e.stopPropagation(); ajSpeak(a.en); }}
                title={`Escuchar "${a.en}"`}
                style={{
                  background: 'var(--indigo-light)', border: 'none',
                  borderRadius: 6, padding: 0, cursor: 'pointer',
                  width: 22, height: 22, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--indigo-dark)',
                }}>
                <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 15, fontWeight: 900, lineHeight: 1.2,
                  color: 'var(--text)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {a.en}
                </div>
                <div style={{
                  fontSize: 13, fontWeight: 600, lineHeight: 1.25, marginTop: 1,
                  background: isHidden ? 'var(--border-strong)' : 'transparent',
                  color: isHidden ? 'transparent' : 'var(--muted)',
                  borderRadius: 4,
                  userSelect: isHidden ? 'none' : 'auto',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {isHidden ? '••••••' : a.es}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Reglas de syllabes (usado en Superioridad y Superlativos) ──────────────
function AjRulesTable({ kind, color }) {
  // kind = 'comp' o 'sup'
  const cols = kind === 'comp'
    ? [{ k: 'er', t: '+ er' }, { k: 'r', t: '+ r' }, { k: 'cvc', t: 'doble + er' }, { k: 'y', t: '-y → -ier' }, { k: 'more', t: 'more + adj' }, { k: 'irreg', t: 'irregular' }]
    : [{ k: 'er', t: '+ est' }, { k: 'r', t: '+ st' }, { k: 'cvc', t: 'doble + est' }, { k: 'y', t: '-y → -iest' }, { k: 'more', t: 'the most + adj' }, { k: 'irreg', t: 'irregular' }];
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8,
    }}>
      {AJ_GROUPS.map(g => {
        const ex = AJ_LIST.find(a => a.group === g.id);
        const transform = cols.find(c => c.k === g.id);
        return (
          <div key={g.id} style={{
            background: g.color.bg, border: `1.5px solid ${g.color.border}`,
            borderRadius: 'var(--r-lg)', padding: '10px 12px',
          }}>
            <div style={{ fontSize: 11.5, fontWeight: 900, color: g.color.text, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {g.label}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: g.color.text }}>
              <strong>{ex.en}</strong> → {kind === 'comp' ? ex.comp : ex.sup}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Bloque común: Teoria + Estructura + Ejemplos + Botón ───────────────────
function AjSectionBlock({ color, theory, structures, rulesKind, examples, onPractice }) {
  return (
    <div style={{
      background: 'white', border: `2px solid ${color.border}`,
      borderRadius: 'var(--r-2xl)', padding: '24px 26px', boxShadow: 'var(--shadow-sm)',
    }}>
      {/* Teoría */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          📖 Teoría
        </div>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--text)', fontWeight: 600 }}>
          {theory}
        </p>
      </div>

      {/* Estructura */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          🧩 Estructura
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {structures.map((s, i) => (
            <div key={i} style={{
              background: color.bg, border: `1.5px solid ${color.border}`,
              borderRadius: 'var(--r-lg)', padding: '10px 14px',
            }}>
              {s.label && (
                <div style={{ fontSize: 11, fontWeight: 900, color: color.text, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              )}
              <div style={{ fontSize: 14, fontWeight: 800, color: color.text }}>{s.formula}</div>
            </div>
          ))}
        </div>
      </div>

      {rulesKind && (
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            🔧 Reglas de formación
          </div>
          <AjRulesTable kind={rulesKind} color={color}/>
        </div>
      )}

      {/* Ejemplos */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          ✨ Ejemplos
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {examples.map((e, i) => (
            <div key={i} style={{
              background: 'white', border: `1.5px solid ${color.border}`,
              borderRadius: 'var(--r-lg)', padding: '10px 14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={() => ajSpeak(e.en)} title="Escuchar" style={{
                  background: color.solid, border: 'none', borderRadius: 5,
                  width: 24, height: 24, cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </button>
                <span style={{ fontSize: 14.5, fontWeight: 800, color: color.text }}>{e.en}</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 32, marginTop: 2 }}>
                → {e.es}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── Vistas por tipo de comparación ──────────────────────────────────────────
function AjSuperView({ onPractice }) {
  const color = AJ_SECTIONS.find(s => s.id === 'super').color;
  return (
    <AjSectionBlock
      color={color}
      theory='Se usa para decir que A es MÁS que B. Las palabras cortas añaden "-er" al final; las largas se forman con "more + adjetivo". Siempre se acompaña de "than" (que).'
      structures={[
        { label: 'Palabras cortas', formula: 'A + is/are + adj-er + than + B' },
        { label: 'Palabras largas', formula: 'A + is/are + more + adj + than + B' },
      ]}
      rulesKind='comp'
      examples={[
        { en: 'He is taller than me.',                             es: 'Él es más alto que yo.' },
        { en: 'This book is more interesting than that one.',       es: 'Este libro es más interesante que ese.' },
        { en: 'My car is better than yours.',                       es: 'Mi coche es mejor que el tuyo. (irregular)' },
        { en: 'Today is hotter than yesterday.',                    es: 'Hoy hace más calor que ayer. (CVC → hotter)' },
      ]}
      onPractice={onPractice}
    />
  );
}

function AjInferView({ onPractice }) {
  const color = AJ_SECTIONS.find(s => s.id === 'infer').color;
  return (
    <AjSectionBlock
      color={color}
      theory='Se usa para decir que A es MENOS que B. La fórmula es siempre la misma sin importar el tamaño del adjetivo: "less + adjetivo + than".'
      structures={[
        { label: 'Forma única', formula: 'A + is/are + less + adj + than + B' },
      ]}
      examples={[
        { en: 'This car is less expensive than that one.', es: 'Este coche es menos caro que ese.' },
        { en: 'She is less happy today.',                  es: 'Ella está menos feliz hoy.' },
        { en: 'This is less important.',                   es: 'Esto es menos importante.' },
        { en: 'I am less tired than yesterday.',           es: 'Estoy menos cansado que ayer.' },
      ]}
      onPractice={onPractice}
    />
  );
}

function AjEqualView({ onPractice }) {
  const color = AJ_SECTIONS.find(s => s.id === 'equal').color;
  return (
    <AjSectionBlock
      color={color}
      theory='Se usa para decir que A es TAN... COMO B. La fórmula es "as + adjetivo + as". En negativo significa "no tan ... como".'
      structures={[
        { label: 'Afirmativa', formula: 'A + is/are + as + adj + as + B' },
        { label: 'Negativa',   formula: 'A + is/are + NOT + as + adj + as + B' },
      ]}
      examples={[
        { en: 'She is as tall as her sister.',          es: 'Ella es tan alta como su hermana.' },
        { en: 'This book is as interesting as that one.', es: 'Este libro es tan interesante como ese.' },
        { en: 'I am not as fast as him.',               es: 'No soy tan rápido como él.' },
        { en: 'My house is as big as yours.',           es: 'Mi casa es tan grande como la tuya.' },
      ]}
      onPractice={onPractice}
    />
  );
}

function AjTopView({ onPractice }) {
  const color = AJ_SECTIONS.find(s => s.id === 'top').color;
  return (
    <AjSectionBlock
      color={color}
      theory='Se usa para señalar el MÁS o el MENOS de un grupo. Las palabras cortas añaden "-est"; las largas usan "the most" o "the least". Casi siempre llevan "the" delante.'
      structures={[
        { label: 'Palabras cortas',           formula: 'A + is/are + THE + adj-est' },
        { label: 'Palabras largas (el más)',  formula: 'A + is/are + THE MOST + adj' },
        { label: 'El menos',                  formula: 'A + is/are + THE LEAST + adj' },
      ]}
      rulesKind='sup'
      examples={[
        { en: 'He is the tallest in the class.', es: 'Él es el más alto de la clase.' },
        { en: 'This is the most expensive car.', es: 'Este es el coche más caro.' },
        { en: 'She is the happiest girl.',       es: 'Ella es la chica más feliz.' },
        { en: 'This is the worst day.',          es: 'Este es el peor día. (irregular)' },
      ]}
      onPractice={onPractice}
    />
  );
}

// ── Pantalla de práctica ────────────────────────────────────────────────────
function ajBuildTiles(drill) {
  const used = new Set(drill.en.map(w => w.toLowerCase()));
  const distractors = ajShuffle(AJ_DISTRACT_POOL.filter(w => !used.has(w.toLowerCase()))).slice(0, 3);
  return ajShuffle([...drill.en, ...distractors]).map((word, id) => ({ id, word }));
}

function AjPracticeScreen({ onExit }) {
  const [pool] = React.useState(() => ajShuffle(AJ_DRILLS).map(d => ({ ...d, tiles: ajBuildTiles(d) })));
  const [idx, setIdx]         = React.useState(0);
  const [placed, setPlaced]   = React.useState([]);
  const [checked, setChecked] = React.useState(null);
  const [score, setScore]     = React.useState(0);
  const [shake, setShake]     = React.useState(false);

  const total  = pool.length;
  const isDone = idx >= total;
  const ex     = pool[idx];
  const progress = total ? (idx + (checked !== null ? 1 : 0)) / total : 0;
  const accent = '#6366F1';
  const accentDark = '#4338CA';

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
  function handleNext() { setIdx(i => i + 1); setPlaced([]); setChecked(null); }

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
        <button className="btn btn-primary btn-lg" onClick={onExit} style={{ background: accentDark, boxShadow: '0 4px 0 #312E81' }}>
          ← VOLVER A ADJETIVOS
        </button>
      </div>
    );
  }

  const isCorrect = checked === true;
  const correctSentence = ex.en.join(' ') + '.';
  const bank   = ex.tiles.filter(t => !placed.includes(t.id));
  const answer = placed.map(id => ex.tiles.find(t => t.id === id));

  return (
    <div style={{ maxWidth: 1100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={onExit} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)' }}>
            <span>Ejercicio {idx + 1} / {total}</span>
            <span style={{ color: accentDark }}>adjetivos comparativos</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: accent }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      <div style={{
        background: '#EEF2FF', border: '2px solid #A5B4FC',
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: accentDark, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
          🇪🇸 Traduce esta oración al inglés
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: accentDark, fontStyle: 'italic' }}>
          "{ex.es}"
        </div>
      </div>

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
                background: checked === null ? accent : isCorrect ? 'var(--emerald)' : 'var(--rose)',
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
              style={answer.length ? { background: accent, boxShadow: `0 4px 0 ${accentDark}` } : {}}>
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
                  <button onClick={() => ajSpeak(correctSentence)} title="Escuchar" style={{
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

window.AdjetivosScreen = AdjetivosScreen;
