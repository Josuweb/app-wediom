// Verbos esenciales — 200 verbos alfabéticos con presente y pasado + modo práctica

const COMMON_VERBS = [
  // A
  { en:'accept',     past:'accepted',     es:'aceptar' },
  { en:'add',        past:'added',        es:'añadir' },
  { en:'agree',      past:'agreed',       es:'estar de acuerdo' },
  { en:'allow',      past:'allowed',      es:'permitir' },
  { en:'answer',     past:'answered',     es:'responder' },
  { en:'appear',     past:'appeared',     es:'aparecer' },
  { en:'arrive',     past:'arrived',      es:'llegar' },
  { en:'ask',        past:'asked',        es:'preguntar' },
  // B
  { en:'bake',       past:'baked',        es:'hornear' },
  { en:'be',         past:'was / were',   es:'ser / estar' },
  { en:'become',     past:'became',       es:'convertirse' },
  { en:'begin',      past:'began',        es:'empezar' },
  { en:'believe',    past:'believed',     es:'creer' },
  { en:'break',      past:'broke',        es:'romper' },
  { en:'breathe',    past:'breathed',     es:'respirar' },
  { en:'bring',      past:'brought',      es:'traer' },
  { en:'build',      past:'built',        es:'construir' },
  { en:'burn',       past:'burned',       es:'quemar' },
  { en:'buy',        past:'bought',       es:'comprar' },
  // C
  { en:'call',       past:'called',       es:'llamar' },
  { en:'carry',      past:'carried',      es:'llevar / cargar' },
  { en:'catch',      past:'caught',       es:'atrapar' },
  { en:'celebrate',  past:'celebrated',   es:'celebrar' },
  { en:'change',     past:'changed',      es:'cambiar' },
  { en:'check',      past:'checked',      es:'revisar' },
  { en:'choose',     past:'chose',        es:'elegir' },
  { en:'clean',      past:'cleaned',      es:'limpiar' },
  { en:'climb',      past:'climbed',      es:'escalar' },
  { en:'close',      past:'closed',       es:'cerrar' },
  { en:'collect',    past:'collected',    es:'coleccionar' },
  { en:'come',       past:'came',         es:'venir' },
  { en:'compare',    past:'compared',     es:'comparar' },
  { en:'complain',   past:'complained',   es:'quejarse' },
  { en:'complete',   past:'completed',    es:'completar' },
  { en:'consider',   past:'considered',   es:'considerar' },
  { en:'continue',   past:'continued',    es:'continuar' },
  { en:'cook',       past:'cooked',       es:'cocinar' },
  { en:'count',      past:'counted',      es:'contar' },
  { en:'cover',      past:'covered',      es:'cubrir' },
  { en:'create',     past:'created',      es:'crear' },
  { en:'cross',      past:'crossed',      es:'cruzar' },
  { en:'cry',        past:'cried',        es:'llorar' },
  { en:'cut',        past:'cut',          es:'cortar' },
  // D
  { en:'dance',      past:'danced',       es:'bailar' },
  { en:'decide',     past:'decided',      es:'decidir' },
  { en:'describe',   past:'described',    es:'describir' },
  { en:'destroy',    past:'destroyed',    es:'destruir' },
  { en:'die',        past:'died',         es:'morir' },
  { en:'discover',   past:'discovered',   es:'descubrir' },
  { en:'discuss',    past:'discussed',    es:'discutir' },
  { en:'divide',     past:'divided',      es:'dividir' },
  { en:'do',         past:'did',          es:'hacer' },
  { en:'drink',      past:'drank',        es:'beber' },
  { en:'drive',      past:'drove',        es:'conducir' },
  { en:'drop',       past:'dropped',      es:'dejar caer' },
  // E
  { en:'earn',       past:'earned',       es:'ganar (dinero)' },
  { en:'eat',        past:'ate',          es:'comer' },
  { en:'end',        past:'ended',        es:'terminar' },
  { en:'enjoy',      past:'enjoyed',      es:'disfrutar' },
  { en:'enter',      past:'entered',      es:'entrar' },
  { en:'exchange',   past:'exchanged',    es:'intercambiar' },
  { en:'exist',      past:'existed',      es:'existir' },
  { en:'expect',     past:'expected',     es:'esperar / anticipar' },
  { en:'explain',    past:'explained',    es:'explicar' },
  { en:'explore',    past:'explored',     es:'explorar' },
  // F
  { en:'fall',       past:'fell',         es:'caer' },
  { en:'feel',       past:'felt',         es:'sentir' },
  { en:'fight',      past:'fought',       es:'pelear' },
  { en:'fill',       past:'filled',       es:'llenar' },
  { en:'find',       past:'found',        es:'encontrar' },
  { en:'finish',     past:'finished',     es:'terminar' },
  { en:'fix',        past:'fixed',        es:'arreglar' },
  { en:'fly',        past:'flew',         es:'volar' },
  { en:'follow',     past:'followed',     es:'seguir' },
  { en:'forget',     past:'forgot',       es:'olvidar' },
  { en:'forgive',    past:'forgave',      es:'perdonar' },
  { en:'freeze',     past:'froze',        es:'congelar' },
  // G
  { en:'gather',     past:'gathered',     es:'reunir' },
  { en:'get',        past:'got',          es:'obtener / conseguir' },
  { en:'give',       past:'gave',         es:'dar' },
  { en:'go',         past:'went',         es:'ir' },
  { en:'grow',       past:'grew',         es:'crecer' },
  { en:'guess',      past:'guessed',      es:'adivinar' },
  // H
  { en:'happen',     past:'happened',     es:'suceder' },
  { en:'hate',       past:'hated',        es:'odiar' },
  { en:'have',       past:'had',          es:'tener' },
  { en:'hear',       past:'heard',        es:'oír' },
  { en:'help',       past:'helped',       es:'ayudar' },
  { en:'hide',       past:'hid',          es:'esconder' },
  { en:'hold',       past:'held',         es:'sostener' },
  { en:'hope',       past:'hoped',        es:'esperar / desear' },
  { en:'hurt',       past:'hurt',         es:'lastimar' },
  // I
  { en:'imagine',    past:'imagined',     es:'imaginar' },
  { en:'improve',    past:'improved',     es:'mejorar' },
  { en:'include',    past:'included',     es:'incluir' },
  { en:'introduce',  past:'introduced',   es:'presentar' },
  { en:'invite',     past:'invited',      es:'invitar' },
  // J
  { en:'join',       past:'joined',       es:'unirse' },
  { en:'jump',       past:'jumped',       es:'saltar' },
  // K
  { en:'keep',       past:'kept',         es:'mantener' },
  { en:'kick',       past:'kicked',       es:'patear' },
  { en:'kiss',       past:'kissed',       es:'besar' },
  { en:'knock',      past:'knocked',      es:'tocar / golpear' },
  { en:'know',       past:'knew',         es:'saber / conocer' },
  // L
  { en:'laugh',      past:'laughed',      es:'reír' },
  { en:'lead',       past:'led',          es:'guiar / liderar' },
  { en:'learn',      past:'learned',      es:'aprender' },
  { en:'leave',      past:'left',         es:'dejar / salir' },
  { en:'lend',       past:'lent',         es:'prestar' },
  { en:'let',        past:'let',          es:'dejar / permitir' },
  { en:'lie',        past:'lay',          es:'acostarse' },
  { en:'light',      past:'lit',          es:'encender' },
  { en:'listen',     past:'listened',     es:'escuchar' },
  { en:'live',       past:'lived',        es:'vivir' },
  { en:'look',       past:'looked',       es:'mirar' },
  { en:'lose',       past:'lost',         es:'perder' },
  { en:'love',       past:'loved',        es:'amar' },
  // M
  { en:'make',       past:'made',         es:'hacer / fabricar' },
  { en:'marry',      past:'married',      es:'casarse' },
  { en:'mean',       past:'meant',        es:'significar' },
  { en:'meet',       past:'met',          es:'conocer / encontrarse' },
  { en:'move',       past:'moved',        es:'mover' },
  // N
  { en:'need',       past:'needed',       es:'necesitar' },
  { en:'notice',     past:'noticed',      es:'notar' },
  // O
  { en:'offer',      past:'offered',      es:'ofrecer' },
  { en:'open',       past:'opened',       es:'abrir' },
  { en:'order',      past:'ordered',      es:'ordenar / pedir' },
  // P
  { en:'paint',      past:'painted',      es:'pintar' },
  { en:'park',       past:'parked',       es:'estacionar' },
  { en:'pass',       past:'passed',       es:'pasar' },
  { en:'pay',        past:'paid',         es:'pagar' },
  { en:'plan',       past:'planned',      es:'planear' },
  { en:'play',       past:'played',       es:'jugar' },
  { en:'point',      past:'pointed',      es:'señalar' },
  { en:'prefer',     past:'preferred',    es:'preferir' },
  { en:'prepare',    past:'prepared',     es:'preparar' },
  { en:'pretend',    past:'pretended',    es:'fingir' },
  { en:'prevent',    past:'prevented',    es:'prevenir' },
  { en:'promise',    past:'promised',     es:'prometer' },
  { en:'pronounce',  past:'pronounced',   es:'pronunciar' },
  { en:'protect',    past:'protected',    es:'proteger' },
  { en:'prove',      past:'proved',       es:'probar / demostrar' },
  { en:'pull',       past:'pulled',       es:'jalar / tirar' },
  { en:'push',       past:'pushed',       es:'empujar' },
  { en:'put',        past:'put',          es:'poner' },
  // R
  { en:'raise',      past:'raised',       es:'levantar / criar' },
  { en:'reach',      past:'reached',      es:'alcanzar' },
  { en:'read',       past:'read',         es:'leer' },
  { en:'realize',    past:'realized',     es:'darse cuenta' },
  { en:'receive',    past:'received',     es:'recibir' },
  { en:'recognize',  past:'recognized',   es:'reconocer' },
  { en:'reduce',     past:'reduced',      es:'reducir' },
  { en:'refuse',     past:'refused',      es:'rechazar' },
  { en:'relax',      past:'relaxed',      es:'relajarse' },
  { en:'remain',     past:'remained',     es:'permanecer' },
  { en:'remember',   past:'remembered',   es:'recordar' },
  { en:'repair',     past:'repaired',     es:'reparar' },
  { en:'repeat',     past:'repeated',     es:'repetir' },
  { en:'reply',      past:'replied',      es:'responder' },
  { en:'rest',       past:'rested',       es:'descansar' },
  { en:'return',     past:'returned',     es:'regresar' },
  { en:'ride',       past:'rode',         es:'montar' },
  { en:'ring',       past:'rang',         es:'sonar' },
  { en:'run',        past:'ran',          es:'correr' },
  // S
  { en:'save',       past:'saved',        es:'guardar / salvar' },
  { en:'say',        past:'said',         es:'decir' },
  { en:'scream',     past:'screamed',     es:'gritar' },
  { en:'search',     past:'searched',     es:'buscar' },
  { en:'see',        past:'saw',          es:'ver' },
  { en:'seem',       past:'seemed',       es:'parecer' },
  { en:'sell',       past:'sold',         es:'vender' },
  { en:'send',       past:'sent',         es:'enviar' },
  { en:'serve',      past:'served',       es:'servir' },
  { en:'set',        past:'set',          es:'poner / establecer' },
  { en:'shake',      past:'shook',        es:'sacudir' },
  { en:'show',       past:'showed',       es:'mostrar' },
  { en:'sit',        past:'sat',          es:'sentarse' },
  { en:'sleep',      past:'slept',        es:'dormir' },
  { en:'speak',      past:'spoke',        es:'hablar' },
  { en:'spend',      past:'spent',        es:'gastar / pasar' },
  { en:'stand',      past:'stood',        es:'estar de pie' },
  { en:'start',      past:'started',      es:'empezar' },
  { en:'stay',       past:'stayed',       es:'quedarse' },
  { en:'stop',       past:'stopped',      es:'parar' },
  { en:'study',      past:'studied',      es:'estudiar' },
  { en:'suggest',    past:'suggested',    es:'sugerir' },
  // T
  { en:'take',       past:'took',         es:'tomar / llevar' },
  { en:'talk',       past:'talked',       es:'hablar' },
  { en:'tell',       past:'told',         es:'contar / decir' },
  { en:'think',      past:'thought',      es:'pensar' },
  { en:'travel',     past:'traveled',     es:'viajar' },
  { en:'try',        past:'tried',        es:'intentar' },
  { en:'turn',       past:'turned',       es:'girar / voltear' },
  // U
  { en:'understand', past:'understood',   es:'entender' },
  { en:'use',        past:'used',         es:'usar' },
  // V
  { en:'visit',      past:'visited',      es:'visitar' },
  // W
  { en:'wait',       past:'waited',       es:'esperar' },
  { en:'walk',       past:'walked',       es:'caminar' },
  { en:'want',       past:'wanted',       es:'querer' },
  { en:'watch',      past:'watched',      es:'mirar' },
  { en:'win',        past:'won',          es:'ganar' },
  { en:'work',       past:'worked',       es:'trabajar' },
  { en:'write',      past:'wrote',        es:'escribir' },
];

// ── Quiz dinámico de verbos ────────────────────────────────────────────────
const VB_QUIZ_TYPES = [
  { id: 'es-en',   icon: '🇪🇸 → EN', label: 'Traduce al inglés',           promptKey: 'es',   answerKey: 'en'   },
  { id: 'en-es',   icon: 'EN → 🇪🇸', label: 'Traduce al español',          promptKey: 'en',   answerKey: 'es'   },
  { id: 'en-past', icon: '⚡ → 🕰️',   label: 'Pasa al pasado (en inglés)',  promptKey: 'en',   answerKey: 'past' },
  { id: 'past-en', icon: '🕰️ → ⚡',   label: 'Pasa al presente (en inglés)', promptKey: 'past', answerKey: 'en'   },
];
const VB_MODES = [
  { id: 'mixed',   label: '🎲 Mixto',          desc: 'Las 4 modalidades aleatorias' },
  { id: 'es-en',   label: '🇪🇸 → Inglés',      desc: 'Te doy la palabra en español' },
  { id: 'en-es',   label: 'Inglés → 🇪🇸',      desc: 'Te doy la palabra en inglés' },
  { id: 'en-past', label: '⚡ Presente → Pasado', desc: 'Conjuga al pasado simple' },
  { id: 'past-en', label: '🕰️ Pasado → Presente', desc: 'Vuelve al infinitivo' },
];
const VB_LENGTHS = [10, 20, 30];

function vbShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function vbSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}

// Genera N preguntas. Cada una: prompt, respuesta correcta y 3 distractores.
function vbBuildQuiz(verbs, mode, count) {
  const picked = vbShuffle(verbs).slice(0, count);
  return picked.map(v => {
    const type = mode === 'mixed'
      ? VB_QUIZ_TYPES[Math.floor(Math.random() * VB_QUIZ_TYPES.length)]
      : VB_QUIZ_TYPES.find(t => t.id === mode);
    const prompt  = v[type.promptKey];
    const correct = v[type.answerKey];
    // Distractores: 3 verbos distintos cuyo answerKey sea distinto de la respuesta correcta
    const candidates = verbs.filter(x => x[type.answerKey] !== correct);
    const distractors = vbShuffle(candidates).slice(0, 3).map(x => x[type.answerKey]);
    const options = vbShuffle([correct, ...distractors]);
    return { type, prompt, correct, options, verb: v };
  });
}

function VerbsQuizScreen({ onExit }) {
  const [mode, setMode]       = React.useState('mixed');
  const [length, setLength]   = React.useState(10);
  const [started, setStarted] = React.useState(false);
  const [quiz, setQuiz]       = React.useState([]);
  const [idx, setIdx]         = React.useState(0);
  const [picked, setPicked]   = React.useState(null);
  const [score, setScore]     = React.useState(0);
  const [failures, setFailures] = React.useState([]);

  function startQuiz() {
    setQuiz(vbBuildQuiz(COMMON_VERBS, mode, length));
    setIdx(0); setPicked(null); setScore(0); setFailures([]);
    setStarted(true);
  }
  function handlePick(opt) {
    if (picked !== null) return;
    setPicked(opt);
    const ex = quiz[idx];
    if (opt === ex.correct) setScore(s => s + 1);
    else setFailures(f => [...f, { ...ex, userAnswer: opt }]);
  }
  function handleNext() { setIdx(i => i + 1); setPicked(null); }
  function backToConfig() { setStarted(false); }

  // ── Pantalla de configuración ──────────────────────────────────────────────
  if (!started) {
    return (
      <div style={{ maxWidth: 800 }}>
        <div style={{
          background: 'linear-gradient(135deg, #6366F1, #4338CA)',
          borderRadius: 'var(--r-2xl)', padding: '26px 30px', color: 'white',
          marginBottom: 22, boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -10, right: -10, fontSize: 110, opacity: 0.15 }}>🎯</div>
          <div style={{ fontSize: 40, marginBottom: 6 }}>🎯</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 6 }}>Quiz de Verbos</div>
          <div style={{ fontSize: 13.5, opacity: 0.93, fontWeight: 600, lineHeight: 1.55, maxWidth: 560 }}>
            Practica los <strong>{COMMON_VERBS.length} verbos esenciales</strong> con preguntas de opción múltiple.
            Elige la modalidad y la cantidad de preguntas.
          </div>
        </div>

        {/* Modos */}
        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          🎮 Modalidad
        </div>
        <div style={{
          display: 'grid', gap: 10,
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          marginBottom: 22,
        }}>
          {VB_MODES.map(m => {
            const sel = m.id === mode;
            return (
              <button key={m.id} onClick={() => setMode(m.id)} style={{
                cursor: 'pointer', fontFamily: 'var(--font)', textAlign: 'left',
                background: sel ? 'var(--indigo-light)' : 'white',
                border: `2px solid ${sel ? 'var(--indigo)' : 'var(--border)'}`,
                borderRadius: 'var(--r-lg)', padding: '14px 16px',
                boxShadow: sel ? '0 3px 0 var(--indigo-dark)' : 'var(--shadow-sm)',
                display: 'grid', gap: 4,
              }}>
                <div style={{ fontSize: 15, fontWeight: 900, color: sel ? 'var(--indigo-dark)' : 'var(--text)' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)' }}>
                  {m.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Longitud */}
        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          🔢 Número de preguntas
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {VB_LENGTHS.map(n => {
            const sel = n === length;
            return (
              <button key={n} onClick={() => setLength(n)} style={{
                cursor: 'pointer', fontFamily: 'var(--font)',
                background: sel ? 'var(--indigo)' : 'white',
                color: sel ? 'white' : 'var(--text)',
                border: `2px solid ${sel ? 'var(--indigo)' : 'var(--border)'}`,
                borderRadius: 'var(--r-md)', padding: '10px 22px',
                fontSize: 15, fontWeight: 900,
                boxShadow: sel ? '0 3px 0 var(--indigo-dark)' : 'none',
              }}>
                {n} preguntas
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" style={{ flex: 1, minWidth: 160 }} onClick={onExit}>
            ← Volver
          </button>
          <button className="btn btn-primary btn-lg" style={{ flex: 2, minWidth: 220 }} onClick={startQuiz}>
            🚀 EMPEZAR QUIZ
          </button>
        </div>
      </div>
    );
  }

  // ── Pantalla de resultados ─────────────────────────────────────────────────
  if (idx >= quiz.length) {
    const pct = Math.round((score / quiz.length) * 100);
    const result =
      pct >= 90 ? { label: '¡Excelente!',          emoji: '🏆', accent: 'var(--emerald)', dark: 'var(--emerald-dark)' } :
      pct >= 70 ? { label: '¡Muy bien!',           emoji: '💪', accent: 'var(--indigo)',  dark: 'var(--indigo-dark)' } :
      pct >= 50 ? { label: 'Sigue practicando',    emoji: '📘', accent: 'var(--amber)',   dark: 'var(--amber-dark)' } :
                  { label: 'Necesitas más práctica', emoji: '📚', accent: 'var(--rose)',   dark: 'var(--rose-dark)' };

    return (
      <div style={{ maxWidth: 800 }}>
        <div style={{
          background: `linear-gradient(135deg, ${result.accent}, ${result.dark})`,
          borderRadius: 'var(--r-2xl)', padding: '32px', color: 'white', textAlign: 'center',
          marginBottom: 20, boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}>
          <div style={{ fontSize: 60, marginBottom: 8 }}>{result.emoji}</div>
          <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>
            {score}<span style={{ fontSize: 22, opacity: 0.85 }}>/{quiz.length}</span>
          </div>
          <div style={{ fontSize: 19, fontWeight: 900, marginBottom: 4 }}>{result.label}</div>
          <div style={{ fontSize: 14, opacity: 0.92 }}>{pct}% de aciertos</div>
        </div>

        {failures.length > 0 && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--rose-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
              ❌ Lo que fallaste ({failures.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {failures.map((f, i) => (
                <div key={i} style={{
                  background: 'white', border: '2px solid var(--rose)',
                  borderRadius: 'var(--r-lg)', padding: '12px 16px',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--rose-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
                    {f.type.icon} {f.type.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                    Prompt: <strong>{f.prompt}</strong>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--rose-dark)', marginBottom: 3 }}>
                    Tu respuesta: <span style={{ textDecoration: 'line-through' }}>{f.userAnswer}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--emerald-dark)' }}>
                      ✓ Correcto: {f.correct}
                    </span>
                    {(f.type.answerKey === 'en' || f.type.answerKey === 'past') && (
                      <button onClick={() => vbSpeak(f.correct)} title="Escuchar" style={{
                        background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 24, height: 24,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" style={{ flex: 1, minWidth: 160 }} onClick={backToConfig}>
            ⚙️ Cambiar modo
          </button>
          <button className="btn btn-primary btn-lg" style={{ flex: 2, minWidth: 220 }} onClick={startQuiz}>
            ↻ REPETIR QUIZ
          </button>
        </div>
      </div>
    );
  }

  // ── Pantalla de pregunta activa ────────────────────────────────────────────
  const ex = quiz[idx];
  const progress = (idx + (picked !== null ? 1 : 0)) / quiz.length;
  const isCorrect = picked === ex.correct;
  const promptIsEnglish = ex.type.promptKey === 'en' || ex.type.promptKey === 'past';

  return (
    <div style={{ maxWidth: 800 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={backToConfig} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)', flexWrap: 'wrap', gap: 6 }}>
            <span>🎯 Quiz de Verbos · Pregunta {idx + 1} / {quiz.length}</span>
            <span style={{ color: 'var(--indigo-dark)' }}>Score: {score} / {quiz.length}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: 'var(--indigo)' }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* Prompt card */}
      <div style={{
        background: 'linear-gradient(135deg, var(--indigo-light), #C7D2FE)',
        border: '2px solid var(--indigo)',
        borderRadius: 'var(--r-2xl)', padding: '24px 26px', marginBottom: 18, textAlign: 'center',
      }}>
        <div style={{ fontSize: 12, fontWeight: 900, color: 'var(--indigo-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
          {ex.type.icon} {ex.type.label}
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'white', borderRadius: 'var(--r-lg)', border: '2px solid var(--indigo)' }}>
          <span style={{ fontSize: 28, fontWeight: 900, color: 'var(--indigo-dark)' }}>{ex.prompt}</span>
          {promptIsEnglish && (
            <button onClick={() => vbSpeak(ex.prompt)} title="Escuchar" style={{
              background: 'var(--indigo)', border: 'none', borderRadius: 8, width: 32, height: 32,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
          )}
        </div>
      </div>

      {/* Options */}
      <div style={{
        display: 'grid', gap: 10,
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        marginBottom: 20,
      }}>
        {ex.options.map((opt, i) => {
          const isThisCorrect = opt === ex.correct;
          const isThisPicked  = opt === picked;
          let bg = 'white', border = 'var(--border-strong)', color = 'var(--text)';
          if (picked !== null) {
            if (isThisCorrect)    { bg = 'var(--emerald-light)'; border = 'var(--emerald)';     color = 'var(--emerald-dark)'; }
            else if (isThisPicked) { bg = 'var(--rose-light)';    border = 'var(--rose)';        color = 'var(--rose-dark)'; }
            else                  { bg = 'white';                 border = 'var(--border)';      color = 'var(--faint)'; }
          }
          return (
            <button key={i} onClick={() => handlePick(opt)} disabled={picked !== null}
              style={{
                background: bg, color, border: `2px solid ${border}`,
                borderRadius: 'var(--r-lg)', padding: '14px 18px',
                fontSize: 16, fontWeight: 800, fontFamily: 'var(--font)',
                cursor: picked !== null ? 'default' : 'pointer',
                boxShadow: '0 3px 0 rgba(0,0,0,0.06)', textAlign: 'left',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                opacity: picked !== null && !isThisCorrect && !isThisPicked ? 0.55 : 1,
                transition: 'all 0.12s',
              }}>
              <span>{opt}</span>
              {picked !== null && isThisCorrect && <span style={{ fontSize: 18 }}>✓</span>}
              {picked !== null && isThisPicked && !isThisCorrect && <span style={{ fontSize: 18 }}>✗</span>}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div style={{
          background: isCorrect ? 'var(--emerald-light)' : 'var(--rose-light)',
          border: `2px solid ${isCorrect ? 'var(--emerald)' : 'var(--rose)'}`,
          borderRadius: 'var(--r-lg)', padding: '14px 18px', marginBottom: 14,
        }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)', marginBottom: 4 }}>
            {isCorrect ? '✓ ¡Correcto!' : '✗ Respuesta correcta:'}
          </div>
          {!isCorrect && (
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--rose-dark)' }}>
              {ex.correct}
            </div>
          )}
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 6 }}>
            <strong>{ex.verb.en}</strong> · pasado: <em>{ex.verb.past}</em> · 🇪🇸 {ex.verb.es}
          </div>
        </div>
      )}

      {picked !== null && (
        <button className="btn btn-lg btn-primary" onClick={handleNext} style={{
          background: isCorrect ? 'var(--emerald)' : 'var(--rose)',
          boxShadow: `0 4px 0 ${isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)'}`,
        }}>
          {idx + 1 >= quiz.length ? 'VER RESULTADOS' : 'SIGUIENTE PREGUNTA →'}
        </button>
      )}
    </div>
  );
}

function VerbsScreen() {
  const [quizActive, setQuizActive]     = React.useState(false);
  const [practiceMode, setPracticeMode] = React.useState(false);
  const [pastMode, setPastMode]         = React.useState(false);
  const [revealed, setRevealed]         = React.useState(() => new Set());

  if (quizActive) {
    return <VerbsQuizScreen onExit={() => setQuizActive(false)}/>;
  }

  function toggleReveal(idx) {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  }

  function speak(text) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  function togglePractice() {
    setPracticeMode(p => !p);
    setRevealed(new Set());
  }
  function togglePast() {
    setPastMode(p => !p);
    setRevealed(new Set());
  }

  function revealAll() { setRevealed(new Set(COMMON_VERBS.map((_, i) => i))); }
  function hideAll()   { setRevealed(new Set()); }

  return (
    <div style={{ maxWidth: 1200 }}>
      {/* Hero */}
      <div style={{
        background: pastMode
          ? 'linear-gradient(135deg, #DC2626, #7F1D1D)'
          : 'linear-gradient(135deg, var(--indigo), var(--violet-dark))',
        borderRadius: 'var(--r-2xl)', padding: '22px 28px', color: 'white',
        marginBottom: 18, boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
        display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
        transition: 'background 0.25s',
      }}>
        <div style={{ fontSize: 38 }}>{pastMode ? '🕰️' : '⚡'}</div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 4 }}>
            Verbos esenciales {pastMode && <span style={{ fontSize: 14, opacity: 0.85 }}>· en pasado</span>}
          </div>
          <div style={{ fontSize: 13, opacity: 0.92, fontWeight: 600, lineHeight: 1.5 }}>
            <strong>{COMMON_VERBS.length} verbos</strong> ordenados alfabéticamente con su traducción.
            Cambia entre presente y pasado, y activa la práctica para comprobarte.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={togglePast} style={{
            background: pastMode ? 'white' : 'rgba(255,255,255,0.18)',
            color: pastMode ? '#DC2626' : 'white',
            border: '2px solid rgba(255,255,255,0.45)',
            borderRadius: 999, padding: '10px 16px',
            fontSize: 13, fontWeight: 900, cursor: 'pointer', fontFamily: 'var(--font)',
            letterSpacing: '0.02em', whiteSpace: 'nowrap',
          }}>
            {pastMode ? '✓ Forma pasado' : '🕰️ Ver en pasado'}
          </button>
          <button onClick={togglePractice} style={{
            background: practiceMode ? '#FCD34D' : 'rgba(255,255,255,0.18)',
            color: practiceMode ? '#92400E' : 'white',
            border: '2px solid rgba(255,255,255,0.45)',
            borderRadius: 999, padding: '10px 16px',
            fontSize: 13, fontWeight: 900, cursor: 'pointer', fontFamily: 'var(--font)',
            letterSpacing: '0.02em', whiteSpace: 'nowrap',
          }}>
            {practiceMode ? '✓ Revelar/ocultar' : '👀 Revelar/ocultar'}
          </button>
          <button onClick={() => setQuizActive(true)} style={{
            background: 'white', color: 'var(--indigo-dark)',
            border: '2px solid white',
            borderRadius: 999, padding: '10px 18px',
            fontSize: 13, fontWeight: 900, cursor: 'pointer', fontFamily: 'var(--font)',
            letterSpacing: '0.02em', whiteSpace: 'nowrap',
            boxShadow: '0 4px 0 rgba(0,0,0,0.18)',
          }}>
            🎯 Quiz Interactivo
          </button>
        </div>
      </div>

      {/* Practice toolbar */}
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
            {revealed.size} / {COMMON_VERBS.length} reveladas
          </div>
          <button onClick={revealed.size === COMMON_VERBS.length ? hideAll : revealAll} style={{
            background: 'white', border: '1.5px solid var(--amber)', color: 'var(--amber-dark)',
            borderRadius: 999, padding: '5px 12px', fontSize: 11.5, fontWeight: 800,
            cursor: 'pointer', fontFamily: 'var(--font)', whiteSpace: 'nowrap',
          }}>
            {revealed.size === COMMON_VERBS.length ? 'Ocultar todas' : 'Revelar todas'}
          </button>
        </div>
      )}

      {/* Grid responsivo: auto-fit con celdas mínimas de 180px */}
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
        {COMMON_VERBS.map((v, i) => {
          const isHidden   = practiceMode && !revealed.has(i);
          const isRevealed = practiceMode && revealed.has(i);
          const display    = pastMode ? v.past : v.en;
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
              <button onClick={(e) => { e.stopPropagation(); speak(display); }}
                title={`Escuchar "${display}"`}
                style={{
                  background: pastMode ? '#FEE2E2' : 'var(--indigo-light)', border: 'none',
                  borderRadius: 6, padding: 0, cursor: 'pointer',
                  width: 22, height: 22, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: pastMode ? '#7F1D1D' : 'var(--indigo-dark)',
                }}>
                <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 16, fontWeight: 900, lineHeight: 1.2,
                  color: pastMode ? '#9F1239' : 'var(--text)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {display}
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 600, lineHeight: 1.25, marginTop: 1,
                  background: isHidden ? 'var(--border-strong)' : 'transparent',
                  color: isHidden ? 'transparent' : 'var(--muted)',
                  borderRadius: 4,
                  userSelect: isHidden ? 'none' : 'auto',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {isHidden ? '••••••' : v.es}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footnote */}
      <div style={{ marginTop: 14, fontSize: 12, fontWeight: 600, color: 'var(--faint)', textAlign: 'center' }}>
        💡 Toca el botón 🔊 para escuchar la pronunciación. Los verbos van en orden alfabético.
      </div>
    </div>
  );
}

window.VerbsScreen = VerbsScreen;
