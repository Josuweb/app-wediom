// Tiny icon set, all pure SVG. No emoji.
const Icon = {
  Streak: ({ size = 24, color = '#FF9600', dim = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M13 2c0 4-5 5-5 10 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-1.5-4.5-3-6 0 2-1 3-3 3 1-2-.5-5-1-7z"
        fill={dim ? '#D0D0D0' : color}
      />
      <path d="M11 13c-1 1.5-1 3 0 4 .5.5 1 .5 1 0-1-1-1-2.5 0-4z" fill={dim ? '#fff' : '#FFC800'} opacity="0.7"/>
    </svg>
  ),
  Gem: ({ size = 24, color = '#1CB0F6' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M6 4h12l4 6-10 11L2 10z" fill={color} stroke="#1899D6" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M2 10h20M9 4l3 6 3-6M9 4L7 10M15 4l2 6" stroke="#1899D6" strokeWidth="1" fill="none"/>
    </svg>
  ),
  Heart: ({ size = 24, color = '#FF4B4B', filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 2 0 3.5 1 4.5 2.5C13 6 14.5 5 16.5 5c3.5 0 6 3.5 4.5 7-2 4.5-9 9-9 9z" fill={filled ? color : 'none'} stroke={color} strokeWidth="2"/>
    </svg>
  ),
  Crown: ({ size = 24, color = '#FFC800' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M3 8l4 4 5-7 5 7 4-4-2 12H5z" fill={color} stroke="#E08600" strokeWidth="1.2" strokeLinejoin="round"/>
      <circle cx="3" cy="8" r="1.5" fill={color}/>
      <circle cx="21" cy="8" r="1.5" fill={color}/>
      <circle cx="12" cy="5" r="1.5" fill={color}/>
    </svg>
  ),
  Star: ({ size = 24, color = '#FFC800', dim = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill={dim ? '#E5E5E5' : color}/>
    </svg>
  ),
  Lock: ({ size = 24, color = '#AFAFAF' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="10" rx="2" fill={color}/>
      <path d="M8 11V8a4 4 0 018 0v3" stroke={color} strokeWidth="2.2" fill="none"/>
    </svg>
  ),
  Check: ({ size = 24, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M5 12l5 5 9-11" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  X: ({ size = 24, color = '#777' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  Speaker: ({ size = 28, color = '#1CB0F6' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 4V5L7 9H3z" fill={color}/>
      <path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4M19 5c2.5 1.5 4 4 4 7s-1.5 5.5-4 7" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  Mic: ({ size = 24, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="9" y="3" width="6" height="12" rx="3" fill={color}/>
      <path d="M5 11a7 7 0 0014 0M12 18v3" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  Send: ({ size = 22, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M3 12L21 4l-4 18-5-7-9-3z" fill={color}/>
    </svg>
  ),
  Trophy: ({ size = 24, color = '#FFC800' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M7 4h10v6a5 5 0 01-10 0V4z" fill={color}/>
      <path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3" stroke={color} strokeWidth="1.8" fill="none"/>
      <rect x="9" y="15" width="6" height="3" fill={color}/>
      <rect x="6" y="18" width="12" height="3" rx="1" fill={color}/>
    </svg>
  ),
  Home: ({ size = 26, color = '#1CB0F6', filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M3 11l9-8 9 8v9a2 2 0 01-2 2h-4v-6h-6v6H5a2 2 0 01-2-2v-9z" fill={filled ? color : 'none'} stroke={color} strokeWidth="2"/>
    </svg>
  ),
  Book: ({ size = 26, color = '#777', filled = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5z" fill={filled ? color : 'none'} stroke={color} strokeWidth="2"/>
      <path d="M8 7h6M8 11h6M8 15h4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Chat: ({ size = 26, color = '#777', filled = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M21 12a8 8 0 01-11.6 7.1L4 21l1.9-5.3A8 8 0 1121 12z" fill={filled ? color : 'none'} stroke={color} strokeWidth="2"/>
    </svg>
  ),
  User: ({ size = 26, color = '#777', filled = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" fill={filled ? color : 'none'} stroke={color} strokeWidth="2"/>
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" fill={filled ? color : 'none'} stroke={color} strokeWidth="2"/>
    </svg>
  ),
  Lightning: ({ size = 24, color = '#FFC800' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" fill={color} stroke="#E08600" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  Cards: ({ size = 24, color = '#CE82FF' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="3" y="6" width="13" height="16" rx="2" fill={color} transform="rotate(-8 9 14)"/>
      <rect x="8" y="3" width="13" height="16" rx="2" fill="#A560E8"/>
      <path d="M11 7h7M11 10h5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
};

window.Icon = Icon;
