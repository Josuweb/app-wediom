// Achievements + Profile screens

// Progreso REAL del viaje (basado en los niveles completados, no en datos fijos).
function getJourneyProgress() {
  const path = (typeof LEARNING_PATH !== 'undefined') ? LEARNING_PATH : [];
  let totalStates = 0, doneStates = 0, totalExams = 0, doneExams = 0, doneThemes = 0;
  path.forEach(s => {
    const lv = (typeof getThemeLevels === 'function') ? getThemeLevels(s.id) : [];
    lv.forEach(l => {
      const done = (typeof isLevelDone === 'function') && isLevelDone(l.id);
      if (l.exam) { totalExams += 1; if (done) doneExams += 1; }
      else { totalStates += 1; if (done) doneStates += 1; }
    });
    if ((typeof isThemeComplete === 'function') && isThemeComplete(s.id)) doneThemes += 1;
  });
  const pct = totalStates ? Math.round((doneStates / totalStates) * 100) : 0;
  return { totalStates, doneStates, totalExams, doneExams, totalThemes: path.length, doneThemes, pct };
}

function AchievementsScreen({ user }) {
  const p = getJourneyProgress();
  const streak = user.streak || 0;
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const filled = Math.min(streak, 7); // marca los últimos días según la racha real

  // Insignias calculadas con el progreso REAL.
  const badges = [
    { id:'b1', name:'Primera parada',    desc:'Completa tu 1er estado',      icon:'📍', color:'var(--indigo)',    bg:'var(--indigo-light)', earned: p.doneStates >= 1 },
    { id:'b2', name:'Explorador',        desc:'5 estados completados',       icon:'🧭', color:'var(--sky-dark)',   bg:'var(--sky-light)',    earned: p.doneStates >= 5 },
    { id:'b3', name:'Primer examen',     desc:'Aprueba un Examen Final',     icon:'🔥', color:'var(--orange)',    bg:'var(--orange-light)', earned: p.doneExams >= 1 },
    { id:'b4', name:'Medio camino',      desc:'17 estados (50%)',            icon:'🌗', color:'var(--violet)',    bg:'var(--violet-light)', earned: p.doneStates >= 17 },
    { id:'b5', name:'Nivel A1',          desc:'Completa todos los temas A1', icon:'🎓', color:'var(--amber-dark)', bg:'var(--amber-light)', earned: p.doneThemes >= 9 },
    { id:'b6', name:'Maestro del viaje', desc:'Los 34 estados',              icon:'🏆', color:'var(--rose)',      bg:'var(--rose-light)',   earned: p.totalStates > 0 && p.doneStates >= p.totalStates },
    { id:'b7', name:'Primera racha',     desc:'5 días seguidos',             icon:'⚡', color:'var(--orange)',    bg:'var(--orange-light)', earned: streak >= 5 },
    { id:'b8', name:'Constante',         desc:'30 días de racha',            icon:'🌟', color:'var(--amber-dark)', bg:'var(--amber-light)', earned: streak >= 30 },
  ];
  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <div style={{ maxWidth: 1000 }}>
      <h2 style={{ fontWeight: 900, fontSize: 24, marginBottom: 6 }}>Logros & Progreso</h2>
      <div style={{ fontSize: 13.5, color: 'var(--muted)', fontWeight: 700, marginBottom: 22 }}>
        Tu avance real en el viaje por Estados Unidos.
      </div>

      {/* Progreso del viaje (REAL) */}
      <div style={{
        background: 'linear-gradient(135deg, var(--indigo), var(--violet))',
        borderRadius: 'var(--r-xl)', padding: 22, color: 'white', marginBottom: 20,
        boxShadow: '0 6px 0 rgba(99,102,241,0.32)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 30 }}>🗺️</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Progreso del viaje</div>
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.1 }}>{p.doneStates}/{p.totalStates} estados</div>
            </div>
          </div>
          <div style={{ fontSize: 40, fontWeight: 900 }}>{p.pct}%</div>
        </div>
        <div className="progress-bar" style={{ height: 14, background: 'rgba(255,255,255,0.25)' }}>
          <div className="progress-fill" style={{ width: `${p.pct}%`, background: 'white' }}/>
        </div>
        <div style={{ display: 'flex', gap: 22, marginTop: 14, flexWrap: 'wrap', fontSize: 13, fontWeight: 800 }}>
          <span>🏙️ Temas: {p.doneThemes}/{p.totalThemes}</span>
          <span>🔥 Exámenes: {p.doneExams}/{p.totalExams}</span>
          <span>🏅 Insignias: {earnedCount}/{badges.length}</span>
        </div>
      </div>

      {/* Racha + Meta diaria */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 24 }}>
        {/* Streak card */}
        <div style={{
          background: 'linear-gradient(135deg, var(--orange), var(--amber-dark))',
          borderRadius: 'var(--r-xl)', padding: 22, color: 'white',
          boxShadow: '0 6px 0 rgba(217,119,6,0.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--r-md)', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🔥</div>
            <div>
              <div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}>{streak}</div>
              <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 700 }}>días de racha</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {days.map((d, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: i < filled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: i < filled ? 16 : 0, marginBottom: 4,
                }}>
                  {i < filled ? '🔥' : ''}
                </div>
                <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 800 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily XP */}
        <div style={{
          background: 'white', borderRadius: 'var(--r-xl)', padding: 22,
          border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Meta diaria</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 14 }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: 'var(--amber-dark)', lineHeight: 1 }}>{user.xpToday}</div>
            <div style={{ fontSize: 16, color: 'var(--faint)', fontWeight: 700, paddingBottom: 6 }}>/ {user.goalDaily} XP</div>
          </div>
          <div className="progress-bar" style={{ height: 14 }}>
            <div className="progress-fill" style={{ width: `${Math.min(100, (user.xpToday / user.goalDaily) * 100)}%`, background: 'var(--amber)' }}/>
          </div>
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700, color: 'var(--muted)' }}>
            <span>Total XP</span>
            <span style={{ color: 'var(--amber-dark)', fontWeight: 900 }}>⚡ {user.xp}</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
        Insignias · {earnedCount}/{badges.length}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 14 }}>
        {badges.map(b => (
          <div key={b.id} style={{
            background: b.earned ? b.bg : 'var(--bg)',
            border: b.earned ? `2px solid ${b.color}` : '2px solid var(--border)',
            borderBottomWidth: b.earned ? 4 : 2, borderRadius: 'var(--r-xl)',
            padding: '18px 14px', textAlign: 'center',
            opacity: b.earned ? 1 : 0.5,
            boxShadow: b.earned ? 'var(--shadow-sm)' : 'none',
          }}>
            <div style={{ fontSize: 36, marginBottom: 8, filter: b.earned ? 'none' : 'grayscale(1)' }}>
              {b.earned ? b.icon : '🔒'}
            </div>
            <div style={{ fontWeight: 900, fontSize: 14, color: b.earned ? b.color : 'var(--faint)' }}>
              {b.name}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4, fontWeight: 600 }}>
              {b.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen({ user, setUser }) {
  const p = getJourneyProgress();
  return (
    <div style={{ maxWidth: 1100 }}>
      <h2 style={{ fontWeight: 900, fontSize: 24, marginBottom: 24 }}>Mi Perfil</h2>

      {/* Profile card */}
      <div style={{
        background: 'white', borderRadius: 'var(--r-xl)', padding: 24,
        border: '1px solid var(--border)', display: 'flex', gap: 20, alignItems: 'center',
        marginBottom: 20, boxShadow: 'var(--shadow-sm)', flexWrap: 'wrap',
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--indigo), var(--violet))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, fontWeight: 900, color: 'white', flexShrink: 0,
        }}>
          {(user.name && user.name[0]) || '🙂'}
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 22, fontWeight: 900 }}>{user.name}</div>
          {user.email && <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{user.email}</div>}
          <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--indigo-light)', padding: '4px 10px', borderRadius: 999,
            color: 'var(--indigo)', fontWeight: 800, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {user.role === 'admin' ? '🔓 Admin' : '🗺️ En ruta por EE.UU.'}
          </div>
        </div>
      </div>

      {/* Stats grid (reales) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 20 }}>
        <StatTile icon="🗺️" label="Estados" value={`${p.doneStates}/${p.totalStates}`} color="var(--indigo)"/>
        <StatTile icon="🔥" label="Racha actual" value={`${user.streak || 0} días`} color="var(--orange)"/>
        <StatTile icon="⚡" label="XP Total" value={`${user.xp || 0}`} color="var(--amber-dark)"/>
        <StatTile icon="❤️" label="Corazones" value={`${user.hearts != null ? user.hearts : 5}/5`} color="var(--rose)"/>
      </div>

      {/* Settings */}
      <div style={{
        background: 'white', borderRadius: 'var(--r-xl)', padding: '4px 0',
        border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ padding: '12px 20px 8px', fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Preferencias
        </div>
        {[
          { label: 'Meta diaria', value: `${user.goalDaily || 0} XP` },
          { label: 'Temas completados', value: `${p.doneThemes}/${p.totalThemes}` },
          { label: 'Exámenes aprobados', value: `${p.doneExams}/${p.totalExams}` },
          { label: 'Idioma de la app', value: 'Español' },
        ].map((row, i, arr) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
            fontSize: 15,
          }}>
            <span style={{ fontWeight: 700 }}>{row.label}</span>
            <span style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatTile({ icon, label, value, color }) {
  return (
    <div style={{ background: 'white', borderRadius: 'var(--r-xl)', padding: 18, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14, boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 900, color }}>{value}</div>
      </div>
    </div>
  );
}

window.AchievementsScreen = AchievementsScreen;
window.ProfileScreen = ProfileScreen;
