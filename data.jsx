// Grammar Units — A1 & A2
const UNITS = [
  // ── A1 ──────────────────────────────────────────────────
  {
    id: 'u13', level: 'A1',
    title: 'Present Simple',
    subtitle: 'Rutinas, hábitos y verdades generales',
    emoji: '☀️',
    color: '#EAB308', shadow: '#854D0E', lightBg: '#FEF9C3',
    progress: 0,
    lessons: [
      { id: 'l48', title: 'Afirmativa (-s en he/she/it)',  stars: 0, status: 'current' },
      { id: 'l49', title: "Negativa (don't / doesn't)",    stars: 0, status: 'current' },
      { id: 'l50', title: 'Preguntas (Do / Does)',         stars: 0, status: 'current' },
      { id: 'l51', title: 'Adverbios de frecuencia',       stars: 0, status: 'current' },
      { id: 'l52', title: 'Review',                        stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u14', level: 'A1',
    title: 'Present Continuous',
    subtitle: 'am / is / are + verb-ing',
    emoji: '🎬',
    color: '#06B6D4', shadow: '#155E75', lightBg: '#CFFAFE',
    progress: 0,
    lessons: [
      { id: 'l53', title: 'Afirmativa (am/is/are + -ing)',     stars: 0, status: 'current' },
      { id: 'l54', title: 'Negativa (am/is/are + not + -ing)', stars: 0, status: 'current' },
      { id: 'l55', title: 'Preguntas (Am/Is/Are...?)',         stars: 0, status: 'current' },
      { id: 'l56', title: 'Continuous vs Simple',              stars: 0, status: 'current' },
      { id: 'l57', title: 'Review',                            stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u1', level: 'A1',
    title: 'Subject Pronouns',
    subtitle: 'I, you, he, she, it, we, they',
    emoji: '🙋',
    color: '#6366F1', shadow: '#3730A3', lightBg: '#EEF2FF',
    progress: 0.75,
    lessons: [
      { id: 'l1', title: 'I and You', stars: 3, status: 'done' },
      { id: 'l2', title: 'He, She and It', stars: 3, status: 'done' },
      { id: 'l3', title: 'We and They', stars: 0, status: 'current' },
      { id: 'l4', title: 'Review', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u2', level: 'A1',
    title: 'Object Pronouns',
    subtitle: 'me, you, him, her, it, us, them',
    emoji: '🎯',
    color: '#F97316', shadow: '#C2410C', lightBg: '#FFEDD5',
    progress: 0,
    lessons: [
      { id: 'l5', title: 'Me and You', stars: 0, status: 'current' },
      { id: 'l6', title: 'Him, Her, It', stars: 0, status: 'current' },
      { id: 'l7', title: 'Us and Them', stars: 0, status: 'current' },
    ],
  },
  {
    id: 'u3', level: 'A1',
    title: 'Demonstratives',
    subtitle: 'this, that, these, those',
    emoji: '👆',
    color: '#14B8A6', shadow: '#0F766E', lightBg: '#CCFBF1',
    progress: 0,
    lessons: [
      { id: 'l8', title: 'This and That', stars: 0, status: 'current' },
      { id: 'l9', title: 'These and Those', stars: 0, status: 'current' },
      { id: 'l10', title: 'Near or Far?', stars: 0, status: 'current' },
    ],
  },
  {
    id: 'u4', level: 'A1',
    title: 'Common Verbs',
    subtitle: 'be, go, like, want, need, come',
    emoji: '⚡',
    color: '#8B5CF6', shadow: '#5B21B6', lightBg: '#EDE9FE',
    progress: 0,
    lessons: [
      { id: 'l11', title: 'To Be', stars: 0, status: 'current' },
      { id: 'l12', title: 'Action Verbs', stars: 0, status: 'current' },
      { id: 'l13', title: 'Like, Want, Need', stars: 0, status: 'current' },
    ],
  },
  {
    id: 'u5', level: 'A1',
    title: 'Have / Has',
    subtitle: 'Possession and relationships',
    emoji: '🤝',
    color: '#0EA5E9', shadow: '#075985', lightBg: '#E0F2FE',
    progress: 0,
    lessons: [
      { id: 'l14', title: 'I have / You have', stars: 0, status: 'current' },
      { id: 'l15', title: 'He has / She has', stars: 0, status: 'current' },
      { id: 'l16', title: 'Have vs Has', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u6', level: 'A1',
    title: 'There is / There are',
    subtitle: 'Describe what exists around you',
    emoji: '🏠',
    color: '#F43F5E', shadow: '#9F1239', lightBg: '#FFE4E6',
    progress: 0,
    lessons: [
      { id: 'l17', title: 'There is a...', stars: 0, status: 'current' },
      { id: 'l18', title: 'There are...', stars: 0, status: 'current' },
      { id: 'l19', title: 'Is there? / Are there?', stars: 0, status: 'current' },
    ],
  },
  {
    id: 'u7', level: 'A1',
    title: 'Prepositions',
    subtitle: 'in, on, at, under, next to...',
    emoji: '📍',
    color: '#F59E0B', shadow: '#92400E', lightBg: '#FEF3C7',
    progress: 0,
    lessons: [
      { id: 'l20', title: 'In, On, At', stars: 0, status: 'current' },
      { id: 'l21', title: 'Under, Next to, Between', stars: 0, status: 'current' },
      { id: 'l22', title: 'Time Prepositions', stars: 0, status: 'current' },
      { id: 'l23', title: 'Review', stars: 0, status: 'current', isReview: true },
    ],
  },

  // ── A2 ──────────────────────────────────────────────────
  {
    id: 'u8', level: 'A2',
    title: 'Simple Future — Will',
    subtitle: 'I will, you will, he will...',
    emoji: '🚀',
    color: '#EC4899', shadow: '#9D174D', lightBg: '#FCE7F3',
    progress: 0,
    lessons: [
      { id: 'l24', title: 'Will for Predictions', stars: 0, status: 'current' },
      { id: 'l25', title: 'Will for Decisions', stars: 0, status: 'current' },
      { id: 'l26', title: "Won't (Negative)", stars: 0, status: 'current' },
      { id: 'l27', title: 'Will — Questions', stars: 0, status: 'current' },
      { id: 'l28', title: 'Review', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u9', level: 'A2',
    title: 'Future Continuous',
    subtitle: 'will be + verb-ing',
    emoji: '⏳',
    color: '#7C3AED', shadow: '#4C1D95', lightBg: '#EDE9FE',
    progress: 0,
    lessons: [
      { id: 'l29', title: 'Will be + -ing', stars: 0, status: 'current' },
      { id: 'l30', title: 'Actions in Progress (future)', stars: 0, status: 'current' },
      { id: 'l31', title: 'Negative & Questions', stars: 0, status: 'current' },
      { id: 'l32', title: 'Review', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u10', level: 'A2',
    title: 'Going to...',
    subtitle: 'Plans & intentions',
    emoji: '🗺️',
    color: '#059669', shadow: '#064E3B', lightBg: '#D1FAE5',
    progress: 0,
    lessons: [
      { id: 'l33', title: 'Going to + verb', stars: 0, status: 'current' },
      { id: 'l34', title: 'Plans & Intentions', stars: 0, status: 'current' },
      { id: 'l35', title: "Not going to (Negative)", stars: 0, status: 'current' },
      { id: 'l36', title: 'Are you going to...? (Questions)', stars: 0, status: 'current' },
      { id: 'l37', title: 'Will vs Going to', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u11', level: 'A2',
    title: 'Past Simple',
    subtitle: 'Acciones terminadas en el pasado',
    emoji: '🕰️',
    color: '#DC2626', shadow: '#7F1D1D', lightBg: '#FEE2E2',
    progress: 0,
    lessons: [
      { id: 'l38', title: 'Verbos regulares (-ed)', stars: 0, status: 'current' },
      { id: 'l39', title: 'Verbos irregulares', stars: 0, status: 'current' },
      { id: 'l40', title: "Didn't (Negative)", stars: 0, status: 'current' },
      { id: 'l41', title: 'Did...? (Questions)', stars: 0, status: 'current' },
      { id: 'l42', title: 'Review', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u12', level: 'A2',
    title: 'Past Continuous',
    subtitle: 'was / were + verb-ing',
    emoji: '🎞️',
    color: '#9333EA', shadow: '#581C87', lightBg: '#F3E8FF',
    progress: 0,
    lessons: [
      { id: 'l43', title: 'Was / Were + -ing', stars: 0, status: 'current' },
      { id: 'l44', title: 'Acciones en progreso (pasado)', stars: 0, status: 'current' },
      { id: 'l45', title: 'Past Continuous vs Past Simple', stars: 0, status: 'current' },
      { id: 'l46', title: 'Negative & Questions', stars: 0, status: 'current' },
      { id: 'l47', title: 'Review', stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u15', level: 'A2',
    title: 'Verbos Modales',
    subtitle: 'can, could, may, might, will, would, should, must',
    emoji: '🎩',
    color: '#7C3AED', shadow: '#4C1D95', lightBg: '#EDE9FE',
    progress: 0,
    lessons: [
      { id: 'l58', title: 'Can (habilidad / permiso)',          stars: 0, status: 'current' },
      { id: 'l59', title: 'Could (cortesía / habilidad pasada)', stars: 0, status: 'current' },
      { id: 'l60', title: 'May / Might (posibilidad)',           stars: 0, status: 'current' },
      { id: 'l61', title: 'Should / Must (consejo / obligación)', stars: 0, status: 'current' },
      { id: 'l62', title: 'Review',                              stars: 0, status: 'current', isReview: true },
    ],
  },
  {
    id: 'u16', level: 'A2',
    title: 'Adjetivos',
    subtitle: 'Comparativos y superlativos',
    emoji: '🎨',
    color: '#DB2777', shadow: '#831843', lightBg: '#FCE7F3',
    progress: 0,
    lessons: [
      { id: 'l63', title: 'Comparativos de superioridad (-er / more)', stars: 0, status: 'current' },
      { id: 'l64', title: 'Comparativos de inferioridad (less)',       stars: 0, status: 'current' },
      { id: 'l65', title: 'Comparativos de igualdad (as ... as)',      stars: 0, status: 'current' },
      { id: 'l66', title: 'Superlativos (-est / the most)',            stars: 0, status: 'current' },
      { id: 'l67', title: 'Review',                                    stars: 0, status: 'current', isReview: true },
    ],
  },
];

// Exercises per unit
const UNIT_EXERCISES = {

  u13: [ // Present Simple
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She works in a hospital.', audio:true,
      options:[{id:'a',text:'Ella trabaja en un hospital.',correct:true},{id:'b',text:'Ella trabajó en un hospital.'},{id:'c',text:'Ella está trabajando en un hospital.'},{id:'d',text:'Ella va a trabajar en un hospital.'}],
      explain:'En Presente Simple, con he/she/it el verbo lleva -s al final.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['He',' pizza every Friday.'],
      options:[{id:'a',text:'eats',correct:true},{id:'b',text:'eat'},{id:'c',text:'eating'},{id:'d',text:'ate'}],
      explain:'"He" → verbo + s = eats. Con I/you/we/they: eat.' },
    { type:'transform-pick', prompt:'Cambia al NEGATIVO con "doesn\'t"', source:'She likes coffee.',
      options:[
        {id:'a',text:"She doesn't like coffee.",correct:true},
        {id:'b',text:"She doesn't likes coffee."},
        {id:'c',text:"She don't like coffee."},
        {id:'d',text:"She not like coffee."},
      ],
      explain:'"Doesn\'t" + verbo BASE. La -s "pasa" al auxiliar.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'I always drink water in the morning.',
      options:[{id:'a',text:'Presente Simple',correct:true},{id:'b',text:'Presente Continuo'},{id:'c',text:'Pasado Simple'},{id:'d',text:'Futuro Simple (will)'}],
      explain:'Verbo en presente + adverbio de frecuencia (always) = Presente Simple.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Nosotros estudiamos inglés todos los días.',
      bank:['We','study','studies','English','every','day','are','am','.'], answer:['We','study','English','every','day','.'] },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'Do you speak English?',
      options:[{id:'a',text:'Do you speak English?',correct:true},{id:'b',text:'Are you speaking English?'},{id:'c',text:'Did you speak English?'}] },
  ],

  u14: [ // Present Continuous
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She is studying right now.', audio:true,
      options:[{id:'a',text:'Ella está estudiando ahora mismo.',correct:true},{id:'b',text:'Ella estudia ahora mismo.'},{id:'c',text:'Ella estudiará ahora mismo.'},{id:'d',text:'Ella va a estudiar ahora mismo.'}],
      explain:'"Is + verbo-ing" = Presente Continuo. Describe algo que ocurre en este momento.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['They',' watching a movie.'],
      options:[{id:'a',text:'are',correct:true},{id:'b',text:'is'},{id:'c',text:'am'},{id:'d',text:'were'}],
      explain:'You/we/they → are. I → am. He/she/it → is.' },
    { type:'transform-pick', prompt:'Convierte al Presente Continuo (am/is/are + -ing)', source:'He sleeps.',
      options:[
        {id:'a',text:'He is sleeping.',correct:true},
        {id:'b',text:'He is sleep.'},
        {id:'c',text:'He sleeping.'},
        {id:'d',text:'He are sleeping.'},
      ],
      explain:'"He is + verbo-ing". Con he/she/it usa "is".' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'I am eating pizza right now.',
      options:[{id:'a',text:'Presente Simple'},{id:'b',text:'Presente Continuo',correct:true},{id:'c',text:'Pasado Continuo'},{id:'d',text:'Futuro Continuo'}],
      explain:'"Am + -ing" + "right now" = Presente Continuo.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Nosotros estamos cocinando la cena.',
      bank:['We','are','am','cooking','cook','dinner','the','.'], answer:['We','are','cooking','dinner','.'] },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'Are you working from home?',
      options:[{id:'a',text:'Are you working from home?',correct:true},{id:'b',text:'Do you work from home?'},{id:'c',text:'Will you work from home?'}] },
  ],

  u1: [ // Subject Pronouns
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'We are students.', audio:true,
      options:[{id:'a',text:'Nosotros somos estudiantes.',correct:true},{id:'b',text:'Ellos son estudiantes.'},{id:'c',text:'Yo soy estudiante.'},{id:'d',text:'Nosotros tenemos estudiantes.'}],
      explain:'"We" = Nosotros/as. Siempre "we are".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:[null,'are my best friends.'],
      options:[{id:'a',text:'They',correct:true},{id:'b',text:'He'},{id:'c',text:'She'},{id:'d',text:'I'}],
      explain:'"They" es para varias personas o cosas.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Nosotros somos profesores.',
      bank:['We','They','are','is','teachers','student','.'], answer:['We','are','teachers','.'] },
    { type:'pick-card', prompt:'Which pronoun replaces the highlighted words?', context:'"María and Carlos are happy."', contextHighlight:'María and Carlos',
      options:[{id:'a',text:'They',hint:'Ellos/as',correct:true},{id:'b',text:'We',hint:'Nosotros'},{id:'c',text:'He',hint:'Él'},{id:'d',text:'She',hint:'Ella'}],
      explain:'Two or more people = "They".' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'We are happy today.',
      options:[{id:'a',text:'We are happy today.',correct:true},{id:'b',text:'They are happy today.'},{id:'c',text:'You are happy today.'}] },
  ],

  u2: [ // Object Pronouns
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She gave me a gift.', audio:true,
      options:[{id:'a',text:'Ella me dio un regalo.',correct:true},{id:'b',text:'Ella te dio un regalo.'},{id:'c',text:'Ella le dio un regalo.'},{id:'d',text:'Ella nos dio un regalo.'}],
      explain:'"Me" es el pronombre objeto de "I". Recibe la acción.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I called',' yesterday. (she → ?)'],
      options:[{id:'a',text:'her',correct:true},{id:'b',text:'she'},{id:'c',text:'him'},{id:'d',text:'them'}],
      explain:'"She" como objeto se convierte en "her".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'¿Puedes ayudarnos?',
      bank:['Can','you','help','us','them','?','.'], answer:['Can','you','help','us','?'] },
    { type:'pick-card', prompt:'Which pronoun replaces "the dog"?', context:'"I see the dog every day."', contextHighlight:'the dog',
      options:[{id:'a',text:'it',hint:'cosa/animal',correct:true},{id:'b',text:'him',hint:'persona masc.'},{id:'c',text:'her',hint:'persona fem.'},{id:'d',text:'them',hint:'plural'}],
      explain:'"It" reemplaza objetos, animales o cosas neutras.' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'He likes her very much.',
      options:[{id:'a',text:'He likes her very much.',correct:true},{id:'b',text:'She likes him very much.'},{id:'c',text:'He likes them very much.'}] },
  ],

  u3: [ // Demonstratives
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'These are my keys.', audio:true,
      options:[{id:'a',text:'Estas son mis llaves.',correct:true},{id:'b',text:'Esas son mis llaves.'},{id:'c',text:'Esta es mi llave.'},{id:'d',text:'Aquellas son mis llaves.'}],
      explain:'"These" = Estas/os. Plural y cerca de ti.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:[null,'is my teacher. (cerca, singular)'],
      options:[{id:'a',text:'This',correct:true},{id:'b',text:'That'},{id:'c',text:'These'},{id:'d',text:'Those'}],
      explain:'"This" = singular + cerca. "That" = singular + lejos.' },
    { type:'pick-card', prompt:'Choose the correct demonstrative', context:'"___ books on the shelf far away."', contextHighlight:'___',
      options:[{id:'a',text:'Those',hint:'plural + lejos',correct:true},{id:'b',text:'These',hint:'plural + cerca'},{id:'c',text:'That',hint:'singular + lejos'},{id:'d',text:'This',hint:'singular + cerca'}],
      explain:'"Those" = plural y lejos de ti.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ese es un coche muy grande.',
      bank:['That','This','is','are','a','very','big','car','.'], answer:['That','is','a','very','big','car','.'] },
  ],

  u4: [ // Common Verbs
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I want to learn English.', audio:true,
      options:[{id:'a',text:'Quiero aprender inglés.',correct:true},{id:'b',text:'Necesito aprender inglés.'},{id:'c',text:'Me gusta aprender inglés.'},{id:'d',text:'Voy a aprender inglés.'}],
      explain:'"Want" = querer. "I want to + verb" expresa deseo.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' coffee every morning.'],
      options:[{id:'a',text:'likes',correct:true},{id:'b',text:'like'},{id:'c',text:'go'},{id:'d',text:'need'}],
      explain:'Con "she/he/it" los verbos llevan -s: likes, goes, needs.' },
    { type:'pick-card', prompt:'Which verb fits best?', context:'"I ___ to the gym every day."', contextHighlight:'___',
      options:[{id:'a',text:'go',hint:'ir',correct:true},{id:'b',text:'like',hint:'gustar'},{id:'c',text:'need',hint:'necesitar'},{id:'d',text:'come',hint:'venir'}],
      explain:'"Go to" se usa con lugares. "I go to the gym."' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Necesitamos ir a la escuela.',
      bank:['We','need','like','to','go','come','school','the','to','.'], answer:['We','need','to','go','to','the','school','.'] },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'They like to play soccer.',
      options:[{id:'a',text:'They like to play soccer.',correct:true},{id:'b',text:'They need to play soccer.'},{id:'c',text:'She likes to play soccer.'}] },
  ],

  u5: [ // Have / Has
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'He has a new phone.', audio:true,
      options:[{id:'a',text:'Él tiene un teléfono nuevo.',correct:true},{id:'b',text:'Él tiene teléfonos nuevos.'},{id:'c',text:'Yo tengo un teléfono nuevo.'},{id:'d',text:'Ella tiene un teléfono nuevo.'}],
      explain:'"Has" se usa con he, she, it. Los demás usan "have".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['My sister',' two cats.'],
      options:[{id:'a',text:'has',correct:true},{id:'b',text:'have'},{id:'c',text:'is'},{id:'d',text:'are'}],
      explain:'"My sister" = she → usa "has".' },
    { type:'pick-card', prompt:'Have or Has?', context:'"We ___ a big house."', contextHighlight:'___',
      options:[{id:'a',text:'have',hint:'I/you/we/they',correct:true},{id:'b',text:'has',hint:'he/she/it'},{id:'c',text:'had',hint:'pasado'},{id:'d',text:'having',hint:'participio'}],
      explain:'"We" → "have". Solo he/she/it usan "has".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Tengo una familia grande.',
      bank:['I','have','has','a','big','small','family','.'], answer:['I','have','a','big','family','.'] },
  ],

  u6: [ // There is / There are
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'There are four chairs in the room.', audio:true,
      options:[{id:'a',text:'Hay cuatro sillas en la habitación.',correct:true},{id:'b',text:'Hay una silla en la habitación.'},{id:'c',text:'Hay cuatro mesas en la habitación.'},{id:'d',text:'No hay sillas en la habitación.'}],
      explain:'"There are" se usa con plural. "There is" con singular.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:[null,'a park near my house.'],
      options:[{id:'a',text:'There is',correct:true},{id:'b',text:'There are'},{id:'c',text:'It is'},{id:'d',text:'They are'}],
      explain:'"A park" = singular → "There is".' },
    { type:'pick-card', prompt:'There is or There are?', context:'"___ many students in the class."', contextHighlight:'___',
      options:[{id:'a',text:'There are',hint:'plural',correct:true},{id:'b',text:'There is',hint:'singular'},{id:'c',text:'It is',hint:'sujeto conocido'},{id:'d',text:'They are',hint:'pronombre'}],
      explain:'"Many students" es plural → "There are".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Hay un perro debajo de la mesa.',
      bank:['There','is','are','a','dog','cat','under','the','table','.'], answer:['There','is','a','dog','under','the','table','.'] },
  ],

  u7: [ // Prepositions
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'The keys are on the table.', audio:true,
      options:[{id:'a',text:'Las llaves están sobre la mesa.',correct:true},{id:'b',text:'Las llaves están bajo la mesa.'},{id:'c',text:'Las llaves están en el cajón.'},{id:'d',text:'Las llaves están junto a la mesa.'}],
      explain:'"On" = sobre/encima de (superficie).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['The cat is sleeping',' the sofa.'],
      options:[{id:'a',text:'under',correct:true},{id:'b',text:'on'},{id:'c',text:'in'},{id:'d',text:'at'}],
      explain:'"Under" = debajo de.' },
    { type:'pick-card', prompt:'Choose the correct preposition', context:'"My birthday is ___ July."', contextHighlight:'___',
      options:[{id:'a',text:'in',hint:'meses/años',correct:true},{id:'b',text:'on',hint:'días/fechas'},{id:'c',text:'at',hint:'horas/lugares'},{id:'d',text:'next to',hint:'al lado de'}],
      explain:'"In" va con meses, años y estaciones.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Mi escuela está al lado del parque.',
      bank:['My','school','is','next','to','under','the','park','in','.'], answer:['My','school','is','next','to','the','park','.'] },
  ],

  u8: [ // Simple Future — Will
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I will call you tomorrow.', audio:true,
      options:[{id:'a',text:'Te llamaré mañana.',correct:true},{id:'b',text:'Te llamé ayer.'},{id:'c',text:'Te estoy llamando.'},{id:'d',text:'Voy a llamarte pronto.'}],
      explain:'"Will + verb" expresa futuro simple. No cambia con ningún sujeto.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' not come to the party.'],
      options:[{id:'a',text:'will',correct:true},{id:'b',text:'is'},{id:'c',text:'does'},{id:'d',text:'going'}],
      explain:'"Will not" (o "won\'t") forma el negativo del futuro simple.' },
    { type:'transform-pick', prompt:'Convierte al Futuro Simple (will)', source:'She studies every night.',
      options:[
        {id:'a',text:'She will study every night.',correct:true},
        {id:'b',text:'She will studies every night.'},
        {id:'c',text:'She is studying every night.'},
        {id:'d',text:'She studied every night.'},
      ],
      explain:'"Will" nunca lleva -s. El verbo va siempre en forma base.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'They will arrive at noon.',
      options:[
        {id:'a',text:'Presente Simple'},
        {id:'b',text:'Futuro Simple (will)',correct:true},
        {id:'c',text:'Futuro Continuo'},
        {id:'d',text:'Going to'},
      ],
      explain:'"Will + verbo base" = Futuro Simple.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ellos viajarán a México el próximo año.',
      bank:['They','will','going','travel','traveled','to','Mexico','next','year','.'], answer:['They','will','travel','to','Mexico','next','year','.'] },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'I will be there at eight.',
      options:[{id:'a',text:'I will be there at eight.',correct:true},{id:'b',text:'I was there at eight.'},{id:'c',text:'I am there at eight.'}] },
  ],

  u9: [ // Future Continuous
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I will be studying at 10 pm.', audio:true,
      options:[{id:'a',text:'Estaré estudiando a las 10 pm.',correct:true},{id:'b',text:'Estudié a las 10 pm.'},{id:'c',text:'Estudio a las 10 pm.'},{id:'d',text:'Voy a estudiar a las 10 pm.'}],
      explain:'"Will be + -ing" = acción que estará en progreso en un momento futuro.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['He will be',' when you call.'],
      options:[{id:'a',text:'sleeping',correct:true},{id:'b',text:'sleep'},{id:'c',text:'slept'},{id:'d',text:'sleeps'}],
      explain:'Después de "will be" siempre va el verbo en -ing.' },
    { type:'transform-pick', prompt:'Convierte al Futuro Continuo (will be + -ing)', source:'He works at 8 pm.',
      options:[
        {id:'a',text:'He will be working at 8 pm.',correct:true},
        {id:'b',text:'He will work at 8 pm.'},
        {id:'c',text:'He is working at 8 pm.'},
        {id:'d',text:'He will be work at 8 pm.'},
      ],
      explain:'"Will be + verb(-ing)": añade -ing al verbo principal.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'She will be sleeping when you arrive.',
      options:[
        {id:'a',text:'Futuro Simple (will)'},
        {id:'b',text:'Presente Continuo'},
        {id:'c',text:'Futuro Continuo',correct:true},
        {id:'d',text:'Going to'},
      ],
      explain:'"Will be + -ing" = Futuro Continuo.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Estaremos trabajando todo el día mañana.',
      bank:['We','will','be','working','work','all','day','tomorrow','.'], answer:['We','will','be','working','all','day','tomorrow','.'] },
  ],

  u11: [ // Past Simple
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I visited my grandma yesterday.', audio:true,
      options:[{id:'a',text:'Visité a mi abuela ayer.',correct:true},{id:'b',text:'Visito a mi abuela todos los días.'},{id:'c',text:'Voy a visitar a mi abuela.'},{id:'d',text:'Estoy visitando a mi abuela.'}],
      explain:'"Verb + -ed" forma el pasado simple de los verbos regulares.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' to the store last weekend.'],
      options:[{id:'a',text:'went',correct:true},{id:'b',text:'goes'},{id:'c',text:'going'},{id:'d',text:'go'}],
      explain:'"Go" es irregular: pasado = "went". No usa -ed.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Simple', source:'They play soccer every Sunday.',
      options:[
        {id:'a',text:'They played soccer last Sunday.',correct:true},
        {id:'b',text:'They will play soccer last Sunday.'},
        {id:'c',text:'They are playing soccer last Sunday.'},
        {id:'d',text:'They plays soccer last Sunday.'},
      ],
      explain:'"Play" → "played" (regular). Pasado simple = acción terminada.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'We watched a movie last night.',
      options:[
        {id:'a',text:'Presente Simple'},
        {id:'b',text:'Pasado Simple',correct:true},
        {id:'c',text:'Futuro Simple (will)'},
        {id:'d',text:'Going to'},
      ],
      explain:'Verbo terminado en -ed + marcador de tiempo pasado = Pasado Simple.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ella estudió inglés por dos horas ayer.',
      bank:['She','studied','study','English','for','two','hours','yesterday','.'], answer:['She','studied','English','for','two','hours','yesterday','.'] },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'I bought a new book yesterday.',
      options:[{id:'a',text:'I bought a new book yesterday.',correct:true},{id:'b',text:'I buy a new book every day.'},{id:'c',text:'I will buy a new book tomorrow.'}] },
  ],

  u12: [ // Past Continuous
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I was reading when you called.', audio:true,
      options:[{id:'a',text:'Estaba leyendo cuando llamaste.',correct:true},{id:'b',text:'Leí cuando llamaste.'},{id:'c',text:'Estoy leyendo cuando llamas.'},{id:'d',text:'Voy a leer cuando llames.'}],
      explain:'"Was/Were + verb-ing" = acción que estaba en progreso en el pasado.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['They',' studying when the lights went out.'],
      options:[{id:'a',text:'were',correct:true},{id:'b',text:'was'},{id:'c',text:'are'},{id:'d',text:'will'}],
      explain:'"They" → "were". Was = I/he/she/it · Were = you/we/they.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Continuo (was/were + -ing)', source:'He cooked dinner at 7 pm.',
      options:[
        {id:'a',text:'He was cooking dinner at 7 pm.',correct:true},
        {id:'b',text:'He is cooking dinner at 7 pm.'},
        {id:'c',text:'He was cook dinner at 7 pm.'},
        {id:'d',text:'He were cooking dinner at 7 pm.'},
      ],
      explain:'"Was/Were + verbo-ing". Con "he" usa "was".' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'She was sleeping when I arrived home.',
      options:[
        {id:'a',text:'Pasado Simple'},
        {id:'b',text:'Pasado Continuo',correct:true},
        {id:'c',text:'Presente Continuo'},
        {id:'d',text:'Futuro Continuo'},
      ],
      explain:'"Was + -ing" = Pasado Continuo. Acción en progreso en un momento del pasado.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Estábamos viendo una película cuando llegaste.',
      bank:['We','were','was','watching','watch','a','movie','when','you','arrived','.'], answer:['We','were','watching','a','movie','when','you','arrived','.'] },
  ],

  u15: [ // Verbos Modales
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I can speak three languages.', audio:true,
      options:[{id:'a',text:'Puedo hablar tres idiomas.',correct:true},{id:'b',text:'Hablé tres idiomas.'},{id:'c',text:'Hablaré tres idiomas.'},{id:'d',text:'Debo hablar tres idiomas.'}],
      explain:'"Can" = poder. Modal de habilidad. Va seguido del verbo en forma base.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['You',' study more for the exam.'],
      options:[{id:'a',text:'should',correct:true},{id:'b',text:'will'},{id:'c',text:'can'},{id:'d',text:'may'}],
      explain:'"Should" = deberías. Da un consejo.' },
    { type:'transform-pick', prompt:'Convierte usando "could" (cortesía)', source:'Pass me the salt.',
      options:[
        {id:'a',text:'Could you pass me the salt?',correct:true},
        {id:'b',text:'You could pass me the salt.'},
        {id:'c',text:'Could pass me the salt?'},
        {id:'d',text:'Can you passing me the salt?'},
      ],
      explain:'"Could" + sujeto + verbo base = petición educada.' },
    { type:'pick-card', prompt:'¿Qué modal expresa obligación fuerte?', context:'"You ___ wear a seatbelt."', contextHighlight:'___',
      options:[
        {id:'a',text:'must',hint:'obligación fuerte ✓',correct:true},
        {id:'b',text:'might',hint:'posibilidad débil'},
        {id:'c',text:'can',hint:'habilidad'},
        {id:'d',text:'would',hint:'condicional'},
      ],
      explain:'"Must" = obligación fuerte. "Should" sería un consejo más suave.' },
    { type:'identify-tense', prompt:'¿Qué modal usa esta oración?', sentence:'It might rain tomorrow.',
      options:[{id:'a',text:'Might (posibilidad débil)',correct:true},{id:'b',text:'Must (obligación)'},{id:'c',text:'Will (futuro)'},{id:'d',text:'Should (consejo)'}],
      explain:'"Might" = quizás / podría. Posibilidad menor que "may".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ella debería descansar más.',
      bank:['She','should','must','rest','more','less','.'], answer:['She','should','rest','more','.'] },
  ],

  u16: [ // Adjetivos comparativos / superlativos
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'My brother is taller than me.', audio:true,
      options:[{id:'a',text:'Mi hermano es más alto que yo.',correct:true},{id:'b',text:'Mi hermano es el más alto.'},{id:'c',text:'Mi hermano es tan alto como yo.'},{id:'d',text:'Mi hermano es menos alto que yo.'}],
      explain:'Comparativo de superioridad: adjetivo + "-er" + "than" (palabras cortas).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['This book is',' interesting than that one.'],
      options:[{id:'a',text:'more',correct:true},{id:'b',text:'most'},{id:'c',text:'less'},{id:'d',text:'-er'}],
      explain:'"Interesting" es palabra larga (4 sílabas) → usa "more + adj + than".' },
    { type:'transform-pick', prompt:'Convierte al SUPERLATIVO', source:'She is happy.',
      options:[
        {id:'a',text:'She is the happiest.',correct:true},
        {id:'b',text:'She is the most happy.'},
        {id:'c',text:'She is happier.'},
        {id:'d',text:'She is happyest.'},
      ],
      explain:'"Happy" → "happiest" (palabras en -y: y → i + est).' },
    { type:'pick-card', prompt:'¿Qué forma es correcta? "good" en superlativo:', context:'"This is the ___ pizza in town."', contextHighlight:'___',
      options:[
        {id:'a',text:'best',hint:'irregular ✓',correct:true},
        {id:'b',text:'goodest',hint:'no existe'},
        {id:'c',text:'most good',hint:'incorrecto'},
        {id:'d',text:'better',hint:'comparativo, no superlativo'},
      ],
      explain:'"Good" es irregular: comparativo "better", superlativo "best".' },
    { type:'identify-tense', prompt:'¿Qué tipo de comparativo es esta oración?', sentence:'She is as tall as her sister.',
      options:[{id:'a',text:'Igualdad (as ... as)',correct:true},{id:'b',text:'Superioridad (-er / more)'},{id:'c',text:'Inferioridad (less)'},{id:'d',text:'Superlativo (the most)'}],
      explain:'"As + adjetivo + as" = comparativo de igualdad.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Este coche es menos caro que ese.',
      bank:['This','car','is','less','more','expensive','than','that','one','.'], answer:['This','car','is','less','expensive','than','that','one','.'] },
  ],

  u10: [ // Going to
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She is going to cook dinner.', audio:true,
      options:[{id:'a',text:'Ella va a cocinar la cena.',correct:true},{id:'b',text:'Ella cocinó la cena.'},{id:'c',text:'Ella cocina la cena.'},{id:'d',text:'Ella cocinará la cena.'}],
      explain:'"Be going to + verb" expresa planes o intenciones futuras.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['We are going to',' a movie tonight.'],
      options:[{id:'a',text:'watch',correct:true},{id:'b',text:'watching'},{id:'c',text:'watched'},{id:'d',text:'watches'}],
      explain:'Después de "going to" va el verbo en infinitivo (sin -ing).' },
    { type:'transform-pick', prompt:'Convierte usando "Going to"', source:'I play basketball tomorrow.',
      options:[
        {id:'a',text:'I am going to play basketball tomorrow.',correct:true},
        {id:'b',text:'I going to play basketball tomorrow.'},
        {id:'c',text:'I will be playing basketball tomorrow.'},
        {id:'d',text:'I am going to plays basketball tomorrow.'},
      ],
      explain:'"Am/is/are + going to + verbo base". No añadas -ing al verbo final.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'They are going to travel to Japan next month.',
      options:[
        {id:'a',text:'Futuro Simple (will)'},
        {id:'b',text:'Futuro Continuo'},
        {id:'c',text:'Presente Continuo'},
        {id:'d',text:'Going to',correct:true},
      ],
      explain:'"Am/is/are + going to" = Going to future.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Voy a visitar a mi familia este fin de semana.',
      bank:['I','am','is','going','to','visit','my','family','this','weekend','.'], answer:['I','am','going','to','visit','my','family','this','weekend','.'] },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'They are going to play football.',
      options:[{id:'a',text:'They are going to play football.',correct:true},{id:'b',text:'They will play football.'},{id:'c',text:'They are playing football.'}] },
  ],
};

// Lesson-specific exercises (keyed by lesson id)
const LESSON_EXERCISES = {

  // ── u13: Present Simple (A1) ──────────────────────────────────────────

  l48: [ // Afirmativa — añadir -s en he/she/it
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She works in a hospital.', audio:true,
      options:[{id:'a',text:'Ella trabaja en un hospital.',correct:true},{id:'b',text:'Ella trabajó en un hospital.'},{id:'c',text:'Ella está trabajando en un hospital.'},{id:'d',text:'Ella va a trabajar en un hospital.'}],
      explain:'En Presente Simple, con he/she/it el verbo lleva -s al final.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['He',' pizza every Friday.'],
      options:[{id:'a',text:'eats',correct:true},{id:'b',text:'eat'},{id:'c',text:'eating'},{id:'d',text:'ate'}],
      explain:'"He" → verbo + s = eats. Con I/you/we/they: eat.' },
    { type:'transform-pick', prompt:'Cambia el sujeto a "She" (añade -s)', source:'I play soccer on Sundays.',
      options:[
        {id:'a',text:'She plays soccer on Sundays.',correct:true},
        {id:'b',text:'She play soccer on Sundays.'},
        {id:'c',text:'She is playing soccer on Sundays.'},
        {id:'d',text:'She played soccer on Sundays.'},
      ],
      explain:'Con she/he/it siempre añade -s al verbo: plays, eats, drinks.' },
    { type:'pick-card', prompt:'¿Qué forma del verbo va con "he"?', context:'"He ___ to school every day."', contextHighlight:'___',
      options:[
        {id:'a',text:'goes',hint:'he/she/it → +es',correct:true},
        {id:'b',text:'go',hint:'I/you/we/they'},
        {id:'c',text:'going',hint:'gerundio'},
        {id:'d',text:'went',hint:'pasado'},
      ],
      explain:'Verbos terminados en -o, -s, -sh, -ch, -x → añade -es: goes, watches, kisses.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Nosotros estudiamos inglés todos los días.',
      bank:['We','study','studies','English','every','day','are','am','.'], answer:['We','study','English','every','day','.'] },
  ],

  l49: [ // Negativa — don't / doesn't
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"I don't like coffee.", audio:true,
      options:[{id:'a',text:'No me gusta el café.',correct:true},{id:'b',text:'Me gusta el café.'},{id:'c',text:'No me gustaba el café.'},{id:'d',text:'No voy a tomar café.'}],
      explain:'"Don\'t" = do not. Negativo del Presente Simple para I/you/we/they.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' eat meat.'],
      options:[{id:'a',text:"doesn't",correct:true},{id:'b',text:"don't"},{id:'c',text:'not'},{id:'d',text:"isn't"}],
      explain:'Con he/she/it usa "doesn\'t" + verbo BASE.' },
    { type:'transform-pick', prompt:'Cambia al NEGATIVO con "doesn\'t"', source:'He plays soccer.',
      options:[
        {id:'a',text:"He doesn't play soccer.",correct:true},
        {id:'b',text:"He doesn't plays soccer."},
        {id:'c',text:"He don't play soccer."},
        {id:'d',text:"He not play soccer."},
      ],
      explain:'"Doesn\'t" + verbo BASE (sin -s). La -s "pasa" al auxiliar.' },
    { type:'pick-card', prompt:'¿Don\'t o Doesn\'t?', context:'"They ___ live here."', contextHighlight:'___',
      options:[
        {id:'a',text:"don't",hint:'I/you/we/they',correct:true},
        {id:'b',text:"doesn't",hint:'he/she/it'},
        {id:'c',text:"isn't",hint:'verbo to be'},
        {id:'d',text:'not',hint:'incompleto'},
      ],
      explain:'I, you, we, they → don\'t. He, she, it → doesn\'t.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ellos no hablan inglés.',
      bank:['They',"don't","doesn't",'speak','speaks','English','.'], answer:['They',"don't",'speak','English','.'] },
  ],

  l50: [ // Preguntas — Do / Does
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'Do you speak English?', audio:true,
      options:[{id:'a',text:'¿Hablas inglés?',correct:true},{id:'b',text:'¿Hablaste inglés?'},{id:'c',text:'¿Estás hablando inglés?'},{id:'d',text:'¿Vas a hablar inglés?'}],
      explain:'Pregunta en Presente Simple: "Do/Does + sujeto + verbo BASE + ...?"' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' she like pizza?'],
      options:[{id:'a',text:'Does',correct:true},{id:'b',text:'Do'},{id:'c',text:'Is'},{id:'d',text:'Was'}],
      explain:'Con he/she/it usa "Does". Con I/you/we/they usa "Do".' },
    { type:'transform-pick', prompt:'Convierte en PREGUNTA con Do/Does', source:'You live in Madrid.',
      options:[
        {id:'a',text:'Do you live in Madrid?',correct:true},
        {id:'b',text:'Does you live in Madrid?'},
        {id:'c',text:'Do you lives in Madrid?'},
        {id:'d',text:'You do live in Madrid?'},
      ],
      explain:'"Do/Does" al inicio + sujeto + verbo BASE. Con "you" usa "Do".' },
    { type:'pick-card', prompt:'¿Do o Does?', context:'"___ he work on Saturdays?"', contextHighlight:'___',
      options:[
        {id:'a',text:'Does',hint:'he/she/it',correct:true},
        {id:'b',text:'Do',hint:'I/you/we/they'},
        {id:'c',text:'Is',hint:'verbo to be'},
        {id:'d',text:'Will',hint:'futuro'},
      ],
      explain:'"He" → Does. La -s "se transfiere" al auxiliar, por eso el verbo queda en BASE.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'¿Trabajan ellos los sábados?',
      bank:['Do','Does','they','work','works','on','Saturdays','?','.'], answer:['Do','they','work','on','Saturdays','?'] },
  ],

  l51: [ // Adverbios de frecuencia
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I always drink water in the morning.', audio:true,
      options:[{id:'a',text:'Siempre bebo agua por la mañana.',correct:true},{id:'b',text:'Casi nunca bebo agua por la mañana.'},{id:'c',text:'Bebí agua esta mañana.'},{id:'d',text:'Voy a beber agua por la mañana.'}],
      explain:'Los adverbios de frecuencia (always, usually, often, sometimes, rarely, never) describen hábitos.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' goes to the gym. (3 veces por semana)'],
      options:[{id:'a',text:'often',correct:true},{id:'b',text:'never'},{id:'c',text:'rarely'},{id:'d',text:'always'}],
      explain:'"Often" = a menudo (varias veces a la semana).' },
    { type:'pick-card', prompt:'¿Dónde va el adverbio de frecuencia?', context:'"I ___ play tennis."', contextHighlight:'___',
      options:[
        {id:'a',text:'Antes del verbo: "I always play tennis."', hint:'posición correcta ✓', correct:true},
        {id:'b',text:'Al final: "I play tennis always."', hint:'menos común'},
        {id:'c',text:'Entre verbo y objeto: "I play always tennis."', hint:'no'},
        {id:'d',text:'Antes del sujeto: "Always I play tennis."', hint:'incorrecto'},
      ],
      explain:'Los adverbios de frecuencia van ANTES del verbo principal. Con "be" van DESPUÉS: "I am always happy."' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'They usually wake up at 7.',
      options:[{id:'a',text:'Presente Simple',correct:true},{id:'b',text:'Presente Continuo'},{id:'c',text:'Pasado Simple'},{id:'d',text:'Futuro Simple'}],
      explain:'"Usually" + verbo en presente = Presente Simple. Habla de un hábito repetido.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Él nunca llega tarde al trabajo.',
      bank:['He','never','always','arrives','arrive','late','to','work','.'], answer:['He','never','arrives','late','to','work','.'] },
  ],

  l52: [ // Review — Present Simple
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'She studies English every day.',
      options:[{id:'a',text:'Presente Simple',correct:true},{id:'b',text:'Presente Continuo'},{id:'c',text:'Pasado Simple'},{id:'d',text:'Futuro Simple'}],
      explain:'Verbo en presente + marcador de frecuencia (every day) = Presente Simple.' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO', source:'He works on Saturdays.',
      options:[
        {id:'a',text:"He doesn't work on Saturdays.",correct:true},
        {id:'b',text:"He don't work on Saturdays."},
        {id:'c',text:"He doesn't works on Saturdays."},
        {id:'d',text:"He not works on Saturdays."},
      ],
      explain:'Con he/she/it → "doesn\'t" + verbo BASE. Quita la -s.' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' you like chocolate?'],
      options:[{id:'a',text:'Do',correct:true},{id:'b',text:'Does'},{id:'c',text:'Are'},{id:'d',text:'Did'}],
      explain:'Con "you" usa "Do" al inicio para hacer la pregunta.' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:"She doesn't drink coffee.",
      options:[{id:'a',text:"She doesn't drink coffee.",correct:true},{id:'b',text:'She drinks coffee.'},{id:'c',text:"She isn't drinking coffee."}] },
  ],

  // ── u14: Present Continuous (A1) ──────────────────────────────────────

  l53: [ // Afirmativa — am/is/are + -ing
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She is studying right now.', audio:true,
      options:[{id:'a',text:'Ella está estudiando ahora mismo.',correct:true},{id:'b',text:'Ella estudia ahora mismo.'},{id:'c',text:'Ella estudiará ahora mismo.'},{id:'d',text:'Ella va a estudiar ahora mismo.'}],
      explain:'"Is + verbo-ing" = Presente Continuo. Describe algo que ocurre EN ESTE MOMENTO.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I',' working from home today.'],
      options:[{id:'a',text:'am',correct:true},{id:'b',text:'is'},{id:'c',text:'are'},{id:'d',text:'was'}],
      explain:'Con "I" siempre usa "am". He/she/it → is. You/we/they → are.' },
    { type:'transform-pick', prompt:'Convierte al Presente Continuo (am/is/are + -ing)', source:'He sleeps.',
      options:[
        {id:'a',text:'He is sleeping.',correct:true},
        {id:'b',text:'He is sleep.'},
        {id:'c',text:'He sleeping.'},
        {id:'d',text:'He are sleeping.'},
      ],
      explain:'"He is + verbo-ing" = "He is sleeping". Con he/she/it usa "is".' },
    { type:'pick-card', prompt:'¿Am, Is o Are?', context:'"They ___ playing in the garden."', contextHighlight:'___',
      options:[
        {id:'a',text:'are',hint:'you/we/they → are',correct:true},
        {id:'b',text:'is',hint:'he/she/it'},
        {id:'c',text:'am',hint:'I'},
        {id:'d',text:'were',hint:'pasado'},
      ],
      explain:'"They" → are. Recuerda: I→am, he/she/it→is, you/we/they→are.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Nosotros estamos cocinando la cena.',
      bank:['We','are','am','cooking','cook','dinner','the','.'], answer:['We','are','cooking','dinner','.'] },
  ],

  l54: [ // Negativa — am/is/are + not + -ing
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"He isn't listening to me.", audio:true,
      options:[{id:'a',text:'Él no me está escuchando.',correct:true},{id:'b',text:'Él me escucha.'},{id:'c',text:'Él me escuchó.'},{id:'d',text:'Él no me escuchará.'}],
      explain:'"Isn\'t + -ing" = is not + verbo-ing. Negativo del Presente Continuo.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['They',' playing right now.'],
      options:[{id:'a',text:"aren't",correct:true},{id:'b',text:"isn't"},{id:'c',text:'not'},{id:'d',text:"don't"}],
      explain:'They → "aren\'t" (are not). I → am not, he/she/it → isn\'t, you/we/they → aren\'t.' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO (Presente Continuo)', source:'She is working.',
      options:[
        {id:'a',text:"She isn't working.",correct:true},
        {id:'b',text:"She doesn't working."},
        {id:'c',text:"She not is working."},
        {id:'d',text:"She isn't work."},
      ],
      explain:'"Isn\'t + verbo-ing". El "not" va entre el auxiliar (is) y el verbo en -ing.' },
    { type:'pick-card', prompt:'¿Cuál negativo va con "I"?', context:'"I ___ studying right now."', contextHighlight:'___',
      options:[
        {id:'a',text:"am not",hint:"I + am not (no existe amn't)",correct:true},
        {id:'b',text:"isn't",hint:'he/she/it'},
        {id:'c',text:"aren't",hint:'you/we/they'},
        {id:'d',text:"don't",hint:'presente simple'},
      ],
      explain:'Con "I" usa "I am not" o "I\'m not". No existe la contracción "amn\'t".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ella no está trabajando hoy.',
      bank:['She','is',"isn't",'are','working','work','today','.'], answer:['She',"isn't",'working','today','.'] },
  ],

  l55: [ // Preguntas — Am/Is/Are + sujeto + -ing?
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'Are you working from home?', audio:true,
      options:[{id:'a',text:'¿Estás trabajando desde casa?',correct:true},{id:'b',text:'¿Trabajas desde casa?'},{id:'c',text:'¿Trabajaste desde casa?'},{id:'d',text:'¿Vas a trabajar desde casa?'}],
      explain:'Pregunta Presente Continuo: "Am/Is/Are + sujeto + verbo-ing + ...?"' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' she eating dinner?'],
      options:[{id:'a',text:'Is',correct:true},{id:'b',text:'Are'},{id:'c',text:'Am'},{id:'d',text:'Does'}],
      explain:'"She" → Is. Pregunta: "Is + sujeto + verbo-ing?"' },
    { type:'transform-pick', prompt:'Convierte en PREGUNTA (Presente Continuo)', source:'He is sleeping.',
      options:[
        {id:'a',text:'Is he sleeping?',correct:true},
        {id:'b',text:'Does he sleeping?'},
        {id:'c',text:'He is sleeping?'},
        {id:'d',text:'Is he sleep?'},
      ],
      explain:'"Is" va al inicio. El verbo en -ing se mantiene igual.' },
    { type:'pick-card', prompt:'¿Am, Is o Are?', context:'"___ they coming to the party?"', contextHighlight:'___',
      options:[
        {id:'a',text:'Are',hint:'they → Are',correct:true},
        {id:'b',text:'Is',hint:'he/she/it'},
        {id:'c',text:'Am',hint:'I'},
        {id:'d',text:'Do',hint:'presente simple'},
      ],
      explain:'"They" → Are. Recuerda: I→Am, he/she/it→Is, you/we/they→Are.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'¿Está él escuchando música?',
      bank:['Is','Are','he','listening','listen','to','music','?'], answer:['Is','he','listening','to','music','?'] },
  ],

  l56: [ // Present Continuous vs Present Simple
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'He works in an office, but today he is working from home.', audio:true,
      options:[{id:'a',text:'Él trabaja en una oficina, pero hoy está trabajando desde casa.',correct:true},{id:'b',text:'Él trabajó en una oficina, pero hoy trabaja desde casa.'},{id:'c',text:'Él va a trabajar en una oficina, pero hoy trabaja desde casa.'},{id:'d',text:'Él trabaja desde casa hoy en la oficina.'}],
      explain:'Simple = rutina general ("works"). Continuo = ahora mismo o excepción ("is working from home today").' },
    { type:'pick-card', prompt:'¿Simple o Continuo?', context:'"Look! She ___ a new song." (en este momento)', contextHighlight:'___',
      options:[
        {id:'a',text:'is singing',hint:'ahora mismo → Continuo',correct:true},
        {id:'b',text:'sings',hint:'rutina → Simple'},
        {id:'c',text:'sang',hint:'pasado'},
        {id:'d',text:'will sing',hint:'futuro'},
      ],
      explain:'"Look!" indica acción que ocurre AHORA → Presente Continuo (is + -ing).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I',' coffee every morning. (rutina)'],
      options:[{id:'a',text:'drink',correct:true},{id:'b',text:'am drinking'},{id:'c',text:'drank'},{id:'d',text:'will drink'}],
      explain:'"Every morning" indica rutina → Presente Simple. Sin -ing.' },
    { type:'transform-pick', prompt:'Cambia de Simple a Continuo (ahora mismo)', source:'She studies English.',
      options:[
        {id:'a',text:'She is studying English right now.',correct:true},
        {id:'b',text:'She studied English right now.'},
        {id:'c',text:'She studies English right now.'},
        {id:'d',text:'She will study English right now.'},
      ],
      explain:'"Right now" = ahora mismo → Presente Continuo. Añade "is + -ing".' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'They are watching TV at the moment.',
      options:[{id:'a',text:'Presente Simple'},{id:'b',text:'Presente Continuo',correct:true},{id:'c',text:'Pasado Continuo'},{id:'d',text:'Futuro Continuo'}],
      explain:'"Are + watching" + "at the moment" = Presente Continuo (acción en curso ahora).' },
  ],

  // ── u15: Verbos Modales (A2) ──────────────────────────────────────────

  l58: [ // Can (habilidad / permiso)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I can play the guitar.', audio:true,
      options:[{id:'a',text:'Puedo tocar la guitarra.',correct:true},{id:'b',text:'Pude tocar la guitarra.'},{id:'c',text:'Voy a tocar la guitarra.'},{id:'d',text:'Debería tocar la guitarra.'}],
      explain:'"Can" + verbo base = poder hacer algo (habilidad presente).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' speak English fluently.'],
      options:[{id:'a',text:'can',correct:true},{id:'b',text:'cans'},{id:'c',text:'is'},{id:'d',text:'does'}],
      explain:'"Can" es invariable: no lleva -s con he/she/it. Siempre "can".' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO', source:'He can swim.',
      options:[
        {id:'a',text:"He can't swim.",correct:true},
        {id:'b',text:"He doesn't can swim."},
        {id:'c',text:"He can not swimming."},
        {id:'d',text:"He cans not swim."},
      ],
      explain:'"Can\'t" o "cannot". Sin "do/does", el verbo principal queda en base.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'¿Puedes ayudarme, por favor?',
      bank:['Can','Could','you','help','me','please','?','.'], answer:['Can','you','help','me','please','?'] },
  ],

  l59: [ // Could (cortesía / habilidad pasada)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I could read when I was four.', audio:true,
      options:[{id:'a',text:'Podía leer cuando tenía cuatro años.',correct:true},{id:'b',text:'Puedo leer ahora.'},{id:'c',text:'Podría leer ahora.'},{id:'d',text:'Voy a leer cuando tenga cuatro años.'}],
      explain:'"Could" como pasado de "can" expresa habilidad en el pasado.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:[null,' you pass the salt, please?'],
      options:[{id:'a',text:'Could',correct:true},{id:'b',text:'Should'},{id:'c',text:'Must'},{id:'d',text:'May'}],
      explain:'"Could" se usa para peticiones EDUCADAS, más formal que "can".' },
    { type:'transform-pick', prompt:'Convierte en una petición educada con "could"', source:'Give me the book.',
      options:[
        {id:'a',text:'Could you give me the book?',correct:true},
        {id:'b',text:'You could give me the book.'},
        {id:'c',text:'Could you giving me the book?'},
        {id:'d',text:'Can could you give me the book?'},
      ],
      explain:'"Could you + verbo base + ...?" = petición cortés.' },
    { type:'pick-card', prompt:'¿Qué expresa "could" aquí?', context:'"I could swim very well as a child."', contextHighlight:'could',
      options:[
        {id:'a',text:'Habilidad pasada',hint:'pasado de can ✓',correct:true},
        {id:'b',text:'Petición educada'},
        {id:'c',text:'Obligación'},
        {id:'d',text:'Predicción futura'},
      ],
      explain:'"Could" + situación pasada (as a child) = habilidad en el pasado.' },
  ],

  l60: [ // May / Might (posibilidad)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'It might rain tomorrow.', audio:true,
      options:[{id:'a',text:'Podría llover mañana.',correct:true},{id:'b',text:'Va a llover mañana.'},{id:'c',text:'Llovió ayer.'},{id:'d',text:'Está lloviendo mañana.'}],
      explain:'"Might" = posibilidad débil (≈30-50%). "May" sería un poco más probable.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:[null,' I come in?'],
      options:[{id:'a',text:'May',correct:true},{id:'b',text:'Might'},{id:'c',text:'Must'},{id:'d',text:'Should'}],
      explain:'"May I + verbo base?" = pedir permiso formal.' },
    { type:'pick-card', prompt:'¿May o Might? (más probabilidad ≈ may; menos ≈ might)', context:'"She ___ come to the party (no estoy seguro)."', contextHighlight:'___',
      options:[
        {id:'a',text:'might',hint:'posibilidad baja ✓',correct:true},
        {id:'b',text:'may',hint:'posibilidad media'},
        {id:'c',text:'will',hint:'futuro certero'},
        {id:'d',text:'must',hint:'obligación'},
      ],
      explain:'"Might" es menos probable que "may". Útil cuando no estás seguro.' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO', source:'She may come.',
      options:[
        {id:'a',text:'She may not come.',correct:true},
        {id:'b',text:"She doesn't may come."},
        {id:'c',text:'She may comes not.'},
        {id:'d',text:'She mays not come.'},
      ],
      explain:'"May not" / "Might not" (sin contracción habitual). Verbo en forma base.' },
  ],

  l61: [ // Should / Must (consejo / obligación)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'You should rest more.', audio:true,
      options:[{id:'a',text:'Deberías descansar más.',correct:true},{id:'b',text:'Debes descansar más.'},{id:'c',text:'Podrías descansar más.'},{id:'d',text:'Vas a descansar más.'}],
      explain:'"Should" = deberías. Da un consejo o recomendación (suave).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['Passengers',' wear a seatbelt.'],
      options:[{id:'a',text:'must',correct:true},{id:'b',text:'might'},{id:'c',text:'may'},{id:'d',text:'could'}],
      explain:'"Must" = obligación fuerte. Para reglas y normas.' },
    { type:'pick-card', prompt:'¿Should o Must?', context:'"You ___ try this restaurant — la comida está bien rica."', contextHighlight:'___',
      options:[
        {id:'a',text:'should',hint:'recomendación suave ✓',correct:true},
        {id:'b',text:'must',hint:'obligación — muy fuerte aquí'},
        {id:'c',text:'might',hint:'posibilidad'},
        {id:'d',text:'could',hint:'cortesía'},
      ],
      explain:'"Should" para recomendaciones. "Must" sería demasiado fuerte para una sugerencia.' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO (prohibición fuerte)', source:'You must smoke here.',
      options:[
        {id:'a',text:"You mustn't smoke here.",correct:true},
        {id:'b',text:"You don't must smoke here."},
        {id:'c',text:"You mustn't smoking here."},
        {id:'d',text:"You must not smokes here."},
      ],
      explain:'"Mustn\'t" (must not) = prohibición. El verbo principal queda en forma base.' },
  ],

  l62: [ // Review — Modales
    { type:'identify-tense', prompt:'¿Qué modal usa esta oración?', sentence:'I would travel more if I had money.',
      options:[{id:'a',text:'Would (condicional)',correct:true},{id:'b',text:'Will (futuro)'},{id:'c',text:'Could (cortesía)'},{id:'d',text:'Must (obligación)'}],
      explain:'"Would" = condicional (haría, viajaría). Acompaña una condición hipotética.' },
    { type:'transform-pick', prompt:'Cambia "can" a una petición educada', source:'Can you help me?',
      options:[
        {id:'a',text:'Could you help me?',correct:true},
        {id:'b',text:'Should you help me?'},
        {id:'c',text:'Must you help me?'},
        {id:'d',text:'Will you help me?'},
      ],
      explain:'"Could" es más educado/formal que "can" para pedir ayuda.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' be tired — she worked all day.'],
      options:[{id:'a',text:'must',correct:true},{id:'b',text:'can'},{id:'c',text:'might not'},{id:'d',text:'should'}],
      explain:'"Must" también expresa DEDUCCIÓN LÓGICA (estoy bastante seguro de que…).' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:"You shouldn't eat so fast.",
      options:[{id:'a',text:"You shouldn't eat so fast.",correct:true},{id:'b',text:"You couldn't eat so fast."},{id:'c',text:'You must eat so fast.'}] },
  ],

  // ── u16: Adjetivos (comparativos y superlativos) (A2) ─────────────────

  l63: [ // Comparativos de superioridad (-er / more)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'My brother is taller than me.', audio:true,
      options:[{id:'a',text:'Mi hermano es más alto que yo.',correct:true},{id:'b',text:'Mi hermano es el más alto.'},{id:'c',text:'Mi hermano es tan alto como yo.'},{id:'d',text:'Mi hermano es menos alto que yo.'}],
      explain:'Adjetivo corto: "tall" → "taller" + "than".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['This book is',' than that one.'],
      options:[{id:'a',text:'more interesting',correct:true},{id:'b',text:'interestinger'},{id:'c',text:'most interesting'},{id:'d',text:'as interesting'}],
      explain:'"Interesting" tiene 4 sílabas → "more + adjetivo + than" (palabras largas).' },
    { type:'transform-pick', prompt:'Comparativo de "big"', source:'A whale is ___ than a shark.',
      options:[
        {id:'a',text:'bigger',correct:true},
        {id:'b',text:'more big'},
        {id:'c',text:'biger'},
        {id:'d',text:'most big'},
      ],
      explain:'"Big" → "bigger" (CVC: dobla la última consonante + er).' },
    { type:'pick-card', prompt:'¿Cuál es la regla para 2+ sílabas?', context:'"This phone is ___ expensive than that one."', contextHighlight:'___',
      options:[
        {id:'a',text:'more',hint:'2+ sílabas → more + adj',correct:true},
        {id:'b',text:'-er',hint:'1 sílaba'},
        {id:'c',text:'most',hint:'superlativo'},
        {id:'d',text:'less',hint:'inferioridad'},
      ],
      explain:'Palabras largas (2+ sílabas) usan "more + adjetivo + than".' },
  ],

  l64: [ // Comparativos de inferioridad (less)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'This car is less expensive than that one.', audio:true,
      options:[{id:'a',text:'Este coche es menos caro que ese.',correct:true},{id:'b',text:'Este coche es más caro que ese.'},{id:'c',text:'Este coche es tan caro como ese.'},{id:'d',text:'Este coche es el más caro.'}],
      explain:'"Less + adjetivo + than" = menos que. Funciona con cualquier longitud de adjetivo.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She is',' happy today.'],
      options:[{id:'a',text:'less',correct:true},{id:'b',text:'-er'},{id:'c',text:'least'},{id:'d',text:'most'}],
      explain:'"Less + adjetivo" = menos. No se usa "-er" para inferioridad.' },
    { type:'transform-pick', prompt:'Convierte a comparativo de INFERIORIDAD', source:'My job is more difficult than yours.',
      options:[
        {id:'a',text:'My job is less difficult than yours.',correct:true},
        {id:'b',text:'My job is less easier than yours.'},
        {id:'c',text:'My job is difficulter than yours.'},
        {id:'d',text:'My job is most difficult than yours.'},
      ],
      explain:'Cambia "more" por "less" para indicar inferioridad. El adjetivo no cambia.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Este libro es menos interesante que el otro.',
      bank:['This','book','is','less','more','interesting','than','the','other','one','.'], answer:['This','book','is','less','interesting','than','the','other','one','.'] },
  ],

  l65: [ // Comparativos de igualdad (as ... as)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'She is as tall as her sister.', audio:true,
      options:[{id:'a',text:'Ella es tan alta como su hermana.',correct:true},{id:'b',text:'Ella es más alta que su hermana.'},{id:'c',text:'Ella es la más alta.'},{id:'d',text:'Ella es menos alta que su hermana.'}],
      explain:'"As + adjetivo + as" = comparativo de igualdad (tan… como).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['My car is as fast',' yours.'],
      options:[{id:'a',text:'as',correct:true},{id:'b',text:'than'},{id:'c',text:'that'},{id:'d',text:'of'}],
      explain:'Estructura completa: "as + adjetivo + AS + comparación".' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO de igualdad', source:'He is as fast as you.',
      options:[
        {id:'a',text:'He is not as fast as you.',correct:true},
        {id:'b',text:'He is less as fast as you.'},
        {id:'c',text:'He is fast not as as you.'},
        {id:'d',text:'He not is as fast as you.'},
      ],
      explain:'"Not as + adjetivo + as" = no tan… como.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Mi casa es tan grande como la tuya.',
      bank:['My','house','is','as','than','big','as','yours','.'], answer:['My','house','is','as','big','as','yours','.'] },
  ],

  l66: [ // Superlativos (-est / the most)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'He is the tallest in the class.', audio:true,
      options:[{id:'a',text:'Él es el más alto de la clase.',correct:true},{id:'b',text:'Él es más alto que la clase.'},{id:'c',text:'Él es tan alto como la clase.'},{id:'d',text:'Él es menos alto que la clase.'}],
      explain:'Superlativo: "the + adjetivo + -est" (palabras cortas).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['This is the',' expensive car in the store.'],
      options:[{id:'a',text:'most',correct:true},{id:'b',text:'more'},{id:'c',text:'-est'},{id:'d',text:'least'}],
      explain:'Palabra larga (expensive) → "the most + adjetivo".' },
    { type:'transform-pick', prompt:'Superlativo de "happy"', source:'She is ___ girl I know.',
      options:[
        {id:'a',text:'the happiest',correct:true},
        {id:'b',text:'the most happy'},
        {id:'c',text:'the happyest'},
        {id:'d',text:'happier'},
      ],
      explain:'"Happy" → "happiest" (en -y: y → i + est).' },
    { type:'pick-card', prompt:'¿Superlativo de "good"?', context:'"This is the ___ pizza in town."', contextHighlight:'___',
      options:[
        {id:'a',text:'best',hint:'irregular ✓',correct:true},
        {id:'b',text:'goodest',hint:'no existe'},
        {id:'c',text:'better',hint:'comparativo'},
        {id:'d',text:'most good',hint:'incorrecto'},
      ],
      explain:'"Good" → comparativo "better", superlativo "best". Irregular.' },
  ],

  l67: [ // Review — Adjetivos
    { type:'identify-tense', prompt:'¿Qué tipo de comparación es?', sentence:'This box is the heaviest of all.',
      options:[{id:'a',text:'Superlativo',correct:true},{id:'b',text:'Comparativo superioridad'},{id:'c',text:'Comparativo igualdad'},{id:'d',text:'Comparativo inferioridad'}],
      explain:'"The + adjetivo-est" + "of all" = superlativo. Señala el más de un grupo.' },
    { type:'transform-pick', prompt:'Convierte al SUPERLATIVO', source:'She is more beautiful than her cousins.',
      options:[
        {id:'a',text:'She is the most beautiful of her cousins.',correct:true},
        {id:'b',text:'She is the beautifullest of her cousins.'},
        {id:'c',text:'She is the more beautiful than her cousins.'},
        {id:'d',text:'She is more beautiful most than her cousins.'},
      ],
      explain:'Comparativo "more + adj" → Superlativo "the most + adj".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['My day was as good',' yours.'],
      options:[{id:'a',text:'as',correct:true},{id:'b',text:'than'},{id:'c',text:'that'},{id:'d',text:'more'}],
      explain:'Igualdad: "as + adj + as". Las dos "as" son obligatorias.' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'This is the worst day of my life.',
      options:[{id:'a',text:'This is the worst day of my life.',correct:true},{id:'b',text:'This is the best day of my life.'},{id:'c',text:'This is a worse day of my life.'}] },
  ],

  l57: [ // Review — Present Continuous
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'I am studying for the exam right now.',
      options:[{id:'a',text:'Presente Simple'},{id:'b',text:'Presente Continuo',correct:true},{id:'c',text:'Pasado Simple'},{id:'d',text:'Futuro Continuo'}],
      explain:'"Am + verbo-ing" + "right now" = Presente Continuo.' },
    { type:'transform-pick', prompt:'Convierte al Presente Continuo', source:'They play soccer on Sundays.',
      options:[
        {id:'a',text:'They are playing soccer right now.',correct:true},
        {id:'b',text:'They is playing soccer right now.'},
        {id:'c',text:'They play soccer right now.'},
        {id:'d',text:'They are play soccer right now.'},
      ],
      explain:'"They are + verbo-ing". Con they usa "are".' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' you watching the game?'],
      options:[{id:'a',text:'Are',correct:true},{id:'b',text:'Is'},{id:'c',text:'Am'},{id:'d',text:'Do'}],
      explain:'"You" → "Are". Pregunta en Presente Continuo: "Are you + verbo-ing?"' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:"She isn't listening to me.",
      options:[{id:'a',text:"She isn't listening to me.",correct:true},{id:'b',text:"She doesn't listen to me."},{id:'c',text:'She listened to me.'}] },
  ],

  // ── u8: Simple Future — Will ──────────────────────────────────────────

  l24: [ // Will for Predictions
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'It will rain tomorrow.', audio:true,
      options:[{id:'a',text:'Lloverá mañana.',correct:true},{id:'b',text:'Está lloviendo mañana.'},{id:'c',text:'Llovió ayer.'},{id:'d',text:'Va a llover ahora.'}],
      explain:'"Will + verb" expresa predicciones sobre el futuro.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I think she',' win the competition.'],
      options:[{id:'a',text:'will',correct:true},{id:'b',text:'going'},{id:'c',text:'is'},{id:'d',text:'won'}],
      explain:'"Will" para predicciones o creencias sobre lo que pasará.' },
    { type:'transform-pick', prompt:'Convierte en una PREDICCIÓN con "will"', source:'The weather is cold today.',
      options:[
        {id:'a',text:'It will be cold tomorrow.',correct:true},
        {id:'b',text:'It is going to be cold tomorrow.'},
        {id:'c',text:'It will be cold yesterday.'},
        {id:'d',text:'It wills be cold tomorrow.'},
      ],
      explain:'"Will + be + adjective" para predicciones. "Will" nunca lleva -s.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'Scientists believe humans will live on Mars someday.',
      options:[{id:'a',text:'Presente Simple'},{id:'b',text:'Futuro Simple (will)',correct:true},{id:'c',text:'Futuro Continuo'},{id:'d',text:'Going to'}],
      explain:'"Will + verbo base" = Futuro Simple. Se usa para predicciones.' },
  ],

  l25: [ // Will for Decisions (spontaneous)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"I'll have the soup, please.", audio:true,
      options:[{id:'a',text:'Tomaré la sopa, por favor.',correct:true},{id:'b',text:'Voy a tomar la sopa.'},{id:'c',text:'Tomé la sopa.'},{id:'d',text:'Estoy comiendo la sopa.'}],
      explain:'"Will" para decisiones tomadas EN EL MOMENTO (espontáneas).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:["The phone is ringing. Don't worry, I"," answer it."],
      options:[{id:'a',text:"'ll",correct:true},{id:'b',text:'am going to'},{id:'c',text:'was'},{id:'d',text:'going'}],
      explain:'"I\'ll" = "I will". Decisión espontánea tomada ahora mismo.' },
    { type:'transform-pick', prompt:'Decisión espontánea: convierte con "will"', source:'(Decides now) I carry the bags.',
      options:[
        {id:"a",text:"I'll carry the bags.",correct:true},
        {id:"b",text:"I'm going to carry the bags."},
        {id:"c",text:"I carried the bags."},
        {id:"d",text:"I will carrying the bags."},
      ],
      explain:'"Will" = decisión tomada en el momento. "Going to" sería para un plan previo.' },
    { type:'pick-card', prompt:'¿Cuál es una decisión ESPONTÁNEA?', context:'"It\'s hot in here."', contextHighlight:'It\'s hot in here.',
      options:[
        {id:'a',text:"I'll open the window.",hint:'espontáneo ✓',correct:true},
        {id:'b',text:"I'm going to open the window.",hint:'plan previo'},
        {id:'c',text:'I opened the window.',hint:'pasado'},
        {id:'d',text:'I am opening the window.',hint:'ahora mismo'},
      ],
      explain:'"Will" = respuesta espontánea a una situación. "Going to" = plan ya decidido.' },
  ],

  l26: [ // Won't (Negative)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"She won't come to the meeting.", audio:true,
      options:[{id:'a',text:'Ella no vendrá a la reunión.',correct:true},{id:'b',text:'Ella vendrá a la reunión.'},{id:'c',text:'Ella no fue a la reunión.'},{id:'d',text:'Ella no va a la reunión ahora.'}],
      explain:'"Won\'t" = "will not". Forma negativa del futuro con "will".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I promise I'," tell anyone your secret."],
      options:[{id:'a',text:"won't",correct:true},{id:'b',text:'will'},{id:'c',text:"don't"},{id:'d',text:'am not'}],
      explain:'"Won\'t" = "will not". Promesa de NO hacer algo en el futuro.' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO con "won\'t"', source:'She will travel to Paris next year.',
      options:[
        {id:'a',text:"She won't travel to Paris next year.",correct:true},
        {id:'b',text:"She not will travel to Paris next year."},
        {id:'c',text:"She will not traveling to Paris next year."},
        {id:'d',text:"She doesn't travel to Paris next year."},
      ],
      explain:'"Won\'t" va antes del verbo base. No uses "not will" ni "will not + -ing".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ellos no jugarán bajo la lluvia.',
      bank:["They","won't","will","play","playing","in","under","the","rain","."], answer:["They","won't","play","in","the","rain","."] },
  ],

  l27: [ // Will — Questions
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'Will you help me move the furniture?', audio:true,
      options:[{id:'a',text:'¿Me ayudarás a mover los muebles?',correct:true},{id:'b',text:'¿Puedes moverme los muebles?'},{id:'c',text:'¿Me estás ayudando a mover los muebles?'},{id:'d',text:'¿Vas a mover los muebles ahora?'}],
      explain:'Pregunta con "will": Will + sujeto + verbo base + ...?' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' she be at home tonight?'],
      options:[{id:'a',text:'Will',correct:true},{id:'b',text:'Is'},{id:'c',text:'Does'},{id:'d',text:'Going'}],
      explain:'"Will" va al INICIO de las preguntas en futuro simple.' },
    { type:'transform-pick', prompt:'Convierte en PREGUNTA con "will"', source:'They will finish the project on time.',
      options:[
        {id:'a',text:'Will they finish the project on time?',correct:true},
        {id:'b',text:'They will finish the project on time?'},
        {id:'c',text:'Do they will finish the project on time?'},
        {id:'d',text:'Will they finishing the project on time?'},
      ],
      explain:'"Will" va al principio. El verbo principal sigue en forma base.' },
    { type:'pick-card', prompt:'Make a YES/NO question: "___ he call you back?"', context:'(él — futuro — llamar)', contextHighlight:'futuro',
      options:[
        {id:'a',text:'Will',hint:'futuro simple',correct:true},
        {id:'b',text:'Is',hint:'presente continuo'},
        {id:'c',text:'Does',hint:'presente simple'},
        {id:'d',text:'Was',hint:'pasado simple'},
      ],
      explain:'"Will he call?" es la pregunta correcta en futuro simple.' },
  ],

  l28: [ // Review — Simple Future Will
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'They will travel to Spain in the summer.',
      options:[{id:'a',text:'Presente Simple'},{id:'b',text:'Futuro Simple (will)',correct:true},{id:'c',text:'Futuro Continuo'},{id:'d',text:'Going to'}],
      explain:'"Will + verbo base" sin am/is/are = Futuro Simple.' },
    { type:'transform-pick', prompt:'Convierte al Futuro Simple (will)', source:'You eat breakfast at 7 every day.',
      options:[
        {id:'a',text:'You will eat breakfast at 7 tomorrow.',correct:true},
        {id:'b',text:'You will eats breakfast at 7 tomorrow.'},
        {id:'c',text:'You are going to ate breakfast at 7 tomorrow.'},
        {id:'d',text:'You will be eat breakfast at 7 tomorrow.'},
      ],
      explain:'En futuro con "will", el verbo principal no cambia (sin -s, sin -ing).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['Don\'t worry, I',' not be late.'],
      options:[{id:'a',text:'will',correct:true},{id:'b',text:'going'},{id:'c',text:'am'},{id:'d',text:'do'}],
      explain:'"Will not" = "won\'t". Ambas formas son correctas.' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'Will she be at the office tomorrow?',
      options:[{id:'a',text:'Will she be at the office tomorrow?',correct:true},{id:'b',text:'Is she at the office tomorrow?'},{id:'c',text:'Will she go to the office yesterday?'}] },
  ],

  // ── u9: Future Continuous ─────────────────────────────────────────────

  l29: [ // Will be + -ing (basic form)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I will be working all morning.', audio:true,
      options:[{id:'a',text:'Estaré trabajando toda la mañana.',correct:true},{id:'b',text:'Trabajaré toda la mañana.'},{id:'c',text:'Estoy trabajando toda la mañana.'},{id:'d',text:'Voy a trabajar toda la mañana.'}],
      explain:'"Will be + -ing" = acción que estará EN PROGRESO en el futuro.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She will be',' TV at 8 pm.'],
      options:[{id:'a',text:'watching',correct:true},{id:'b',text:'watch'},{id:'c',text:'watched'},{id:'d',text:'watches'}],
      explain:'Después de "will be" siempre va el verbo con -ing.' },
    { type:'transform-pick', prompt:'Convierte al Futuro Continuo (will be + -ing)', source:'He sleeps at 10 pm.',
      options:[
        {id:'a',text:'He will be sleeping at 10 pm.',correct:true},
        {id:'b',text:'He will sleep at 10 pm.'},
        {id:'c',text:'He is sleeping at 10 pm.'},
        {id:'d',text:'He will be sleep at 10 pm.'},
      ],
      explain:'"Will be + verbo-ing". No olvides la -ing en el verbo principal.' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Ellos estarán estudiando para el examen mañana.',
      bank:['They','will','be','studying','study','for','the','exam','tomorrow','.'], answer:['They','will','be','studying','for','the','exam','tomorrow','.'] },
  ],

  l30: [ // Actions in Progress (future)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'At 8 pm, we will be having dinner.', audio:true,
      options:[{id:'a',text:'A las 8 pm, estaremos cenando.',correct:true},{id:'b',text:'A las 8 pm, cenaremos.'},{id:'c',text:'A las 8 pm, estamos cenando.'},{id:'d',text:'A las 8 pm, vamos a cenar.'}],
      explain:'Futuro Continuo = acción en progreso en un momento específico del futuro.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'She will be teaching a class when you call.',
      options:[{id:'a',text:'Futuro Simple (will)'},{id:'b',text:'Presente Continuo'},{id:'c',text:'Futuro Continuo',correct:true},{id:'d',text:'Going to'}],
      explain:'"Will be + -ing" con un momento futuro = Futuro Continuo.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:["Don't call at noon — he will be",' his homework.'],
      options:[{id:'a',text:'doing',correct:true},{id:'b',text:'do'},{id:'c',text:'does'},{id:'d',text:'did'}],
      explain:'"Will be + -ing". "Do" → "doing".' },
    { type:'pick-card', prompt:'At 6am tomorrow, I will ___ (sleep). ¿Qué forma?', context:'"At 6am tomorrow, I ___ ."', contextHighlight:'___',
      options:[
        {id:'a',text:'will be sleeping',hint:'en progreso a las 6am',correct:true},
        {id:'b',text:'will sleep',hint:'acción puntual'},
        {id:'c',text:'am sleeping',hint:'presente'},
        {id:'d',text:'slept',hint:'pasado'},
      ],
      explain:'"Will be sleeping" = acción que estará ocurriendo en un momento futuro.' },
  ],

  l31: [ // Negative & Questions (Future Continuous)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"I won't be sleeping when you get home.", audio:true,
      options:[{id:'a',text:'No estaré durmiendo cuando llegues a casa.',correct:true},{id:'b',text:'Estaré durmiendo cuando llegues a casa.'},{id:'c',text:'No dormí cuando llegaste.'},{id:'d',text:'No voy a dormir cuando llegues.'}],
      explain:'"Won\'t be + -ing" = Futuro Continuo negativo.' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' you be working on Sunday?'],
      options:[{id:'a',text:'Will',correct:true},{id:'b',text:'Are'},{id:'c',text:'Do'},{id:'d',text:'Is'}],
      explain:'Pregunta en Futuro Continuo: "Will + sujeto + be + verb-ing?"' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO (Futuro Continuo)', source:'She will be cooking at noon.',
      options:[
        {id:"a",text:"She won't be cooking at noon.",correct:true},
        {id:"b",text:"She will not cooking at noon."},
        {id:"c",text:"She isn't cooking at noon."},
        {id:"d",text:"She will be not cooking at noon."},
      ],
      explain:'"Won\'t be + -ing" o "will not be + -ing". "Not" va entre "will" y "be".' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'Will you be using the car tonight?',
      options:[{id:'a',text:'Futuro Simple (will)'},{id:'b',text:'Presente Continuo'},{id:'c',text:'Futuro Continuo',correct:true},{id:'d',text:'Going to'}],
      explain:'"Will + sujeto + be + -ing?" = pregunta en Futuro Continuo.' },
  ],

  l32: [ // Review — Future Continuous
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'At noon they will be eating lunch.',
      options:[{id:'a',text:'Futuro Simple (will)'},{id:'b',text:'Presente Continuo'},{id:'c',text:'Futuro Continuo',correct:true},{id:'d',text:'Going to'}],
      explain:'"Will be + -ing" en un momento futuro = Futuro Continuo.' },
    { type:'transform-pick', prompt:'Convierte al Futuro Continuo (will be + -ing)', source:'I study at 9 pm every day.',
      options:[
        {id:'a',text:'I will be studying at 9 pm tomorrow.',correct:true},
        {id:'b',text:'I will study at 9 pm tomorrow.'},
        {id:'c',text:'I am going to study at 9 pm tomorrow.'},
        {id:'d',text:'I will studying at 9 pm tomorrow.'},
      ],
      explain:'"Will be studying" = estaré estudiando (en progreso a las 9pm).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She will be',' the piano all afternoon.'],
      options:[{id:'a',text:'playing',correct:true},{id:'b',text:'play'},{id:'c',text:'plays'},{id:'d',text:'played'}],
      explain:'"Will be + -ing". "Play" → "playing".' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'Will you be working from home tomorrow?',
      options:[{id:'a',text:'Will you be working from home tomorrow?',correct:true},{id:'b',text:'Will you work from home tomorrow?'},{id:'c',text:'Are you working from home tomorrow?'}] },
  ],

  // ── u10: Going to ─────────────────────────────────────────────────────

  l33: [ // Going to + verb (basic form)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I am going to visit my grandmother.', audio:true,
      options:[{id:'a',text:'Voy a visitar a mi abuela.',correct:true},{id:'b',text:'Visité a mi abuela.'},{id:'c',text:'Estoy visitando a mi abuela.'},{id:'d',text:'Visitaré a mi abuela mañana.'}],
      explain:'"Am/is/are going to + verb" expresa planes o intenciones futuras.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She is going to',' English every day.'],
      options:[{id:'a',text:'study',correct:true},{id:'b',text:'studying'},{id:'c',text:'studies'},{id:'d',text:'studied'}],
      explain:'Después de "going to" el verbo va en INFINITIVO (forma base, sin -ing).' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Vamos a cocinar pasta para cenar.',
      bank:['We','are','am','going','to','cook','cooking','pasta','for','dinner','.'], answer:['We','are','going','to','cook','pasta','for','dinner','.'] },
    { type:'transform-pick', prompt:'Convierte usando "going to"', source:'He buys a new car.',
      options:[
        {id:'a',text:'He is going to buy a new car.',correct:true},
        {id:'b',text:'He is going to buying a new car.'},
        {id:'c',text:'He going to buy a new car.'},
        {id:'d',text:'He will be buying a new car.'},
      ],
      explain:'"Is going to + verbo base". No añadas -ing al verbo final.' },
  ],

  l34: [ // Plans & Intentions
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'They are going to get married next spring.', audio:true,
      options:[{id:'a',text:'Van a casarse la próxima primavera.',correct:true},{id:'b',text:'Se casaron la primavera pasada.'},{id:'c',text:'Se casan ahora mismo.'},{id:'d',text:'Quizás se casen.'}],
      explain:'"Going to" para planes e intenciones decididas con antelación.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'We are going to open a new restaurant next year.',
      options:[{id:'a',text:'Presente Continuo'},{id:'b',text:'Futuro Simple (will)'},{id:'c',text:'Going to',correct:true},{id:'d',text:'Futuro Continuo'}],
      explain:'"Am/is/are + going to" = plan o intención. No confundir con Presente Continuo.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I',' going to study abroad next semester.'],
      options:[{id:'a',text:'am',correct:true},{id:'b',text:'is'},{id:'c',text:'are'},{id:'d',text:'be'}],
      explain:'"I am going to". Con "I" usa siempre "am".' },
    { type:'pick-card', prompt:'¿Cuál es un PLAN decidido de antemano?', context:'"Mañana tengo examen."', contextHighlight:'Mañana tengo examen.',
      options:[
        {id:'a',text:"I'm going to study tonight.",hint:'plan previo ✓',correct:true},
        {id:'b',text:"I'll study tonight.",hint:'decisión espontánea'},
        {id:'c',text:'I study tonight.',hint:'presente simple'},
        {id:'d',text:'I studied tonight.',hint:'pasado'},
      ],
      explain:'"Going to" = plan ya decidido. "Will" = decisión tomada en el momento.' },
  ],

  l35: [ // Not going to (Negative)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"I am not going to eat fast food anymore.", audio:true,
      options:[{id:'a',text:'Ya no voy a comer comida rápida.',correct:true},{id:'b',text:'Voy a comer comida rápida.'},{id:'c',text:'No comí comida rápida.'},{id:'d',text:'No como comida rápida ahora.'}],
      explain:'"Am/is/are NOT going to" = negativo de "going to".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['They are',' going to accept those conditions.'],
      options:[{id:'a',text:'not',correct:true},{id:'b',text:'never'},{id:'c',text:"won't"},{id:'d',text:'no'}],
      explain:'"Not" va entre el auxiliar (am/is/are) y "going to".' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO con "not going to"', source:'She is going to wear that dress.',
      options:[
        {id:'a',text:"She is not going to wear that dress.",correct:true},
        {id:'b',text:"She isn't going wear that dress."},
        {id:'c',text:"She not going to wear that dress."},
        {id:'d',text:"She won't going to wear that dress."},
      ],
      explain:'"Is not going to" o "isn\'t going to". No mezcles "won\'t" con "going to".' },
    { type:'word-bank', prompt:'Build the sentence in English', spanish:'Él no va a pedir disculpas.',
      bank:['He','is','not','going','to','apologize','sorry','.'], answer:['He','is','not','going','to','apologize','.'] },
  ],

  l36: [ // Are you going to...? (Questions)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'Are you going to come to the party?', audio:true,
      options:[{id:'a',text:'¿Vas a venir a la fiesta?',correct:true},{id:'b',text:'¿Vienes a la fiesta ahora?'},{id:'c',text:'¿Viniste a la fiesta?'},{id:'d',text:'¿Irás a la fiesta?'}],
      explain:'Pregunta con "going to": Am/Is/Are + sujeto + going to + verbo?' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' she going to take the train?'],
      options:[{id:'a',text:'Is',correct:true},{id:'b',text:'Are'},{id:'c',text:'Am'},{id:'d',text:'Will'}],
      explain:'"She" → "Is she going to...?" Con he/she/it usa "Is".' },
    { type:'transform-pick', prompt:'Convierte en PREGUNTA con "going to"', source:'They are going to travel to Japan.',
      options:[
        {id:'a',text:'Are they going to travel to Japan?',correct:true},
        {id:'b',text:'They are going to travel to Japan?'},
        {id:'c',text:'Do they going to travel to Japan?'},
        {id:'d',text:'Will they going to travel to Japan?'},
      ],
      explain:'"Are" va al inicio. No uses "do/does" ni "will" con "going to".' },
    { type:'pick-card', prompt:'"___ going to make it in time?" (yo)', context:'"___ I going to make it in time?"', contextHighlight:'___',
      options:[
        {id:'a',text:'Am',hint:'I → Am',correct:true},
        {id:'b',text:'Is',hint:'he/she/it → Is'},
        {id:'c',text:'Are',hint:'you/we/they → Are'},
        {id:'d',text:'Will',hint:'futuro simple'},
      ],
      explain:'"Am I going to...?" Con "I" usa siempre "Am".' },
  ],

  l37: [ // Will vs Going to (Review)
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'She is going to start a new job on Monday.',
      options:[{id:'a',text:'Futuro Simple (will)'},{id:'b',text:'Futuro Continuo'},{id:'c',text:'Presente Continuo'},{id:'d',text:'Going to',correct:true}],
      explain:'"Am/is/are going to" = plan previo. Aquí es un plan ya decidido.' },
    { type:'pick-card', prompt:'Decisión espontánea: alguien toca el timbre.', context:'"Ding dong!" (suena el timbre)', contextHighlight:'Ding dong!',
      options:[
        {id:'a',text:"I'll get the door!",hint:'espontáneo ✓',correct:true},
        {id:'b',text:"I'm going to get the door.",hint:'plan previo'},
        {id:'c',text:'I got the door.',hint:'pasado'},
        {id:'d',text:'I get the door.',hint:'presente simple'},
      ],
      explain:'"Will" para respuestas espontáneas. "Going to" implica que ya lo habías planeado.' },
    { type:'transform-pick', prompt:'Decisión espontánea → convierte con "will"', source:'(Decides now) I help you carry the boxes.',
      options:[
        {id:'a',text:"I'll help you carry the boxes.",correct:true},
        {id:'b',text:"I'm going to help you carry the boxes."},
        {id:'c',text:"I will helping you carry the boxes."},
        {id:'d',text:"I will be help you carry the boxes."},
      ],
      explain:'"I\'ll" = "I will". Decisión tomada EN EL MOMENTO, no planeada antes.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'He will call you when he arrives.',
      options:[{id:'a',text:'Futuro Simple (will)',correct:true},{id:'b',text:'Futuro Continuo'},{id:'c',text:'Going to'},{id:'d',text:'Presente Simple'}],
      explain:'"Will + verbo base" = Futuro Simple. Sin am/is/are + going to.' },
  ],

  // ── u11: Past Simple ──────────────────────────────────────────────────

  l38: [ // Verbos regulares (-ed)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I worked all day yesterday.', audio:true,
      options:[{id:'a',text:'Trabajé todo el día ayer.',correct:true},{id:'b',text:'Trabajo todo el día.'},{id:'c',text:'Voy a trabajar todo el día.'},{id:'d',text:'Estoy trabajando todo el día.'}],
      explain:'Verbos regulares: añade "-ed" al final para formar el pasado. work → worked.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' her homework last night.'],
      options:[{id:'a',text:'finished',correct:true},{id:'b',text:'finish'},{id:'c',text:'finishing'},{id:'d',text:'finishes'}],
      explain:'"Finish" es regular: pasado = "finished". Mismo verbo para todos los sujetos.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Simple (verbo regular)', source:'They walk to school every day.',
      options:[
        {id:'a',text:'They walked to school yesterday.',correct:true},
        {id:'b',text:'They walking to school yesterday.'},
        {id:'c',text:'They will walk to school yesterday.'},
        {id:'d',text:'They walks to school yesterday.'},
      ],
      explain:'"Walk" → "walked". Los verbos regulares siempre forman el pasado con -ed.' },
    { type:'pick-card', prompt:'¿Cuál es el pasado correcto de "study"?', context:'"She ___ for the test."', contextHighlight:'___',
      options:[
        {id:'a',text:'studied',hint:'y → ied',correct:true},
        {id:'b',text:'studyed',hint:'incorrecto'},
        {id:'c',text:'studyd',hint:'incorrecto'},
        {id:'d',text:'studies',hint:'presente he/she/it'},
      ],
      explain:'Verbos terminados en consonante + y: cambia y → i + ed. Study → studied.' },
  ],

  l39: [ // Verbos irregulares
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'He went to Paris last summer.', audio:true,
      options:[{id:'a',text:'Él fue a París el verano pasado.',correct:true},{id:'b',text:'Él va a París este verano.'},{id:'c',text:'Él irá a París el próximo verano.'},{id:'d',text:'Él está yendo a París.'}],
      explain:'"Go" es IRREGULAR: pasado = "went". No se usa "goed".' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['I',' breakfast at 8 am this morning.'],
      options:[{id:'a',text:'ate',correct:true},{id:'b',text:'eated'},{id:'c',text:'eat'},{id:'d',text:'eaten'}],
      explain:'"Eat" → "ate" (irregular). Hay que memorizar las formas irregulares.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Simple (verbo irregular)', source:'I see her at the park.',
      options:[
        {id:'a',text:'I saw her at the park.',correct:true},
        {id:'b',text:'I seed her at the park.'},
        {id:'c',text:'I sees her at the park.'},
        {id:'d',text:'I will see her at the park.'},
      ],
      explain:'"See" → "saw". Lista de irregulares comunes: go/went, eat/ate, see/saw, write/wrote, drink/drank.' },
    { type:'pick-card', prompt:'¿Cuál es el pasado de "write"?', context:'"She ___ a long letter."', contextHighlight:'___',
      options:[
        {id:'a',text:'wrote',hint:'irregular ✓',correct:true},
        {id:'b',text:'writed',hint:'incorrecto'},
        {id:'c',text:'writes',hint:'presente'},
        {id:'d',text:'writing',hint:'gerundio'},
      ],
      explain:'"Write" → "wrote". Verbo irregular.' },
  ],

  l40: [ // Didn't (Negative)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"She didn't call me yesterday.", audio:true,
      options:[{id:'a',text:'Ella no me llamó ayer.',correct:true},{id:'b',text:'Ella no me llama.'},{id:'c',text:'Ella no me llamará.'},{id:'d',text:'Ella no me está llamando.'}],
      explain:'"Didn\'t + verbo base" = negativo del pasado simple. ¡Ojo: el verbo va en BASE, no en pasado!' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:["I didn't",' breakfast this morning.'],
      options:[{id:'a',text:'eat',correct:true},{id:'b',text:'ate'},{id:'c',text:'eaten'},{id:'d',text:'eating'}],
      explain:'Después de "didn\'t" SIEMPRE va el verbo en forma BASE (eat), nunca en pasado (ate).' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO con "didn\'t"', source:'They visited the museum.',
      options:[
        {id:'a',text:"They didn't visit the museum.",correct:true},
        {id:'b',text:"They didn't visited the museum."},
        {id:'c',text:"They don't visit the museum."},
        {id:'d',text:"They not visited the museum."},
      ],
      explain:'"Didn\'t" + verbo BASE. Quita el -ed: visited → visit.' },
    { type:'pick-card', prompt:'¿Cuál NO es correcta?', context:'"She didn\'t ___ to the party."', contextHighlight:'___',
      options:[
        {id:'a',text:'went',hint:'pasado — incorrecto',correct:true},
        {id:'b',text:'go',hint:'base — correcto'},
        {id:'c',text:'come',hint:'base — correcto'},
        {id:'d',text:'arrive',hint:'base — correcto'},
      ],
      explain:'Después de "didn\'t" NO se usa el pasado. Se usa la forma BASE: go, come, arrive.' },
  ],

  l41: [ // Did...? (Questions)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'Did you watch the game last night?', audio:true,
      options:[{id:'a',text:'¿Viste el partido anoche?',correct:true},{id:'b',text:'¿Ves el partido todas las noches?'},{id:'c',text:'¿Vas a ver el partido esta noche?'},{id:'d',text:'¿Estás viendo el partido?'}],
      explain:'Pregunta en pasado: "Did + sujeto + verbo BASE + ...?"' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' she go to the meeting?'],
      options:[{id:'a',text:'Did',correct:true},{id:'b',text:'Does'},{id:'c',text:'Was'},{id:'d',text:'Will'}],
      explain:'"Did" funciona para todos los sujetos en pasado simple: I, you, he, she, we, they.' },
    { type:'transform-pick', prompt:'Convierte en PREGUNTA con "Did"', source:'They traveled to Spain.',
      options:[
        {id:'a',text:'Did they travel to Spain?',correct:true},
        {id:'b',text:'Did they traveled to Spain?'},
        {id:'c',text:'They did travel to Spain?'},
        {id:'d',text:'Do they travel to Spain?'},
      ],
      explain:'"Did" al inicio + sujeto + verbo BASE. Quita el -ed del verbo principal.' },
    { type:'pick-card', prompt:'Pregunta correcta para: "He ate pizza."', context:'¿Cómo se vuelve pregunta?', contextHighlight:'pregunta',
      options:[
        {id:'a',text:'Did he eat pizza?',hint:'verbo en base ✓',correct:true},
        {id:'b',text:'Did he ate pizza?',hint:'no — base'},
        {id:'c',text:'Does he eat pizza?',hint:'eso es presente'},
        {id:'d',text:'He did eat pizza?',hint:'orden incorrecto'},
      ],
      explain:'"Did + sujeto + verbo BASE". El verbo principal vuelve a su forma base.' },
  ],

  l42: [ // Review — Past Simple
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'They lived in Madrid for ten years.',
      options:[{id:'a',text:'Presente Simple'},{id:'b',text:'Pasado Simple',correct:true},{id:'c',text:'Pasado Continuo'},{id:'d',text:'Futuro Simple (will)'}],
      explain:'Verbo en pasado (-ed o irregular) sin "was/were + -ing" = Pasado Simple.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Simple', source:'He drinks coffee every morning.',
      options:[
        {id:'a',text:'He drank coffee yesterday morning.',correct:true},
        {id:'b',text:'He drinked coffee yesterday morning.'},
        {id:'c',text:'He drinks coffee yesterday morning.'},
        {id:'d',text:'He will drink coffee yesterday morning.'},
      ],
      explain:'"Drink" → "drank" (irregular). El pasado simple se forma con -ed o forma irregular.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:["We didn't",' the movie because we were tired.'],
      options:[{id:'a',text:'watch',correct:true},{id:'b',text:'watched'},{id:'c',text:'watching'},{id:'d',text:'watches'}],
      explain:'Después de "didn\'t" siempre va el verbo BASE (watch), no el pasado (watched).' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'Did you call your mother yesterday?',
      options:[{id:'a',text:'Did you call your mother yesterday?',correct:true},{id:'b',text:'Do you call your mother every day?'},{id:'c',text:'Will you call your mother tomorrow?'}] },
  ],

  // ── u12: Past Continuous ──────────────────────────────────────────────

  l43: [ // Was/Were + -ing
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I was watching TV at 9 pm.', audio:true,
      options:[{id:'a',text:'Estaba viendo TV a las 9 pm.',correct:true},{id:'b',text:'Vi TV a las 9 pm.'},{id:'c',text:'Veo TV a las 9 pm.'},{id:'d',text:'Estoy viendo TV.'}],
      explain:'"Was/Were + verb-ing" = acción que estaba en progreso en un momento del pasado.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['She',' studying at midnight.'],
      options:[{id:'a',text:'was',correct:true},{id:'b',text:'were'},{id:'c',text:'is'},{id:'d',text:'will'}],
      explain:'"Was" para I, he, she, it. "Were" para you, we, they.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Continuo (was/were + -ing)', source:'They play football at 5 pm.',
      options:[
        {id:'a',text:'They were playing football at 5 pm.',correct:true},
        {id:'b',text:'They was playing football at 5 pm.'},
        {id:'c',text:'They are playing football at 5 pm.'},
        {id:'d',text:'They were play football at 5 pm.'},
      ],
      explain:'"They" → "were" + "playing" (verbo + ing). Was = singular, Were = plural / you.' },
    { type:'pick-card', prompt:'¿Was o Were?', context:'"You ___ working last night."', contextHighlight:'___',
      options:[
        {id:'a',text:'were',hint:'you → were ✓',correct:true},
        {id:'b',text:'was',hint:'I/he/she/it'},
        {id:'c',text:'are',hint:'presente'},
        {id:'d',text:'will',hint:'futuro'},
      ],
      explain:'"You" SIEMPRE usa "were", incluso si es solo una persona.' },
  ],

  l44: [ // Acciones en progreso (pasado)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'At 8 am, we were having breakfast.', audio:true,
      options:[{id:'a',text:'A las 8 am, estábamos desayunando.',correct:true},{id:'b',text:'A las 8 am, desayunamos.'},{id:'c',text:'A las 8 am, desayunaremos.'},{id:'d',text:'A las 8 am, vamos a desayunar.'}],
      explain:'Pasado Continuo = acción en progreso en un momento específico del pasado.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'She was reading when the phone rang.',
      options:[{id:'a',text:'Pasado Simple'},{id:'b',text:'Pasado Continuo',correct:true},{id:'c',text:'Presente Continuo'},{id:'d',text:'Futuro Continuo'}],
      explain:'"Was + -ing" en un momento del pasado = Pasado Continuo. La acción estaba en curso.' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['He was',' the dishes when I came in.'],
      options:[{id:'a',text:'washing',correct:true},{id:'b',text:'wash'},{id:'c',text:'washed'},{id:'d',text:'washes'}],
      explain:'Después de "was/were" siempre va el verbo en -ing.' },
    { type:'pick-card', prompt:'At 7 pm yesterday, I (cook) dinner. ¿Qué forma?', context:'"At 7 pm yesterday, I ___ dinner."', contextHighlight:'___',
      options:[
        {id:'a',text:'was cooking',hint:'en progreso a las 7pm',correct:true},
        {id:'b',text:'cooked',hint:'acción terminada'},
        {id:'c',text:'am cooking',hint:'presente'},
        {id:'d',text:'will cook',hint:'futuro'},
      ],
      explain:'"Was cooking" describe la acción que estaba sucediendo en ese momento del pasado.' },
  ],

  l45: [ // Past Continuous vs Past Simple
    { type:'translate-pick', prompt:'Translate this sentence', sentence:'I was sleeping when she arrived.', audio:true,
      options:[{id:'a',text:'Yo estaba durmiendo cuando ella llegó.',correct:true},{id:'b',text:'Yo dormí cuando ella llegó.'},{id:'c',text:'Yo duermo cuando ella llega.'},{id:'d',text:'Yo voy a dormir cuando ella llegue.'}],
      explain:'Acción larga (Pasado Continuo: was sleeping) interrumpida por acción corta (Pasado Simple: arrived).' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['While we were eating, the lights',' off.'],
      options:[{id:'a',text:'went',correct:true},{id:'b',text:'were going'},{id:'c',text:'go'},{id:'d',text:'will go'}],
      explain:'"While + Pasado Continuo" describe la acción larga; el Pasado Simple describe el evento que ocurre dentro.' },
    { type:'transform-pick', prompt:'Combina con while (Pasado Continuo + Pasado Simple)', source:'I read a book. The phone rang.',
      options:[
        {id:'a',text:'I was reading a book when the phone rang.',correct:true},
        {id:'b',text:'I read a book when the phone was ringing.'},
        {id:'c',text:'I was reading a book when the phone was ringing.'},
        {id:'d',text:'I read a book when the phone rang.'},
      ],
      explain:'Acción en progreso (was reading) + acción que la interrumpe (rang).' },
    { type:'pick-card', prompt:'¿Qué oración usa AMBOS tiempos correctamente?', context:'Acción en progreso + acción que la interrumpe', contextHighlight:'acción',
      options:[
        {id:'a',text:'She was cooking when he called.',hint:'continuo + simple ✓',correct:true},
        {id:'b',text:'She cooked when he was calling.',hint:'orden incorrecto'},
        {id:'c',text:'She was cooking when he was calling.',hint:'ambas continuo'},
        {id:'d',text:'She cooks when he calls.',hint:'presente'},
      ],
      explain:'La acción más larga va en Pasado Continuo; la que la interrumpe va en Pasado Simple.' },
  ],

  l46: [ // Negative & Questions (Past Continuous)
    { type:'translate-pick', prompt:'Translate this sentence', sentence:"I wasn't sleeping at midnight.", audio:true,
      options:[{id:'a',text:'No estaba durmiendo a medianoche.',correct:true},{id:'b',text:'No dormí a medianoche.'},{id:'c',text:'No estoy durmiendo.'},{id:'d',text:'No voy a dormir a medianoche.'}],
      explain:'"Wasn\'t / Weren\'t + verb-ing" = Pasado Continuo negativo.' },
    { type:'fill-blank', prompt:'Complete the question', sentence:[null,' you working at 9 pm yesterday?'],
      options:[{id:'a',text:'Were',correct:true},{id:'b',text:'Was'},{id:'c',text:'Did'},{id:'d',text:'Are'}],
      explain:'Pregunta en Pasado Continuo: "Was/Were + sujeto + verb-ing?" Con "you" siempre "Were".' },
    { type:'transform-pick', prompt:'Convierte al NEGATIVO (Pasado Continuo)', source:'They were watching TV at 8 pm.',
      options:[
        {id:'a',text:"They weren't watching TV at 8 pm.",correct:true},
        {id:'b',text:"They wasn't watching TV at 8 pm."},
        {id:'c',text:"They didn't watching TV at 8 pm."},
        {id:'d',text:"They were not watch TV at 8 pm."},
      ],
      explain:'"Weren\'t + -ing". "Not" va entre el auxiliar (was/were) y el verbo en -ing.' },
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'Were they playing in the park?',
      options:[{id:'a',text:'Pasado Simple'},{id:'b',text:'Pasado Continuo',correct:true},{id:'c',text:'Presente Continuo'},{id:'d',text:'Futuro Continuo'}],
      explain:'"Were + sujeto + verb-ing?" = pregunta en Pasado Continuo.' },
  ],

  l47: [ // Review — Past Continuous
    { type:'identify-tense', prompt:'¿Qué tiempo verbal es esta oración?', sentence:'At 6 pm yesterday, I was driving home.',
      options:[{id:'a',text:'Pasado Simple'},{id:'b',text:'Pasado Continuo',correct:true},{id:'c',text:'Presente Continuo'},{id:'d',text:'Futuro Continuo'}],
      explain:'"Was + -ing" + momento específico del pasado = Pasado Continuo.' },
    { type:'transform-pick', prompt:'Convierte al Pasado Continuo (was/were + -ing)', source:'She studies English at 7 pm.',
      options:[
        {id:'a',text:'She was studying English at 7 pm yesterday.',correct:true},
        {id:'b',text:'She is studying English at 7 pm yesterday.'},
        {id:'c',text:'She studied English at 7 pm yesterday.'},
        {id:'d',text:'She were studying English at 7 pm yesterday.'},
      ],
      explain:'"Was studying" = Pasado Continuo. Con "she" usa "was" (no "were").' },
    { type:'fill-blank', prompt:'Complete the sentence', sentence:['We',' walking when it started to rain.'],
      options:[{id:'a',text:'were',correct:true},{id:'b',text:'was'},{id:'c',text:'are'},{id:'d',text:'will'}],
      explain:'"We" → "were". Were = you/we/they.' },
    { type:'listen-pick', prompt:'Tap what you hear', audio:true, audioText:'They were having dinner when I called.',
      options:[{id:'a',text:'They were having dinner when I called.',correct:true},{id:'b',text:'They had dinner when I called.'},{id:'c',text:'They are having dinner now.'}] },
  ],
};

const ACTIVE_EXERCISES = UNIT_EXERCISES.u1;

// User state
const INITIAL_USER = {
  name: 'Estudiante',
  streak: 0,
  gems: 0,
  hearts: 5,
  xp: 0,
  league: 'Bronce',
  goalDaily: 20,
  xpToday: 0,
};

window.UNITS = UNITS;

// ── Camino de aprendizaje secuencial (Duolingo-style) ──────────────────────
// Cada paso tiene OPCIONALMENTE:
//   theory:  ID de sección lateral con la teoría (se lee primero)
//   unitId:  ID de unidad con lecciones de práctica (se hace después)
// El paso se considera "completo" cuando ambos (los que aplica) están hechos:
//   - theory: marcado como aprendido (efj_completed_sections)
//   - unitId: todas las lecciones en estado 'done'
const LEARNING_PATH = [
  // ── A1 ──
  { id: 'a1-1', level: 'A1', title: 'Presente Continuo',       emoji: '🎬',  color: '#06B6D4', shadow: '#0E7490', theory: 't-pres-cont',   unitId: 'u14' },
  { id: 'a1-2', level: 'A1', title: 'Presente Simple',         emoji: '☀️',  color: '#EAB308', shadow: '#A16207', theory: 't-pres-simple', unitId: 'u13' },
  { id: 'a1-3', level: 'A1', title: 'Artículos',               emoji: '📰',  color: '#A855F7', shadow: '#7E22CE', theory: 'articulos' },
  { id: 'a1-4', level: 'A1', title: 'Números',                 emoji: '🔢',  color: '#14B8A6', shadow: '#0F766E', theory: 'numeros' },
  { id: 'a1-5', level: 'A1', title: 'Adverbios de Frecuencia', emoji: '⏱️',  color: '#8B5CF6', shadow: '#6D28D9', theory: 'adverbios' },
  { id: 'a1-6', level: 'A1', title: 'Pronombres',              emoji: '👥',  color: '#F97316', shadow: '#C2410C', theory: 'pronombres' },
  { id: 'a1-7', level: 'A1', title: 'Preposiciones',           emoji: '📍',  color: '#F59E0B', shadow: '#B45309', theory: 'preposiciones', unitId: 'u7' },
  { id: 'a1-8', level: 'A1', title: 'There is / There are',    emoji: '🏠',  color: '#F43F5E', shadow: '#BE123C', theory: 'estructuras',   unitId: 'u6' },
  { id: 'a1-9', level: 'A1', title: 'Has / Have',              emoji: '🤝',  color: '#0EA5E9', shadow: '#075985', theory: 'estructuras',   unitId: 'u5' },
  // ── A2 ──
  { id: 'a2-1', level: 'A2', title: 'Futuro Simple (Will)',    emoji: '🚀',  color: '#EC4899', shadow: '#BE185D', theory: 't-fut-simple',  unitId: 'u8' },
  { id: 'a2-2', level: 'A2', title: 'Futuro Continuo',         emoji: '⏳',  color: '#3B82F6', shadow: '#1D4ED8', theory: 't-fut-cont',    unitId: 'u9' },
  { id: 'a2-3', level: 'A2', title: 'Futuro · Going to',       emoji: '🗺️',  color: '#84CC16', shadow: '#4D7C0F', theory: 't-going-to',    unitId: 'u10' },
  { id: 'a2-4', level: 'A2', title: 'Pasado Continuo',         emoji: '🎞️',  color: '#9333EA', shadow: '#6B21A8', theory: 't-past-cont',   unitId: 'u12' },
  { id: 'a2-5', level: 'A2', title: 'Pasado Simple',           emoji: '🕰️',  color: '#DC2626', shadow: '#991B1B', theory: 't-past-simple', unitId: 'u11' },
  { id: 'a2-6', level: 'A2', title: 'Verbos Modales',          emoji: '🎩',  color: '#7C3AED', shadow: '#5B21B6', theory: 'modals',        unitId: 'u15' },
  { id: 'a2-7', level: 'A2', title: 'Adjetivos',               emoji: '🎨',  color: '#DB2777', shadow: '#9D174D', theory: 'adjetivos',     unitId: 'u16' },
  { id: 'a2-8', level: 'A2', title: 'Cuantificadores',         emoji: '📊',  color: '#6366F1', shadow: '#4338CA', theory: 'cuantificadores' },
];

// Mapeo de cada sección del sidebar a "se desbloquea cuando el paso X
// del path está disponible". null = siempre desbloqueada.
const SECTION_UNLOCKS = {
  // Secciones de teoría asociadas al path: se desbloquean cuando se llega al paso.
  articulos:       { stepId: 'a1-3', label: 'Artículos',         icon: '📰', color: '#A855F7' },
  numeros:         { stepId: 'a1-4', label: 'Números',           icon: '🔢', color: '#14B8A6' },
  adverbios:       { stepId: 'a1-5', label: 'Adv. de Frecuencia', icon: '⏱️', color: '#8B5CF6' },
  pronombres:      { stepId: 'a1-6', label: 'Pronombres',        icon: '👥', color: '#F97316' },
  preposiciones:   { stepId: 'a1-7', label: 'Preposiciones',     icon: '📍', color: '#F59E0B' },
  estructuras:     { stepId: 'a1-8', label: 'There is / Have',   icon: '📦', color: '#F43F5E' },
  modals:          { stepId: 'a2-6', label: 'Modales',           icon: '🎩', color: '#7C3AED' },
  adjetivos:       { stepId: 'a2-7', label: 'Adjetivos',         icon: '🎨', color: '#DB2777' },
  cuantificadores: { stepId: 'a2-8', label: 'Cuantificadores',   icon: '📊', color: '#6366F1' },
  // Práctica libre — se desbloquea tras completar hitos
  verbs:     { stepId: null,    label: 'Verbos esenciales', icon: '⚡', color: '#6366F1' },
  repaso:    { stepId: null,    label: 'Teoría de tiempos', icon: '📖', color: '#0EA5E9' }, // referencia compartida — siempre disponible
  exercises: { stepId: 'a1-2',  label: 'Convertir tiempos', icon: '🔄', color: '#0EA5E9' },
  create:    { stepId: 'a1-2',  label: 'Crear y Traducir',  icon: '✍️', color: '#E11D48' },
  onfire:    { stepId: 'a1-9',  label: 'TEST',              icon: '🔥', color: '#DC2626' },
  preguntas: { stepId: 'a2-5',  label: 'Historias',         icon: '💬', color: '#2563EB' },
  viajes:    { stepId: 'a2-5',  label: 'Viajes',            icon: '✈️', color: '#0EA5E9' },
};

// ── Helpers de progreso ────────────────────────────────────────────────────
function getUnitProgress(unit) {
  if (!unit) return { done: 0, total: 0, complete: false };
  const total = unit.lessons.length;
  const done  = unit.lessons.filter(l => l.status === 'done').length;
  return { done, total, complete: total > 0 && done === total };
}

// ── Modo Admin (desbloquea TODO el contenido) ──────────────────────────────
// TODO: cuando se implemente login, atar `isAdminMode()` a `user.role === 'admin'`
// y eliminar el toggle del panel de Tweaks. Por ahora, está ON por defecto
// para que el admin/dev vea todo sin tener que activar nada.
// El progreso real (lecciones done, secciones marcadas) se mantiene tal cual
// para poder probar el flujo de usuario normal apagándolo desde Tweaks.
function isAdminMode() {
  // Con login activo: admin = usuario con rol 'admin'.
  if (window.Auth && window.Auth.isAuthenticated()) {
    if (!window.Auth.isAdmin()) return false; // usuario normal: camino secuencial
    // Admin: respeta el toggle "previsualizar como usuario" del panel Tweaks.
    try {
      const raw = localStorage.getItem('efj_admin_mode');
      if (raw === null) return true;
      return JSON.parse(raw);
    } catch { return true; }
  }
  // Sin sesión (no debería ocurrir tras el gate de login): comportamiento seguro.
  try {
    const raw = localStorage.getItem('efj_admin_mode');
    if (raw === null) return false;
    return JSON.parse(raw);
  } catch { return false; }
}
function setAdminMode(on) {
  localStorage.setItem('efj_admin_mode', JSON.stringify(!!on));
  window.dispatchEvent(new CustomEvent('admin-mode-changed', { detail: !!on }));
}

// ── Marcado de secciones de teoría como aprendidas (localStorage) ──────────
function getCompletedSections() {
  try { return new Set(JSON.parse(localStorage.getItem('efj_completed_sections') || '[]')); }
  catch { return new Set(); }
}
function isSectionCompleted(id) {
  return getCompletedSections().has(id);
}
function markSectionCompleted(id) {
  const set = getCompletedSections();
  set.add(id);
  localStorage.setItem('efj_completed_sections', JSON.stringify([...set]));
  // Notificar al resto de la app (home, sidebar) para que re-rendericen.
  window.dispatchEvent(new CustomEvent('section-completed', { detail: id }));
}

// ── "Teoría vista" por paso (para mostrar teoría en el PRIMER clic) ─────────
// Independiente de la completitud: solo recuerda si ya abrió la teoría una vez.
function getTheorySeen() {
  try { return new Set(JSON.parse(localStorage.getItem('efj_theory_seen') || '[]')); }
  catch { return new Set(); }
}
function isTheorySeen(stepId) {
  return getTheorySeen().has(stepId);
}
function markTheorySeen(stepId) {
  const set = getTheorySeen();
  if (set.has(stepId)) return;
  set.add(stepId);
  localStorage.setItem('efj_theory_seen', JSON.stringify([...set]));
  window.dispatchEvent(new CustomEvent('section-completed', { detail: stepId }));
}

// ── Lógica de desbloqueo del path ──────────────────────────────────────────
// Un paso está COMPLETO cuando:
//   - Si tiene unidad de práctica → cuando esa unidad tiene todas las lecciones en 'done'.
//     (La teoría es referencia opcional, no requiere marcarla.)
//   - Si SOLO tiene teoría → cuando la teoría está marcada como aprendida.
function isStepComplete(step, units, completedSet) {
  if (step.unitId) {
    const u = units.find(x => x.id === step.unitId);
    return getUnitProgress(u).complete;
  }
  if (step.theory) return completedSet.has(step.theory);
  return false;
}
// Un paso está DESBLOQUEADO cuando el anterior está completo (el primero siempre).
// En modo admin, TODOS los pasos están desbloqueados.
function isStepUnlocked(stepId, units, completedSet) {
  if (isAdminMode()) return true;
  const idx = LEARNING_PATH.findIndex(s => s.id === stepId);
  if (idx <= 0) return true;
  return isStepComplete(LEARNING_PATH[idx - 1], units, completedSet);
}

// ── Desbloqueo de items del sidebar ────────────────────────────────────────
// Una sección está desbloqueada cuando el paso al que está asociada
// (stepId) ya está accesible. Si stepId es null → siempre desbloqueada.
// En modo admin, TODOS los items están desbloqueados.
function isSidebarItemUnlocked(sectionId, units, completedSet) {
  if (isAdminMode()) return true;
  const cfg = SECTION_UNLOCKS[sectionId];
  if (!cfg) return true;
  if (!cfg.stepId) return true;
  return isStepUnlocked(cfg.stepId, units, completedSet);
}

window.LEARNING_PATH = LEARNING_PATH;
window.SECTION_UNLOCKS = SECTION_UNLOCKS;
window.getUnitProgress = getUnitProgress;
window.getCompletedSections = getCompletedSections;
window.isSectionCompleted = isSectionCompleted;
window.markSectionCompleted = markSectionCompleted;
window.isTheorySeen = isTheorySeen;
window.markTheorySeen = markTheorySeen;
window.isStepComplete = isStepComplete;
window.isStepUnlocked = isStepUnlocked;
window.isSidebarItemUnlocked = isSidebarItemUnlocked;
window.isAdminMode = isAdminMode;
window.setAdminMode = setAdminMode;
window.UNIT_EXERCISES = UNIT_EXERCISES;
window.LESSON_EXERCISES = LESSON_EXERCISES;
window.ACTIVE_EXERCISES = ACTIVE_EXERCISES;
window.INITIAL_USER = INITIAL_USER;
