// Sección Números — cardinales, ordinales, fechas, horas

const NUM_CARDINALS_1_20 = [
  ['1','one'],['2','two'],['3','three'],['4','four'],['5','five'],
  ['6','six'],['7','seven'],['8','eight'],['9','nine'],['10','ten'],
  ['11','eleven'],['12','twelve'],['13','thirteen'],['14','fourteen'],['15','fifteen'],
  ['16','sixteen'],['17','seventeen'],['18','eighteen'],['19','nineteen'],['20','twenty'],
];
const NUM_TENS = [
  ['10','ten'],['20','twenty'],['30','thirty'],['40','forty'],['50','fifty'],
  ['60','sixty'],['70','seventy'],['80','eighty'],['90','ninety'],['100','one hundred'],
];
const NUM_BIG = [
  ['100','one hundred'],['200','two hundred'],['1,000','one thousand'],
  ['10,000','ten thousand'],['100,000','one hundred thousand'],['1,000,000','one million'],
];
const NUM_ORDINALS = [
  ['1st','first'],['2nd','second'],['3rd','third'],['4th','fourth'],['5th','fifth'],
  ['6th','sixth'],['7th','seventh'],['8th','eighth'],['9th','ninth'],['10th','tenth'],
  ['11th','eleventh'],['12th','twelfth'],['20th','twentieth'],['21st','twenty-first'],['100th','one hundredth'],
];

function numSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}

function NumerosScreen() {
  const completed = window.isSectionCompleted ? window.isSectionCompleted('numeros') : false;
  const [marked, setMarked] = React.useState(completed);
  function markDone() {
    if (window.markSectionCompleted) window.markSectionCompleted('numeros');
    setMarked(true);
  }

  return (
    <div style={{ maxWidth: 1000 }}>
      <div style={{
        background: 'linear-gradient(135deg, #14B8A6, #0F766E)',
        borderRadius: 'var(--r-2xl)', padding: '24px 28px', color: 'white',
        marginBottom: 22, boxShadow: '0 8px 24px rgba(20,184,166,0.32)',
        display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
      }}>
        <div style={{ fontSize: 42 }}>🔢</div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Números</div>
          <div style={{ fontSize: 13.5, opacity: 0.92, fontWeight: 600, lineHeight: 1.55 }}>
            <strong>Cardinales</strong> (uno, dos, tres…) y <strong>ordinales</strong> (primero, segundo, tercero…).
            Imprescindibles para contar, decir tu edad, fechas, precios y direcciones.
          </div>
        </div>
        {marked && (
          <div style={{
            background: 'rgba(255,255,255,0.25)', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 900,
          }}>
            ✓ Aprendido
          </div>
        )}
      </div>

      {/* Cardinales 1-20 */}
      <NumSection title="🔢 Cardinales · 1 a 20" color="#F59E0B" border="#FCD34D" bg="#FEF3C7">
        <NumGrid items={NUM_CARDINALS_1_20} color="#92400E"/>
      </NumSection>

      {/* Decenas */}
      <NumSection title="🔟 Decenas (de 10 a 100)" color="#0EA5E9" border="#7DD3FC" bg="#E0F2FE">
        <NumGrid items={NUM_TENS} color="#075985"/>
        <NumNote>
          Para números intermedios (21, 35, 42…) une la decena + número: <strong>twenty-one</strong>, <strong>thirty-five</strong>, <strong>forty-two</strong> (con guion).
        </NumNote>
      </NumSection>

      {/* Cantidades grandes */}
      <NumSection title="💯 Cientos, miles y millones" color="#7C3AED" border="#C4B5FD" bg="#EDE9FE">
        <NumGrid items={NUM_BIG} color="#5B21B6"/>
        <NumNote>
          En inglés se separan miles con <strong>coma (,)</strong> y decimales con <strong>punto (.)</strong>: <em>1,000.50</em>.
          Para "245" se dice <em>two hundred AND forty-five</em> (la "and" es opcional en US).
        </NumNote>
      </NumSection>

      {/* Ordinales */}
      <NumSection title="🥇 Ordinales · primero, segundo, tercero…" color="#E11D48" border="#FCA5A5" bg="#FFE4E6">
        <NumGrid items={NUM_ORDINALS} color="#9F1239"/>
        <NumNote>
          Reglas: 1st <strong>first</strong>, 2nd <strong>second</strong>, 3rd <strong>third</strong> son irregulares.
          A partir del 4to: se añade <strong>-th</strong> al cardinal. Las decenas terminan en <strong>-tieth</strong>: twentieth, thirtieth.
        </NumNote>
      </NumSection>

      {/* Fechas y horas */}
      <NumSection title="🗓️ Fechas y horas" color="#10B981" border="#6EE7B7" bg="#D1FAE5">
        <div style={{ display: 'grid', gap: 8 }}>
          <NumExample en="It's three o'clock." es="Son las tres en punto."/>
          <NumExample en="It's half past four." es="Son las cuatro y media."/>
          <NumExample en="It's a quarter to nine." es="Son las nueve menos cuarto."/>
          <NumExample en="January 1st (the first of January)" es="1 de enero"/>
          <NumExample en="My birthday is on the 15th of May." es="Mi cumpleaños es el 15 de mayo."/>
          <NumExample en="I'm twenty-five years old." es="Tengo veinticinco años."/>
        </div>
      </NumSection>

    </div>
  );
}

function NumSection({ title, color, border, bg, children }) {
  return (
    <div style={{
      background: 'white', border: `2px solid ${border}`,
      borderRadius: 'var(--r-xl)', padding: '18px 22px', marginBottom: 16,
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        display: 'inline-block', background: bg,
        padding: '6px 14px', borderRadius: 'var(--r-md)', marginBottom: 14,
        fontSize: 13, fontWeight: 900, color,
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}
function NumGrid({ items, color }) {
  return (
    <div style={{
      display: 'grid', gap: 6,
      gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
    }}>
      {items.map(([num, en]) => (
        <div key={num} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '7px 12px', background: '#F8FAFC', borderRadius: 'var(--r-md)',
          border: '1px solid var(--border)',
        }}>
          <span style={{ fontSize: 14, fontWeight: 900, color, minWidth: 38 }}>{num}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', flex: 1 }}>{en}</span>
          <button onClick={() => numSpeak(en)} title="Escuchar" style={{
            background: color, border: 'none', borderRadius: 5, width: 20, height: 20,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </button>
        </div>
      ))}
    </div>
  );
}
function NumNote({ children }) {
  return (
    <div style={{
      marginTop: 12, padding: '10px 14px', background: '#FFFBEB',
      border: '1px dashed #FCD34D', borderRadius: 'var(--r-md)',
      fontSize: 12.5, color: '#92400E', fontWeight: 600, lineHeight: 1.55,
    }}>
      💡 {children}
    </div>
  );
}
function NumExample({ en, es }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 12px', background: '#F0FDF4', borderRadius: 'var(--r-md)',
      border: '1px solid #6EE7B7',
    }}>
      <button onClick={() => numSpeak(en)} title="Escuchar" style={{
        background: '#10B981', border: 'none', borderRadius: 5, width: 22, height: 22,
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
      </button>
      <span style={{ fontSize: 13.5, fontWeight: 800, color: '#064E3B' }}>{en}</span>
      <span style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginLeft: 'auto' }}>{es}</span>
    </div>
  );
}

window.NumerosScreen = NumerosScreen;
