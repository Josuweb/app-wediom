// Sección Preposiciones — 19 preposiciones en formato tabla de 4 columnas
// (Preposición · Significado · Uso · Ejemplo) y práctica con escenas visuales.

const PREPOSITIONS = [
  // ── TIEMPO Y LUGAR (In · On · At — de general a específico) ───────────
  { en: 'In',          es: 'en / sobre',             cat: 'tiempo-lugar', uso: 'Fechas o ubicaciones GENERALES (meses, años, ciudades, países)', example: 'My birthday is in July.',                              exampleEs: 'Mi cumpleaños es en julio.' },
  { en: 'On',          es: 'en / sobre',             cat: 'tiempo-lugar', uso: 'Día específico o superficie horizontal',                         example: 'I have class on Monday.',                              exampleEs: 'Tengo clase el lunes.' },
  { en: 'At',          es: 'en / al lado de',        cat: 'tiempo-lugar', uso: 'Momento exacto o punto MUY ESPECÍFICO',                          example: 'The meeting is at 3 PM.',                              exampleEs: 'La reunión es a las 3 PM.' },
  // ── POSICIÓN VERTICAL ─────────────────────────────────────────────────
  { en: 'Above',       es: 'encima de',              cat: 'vertical',     uso: 'Algo está arriba (sin movimiento)',                              example: 'The lamp is above the table.',                         exampleEs: 'La lámpara está encima de la mesa.' },
  { en: 'Over',        es: 'por encima de',          cat: 'vertical',     uso: 'Algo pasa por arriba (con movimiento)',                          example: 'A plane flies over the city.',                         exampleEs: 'Un avión vuela por encima de la ciudad.' },
  { en: 'Under',       es: 'debajo de',              cat: 'vertical',     uso: 'Algo está abajo de otra cosa',                                   example: 'The dog is under the bed.',                            exampleEs: 'El perro está debajo de la cama.' },
  // ── POSICIÓN Y DIRECCIÓN ──────────────────────────────────────────────
  { en: 'In front of', es: 'delante de',             cat: 'posicion',     uso: 'Adelante de algo',                                               example: 'A car is in front of the house.',                      exampleEs: 'Un coche está delante de la casa.' },
  { en: 'Behind',      es: 'detrás de',              cat: 'posicion',     uso: 'Detrás de algo',                                                 example: 'The garden is behind the school.',                     exampleEs: 'El jardín está detrás de la escuela.' },
  { en: 'Next to / Beside', es: 'al lado de / junto a', cat: 'posicion',  uso: 'Justo al lado (pegado o muy cerca)',                            example: 'I sit next to my friend.',                             exampleEs: 'Me siento al lado de mi amigo.' },
  { en: 'On the right of', es: 'a la derecha de',    cat: 'posicion',     uso: 'En el lado derecho',                                             example: 'The kitchen is on the right of the living room.',      exampleEs: 'La cocina está a la derecha de la sala.' },
  { en: 'On the left of',  es: 'a la izquierda de',  cat: 'posicion',     uso: 'En el lado izquierdo',                                           example: 'The bathroom is on the left of the hall.',             exampleEs: 'El baño está a la izquierda del pasillo.' },
  { en: 'Between',     es: 'entre (dos cosas)',      cat: 'posicion',     uso: 'Entre DOS elementos individuales (ej: Andrés y Juan)',           example: 'The park is between two buildings.',                   exampleEs: 'El parque está entre dos edificios.' },
  { en: 'Among',       es: 'entre (un grupo)',       cat: 'posicion',     uso: 'Dentro de un GRUPO de cosas (ej: los niños)',                    example: 'He stood among the children.',                         exampleEs: 'Se paró entre los niños.' },
  // ── DISTANCIA Y ESPACIO ───────────────────────────────────────────────
  { en: 'Near / Close to', es: 'cerca de',           cat: 'distancia',    uso: 'Cerca pero no junto',                                            example: 'The school is near my house.',                         exampleEs: 'La escuela está cerca de mi casa.' },
  { en: 'Far from',    es: 'lejos de',               cat: 'distancia',    uso: 'A mucha distancia',                                              example: 'The beach is far from the city.',                      exampleEs: 'La playa está lejos de la ciudad.' },
  { en: 'Inside',      es: 'dentro de',              cat: 'distancia',    uso: 'En el interior de algo cerrado',                                 example: 'The keys are inside the drawer.',                      exampleEs: 'Las llaves están dentro del cajón.' },
  { en: 'Outside',     es: 'fuera de',               cat: 'distancia',    uso: 'En el exterior de algo',                                         example: 'The dog is outside the house.',                        exampleEs: 'El perro está fuera de la casa.' },
  { en: 'Around',      es: 'alrededor de',           cat: 'distancia',    uso: 'Rodeando algo',                                                  example: 'There are trees around the park.',                     exampleEs: 'Hay árboles alrededor del parque.' },
  { en: 'In the center of', es: 'en el centro de',   cat: 'distancia',    uso: 'En medio o en el centro de un lugar',                            example: 'The fountain is in the center of the plaza.',          exampleEs: 'La fuente está en el centro de la plaza.' },
];

const PREP_CATEGORIES = [
  { key: 'tiempo-lugar', label: 'TIEMPO Y LUGAR (In · On · At)', icon: '🕐', desc: 'Tres preposiciones clave que van de lo más GENERAL a lo más ESPECÍFICO', color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#F59E0B' } },
  { key: 'vertical',     label: 'POSICIÓN VERTICAL',              icon: '⬆️', desc: 'Encima, por encima (con movimiento) y debajo',                              color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' } },
  { key: 'posicion',     label: 'POSICIÓN Y DIRECCIÓN',           icon: '🧭', desc: 'Delante, detrás, lados y entre (dos individuales o un grupo)',             color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD', solid: '#7C3AED' } },
  { key: 'distancia',    label: 'DISTANCIA Y ESPACIO',            icon: '📦', desc: 'Cerca, lejos, dentro, fuera, alrededor y centro',                          color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', solid: '#10B981' } },
];

// ── Escenas para practicar (HTML positioning con emojis) ────────────────────
const PREP_SCENES = [
  {
    prep: 'in',
    subject: { emoji: '🐱', label: 'cat', style: { left: '50%', top: '58%', transform: 'translate(-50%, -50%)', fontSize: 32, zIndex: 2 } },
    object:  { emoji: '📦', label: 'box', style: { left: '50%', top: '58%', transform: 'translate(-50%, -50%)', fontSize: 100, zIndex: 1 } },
    question: 'Where is the cat?',
    questionEs: '¿Dónde está el gato?',
    en: ['The','cat','is','in','the','box'],
    es: 'El gato está en la caja.',
  },
  {
    prep: 'on',
    subject: { emoji: '📖', label: 'book', style: { left: '50%', top: '40%', transform: 'translate(-50%, -50%)', fontSize: 40, zIndex: 2 } },
    object:  { emoji: '🪑', label: 'chair', style: { left: '50%', top: '65%', transform: 'translate(-50%, -50%)', fontSize: 80, zIndex: 1 } },
    question: 'Where is the book?',
    questionEs: '¿Dónde está el libro?',
    en: ['The','book','is','on','the','chair'],
    es: 'El libro está sobre la silla.',
  },
  {
    prep: 'under',
    subject: { emoji: '🐶', label: 'dog', style: { left: '50%', top: '78%', transform: 'translate(-50%, -50%)', fontSize: 36, zIndex: 2 } },
    object:  { emoji: '🛏️', label: 'bed', style: { left: '50%', top: '45%', transform: 'translate(-50%, -50%)', fontSize: 80, zIndex: 1 } },
    question: 'Where is the dog?',
    questionEs: '¿Dónde está el perro?',
    en: ['The','dog','is','under','the','bed'],
    es: 'El perro está debajo de la cama.',
  },
  {
    prep: 'next to',
    subject: { emoji: '🌳', label: 'tree', style: { left: '25%', top: '55%', transform: 'translate(-50%, -50%)', fontSize: 70, zIndex: 1 } },
    object:  { emoji: '🏠', label: 'house', style: { left: '65%', top: '55%', transform: 'translate(-50%, -50%)', fontSize: 80, zIndex: 1 } },
    question: 'Where is the tree?',
    questionEs: '¿Dónde está el árbol?',
    en: ['The','tree','is','next','to','the','house'],
    es: 'El árbol está al lado de la casa.',
  },
  {
    prep: 'behind',
    subject: { emoji: '⚽', label: 'ball', style: { left: '70%', top: '60%', transform: 'translate(-50%, -50%)', fontSize: 34, zIndex: 1 } },
    object:  { emoji: '🚗', label: 'car', style: { left: '45%', top: '60%', transform: 'translate(-50%, -50%)', fontSize: 80, zIndex: 2 } },
    question: 'Where is the ball?',
    questionEs: '¿Dónde está la pelota?',
    en: ['The','ball','is','behind','the','car'],
    es: 'La pelota está detrás del coche.',
  },
  {
    prep: 'above',
    subject: { emoji: '☁️', label: 'cloud', style: { left: '50%', top: '20%', transform: 'translate(-50%, -50%)', fontSize: 60, zIndex: 2 } },
    object:  { emoji: '🏔️', label: 'mountain', style: { left: '50%', top: '65%', transform: 'translate(-50%, -50%)', fontSize: 90, zIndex: 1 } },
    question: 'Where is the cloud?',
    questionEs: '¿Dónde está la nube?',
    en: ['The','cloud','is','above','the','mountain'],
    es: 'La nube está encima de la montaña.',
  },
  {
    prep: 'between',
    subject: { emoji: '🐦', label: 'bird', style: { left: '50%', top: '55%', transform: 'translate(-50%, -50%)', fontSize: 36, zIndex: 2 } },
    object:  { emoji: '🌳 🌳', label: 'trees', style: { left: '50%', top: '55%', transform: 'translate(-50%, -50%)', fontSize: 64, zIndex: 1, letterSpacing: 60 } },
    question: 'Where is the bird?',
    questionEs: '¿Dónde está el pájaro?',
    en: ['The','bird','is','between','the','trees'],
    es: 'El pájaro está entre los árboles.',
  },
  {
    prep: 'in front of',
    subject: { emoji: '🚲', label: 'bike', style: { left: '50%', top: '75%', transform: 'translate(-50%, -50%)', fontSize: 50, zIndex: 2 } },
    object:  { emoji: '🏪', label: 'store', style: { left: '50%', top: '40%', transform: 'translate(-50%, -50%)', fontSize: 90, zIndex: 1 } },
    question: 'Where is the bike?',
    questionEs: '¿Dónde está la bicicleta?',
    en: ['The','bike','is','in','front','of','the','store'],
    es: 'La bicicleta está enfrente de la tienda.',
  },
];

const PREP_DISTRACT_POOL = [
  'in','on','at','under','over','behind','between','above','below','near','next','to','of','from','front',
  'the','a','an','my','your','his','her',
  'is','are','was','were',
  'cat','dog','bird','book','chair','table','box','tree','house','car','ball','store','bike','bed','mountain','cloud','road','window','door',
];

function prepSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function prepShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function prepBuildTiles(scene) {
  const used = new Set(scene.en.map(w => w.toLowerCase()));
  const target = Math.max(22, scene.en.length * 2 + 6);
  const needed = target - scene.en.length;
  const pool = PREP_DISTRACT_POOL.filter(w => !used.has(w.toLowerCase()));
  const distractors = prepShuffle(pool).slice(0, needed);
  return prepShuffle([...scene.en, ...distractors]).map((word, id) => ({ id, word }));
}
function usePrepNarrow(maxPx) {
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
function PreposicionesScreen() {
  const [view, setView] = React.useState('list'); // 'list' | 'practice'

  if (view === 'practice') {
    return <PrepPracticeScreen onExit={() => setView('list')}/>;
  }

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #F59E0B, #B45309)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 22, boxShadow: '0 8px 24px rgba(245,158,11,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 40 }}>📍</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Preposiciones</div>
            <div style={{ fontSize: 13.5, opacity: 0.9, fontWeight: 600, lineHeight: 1.55 }}>
              Las <strong>19 preposiciones esenciales</strong> en inglés, agrupadas por uso:
              lugar, tiempo y movimiento. Toca 🔊 para escuchar la pronunciación.
            </div>
          </div>
          <button onClick={() => setView('practice')} style={{
            background: 'white', color: '#1E3A8A', border: 'none',
            borderRadius: 'var(--r-md)', padding: '10px 18px', cursor: 'pointer',
            fontFamily: 'var(--font)', fontWeight: 900, fontSize: 13,
            boxShadow: '0 4px 0 rgba(0,0,0,0.2)', whiteSpace: 'nowrap',
          }}>
            🎯 Practicar con imágenes
          </button>
        </div>
      </div>

      {/* Tip in/on/at — regla de especificidad */}
      <div style={{
        background: '#FEF3C7', border: '1.5px solid #FCD34D',
        borderRadius: 'var(--r-lg)', padding: '14px 18px',
        marginBottom: 22, fontSize: 12.5, fontWeight: 600,
        color: '#78350F', lineHeight: 1.65,
      }}>
        💡 <strong>Regla clave de In / On / At:</strong> van de lo MÁS GENERAL a lo MÁS ESPECÍFICO →{' '}
        <strong>In</strong> (meses, años, ciudades) · <strong>On</strong> (día específico, superficie) ·{' '}
        <strong>At</strong> (hora exacta, punto puntual).
      </div>

      {PREP_CATEGORIES.map(cat => {
        const items = PREPOSITIONS.filter(p => p.cat === cat.key);
        return <PrepCategoryTable key={cat.key} cat={cat} items={items}/>;
      })}

    </div>
  );
}

// ── Tabla por categoría (responsive: wide table / narrow stack) ────────────
function PrepCategoryTable({ cat, items }) {
  const narrow = usePrepNarrow(820);
  const cols = 'minmax(110px, 130px) minmax(140px, 1fr) minmax(160px, 1.4fr) minmax(220px, 2fr)';

  return (
    <div style={{ marginBottom: 26 }}>
      {/* Header de categoría */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12,
        padding: '12px 18px',
        background: cat.color.bg, border: `2px solid ${cat.color.border}`,
        borderRadius: 'var(--r-lg)',
      }}>
        <div style={{ fontSize: 26 }}>{cat.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 900, color: cat.color.text, letterSpacing: '0.02em' }}>
            {cat.label}
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: cat.color.text, opacity: 0.8 }}>
            {cat.desc}
          </div>
        </div>
        <div style={{
          background: cat.color.solid, color: 'white',
          padding: '4px 10px', borderRadius: 999,
          fontSize: 11, fontWeight: 900,
        }}>
          {items.length}
        </div>
      </div>

      {!narrow ? (
        <div style={{
          background: 'white', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
        }}>
          {/* Header de columnas */}
          <div style={{
            display: 'grid', gridTemplateColumns: cols,
            gap: 14, padding: '10px 16px',
            background: 'var(--bg)', borderBottom: '2px solid var(--border)',
            fontSize: 10.5, fontWeight: 900, color: 'var(--faint)',
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            <div>Preposición</div>
            <div>Significado</div>
            <div>Uso</div>
            <div>Ejemplo</div>
          </div>
          {/* Filas */}
          {items.map((p, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: cols, gap: 14,
              padding: '12px 16px',
              borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={() => prepSpeak(p.en)} title={`Escuchar "${p.en}"`} style={{
                  background: cat.color.solid, border: 'none', borderRadius: 6,
                  width: 24, height: 24, cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </button>
                <span style={{ fontSize: 15, fontWeight: 900, color: cat.color.text }}>{p.en}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', fontStyle: 'italic' }}>
                {p.es}
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--muted)', lineHeight: 1.5 }}>
                {p.uso}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: cat.color.text, lineHeight: 1.4 }}>
                  "{p.example}"
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 2 }}>
                  → {p.exampleEs}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Narrow: tarjetas apiladas
        <div style={{ display: 'grid', gap: 8 }}>
          {items.map((p, i) => (
            <div key={i} style={{
              background: 'white', border: `1.5px solid ${cat.color.border}`,
              borderRadius: 'var(--r-lg)', padding: '12px 14px',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button onClick={() => prepSpeak(p.en)} title={`Escuchar "${p.en}"`} style={{
                  background: cat.color.solid, border: 'none', borderRadius: 6,
                  width: 26, height: 26, cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                </button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: cat.color.text, lineHeight: 1.15 }}>
                    {p.en}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--muted)', fontStyle: 'italic' }}>
                    {p.es}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', lineHeight: 1.5 }}>
                <strong style={{ color: cat.color.text }}>Uso:</strong> {p.uso}
              </div>
              <div style={{
                background: cat.color.bg, borderRadius: 'var(--r-md)',
                padding: '8px 10px',
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: cat.color.text, lineHeight: 1.4 }}>
                  "{p.example}"
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 2 }}>
                  → {p.exampleEs}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Pantalla de práctica con escenas visuales ──────────────────────────────
function PrepPracticeScreen({ onExit }) {
  const [pool] = React.useState(() => prepShuffle(PREP_SCENES).map(s => ({ ...s, tiles: prepBuildTiles(s) })));
  const [idx, setIdx]         = React.useState(0);
  const [placed, setPlaced]   = React.useState([]);
  const [checked, setChecked] = React.useState(null);
  const [score, setScore]     = React.useState(0);
  const [shake, setShake]     = React.useState(false);

  const total  = pool.length;
  const isDone = idx >= total;
  const ex     = pool[idx];
  const progress = total ? (idx + (checked !== null ? 1 : 0)) / total : 0;

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
    const ok = pct >= 75;
    return (
      <div style={{ maxWidth: 720 }}>
        <div style={{
          background: ok ? 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))'
                         : 'linear-gradient(135deg, #2563EB, #1E3A8A)',
          borderRadius: 'var(--r-2xl)', padding: '36px', color: 'white', textAlign: 'center',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}>
          <div style={{ fontSize: 56, marginBottom: 10 }}>{ok ? '🏆' : '💪'}</div>
          <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 4 }}>{pct}%</div>
          <div style={{ fontSize: 15, opacity: 0.9, fontWeight: 700 }}>
            {score} de {total} oraciones correctas
          </div>
        </div>
        <button className="btn btn-primary btn-lg" onClick={onExit}
          style={{ background: '#2563EB', boxShadow: '0 4px 0 #1E3A8A' }}>
          ← VOLVER A PREPOSICIONES
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
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={onExit} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)' }}>
            <span>📍 Escena {idx + 1} / {total}</span>
            <span style={{ color: '#1E40AF' }}>Preposiciones</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: '#2563EB' }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* Escena + pregunta */}
      <div style={{
        background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)',
        border: '2px solid #93C5FD',
        borderRadius: 'var(--r-2xl)', padding: '20px 24px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: '#1E3A8A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
          🖼️ Observa la escena
        </div>

        <div style={{
          position: 'relative',
          width: '100%', maxWidth: 360, height: 240,
          margin: '0 auto 16px',
          background: 'white', borderRadius: 'var(--r-xl)',
          border: '2px dashed #93C5FD',
          overflow: 'hidden',
        }}>
          {/* Suelo */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '20%',
            background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.08))',
            borderTop: '1px dashed #BFDBFE',
          }}/>
          <div style={{ position: 'absolute', ...ex.object.style }}>{ex.object.emoji}</div>
          <div style={{ position: 'absolute', ...ex.subject.style }}>{ex.subject.emoji}</div>
        </div>

        <div style={{ fontSize: 16, fontWeight: 800, color: '#1E3A8A', textAlign: 'center', marginBottom: 4 }}>
          {ex.question}
        </div>
        <div style={{ fontSize: 12.5, color: '#3730A3', fontStyle: 'italic', textAlign: 'center' }}>
          🇪🇸 {ex.questionEs}
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
          <span style={{ fontSize: 11, fontWeight: 800, color: placed.length === ex.en.length ? 'var(--emerald-dark)' : 'var(--muted)' }}>
            {placed.length} / {ex.en.length} palabras
          </span>
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
                background: checked === null ? '#2563EB' : isCorrect ? 'var(--emerald)' : 'var(--rose)',
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
              style={answer.length ? { background: '#2563EB', boxShadow: '0 4px 0 #1E3A8A' } : {}}>
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
                  <button onClick={() => prepSpeak(correctSentence)} title="Escuchar" style={{
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
              {idx + 1 >= total ? 'TERMINAR' : 'SIGUIENTE ESCENA →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.PreposicionesScreen = PreposicionesScreen;
