// Lesson screen — full page, desktop-first
function LessonScreen({ exercises, unitTitle, theme, onExit, onComplete, user, setUser, onTheory, help, isExam }) {
  const [idx, setIdx] = React.useState(0);
  const [state, setState] = React.useState('answering');
  const [hearts, setHearts] = React.useState(user.hearts);
  const [score, setScore] = React.useState({ correct: 0, total: 0 });
  const [shake, setShake] = React.useState(false);
  const [showHelp, setShowHelp] = React.useState(false); // ayuda mantener-presionado

  const ex = exercises[idx];
  const progress = (idx + (state !== 'answering' ? 1 : 0)) / exercises.length;
  const isLast = idx === exercises.length - 1;

  function handleResult(correct) {
    if (correct) {
      setState('correct');
      setScore(s => ({ correct: s.correct + 1, total: s.total + 1 }));
    } else {
      setState('wrong');
      setHearts(h => Math.max(0, h - 1));
      setScore(s => ({ correct: s.correct, total: s.total + 1 }));
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  function next() {
    if (isLast) {
      setUser(u => ({ ...u, hearts, xp: u.xp + 10, xpToday: u.xpToday + 10 }));
      onComplete({ correct: score.correct, total: score.total, xp: 10 });
    } else {
      setIdx(idx + 1);
      setState('answering');
    }
  }

  // Omitir la dinámica actual sin responder. Herramienta SOLO para admin
  // (el botón que la dispara solo se muestra a usuarios con rol admin).
  function skip() {
    if (isLast) onComplete({ correct: score.correct, total: score.total, xp: 0 });
    else { setIdx(idx + 1); setState('answering'); }
  }

  const feedbackBg = state === 'correct' ? 'var(--emerald-light)' : state === 'wrong' ? 'var(--rose-light)' : 'white';
  const feedbackColor = state === 'correct' ? 'var(--emerald-dark)' : 'var(--rose-dark)';

  return (
    <div className="lesson-layout">
      {/* Top bar — fondo tintado con el color del tema para diferenciar el área */}
      <div className="lesson-topbar" style={theme ? {
        background: `linear-gradient(180deg, ${theme.color}1f, ${theme.color}0a)`,
        borderBottom: `2px solid ${theme.color}` } : undefined}>
        <button onClick={onExit} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          {unitTitle && <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{unitTitle}</div>}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: theme ? theme.color : undefined }}/>
          </div>
        </div>
        {onTheory && (
          <button onClick={onTheory} title="Ver teoría de este tema" style={{
            background: 'var(--indigo-light)', color: 'var(--indigo-dark)',
            border: '1px solid var(--border)', borderRadius: 'var(--r-sm)',
            padding: '6px 10px', cursor: 'pointer', fontFamily: 'var(--font)',
            fontWeight: 900, fontSize: 12, display: 'inline-flex', alignItems: 'center',
            gap: 4, whiteSpace: 'nowrap', marginRight: 4,
          }}>📖 Teoría</button>
        )}
        {/* Ayuda: muestra/oculta una ventana normal con teoría + estructura */}
        {help && !isExam && (
          <button onClick={() => setShowHelp(h => !h)}
            title="Mostrar u ocultar la ayuda"
            style={{
              background: showHelp ? 'var(--indigo)' : 'var(--indigo-light)',
              color: showHelp ? 'white' : 'var(--indigo-dark)',
              border: '1px solid var(--indigo)', borderRadius: 'var(--r-sm)',
              padding: '6px 10px', cursor: 'pointer', fontFamily: 'var(--font)',
              fontWeight: 900, fontSize: 12, whiteSpace: 'nowrap',
            }}>{showHelp ? '✕ Ocultar ayuda' : '💡 Mostrar ayuda'}</button>
        )}
        {/* Botón para omitir dinámica — SOLO admin */}
        {window.Auth && window.Auth.isAdmin() && (
          <button onClick={skip} title="Omitir dinámica (solo admin)" style={{
            background: '#FEF3C7', color: '#92400E', border: '1px solid #FCD34D',
            borderRadius: 'var(--r-sm)', padding: '6px 10px', cursor: 'pointer',
            fontFamily: 'var(--font)', fontWeight: 900, fontSize: 12, whiteSpace: 'nowrap',
          }}>⏭ Omitir</button>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 900, color: 'var(--rose)', fontSize: 16 }}>
          ❤️ {hearts}
        </div>
      </div>

      {/* Exercise */}
      <div className="lesson-body" style={{ background: feedbackBg, transition: 'background 0.2s' }}>
        <div style={{ width: '100%', maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Grumpy + indicador del TEMA que se está practicando (antes de la dinámica) */}
          {theme && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, marginBottom: 44 }}>
              <img className="breathe" src="assets/characters/grumpy.png" alt="Grumpy" loading="lazy"
                style={{ width: 64, height: 'auto', filter: 'drop-shadow(0 5px 8px rgba(15,23,42,0.18))',
                         userSelect: 'none', pointerEvents: 'none' }}/>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
                background: theme.color, color: 'white',
                borderRadius: 999, padding: '5px 14px', fontSize: 12.5, fontWeight: 900,
                boxShadow: `0 2px 0 ${theme.shadow || theme.color}` }}>
                <span style={{ fontSize: 14 }}>{theme.emoji}</span>{theme.title}
              </div>
            </div>
          )}
          {showHelp && help && !isExam && (
            <HelpWindow help={help} onClose={() => setShowHelp(false)}/>
          )}
          <div className={`exercise-wrap${shake ? ' shake' : ''}`}>
            <ExerciseBody key={idx} ex={ex} state={state} onResult={handleResult}/>
          </div>
        </div>
      </div>

      {/* Footer */}
      {state === 'answering' ? null : (
        <div className="feedback-footer" style={{ background: feedbackBg, transition: 'background 0.2s' }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: state === 'correct' ? 'var(--emerald)' : 'var(--rose)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {state === 'correct'
              ? <svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 12l5 5 9-11" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
            }
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: feedbackColor }}>
              {state === 'correct' ? '¡Excelente!' : '¡Casi! La respuesta correcta:'}
            </div>
            {state === 'wrong' && (
              <div style={{ fontSize: 15, color: feedbackColor, fontWeight: 700, marginTop: 2 }}>
                {ex.options?.find(o => o.correct)?.text || ex.answer?.filter(w => w !== '.').join(' ')}
              </div>
            )}
            {ex.explain && (
              <div style={{ fontSize: 13, color: feedbackColor, opacity: 0.85, marginTop: 4 }}>
                {ex.explain}
              </div>
            )}
          </div>
          <button
            className={`btn btn-lg${state === 'correct' ? ' btn-success' : ' btn-danger'}`}
            style={{ width: 'auto', padding: '12px 32px' }}
            onClick={next}>
            {isLast ? 'TERMINAR' : 'CONTINUAR'}
          </button>
        </div>
      )}

    </div>
  );
}

// Ventana de ayuda con estilo de NOTA / comentario (diseño secundario).
function HelpWindow({ help, onClose }) {
  const label = (t) => (
    <div style={{ fontSize: 10, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase',
      letterSpacing: '0.06em', marginBottom: 4 }}>{t}</div>
  );
  return (
    <div style={{ background: '#FBFAF7', border: '1px dashed var(--border-strong)',
      borderLeft: '3px solid var(--amber)', borderRadius: 'var(--r-md)', padding: '12px 14px',
      color: 'var(--muted)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--muted)' }}>
          💬 Nota de ayuda · <span style={{ color: 'var(--text)', fontWeight: 900 }}>{help.title}</span>
          {help.aux && <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', color: 'var(--amber-dark)' }}> ({help.aux})</span>}
        </div>
        <button onClick={onClose} aria-label="Cerrar ayuda" style={{ background: 'none', border: 'none',
          cursor: 'pointer', fontSize: 15, color: 'var(--faint)', padding: 2 }}>✕</button>
      </div>

      {/* Pronombre → auxiliar (temas de tiempos verbales) */}
      {help.pronouns && help.pronouns.length > 0 && (
        <div style={{ marginBottom: 10 }}>
          {label('Auxiliar por pronombre')}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {help.pronouns.map((r, i) => (
              <span key={i} style={{ fontSize: 12, fontWeight: 700, background: 'white',
                border: '1px solid var(--border)', borderRadius: 999, padding: '2px 8px' }}>
                {r.p} → <span style={{ fontWeight: 900, color: 'var(--amber-dark)',
                  fontFamily: 'ui-monospace, Menlo, monospace' }}>{r.aux}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Estructura (compacta) */}
      {help.structure && (
        <div style={{ marginBottom: 10 }}>
          {label('Estructura')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[['✅', help.structure.affirmative], ['❌', help.structure.negative], ['❓', help.structure.question]].map((r, i) => (
              <div key={i} style={{ fontSize: 12.5, lineHeight: 1.45 }}>
                {r[0]} <span style={{ fontWeight: 700, color: 'var(--text)',
                  fontFamily: 'ui-monospace, Menlo, monospace' }}>{r[1]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Uso */}
      {help.usage && (
        <div style={{ marginBottom: 10 }}>
          {label('Uso')}
          <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.5 }}>{help.usage}</div>
        </div>
      )}

      {/* Ejemplo con traducción */}
      {help.example && (
        <div>
          {label('Ejemplo')}
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)', fontStyle: 'italic' }}>
            "{help.example.en}"
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 600 }}>{help.example.es}</div>
        </div>
      )}
    </div>
  );
}

function ExerciseBody({ ex, state, onResult }) {
  // Blindaje: si no hay ejercicio o el tipo no existe, no rompemos la pantalla.
  if (!ex) {
    return (
      <div style={{ textAlign: 'center', color: 'var(--muted)', fontWeight: 700, padding: 40 }}>
        Esta práctica aún no tiene ejercicios. 🛠️
      </div>
    );
  }
  if (ex.type === 'translate-pick')  return <TranslatePick ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'pick-card')       return <PickCard ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'fill-blank')      return <FillBlank ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'word-bank')       return <WordBank ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'describe-image')  return <WordBank ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'listen-pick')     return <ListenPick ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'transform-pick')  return <TransformPick ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'identify-tense')  return <IdentifyTense ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'match-pairs')     return <MatchPairs ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'select-option')   return <SelectOption ex={ex} state={state} onResult={onResult}/>;
  if (ex.type === 'select-image')    return <SelectImage ex={ex} state={state} onResult={onResult}/>;
  return (
    <div style={{ textAlign: 'center', color: 'var(--muted)', fontWeight: 700, padding: 40 }}>
      Tipo de ejercicio no disponible.
    </div>
  );
}

// ─── Translate Pick
function TranslatePick({ ex, state, onResult }) {
  const [picked, setPicked] = React.useState(null);
  const locked = state !== 'answering';

  function speak() {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(ex.sentence);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        {ex.prompt}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28,
        padding: '18px 20px', background: 'var(--indigo-light)', borderRadius: 'var(--r-xl)',
        border: '2px solid var(--indigo)', borderOpacity: 0.3,
      }}>
        {ex.audio && (
          <button className="speaker-btn" onClick={speak}>
            <svg width="26" height="26" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </button>
        )}
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--indigo-dark)', flex: 1 }}>{ex.sentence}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ minHeight: 60, display: 'flex', alignItems: 'center' }}>
              {o.text}
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Pick Card (pronoun cards with hint)
function PickCard({ ex, state, onResult }) {
  const [picked, setPicked] = React.useState(null);
  const locked = state !== 'answering';

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        {ex.prompt}
      </div>
      <div style={{
        padding: '16px 20px', borderRadius: 'var(--r-xl)', marginBottom: 24,
        background: 'var(--amber-light)', border: '2px solid var(--amber)',
        fontSize: 17, fontWeight: 700,
      }}>
        {ex.context}
        {ex.contextHighlight && (
          <span style={{ background: 'var(--amber)', borderRadius: 'var(--r-sm)', padding: '2px 6px', marginLeft: 4 }}>
            {ex.contextHighlight}
          </span>
        )}
        {' → ___ are happy.'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ fontSize: 24, fontWeight: 900 }}>{o.text}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{o.hint}</div>
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Fill Blank
function FillBlank({ ex, state, onResult }) {
  const [picked, setPicked] = React.useState(null);
  const locked = state !== 'answering';

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        {ex.prompt}
      </div>
      <div style={{
        padding: '20px 24px', borderRadius: 'var(--r-xl)', marginBottom: 24,
        border: '2px solid var(--border)', fontSize: 22, fontWeight: 700, lineHeight: 1.8,
      }}>
        {ex.sentence.map((part, i) => {
          if (part === null) {
            const opt = ex.options.find(o => o.id === picked);
            return (
              <span key={i} style={{
                display: 'inline-block', minWidth: 80, borderBottom: `3px solid ${picked ? 'var(--indigo)' : 'var(--border-strong)'}`,
                color: 'var(--indigo)', fontWeight: 900, padding: '0 8px', marginRight: 4,
              }}>{opt?.text || ' '}</span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ flex: '1 1 120px', textAlign: 'center', fontSize: 17 }}>
              {o.text}
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Word Bank
function WordBank({ ex, state, onResult }) {
  const [used, setUsed] = React.useState([]);
  const locked = state !== 'answering';

  function tap(i) {
    if (locked) return;
    setUsed(used.includes(i) ? used.filter(u => u !== i) : [...used, i]);
  }

  function check() {
    const built = used.map(i => ex.bank[i]);
    onResult(JSON.stringify(built) === JSON.stringify(ex.answer));
  }

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
        {ex.prompt}
      </div>
      {ex.image && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <DynImg src={ex.image} size={150}/>
        </div>
      )}
      {ex.spanish && (
        <div style={{ fontSize: 17, color: 'var(--muted)', fontWeight: 700, marginBottom: 20 }}>
          "{ex.spanish}"
        </div>
      )}
      {/* Built sentence */}
      <div style={{
        minHeight: 72, padding: 14, marginBottom: 20,
        borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)',
        display: 'flex', flexWrap: 'wrap', gap: 8, alignContent: 'flex-start',
      }}>
        {used.map(i => (
          <button key={i} onClick={() => tap(i)} style={{
            padding: '8px 14px', borderRadius: 'var(--r-md)', fontWeight: 700, fontSize: 15,
            background: 'var(--indigo-light)', border: '2px solid var(--indigo)',
            cursor: 'pointer', fontFamily: 'var(--font)',
          }}>
            {ex.bank[i]}
          </button>
        ))}
        {used.length === 0 && (
          <span style={{ color: 'var(--faint)', fontStyle: 'italic', fontSize: 14, alignSelf: 'center' }}>
            Toca las palabras para construir la frase...
          </span>
        )}
      </div>
      {/* Word bank */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {ex.bank.map((w, i) => (
          <button key={i} onClick={() => tap(i)} style={{
            padding: '8px 14px', borderRadius: 'var(--r-md)', fontWeight: 700, fontSize: 15,
            background: used.includes(i) ? 'var(--border)' : 'white',
            border: '2px solid var(--border)', cursor: 'pointer', fontFamily: 'var(--font)',
            color: used.includes(i) ? 'var(--faint)' : 'var(--text)',
            textDecoration: used.includes(i) ? 'line-through' : 'none',
          }}>
            {w}
          </button>
        ))}
      </div>
      {!locked && <CheckBar disabled={used.length === 0} onCheck={check}/>}
    </div>
  );
}

// ─── Listen Pick
function ListenPick({ ex, state, onResult }) {
  const [picked, setPicked] = React.useState(null);
  const locked = state !== 'answering';

  function play(slow = false) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(ex.audioText);
      u.lang = 'en-US'; u.rate = slow ? 0.5 : 0.85;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }
  React.useEffect(() => { setTimeout(() => play(), 400); }, []);

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 24 }}>
        {ex.prompt}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <button onClick={() => play(false)} style={{
          width: 100, height: 100, borderRadius: '50%', border: 'none',
          background: 'var(--sky)', boxShadow: '0 6px 0 var(--sky-dark)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="44" height="44" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4M19 5c2.5 1.5 4 4 4 7s-1.5 5.5-4 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
        <button onClick={() => play(true)} style={{
          padding: '8px 16px', borderRadius: 'var(--r-md)', border: '2px solid var(--border)',
          background: 'white', cursor: 'pointer', fontWeight: 800, fontSize: 13,
          color: 'var(--sky-dark)', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font)',
        }}>
          🐢 REPETIR LENTO
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ fontSize: 16 }}>
              {o.text}
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Transform Pick (convert sentence to another tense)
function TransformPick({ ex, state, onResult }) {
  const [picked, setPicked] = React.useState(null);
  const locked = state !== 'answering';

  function speak() {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(ex.source);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        {ex.prompt}
      </div>
      {/* Source sentence */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10,
        padding: '16px 20px', background: 'var(--amber-light)', borderRadius: 'var(--r-xl)', border: '2px solid var(--amber)' }}>
        {ex.audio !== false && (
          <button className="speaker-btn" style={{ background: 'var(--amber-dark)', boxShadow: '0 3px 0 #92400E' }} onClick={speak}>
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </button>
        )}
        <div style={{ fontSize: 19, fontWeight: 700, color: '#92400E', flex: 1 }}>{ex.source}</div>
      </div>
      {/* Arrow */}
      <div style={{ textAlign: 'center', fontSize: 22, color: 'var(--faint)', margin: '6px 0 14px' }}>↓</div>
      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ fontSize: 16 }}>
              {o.text}
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Identify Tense (pick the tense name)
function IdentifyTense({ ex, state, onResult }) {
  const [picked, setPicked] = React.useState(null);
  const locked = state !== 'answering';

  function speak() {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(ex.sentence);
      u.lang = 'en-US'; u.rate = 0.9;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    }
  }

  return (
    <div className="fade-up">
      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--sky-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        {ex.prompt || '¿Qué tiempo verbal es esta oración?'}
      </div>
      {/* Sentence */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28,
        padding: '18px 22px', background: 'var(--indigo-light)', borderRadius: 'var(--r-xl)', border: '2px solid var(--indigo)' }}>
        <button className="speaker-btn" onClick={speak}>
          <svg width="22" height="22" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--indigo-dark)', flex: 1, fontStyle: 'italic' }}>"{ex.sentence}"</div>
      </div>
      {/* Tense options — 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ textAlign: 'center', padding: '18px 12px', fontSize: 15, fontWeight: 800 }}>
              {o.text}
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Check Bar (sticky bottom in lesson-body)
function CheckBar({ disabled, onCheck }) {
  return (
    <div style={{ marginTop: 28 }}>
      <button className={`btn btn-lg${disabled ? '' : ' btn-primary'}`}
        disabled={disabled} onClick={onCheck}>
        COMPROBAR
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
//  NUEVAS DINÁMICAS (contenido por estado) — barajado + componentes
// ════════════════════════════════════════════════════════════════════════
function lsShuffle(a) {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}
function DynPrompt({ text }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase',
      letterSpacing: '0.06em', marginBottom: 14 }}>{text}</div>
  );
}
function DynImg({ src, size = 120 }) {
  return <img src={src} alt="" loading="lazy"
    style={{ width: size, height: size, objectFit: 'contain' }}/>;
}
// Personaje (cuando la dinámica no trae imágenes propias).
const DYN_CHARS = ['grumpy', 'snowy', 'speaky', 'sully'];
function DynCharacter({ size = 96 }) {
  const [c] = React.useState(() => DYN_CHARS[Math.floor(Math.random() * DYN_CHARS.length)]);
  return (
    <div className="breathe" style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
      <img src={`assets/characters/${c}.png`} alt="" loading="lazy"
        style={{ width: size, height: 'auto', filter: 'drop-shadow(0 5px 7px rgba(15,23,42,0.14))' }}/>
    </div>
  );
}

// ─── Une los pares (texto ↔ texto o ↔ imágenes)
function MatchPairs({ ex, state, onResult }) {
  const locked = state !== 'answering';
  const N = ex.pairs.length;
  const right = React.useMemo(() => lsShuffle(ex.pairs.map((p, i) => ({ key: i, text: p.r, img: p.rImg }))), []);
  const [selL, setSelL] = React.useState(null);
  const [assign, setAssign] = React.useState({}); // leftIdx -> rightKey
  const usedRight = new Set(Object.values(assign));

  function tapRight(key) {
    if (locked || selL == null) return;
    setAssign(a => { const n = {}; Object.keys(a).forEach(k => { if (a[k] !== key) n[k] = a[k]; }); n[selL] = key; return n; });
    setSelL(null);
  }
  const done = Object.keys(assign).length === N;

  const cellStyle = (o) => ({
    minHeight: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    padding: '10px 12px', borderRadius: 'var(--r-md)', cursor: locked ? 'default' : 'pointer',
    fontWeight: 800, fontSize: 15, textAlign: 'center', fontFamily: 'var(--font)',
    border: `2px solid ${o.border}`, background: o.bg, color: o.color, opacity: o.dim ? 0.4 : 1,
    transition: 'all 0.12s',
  });
  return (
    <div className="fade-up">
      <DynPrompt text={ex.prompt}/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ex.pairs.map((p, i) => {
            const matched = assign[i] != null;
            const ok = locked && assign[i] === i;
            const bad = locked && matched && assign[i] !== i;
            const o = { border: ok ? 'var(--emerald)' : bad ? 'var(--rose)' : selL === i ? 'var(--indigo)' : matched ? 'var(--indigo)' : 'var(--border)',
              bg: ok ? 'var(--emerald-light)' : bad ? 'var(--rose-light)' : selL === i ? 'var(--indigo-light)' : 'white',
              color: 'var(--text)' };
            return (
              <div key={i} style={cellStyle(o)} onClick={() => !locked && setSelL(selL === i ? null : i)}>
                {p.lImg ? <DynImg src={p.lImg} size={64}/> : p.l}
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {right.map(r => {
            const used = usedRight.has(r.key);
            const o = { border: used ? 'var(--indigo)' : 'var(--border)', bg: used ? 'var(--indigo-light)' : 'white', color: 'var(--text)', dim: used };
            return (
              <div key={r.key} style={cellStyle(o)} onClick={() => tapRight(r.key)}>
                {r.img ? <DynImg src={r.img} size={64}/> : r.text}
              </div>
            );
          })}
        </div>
      </div>
      {!locked && <CheckBar disabled={!done} onCheck={() => onResult(ex.pairs.every((_, i) => assign[i] === i))}/>}
    </div>
  );
}

// ─── Selecciona la opción correcta (texto)
function SelectOption({ ex, state, onResult }) {
  const locked = state !== 'answering';
  const [picked, setPicked] = React.useState(null);
  return (
    <div className="fade-up">
      <DynPrompt text={ex.prompt}/>
      {ex.question && (
        <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 18, textAlign: 'center' }}>
          {ex.question}
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {ex.options.map(o => {
          let cls = 'choice-card';
          if (picked === o.id) cls += ' selected';
          if (locked && o.correct) cls += ' correct';
          if (locked && picked === o.id && !o.correct) cls += ' wrong';
          return (
            <div key={o.id} className={cls} onClick={() => !locked && setPicked(o.id)}
              style={{ minHeight: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              {o.text}
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

// ─── Selecciona la imagen correcta (palabra → imagen)
function SelectImage({ ex, state, onResult }) {
  const locked = state !== 'answering';
  const [picked, setPicked] = React.useState(null);
  return (
    <div className="fade-up">
      <DynPrompt text={ex.prompt}/>
      <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--indigo-dark)', textAlign: 'center', marginBottom: 20 }}>
        {ex.word}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(ex.options.length, 3)}, 1fr)`, gap: 12 }}>
        {ex.options.map(o => {
          const sel = picked === o.id;
          const ok = locked && o.correct;
          const bad = locked && sel && !o.correct;
          return (
            <div key={o.id} onClick={() => !locked && setPicked(o.id)} style={{
              border: `3px solid ${ok ? 'var(--emerald)' : bad ? 'var(--rose)' : sel ? 'var(--indigo)' : 'var(--border)'}`,
              background: ok ? 'var(--emerald-light)' : bad ? 'var(--rose-light)' : sel ? 'var(--indigo-light)' : 'white',
              borderRadius: 'var(--r-lg)', padding: 10, cursor: locked ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.12s',
            }}>
              <DynImg src={o.img} size={110}/>
            </div>
          );
        })}
      </div>
      {!locked && <CheckBar disabled={!picked} onCheck={() => onResult(ex.options.find(o => o.id === picked)?.correct)}/>}
    </div>
  );
}

window.LessonScreen = LessonScreen;
