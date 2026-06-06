// Lesson Complete — full-page celebration
function LessonCompleteScreen({ result, user, onContinue }) {
  const accuracy = result ? Math.round((result.correct / result.total) * 100) : 100;
  const pieces = React.useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.8,
    duration: 2.2 + Math.random() * 2,
    color: ['#F59E0B','#F97316','#0EA5E9','#8B5CF6','#fff','#F43F5E','#10B981'][Math.floor(Math.random() * 7)],
    size: 7 + Math.random() * 9,
    rot: Math.random() * 360,
  })), []);

  return (
    <div style={{
      minHeight: '100vh', height: '100vh',
      background: 'linear-gradient(160deg, #6366F1 0%, #8B5CF6 60%, #A78BFA 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Confetti */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {pieces.map(p => (
          <div key={p.id} style={{
            position: 'absolute', top: -20, left: `${p.left}%`,
            width: p.size, height: p.size * 1.4, background: p.color,
            borderRadius: 3, transform: `rotate(${p.rot}deg)`,
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}/>
        ))}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
        <div className="breathe" style={{ marginBottom: 20 }}>
          <Mascot size={140} style={{ margin: '0 auto', filter: 'drop-shadow(0 8px 10px rgba(0,0,0,0.25))' }}/>
        </div>

        <h1 style={{ color: 'white', fontSize: 42, fontWeight: 900, marginBottom: 6,
          textShadow: '0 4px 0 rgba(0,0,0,0.15)', letterSpacing: -0.5 }}>
          ¡Lección completa!
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, fontWeight: 700, marginBottom: 36 }}>
          Excelente trabajo, {user.name} 🎉
        </p>

        {/* Stat cards */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 40 }}>
          <StatCard icon="⚡" label="XP GANADO" value={`+${result?.xp || 10}`} color="#F59E0B"/>
          <StatCard icon="🎯" label="PRECISIÓN" value={`${accuracy}%`} color="#10B981"/>
          <StatCard icon="🔥" label="RACHA" value={`${user.streak} días`} color="#F97316"/>
        </div>

        <button className="btn" onClick={onContinue} style={{
          background: 'white', color: 'var(--indigo)', fontSize: 16,
          padding: '16px 48px', borderRadius: 'var(--r-xl)',
          boxShadow: '0 6px 0 rgba(0,0,0,0.2)', fontWeight: 900,
          border: 'none', cursor: 'pointer',
        }}>
          CONTINUAR →
        </button>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div className="bounce-in" style={{
      background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
      borderRadius: 'var(--r-xl)', padding: '16px 20px', minWidth: 120,
      border: '1.5px solid rgba(255,255,255,0.3)',
    }}>
      <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>{value}</div>
    </div>
  );
}

window.LessonCompleteScreen = LessonCompleteScreen;
