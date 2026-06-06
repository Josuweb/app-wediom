// Hook: ¿viewport angosto? (re-renderiza al cambiar el tamaño/orientación)
function useIsNarrow(bp = 640) {
  const q = `(max-width:${bp}px)`;
  const [narrow, setNarrow] = React.useState(
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false);
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia(q);
    const h = () => setNarrow(mq.matches);
    h();
    mq.addEventListener ? mq.addEventListener('change', h) : mq.addListener(h);
    return () => { mq.removeEventListener ? mq.removeEventListener('change', h) : mq.removeListener(h); };
  }, [q]);
  return narrow;
}

// Home — Camino de aprendizaje secuencial (teoría → práctica) tipo Duolingo
function HomeScreen({ user, units, onStart, onStartLevel }) {
  const narrow = useIsNarrow(640);
  // Re-render cuando se marca una sección como completada
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    const h = () => force();
    window.addEventListener('section-completed', h);
    window.addEventListener('admin-mode-changed', h);
    return () => {
      window.removeEventListener('section-completed', h);
      window.removeEventListener('admin-mode-changed', h);
    };
  }, []);

  const completedSet = getCompletedSections();

  // Computar estado de cada paso del path
  // NOTA: si el paso tiene unidad, la completitud SOLO depende de la unidad.
  // La teoría queda como referencia opcional (no obligatoria).
  const steps = LEARNING_PATH.map(step => {
    const unit       = step.unitId ? units.find(u => u.id === step.unitId) : null;
    const unitProg   = getUnitProgress(unit);
    const theoryDone = step.theory ? completedSet.has(step.theory) : false;
    const unitDone   = step.unitId ? unitProg.complete : false;
    // Completitud/desbloqueo por NIVELES (3 por tema). Fallback a la lógica vieja.
    const complete = (typeof isThemeComplete === 'function')
      ? isThemeComplete(step.id) : isStepComplete(step, units, completedSet);
    const unlocked = (typeof isLevelUnlockedById === 'function')
      ? isLevelUnlockedById(step.id + '-1') : isStepUnlocked(step.id, units, completedSet);
    const theorySeen = (typeof isTheorySeen === 'function') ? isTheorySeen(step.id) : true;
    return { ...step, unit, unitProg, theoryDone, unitDone, complete, unlocked, theorySeen };
  });

  // Primer paso desbloqueado pendiente = "actual"
  const currentStep = steps.find(s => s.unlocked && !s.complete);

  // Siguiente NIVEL jugable (desbloqueado, no hecho y con contenido). Es el que
  // determina la "próxima parada" — así avanza de Nivel 1 a Nivel 2 dentro del tema.
  const nextLevel = (() => {
    const path = (typeof LEARNING_PATH !== 'undefined') ? LEARNING_PATH : [];
    for (const s of path) {
      const levels = (typeof getThemeLevels === 'function') ? getThemeLevels(s.id) : [];
      for (const lv of levels) {
        const done = (typeof isLevelDone === 'function') && isLevelDone(lv.id);
        const unlocked = (typeof isLevelUnlockedById === 'function') ? isLevelUnlockedById(lv.id) : true;
        if (unlocked && !done && lv.ready) return { step: s, level: lv };
      }
    }
    return null;
  })();

  // Progreso por ESTADOS (2 por tema → 34): los exámenes no cuentan.
  let totalLevels = 0, doneLevels = 0;
  (typeof LEARNING_PATH !== 'undefined' ? LEARNING_PATH : []).forEach(s => {
    const lv = (typeof getThemeLevels === 'function') ? getThemeLevels(s.id) : [];
    lv.filter(l => !l.exam).forEach(l => {
      totalLevels += 1;
      if ((typeof isLevelDone === 'function') && isLevelDone(l.id)) doneLevels += 1;
    });
  });

  function continueLearning() {
    if (nextLevel && onStartLevel) onStartLevel(nextLevel.level);
  }

  return (
    <div style={{ maxWidth: 920, margin: '0 auto' }}>
      {/* Welcome banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--indigo) 0%, var(--violet) 100%)',
        borderRadius: 'var(--r-2xl)', padding: '22px 26px', color: 'white',
        marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        boxShadow: '0 8px 24px rgba(99,102,241,0.3)', flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 4 }}>
            ¡Hola, {user.name}! 👋
          </div>
          <div style={{ fontSize: 13.5, opacity: 0.93, fontWeight: 600, marginBottom: 12 }}>
            {nextLevel
              ? (() => {
                  const lv = nextLevel.level;
                  const hasPlace = lv.city && lv.state;
                  return <>Próxima parada{hasPlace ? <> en <strong>📍 {lv.city}, {lv.state}</strong></> : <>:</>}{' '}
                    <strong>{nextLevel.step.emoji} {nextLevel.step.title}{lv.exam ? ' · Examen Final' : ''}</strong></>;
                })()
              : <>¡Completaste toda la ruta por EE.UU.! 🎉</>}
            {' · '}{user.streak} días de racha 🔥
          </div>
          {nextLevel && (
            <button onClick={continueLearning} style={{
              background: 'white', color: 'var(--indigo-dark)',
              border: 'none', borderRadius: 'var(--r-md)', padding: '10px 20px',
              fontSize: 13.5, fontWeight: 900, cursor: 'pointer', fontFamily: 'var(--font)',
              boxShadow: '0 4px 0 rgba(0,0,0,0.18)',
            }}>
              ▶ CONTINUAR APRENDIENDO
            </button>
          )}
        </div>
        <div className="breathe" style={{ opacity: 0.98 }}>
          <Mascot size={92}/>
        </div>
      </div>

      {/* Meta diaria + progreso del viaje */}
      <div style={{
        display: 'grid', gap: 12, marginBottom: 24,
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      }}>
        <StatPill icon="⚡" label="Meta diaria" value={`${user.xpToday}/${user.goalDaily} XP`}
          progress={Math.min(1, user.xpToday / user.goalDaily)} color="#F59E0B" colorDark="#92400E"/>
        <StatPill icon="🗺️" label="Progreso del viaje" value={`${doneLevels}/${totalLevels} estados`}
          progress={totalLevels ? doneLevels / totalLevels : 0} color="#6366F1" colorDark="#4338CA"/>
      </div>

      {/* Título de la ruta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: narrow ? 10 : 100 }}>
        <span style={{ fontSize: 24 }}>🗺️</span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--text)' }}>Tu ruta por Estados Unidos</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 700 }}>
            Avanza ciudad por ciudad: primero la teoría, luego la práctica.
          </div>
        </div>
      </div>

      {/* Camino continuo único (cada tema con sus 3 niveles) */}
      <StepList steps={steps} currentStepId={currentStep?.id} onStart={onStart} onStartLevel={onStartLevel} charStart={0} narrow={narrow}/>
    </div>
  );
}

// ── Stat pill: tarjeta pequeña con icono + valor + barra de progreso ───────
function StatPill({ icon, label, value, progress, color, colorDark }) {
  return (
    <div style={{
      background: 'white', borderRadius: 'var(--r-xl)', padding: '12px 16px',
      border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 'var(--r-md)',
        background: `${color}22`, color,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
        flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</span>
          <span style={{ fontSize: 12, fontWeight: 900, color: colorDark }}>{value}</span>
        </div>
        <div style={{ height: 6, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            width: `${Math.min(100, progress * 100)}%`, height: '100%',
            background: color, transition: 'width 0.4s ease',
          }}/>
        </div>
      </div>
    </div>
  );
}

function LevelHeader({ level, subtitle, color, bg, done, total }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <div style={{ marginBottom: 14, marginTop: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
        <div style={{
          background: bg, color, fontWeight: 900, fontSize: 14,
          padding: '6px 14px', borderRadius: 999, letterSpacing: '0.05em',
          border: `2px solid ${color}33`,
        }}>NIVEL {level}</div>
        <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 700, flex: 1 }}>
          {subtitle}
        </div>
        <div style={{
          background: 'white', border: `1.5px solid ${color}66`,
          borderRadius: 999, padding: '4px 12px',
          fontSize: 12, fontWeight: 900, color,
        }}>
          {done}/{total} · {pct}%
        </div>
      </div>
      <div style={{ height: 4, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, transition: 'width 0.5s' }}/>
      </div>
    </div>
  );
}

// Personajes que "caminan" por el camino (assets web-seguros).
const PATH_CHARACTERS = [
  { src: 'assets/characters/sully.png',  alt: 'Sully' },
  { src: 'assets/characters/grumpy.png', alt: 'Grumpy' },
  { src: 'assets/characters/speaky.png', alt: 'Speaky' },
  { src: 'assets/characters/snowy.png',  alt: 'Snowy' },
];

// ── Conector con línea punteada DIAGONAL (zigzag) entre cards/examen ─────────
// fromX/toX son posiciones horizontales en % (25=card izq, 50=centro/test, 75=card der)
function StepConnector({ color, done, charIndex, fromX = 50, toX = 50 }) {
  const lineColor = done ? '#10B981' : color;
  const character = charIndex != null ? PATH_CHARACTERS[charIndex % PATH_CHARACTERS.length] : null;
  const H = character ? 104 : 64;
  const midX = (fromX + toX) / 2;
  return (
    <div style={{ position: 'relative', height: H }}>
      <svg width="100%" height={H} style={{ display: 'block', overflow: 'visible' }}
           preserveAspectRatio="none" aria-hidden="true">
        {/* Línea diagonal punteada */}
        <line x1={fromX + '%'} y1="3" x2={toX + '%'} y2={H - 3}
              stroke={lineColor} strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round"
              opacity={done ? 0.8 : 0.5}/>
        {/* Puntos en los extremos */}
        <circle cx={fromX + '%'} cy="3" r="4.5" fill={lineColor} opacity={done ? 0.85 : 0.6}/>
        <circle cx={toX + '%'} cy={H - 3} r="4.5" fill={lineColor} opacity={done ? 0.85 : 0.6}/>
      </svg>
      {character && (
        <img className="breathe" src={character.src} alt={character.alt} loading="lazy"
          style={{ position: 'absolute', top: '50%', left: midX + '%',
                   transform: 'translate(-50%,-50%) translateX(36px)', width: 54, height: 'auto',
                   filter: 'drop-shadow(0 5px 7px rgba(15,23,42,0.16))',
                   pointerEvents: 'none', userSelect: 'none' }}/>
      )}
    </div>
  );
}

// ── Camino: cada TEMA = una fila de 2 cards (estados) + círculo de examen ─────
function StepList({ steps, onStartLevel, narrow }) {
  const themes = steps.map(step => {
    const levels = (typeof getThemeLevels === 'function') ? getThemeLevels(step.id) : [];
    return {
      step,
      cards: levels.filter((l, idx) => idx < 2 && l),
      exam: levels[2] || null,
    };
  }).filter(t => t.cards.length);
  return (
    <div style={{ marginBottom: 30 }}>
      {themes.map((theme, ti) => {
        const examDone = theme.exam && (typeof isLevelDone === 'function') && isLevelDone(theme.exam.id);
        const cardsDone = theme.cards.every(l => (typeof isLevelDone === 'function') && isLevelDone(l.id));
        const card1Done = (typeof isLevelDone === 'function') && theme.cards[0] && isLevelDone(theme.cards[0].id);
        const rowLineColor = theme.step.color;
        // Desfase vertical "aleatorio" pero estable por tema (las 2 cards nunca a la misma altura)
        const OFFSETS = [[-16, 14], [12, -18], [-22, 10], [18, -12], [-10, 20], [14, -16]];
        const ov = OFFSETS[ti % OFFSETS.length];
        const oL = narrow ? 0 : ov[0], oR = narrow ? 0 : ov[1];
        // La línea entre columnas: extremos en el centro de cada card (svg centrado, 40 = mitad)
        const HC = 80, midY = 40, GAP = 120;   // GAP = separación entre columnas y ancho de la línea
        const arc = (ti % 2 === 0 ? 14 : -14);   // pequeña curvatura, alterna sentido
        return (
          <React.Fragment key={theme.step.id}>
            {/* Fila del tema: en móvil 1 columna apilada; en escritorio 2 cards + línea curva */}
            <div style={{ position: 'relative', display: 'grid', justifyContent: 'center',
              gridTemplateColumns: narrow ? '1fr' : 'repeat(auto-fit, minmax(220px, 330px))',
              columnGap: narrow ? 0 : GAP, rowGap: 14 }}>
              {theme.cards.map((level, ci) => (
                <StateLevelCard key={level.id} step={theme.step} level={level}
                  onStartLevel={onStartLevel} offsetY={ci === 0 ? oL : oR}/>
              ))}
              {/* Línea punteada CURVA horizontal entre las dos cards (solo en escritorio) */}
              {!narrow && theme.cards.length === 2 && (
                <svg width={GAP} height={HC} aria-hidden="true"
                  style={{ position: 'absolute', top: '50%', left: '50%',
                           transform: 'translate(-50%,-50%)', overflow: 'visible' }}>
                  <path d={`M 3 ${midY + oL} Q ${GAP / 2} ${midY + (oL + oR) / 2 + arc} ${GAP - 3} ${midY + oR}`}
                        fill="none" stroke={rowLineColor} strokeWidth="3"
                        strokeDasharray="2 9" strokeLinecap="round" opacity={card1Done ? 0.8 : 0.5}/>
                  <circle cx="3" cy={midY + oL} r="4.5" fill={rowLineColor} opacity={card1Done ? 0.85 : 0.6}/>
                  <circle cx={GAP - 3} cy={midY + oR} r="4.5" fill={rowLineColor} opacity={card1Done ? 0.85 : 0.6}/>
                </svg>
              )}
            </div>
            {/* Tramo de examen: en móvil línea vertical centrada; en escritorio diagonal zigzag */}
            {theme.exam && (
              <ExamSegment
                step={theme.step} level={theme.exam} onStartLevel={onStartLevel}
                fromX={narrow ? 50 : 75} viaX={50} toX={narrow ? 50 : 25}
                hasBottom={ti < themes.length - 1}
                charIndex={narrow ? null : ti % PATH_CHARACTERS.length}
                topDone={cardsDone}
                bottomDone={examDone}/>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ¿El color es verdoso? (el verde se reserva solo para cards completadas).
function hmIsGreen(hex) {
  const h = String(hex || '').replace('#', '');
  if (h.length < 6) return false;
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return g > 130 && g > r + 30 && g > b + 20;
}

// ── Card de un NIVEL (estado) con su logo representativo ─────────────────────
function StateLevelCard({ step, level, onStartLevel, offsetY = 0 }) {
  const done = (typeof isLevelDone === 'function') && isLevelDone(level.id);
  const lvUnlocked = (typeof isLevelUnlockedById === 'function') ? isLevelUnlockedById(level.id) : true;
  const ready = level.ready;
  const locked = !lvUnlocked || !ready;
  const usable = lvUnlocked && ready;
  const cur = lvUnlocked && !done && ready;
  // Cada tema usa SU propio color, también cuando está completado (sin verde).
  const accent = step.color;
  const accentDark = step.shadow;
  const cta = !ready ? '⏳ Próximamente' : !lvUnlocked ? '🔒 Bloqueado' : done ? '↻ Repasar' : '▶ Comenzar';
  const imgSrc = level.landmark || level.icon;

  return (
    <div style={{
      position: 'relative',
      background: 'white',
      border: `2px solid ${done || cur ? accent : 'var(--border)'}`,
      borderLeft: `6px solid ${locked ? '#D1D5DB' : accent}`,
      borderRadius: 'var(--r-xl)', overflow: 'hidden',
      boxShadow: cur ? `0 4px 0 ${accentDark}22` : 'var(--shadow-sm)',
      opacity: (!ready || (!lvUnlocked && !done)) ? 0.7 : 1,
      transform: offsetY ? `translateY(${offsetY}px)` : 'none',
    }}>
      <div style={{ padding: '14px 18px',
        filter: locked ? 'blur(2px)' : 'none',
        background: done ? `linear-gradient(90deg,${accent}26,transparent)` : cur ? `linear-gradient(90deg,${accent}15,transparent)` : 'transparent' }}>
        {/* Título del tema (pequeño) + icono de teoría — centrado */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.2, textAlign: 'center',
            color: 'var(--faint)' }}>
            {step.emoji} {step.title}
          </div>
          <TheoryTagButton step={step} accent={accent} inline/>
        </div>
        {/* Imagen del lugar + nivel + ubicación */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 92, height: 92, borderRadius: '50%', flexShrink: 0, overflow: 'hidden',
            position: 'relative', background: 'var(--bg)',
            border: `3px solid ${accent}` }}>
            {imgSrc
              ? <img src={imgSrc} alt={level.state} loading="lazy"
                     style={{ display: 'block', width: '100%', height: '100%',
                              objectFit: 'cover', objectPosition: 'center',
                              transform: 'scale(1.32)' }}/>
              : <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                               width: '100%', height: '100%', fontSize: 30 }}>{step.emoji}</span>}
            {done && (
              <span style={{ position: 'absolute', inset: 0, background: `${accent}A6`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: 28, fontWeight: 900, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>✓</span>
            )}
          </div>
          <div style={{ minWidth: 0, textAlign: 'center' }}>
            {(() => {
              const parts = String(level.label || '').split(' · ');
              const tier = parts[0];                 // "Nivel 1"
              const place = parts.slice(1).join(' · '); // "California"
              return (
                <>
                  <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '0.04em',
                    textTransform: 'uppercase', color: 'var(--faint)' }}>
                    {tier}
                  </div>
                  {place && (
                    <div style={{ fontSize: 19, fontWeight: 900, letterSpacing: '0.03em', textTransform: 'uppercase',
                      color: locked ? 'var(--faint)' : accent, marginTop: 1 }}>
                      {place}
                    </div>
                  )}
                </>
              );
            })()}
            {level.city && (
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--muted)', marginTop: 3,
                transform: 'translateX(-5px)' }}>📍 {level.city}</div>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: '0 18px 16px', filter: locked ? 'blur(2px)' : 'none' }}>
        {(() => {
          const isStart = usable && !done;   // "Comenzar" → acción principal (destacada)
          const isReview = done;             // "Repasar" → secundaria (discreta)
          return (
            <button onClick={() => usable && onStartLevel && onStartLevel(level)} disabled={!usable}
              onMouseEnter={e => {
                if (!usable) return;
                if (isStart) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 0 ${accentDark}`; }
                else if (isReview) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.background = `${accent}14`; }
              }}
              onMouseLeave={e => {
                if (isStart) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 0 ${accentDark}`; }
                else if (isReview) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'white'; }
              }}
              style={{
                width: '100%', fontFamily: 'var(--font)', textAlign: 'center',
                cursor: usable ? 'pointer' : 'not-allowed',
                background: isStart ? accent : isReview ? 'white' : '#E5E7EB',
                color: isStart ? 'white' : isReview ? accent : 'var(--faint)',
                border: isReview ? `2px solid ${accent}` : '2px solid transparent',
                fontSize: isStart ? 15.5 : 13,
                fontWeight: 900,
                letterSpacing: isStart ? '0.04em' : '0',
                textTransform: isStart ? 'uppercase' : 'none',
                padding: isStart ? '13px 16px' : '9px 16px',
                borderRadius: 'var(--r-md)',
                transform: 'translateY(0)',
                boxShadow: isStart ? `0 4px 0 ${accentDark}` : 'none',
                transition: 'transform 0.12s, box-shadow 0.12s, background 0.12s',
              }}>{cta}</button>
          );
        })()}
      </div>
    </div>
  );
}

// Icono de teoría: arriba a la derecha de la card (mismo padding que el botón),
// con etiqueta (tag) al pasar el cursor.
function TheoryTagButton({ step, accent, inline }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={inline
      ? { position: 'relative', flexShrink: 0, zIndex: 5 }
      : { position: 'absolute', top: 12, right: 18, zIndex: 5 }}>
      <button onClick={() => window.dispatchEvent(new CustomEvent('go-mode', { detail: step.theory }))}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        aria-label="Ver teoría del tema"
        style={inline
          ? { border: 'none', outline: 'none', borderRadius: 100, background: hover ? `${accent}1f` : 'transparent',
              cursor: 'pointer', lineHeight: 0, padding: 10, display: 'flex',
              alignItems: 'center', justifyContent: 'center', transition: 'all 0.12s' }
          : { width: 38, height: 38, border: `2px solid ${hover ? accent : 'var(--border)'}`,
              borderRadius: 'var(--r-md)', background: hover ? `${accent}12` : 'white', cursor: 'pointer',
              fontSize: 19, lineHeight: 1, padding: 0, display: 'flex', alignItems: 'center',
              justifyContent: 'center', boxShadow: 'var(--shadow-sm)', transition: 'all 0.12s' }}>
        {inline
          ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke={hover ? accent : '#9CA3AF'} strokeWidth="2.2" strokeLinecap="round"
                 strokeLinejoin="round" style={{ transition: 'stroke 0.12s' }}>
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="11" x2="12" y2="16"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          : '📖'}
      </button>
      {hover && (
        <span style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          background: 'var(--text)', color: 'white', fontSize: 11.5, fontWeight: 800,
          padding: '5px 9px', borderRadius: 6, whiteSpace: 'nowrap', zIndex: 10,
          boxShadow: 'var(--shadow-md)' }}>
          Ver teoría
          <span style={{ position: 'absolute', bottom: '100%', right: 14, width: 0, height: 0,
            borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
            borderBottom: '5px solid var(--text)' }}/>
        </span>
      )}
    </div>
  );
}

// ── Examen del tema = círculo de fuego "Test [tema]" ─────────────────────────
function ExamCircle({ step, level, onStartLevel }) {
  const done = (typeof isLevelDone === 'function') && isLevelDone(level.id);
  const lvUnlocked = (typeof isLevelUnlockedById === 'function') ? isLevelUnlockedById(level.id) : true;
  const ready = level.ready;
  const usable = lvUnlocked && ready;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, margin: '6px 0' }}>
      <button onClick={() => usable && onStartLevel && onStartLevel(level)} disabled={!usable}
        title={usable ? `Examen Final - ${step.title}` : 'Completa los niveles anteriores'}
        style={{
          width: 92, height: 92, borderRadius: '50%', border: '3px solid white',
          background: done ? 'linear-gradient(135deg,#F59E0B,#B45309)'
            : usable ? 'linear-gradient(135deg,#F97316,#DC2626)' : '#E5E7EB',
          color: 'white', fontSize: 36, cursor: usable ? 'pointer' : 'not-allowed',
          boxShadow: usable ? '0 8px 20px rgba(220,38,38,0.4)' : 'var(--shadow-sm)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          filter: (!usable && !done) ? 'grayscale(0.4)' : 'none',
          opacity: (!ready || (!lvUnlocked && !done)) ? 0.6 : 1,
        }}>{done ? '✓' : (usable ? '🔥' : '🔒')}</button>
      <div style={{ fontSize: 12.5, fontWeight: 900, color: usable || done ? '#B45309' : 'var(--faint)' }}>
        🔥 Examen Final - {step.title}
      </div>
    </div>
  );
}

// ── Tramo de examen: diagonal que ATRAVIESA el círculo Test por su centro ─────
// fromX (arriba) → viaX (centro = Test) → toX (abajo). El círculo se superpone
// sobre el cruce central, de modo que la línea entra y sale por su centro.
function ExamSegment({ step, level, onStartLevel, fromX, viaX, toX, hasBottom, charIndex, topDone, bottomDone }) {
  const done = (typeof isLevelDone === 'function') && isLevelDone(level.id);
  const lvUnlocked = (typeof isLevelUnlockedById === 'function') ? isLevelUnlockedById(level.id) : true;
  const ready = level.ready;
  const usable = lvUnlocked && ready;
  const topH = 78, R = 46, bottomH = 84;
  const centerY = topH + R;
  const totalH = topH + 2 * R + (hasBottom ? bottomH : 40);
  const topColor = step.color;
  const botColor = step.color;
  const character = charIndex != null ? PATH_CHARACTERS[charIndex % PATH_CHARACTERS.length] : null;
  // Punto sobre la curva superior (t≈0.5 de la bézier cuadrática) para el personaje
  const charMidX = 0.25 * fromX + 0.5 * fromX + 0.25 * viaX;     // ≈ 68.75
  const charMidY = 0.25 * 4 + 0.75 * centerY;
  return (
    <div style={{ position: 'relative', height: totalH }}>
      <svg width="100%" height={totalH} viewBox={`0 0 100 ${totalH}`} preserveAspectRatio="none"
           style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
        {/* Curva superior: card derecha → centro (Test), bombeada a la derecha */}
        <path d={`M ${fromX} 4 Q ${fromX} ${centerY} ${viaX} ${centerY}`} fill="none"
              stroke={topColor} strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round"
              vectorEffect="non-scaling-stroke" opacity={topDone ? 0.8 : 0.5}/>
        {/* Curva inferior: centro (Test) → card izquierda, bombeada a la izquierda */}
        {hasBottom && (
          <path d={`M ${viaX} ${centerY} Q ${toX} ${centerY} ${toX} ${totalH - 4}`} fill="none"
                stroke={botColor} strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round"
                vectorEffect="non-scaling-stroke" opacity={bottomDone ? 0.8 : 0.5}/>
        )}
      </svg>
      {/* Puntos redondos en los extremos (HTML para que no se deformen) */}
      <span style={{ position: 'absolute', left: fromX + '%', top: 4, transform: 'translate(-50%,-50%)',
                     width: 9, height: 9, borderRadius: '50%', background: topColor,
                     opacity: topDone ? 0.85 : 0.6 }}/>
      {hasBottom && (
        <span style={{ position: 'absolute', left: toX + '%', top: totalH - 4, transform: 'translate(-50%,-50%)',
                       width: 9, height: 9, borderRadius: '50%', background: botColor,
                       opacity: bottomDone ? 0.85 : 0.6 }}/>
      )}
      {/* Personaje caminando sobre la diagonal superior */}
      {character && (
        <img className="breathe" src={character.src} alt={character.alt} loading="lazy"
          style={{ position: 'absolute', top: charMidY, left: charMidX + '%',
                   transform: 'translate(-50%,-50%) translateX(36px)', width: 54, height: 'auto',
                   filter: 'drop-shadow(0 5px 7px rgba(15,23,42,0.16))',
                   pointerEvents: 'none', userSelect: 'none' }}/>
      )}
      {/* Círculo de fuego "Test" superpuesto sobre el centro de la diagonal */}
      <div style={{ position: 'absolute', top: centerY, left: viaX + '%',
                    transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 6 }}>
        <button onClick={() => usable && onStartLevel && onStartLevel(level)} disabled={!usable}
          title={usable ? `Examen Final - ${step.title}` : 'Completa los niveles anteriores'}
          style={{
            width: 2 * R, height: 2 * R, borderRadius: '50%', border: '3px solid white',
            background: (done || usable) ? `linear-gradient(135deg,${step.color},${step.shadow})` : '#E5E7EB',
            color: 'white', fontSize: 46, cursor: usable ? 'pointer' : 'not-allowed',
            boxShadow: usable ? `0 8px 20px ${step.color}66` : 'var(--shadow-sm)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            filter: (!usable && !done) ? 'grayscale(0.4)' : 'none',
            opacity: (!ready || (!lvUnlocked && !done)) ? 0.6 : 1,
          }}>{done ? '✓' : (usable ? '🔥' : '🔒')}</button>
        <div style={{ fontSize: 12.5, fontWeight: 900, whiteSpace: 'nowrap',
                      color: usable || done ? step.color : 'var(--faint)',
                      textShadow: '0 1px 3px white, 0 0 6px white' }}>
          🔥 Examen Final - {step.title}
        </div>
      </div>
    </div>
  );
}

// ── Tarjeta de UN paso del path (teoría + práctica) ────────────────────────
function StepCard({ step, index, isCurrent, onStart, onStartLevel }) {
  const locked = !step.unlocked;
  const complete = step.complete;
  const st = (typeof getStateForStep === 'function') ? getStateForStep(step.id) : null;

  function openTheory() {
    if (locked || !step.theory) return;
    if (typeof markTheorySeen === 'function') markTheorySeen(step.id);
    window.dispatchEvent(new CustomEvent('go-mode', { detail: step.theory }));
  }
  function openPractice() {
    if (locked || !step.unit) return;
    onStart(step.unit);
  }

  return (
    <div style={{
      background: 'white',
      border: `2px solid ${complete ? 'var(--emerald)' : isCurrent ? step.color : 'var(--border)'}`,
      borderLeft: `6px solid ${locked ? '#D1D5DB' : complete ? 'var(--emerald)' : step.color}`,
      borderRadius: 'var(--r-xl)',
      boxShadow: isCurrent ? `0 4px 0 ${step.shadow}22` : 'var(--shadow-sm)',
      opacity: locked ? 0.7 : 1,
      filter: locked ? 'grayscale(0.4)' : 'none',
      overflow: 'hidden',
      transition: 'all 0.15s',
    }}>
      {/* Encabezado del paso */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 18px',
        filter: locked ? 'blur(2px)' : 'none',
        background: complete
          ? 'linear-gradient(90deg, #D1FAE5, transparent)'
          : isCurrent
            ? `linear-gradient(90deg, ${step.color}15, transparent)`
            : 'transparent',
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: locked
            ? '#E5E7EB'
            : complete
              ? `linear-gradient(135deg, var(--emerald), var(--emerald-dark))`
              : `linear-gradient(135deg, ${step.color}, ${step.shadow})`,
          color: 'white', fontSize: 26, fontWeight: 900,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: locked ? 'none' : `0 3px 0 ${complete ? 'var(--emerald-dark)' : step.shadow}`,
          flexShrink: 0, overflow: 'hidden',
        }}>
          {locked ? '🔒' : complete ? '✓'
            : ((st && st.icon) ? <img src={st.icon} alt={st.state} loading="lazy"
                         style={{ width: 34, height: 34, objectFit: 'contain',
                                  filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.25))' }}/>
                  : step.emoji)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 11, fontWeight: 900, color: locked ? 'var(--faint)' : step.color,
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              Paso {index}{st ? <span style={{ color: 'var(--muted)' }}> · 📍 {st.city}, {st.state}</span> : null}
            </span>
            {isCurrent && (
              <span style={{
                background: step.color, color: 'white', fontSize: 10, fontWeight: 900,
                padding: '2px 8px', borderRadius: 999, letterSpacing: '0.05em',
              }}>▶ AHORA</span>
            )}
            {complete && (
              <span style={{
                background: 'var(--emerald)', color: 'white', fontSize: 10, fontWeight: 900,
                padding: '2px 8px', borderRadius: 999, letterSpacing: '0.05em',
              }}>✓ COMPLETO</span>
            )}
          </div>
          <div style={{
            fontSize: 17, fontWeight: 900, color: locked ? 'var(--faint)' : 'var(--text)',
            lineHeight: 1.2, marginTop: 2,
          }}>
            {step.title}
          </div>
          {st && st.levels && (
            <div style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {st.levels.map((lv, i) => (
                <span key={i} style={{ fontSize: 11, fontWeight: 800,
                  color: locked ? 'var(--faint)' : (i === 0 ? step.color : 'var(--muted)'),
                  background: i === 0 ? `${step.color}14` : 'var(--bg)',
                  border: `1px solid ${i === 0 ? step.color + '33' : 'var(--border)'}`,
                  padding: '2px 8px', borderRadius: 999 }}>
                  Nivel {i + 1} · {lv.state}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cuerpo: los 3 NIVELES del tema (Nivel 1 · estado A, Nivel 2 · estado B, Examen) */}
      <div style={{ padding: '0 18px 18px 18px', filter: locked ? 'blur(2px)' : 'none' }}>
        <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
          {(typeof getThemeLevels === 'function' ? getThemeLevels(step.id) : []).map(lv => {
            const done = (typeof isLevelDone === 'function') && isLevelDone(lv.id);
            const lvUnlocked = (typeof isLevelUnlockedById === 'function') ? isLevelUnlockedById(lv.id) : !locked;
            const usable = lvUnlocked && lv.ready && !locked;
            const cur = lvUnlocked && !done && lv.ready;
            let tag;
            if (!lv.ready) tag = '⏳ Próximamente';
            else if (done) tag = '✓ Completado';
            else if (!lvUnlocked) tag = '🔒 Bloqueado';
            else tag = '▶ Comenzar';
            const accent = lv.exam ? 'var(--amber-dark)' : step.color;
            return (
              <button key={lv.id} disabled={!usable}
                onClick={() => usable && onStartLevel && onStartLevel(lv)}
                style={{
                  border: `2px solid ${done ? 'var(--emerald)' : cur ? accent : 'var(--border)'}`,
                  background: done ? 'var(--emerald-light)' : cur ? `${accent}12` : '#F8FAFC',
                  borderRadius: 'var(--r-md)', padding: '10px 12px', textAlign: 'left',
                  cursor: usable ? 'pointer' : 'not-allowed', fontFamily: 'var(--font)',
                  opacity: (!lv.ready || (!lvUnlocked && !done)) ? 0.6 : 1,
                }}>
                <div style={{ fontSize: 12.5, fontWeight: 900, color: done ? 'var(--emerald-dark)' : cur ? accent : 'var(--muted)' }}>
                  {lv.exam ? '🏆 ' : ''}{lv.label}
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', marginTop: 3 }}>{tag}</div>
              </button>
            );
          })}
        </div>
      </div>

      {locked && (
        <div style={{
          background: '#F3F4F6', padding: '8px 18px',
          fontSize: 11.5, fontWeight: 700, color: 'var(--faint)', textAlign: 'center',
        }}>
          🔒 Completa el tema anterior para desbloquear este
        </div>
      )}
    </div>
  );
}

function StepAction({ kind, step, locked, done, unitProg, hasUnit, onClick }) {
  // Si el paso tiene unit, la teoría es opcional → no la marcamos como "done" visualmente
  const showDone = done && !(kind === 'theory' && hasUnit);
  const config = kind === 'theory'
    ? { label: '📖 Teoría',
        cta: hasUnit
          ? '▶ Ver teoría'
          : (done ? '↩ Repasar' : '▶ Estudiar'),
        subtitle: hasUnit ? 'Referencia · léela cuando quieras' : 'Lee y aprende los conceptos' }
    : { label: '✍️ Práctica',
        cta: done ? '↩ Repasar' : unitProg && unitProg.done > 0 ? `▶ Continuar (${unitProg.done}/${unitProg.total})` : '▶ Empezar',
        subtitle: unitProg ? `${unitProg.done} de ${unitProg.total} lecciones` : 'Ejercicios interactivos' };
  done = showDone;
  return (
    <button onClick={onClick} disabled={locked} style={{
      all: 'unset', cursor: locked ? 'not-allowed' : 'pointer',
      background: done ? `${step.color}1a` : '#F8FAFC',
      border: `1.5px solid ${done ? step.color : 'var(--border)'}`,
      borderRadius: 'var(--r-lg)', padding: '12px 14px',
      display: 'flex', alignItems: 'center', gap: 10,
      transition: 'all 0.12s',
    }}
      onMouseEnter={e => { if (!locked) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.borderColor = step.color; } }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = done ? step.color : 'var(--border)'; }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 11, fontWeight: 900,
          color: step.color,
          textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2,
        }}>
          {done && '✓ '}{config.label}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', lineHeight: 1.3 }}>
          {config.subtitle}
        </div>
      </div>
      <div style={{
        background: step.color, color: 'white',
        fontSize: 11.5, fontWeight: 900,
        padding: '7px 12px', borderRadius: 'var(--r-md)',
        whiteSpace: 'nowrap', boxShadow: `0 2px 0 ${step.shadow}`,
      }}>
        {config.cta}
      </div>
    </button>
  );
}

// ── Premio final: TEST, Historias y Viajes (solo al completar TODO) ─────────
function RewardPanel({ units, completedSet, allComplete }) {
  // El regalo por terminar la ruta: estas 3 secciones extra.
  const rewardIds = ['onfire', 'preguntas', 'viajes'];
  const items = rewardIds.map(id => {
    const cfg = SECTION_UNLOCKS[id];
    if (!cfg) return null;
    // Al ser premio, se consideran desbloqueadas cuando se muestran.
    return { id, ...cfg, unlocked: true };
  }).filter(Boolean);

  return (
    <div style={{ marginTop: 34, marginBottom: 24,
      background: 'linear-gradient(135deg, #FFF7ED, #FEF3C7)',
      border: '2px solid #FCD34D', borderRadius: 'var(--r-2xl)', padding: '20px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 30 }}>🎁</div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 19, fontWeight: 900, color: '#B45309', letterSpacing: '-0.3px' }}>
            {allComplete ? '¡Premio desbloqueado!' : 'Premio (vista admin)'}
          </div>
          <div style={{ fontSize: 12.5, color: '#92400E', fontWeight: 700 }}>
            Por completar toda la ruta: TEST, Historias y Viajes. ¡Disfrútalo! 🎉
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))' }}>
        {items.map(it => <FreeSectionCard key={it.id} item={it}/>)}
      </div>
    </div>
  );
}

function FreeSectionCard({ item }) {
  const go = () => {
    if (!item.unlocked) return;
    window.dispatchEvent(new CustomEvent('go-mode', { detail: item.id }));
  };
  return (
    <button onClick={go} disabled={!item.unlocked} style={{
      all: 'unset',
      cursor: item.unlocked ? 'pointer' : 'not-allowed',
      background: item.unlocked ? 'white' : '#F3F4F6',
      border: `2px solid ${item.unlocked ? item.color : '#D1D5DB'}`,
      borderRadius: 'var(--r-xl)', padding: '12px 14px',
      boxShadow: item.unlocked ? `0 3px 0 ${item.color}33` : 'none',
      display: 'flex', flexDirection: 'column', gap: 6, minHeight: 110,
      transition: 'transform 0.12s',
      opacity: item.unlocked ? 1 : 0.65,
      filter: item.unlocked ? 'none' : 'grayscale(0.6)',
    }}
      onMouseEnter={e => { if (item.unlocked) e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 'var(--r-md)',
          background: item.unlocked ? `${item.color}22` : '#E5E7EB',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 17, flexShrink: 0,
        }}>
          {item.unlocked ? item.icon : '🔒'}
        </div>
        <div style={{
          fontSize: 13.5, fontWeight: 900, lineHeight: 1.2,
          color: item.unlocked ? item.color : 'var(--faint)',
        }}>
          {item.label}
        </div>
      </div>
      {item.unlocked ? (
        <div style={{
          marginTop: 'auto', alignSelf: 'flex-start',
          background: item.color, color: 'white',
          fontSize: 10, fontWeight: 900,
          padding: '3px 9px', borderRadius: 999, letterSpacing: '0.04em',
        }}>▶ ABRIR</div>
      ) : (
        <div style={{
          marginTop: 'auto',
          fontSize: 10.5, fontWeight: 700, color: 'var(--faint)', lineHeight: 1.35,
        }}>
          🔒 Completa <strong>{item.targetStep?.title || '...'}</strong>
        </div>
      )}
    </button>
  );
}

// Botón que, desde una página de TEORÍA, redirige a la práctica del tema en el
// viaje. Dice "Repasar" si el tema ya está completo, o "Comenzar" si no.
function ThemePracticeButton({ theoryId, style }) {
  const step = (typeof LEARNING_PATH !== 'undefined') ? LEARNING_PATH.find(s => s.theory === theoryId) : null;
  if (!step) return null;
  const complete = (typeof isThemeComplete === 'function') && isThemeComplete(step.id);
  return (
    <button onClick={() => window.dispatchEvent(new CustomEvent('start-theme', { detail: step.id }))}
      style={{
        border: 'none', fontFamily: 'var(--font)', cursor: 'pointer', color: 'white',
        background: step.color,
        fontSize: 15, fontWeight: 900, padding: '13px 22px', borderRadius: 'var(--r-md)',
        boxShadow: `0 4px 0 ${step.shadow}`,
        ...style,
      }}>
      {complete ? '↻ Repasar en el viaje' : '▶ Comenzar práctica'}
    </button>
  );
}

window.HomeScreen = HomeScreen;
window.ThemePracticeButton = ThemePracticeButton;
