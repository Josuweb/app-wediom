// Hoot — our friendly green owl mascot. Drawn in SVG so it scales and reacts.
function Owl({ size = 120, mood = 'happy', style = {} }) {
  // moods: happy, sad, celebrate, thinking, wave
  const eyeY = mood === 'sad' ? 56 : 52;
  const beakD = mood === 'celebrate'
    ? 'M73 70 Q80 82 87 70 Q80 74 73 70'
    : mood === 'sad'
    ? 'M75 72 Q80 68 85 72'
    : 'M75 70 L80 76 L85 70 Z';
  const browL = mood === 'sad' ? 'M48 42 L62 38' : mood === 'thinking' ? 'M48 40 L62 44' : null;
  const browR = mood === 'sad' ? 'M98 38 L112 42' : mood === 'thinking' ? 'M98 44 L112 40' : null;

  return (
    <svg width={size} height={size} viewBox="0 0 160 160" style={{ display: 'block', ...style }}>
      {/* feet */}
      <ellipse cx="62" cy="142" rx="11" ry="6" fill="#FFC800"/>
      <ellipse cx="98" cy="142" rx="11" ry="6" fill="#FFC800"/>
      {/* body */}
      <ellipse cx="80" cy="100" rx="50" ry="48" fill="#58CC02"/>
      {/* belly */}
      <ellipse cx="80" cy="108" rx="32" ry="32" fill="#89E219"/>
      {/* wings */}
      <path d="M30 95 Q22 110 32 130 Q42 122 44 108 Z" fill="#46A302"/>
      <path d="M130 95 Q138 110 128 130 Q118 122 116 108 Z" fill="#46A302"/>
      {/* head ring */}
      <ellipse cx="80" cy="60" rx="46" ry="42" fill="#58CC02"/>
      {/* face mask */}
      <ellipse cx="80" cy="62" rx="36" ry="32" fill="#FFFFFF"/>
      {/* eye whites */}
      <circle cx="62" cy={eyeY} r="11" fill="#FFFFFF"/>
      <circle cx="98" cy={eyeY} r="11" fill="#FFFFFF"/>
      {/* eye outlines */}
      <circle cx="62" cy={eyeY} r="11" fill="none" stroke="#3C3C3C" strokeWidth="1.5"/>
      <circle cx="98" cy={eyeY} r="11" fill="none" stroke="#3C3C3C" strokeWidth="1.5"/>
      {/* pupils */}
      {mood === 'celebrate' ? (
        <>
          <path d="M57 48 L67 56 M57 56 L67 48" stroke="#3C3C3C" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M93 48 L103 56 M93 56 L103 48" stroke="#3C3C3C" strokeWidth="2.5" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <circle cx="62" cy={eyeY} r="5" fill="#3C3C3C"/>
          <circle cx="98" cy={eyeY} r="5" fill="#3C3C3C"/>
          <circle cx="64" cy={eyeY - 2} r="1.6" fill="#FFFFFF"/>
          <circle cx="100" cy={eyeY - 2} r="1.6" fill="#FFFFFF"/>
        </>
      )}
      {/* brows */}
      {browL && <path d={browL} stroke="#3C3C3C" strokeWidth="3" strokeLinecap="round" fill="none"/>}
      {browR && <path d={browR} stroke="#3C3C3C" strokeWidth="3" strokeLinecap="round" fill="none"/>}
      {/* beak */}
      <path d={beakD} fill="#FF9600" stroke="#E08600" strokeWidth="1.2" strokeLinejoin="round"/>
      {/* tuft */}
      <path d="M76 22 L80 14 L84 22 Z" fill="#46A302"/>
    </svg>
  );
}

window.Owl = Owl;

// Mascot — mascota oficial (Grumpy). Reemplaza al búho en la UI.
function Mascot({ size = 120, src = 'assets/characters/grumpy.png', alt = 'Grumpy', style = {} }) {
  return (
    <img src={src} alt={alt} width={size} height={size} loading="lazy"
      style={{ display: 'block', objectFit: 'contain', ...style }}/>
  );
}
window.Mascot = Mascot;
