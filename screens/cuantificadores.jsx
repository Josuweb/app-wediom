// Sección de Cuantificadores — 7 cuantificadores comunes en inglés.
// Cada uno incluye significado, uso, ejemplos (afirmativo / negativo /
// interrogativo) con traducción, y una práctica al estilo de modales.

const CUANT = [
  {
    id: 'some',
    word: 'Some',
    meaning: 'algunos · algo · un poco de',
    icon: '🟢',
    color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', solid: '#10B981' },
    use: 'Se usa en oraciones AFIRMATIVAS con sustantivos contables plurales e incontables. También en PREGUNTAS pero SOLO cuando ofrecemos o pedimos algo cortésmente ("Would you like some…?", "Can I have some…?"). En negativas NO se usa — ahí va "any".',
    structure: {
      aff: { en: 'I have some friends in London.', es: 'Tengo algunos amigos en Londres.' },
      neg: { note: 'En negativas no se usa "some". Se usa "any": "I don\'t have any friends." → Ver tarjeta de Any.' },
      q:   { en: 'Would you like some coffee?', es: '¿Te gustaría algo de café?', meaning: 'solo para ofrecer / pedir algo' },
    },
  },
  {
    id: 'any',
    word: 'Any',
    meaning: 'cualquier (afirm.) · ningún (neg.) · algún (preg.)',
    icon: '🟡',
    color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#F59E0B' },
    use: '"Any" es especial: se usa en las TRES FORMAS pero su significado cambia según la forma. Va con contables plurales e incontables. ✓ En AFIRMATIVA = "cualquier / cualquiera". ✗ En NEGATIVA = "ningún / ninguna". ❓ En PREGUNTA = "algún / algunos".',
    structure: {
      aff: { en: 'You can choose any book you want.', es: 'Puedes elegir cualquier libro que quieras.', meaning: 'cualquier / cualquiera' },
      neg: { en: "There aren't any cookies left.",    es: 'No queda ninguna galleta.',                  meaning: 'ningún / ninguna' },
      q:   { en: 'Do you have any questions?',        es: '¿Tienes alguna pregunta?',                   meaning: 'algún / algunos' },
    },
  },
  {
    id: 'much-many',
    word: 'Much / Many',
    meaning: 'mucho · muchos (much = incontables, many = contables)',
    icon: '🔵',
    color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' },
    use: '"Many" va con sustantivos CONTABLES en plural (many books, many people). "Much" va con INCONTABLES (much water, much money). Se usan principalmente en NEGATIVAS y PREGUNTAS — en afirmativas se prefiere "a lot of".',
    structure: {
      aff: { note: 'En afirmativas se prefiere "a lot of" / "lots of". Decir "I have many friends" o "I have much money" suena raro en inglés cotidiano. → Ver tarjeta de Lots of / A lot of.' },
      neg: { en: "I don't have much time today.",  es: 'No tengo mucho tiempo hoy.' },
      q:   { en: 'How many siblings do you have?', es: '¿Cuántos hermanos tienes?' },
    },
  },
  {
    id: 'lots-of',
    word: 'Lots of / A lot of',
    meaning: 'mucho · muchos (contables e incontables)',
    icon: '🔴',
    color: { bg: '#FFE4E6', text: '#9F1239', border: '#FCA5A5', solid: '#E11D48' },
    use: 'Su uso PRINCIPAL es en AFIRMATIVAS. Funcionan con cualquier sustantivo (contable o incontable). "Lots of" es más informal; "a lot of" es neutral. Para negativas y preguntas se prefiere "much" / "many".',
    structure: {
      aff: { en: 'I have a lot of work today.', es: 'Tengo mucho trabajo hoy.' },
      neg: { note: 'En negativas se prefiere "much" (incontables) o "many" (contables): "I don\'t have much time" / "I don\'t have many friends". → Ver tarjeta de Much / Many.' },
      q:   { note: 'En preguntas se prefiere "much" / "many": "How much does it cost?" / "How many friends do you have?". → Ver tarjeta de Much / Many.' },
    },
  },
  {
    id: 'no-none',
    word: 'No / None',
    meaning: 'ningún · ninguno · nada de',
    icon: '⚫',
    color: { bg: '#F3F4F6', text: '#1F2937', border: '#9CA3AF', solid: '#4B5563' },
    use: '"No" va SIEMPRE antes de un sustantivo (no money, no friends). "None" se usa SOLO, sin sustantivo después (How many? — None). Ambos tienen SIGNIFICADO NEGATIVO aunque la oración sea gramaticalmente afirmativa. Equivalen a "not any" pero permiten frases más cortas.',
    structure: {
      aff: { note: '"No / None" no se usan para afirmar cantidad. Su significado es siempre negativo (= "nada de" / "ninguno"). Para afirmar cantidad usa "some" o "a lot of". → Ver tarjetas de Some o Lots of.' },
      neg: { en: 'I have no money in my pocket.', es: 'No tengo nada de dinero en el bolsillo.' },
      q:   { note: '"None" solo aparece como RESPUESTA corta a una pregunta sobre cantidad: "How many books are left? — None." Para construir preguntas, usa "any": "Do you have any?". → Ver tarjeta de Any.' },
    },
  },
  {
    id: 'little',
    word: 'Little / A little',
    meaning: 'poco · un poco (incontables)',
    icon: '⚪',
    color: { bg: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC', solid: '#0284C7' },
    use: 'Ambos van con INCONTABLES y SIEMPRE en oraciones gramaticalmente AFIRMATIVAS o de PREGUNTA. "A little" = un poco (POSITIVO, sí hay algo). "Little" SIN "a" = poco (sentido negativo, casi no hay — pero la oración sigue siendo afirmativa).',
    structure: {
      aff: { en: 'I have a little time for you now.', es: 'Tengo un poco de tiempo para ti ahora.' },
      neg: { note: 'No se usan con don\'t / doesn\'t. Para NEGAR cantidad de incontable usa "much": "I don\'t have much time". Si quieres expresar "casi nada", usa "little" SIN "a" en afirmativa: "There is little hope" = "Queda poca esperanza". → Ver tarjeta de Much / Many.' },
      q:   { en: 'Is there a little milk in the fridge?', es: '¿Hay un poco de leche en el refri?' },
    },
  },
  {
    id: 'few',
    word: 'Few / A few',
    meaning: 'pocos · unos pocos (contables)',
    icon: '🟠',
    color: { bg: '#FFEDD5', text: '#9A3412', border: '#FED7AA', solid: '#EA580C' },
    use: 'Ambos van con CONTABLES en plural y SIEMPRE en oraciones gramaticalmente AFIRMATIVAS o de PREGUNTA. "A few" = unos pocos (POSITIVO, suficiente). "Few" SIN "a" = pocos (sentido negativo, casi ninguno — pero la oración sigue siendo afirmativa).',
    structure: {
      aff: { en: 'I have a few good friends in the city.', es: 'Tengo unos pocos buenos amigos en la ciudad.' },
      neg: { note: 'No se usan con don\'t / doesn\'t. Para NEGAR cantidad de contable usa "many": "I don\'t have many friends". Si quieres expresar "casi ninguno", usa "few" SIN "a" en afirmativa: "Few people came" = "Pocas personas vinieron". → Ver tarjeta de Much / Many.' },
      q:   { en: 'Are there a few seats available?', es: '¿Hay unos pocos asientos disponibles?' },
    },
  },
];

// ── Pool de ejercicios para la práctica ─────────────────────────────────────
const CUANT_DRILLS = [
  // SOME
  { q: 'some', form: 'aff', en: ['I','have','some','friends'],                       es: 'Tengo algunos amigos.' },
  { q: 'some', form: 'aff', en: ['There','are','some','apples','on','the','table'],  es: 'Hay algunas manzanas sobre la mesa.' },
  { q: 'some', form: 'q',   en: ['Would','you','like','some','water'],               es: '¿Te gustaría algo de agua?' },
  { q: 'some', form: 'aff', en: ['She','bought','some','flowers'],                   es: 'Ella compró algunas flores.' },

  // ANY
  { q: 'any', form: 'neg', en: ['There','are','not','any','eggs'],                   es: 'No hay huevos.' },
  { q: 'any', form: 'q',   en: ['Do','you','have','any','sugar'],                    es: '¿Tienes algo de azúcar?' },
  { q: 'any', form: 'neg', en: ['I','do','not','need','any','help'],                 es: 'No necesito ninguna ayuda.' },
  { q: 'any', form: 'q',   en: ['Are','there','any','questions'],                    es: '¿Hay alguna pregunta?' },

  // MUCH / MANY
  { q: 'much-many', form: 'q',   en: ['How','many','books','do','you','read'],       es: '¿Cuántos libros lees?' },
  { q: 'much-many', form: 'neg', en: ['I','do','not','have','many','friends'],       es: 'No tengo muchos amigos.' },
  { q: 'much-many', form: 'aff', en: ['Many','students','passed','the','exam'],      es: 'Muchos estudiantes pasaron el examen.' },
  { q: 'much-many', form: 'q',   en: ['How','many','people','live','here'],          es: '¿Cuánta gente vive aquí?' },
  { q: 'much-many', form: 'neg', en: ['I','do','not','have','much','time'],          es: 'No tengo mucho tiempo.' },
  { q: 'much-many', form: 'q',   en: ['How','much','does','it','cost'],              es: '¿Cuánto cuesta?' },
  { q: 'much-many', form: 'neg', en: ['There','is','not','much','milk'],             es: 'No hay mucha leche.' },
  { q: 'much-many', form: 'q',   en: ['How','much','water','do','you','drink'],      es: '¿Cuánta agua bebes?' },

  // LOTS OF / A LOT OF
  { q: 'lots-of', form: 'aff', en: ['I','have','a','lot','of','homework'],           es: 'Tengo mucha tarea.' },
  { q: 'lots-of', form: 'aff', en: ['She','has','a','lot','of','energy'],            es: 'Ella tiene mucha energía.' },
  { q: 'lots-of', form: 'q',   en: ['Do','you','have','a','lot','of','books'],       es: '¿Tienes muchos libros?' },
  { q: 'lots-of', form: 'aff', en: ['We','watched','lots','of','movies'],            es: 'Vimos muchas películas.' },

  // NO / NONE
  { q: 'no-none', form: 'aff', en: ['I','have','no','money'],                        es: 'No tengo nada de dinero.' },
  { q: 'no-none', form: 'aff', en: ['She','has','no','time','today'],                es: 'Ella no tiene tiempo hoy.' },
  { q: 'no-none', form: 'aff', en: ['None','of','them','are','here'],                es: 'Ninguno de ellos está aquí.' },
  { q: 'no-none', form: 'aff', en: ['There','are','no','tickets','left'],            es: 'No quedan boletos.' },

  // LITTLE / A LITTLE
  { q: 'little', form: 'aff', en: ['I','have','a','little','money'],                 es: 'Tengo un poco de dinero.' },
  { q: 'little', form: 'aff', en: ['She','speaks','a','little','English'],           es: 'Ella habla un poco de inglés.' },
  { q: 'little', form: 'aff', en: ['There','is','little','hope'],                    es: 'Queda poca esperanza.' },
  { q: 'little', form: 'q',   en: ['Is','there','a','little','milk'],                es: '¿Hay un poco de leche?' },

  // FEW / A FEW
  { q: 'few', form: 'aff', en: ['I','have','a','few','friends'],                     es: 'Tengo unos pocos amigos.' },
  { q: 'few', form: 'aff', en: ['She','bought','a','few','apples'],                  es: 'Ella compró unas pocas manzanas.' },
  { q: 'few', form: 'aff', en: ['Few','people','know','the','truth'],                es: 'Pocas personas conocen la verdad.' },
  { q: 'few', form: 'q',   en: ['Are','there','a','few','seats','left'],             es: '¿Quedan unos pocos asientos?' },
];

const CUANT_DISTRACT_POOL = [
  'some','any','many','much','a','few','little','lot','of','lots',
  'is','are','was','were','do','does','did','have','has',
  'not','no','the','a','an','this','that',
  'I','you','he','she','it','we','they','my','your',
  'water','milk','time','money','friends','books','apples','people',
  'how','what','where','when',
];

// Metadatos para la tabla comparativa (tipo de sustantivo + formas válidas + ejemplo corto)
const CUANT_META = {
  some:        { type: 'Contables + incontables', typeShort: 'Cont. + incont.', forms: ['aff', 'q'],        quick: 'I have some friends.' },
  any:         { type: 'Contables + incontables', typeShort: 'Cont. + incont.', forms: ['aff', 'neg', 'q'], quick: 'Significado distinto en cada forma' },
  'much-many': { type: 'Many → contables · Much → incontables', typeShort: 'Many=cont · Much=incont', forms: ['neg', 'q'], quick: "I don't have much time." },
  'lots-of':   { type: 'Contables + incontables', typeShort: 'Cont. + incont.', forms: ['aff'],             quick: 'I have a lot of work.' },
  'no-none':   { type: 'Contables + incontables', typeShort: 'Cont. + incont.', forms: ['neg'],             quick: 'I have no money.' },
  little:      { type: 'Incontables',             typeShort: 'Incontables',     forms: ['aff', 'q'],        quick: 'I have a little time.' },
  few:         { type: 'Contables (plural)',      typeShort: 'Contables (pl.)', forms: ['aff', 'q'],        quick: 'I have a few friends.' },
};
const FORM_BADGES = {
  aff: { txt: 'Afirmativa', short: 'Afirm.', bg: '#0D9488', icon: '✓' },
  neg: { txt: 'Negativa',   short: 'Neg.',   bg: '#E11D48', icon: '✗' },
  q:   { txt: 'Pregunta',   short: 'Preg.',  bg: '#0EA5E9', icon: '❓' },
};

function useCqNarrow(maxPx) {
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

function CuantComparisonTable({ activeId, onPick }) {
  const narrow = useCqNarrow(1100);

  if (narrow) {
    // Vista compacta — cada cuantificador como card apilada
    return (
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          📊 Resumen comparativo — Toca para ver detalle
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {CUANT.map(c => {
            const meta = CUANT_META[c.id];
            const sel = c.id === activeId;
            return (
              <button key={c.id} onClick={() => onPick(c.id)} style={{
                cursor: 'pointer', fontFamily: 'var(--font)', textAlign: 'left',
                background: sel ? c.color.bg : 'white',
                border: `2px solid ${sel ? c.color.solid : c.color.border}`,
                borderRadius: 'var(--r-lg)', padding: '12px 14px',
                boxShadow: sel ? `0 3px 0 ${c.color.text}33` : 'var(--shadow-sm)',
                display: 'grid', gap: 6,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 18 }}>{c.icon}</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: c.color.text }}>{c.word}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>· {c.meaning}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                  <span style={{
                    fontSize: 10.5, fontWeight: 800, color: c.color.text,
                    background: 'white', border: `1.5px solid ${c.color.border}`,
                    borderRadius: 999, padding: '2px 10px',
                  }}>📦 {meta.type}</span>
                  {meta.forms.map(f => (
                    <span key={f} style={{
                      fontSize: 10.5, fontWeight: 800, color: 'white',
                      background: FORM_BADGES[f].bg,
                      borderRadius: 999, padding: '2px 10px',
                    }}>{FORM_BADGES[f].icon} {FORM_BADGES[f].txt}</span>
                  ))}
                </div>
                <div style={{ fontSize: 12.5, fontStyle: 'italic', color: c.color.text, fontWeight: 700 }}>
                  "{meta.quick}"
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Vista tabla — 5 columnas
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        📊 Resumen comparativo — Toca una fila para ver el detalle
      </div>
      <div style={{
        background: 'white', border: '2px solid var(--border)',
        borderRadius: 'var(--r-xl)', overflowX: 'auto',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <table style={{
          width: '100%', minWidth: 920,
          borderCollapse: 'collapse',
          fontFamily: 'var(--font)',
          tableLayout: 'fixed',
        }}>
          <colgroup>
            <col style={{ width: 180 }}/>
            <col style={{ width: '20%' }}/>
            <col style={{ width: '20%' }}/>
            <col style={{ width: 220 }}/>
            <col/>
          </colgroup>
          <thead>
            <tr style={{ background: 'var(--bg)', borderBottom: '2px solid var(--border)' }}>
              {['Cuantificador','Significado','Tipo de sustantivo','Se usa en','Ejemplo'].map(h => (
                <th key={h} style={{
                  textAlign: 'left', padding: '10px 12px',
                  fontSize: 10, fontWeight: 900, color: 'var(--faint)',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUANT.map((c, i) => {
              const meta = CUANT_META[c.id];
              const sel  = c.id === activeId;
              const rowBg = sel ? c.color.bg : (i % 2 === 0 ? 'white' : '#FAFBFC');
              const cell = { padding: '10px 12px', verticalAlign: 'middle' };
              return (
                <tr key={c.id}
                  onClick={() => onPick(c.id)}
                  onMouseEnter={e => { if (!sel) e.currentTarget.style.background = c.color.bg + '99'; }}
                  onMouseLeave={e => { if (!sel) e.currentTarget.style.background = rowBg; }}
                  style={{
                    cursor: 'pointer',
                    background: rowBg,
                    borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                    transition: 'background 0.12s',
                  }}
                >
                  {/* Word */}
                  <td style={{
                    ...cell, borderLeft: `4px solid ${sel ? c.color.solid : 'transparent'}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>{c.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 900, color: c.color.text, lineHeight: 1.2 }}>{c.word}</span>
                    </div>
                  </td>
                  {/* Meaning */}
                  <td style={cell}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
                      {c.meaning}
                    </div>
                  </td>
                  {/* Tipo */}
                  <td style={cell}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--muted)', lineHeight: 1.3 }}>
                      📦 {meta.typeShort}
                    </div>
                  </td>
                  {/* Forms — grid de 3 columnas fijas */}
                  <td style={cell}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
                      {['aff','neg','q'].map(f => {
                        if (!meta.forms.includes(f)) return <div key={f}/>;
                        return (
                          <span key={f} style={{
                            fontSize: 10.5, fontWeight: 800, color: 'white',
                            background: FORM_BADGES[f].bg,
                            borderRadius: 999, padding: '2px 6px',
                            whiteSpace: 'nowrap', textAlign: 'center',
                            overflow: 'hidden', textOverflow: 'ellipsis',
                          }}>{FORM_BADGES[f].icon} {FORM_BADGES[f].short}</span>
                        );
                      })}
                    </div>
                  </td>
                  {/* Example */}
                  <td style={cell}>
                    <div style={{
                      fontSize: 11.5, fontStyle: 'italic', fontWeight: 700, color: c.color.text,
                      background: 'white', border: `1px dashed ${c.color.border}`,
                      borderRadius: 'var(--r-md)', padding: '5px 9px',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      "{meta.quick}"
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function cqSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function cqShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function cqPunct(form) { return form === 'q' ? '?' : '.'; }

function cqBuildTiles(drill) {
  const requiredCount = {};
  drill.en.forEach(w => { requiredCount[w] = (requiredCount[w] || 0) + 1; });
  const usedLower = new Set(Object.keys(requiredCount).map(w => w.toLowerCase()));
  const targetTotal = Math.max(16, drill.en.length * 2 + 4);
  const needed = Math.max(0, targetTotal - drill.en.length);
  const pool = CUANT_DISTRACT_POOL.filter(w => !usedLower.has(w.toLowerCase()));
  const distractors = cqShuffle(pool).slice(0, needed);
  return cqShuffle([...drill.en, ...distractors]).map((word, id) => ({ id, word }));
}

// ── Pantalla principal ──────────────────────────────────────────────────────
function CuantificadoresScreen() {
  const [view, setView]         = React.useState('theory'); // 'theory' | 'practice'
  const [practiceFilter, setPF] = React.useState(null);
  const [activeId, setActiveId] = React.useState('some');
  const detailRef               = React.useRef(null);
  const completed = window.isSectionCompleted ? window.isSectionCompleted('cuantificadores') : false;
  const [marked, setMarked] = React.useState(completed);
  function markDone() {
    if (window.markSectionCompleted) window.markSectionCompleted('cuantificadores');
    setMarked(true);
  }

  if (view === 'practice') {
    return <CuantPracticeScreen filter={practiceFilter} onExit={() => setView('theory')}/>;
  }

  const c = CUANT.find(x => x.id === activeId);

  function startPractice(filter) { setPF(filter); setView('practice'); }
  function pickCuant(id) {
    setActiveId(id);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #6366F1, #4338CA)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 20, boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 38 }}>📊</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Cuantificadores</div>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600, lineHeight: 1.5 }}>
              Palabras que indican <strong>cantidad</strong>: cuántas cosas, cuánto de algo.
              Algunas van con sustantivos contables, otras con incontables, y otras con ambos.
            </div>
          </div>
        </div>
      </div>

      <CuantComparisonTable activeId={activeId} onPick={pickCuant}/>

      {/* Cards grid resumen */}
      <div style={{
        display: 'grid', gap: 12,
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        marginBottom: 24,
      }}>
        {CUANT.map(it => {
          const sel = it.id === activeId;
          return (
            <button key={it.id} onClick={() => pickCuant(it.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font)', textAlign: 'left',
              background: sel ? it.color.bg : 'white',
              border: `2px solid ${sel ? it.color.solid : it.color.border}`,
              borderRadius: 'var(--r-xl)', padding: '14px 16px',
              boxShadow: sel ? `0 4px 0 ${it.color.text}33` : 'var(--shadow-sm)',
              display: 'flex', flexDirection: 'column', gap: 6,
              transition: 'all 0.12s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>{it.icon}</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: it.color.text }}>{it.word}</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 700, lineHeight: 1.4 }}>
                {it.meaning}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detalle del cuantificador activo */}
      <div ref={detailRef} style={{
        background: 'white', border: `2px solid ${c.color.border}`,
        borderRadius: 'var(--r-2xl)', padding: '28px 30px', boxShadow: 'var(--shadow-sm)',
      }}>
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18, paddingBottom: 18, borderBottom: `1.5px dashed ${c.color.border}` }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, fontSize: 28,
            background: c.color.bg, border: `2px solid ${c.color.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {c.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 30, fontWeight: 900, color: c.color.text, lineHeight: 1, letterSpacing: '-0.5px' }}>
              {c.word}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: c.color.text, opacity: 0.75, marginTop: 4 }}>
              {c.meaning}
            </div>
          </div>
        </div>

        {/* Significado y uso */}
        <CqSection title="📖 Significado y uso" color={c.color}>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--text)', fontWeight: 600 }}>
            {c.use}
          </p>
        </CqSection>

        {/* Ejemplos */}
        <CqSection title="📝 Ejemplos en las 3 formas" color={c.color}>
          <div style={{ display: 'grid', gap: 10 }}>
            <CqExampleRow type="Afirmativa"    data={c.structure.aff} color={c.color} accent="#10B981" icon="✓"/>
            <CqExampleRow type="Negativa"      data={c.structure.neg} color={c.color} accent="#E11D48" icon="✗"/>
            <CqExampleRow type="Interrogativa" data={c.structure.q}   color={c.color} accent="#F59E0B" icon="❓"/>
          </div>
        </CqSection>

      </div>

    </div>
  );
}

function CqSection({ title, color, children, last }) {
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

function CqExampleRow({ type, data, color, accent, icon }) {
  const isNote = !!data.note;
  return (
    <div
      onMouseEnter={isNote ? (e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.filter = 'none';
      } : undefined}
      onMouseLeave={isNote ? (e) => {
        e.currentTarget.style.opacity = '0.55';
        e.currentTarget.style.filter = 'blur(0.4px) grayscale(0.4)';
      } : undefined}
      style={{
        background: isNote ? '#F5F5F5' : color.bg,
        border: isNote ? '1.5px dashed #D1D5DB' : `1.5px solid ${color.border}`,
        borderLeft: `4px solid ${isNote ? '#D1D5DB' : accent}`,
        borderRadius: 'var(--r-lg)', padding: '12px 16px',
        opacity: isNote ? 0.55 : 1,
        filter: isNote ? 'blur(0.4px) grayscale(0.4)' : 'none',
        transition: 'opacity 0.2s, filter 0.2s',
        cursor: isNote ? 'help' : 'default',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
        <span style={{
          background: isNote ? '#6B7280' : accent, color: 'white',
          borderRadius: 6, padding: '2px 9px',
          fontSize: 11, fontWeight: 900, letterSpacing: '0.04em',
        }}>
          {isNote ? '🚫' : icon} {type}
        </span>
        {isNote && (
          <span style={{
            fontSize: 10.5, fontWeight: 800, color: '#6B7280',
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            no aplica
          </span>
        )}
        {!isNote && data.meaning && (
          <span style={{
            fontSize: 11, fontWeight: 800, color: color.text,
            background: 'white', border: `1.5px solid ${color.border}`,
            borderRadius: 999, padding: '2px 10px',
          }}>
            🇪🇸 {data.meaning}
          </span>
        )}
      </div>
      {isNote ? (
        <div style={{ fontSize: 13.5, color: '#374151', fontWeight: 600, lineHeight: 1.55 }}>
          💡 {data.note}
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <button onClick={() => cqSpeak(data.en)} title="Escuchar" style={{
              background: color.solid, border: 'none', borderRadius: 6, width: 24, height: 24,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <span style={{ fontSize: 15.5, fontWeight: 800, color: color.text }}>{data.en}</span>
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 32 }}>
            → {data.es}
          </div>
        </>
      )}
    </div>
  );
}

// ── Pantalla de práctica ────────────────────────────────────────────────────
function CuantPracticeScreen({ filter, onExit }) {
  const pool = React.useMemo(() => {
    const filtered = filter ? CUANT_DRILLS.filter(d => d.q === filter) : CUANT_DRILLS;
    return cqShuffle(filtered).map(d => ({ ...d, tiles: cqBuildTiles(d) }));
  }, [filter]);

  const [idx, setIdx]       = React.useState(0);
  const [placed, setPlaced] = React.useState([]);
  const [checked, setChecked] = React.useState(null);
  const [score, setScore]   = React.useState(0);
  const [shake, setShake]   = React.useState(false);
  const [dragIdx, setDragIdx]         = React.useState(null);
  const [dragOverIdx, setDragOverIdx] = React.useState(null);
  const justDragged                   = React.useRef(false);

  const total   = pool.length;
  const isDone  = idx >= total;
  const ex      = pool[idx];
  const cq      = ex ? CUANT.find(c => c.id === ex.q) : null;
  const progress = total ? (idx + (checked !== null ? 1 : 0)) / total : 0;

  function placeTile(id)  { if (checked === null) setPlaced(p => [...p, id]); }
  function removeTile(id) { if (checked === null) setPlaced(p => p.filter(x => x !== id)); }
  function clearAnswer()  { if (checked === null) setPlaced([]); }

  function cqMoveTile(from, to) {
    if (from === null || from === to) return;
    setPlaced(p => {
      const a = [...p];
      const [it] = a.splice(from, 1);
      const insertAt = from < to ? to - 1 : to;
      a.splice(insertAt, 0, it);
      return a;
    });
  }
  function cqOnDragStart(e, i) {
    if (checked !== null) return;
    setDragIdx(i);
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(i)); } catch (_) {}
  }
  function cqOnDragOver(e, i) { if (dragIdx === null) return; e.preventDefault(); setDragOverIdx(i); }
  function cqOnDrop(e, i) {
    if (dragIdx === null) return;
    e.preventDefault(); e.stopPropagation();
    cqMoveTile(dragIdx, i);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }
  function cqOnDragEnd() {
    setDragIdx(null); setDragOverIdx(null);
    setTimeout(() => { justDragged.current = false; }, 0);
  }
  function cqOnDropEnd(e) {
    if (dragIdx === null) return;
    e.preventDefault();
    cqMoveTile(dragIdx, placed.length);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }

  function handleCheck() {
    const ans = placed.map(id => ex.tiles.find(t => t.id === id).word);
    const ok = ans.length === ex.en.length && ans.every((w, i) => w === ex.en[i]);
    setChecked(ok);
    if (ok) setScore(s => s + 1);
    else { setShake(true); setTimeout(() => setShake(false), 400); }
  }
  function handleNext() { setIdx(i => i + 1); setPlaced([]); setChecked(null); }
  function handleRetry() { setIdx(0); setPlaced([]); setChecked(null); setScore(0); }

  if (isDone) {
    const pct = Math.round((score / total) * 100);
    const result =
      pct >= 90 ? { label: '¡Excelente!',         emoji: '🏆', accent: 'var(--emerald)',     dark: 'var(--emerald-dark)' } :
      pct >= 70 ? { label: '¡Muy bien!',          emoji: '💪', accent: 'var(--indigo)',      dark: 'var(--indigo-dark)' } :
      pct >= 50 ? { label: 'Sigue practicando',   emoji: '📘', accent: 'var(--amber)',       dark: 'var(--amber-dark)' } :
                  { label: 'Necesitas más práctica', emoji: '📚', accent: 'var(--rose)',     dark: 'var(--rose-dark)' };
    return (
      <div style={{ maxWidth: 720 }}>
        <div style={{
          background: `linear-gradient(135deg, ${result.accent}, ${result.dark})`,
          borderRadius: 'var(--r-2xl)', padding: '32px', color: 'white', textAlign: 'center',
          marginBottom: 18, boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}>
          <div style={{ fontSize: 60, marginBottom: 6 }}>{result.emoji}</div>
          <div style={{ fontSize: 46, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>
            {score * 2}<span style={{ fontSize: 22, opacity: 0.85 }}>/{total * 2}</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 4 }}>{result.label}</div>
          <div style={{ fontSize: 13.5, opacity: 0.9 }}>{score} de {total} correctas · {pct}%</div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" style={{ flex: 1, minWidth: 180 }} onClick={onExit}>
            ← Volver a teoría
          </button>
          <button className="btn btn-primary" style={{ flex: 2, minWidth: 220 }} onClick={handleRetry}>
            ↻ REPETIR PRÁCTICA
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = checked === true;
  const punct = cqPunct(ex.form);
  const correctSentence = ex.en.join(' ') + punct;
  const bank   = ex.tiles.filter(t => !placed.includes(t.id));
  const answer = placed.map(id => ex.tiles.find(t => t.id === id));
  const wordCount = ex.en.length;
  const FORM_LABEL = { aff: { txt: 'Afirmativa', bg: '#0D9488', dark: '#115E59', icon: '✓' },
                       neg: { txt: 'Negativa',   bg: '#E11D48', dark: '#9F1239', icon: '✗' },
                       q:   { txt: 'Pregunta',   bg: '#0EA5E9', dark: '#0369A1', icon: '❓' } }[ex.form];

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={onExit} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)', flexWrap: 'wrap', gap: 6 }}>
            <span>📊 Cuantificadores  ·  Ejercicio {idx + 1} / {total}</span>
            <span style={{ color: cq.color.text }}>Score: {score * 2}/{total * 2}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: cq.color.solid }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* Prompt */}
      <div style={{
        background: cq.color.bg, border: `2px solid ${cq.color.border}`,
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: cq.color.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          🇪🇸 Traduce al inglés
        </div>
        <div style={{
          fontSize: 17, fontWeight: 800, color: cq.color.text, lineHeight: 1.45,
          marginBottom: 12, padding: '10px 14px',
          background: 'rgba(255,255,255,0.75)', borderRadius: 'var(--r-md)',
          border: `1px solid ${cq.color.border}`,
        }}>
          {ex.es}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <div style={{
            background: '#059669', color: 'white',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: '0 2px 0 rgba(0,0,0,0.15)', whiteSpace: 'nowrap',
          }}>
            🔢 {wordCount} palabras
          </div>
          <div style={{
            background: FORM_LABEL.bg, color: 'white',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: `0 2px 0 ${FORM_LABEL.dark}`, whiteSpace: 'nowrap',
          }}>
            {FORM_LABEL.icon} {FORM_LABEL.txt}
          </div>
          <div style={{
            background: cq.color.solid, color: 'white',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: `0 2px 0 ${cq.color.text}`, whiteSpace: 'nowrap',
          }}>
            {cq.icon} {cq.word}
          </div>
        </div>
      </div>

      {/* Board */}
      <div className={shake ? 'shake' : ''} style={{
        background: 'white',
        border: `2px solid ${checked === null ? 'var(--border)' : isCorrect ? 'var(--emerald)' : 'var(--rose)'}`,
        borderRadius: 'var(--r-2xl)', padding: '20px 22px', boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Tu respuesta
          </span>
          <span style={{ fontSize: 11, fontWeight: 800, color: placed.length === wordCount ? 'var(--emerald-dark)' : 'var(--muted)' }}>
            {placed.length} / {wordCount} palabras
          </span>
        </div>
        <div
          onDragOver={e => { if (dragIdx !== null) e.preventDefault(); }}
          onDrop={cqOnDropEnd}
          style={{
            minHeight: 56, border: '2px dashed var(--border-strong)', borderRadius: 'var(--r-lg)',
            padding: '10px 12px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center',
            background: 'var(--bg)', marginBottom: 6,
          }}>
          {answer.length === 0 && (
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--faint)', fontStyle: 'italic' }}>
              Toca palabras del banco · arrastra para reordenar…
            </span>
          )}
          {answer.map((t, i) => (
            <button key={t.id}
              onClick={() => { if (justDragged.current) { justDragged.current = false; return; } removeTile(t.id); }}
              disabled={checked !== null}
              draggable={checked === null}
              onDragStart={e => cqOnDragStart(e, i)}
              onDragOver={e => cqOnDragOver(e, i)}
              onDragLeave={() => setDragOverIdx(null)}
              onDrop={e => cqOnDrop(e, i)}
              onDragEnd={cqOnDragEnd}
              style={{
                background: checked === null ? cq.color.solid : isCorrect ? 'var(--emerald)' : 'var(--rose)',
                color: 'white', border: 'none', borderRadius: 'var(--r-md)',
                padding: '9px 14px', fontSize: 15, fontWeight: 800, fontFamily: 'var(--font)',
                cursor: checked === null ? 'grab' : 'default',
                boxShadow: '0 2px 0 rgba(0,0,0,0.18)',
                opacity: dragIdx === i ? 0.4 : 1,
                outline: dragOverIdx === i && dragIdx !== i ? `3px solid ${cq.color.text}` : 'none',
                outlineOffset: 2,
                transition: 'opacity 0.12s',
              }}>
              {t.word}
            </button>
          ))}
          {punct === '?' && answer.length > 0 && (
            <span style={{
              fontSize: 26, fontWeight: 900,
              color: checked === null ? cq.color.text : isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)',
              padding: '0 6px', userSelect: 'none', alignSelf: 'center', lineHeight: 1,
            }}>?</span>
          )}
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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Banco de palabras
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>
            {bank.length} disponibles
          </span>
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
              style={answer.length ? { background: cq.color.solid, boxShadow: `0 4px 0 ${cq.color.text}` } : {}}>
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
                  <button onClick={() => cqSpeak(correctSentence)} title="Escuchar" style={{
                    background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 6 }}>
                  🇪🇸 {ex.es}
                </div>
              </div>
            </div>
            <button className="btn btn-lg" onClick={handleNext} style={{
              background: isCorrect ? 'var(--emerald)' : 'var(--rose)', color: 'white',
              boxShadow: `0 4px 0 ${isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)'}`,
            }}>
              {idx + 1 >= total ? 'VER RESULTADOS' : 'SIGUIENTE EJERCICIO 📊'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.CuantificadoresScreen = CuantificadoresScreen;
