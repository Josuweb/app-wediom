// Captura errores de render para que una pantalla nunca quede "en blanco".
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Wediom render error:', error, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 30, maxWidth: 560, margin: '40px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 44 }}>😵</div>
          <h2 style={{ fontWeight: 900, margin: '10px 0' }}>Algo salió mal en esta pantalla</h2>
          <p style={{ color: 'var(--muted)', fontWeight: 700 }}>
            {String((this.state.error && this.state.error.message) || this.state.error)}
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('go-mode', { detail: 'home' }))}
            style={{ marginTop: 16, background: 'var(--indigo)', color: 'white', border: 'none',
              borderRadius: 10, padding: '10px 18px', fontWeight: 900, cursor: 'pointer' }}>
            ← Volver al inicio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main app — desktop layout, no phone frame
function App() {
  const [user, setUser] = React.useState(() => {
    const authUser = window.Auth && window.Auth.getUser();
    const base = { ...INITIAL_USER, ...(authUser ? { name: authUser.name } : {}) };
    try { return { ...base, ...JSON.parse(localStorage.getItem('efj_user') || '{}') }; }
    catch { return base; }
  });
  const [lessonStatuses, setLessonStatuses] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('efj_progress') || '{}'); }
    catch { return {}; }
  });
  const [tab, setTab] = React.useState('home');
  const [mode, setMode] = React.useState('home');
  const [result, setResult] = React.useState(null);
  const [activeExercises, setActiveExercises] = React.useState(ACTIVE_EXERCISES);
  const [activeUnit, setActiveUnit] = React.useState(null);
  const [activeLesson, setActiveLesson] = React.useState(null);
  const [activeLevel, setActiveLevel] = React.useState(null); // nivel (estado/examen) activo
  // IMPORTANTE: todos los hooks deben declararse ANTES de cualquier return.
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  React.useEffect(() => { localStorage.setItem('efj_user', JSON.stringify(user)); }, [user]);
  React.useEffect(() => { localStorage.setItem('efj_progress', JSON.stringify(lessonStatuses)); }, [lessonStatuses]);

  // Sincronizar progreso con el backend (debounced) cuando hay sesión real.
  React.useEffect(() => {
    if (!window.Auth || !window.Auth.isAuthenticated() || window.Auth.LOCAL_MODE) return;
    const t = setTimeout(() => window.Auth.pushProgress(), 1500);
    return () => clearTimeout(t);
  }, [user, lessonStatuses]);
  React.useEffect(() => {
    const h = () => window.Auth && window.Auth.pushProgress();
    window.addEventListener('section-completed', h);
    return () => window.removeEventListener('section-completed', h);
  }, []);

  // Analytics: registrar vista de pantalla al cambiar de modo.
  React.useEffect(() => { window.Analytics && window.Analytics.trackPage(mode); }, [mode]);

  const unitsWithProgress = React.useMemo(() =>
    UNITS.map(unit => {
      const lessons = unit.lessons.map(l => ({ ...l, status: lessonStatuses[l.id] ?? l.status }));
      const doneCount = lessons.filter(l => l.status === 'done').length;
      return { ...unit, lessons, progress: doneCount / lessons.length };
    }),
  [lessonStatuses]);

  React.useEffect(() => {
    const h = (e) => {
      const m = e.detail;
      setMode(m);
      if (['home','verbs','achievements','profile','exercises','create','repaso','modals','cuantificadores','adjetivos','pronombres','onfire','preguntas','preposiciones','estructuras','viajes','articulos','numeros','adverbios'].includes(m)) {
        setTab(m);
      }
    };
    window.addEventListener('go-mode', h);
    return () => window.removeEventListener('go-mode', h);
  }, []);

  // Lanzar la práctica de una unidad desde la teoría ("Comenzar/Continuar").
  React.useEffect(() => {
    const h = (e) => {
      const u = unitsWithProgress.find(x => x.id === e.detail);
      if (u) startLesson(u);
    };
    window.addEventListener('start-unit', h);
    return () => window.removeEventListener('start-unit', h);
  });

  // Desde una página de TEORÍA: redirigir a la práctica del tema en el viaje.
  React.useEffect(() => {
    const h = (e) => {
      const stepId = e.detail;
      const levels = (typeof getThemeLevels === 'function') ? getThemeLevels(stepId) : [];
      let target = levels.find(l => l.ready && !(typeof isLevelDone === 'function' && isLevelDone(l.id)));
      if (!target) target = levels.find(l => l.ready); // todo hecho → repasar el primero
      if (target) startLevel(target);
    };
    window.addEventListener('start-theme', h);
    return () => window.removeEventListener('start-theme', h);
  });

  // ── Routing por URL (hash): cada sección tiene su propia URL ────────────────
  // (hash = compatible con hosting estático y con abrir el archivo localmente)
  React.useEffect(() => {
    const apply = () => {
      let h = '';
      try { h = decodeURIComponent((window.location.hash || '').replace(/^#/, '')); } catch {}
      if (!h || h === 'lesson' || h === 'lesson-complete') return;
      setMode(h); setTab(h);
    };
    apply(); // respeta el hash al cargar
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);
  React.useEffect(() => {
    if (!mode || mode === 'lesson' || mode === 'lesson-complete') return;
    if ((window.location.hash || '').replace(/^#/, '') !== mode) {
      try { window.location.hash = mode; } catch {}
    }
  }, [mode]);

  const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
    "primaryColor": "#6366F1"
  }/*EDITMODE-END*/;
  const [tweaks, setTweak] = useTweaks(TWEAKS_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--indigo', tweaks.primaryColor);
  }, [tweaks.primaryColor]);

  function startLesson(unit) {
    const lessons = (unit && Array.isArray(unit.lessons)) ? unit.lessons : [];
    const lesson = lessons.find(l => l.status !== 'done') || lessons[0] || null;
    // Si la lección tiene dinámicas nuevas por estado, usarlas.
    const dyn = (unit && typeof getDynamicsForUnit === 'function') ? getDynamicsForUnit(unit.id) : null;
    // Elegir ejercicios con fallbacks robustos (nunca un array vacío).
    let exs = dyn || (lesson && LESSON_EXERCISES[lesson.id]) || (unit && UNIT_EXERCISES[unit.id]) || ACTIVE_EXERCISES;
    if (!Array.isArray(exs) || exs.length === 0) exs = ACTIVE_EXERCISES;
    setActiveExercises(exs);
    setActiveUnit(unit || null);
    setActiveLesson(lesson);
    setMode('lesson');
  }
  // Iniciar un NIVEL (estado A/B o examen) con sus dinámicas + ayuda.
  function startLevel(level) {
    if (!level || !Array.isArray(level.dynamics) || level.dynamics.length === 0) return;
    setActiveExercises(level.dynamics);
    setActiveLevel(level);
    setActiveUnit(null);
    setActiveLesson(null);
    setMode('lesson');
  }

  function completeLesson(r) {
    setResult(r);
    // Si era un NIVEL, marcarlo como hecho (desbloquea el siguiente nodo).
    if (activeLevel && typeof markLevelDone === 'function') markLevelDone(activeLevel.id);
    if (activeUnit && activeLesson) {
      const newStatuses = { ...lessonStatuses, [activeLesson.id]: 'done' };
      const allLessons = activeUnit.lessons;
      const idx = allLessons.findIndex(l => l.id === activeLesson.id);
      if (idx >= 0 && idx < allLessons.length - 1) {
        const next = allLessons[idx + 1];
        if ((newStatuses[next.id] ?? next.status) !== 'done') {
          newStatuses[next.id] = 'current';
        }
      }
      setLessonStatuses(newStatuses);
    }
    setMode('lesson-complete');
  }
  function continueAfterComplete() {
    setUser(u => ({ ...u, xp: u.xp + (result?.xp || 10), xpToday: u.xpToday + (result?.xp || 10) }));
    setMode('home'); setTab('home');
  }
  function handleTab(t) { setTab(t); setMode(t); }

  // Full-screen lesson flow — no sidebar
  if (mode === 'lesson') {
    const lessonTheory = activeUnit ? (LEARNING_PATH.find(s => s.unitId === activeUnit.id) || {}).theory : null;
    // Tema actual (para mostrar un indicador dentro de la dinámica)
    const themeStep = activeLevel
      ? LEARNING_PATH.find(s => s.id === String(activeLevel.id).replace(/-\d+$/, ''))
      : (activeUnit ? LEARNING_PATH.find(s => s.unitId === activeUnit.id) : null);
    const lessonTheme = themeStep
      ? { emoji: themeStep.emoji, title: themeStep.title, color: themeStep.color, shadow: themeStep.shadow }
      : null;
    return (
      <ErrorBoundary key="lesson">
        <LessonScreen exercises={activeExercises}
          unitTitle={activeLevel ? (activeLevel.label + (activeLevel.stateNum ? ` (Estado ${activeLevel.stateNum})` : '')) : activeUnit?.title}
          theme={lessonTheme}
          onExit={() => setMode('home')} onComplete={completeLesson} user={user} setUser={setUser}
          help={activeLevel ? activeLevel.help : null} isExam={!!(activeLevel && activeLevel.exam)}
          onTheory={(!activeLevel && lessonTheory) ? () => window.dispatchEvent(new CustomEvent('go-mode', { detail: lessonTheory })) : null}/>
      </ErrorBoundary>
    );
  }
  if (mode === 'lesson-complete') {
    return <LessonCompleteScreen result={result} user={user} onContinue={continueAfterComplete}/>;
  }

  let mainContent;
  if (mode === 'verbs')        mainContent = <VerbsScreen/>;
  else if (mode === 'achievements') mainContent = <AchievementsScreen user={user}/>;
  else if (mode === 'profile') mainContent = <ProfileScreen user={user} setUser={setUser}/>;
  else if (mode === 'exercises')   mainContent = <ConvertTenseScreen onExit={() => handleTab('home')}/>;
  else if (mode === 'create')      mainContent = <CreateTranslateScreen onExit={() => handleTab('home')}/>;
  else if (mode === 'repaso')      mainContent = <RepasoScreen/>;
  else if (mode && mode.indexOf('t-') === 0) mainContent = <RepasoScreen tenseKey={mode.slice(2)}/>;
  else if (mode === 'modals')      mainContent = <ModalsScreen/>;
  else if (mode === 'cuantificadores') mainContent = <CuantificadoresScreen/>;
  else if (mode === 'adjetivos')   mainContent = <AdjetivosScreen/>;
  else if (mode === 'pronombres')  mainContent = <PronombresScreen/>;
  else if (mode === 'onfire')      mainContent = <OnFireScreen onExit={() => handleTab('home')}/>;
  else if (mode === 'preguntas')   mainContent = <PreguntasScreen onExit={() => handleTab('home')}/>;
  else if (mode === 'preposiciones') mainContent = <PreposicionesScreen/>;
  else if (mode === 'estructuras')   mainContent = <EstructurasScreen/>;
  else if (mode === 'viajes')        mainContent = <ViajesScreen onExit={() => handleTab('home')}/>;
  else if (mode === 'articulos')     mainContent = <ArticulosScreen/>;
  else if (mode === 'numeros')       mainContent = <NumerosScreen/>;
  else if (mode === 'adverbios')     mainContent = <AdverbiosScreen/>;
  else if (mode === 'terms')         mainContent = <TermsScreen onBack={() => handleTab('home')}/>;
  else if (mode === 'privacy')       mainContent = <PrivacyScreen onBack={() => handleTab('home')}/>;
  else                         mainContent = <HomeScreen user={user} units={unitsWithProgress} onStart={startLesson} onStartLevel={startLevel}/>;

  // Cuando navegas a una pestaña, cerramos el sidebar móvil
  function handleTabClose(t) { setMobileSidebarOpen(false); handleTab(t); }

  async function handleLogout() {
    window.Analytics && window.Analytics.trackEvent('logout');
    await window.Auth.logout();
    // Root re-renderiza a la pantalla de login al recibir 'auth-changed'.
  }

  return (
    <div className="app-layout">
      <AppHeader
        user={user}
        onAchievements={() => handleTab('achievements')}
        onProfile={() => handleTab('profile')}
        onLogout={handleLogout}
        onOpenMobileMenu={() => setMobileSidebarOpen(true)}/>
      <div className="app-body">
        <AppSidebar
          tab={tab}
          onTab={handleTabClose}
          units={unitsWithProgress}
          mobileOpen={mobileSidebarOpen}/>
        <div
          className={`sidebar-backdrop${mobileSidebarOpen ? ' show' : ''}`}
          onClick={() => setMobileSidebarOpen(false)}/>
        <main className="main-content">
          <ErrorBoundary key={mode}>
            {mainContent}
          </ErrorBoundary>
          <AppFooter onLegal={(v) => handleTab(v)}/>
          {/* Botón flotante (popup) Comenzar/Repasar — en TODA página de teoría,
              abajo al centro respecto al ancho del contenido. */}
          {(typeof LEARNING_PATH !== 'undefined') && LEARNING_PATH.some(s => s.theory === mode)
            && (typeof ThemePracticeButton === 'function') && (
            <div style={{ position: 'sticky', bottom: 16, display: 'flex',
                          justifyContent: 'center', pointerEvents: 'none', zIndex: 60, marginTop: 12 }}>
              <div style={{ pointerEvents: 'auto' }}>
                <ThemePracticeButton theoryId={mode}
                  style={{ borderRadius: 999, boxShadow: '0 10px 30px rgba(0,0,0,0.32)' }}/>
              </div>
            </div>
          )}
        </main>
      </div>
      <SupportButton/>
      <CookieBanner onLegal={(v) => handleTab(v)}/>
      {window.Auth && window.Auth.isAdmin() && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="🔐 Admin">
            <AdminModeToggle/>
          </TweakSection>
          <TweakSection title="Color">
            <TweakColor label="Primario" value={tweaks.primaryColor}
              options={['#6366F1','#8B5CF6','#0EA5E9','#10B981','#F97316','#F43F5E']}
              onChange={v => setTweak('primaryColor', v)}/>
          </TweakSection>
          <TweakSection title="Ir a pantalla">
            {[['lesson','Lección'],['lesson-complete','Lección completa'],['verbs','Verbos'],['articulos','Artículos'],['numeros','Números'],['adverbios','Adv. Frecuencia'],['modals','Modales'],['cuantificadores','Cuantificadores'],['adjetivos','Adjetivos'],['pronombres','Pronombres'],['exercises','Convertir a'],['create','Crear y Traducir'],['achievements','Logros'],['profile','Perfil'],['repaso','Tiempos'],['home','Mi ruta']].map(([m, label]) => (
              <TweakButton key={m} label={label} onClick={() => window.dispatchEvent(new CustomEvent('go-mode', { detail: m }))}/>
            ))}
          </TweakSection>
        </TweaksPanel>
      )}
    </div>
  );
}

function AppHeader({ user, onAchievements, onProfile, onLogout, onOpenMobileMenu }) {
  const [adminOn, setAdminOn] = React.useState(() => isAdminMode());
  React.useEffect(() => {
    const h = () => setAdminOn(isAdminMode());
    window.addEventListener('admin-mode-changed', h);
    return () => window.removeEventListener('admin-mode-changed', h);
  }, []);
  return (
    <header className="app-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <button
          className="mobile-menu-btn"
          aria-label="Abrir menú"
          onClick={onOpenMobileMenu}>
          ☰
        </button>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span onClick={() => window.dispatchEvent(new CustomEvent('go-mode', { detail: 'home' }))}
            title="Ir al inicio" role="button"
            style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <Mascot size={40}/>
            <span className="brand-name">{(window.APP_CONFIG?.brand?.name) || 'Wediom English'}</span>
          </span>
          {adminOn && (
            <span style={{
              background: '#10B981', color: 'white',
              fontSize: 10, fontWeight: 900, letterSpacing: '0.06em',
              padding: '3px 8px', borderRadius: 999,
            }}>🔓 ADMIN</span>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="stat-pill" onClick={onAchievements}
          style={{ cursor: 'pointer', background: 'none', border: '1px solid var(--border)', fontFamily: 'var(--font)' }}>
          <span style={{ color: '#F59E0B' }}>🔥</span>
          <span style={{ fontWeight: 800, color: '#F59E0B' }}>{user.streak}</span>
        </button>
        <button className="stat-pill" onClick={onAchievements}
          style={{ cursor: 'pointer', background: 'none', border: '1px solid var(--border)', fontFamily: 'var(--font)' }}>
          <span>⚡</span>
          <span style={{ fontWeight: 800, color: 'var(--amber-dark)' }}>{user.xp} XP</span>
        </button>
        <button className="stat-pill" onClick={onAchievements}
          style={{ cursor: 'pointer', background: 'none', border: '1px solid var(--border)', fontFamily: 'var(--font)' }}>
          <span>❤️</span>
          <span style={{ fontWeight: 800, color: 'var(--rose)' }}>{user.hearts}</span>
        </button>
        <button onClick={onProfile} className="header-avatar" style={{
          borderRadius: '50%', border: '2px solid var(--indigo)',
          background: 'var(--indigo-light)', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: 'var(--indigo)',
        }}>
          {(user.name && user.name[0]) || '?'}
        </button>
        {onLogout && (
          <button onClick={onLogout} title="Cerrar sesión" aria-label="Cerrar sesión"
            className="logout-btn" style={{
              background: 'none', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)',
              padding: '6px 10px', cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 800,
              fontSize: 13, color: 'var(--muted)',
            }}>
            Salir
          </button>
        )}
      </div>
    </header>
  );
}

function AppSidebar({ tab, onTab, units, mobileOpen }) {
  // v2: cambiamos la key para resetear la preferencia previa de usuarios que
  // tenían el sidebar colapsado guardado. Por defecto arranca expandido.
  // Limpia la key antigua una vez (housekeeping).
  React.useEffect(() => { try { localStorage.removeItem('efj_sidebar_collapsed'); localStorage.removeItem('efj_sidebar_collapsed_v2'); } catch {} }, []);
  // En PC el sidebar siempre va expandido (se quitó la opción de contraer).
  // El modo "iconos" en tablet (≤1024px) lo maneja el CSS automáticamente.
  const collapsed = false;
  const [openGroups, setOpenGroups] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('efj_sidebar_groups') || '{"tv":true,"basicas":true}'); }
    catch { return { tv: true, basicas: true }; }
  });
  // Re-render del sidebar cuando se marca una sección como aprendida (para actualizar candados)
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
  React.useEffect(() => {
    localStorage.setItem('efj_sidebar_groups', JSON.stringify(openGroups));
  }, [openGroups]);

  const completedSet = getCompletedSections();
  // Items SIEMPRE accesibles (home, profile, achievements) — no se bloquean
  const ALWAYS_OPEN = new Set(['home','profile','achievements']);
  function unlocked(id) {
    if (ALWAYS_OPEN.has(id)) return true;
    // Si el item es la teoría de un TEMA del camino (tiempos t-* o gramática),
    // se desbloquea cuando su PRIMER nivel del viaje está desbloqueado.
    // (misma lógica que el Home → mantiene barra lateral y camino sincronizados)
    const step = (typeof LEARNING_PATH !== 'undefined') ? LEARNING_PATH.find(s => s.theory === id) : null;
    if (step) {
      return (typeof isLevelUnlockedById === 'function')
        ? isLevelUnlockedById(step.id + '-1')
        : isStepUnlocked(step.id, units, completedSet);
    }
    return isSidebarItemUnlocked(id, units, completedSet);
  }

  // Barra lateral de TEORÍA (se mantiene). La práctica ya no es independiente:
  // el botón de cada teoría redirige al tema correspondiente del viaje.
  const items = [
    { id: 'home',          icon: '🗺️', label: 'Mi Viaje', labelSize: 18 },
    { kind: 'divider' },
    { id: 'verbs',         icon: '⚡', label: 'Verbos' },
    { id: 't-pres-cont',   icon: '🎬', label: 'Presente Continuo' },
    { id: 't-pres-simple', icon: '☀️', label: 'Presente Simple' },
    { id: 'articulos',     icon: '📰', label: 'Artículos' },
    { id: 'numeros',       icon: '🔢', label: 'Números' },
    { id: 'adverbios',     icon: '⏱️', label: 'Adv. Frecuencia' },
    { id: 'pronombres',    icon: '👥', label: 'Pronombres' },
    { id: 'preposiciones', icon: '📍', label: 'Preposiciones' },
    { id: 'estructuras',   icon: '📦', label: 'There is / Have' },
    { id: 't-fut-simple',  icon: '🚀', label: 'Futuro Simple' },
    { id: 't-fut-cont',    icon: '⏳', label: 'Futuro Continuo' },
    { id: 't-going-to',    icon: '🗺️', label: 'Futuro: Going to' },
    { id: 't-past-cont',   icon: '🎞️', label: 'Pasado Continuo' },
    { id: 't-past-simple', icon: '🕰️', label: 'Pasado Simple' },
    { id: 'modals',        icon: '🎩', label: 'Modales' },
    { id: 'adjetivos',     icon: '🎨', label: 'Adjetivos' },
    { id: 'cuantificadores', icon: '📊', label: 'Cuantificadores' },
    { kind: 'divider' },
    { id: 'achievements',  icon: '🏆', label: 'Logros' },
    { id: 'profile',       icon: '👤', label: 'Perfil' },
  ];

  function toggleGroup(id) {
    setOpenGroups(g => ({ ...g, [id]: !g[id] }));
  }

  function renderLeaf(it, sub) {
    const isUnlocked = unlocked(it.id);
    return (
      <button
        key={it.id}
        className={`nav-item${tab === it.id ? ' active' : ''}`}
        onClick={() => { if (isUnlocked) onTab(it.id); }}
        disabled={!isUnlocked}
        title={collapsed ? it.label : (isUnlocked ? undefined : 'Bloqueado — sigue avanzando en el camino')}
        style={{
          ...(sub && !collapsed ? { paddingLeft: 40 } : {}),
          opacity: isUnlocked ? 1 : 0.55,
          filter: isUnlocked ? 'none' : 'blur(2px)',
          cursor: isUnlocked ? 'pointer' : 'not-allowed',
        }}
      >
        <span className="nav-icon">{isUnlocked ? it.icon : '🔒'}</span>
        <span className="nav-label" style={it.labelSize ? { fontSize: it.labelSize } : undefined}>{it.label}</span>
      </button>
    );
  }

  function renderGroup(group) {
    if (collapsed) {
      // En modo contraído, mostramos los hijos como iconos planos (sin cabecera de grupo)
      return (
        <React.Fragment key={group.id}>
          {group.children.map(c => renderLeaf(c, false))}
        </React.Fragment>
      );
    }
    const open = openGroups[group.id];
    const hasActiveChild = group.children.some(c => c.id === tab);
    return (
      <React.Fragment key={group.id}>
        <button
          className={`nav-item${hasActiveChild && !open ? ' active' : ''}`}
          onClick={() => toggleGroup(group.id)}
        >
          <span className="nav-icon">{group.icon}</span>
          <span className="nav-label" style={{ flex: 1 }}>{group.label}</span>
          <span style={{
            fontSize: 11, color: hasActiveChild ? 'var(--indigo)' : 'var(--faint)',
            marginLeft: 'auto',
          }}>
            {open ? '▾' : '▸'}
          </span>
        </button>
        {open && group.children.map(c => renderLeaf(c, true))}
      </React.Fragment>
    );
  }

  return (
    <nav className={`sidebar${collapsed ? ' collapsed' : ''}${mobileOpen ? ' mobile-open' : ''}`}>
      {items.map((it, i) => {
        if (it.kind === 'divider') {
          return <div key={`div-${i}`} style={{
            height: 1, background: 'var(--border)',
            margin: collapsed ? '8px 12px' : '8px 16px',
          }}/>;
        }
        if (it.kind === 'group') return renderGroup(it);
        return renderLeaf(it, false);
      })}
    </nav>
  );
}

// ── Admin mode toggle (panel de Tweaks) ────────────────────────────────────
function AdminModeToggle() {
  const [on, setOn] = React.useState(() => isAdminMode());
  function toggle() {
    const next = !on;
    setAdminMode(next);
    setOn(next);
    // Forzar re-render del resto de la app (home y sidebar escuchan este evento)
  }
  return (
    <button onClick={toggle} style={{
      width: '100%', background: on ? '#10B981' : 'transparent',
      color: on ? 'white' : '#A78BFA',
      border: `1.5px solid ${on ? '#10B981' : 'rgba(167,139,250,0.4)'}`,
      borderRadius: 6, padding: '8px 12px',
      cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
    }}>
      <span>{on ? '✓ Desbloqueado TODO' : '🔒 Modo usuario normal'}</span>
      <span style={{ fontSize: 10, opacity: 0.85 }}>{on ? 'ON' : 'OFF'}</span>
    </button>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function AppFooter({ onLegal }) {
  const cfg = window.APP_CONFIG || {};
  const brand = (cfg.brand && cfg.brand.name) || 'Wediom English';
  const linkStyle = {
    background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)',
    color: 'var(--muted)', fontWeight: 700, fontSize: 13, padding: 0,
  };
  return (
    <footer style={{
      marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)',
      display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center',
      justifyContent: 'space-between', color: 'var(--faint)', fontSize: 13,
    }}>
      <span>© {cfg.year || ''} {brand}. Todos los derechos reservados.</span>
      <nav style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <button style={linkStyle} onClick={() => onLegal && onLegal('terms')}>Términos</button>
        <button style={linkStyle} onClick={() => onLegal && onLegal('privacy')}>Privacidad</button>
        <button style={linkStyle}
          onClick={() => { const b = document.querySelector('[aria-label="Soporte y ayuda"]'); if (b) b.click(); }}>
          Soporte
        </button>
      </nav>
    </footer>
  );
}

// ── Banner de consentimiento de cookies ──────────────────────────────────────
function CookieBanner({ onLegal }) {
  const A = window.Analytics;
  const [visible, setVisible] = React.useState(
    () => !!(A && A.enabled && A.consentState() === '')
  );
  if (!visible) return null;
  const close = () => setVisible(false);
  return (
    <div style={{
      position: 'fixed', left: 16, right: 16, bottom: 16, zIndex: 2147483001,
      maxWidth: 560, margin: '0 auto', background: 'var(--surface)',
      border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)',
      padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
        Usamos cookies de Google Analytics para entender de forma anónima cómo se usa la app
        y mejorarla. Puedes aceptarlas o rechazarlas.{' '}
        <button onClick={() => onLegal && onLegal('privacy')} style={{
          background: 'none', border: 'none', color: 'var(--indigo)', fontWeight: 800,
          cursor: 'pointer', fontFamily: 'var(--font)', fontSize: 13.5, padding: 0,
        }}>Más información</button>.
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button onClick={() => { A.decline(); close(); }} style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)',
          padding: '9px 16px', cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 800,
          color: 'var(--muted)', fontSize: 14,
        }}>Rechazar</button>
        <button onClick={() => { A.accept(); close(); }} style={{
          background: 'var(--indigo)', border: 'none', borderRadius: 'var(--r-sm)',
          padding: '9px 18px', cursor: 'pointer', fontFamily: 'var(--font)', fontWeight: 900,
          color: 'white', fontSize: 14,
        }}>Aceptar</button>
      </div>
    </div>
  );
}

// ── Root: gate de autenticación (login vs app) ───────────────────────────────
function Root() {
  const [authed, setAuthed] = React.useState(() => !!(window.Auth && window.Auth.isAuthenticated()));
  const [checking, setChecking] = React.useState(true);
  const [legalView, setLegalView] = React.useState(null); // 'terms' | 'privacy' | null (pre-login)

  React.useEffect(() => {
    let alive = true;
    (async () => {
      if (window.Auth) await window.Auth.refreshMe();
      if (!alive) return;
      setAuthed(!!(window.Auth && window.Auth.isAuthenticated()));
      setChecking(false);
    })();
    const h = () => setAuthed(!!(window.Auth && window.Auth.isAuthenticated()));
    window.addEventListener('auth-changed', h);
    return () => { alive = false; window.removeEventListener('auth-changed', h); };
  }, []);

  if (checking) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
          <Mascot size={72} style={{ margin: '0 auto' }}/>
          <p style={{ marginTop: 12, fontWeight: 800 }}>Cargando…</p>
        </div>
      </div>
    );
  }

  if (!authed) {
    if (legalView === 'terms') return <TermsScreen onBack={() => setLegalView(null)}/>;
    if (legalView === 'privacy') return <PrivacyScreen onBack={() => setLegalView(null)}/>;
    return <LoginScreen onAuthed={() => setAuthed(true)} onShowLegal={setLegalView}/>;
  }
  return <App/>;
}

window.App = App;
window.Root = Root;
window.AppHeader = AppHeader;
window.AppSidebar = AppSidebar;
window.AppFooter = AppFooter;
window.CookieBanner = CookieBanner;
window.AdminModeToggle = AdminModeToggle;
