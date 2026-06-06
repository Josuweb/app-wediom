// Ejercicio: Convertir a — 100 ejercicios procedurales (convertir + traducir).
// El alumno elige practicar un tiempo verbal puntual o mezcla aleatoria.

// ── Pronombres y auxiliares de conjugación ──────────────────────────────────
const CV_PRONOUNS = [
  { en: 'I',    es: 'Yo',       enNum: '1s', esIdx: 0 },
  { en: 'You',  es: 'Tú',       enNum: '2s', esIdx: 1 },
  { en: 'He',   es: 'Él',       enNum: '3s', esIdx: 2 },
  { en: 'She',  es: 'Ella',     enNum: '3s', esIdx: 2 },
  { en: 'We',   es: 'Nosotros', enNum: '1p', esIdx: 3 },
  { en: 'They', es: 'Ellos',    enNum: '3p', esIdx: 4 },
];
const CV_ESTAR = {
  pres: ['estoy', 'estás', 'está', 'estamos', 'están'],
  imp:  ['estaba', 'estabas', 'estaba', 'estábamos', 'estaban'],
  fut:  ['estaré', 'estarás', 'estará', 'estaremos', 'estarán'],
};
const CV_IR_PRES = ['voy', 'vas', 'va', 'vamos', 'van'];

// ── Verbos curados — conjugación completa en inglés y español ────────────────
const CV_VERBS = [
  {
    en: 'work', es: 'trabajar', base: 'work', third: 'works', past: 'worked', ing: 'working',
    esGer: 'trabajando',
    esPres: ['trabajo', 'trabajas', 'trabaja', 'trabajamos', 'trabajan'],
    esPret: ['trabajé', 'trabajaste', 'trabajó', 'trabajamos', 'trabajaron'],
    esFut:  ['trabajaré', 'trabajarás', 'trabajará', 'trabajaremos', 'trabajarán'],
    comps: [
      { en: ['in', 'an', 'office'], es: ['en', 'una', 'oficina'] },
      { en: ['every', 'day'],       es: ['todos', 'los', 'días'] },
      { en: ['from', 'home'],       es: ['desde', 'casa'] },
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
      { en: ['breakfast'],   es: ['el', 'desayuno'] },
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
      { en: ['history'], es: ['historia'] },
    ],
  },
  {
    en: 'live', es: 'vivir', base: 'live', third: 'lives', past: 'lived', ing: 'living',
    esGer: 'viviendo',
    esPres: ['vivo', 'vives', 'vive', 'vivimos', 'viven'],
    esPret: ['viví', 'viviste', 'vivió', 'vivimos', 'vivieron'],
    esFut:  ['viviré', 'vivirás', 'vivirá', 'viviremos', 'vivirán'],
    comps: [
      { en: ['in', 'Mexico'],     es: ['en', 'México'] },
      { en: ['here'],             es: ['aquí'] },
      { en: ['in', 'the', 'city'], es: ['en', 'la', 'ciudad'] },
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
      { en: ['tea'],    es: ['té'] },
    ],
  },
  {
    en: 'read', es: 'leer', base: 'read', third: 'reads', past: 'read', ing: 'reading',
    esGer: 'leyendo',
    esPres: ['leo', 'lees', 'lee', 'leemos', 'leen'],
    esPret: ['leí', 'leíste', 'leyó', 'leímos', 'leyeron'],
    esFut:  ['leeré', 'leerás', 'leerá', 'leeremos', 'leerán'],
    comps: [
      { en: ['a', 'book'],      es: ['un', 'libro'] },
      { en: ['the', 'news'],    es: ['las', 'noticias'] },
      { en: ['a', 'magazine'],  es: ['una', 'revista'] },
    ],
  },
  {
    en: 'play', es: 'jugar', base: 'play', third: 'plays', past: 'played', ing: 'playing',
    esGer: 'jugando',
    esPres: ['juego', 'juegas', 'juega', 'jugamos', 'juegan'],
    esPret: ['jugué', 'jugaste', 'jugó', 'jugamos', 'jugaron'],
    esFut:  ['jugaré', 'jugarás', 'jugará', 'jugaremos', 'jugarán'],
    comps: [
      { en: ['soccer'],     es: ['fútbol'] },
      { en: ['tennis'],     es: ['tenis'] },
      { en: ['basketball'], es: ['básquetbol'] },
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
      { en: ['a', 'story'],  es: ['un', 'cuento'] },
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
      { en: ['the', 'city'],   es: ['la', 'ciudad'] },
    ],
  },
  {
    en: 'cook', es: 'cocinar', base: 'cook', third: 'cooks', past: 'cooked', ing: 'cooking',
    esGer: 'cocinando',
    esPres: ['cocino', 'cocinas', 'cocina', 'cocinamos', 'cocinan'],
    esPret: ['cociné', 'cocinaste', 'cocinó', 'cocinamos', 'cocinaron'],
    esFut:  ['cocinaré', 'cocinarás', 'cocinará', 'cocinaremos', 'cocinarán'],
    comps: [
      { en: ['dinner'],    es: ['la', 'cena'] },
      { en: ['rice'],      es: ['arroz'] },
      { en: ['breakfast'], es: ['el', 'desayuno'] },
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
      { en: ['by', 'plane'], es: ['en', 'avión'] },
    ],
  },
  {
    en: 'listen', es: 'escuchar', base: 'listen', third: 'listens', past: 'listened', ing: 'listening',
    esGer: 'escuchando',
    esPres: ['escucho', 'escuchas', 'escucha', 'escuchamos', 'escuchan'],
    esPret: ['escuché', 'escuchaste', 'escuchó', 'escuchamos', 'escucharon'],
    esFut:  ['escucharé', 'escucharás', 'escuchará', 'escucharemos', 'escucharán'],
    comps: [
      { en: ['to', 'music'],        es: ['música'] },
      { en: ['to', 'the', 'radio'], es: ['la', 'radio'] },
      { en: ['to', 'a', 'podcast'], es: ['un', 'podcast'] },
    ],
  },
  {
    en: 'call', es: 'llamar', base: 'call', third: 'calls', past: 'called', ing: 'calling',
    esGer: 'llamando',
    esPres: ['llamo', 'llamas', 'llama', 'llamamos', 'llaman'],
    esPret: ['llamé', 'llamaste', 'llamó', 'llamamos', 'llamaron'],
    esFut:  ['llamaré', 'llamarás', 'llamará', 'llamaremos', 'llamarán'],
    comps: [
      { en: ['my', 'friend'],  es: ['a', 'mi', 'amigo'] },
      { en: ['the', 'doctor'], es: ['al', 'doctor'] },
      { en: ['my', 'mom'],     es: ['a', 'mi', 'mamá'] },
    ],
  },
  {
    en: 'help', es: 'ayudar', base: 'help', third: 'helps', past: 'helped', ing: 'helping',
    esGer: 'ayudando',
    esPres: ['ayudo', 'ayudas', 'ayuda', 'ayudamos', 'ayudan'],
    esPret: ['ayudé', 'ayudaste', 'ayudó', 'ayudamos', 'ayudaron'],
    esFut:  ['ayudaré', 'ayudarás', 'ayudará', 'ayudaremos', 'ayudarán'],
    comps: [
      { en: ['my', 'brother'],  es: ['a', 'mi', 'hermano'] },
      { en: ['the', 'teacher'], es: ['al', 'maestro'] },
      { en: ['my', 'friends'],  es: ['a', 'mis', 'amigos'] },
    ],
  },
  {
    en: 'watch', es: 'mirar', base: 'watch', third: 'watches', past: 'watched', ing: 'watching',
    esGer: 'mirando',
    esPres: ['miro', 'miras', 'mira', 'miramos', 'miran'],
    esPret: ['miré', 'miraste', 'miró', 'miramos', 'miraron'],
    esFut:  ['miraré', 'mirarás', 'mirará', 'miraremos', 'mirarán'],
    comps: [
      { en: ['a', 'movie'],  es: ['una', 'película'] },
      { en: ['TV'],          es: ['la', 'tele'] },
      { en: ['the', 'game'], es: ['el', 'partido'] },
    ],
  },
  {
    en: 'clean', es: 'limpiar', base: 'clean', third: 'cleans', past: 'cleaned', ing: 'cleaning',
    esGer: 'limpiando',
    esPres: ['limpio', 'limpias', 'limpia', 'limpiamos', 'limpian'],
    esPret: ['limpié', 'limpiaste', 'limpió', 'limpiamos', 'limpiaron'],
    esFut:  ['limpiaré', 'limpiarás', 'limpiará', 'limpiaremos', 'limpiarán'],
    comps: [
      { en: ['the', 'house'],   es: ['la', 'casa'] },
      { en: ['my', 'room'],     es: ['mi', 'cuarto'] },
      { en: ['the', 'kitchen'], es: ['la', 'cocina'] },
    ],
  },
  {
    en: 'use', es: 'usar', base: 'use', third: 'uses', past: 'used', ing: 'using',
    esGer: 'usando',
    esPres: ['uso', 'usas', 'usa', 'usamos', 'usan'],
    esPret: ['usé', 'usaste', 'usó', 'usamos', 'usaron'],
    esFut:  ['usaré', 'usarás', 'usará', 'usaremos', 'usarán'],
    comps: [
      { en: ['the', 'computer'], es: ['la', 'computadora'] },
      { en: ['my', 'phone'],     es: ['mi', 'teléfono'] },
      { en: ['a', 'pencil'],     es: ['un', 'lápiz'] },
    ],
  },
  {
    en: 'wait', es: 'esperar', base: 'wait', third: 'waits', past: 'waited', ing: 'waiting',
    esGer: 'esperando',
    esPres: ['espero', 'esperas', 'espera', 'esperamos', 'esperan'],
    esPret: ['esperé', 'esperaste', 'esperó', 'esperamos', 'esperaron'],
    esFut:  ['esperaré', 'esperarás', 'esperará', 'esperaremos', 'esperarán'],
    comps: [
      { en: ['the', 'bus'],   es: ['el', 'autobús'] },
      { en: ['the', 'train'], es: ['el', 'tren'] },
      { en: ['my', 'turn'],   es: ['mi', 'turno'] },
    ],
  },
  {
    en: 'paint', es: 'pintar', base: 'paint', third: 'paints', past: 'painted', ing: 'painting',
    esGer: 'pintando',
    esPres: ['pinto', 'pintas', 'pinta', 'pintamos', 'pintan'],
    esPret: ['pinté', 'pintaste', 'pintó', 'pintamos', 'pintaron'],
    esFut:  ['pintaré', 'pintarás', 'pintará', 'pintaremos', 'pintarán'],
    comps: [
      { en: ['the', 'wall'],    es: ['la', 'pared'] },
      { en: ['a', 'picture'],   es: ['un', 'cuadro'] },
      { en: ['the', 'door'],    es: ['la', 'puerta'] },
    ],
  },
  {
    en: 'wash', es: 'lavar', base: 'wash', third: 'washes', past: 'washed', ing: 'washing',
    esGer: 'lavando',
    esPres: ['lavo', 'lavas', 'lava', 'lavamos', 'lavan'],
    esPret: ['lavé', 'lavaste', 'lavó', 'lavamos', 'lavaron'],
    esFut:  ['lavaré', 'lavarás', 'lavará', 'lavaremos', 'lavarán'],
    comps: [
      { en: ['the', 'dishes'], es: ['los', 'platos'] },
      { en: ['my', 'car'],     es: ['mi', 'coche'] },
      { en: ['my', 'hands'],   es: ['mis', 'manos'] },
    ],
  },
  {
    en: 'walk', es: 'caminar', base: 'walk', third: 'walks', past: 'walked', ing: 'walking',
    esGer: 'caminando',
    esPres: ['camino', 'caminas', 'camina', 'caminamos', 'caminan'],
    esPret: ['caminé', 'caminaste', 'caminó', 'caminamos', 'caminaron'],
    esFut:  ['caminaré', 'caminarás', 'caminará', 'caminaremos', 'caminarán'],
    comps: [
      { en: ['to', 'school'],     es: ['a', 'la', 'escuela'] },
      { en: ['in', 'the', 'park'], es: ['en', 'el', 'parque'] },
      { en: ['home'],             es: ['a', 'casa'] },
    ],
  },
  {
    en: 'dance', es: 'bailar', base: 'dance', third: 'dances', past: 'danced', ing: 'dancing',
    esGer: 'bailando',
    esPres: ['bailo', 'bailas', 'baila', 'bailamos', 'bailan'],
    esPret: ['bailé', 'bailaste', 'bailó', 'bailamos', 'bailaron'],
    esFut:  ['bailaré', 'bailarás', 'bailará', 'bailaremos', 'bailarán'],
    comps: [
      { en: ['at', 'the', 'party'],    es: ['en', 'la', 'fiesta'] },
      { en: ['salsa'],                 es: ['salsa'] },
      { en: ['with', 'my', 'friends'], es: ['con', 'mis', 'amigos'] },
    ],
  },
  {
    en: 'answer', es: 'contestar', base: 'answer', third: 'answers', past: 'answered', ing: 'answering',
    esGer: 'contestando',
    esPres: ['contesto', 'contestas', 'contesta', 'contestamos', 'contestan'],
    esPret: ['contesté', 'contestaste', 'contestó', 'contestamos', 'contestaron'],
    esFut:  ['contestaré', 'contestarás', 'contestará', 'contestaremos', 'contestarán'],
    comps: [
      { en: ['the', 'question'], es: ['la', 'pregunta'] },
      { en: ['the', 'phone'],    es: ['el', 'teléfono'] },
      { en: ['the', 'email'],    es: ['el', 'correo'] },
    ],
  },
  {
    en: 'open', es: 'abrir', base: 'open', third: 'opens', past: 'opened', ing: 'opening',
    esGer: 'abriendo',
    esPres: ['abro', 'abres', 'abre', 'abrimos', 'abren'],
    esPret: ['abrí', 'abriste', 'abrió', 'abrimos', 'abrieron'],
    esFut:  ['abriré', 'abrirás', 'abrirá', 'abriremos', 'abrirán'],
    comps: [
      { en: ['the', 'window'], es: ['la', 'ventana'] },
      { en: ['the', 'box'],    es: ['la', 'caja'] },
      { en: ['the', 'store'],  es: ['la', 'tienda'] },
    ],
  },
  {
    en: 'learn', es: 'aprender', base: 'learn', third: 'learns', past: 'learned', ing: 'learning',
    esGer: 'aprendiendo',
    esPres: ['aprendo', 'aprendes', 'aprende', 'aprendemos', 'aprenden'],
    esPret: ['aprendí', 'aprendiste', 'aprendió', 'aprendimos', 'aprendieron'],
    esFut:  ['aprenderé', 'aprenderás', 'aprenderá', 'aprenderemos', 'aprenderán'],
    comps: [
      { en: ['a', 'language'],   es: ['un', 'idioma'] },
      { en: ['the', 'song'],     es: ['la', 'canción'] },
      { en: ['something', 'new'], es: ['algo', 'nuevo'] },
    ],
  },
  {
    en: 'buy', es: 'comprar', base: 'buy', third: 'buys', past: 'bought', ing: 'buying',
    esGer: 'comprando',
    esPres: ['compro', 'compras', 'compra', 'compramos', 'compran'],
    esPret: ['compré', 'compraste', 'compró', 'compramos', 'compraron'],
    esFut:  ['compraré', 'comprarás', 'comprará', 'compraremos', 'comprarán'],
    comps: [
      { en: ['a', 'car'],       es: ['un', 'coche'] },
      { en: ['new', 'shoes'],   es: ['zapatos', 'nuevos'] },
      { en: ['some', 'bread'],  es: ['pan'] },
    ],
  },
  {
    en: 'sell', es: 'vender', base: 'sell', third: 'sells', past: 'sold', ing: 'selling',
    esGer: 'vendiendo',
    esPres: ['vendo', 'vendes', 'vende', 'vendemos', 'venden'],
    esPret: ['vendí', 'vendiste', 'vendió', 'vendimos', 'vendieron'],
    esFut:  ['venderé', 'venderás', 'venderá', 'venderemos', 'venderán'],
    comps: [
      { en: ['the', 'house'], es: ['la', 'casa'] },
      { en: ['my', 'bike'],   es: ['mi', 'bicicleta'] },
      { en: ['fruit'],        es: ['fruta'] },
    ],
  },
  {
    en: 'sing', es: 'cantar', base: 'sing', third: 'sings', past: 'sang', ing: 'singing',
    esGer: 'cantando',
    esPres: ['canto', 'cantas', 'canta', 'cantamos', 'cantan'],
    esPret: ['canté', 'cantaste', 'cantó', 'cantamos', 'cantaron'],
    esFut:  ['cantaré', 'cantarás', 'cantará', 'cantaremos', 'cantarán'],
    comps: [
      { en: ['a', 'song'],          es: ['una', 'canción'] },
      { en: ['in', 'the', 'choir'], es: ['en', 'el', 'coro'] },
      { en: ['very', 'well'],       es: ['muy', 'bien'] },
    ],
  },
  {
    en: 'teach', es: 'enseñar', base: 'teach', third: 'teaches', past: 'taught', ing: 'teaching',
    esGer: 'enseñando',
    esPres: ['enseño', 'enseñas', 'enseña', 'enseñamos', 'enseñan'],
    esPret: ['enseñé', 'enseñaste', 'enseñó', 'enseñamos', 'enseñaron'],
    esFut:  ['enseñaré', 'enseñarás', 'enseñará', 'enseñaremos', 'enseñarán'],
    comps: [
      { en: ['English'],     es: ['inglés'] },
      { en: ['the', 'class'], es: ['la', 'clase'] },
      { en: ['children'],    es: ['a', 'niños'] },
    ],
  },
  {
    en: 'need', es: 'necesitar', base: 'need', third: 'needs', past: 'needed', ing: 'needing',
    esGer: 'necesitando',
    esPres: ['necesito', 'necesitas', 'necesita', 'necesitamos', 'necesitan'],
    esPret: ['necesité', 'necesitaste', 'necesitó', 'necesitamos', 'necesitaron'],
    esFut:  ['necesitaré', 'necesitarás', 'necesitará', 'necesitaremos', 'necesitarán'],
    comps: [
      { en: ['help'],         es: ['ayuda'] },
      { en: ['more', 'time'], es: ['más', 'tiempo'] },
      { en: ['a', 'break'],   es: ['un', 'descanso'] },
    ],
  },
  {
    en: 'ask', es: 'preguntar', base: 'ask', third: 'asks', past: 'asked', ing: 'asking',
    esGer: 'preguntando',
    esPres: ['pregunto', 'preguntas', 'pregunta', 'preguntamos', 'preguntan'],
    esPret: ['pregunté', 'preguntaste', 'preguntó', 'preguntamos', 'preguntaron'],
    esFut:  ['preguntaré', 'preguntarás', 'preguntará', 'preguntaremos', 'preguntarán'],
    comps: [
      { en: ['a', 'question'],  es: ['una', 'pregunta'] },
      { en: ['the', 'time'],    es: ['la', 'hora'] },
      { en: ['the', 'address'], es: ['la', 'dirección'] },
    ],
  },
  {
    en: 'carry', es: 'llevar', base: 'carry', third: 'carries', past: 'carried', ing: 'carrying',
    esGer: 'llevando',
    esPres: ['llevo', 'llevas', 'lleva', 'llevamos', 'llevan'],
    esPret: ['llevé', 'llevaste', 'llevó', 'llevamos', 'llevaron'],
    esFut:  ['llevaré', 'llevarás', 'llevará', 'llevaremos', 'llevarán'],
    comps: [
      { en: ['a', 'box'],         es: ['una', 'caja'] },
      { en: ['the', 'bags'],      es: ['las', 'bolsas'] },
      { en: ['my', 'backpack'],   es: ['mi', 'mochila'] },
    ],
  },
  {
    en: 'enjoy', es: 'disfrutar', base: 'enjoy', third: 'enjoys', past: 'enjoyed', ing: 'enjoying',
    esGer: 'disfrutando',
    esPres: ['disfruto', 'disfrutas', 'disfruta', 'disfrutamos', 'disfrutan'],
    esPret: ['disfruté', 'disfrutaste', 'disfrutó', 'disfrutamos', 'disfrutaron'],
    esFut:  ['disfrutaré', 'disfrutarás', 'disfrutará', 'disfrutaremos', 'disfrutarán'],
    comps: [
      { en: ['the', 'party'],   es: ['la', 'fiesta'] },
      { en: ['the', 'trip'],    es: ['el', 'viaje'] },
      { en: ['the', 'weekend'], es: ['el', 'fin', 'de', 'semana'] },
    ],
  },
  {
    en: 'finish', es: 'terminar', base: 'finish', third: 'finishes', past: 'finished', ing: 'finishing',
    esGer: 'terminando',
    esPres: ['termino', 'terminas', 'termina', 'terminamos', 'terminan'],
    esPret: ['terminé', 'terminaste', 'terminó', 'terminamos', 'terminaron'],
    esFut:  ['terminaré', 'terminarás', 'terminará', 'terminaremos', 'terminarán'],
    comps: [
      { en: ['the', 'project'],   es: ['el', 'proyecto'] },
      { en: ['my', 'homework'],   es: ['mi', 'tarea'] },
      { en: ['the', 'race'],      es: ['la', 'carrera'] },
    ],
  },
  {
    en: 'break', es: 'romper', base: 'break', third: 'breaks', past: 'broke', ing: 'breaking',
    esGer: 'rompiendo',
    esPres: ['rompo', 'rompes', 'rompe', 'rompemos', 'rompen'],
    esPret: ['rompí', 'rompiste', 'rompió', 'rompimos', 'rompieron'],
    esFut:  ['romperé', 'romperás', 'romperá', 'romperemos', 'romperán'],
    comps: [
      { en: ['the', 'window'], es: ['la', 'ventana'] },
      { en: ['a', 'glass'],    es: ['un', 'vaso'] },
      { en: ['the', 'rules'],  es: ['las', 'reglas'] },
    ],
  },
];

// ── Tiempos y formas ────────────────────────────────────────────────────────
const CV_TENSES = [
  { id: 'pres',    name: 'Presente Simple',   example: 'She studies English.' },
  { id: 'presC',   name: 'Presente Continuo', example: 'She is studying.' },
  { id: 'fut',     name: 'Futuro Simple',     example: 'He will travel.' },
  { id: 'futC',    name: 'Futuro Continuo',   example: 'She will be reading.' },
  { id: 'goingto', name: 'Going to',          example: 'They are going to cook.' },
  { id: 'past',    name: 'Pasado Simple',     example: 'I worked yesterday.' },
  { id: 'pastC',   name: 'Pasado Continuo',   example: 'He was writing.' },
];
const CV_FORMS = [
  { id: 'afirmativa',    label: 'Afirmativa' },
  { id: 'negativa',      label: 'Negativa' },
  { id: 'interrogativa', label: 'Interrogativa' },
];
const CV_PROPER_EN = new Set(['English', 'Mexico', 'Spain', 'TV', 'I']);
const CV_PROPER_ES = new Set(['México', 'España']);

// ── Conjugación ──────────────────────────────────────────────────────────────
function cvBe(num)     { return num === '1s' ? 'am' : num === '3s' ? 'is' : 'are'; }
function cvBePast(num) { return (num === '1s' || num === '3s') ? 'was' : 'were'; }
function cvDo(num)     { return num === '3s' ? 'does' : 'do'; }

function cvEnglish({ pron, verb, comp, tenseId, form }) {
  const P = pron.en, num = pron.enNum, c = comp.en;
  const { base, third, past, ing } = verb;
  const isQ = form === 'interrogativa', isN = form === 'negativa';
  switch (tenseId) {
    case 'pres':
      if (isQ) return [cvDo(num), P, base, ...c];
      if (isN) return [P, cvDo(num), 'not', base, ...c];
      return [P, (num === '3s' ? third : base), ...c];
    case 'presC':
      if (isQ) return [cvBe(num), P, ing, ...c];
      if (isN) return [P, cvBe(num), 'not', ing, ...c];
      return [P, cvBe(num), ing, ...c];
    case 'past':
      if (isQ) return ['did', P, base, ...c];
      if (isN) return [P, 'did', 'not', base, ...c];
      return [P, past, ...c];
    case 'pastC':
      if (isQ) return [cvBePast(num), P, ing, ...c];
      if (isN) return [P, cvBePast(num), 'not', ing, ...c];
      return [P, cvBePast(num), ing, ...c];
    case 'fut':
      if (isQ) return ['will', P, base, ...c];
      if (isN) return [P, 'will', 'not', base, ...c];
      return [P, 'will', base, ...c];
    case 'futC':
      if (isQ) return ['will', P, 'be', ing, ...c];
      if (isN) return [P, 'will', 'not', 'be', ing, ...c];
      return [P, 'will', 'be', ing, ...c];
    case 'goingto':
      if (isQ) return [cvBe(num), P, 'going', 'to', base, ...c];
      if (isN) return [P, cvBe(num), 'not', 'going', 'to', base, ...c];
      return [P, cvBe(num), 'going', 'to', base, ...c];
    default: return [];
  }
}

function cvSpanish({ pron, verb, comp, tenseId, form }) {
  const P = pron.es, i = pron.esIdx, c = comp.es;
  const neg = form === 'negativa' ? ['no'] : [];
  switch (tenseId) {
    case 'pres':    return [P, ...neg, verb.esPres[i], ...c];
    case 'presC':   return [P, ...neg, CV_ESTAR.pres[i], verb.esGer, ...c];
    case 'past':    return [P, ...neg, verb.esPret[i], ...c];
    case 'pastC':   return [P, ...neg, CV_ESTAR.imp[i], verb.esGer, ...c];
    case 'fut':     return [P, ...neg, verb.esFut[i], ...c];
    case 'futC':    return [P, ...neg, CV_ESTAR.fut[i], verb.esGer, ...c];
    case 'goingto': return [P, ...neg, CV_IR_PRES[i], 'a', verb.es, ...c];
    default: return [];
  }
}

function cvCap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }
function cvCaseEn(t) { return t.map((w, i) => i === 0 ? cvCap(w) : (CV_PROPER_EN.has(w) ? w : w.toLowerCase())); }
function cvCaseEs(t) { return t.map((w, i) => i === 0 ? cvCap(w) : (CV_PROPER_ES.has(w) ? w : w.toLowerCase())); }

function cvShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function cvPick(a) { return a[Math.floor(Math.random() * a.length)]; }

function cvSentence(tokens, isQ, isEs) {
  const body = tokens.join(' ');
  if (isQ) return isEs ? `¿${body}?` : `${body}?`;
  return `${body}.`;
}

// Todas las 21 combinaciones tiempo × forma
const CV_COMBOS = [];
CV_TENSES.forEach(t => CV_FORMS.forEach(f => CV_COMBOS.push({ tense: t, form: f })));

// ── Generación de un ejercicio ──────────────────────────────────────────────
function cvBuildExercise(toTenseIds) {
  for (let attempt = 0; attempt < 300; attempt++) {
    const verb = cvPick(CV_VERBS);
    const pron = cvPick(CV_PRONOUNS);
    const comp = cvPick(verb.comps);
    const toId = cvPick(toTenseIds);
    const toTense = CV_TENSES.find(t => t.id === toId);
    const fromTense = cvPick(CV_TENSES);
    if (fromTense.id === toTense.id) continue;
    const toForm = cvPick(CV_FORMS);
    const fromForm = cvPick(CV_FORMS);
    const spec = { verb, pron, comp };

    const make = (tenseId, formId, isEs) => {
      const isQ = formId === 'interrogativa';
      return isEs
        ? cvSentence(cvCaseEs(cvSpanish({ ...spec, tenseId, form: formId })), isQ, true)
        : cvSentence(cvCaseEn(cvEnglish({ ...spec, tenseId, form: formId })), isQ, false);
    };

    const source    = make(fromTense.id, fromForm.id, false);
    const correct   = make(toTense.id, toForm.id, false);
    const correctEs = make(toTense.id, toForm.id, true);
    if (source === correct) continue;

    // Distractores: empieza por el original (no convertido) + combos aleatorios
    const others = cvShuffle(CV_COMBOS.filter(c =>
      !(c.tense.id === toTense.id && c.form.id === toForm.id)));
    const candidates = [{ tense: fromTense, form: fromForm }, ...others];

    const wrongs = [];
    const usedEn = new Set([correct]);
    const usedEs = new Set([correctEs]);
    for (const c of candidates) {
      if (wrongs.length >= 3) break;
      const en = make(c.tense.id, c.form.id, false);
      const es = make(c.tense.id, c.form.id, true);
      if (usedEn.has(en) || usedEs.has(es)) continue;
      usedEn.add(en); usedEs.add(es);
      wrongs.push({ en, es });
    }
    if (wrongs.length < 3) continue;

    return {
      fromLabel: `${fromTense.name} · ${fromForm.label}`,
      toLabel:   `${toTense.name} · ${toForm.label}`,
      source, correct, spanish: correctEs,
      convertOpts:   cvShuffle([{ text: correct, correct: true },   ...wrongs.map(w => ({ text: w.en, correct: false }))]),
      translateOpts: cvShuffle([{ text: correctEs, correct: true }, ...wrongs.map(w => ({ text: w.es, correct: false }))]),
      sig: `${verb.en}|${pron.en}|${comp.en.join('')}|${fromTense.id}.${fromForm.id}|${toTense.id}.${toForm.id}`,
      baseSig: `${verb.en}|${pron.en}|${comp.en.join('')}`,
    };
  }
  return null;
}

function cvBuildSet(toTenseIds) {
  const set = [], seen = new Set();
  let guard = 0;
  while (set.length < 100 && guard < 20000) {
    guard++;
    const ex = cvBuildExercise(toTenseIds);
    if (!ex || seen.has(ex.baseSig)) continue;
    seen.add(ex.baseSig);
    set.push(ex);
  }
  return set;
}

// ── Insignia de tiempo ──────────────────────────────────────────────────────
const BADGE_COLORS = {
  'Presente Simple':   { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', icon: '☀️' },
  'Presente Continuo': { bg: '#DBEAFE', text: '#1E3A8A', border: '#93C5FD', icon: '⏳' },
  'Futuro Simple':     { bg: '#FFE4E6', text: '#9F1239', border: '#FCA5A5', icon: '🚀' },
  'Futuro Continuo':   { bg: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC', icon: '🛰️' },
  'Going to':          { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', icon: '🎯' },
  'Pasado Simple':     { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4', icon: '🕰️' },
  'Pasado Continuo':   { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD', icon: '🎞️' },
};
function formColor(form) {
  if (form === 'Afirmativa') return { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD' };
  if (form === 'Negativa')   return { bg: '#FFE4E6', text: '#9F1239', border: '#FCA5A5' };
  return                            { bg: '#FEF9C3', text: '#713F12', border: '#FDE047' };
}
function TenseBadge({ label }) {
  const [tense, form] = label.split(' · ');
  const tc = BADGE_COLORS[tense] || { bg: '#F1F5F9', text: '#475569', border: '#CBD5E1' };
  const fc = formColor(form);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 800 }}>
      <span style={{ background: tc.bg, color: tc.text, border: `1.5px solid ${tc.border}`, borderRadius: 999, padding: '3px 10px' }}>{tense}</span>
      <span style={{ background: fc.bg, color: fc.text, border: `1.5px solid ${fc.border}`, borderRadius: 999, padding: '3px 10px' }}>{form}</span>
    </span>
  );
}

function ConvertTenseScreen({ onExit }) {
  const [selectedTenses, setSelectedTenses] = React.useState(() => CV_TENSES.map(t => t.id));
  const [set, setSet]         = React.useState([]);
  const [started, setStarted] = React.useState(false);
  const [idx, setIdx]         = React.useState(0);
  const [phase, setPhase]     = React.useState('convert'); // 'convert' | 'translate'
  const [picked, setPicked]   = React.useState(null);
  const [answered, setAnswered] = React.useState(null);    // null | 'correct' | 'wrong'
  const [score, setScore]     = React.useState({ convert: 0, translate: 0 });
  const [shake, setShake]     = React.useState(false);

  const ex      = set[idx];
  const total   = set.length;
  const isDone  = started && idx >= total;
  const progress = total ? (idx * 2 + (phase === 'translate' ? 1 : 0) + (answered ? 1 : 0)) / (total * 2) : 0;

  function speak(text) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  function startPractice() {
    if (selectedTenses.length === 0) return;
    setSet(cvBuildSet(selectedTenses));
    setIdx(0); setPhase('convert'); setPicked(null); setAnswered(null);
    setScore({ convert: 0, translate: 0 });
    setStarted(true);
  }
  function backToSelect() {
    setStarted(false); setIdx(0); setPhase('convert');
    setPicked(null); setAnswered(null); setScore({ convert: 0, translate: 0 });
  }

  function handleCheck() {
    if (!picked) return;
    const opts = phase === 'convert' ? ex.convertOpts : ex.translateOpts;
    const isCorrect = opts.find(o => o.text === picked)?.correct;
    setAnswered(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
      setScore(s => phase === 'convert'
        ? { ...s, convert: s.convert + 1 }
        : { ...s, translate: s.translate + 1 });
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  function handleNext() {
    if (phase === 'convert') {
      setPhase('translate'); setPicked(null); setAnswered(null);
    } else if (idx + 1 >= total) {
      setIdx(total);
    } else {
      setIdx(i => i + 1); setPhase('convert'); setPicked(null); setAnswered(null);
    }
  }

  // ── Pantalla de selección ─────────────────────────────────────────────────
  if (!started) {
    const allSelected = selectedTenses.length === CV_TENSES.length;
    const noneSelected = selectedTenses.length === 0;
    function toggleTense(id) {
      setSelectedTenses(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    }
    const Card = ({ id, name, icon, example, accent }) => {
      const sel = selectedTenses.includes(id);
      return (
        <button onClick={() => toggleTense(id)} style={{
          textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font)',
          background: sel ? accent.bg : 'white',
          border: `2.5px solid ${sel ? accent.text : 'var(--border)'}`,
          borderRadius: 'var(--r-lg)', padding: '12px 14px',
          display: 'flex', alignItems: 'center', gap: 10, position: 'relative',
          boxShadow: sel ? `0 0 0 3px ${accent.border}` : 'none', transition: 'all 0.12s',
        }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6, flexShrink: 0,
            border: `2px solid ${sel ? accent.text : 'var(--border-strong)'}`,
            background: sel ? accent.text : 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {sel && <svg width="13" height="13" viewBox="0 0 24 24"><path d="M5 12l5 5 9-11" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <div style={{ fontSize: 20, flexShrink: 0 }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 900, fontSize: 13, color: sel ? accent.text : 'var(--text)', lineHeight: 1.2 }}>{name}</div>
            {example && (
              <div style={{ fontSize: 11, color: sel ? accent.text : 'var(--muted)', opacity: 0.78, fontStyle: 'italic', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                "{example}"
              </div>
            )}
          </div>
        </button>
      );
    };
    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: 'linear-gradient(135deg, #7C3AED, #4C1D95)',
          borderRadius: 'var(--r-2xl)', padding: '28px 32px', color: 'white',
          marginBottom: 22, boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
        }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🔄</div>
          <div style={{ fontSize: 23, fontWeight: 900, marginBottom: 8 }}>Convertir a</div>
          <div style={{ fontSize: 14, opacity: 0.88, fontWeight: 600, lineHeight: 1.6 }}>
            <strong>100 oraciones aleatorias</strong>. Cada ejercicio tiene <strong>dos pasos</strong>:
            primero conviertes al tiempo indicado, luego traduces al español.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, gap: 10, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Elige qué tiempos practicar (uno o varios)
          </div>
          <button
            onClick={() => setSelectedTenses(allSelected ? [] : CV_TENSES.map(t => t.id))}
            style={{
              background: 'none', border: '1.5px solid var(--border-strong)', borderRadius: 999,
              padding: '4px 12px', fontSize: 11.5, fontWeight: 800, cursor: 'pointer',
              fontFamily: 'var(--font)', color: 'var(--muted)', whiteSpace: 'nowrap',
            }}>
            {allSelected ? '✕ Quitar todos' : '✓ Seleccionar todos'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 14 }}>
          {CV_TENSES.map(t => {
            const c = BADGE_COLORS[t.name];
            return <Card key={t.id} id={t.id} name={t.name} icon={c.icon} example={t.example}
              accent={{ bg: c.bg, text: c.text, border: c.border }}/>;
          })}
        </div>

        <div style={{
          fontSize: 12.5, fontWeight: 700, marginBottom: 18,
          color: noneSelected ? 'var(--rose-dark)' : 'var(--muted)',
        }}>
          {noneSelected
            ? '⚠️ Selecciona al menos un tiempo verbal para empezar.'
            : `Practicarás convirtiendo a: ${allSelected ? 'todos los tiempos (aleatorio)' : selectedTenses.map(id => CV_TENSES.find(t => t.id === id).name).join(', ')}.`}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-ghost" onClick={onExit}>← Volver</button>
          <button className={`btn btn-lg${noneSelected ? '' : ' btn-primary'}`}
            disabled={noneSelected} onClick={startPractice}
            style={{ flex: 1, ...(noneSelected ? {} : { background: 'var(--violet)', boxShadow: '0 4px 0 var(--violet-dark)' }) }}>
            ▶ EMPEZAR ({selectedTenses.length} {selectedTenses.length === 1 ? 'tiempo' : 'tiempos'})
          </button>
        </div>
      </div>
    );
  }

  // ── Done ──────────────────────────────────────────────────────────────────
  if (isDone) {
    const totalCorrect = score.convert + score.translate;
    const pct = Math.round((totalCorrect / (total * 2)) * 100);
    return (
      <div style={{ maxWidth: 720 }}>
        <div style={{
          background: pct >= 80 ? 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))'
                                : 'linear-gradient(135deg, var(--violet), var(--violet-dark))',
          borderRadius: 'var(--r-2xl)', padding: '36px', color: 'white', textAlign: 'center',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
        }}>
          <div style={{ fontSize: 56, marginBottom: 10 }}>{pct >= 80 ? '🏆' : '💪'}</div>
          <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 4 }}>{pct}%</div>
          <div style={{ fontSize: 15, opacity: 0.9, fontWeight: 700 }}>
            {totalCorrect} de {total * 2} respuestas correctas
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 20, textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Conversiones</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--violet)' }}>{score.convert}<span style={{ fontSize: 16, color: 'var(--muted)' }}>/{total}</span></div>
          </div>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 20, textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Traducciones</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--emerald)' }}>{score.translate}<span style={{ fontSize: 16, color: 'var(--muted)' }}>/{total}</span></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={backToSelect}>🎯 Otro tiempo</button>
          <button className="btn btn-primary" style={{ flex: 2 }} onClick={startPractice}>🔄 OTRA RONDA</button>
        </div>
      </div>
    );
  }

  // ── Exercise ───────────────────────────────────────────────────────────────
  const opts        = phase === 'convert' ? ex.convertOpts : ex.translateOpts;
  const isAnswering = answered === null;
  const isCorrect   = answered === 'correct';
  const feedbackBg  = !answered ? 'white' : isCorrect ? 'var(--emerald-light)' : 'var(--rose-light)';
  const feedbackCol = isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)';
  const correctText = phase === 'convert' ? ex.correct : ex.spanish;

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
        <button onClick={onExit} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)' }}>
            <span>Ejercicio {idx + 1} de {total}</span>
            <span style={{ color: 'var(--violet)' }}>
              {phase === 'convert' ? '① Convertir' : '② Traducir'}
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: 'var(--violet)' }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 60, textAlign: 'right' }}>
          ✓ {score.convert + score.translate}
        </div>
      </div>

      {/* Card */}
      <div className={shake ? 'shake' : ''} style={{
        background: feedbackBg, border: `2px solid ${answered ? (isCorrect ? 'var(--emerald)' : 'var(--rose)') : 'var(--border)'}`,
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', transition: 'all 0.2s',
        boxShadow: answered ? 'none' : 'var(--shadow-sm)',
      }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 14 }}>
          {phase === 'convert' ? '🔄 Convierte la frase' : '🇪🇸 Traduce al español'}
        </div>

        {phase === 'convert' && (
          <div style={{
            background: 'var(--amber-light)', border: '2px solid var(--amber)',
            borderRadius: 'var(--r-xl)', padding: '14px 18px', marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <button onClick={() => speak(ex.source)} style={{
              background: 'var(--amber-dark)', border: 'none', borderRadius: 'var(--r-md)',
              width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              boxShadow: '0 3px 0 #92400E',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div>
              <div style={{ marginBottom: 6 }}><TenseBadge label={ex.fromLabel}/></div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#92400E', fontStyle: 'italic' }}>"{ex.source}"</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '10px 0 14px', paddingLeft: 4 }}>
          <div style={{ fontSize: 20, color: 'var(--faint)' }}>↓</div>
          {phase === 'convert' ? (
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--violet)' }}>
              Convierte a: <TenseBadge label={ex.toLabel}/>
            </div>
          ) : (
            <div>
              <TenseBadge label={ex.toLabel}/>
              <div style={{
                marginTop: 6, fontSize: 17, fontWeight: 700, color: 'var(--text)',
                background: 'var(--indigo-light)', border: '2px solid var(--indigo)',
                borderRadius: 'var(--r-lg)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <button onClick={() => speak(ex.correct)} style={{
                  background: 'var(--indigo)', border: 'none', borderRadius: 'var(--r-sm)',
                  width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </button>
                <span style={{ fontStyle: 'italic', color: 'var(--indigo-dark)' }}>"{ex.correct}"</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {opts.map((o, i) => {
            let extra = {};
            if (picked === o.text && !answered) extra = { borderColor: 'var(--indigo)', background: 'var(--indigo-light)', color: 'var(--indigo-dark)' };
            if (answered && o.correct) extra = { borderColor: 'var(--emerald)', background: 'var(--emerald-light)', color: 'var(--emerald-dark)' };
            if (answered && picked === o.text && !o.correct) extra = { borderColor: 'var(--rose)', background: 'var(--rose-light)', color: 'var(--rose-dark)' };
            return (
              <div key={i} onClick={() => { if (isAnswering) setPicked(o.text); }}
                style={{
                  border: '2px solid var(--border)', borderRadius: 'var(--r-md)',
                  padding: '13px 18px', cursor: isAnswering ? 'pointer' : 'default',
                  fontWeight: 700, fontSize: 15, background: 'white',
                  transition: 'all 0.12s', userSelect: 'none',
                  ...extra,
                }}>
                {o.text}
              </div>
            );
          })}
        </div>

        {isAnswering ? (
          <div style={{ marginTop: 20 }}>
            <button className={`btn btn-lg${picked ? ' btn-primary' : ''}`}
              disabled={!picked} onClick={handleCheck}
              style={picked ? { background: 'var(--violet)', boxShadow: '0 4px 0 var(--violet-dark)' } : {}}>
              COMPROBAR
            </button>
          </div>
        ) : (
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
              background: isCorrect ? 'var(--emerald)' : 'var(--rose)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {isCorrect
                ? <svg width="20" height="20" viewBox="0 0 24 24"><path d="M5 12l5 5 9-11" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
              }
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, fontSize: 16, color: feedbackCol }}>
                {isCorrect ? '¡Excelente!' : 'Respuesta correcta:'}
              </div>
              {!isCorrect && (
                <div style={{ fontSize: 14, color: feedbackCol, fontWeight: 700, marginTop: 2 }}>{correctText}</div>
              )}
            </div>
            <button className="btn" onClick={handleNext} style={{
              background: isCorrect ? 'var(--emerald)' : 'var(--rose)',
              color: 'white', boxShadow: `0 4px 0 ${isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)'}`,
              padding: '12px 28px',
            }}>
              {phase === 'convert' ? '→ TRADUCIR' : (idx + 1 >= total ? 'TERMINAR' : 'SIGUIENTE')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ConvertTenseScreen = ConvertTenseScreen;
