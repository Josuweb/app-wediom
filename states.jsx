// states.jsx — "Road trip" por EE.UU.: cada lección abarca 2 estados (nivel 1 y
// nivel 2), siguiendo el ORDEN de la carpeta "Estados". 17 lecciones × 2 = 34.
// Los íconos (Item) están en assets/states/<slug>.png para los que existen;
// para el resto la tarjeta usa el emoji del paso.

const US_HAVE_ICON = new Set([
  'california', 'nevada', 'arizona', 'utah', 'idaho', 'wyoming', 'colorado',
  'new-mexico', 'hawaii', 'texas', 'oklahoma', 'kansas', 'nebraska',
  'north-dakota', 'minnesota', 'wisconsin', 'connecticut', 'maine', 'new-york',
]);
function stateIcon(slug) { return US_HAVE_ICON.has(slug) ? `assets/states/${slug}.png` : null; }

// [slug, Nombre, Ciudad] — nivel 1 y nivel 2 de cada lección, en orden.
const STEP_LEVELS = {
  'a1-1': [['california',   'California',     'Los Ángeles'],  ['nevada',       'Nevada',          'Las Vegas']],
  'a1-2': [['arizona',      'Arizona',        'Phoenix'],      ['utah',         'Utah',            'Salt Lake City']],
  'a1-3': [['oregon',       'Oregón',         'Portland'],     ['washington',   'Washington',      'Seattle']],
  'a1-4': [['idaho',        'Idaho',          'Boise'],        ['montana',      'Montana',         'Billings']],
  'a1-5': [['wyoming',      'Wyoming',        'Cheyenne'],     ['colorado',     'Colorado',        'Denver']],
  'a1-6': [['new-mexico',   'Nuevo México',   'Santa Fe'],     ['alaska',       'Alaska',          'Anchorage']],
  'a1-7': [['hawaii',       'Hawái',          'Honolulu'],     ['texas',        'Texas',           'Houston']],
  'a1-8': [['oklahoma',     'Oklahoma',       'Oklahoma City'],['kansas',       'Kansas',          'Wichita']],
  'a1-9': [['nebraska',     'Nebraska',       'Omaha'],        ['south-dakota', 'Dakota del Sur',  'Sioux Falls']],
  'a2-1': [['north-dakota', 'Dakota del Norte','Fargo'],       ['minnesota',    'Minnesota',       'Minneapolis']],
  'a2-2': [['wisconsin',    'Wisconsin',      'Milwaukee'],    ['iowa',         'Iowa',            'Des Moines']],
  'a2-3': [['illinois',     'Illinois',       'Chicago'],      ['missouri',     'Misuri',          'San Luis']],
  'a2-4': [['arkansas',     'Arkansas',       'Little Rock'],  ['louisiana',    'Luisiana',        'Nueva Orleans']],
  'a2-5': [['mississippi',  'Misisipi',       'Jackson'],      ['alabama',      'Alabama',         'Birmingham']],
  'a2-6': [['tennessee',    'Tennessee',      'Nashville'],    ['kentucky',     'Kentucky',        'Louisville']],
  'a2-7': [['indiana',      'Indiana',        'Indianápolis'], ['ohio',         'Ohio',            'Columbus']],
  'a2-8': [['michigan',     'Míchigan',       'Detroit'],      ['new-york',     'Nueva York',      'Nueva York']],
};

function levelObj(arr) {
  const [slug, state, city] = arr;
  return { slug, state, city, icon: stateIcon(slug) };
}

function getStateForStep(stepId) {
  const lv = STEP_LEVELS[stepId];
  if (!lv) return null;
  const l1 = levelObj(lv[0]);
  const l2 = levelObj(lv[1]);
  // Compat: campos de nivel 1 al nivel raíz + array `levels` con los 2.
  return { ...l1, levels: [l1, l2] };
}

// Reseña / dato curioso corto por estado (se muestra al hacer hover en la
// foto o el nombre dentro de la card). num = número del estado en el viaje (1-34).
const STATE_REVIEWS = {
  california:     { num: 1,  text: 'El "Estado Dorado": cuna de Hollywood, Silicon Valley y las secuoyas más altas del planeta. Es el estado más poblado de EE.UU.' },
  nevada:         { num: 2,  text: 'Hogar de Las Vegas, capital mundial del entretenimiento y los casinos. Casi todo su territorio es desierto.' },
  arizona:        { num: 3,  text: 'Aquí está el Gran Cañón, una de las maravillas naturales del mundo. Famoso por su clima desértico y sus cactus saguaro.' },
  utah:           { num: 4,  text: 'Tierra de parques nacionales espectaculares y el Gran Lago Salado. Salt Lake City fue sede de los Juegos Olímpicos de Invierno 2002.' },
  oregon:         { num: 5,  text: 'Bosques verdes y costa del Pacífico. Aquí está Crater Lake, el lago más profundo de EE.UU.' },
  washington:     { num: 6,  text: 'Cuna de Microsoft y Amazon. Seattle vio nacer a Starbucks; famoso por la lluvia y el monte Rainier.' },
  idaho:          { num: 7,  text: 'Famoso por sus papas: produce cerca de un tercio de las papas de todo EE.UU. Montañas y ríos por todos lados.' },
  montana:        { num: 8,  text: 'Apodado "Big Sky Country" por sus cielos inmensos. Ranchos, Montañas Rocosas y el parque Glacier.' },
  wyoming:        { num: 9,  text: 'Aquí está Yellowstone, el primer parque nacional del mundo. Es el estado menos poblado de EE.UU.' },
  colorado:       { num: 10, text: 'Dominado por las Montañas Rocosas. Denver, su capital, está a exactamente una milla de altura (la "Mile High City").' },
  'new-mexico':   { num: 11, text: 'Tierra de cultura nativa e hispana. Famoso por sus desiertos, el chile y la artística Santa Fe.' },
  alaska:         { num: 12, text: 'El estado más grande de EE.UU. y el menos densamente poblado. Auroras boreales, glaciares y osos.' },
  hawaii:         { num: 13, text: 'El único estado formado por islas, en medio del Pacífico. Volcanes activos y playas paradisíacas.' },
  texas:          { num: 14, text: 'El segundo estado más grande. Petróleo, vaqueros, barbacoa y el lema "todo es más grande en Texas".' },
  oklahoma:       { num: 15, text: 'Tierra de tornados y rica cultura nativa americana. Lo cruza la histórica Ruta 66.' },
  kansas:         { num: 16, text: 'El corazón agrícola de EE.UU., "el granero del país" por su trigo. Inspiró la historia de "El Mago de Oz".' },
  nebraska:       { num: 17, text: 'Grandes llanuras y maíz hasta el horizonte. Tierra de pioneros y de la histórica Oregon Trail.' },
  'south-dakota': { num: 18, text: 'Aquí está el Monte Rushmore, con los rostros de cuatro presidentes tallados en la roca.' },
  'north-dakota': { num: 19, text: 'Llanuras infinitas y uno de los estados menos visitados. Rico en petróleo y agricultura.' },
  minnesota:      { num: 20, text: 'La "tierra de los 10.000 lagos". Inviernos muy fríos y origen de las cataratas de Minneapolis.' },
  wisconsin:      { num: 21, text: 'Famoso por su queso (lo llaman el país de los lácteos) y por los Green Bay Packers.' },
  iowa:           { num: 22, text: 'El mayor productor de maíz de EE.UU. Sus campos de cultivo definen el paisaje del Medio Oeste.' },
  illinois:       { num: 23, text: 'Hogar de Chicago, cuna del rascacielos, a orillas del lago Míchigan.' },
  missouri:       { num: 24, text: 'La "puerta al Oeste", con el famoso Arco de San Luis. Cruce de los ríos Misuri y Misisipi.' },
  arkansas:       { num: 25, text: 'Montañas Ozark y aguas termales. El único lugar de EE.UU. donde puedes buscar diamantes tú mismo.' },
  louisiana:      { num: 26, text: 'Cuna del jazz y del carnaval Mardi Gras en Nueva Orleans. Mezcla francesa, criolla y cajún.' },
  mississippi:    { num: 27, text: 'Cuna del blues, a orillas del gran río Misisipi. Profunda historia musical y sureña.' },
  alabama:        { num: 28, text: 'Clave en el movimiento por los derechos civiles. En Huntsville la NASA diseñó parte del programa Apolo.' },
  tennessee:      { num: 29, text: 'Capital de la música country (Nashville) y cuna del rock and roll y de Elvis (Memphis).' },
  kentucky:       { num: 30, text: 'Famoso por el bourbon, los caballos de carreras y el legendario Derby de Kentucky.' },
  indiana:        { num: 31, text: 'Hogar de las 500 Millas de Indianápolis, una de las carreras de autos más famosas del mundo.' },
  ohio:           { num: 32, text: 'Cuna de la aviación y del espacio: aquí nacieron los hermanos Wright y Neil Armstrong.' },
  michigan:       { num: 33, text: 'Detroit, la capital mundial del automóvil. Rodeado por los Grandes Lagos.' },
  'new-york':     { num: 34, text: 'La ciudad que nunca duerme: Times Square, la Estatua de la Libertad y Wall Street.' },
};

window.STEP_LEVELS = STEP_LEVELS;
window.getStateForStep = getStateForStep;
window.stateIcon = stateIcon;
window.STATE_REVIEWS = STATE_REVIEWS;
