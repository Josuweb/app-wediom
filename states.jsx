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

window.STEP_LEVELS = STEP_LEVELS;
window.getStateForStep = getStateForStep;
window.stateIcon = stateIcon;
