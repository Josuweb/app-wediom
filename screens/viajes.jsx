// ✈️ Para Viajar — 30 escenarios reales de viaje en 6 categorías. Cada uno
// presenta una situación en inglés (con traducción ES oculta tras 👁️) y el
// alumno arma la frase exacta que debería usar en esa situación.

const PV_TOPIC_LABELS = {
  'pres-simple':       'Presente Simple',
  'pres-cont':         'Presente Continuo',
  'past-simple':       'Pasado Simple',
  'modal-can':         'Modal Can',
  'modal-could':       'Modal Could (cortesía)',
  'modal-would':       'Modal Would (would like)',
  'modal-should':      'Modal Should',
  'comparativo':       'Comparativos',
  'pregunta-do':       'Preguntas con Do / Does',
  'pregunta-wh':       'Preguntas con Where / What / How',
  'cuantificador':     'Cuantificadores (some, any, much, many, a few, a little…)',
};

const PV_CATEGORIES = [
  // ── AEROPUERTO ──────────────────────────────────────────────────────
  {
    id: 'aeropuerto',
    title: 'En el aeropuerto',
    icon: '✈️',
    desc: 'Cargar el teléfono, perder el vuelo, equipaje…',
    color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' },
    scenarios: [
      {
        contextEn: "You're at the airport and your phone is completely dead. You see a charging station near a stranger and need to ask permission politely.",
        contextEs: 'Estás en el aeropuerto y tu teléfono está totalmente descargado. Ves una estación de carga cerca de un desconocido y necesitas pedir permiso de forma educada.',
        en: ['Excuse','me','could','I','charge','my','phone','here'],
        alternatives: [
          ['Excuse','me','can','I','charge','my','phone','here'],
          ['May','I','charge','my','phone','here','please'],
          ['Can','I','please','charge','my','phone','here'],
        ],
        es: 'Disculpe, ¿podría cargar mi teléfono aquí?',
        tense: 'Modal Could (pregunta cortés)',
        hint: '"Excuse me" + Modal Could/Can/May + sujeto + verbo base + objeto + lugar',
        topics: ['modal-could'],
      },
      {
        contextEn: 'You arrive at the gate but realize your boarding pass is gone. Tell the airline staff what happened.',
        contextEs: 'Llegas a la puerta de embarque pero te das cuenta que tu pase de abordar no está. Cuéntale al personal de la aerolínea lo que pasó.',
        en: ['I','think','I','lost','my','boarding','pass'],
        alternatives: [
          ['I','lost','my','boarding','pass'],
        ],
        es: 'Creo que perdí mi pase de abordar.',
        tense: 'Presente Simple + Pasado Simple irregular',
        hint: 'Presente Simple + "that" implícito + Pasado Simple irregular',
        topics: ['past-simple','pres-simple'],
      },
      {
        contextEn: "You missed your flight and you don't know what to do. Approach the counter and ask the agent for help.",
        contextEs: 'Perdiste tu vuelo y no sabes qué hacer. Acércate al mostrador y pide ayuda al agente.',
        en: ['I','missed','my','flight','can','you','help','me'],
        alternatives: [
          ['I','missed','my','flight','could','you','help','me'],
        ],
        es: 'Perdí mi vuelo, ¿puede ayudarme?',
        tense: 'Pasado Simple regular + Modal Can/Could',
        hint: 'Pasado Simple regular + objeto + Modal Can/Could en pregunta',
        topics: ['past-simple','modal-can'],
      },
      {
        contextEn: "You're waiting at baggage claim and your suitcase never appears. Report the problem to the airline.",
        contextEs: 'Estás esperando en la zona de equipajes y tu maleta nunca aparece. Reporta el problema a la aerolínea.',
        en: ['My','luggage','did','not','arrive'],
        es: 'Mi equipaje no llegó.',
        tense: 'Pasado Simple (negativo)',
        hint: 'Sujeto + did not + verbo base',
        topics: ['past-simple'],
      },
      {
        contextEn: "You're walking through the airport but can't find your gate. Ask a staff member for the location.",
        contextEs: 'Estás caminando por el aeropuerto pero no encuentras tu puerta de embarque. Pregúntale a un empleado por la ubicación.',
        en: ['Where','is','gate','number','twelve'],
        alternatives: [
          ['Where','is','gate','twelve'],
        ],
        es: '¿Dónde está la puerta número doce?',
        tense: 'Presente Simple (pregunta)',
        hint: 'Where + is + sujeto específico (con o sin "number")',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'You arrived two hours before your flight and need to check in at the counter.',
        contextEs: 'Llegaste dos horas antes de tu vuelo y necesitas hacer check-in en el mostrador.',
        en: ['I','need','to','check','in','for','my','flight'],
        es: 'Necesito hacer check-in para mi vuelo.',
        tense: 'Presente Simple',
        hint: 'Sujeto + Presente Simple + "to" + verbo base + preposición + objeto',
        topics: ['pres-simple'],
      },
      {
        contextEn: "You're at the check-in counter and prefer a window seat for a long flight.",
        contextEs: 'Estás en el mostrador de check-in y prefieres un asiento de ventana para un vuelo largo.',
        en: ['I','would','like','a','window','seat','please'],
        alternatives: [
          ['Can','I','have','a','window','seat','please'],
          ['Could','I','have','a','window','seat','please'],
        ],
        es: 'Me gustaría un asiento de ventana, por favor.',
        tense: 'Modal Would (would like) / Can / Could',
        hint: '"I would like" o "Can/Could I have" + artículo + objeto + "please"',
        topics: ['modal-would','modal-can','modal-could'],
      },
      {
        contextEn: 'Your suitcase looks heavy. Ask the agent the maximum weight allowed for checked luggage.',
        contextEs: 'Tu maleta se ve pesada. Pregúntale al agente el peso máximo permitido para equipaje facturado.',
        en: ['What','is','the','maximum','weight','for','luggage'],
        es: '¿Cuál es el peso máximo para el equipaje?',
        tense: 'Presente Simple (pregunta)',
        hint: '"What" + is + the + adjetivo + sustantivo + "for" + objeto',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'You have a connecting flight in another city and want to know if you must pick up your luggage there.',
        contextEs: 'Tienes un vuelo de conexión en otra ciudad y quieres saber si debes recoger tu equipaje allá.',
        en: ['Do','I','need','to','collect','my','luggage'],
        alternatives: [
          ['Do','I','have','to','collect','my','luggage'],
        ],
        es: '¿Necesito recoger mi equipaje?',
        tense: 'Presente Simple (pregunta con Do)',
        hint: 'Do + sujeto + "need to" o "have to" + verbo base + objeto',
        topics: ['pres-simple','pregunta-do'],
      },
      {
        contextEn: 'You urgently need to find a bathroom in the airport terminal.',
        contextEs: 'Necesitas encontrar urgentemente un baño en la terminal del aeropuerto.',
        en: ['Where','is','the','nearest','bathroom'],
        es: '¿Dónde está el baño más cercano?',
        tense: 'Presente Simple (pregunta) + Superlativo',
        hint: 'Where + is + the + superlativo (-est) + sustantivo',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'You have time before boarding and want to buy a souvenir at the duty-free shop.',
        contextEs: 'Tienes tiempo antes de abordar y quieres comprar un suvenir en la tienda libre de impuestos.',
        en: ['Where','is','the','duty','free','shop'],
        es: '¿Dónde está la tienda libre de impuestos?',
        tense: 'Presente Simple (pregunta)',
        hint: 'Where + is + the + sustantivo compuesto',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'You want to confirm at the information desk if your flight is on time or delayed.',
        contextEs: 'Quieres confirmar en el mostrador de información si tu vuelo está a tiempo o retrasado.',
        en: ['Is','my','flight','on','time'],
        es: '¿Mi vuelo está a tiempo?',
        tense: 'Presente Simple (pregunta)',
        hint: 'Is + sujeto + preposición + sustantivo',
        topics: ['pres-simple'],
      },
      {
        contextEn: 'Your luggage is very heavy and you would like to use a trolley to move it.',
        contextEs: 'Tu equipaje es muy pesado y te gustaría usar un carrito para moverlo.',
        en: ['Where','can','I','find','a','luggage','cart'],
        es: '¿Dónde puedo encontrar un carrito para equipaje?',
        tense: 'Modal Can (pregunta con Where)',
        hint: 'Where + can + sujeto + verbo base + artículo + sustantivo compuesto',
        topics: ['modal-can','pregunta-wh'],
      },
      {
        contextEn: 'Someone in your group has trouble walking. You need to request wheelchair assistance.',
        contextEs: 'Alguien en tu grupo tiene dificultad para caminar. Necesitas solicitar asistencia con silla de ruedas.',
        en: ['We','need','a','wheelchair','please'],
        alternatives: [
          ['Could','we','have','a','wheelchair','please'],
        ],
        es: 'Necesitamos una silla de ruedas, por favor.',
        tense: 'Presente Simple / Modal Could',
        hint: 'Sujeto + "need" o Could + verbo base + artículo + objeto + "please"',
        topics: ['pres-simple','modal-could'],
      },
      {
        contextEn: 'You have a layover in another country and want to know how many hours it will be.',
        contextEs: 'Tienes una escala en otro país y quieres saber cuántas horas será.',
        en: ['How','long','is','the','layover'],
        es: '¿Cuánto dura la escala?',
        tense: 'Presente Simple (pregunta)',
        hint: '"How long" + is + the + sustantivo',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'You need local currency before leaving the airport. Ask where to exchange money.',
        contextEs: 'Necesitas moneda local antes de salir del aeropuerto. Pregunta dónde cambiar dinero.',
        en: ['Where','can','I','exchange','money'],
        alternatives: [
          ['Where','can','I','change','money'],
        ],
        es: '¿Dónde puedo cambiar dinero?',
        tense: 'Modal Can (pregunta con Where)',
        hint: 'Where + can + sujeto + verbo base (change/exchange) + objeto',
        topics: ['modal-can','pregunta-wh'],
      },
      {
        contextEn: "You're running late and arrive at the gate at the last minute. Ask if there's still time to board.",
        contextEs: 'Vas tarde y llegas a la puerta en el último minuto. Pregunta si todavía hay tiempo para abordar.',
        en: ['Am','I','too','late','for','boarding'],
        es: '¿Es muy tarde para abordar?',
        tense: 'Presente Simple (pregunta con to be)',
        hint: 'Am + sujeto + "too" + adjetivo + "for" + sustantivo',
        topics: ['pres-simple'],
      },
      {
        contextEn: "You realized after landing that you left your jacket on the plane.",
        contextEs: 'Te diste cuenta después de aterrizar que dejaste tu chaqueta en el avión.',
        en: ['I','forgot','my','jacket','on','the','plane'],
        alternatives: [
          ['I','left','my','jacket','on','the','plane'],
        ],
        es: 'Olvidé mi chaqueta en el avión.',
        tense: 'Pasado Simple irregular',
        hint: 'Sujeto + Pasado Simple irregular (forgot/left) + pronombre posesivo + objeto + lugar',
        topics: ['past-simple'],
      },
      {
        contextEn: 'When booking online you requested a vegetarian meal. Confirm with the agent at check-in.',
        contextEs: 'Al reservar online pediste una comida vegetariana. Confírmalo con el agente en el check-in.',
        en: ['I','ordered','a','vegetarian','meal'],
        es: 'Pedí una comida vegetariana.',
        tense: 'Pasado Simple regular',
        hint: 'Sujeto + Pasado Simple regular + artículo + adjetivo + sustantivo',
        topics: ['past-simple'],
      },
      {
        contextEn: 'You think you left your phone at the security check point. Report it.',
        contextEs: 'Crees que dejaste tu teléfono en el punto de control de seguridad. Repórtalo.',
        en: ['I','left','my','phone','at','security'],
        alternatives: [
          ['I','forgot','my','phone','at','security'],
        ],
        es: 'Dejé mi teléfono en seguridad.',
        tense: 'Pasado Simple irregular',
        hint: 'Sujeto + Pasado Simple irregular (left/forgot) + pronombre posesivo + objeto + lugar',
        topics: ['past-simple'],
      },
      {
        contextEn: "You're at the airline counter and the agent asks about your checked bags. You only checked one suitcase.",
        contextEs: 'Estás en el mostrador y la agente te pregunta por tus maletas facturadas. Solo facturaste una.',
        en: ['I','do','not','have','many','bags'],
        alternatives: [
          ['I','do','not','have','a','lot','of','bags'],
        ],
        es: 'No tengo muchas maletas.',
        tense: 'Presente Simple (negativo) + Cuantificador',
        hint: 'do not + have + cuantificador para contables + sustantivo plural',
        topics: ['pres-simple','cuantificador'],
      },
    ],
  },

  // ── HOTEL ───────────────────────────────────────────────────────────
  {
    id: 'hotel',
    title: 'En el hotel',
    icon: '🏨',
    desc: 'Check-in, problemas en la habitación, wifi…',
    color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD', solid: '#7C3AED' },
    scenarios: [
      {
        contextEn: 'You just arrived at the hotel reception. You want to check in and confirm that they have your booking.',
        contextEs: 'Acabas de llegar a la recepción del hotel. Quieres hacer el check-in y confirmar que tienen tu reserva.',
        en: ['I','have','a','reservation','under','my','name'],
        alternatives: [
          ['I','have','a','reservation','in','my','name'],
        ],
        es: 'Tengo una reservación a mi nombre.',
        tense: 'Presente Simple',
        hint: 'Sujeto + Presente Simple + objeto + complemento de posesión',
        topics: ['pres-simple'],
      },
      {
        contextEn: "You're in your hotel room and the shower won't turn on. Go down to reception and report the problem.",
        contextEs: 'Estás en tu habitación de hotel y la regadera no enciende. Baja a recepción y reporta el problema.',
        en: ['The','shower','in','my','room','is','not','working'],
        es: 'La regadera de mi habitación no está funcionando.',
        tense: 'Presente Continuo (negativo)',
        hint: 'Sujeto + ubicación + is not + verbo-ing',
        topics: ['pres-cont'],
      },
      {
        contextEn: "It's your first morning at the hotel. Ask the receptionist about breakfast times.",
        contextEs: 'Es tu primera mañana en el hotel. Pregúntale al recepcionista a qué hora es el desayuno.',
        en: ['What','time','does','breakfast','start'],
        alternatives: [
          ['When','does','breakfast','start'],
        ],
        es: '¿A qué hora empieza el desayuno?',
        tense: 'Presente Simple (pregunta con Does)',
        hint: '"What time" + does + sujeto + verbo base',
        topics: ['pres-simple','pregunta-do','pregunta-wh'],
      },
      {
        contextEn: 'You want to connect your laptop to the internet but you need the password from reception.',
        contextEs: 'Quieres conectar tu laptop a internet pero necesitas la contraseña de recepción.',
        en: ['Could','you','give','me','the','wifi','password'],
        alternatives: [
          ['Can','you','give','me','the','wifi','password'],
          ['Could','I','have','the','wifi','password','please'],
        ],
        es: '¿Podría darme la contraseña del wifi?',
        tense: 'Modal Could (pregunta cortés)',
        hint: 'Could + sujeto + verbo base + pronombre objeto + objeto',
        topics: ['modal-could'],
      },
      {
        contextEn: 'You are enjoying your trip and want to stay one extra night. Ask reception if it is possible.',
        contextEs: 'Estás disfrutando tu viaje y quieres quedarte una noche extra. Pregunta en recepción si es posible.',
        en: ['I','would','like','to','stay','one','more','night'],
        alternatives: [
          ['Can','I','stay','one','more','night'],
          ['Could','I','stay','one','more','night'],
        ],
        es: 'Me gustaría quedarme una noche más.',
        tense: 'Modal Would (would like)',
        hint: '"I would like to" + verbo base + cantidad + sustantivo',
        topics: ['modal-would'],
      },
      {
        contextEn: "It's your honeymoon and you want a special room — one with a view of the sea.",
        contextEs: 'Es tu luna de miel y quieres una habitación especial — una con vista al mar.',
        en: ['I','would','like','a','room','with','a','sea','view'],
        alternatives: [
          ['Can','I','have','a','room','with','a','sea','view'],
          ['Could','I','have','a','room','with','a','sea','view'],
        ],
        es: 'Me gustaría una habitación con vista al mar.',
        tense: 'Modal Would (would like)',
        hint: '"I would like" + artículo + sustantivo + "with" + complemento',
        topics: ['modal-would'],
      },
      {
        contextEn: 'Your room is short on towels and you need a few more for the shower.',
        contextEs: 'Tu habitación tiene pocas toallas y necesitas unas pocas más para la regadera.',
        en: ['Could','you','bring','more','towels','please'],
        alternatives: [
          ['Can','you','bring','more','towels','please'],
          ['Could','I','have','more','towels','please'],
        ],
        es: '¿Podrían traer más toallas, por favor?',
        tense: 'Modal Could (pregunta cortés)',
        hint: 'Could + sujeto + verbo base + cuantificador + sustantivo + "please"',
        topics: ['modal-could'],
      },
      {
        contextEn: 'You have an early flight tomorrow. Ask reception for a wake-up call at five.',
        contextEs: 'Tienes un vuelo temprano mañana. Pídele a recepción una llamada para despertarte a las cinco.',
        en: ['Can','I','have','a','wake','up','call','at','five'],
        alternatives: [
          ['Could','I','have','a','wake','up','call','at','five'],
        ],
        es: '¿Puede llamarme para despertarme a las cinco?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + artículo + sustantivo compuesto + "at" + hora',
        topics: ['modal-can'],
      },
      {
        contextEn: 'Your flight is in the evening but check-out is at noon. Ask if you can stay later.',
        contextEs: 'Tu vuelo es por la noche pero el check-out es a mediodía. Pregunta si puedes quedarte hasta más tarde.',
        en: ['Is','late','check','out','possible'],
        es: '¿Es posible un check-out tardío?',
        tense: 'Presente Simple (pregunta con to be)',
        hint: 'Is + adjetivo + sustantivo compuesto + adjetivo',
        topics: ['pres-simple'],
      },
      {
        contextEn: 'You want to work out before breakfast. Ask reception for the gym location.',
        contextEs: 'Quieres entrenar antes del desayuno. Pregunta en recepción dónde está el gimnasio.',
        en: ['Where','is','the','hotel','gym'],
        alternatives: [
          ['Where','is','the','gym'],
        ],
        es: '¿Dónde está el gimnasio del hotel?',
        tense: 'Presente Simple (pregunta)',
        hint: 'Where + is + the + sustantivo + sustantivo',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'You need to wash some clothes urgently before your next destination.',
        contextEs: 'Necesitas lavar algo de ropa urgentemente antes de tu siguiente destino.',
        en: ['Do','you','have','laundry','service'],
        alternatives: [
          ['Is','there','laundry','service'],
        ],
        es: '¿Tienen servicio de lavandería?',
        tense: 'Presente Simple (pregunta con Do)',
        hint: 'Do + sujeto + verbo base + sustantivo + sustantivo',
        topics: ['pres-simple','pregunta-do'],
      },
      {
        contextEn: "It's very hot in your room and the air conditioning is broken.",
        contextEs: 'Hace mucho calor en tu habitación y el aire acondicionado está roto.',
        en: ['The','air','conditioning','is','not','working'],
        es: 'El aire acondicionado no está funcionando.',
        tense: 'Presente Continuo (negativo)',
        hint: 'Sujeto compuesto + is not + verbo-ing',
        topics: ['pres-cont'],
      },
      {
        contextEn: 'You want to discover the city with a local guide. Ask reception about tours.',
        contextEs: 'Quieres descubrir la ciudad con un guía local. Pregunta en recepción sobre tours.',
        en: ['I','would','like','to','book','a','city','tour'],
        alternatives: [
          ['Can','I','book','a','city','tour'],
          ['Could','I','book','a','city','tour'],
        ],
        es: 'Me gustaría reservar un tour por la ciudad.',
        tense: 'Modal Would (would like)',
        hint: '"I would like to" + verbo base + artículo + sustantivo + sustantivo',
        topics: ['modal-would'],
      },
      {
        contextEn: 'You checked out but your flight is at night. Ask reception to store your bags.',
        contextEs: 'Hiciste check-out pero tu vuelo es por la noche. Pídele a recepción que guarde tus maletas.',
        en: ['Can','you','keep','my','luggage','until','tonight'],
        alternatives: [
          ['Could','you','keep','my','luggage','until','tonight'],
        ],
        es: '¿Pueden guardar mi equipaje hasta esta noche?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + pronombre posesivo + objeto + "until" + marcador de tiempo',
        topics: ['modal-can'],
      },
      {
        contextEn: 'You need to go to the train station. Ask reception to call a taxi for you.',
        contextEs: 'Necesitas ir a la estación de tren. Pídele a recepción que te llame un taxi.',
        en: ['Could','you','call','a','taxi','for','me'],
        alternatives: [
          ['Can','you','call','a','taxi','for','me'],
        ],
        es: '¿Podría llamarme un taxi?',
        tense: 'Modal Could (pregunta cortés)',
        hint: 'Could + sujeto + verbo base + artículo + sustantivo + "for" + pronombre objeto',
        topics: ['modal-could'],
      },
      {
        contextEn: "Your room is too noisy because it's near the elevator. Ask to be moved to a quieter one.",
        contextEs: 'Tu habitación es muy ruidosa porque está cerca del elevador. Pide ser cambiado a una más silenciosa.',
        en: ['Could','I','have','a','quieter','room'],
        alternatives: [
          ['Can','I','have','a','quieter','room'],
          ['I','would','like','a','quieter','room'],
        ],
        es: '¿Podría tener una habitación más silenciosa?',
        tense: 'Modal Could + Comparativo',
        hint: 'Could + sujeto + verbo base + artículo + comparativo (-er) + sustantivo',
        topics: ['modal-could','comparativo'],
      },
      {
        contextEn: 'You want to have dinner at a good local restaurant tonight. Ask reception for a recommendation.',
        contextEs: 'Quieres cenar en un buen restaurante local esta noche. Pide una recomendación en recepción.',
        en: ['Can','you','recommend','a','good','restaurant','nearby'],
        alternatives: [
          ['Could','you','recommend','a','good','restaurant','nearby'],
        ],
        es: '¿Puede recomendar un buen restaurante cercano?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + artículo + adjetivo + sustantivo + adverbio',
        topics: ['modal-can'],
      },
      {
        contextEn: 'You sleep with two pillows but the bed has only one. Ask for an extra one.',
        contextEs: 'Duermes con dos almohadas pero la cama tiene solo una. Pide una extra.',
        en: ['Could','I','have','an','extra','pillow','please'],
        alternatives: [
          ['Can','I','have','an','extra','pillow','please'],
        ],
        es: '¿Podría tener una almohada extra, por favor?',
        tense: 'Modal Could (pregunta cortés)',
        hint: 'Could + sujeto + verbo base + artículo + adjetivo + sustantivo + "please"',
        topics: ['modal-could'],
      },
      {
        contextEn: 'You need to iron a shirt before an important meeting. Ask for an iron.',
        contextEs: 'Necesitas planchar una camisa antes de una reunión importante. Pide una plancha.',
        en: ['Do','you','have','an','iron','I','can','use'],
        es: '¿Tienen una plancha que pueda usar?',
        tense: 'Presente Simple + Modal Can',
        hint: 'Do + sujeto + verbo base + artículo + sustantivo + cláusula con Modal Can',
        topics: ['pres-simple','pregunta-do','modal-can'],
      },
      {
        contextEn: "You can't find the key card to your room. Tell reception what happened.",
        contextEs: 'No encuentras la tarjeta llave de tu habitación. Cuéntale a recepción lo que pasó.',
        en: ['I','lost','my','room','key','card'],
        alternatives: [
          ['I','lost','my','key','card'],
        ],
        es: 'Perdí la tarjeta de mi habitación.',
        tense: 'Pasado Simple irregular',
        hint: 'Sujeto + Pasado Simple irregular + pronombre posesivo + sustantivo compuesto',
        topics: ['past-simple'],
      },
      {
        contextEn: "You arrive without a reservation and want to know if there are rooms free for tonight.",
        contextEs: 'Llegas sin reserva y quieres saber si hay habitaciones libres para esta noche.',
        en: ['Do','you','have','any','rooms','available','tonight'],
        alternatives: [
          ['Are','there','any','rooms','available','tonight'],
        ],
        es: '¿Tienen alguna habitación disponible esta noche?',
        tense: 'Presente Simple (pregunta) + Cuantificador',
        hint: 'Do + sujeto + verbo base + "any" + sustantivo contable plural + adjetivo + marcador',
        topics: ['pres-simple','pregunta-do','cuantificador'],
      },
    ],
  },

  // ── RESTAURANTE ─────────────────────────────────────────────────────
  {
    id: 'restaurante',
    title: 'En el restaurante',
    icon: '🍽️',
    desc: 'Pedir mesa, menú, comida especial, la cuenta…',
    color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#F59E0B' },
    scenarios: [
      {
        contextEn: 'You and your partner just walked into a restaurant. Tell the host how many people are with you.',
        contextEs: 'Tú y tu pareja acaban de entrar a un restaurante. Dile al anfitrión cuántas personas son.',
        en: ['A','table','for','two','please'],
        alternatives: [
          ['Table','for','two','please'],
        ],
        es: 'Una mesa para dos, por favor.',
        tense: 'Frase corta',
        hint: 'Artículo + sustantivo + "for" + número + "please"',
        topics: [],
      },
      {
        contextEn: "You're seated at the table and the waiter approaches. Ask politely to see what they offer.",
        contextEs: 'Estás sentado a la mesa y se acerca el mesero. Pide cortésmente ver lo que ofrecen.',
        en: ['Can','I','see','the','menu','please'],
        alternatives: [
          ['Could','I','see','the','menu','please'],
          ['May','I','see','the','menu','please'],
        ],
        es: '¿Puedo ver el menú, por favor?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + objeto + "please"',
        topics: ['modal-can'],
      },
      {
        contextEn: "You're vegetarian and want to know if the restaurant has dishes without meat.",
        contextEs: 'Eres vegetariano y quieres saber si el restaurante tiene platos sin carne.',
        en: ['Do','you','have','any','vegetarian','options'],
        alternatives: [
          ['Are','there','any','vegetarian','options'],
        ],
        es: '¿Tienen opciones vegetarianas?',
        tense: 'Presente Simple (pregunta con Do)',
        hint: 'Do + sujeto + verbo base + "any" + adjetivo + sustantivo',
        topics: ['pres-simple','pregunta-do'],
      },
      {
        contextEn: 'You finished eating and want to pay. Ask the waiter for the check politely.',
        contextEs: 'Terminaste de comer y quieres pagar. Pide la cuenta al mesero con cortesía.',
        en: ['Could','I','have','the','bill','please'],
        alternatives: [
          ['Can','I','have','the','bill','please'],
          ['Could','we','have','the','bill','please'],
        ],
        es: '¿Podría traerme la cuenta, por favor?',
        tense: 'Modal Could (pregunta cortés)',
        hint: 'Could + sujeto + verbo base + objeto + "please"',
        topics: ['modal-could'],
      },
      {
        contextEn: "You're thirsty and want to order some water. Ask politely.",
        contextEs: 'Tienes sed y quieres pedir un poco de agua. Pídelo de forma cortés.',
        en: ['I','would','like','a','glass','of','water'],
        alternatives: [
          ['Can','I','have','a','glass','of','water'],
          ['Could','I','have','a','glass','of','water'],
        ],
        es: 'Me gustaría un vaso de agua.',
        tense: 'Modal Would (would like)',
        hint: '"I would like" + artículo + sustantivo + "of" + objeto',
        topics: ['modal-would'],
      },
      {
        contextEn: "You just sat down and want bread for the table while you read the menu.",
        contextEs: 'Acabas de sentarte y quieres un poco de pan para la mesa mientras lees el menú.',
        en: ['Could','we','have','some','bread','please'],
        alternatives: [
          ['Can','we','have','some','bread','please'],
          ['Could','I','have','a','little','bread','please'],
        ],
        es: '¿Podríamos tener un poco de pan, por favor?',
        tense: 'Modal Could (pregunta cortés) + Cuantificador',
        hint: 'Could + sujeto + verbo base + cuantificador (some / a little) + incontable + "please"',
        topics: ['modal-could','cuantificador'],
      },
    ],
  },

  // ── TRANSPORTE Y DIRECCIONES ────────────────────────────────────────
  {
    id: 'transporte',
    title: 'Transporte y direcciones',
    icon: '🚖',
    desc: 'Taxi, precios, metro, autobuses, direcciones…',
    color: { bg: '#FFE4E6', text: '#9F1239', border: '#FCA5A5', solid: '#E11D48' },
    scenarios: [
      {
        contextEn: "You just got out of the airport and need a taxi to take you downtown.",
        contextEs: 'Acabas de salir del aeropuerto y necesitas un taxi que te lleve al centro.',
        en: ['Can','you','take','me','to','the','city','center'],
        alternatives: [
          ['Could','you','take','me','to','the','city','center'],
        ],
        es: '¿Puede llevarme al centro de la ciudad?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + pronombre objeto + lugar',
        topics: ['modal-can'],
      },
      {
        contextEn: 'Before getting into the taxi, you want to know the price of the trip to the airport.',
        contextEs: 'Antes de subirte al taxi, quieres saber el precio del viaje al aeropuerto.',
        en: ['How','much','does','it','cost','to','the','airport'],
        alternatives: [
          ['How','much','is','it','to','the','airport'],
        ],
        es: '¿Cuánto cuesta hasta el aeropuerto?',
        tense: 'Presente Simple (pregunta con Does)',
        hint: '"How much" + does + sujeto + verbo base + destino',
        topics: ['pres-simple','pregunta-do','pregunta-wh'],
      },
      {
        contextEn: "You're lost in the city and want to take the subway. Ask a passerby for directions.",
        contextEs: 'Estás perdido en la ciudad y quieres tomar el metro. Pregúntale a un transeúnte cómo llegar.',
        en: ['Excuse','me','where','is','the','metro','station'],
        alternatives: [
          ['Where','is','the','metro','station'],
        ],
        es: 'Disculpe, ¿dónde está la estación del metro?',
        tense: 'Presente Simple (pregunta)',
        hint: '"Excuse me" + Where + is + sujeto específico',
        topics: ['pres-simple','pregunta-wh'],
      },
      {
        contextEn: 'At the train station, you want to buy a ticket to London — round trip.',
        contextEs: 'En la estación de tren, quieres comprar un boleto a Londres — ida y vuelta.',
        en: ['A','return','ticket','to','London','please'],
        es: 'Un boleto de regreso a Londres, por favor.',
        tense: 'Frase corta',
        hint: 'Artículo + adjetivo + sustantivo + "to" + lugar + "please"',
        topics: [],
      },
      {
        contextEn: "You're at the bus stop and want to confirm if this bus goes to the museum.",
        contextEs: 'Estás en la parada de autobús y quieres confirmar si este autobús va al museo.',
        en: ['Does','this','bus','go','to','the','museum'],
        alternatives: [
          ['Is','this','bus','going','to','the','museum'],
        ],
        es: '¿Este autobús va al museo?',
        tense: 'Presente Simple (pregunta con Does)',
        hint: 'Does + demostrativo + sujeto + verbo base + destino',
        topics: ['pres-simple','pregunta-do'],
      },
      {
        contextEn: 'You just realized you only have a small amount of cash, but need a taxi to your hotel.',
        contextEs: 'Te das cuenta de que solo tienes una pequeña cantidad de efectivo, pero necesitas un taxi al hotel.',
        en: ['I','only','have','a','little','cash'],
        alternatives: [
          ['I','do','not','have','much','cash'],
        ],
        es: 'Solo tengo un poco de efectivo.',
        tense: 'Presente Simple + Cuantificador',
        hint: '"a little" + incontable (cash) en sentido positivo / o "do not have much" en negativo',
        topics: ['pres-simple','cuantificador'],
      },
    ],
  },

  // ── COMPRAS ─────────────────────────────────────────────────────────
  {
    id: 'compras',
    title: 'De compras',
    icon: '🛍️',
    desc: 'Precios, tallas, colores, pagar con tarjeta…',
    color: { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4', solid: '#EC4899' },
    scenarios: [
      {
        contextEn: 'In a clothing store, you found a shirt you like. Ask the salesperson the price.',
        contextEs: 'En una tienda de ropa, encontraste una camisa que te gusta. Pregúntale al vendedor el precio.',
        en: ['How','much','does','this','cost'],
        alternatives: [
          ['How','much','is','this'],
        ],
        es: '¿Cuánto cuesta esto?',
        tense: 'Presente Simple (pregunta con Does)',
        hint: '"How much" + does + demostrativo + verbo base',
        topics: ['pres-simple','pregunta-do','pregunta-wh'],
      },
      {
        contextEn: 'You want to try on a pair of jeans before buying them. Ask the assistant.',
        contextEs: 'Quieres probarte unos jeans antes de comprarlos. Pregúntale al asistente.',
        en: ['Can','I','try','this','on','please'],
        alternatives: [
          ['Could','I','try','this','on','please'],
          ['May','I','try','this','on','please'],
        ],
        es: '¿Puedo probármelo, por favor?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + demostrativo + "on" + "please"',
        topics: ['modal-can'],
      },
      {
        contextEn: 'The shirt you tried on is too small. Ask if they have a bigger size.',
        contextEs: 'La camisa que te probaste te queda chica. Pregunta si tienen una talla más grande.',
        en: ['Do','you','have','this','in','a','larger','size'],
        alternatives: [
          ['Do','you','have','a','larger','size'],
        ],
        es: '¿Tienen esto en una talla más grande?',
        tense: 'Presente Simple (pregunta) + Comparativo',
        hint: 'Do + sujeto + verbo base + objeto + preposición + comparativo (-er) + sustantivo',
        topics: ['pres-simple','pregunta-do','comparativo'],
      },
      {
        contextEn: "You're at the checkout and want to pay with your credit card instead of cash.",
        contextEs: 'Estás en la caja y quieres pagar con tu tarjeta de crédito en lugar de efectivo.',
        en: ['Can','I','pay','with','credit','card'],
        alternatives: [
          ['Could','I','pay','with','credit','card'],
          ['Can','I','pay','by','credit','card'],
        ],
        es: '¿Puedo pagar con tarjeta de crédito?',
        tense: 'Modal Can (pregunta)',
        hint: 'Can + sujeto + verbo base + "with" + método de pago',
        topics: ['modal-can'],
      },
      {
        contextEn: 'You like the shoes but the color is not your favorite. Ask if they have another option.',
        contextEs: 'Te gustan los zapatos pero el color no es tu favorito. Pregunta si tienen otra opción.',
        en: ['Do','you','have','it','in','another','color'],
        alternatives: [
          ['Do','you','have','a','different','color'],
        ],
        es: '¿Lo tienen en otro color?',
        tense: 'Presente Simple (pregunta con Do)',
        hint: 'Do + sujeto + verbo base + pronombre objeto + preposición + adjetivo + sustantivo',
        topics: ['pres-simple','pregunta-do'],
      },
      {
        contextEn: "You want a souvenir but you've already spent a lot. Tell the seller you don't have much money left.",
        contextEs: 'Quieres un suvenir pero ya gastaste mucho. Dile al vendedor que no te queda mucho dinero.',
        en: ['I','do','not','have','much','money','left'],
        alternatives: [
          ['I','have','no','money','left'],
          ['I','do','not','have','a','lot','of','money','left'],
        ],
        es: 'No me queda mucho dinero.',
        tense: 'Presente Simple (negativo) + Cuantificador',
        hint: 'do not + have + cuantificador para incontable (much / a lot of) + sustantivo',
        topics: ['pres-simple','cuantificador'],
      },
    ],
  },

  // ── EMERGENCIAS Y SALUD ─────────────────────────────────────────────
  {
    id: 'emergencias',
    title: 'Emergencias y salud',
    icon: '🆘',
    desc: 'Farmacia, pasaporte perdido, doctor, comunicación…',
    color: { bg: '#FEE2E2', text: '#7F1D1D', border: '#FCA5A5', solid: '#DC2626' },
    scenarios: [
      {
        contextEn: "You're not feeling well and need to buy some medicine. Ask a local where to find a pharmacy.",
        contextEs: 'No te sientes bien y necesitas comprar medicamento. Pregúntale a un local dónde encontrar una farmacia.',
        en: ['Where','can','I','find','a','pharmacy'],
        alternatives: [
          ['Where','is','the','nearest','pharmacy'],
        ],
        es: '¿Dónde puedo encontrar una farmacia?',
        tense: 'Modal Can (pregunta con Where)',
        hint: 'Where + can + sujeto + verbo base + artículo + sustantivo',
        topics: ['modal-can','pregunta-wh'],
      },
      {
        contextEn: 'You just realized your passport is missing. Approach the embassy or a police officer urgently.',
        contextEs: 'Acabas de darte cuenta que tu pasaporte no está. Acércate a la embajada o a un policía urgentemente.',
        en: ['I','lost','my','passport','please','help','me'],
        es: 'Perdí mi pasaporte, por favor ayúdeme.',
        tense: 'Pasado Simple irregular',
        hint: 'Sujeto + Pasado Simple irregular + objeto + "please" + verbo base + pronombre objeto',
        topics: ['past-simple'],
      },
      {
        contextEn: 'You feel very sick and need medical attention immediately. Tell someone at the hotel.',
        contextEs: 'Te sientes muy enfermo y necesitas atención médica inmediatamente. Díselo a alguien en el hotel.',
        en: ['I','need','a','doctor','please'],
        es: 'Necesito un doctor, por favor.',
        tense: 'Presente Simple',
        hint: 'Sujeto + Presente Simple + artículo + sustantivo + "please"',
        topics: ['pres-simple'],
      },
      {
        contextEn: "Someone said something in English and you didn't understand. Ask them to say it again, politely.",
        contextEs: 'Alguien dijo algo en inglés y no entendiste. Pídele que lo diga otra vez, de forma cortés.',
        en: ['Could','you','repeat','that','please'],
        alternatives: [
          ['Can','you','repeat','that','please'],
        ],
        es: '¿Podría repetir eso, por favor?',
        tense: 'Modal Could (pregunta cortés)',
        hint: 'Could + sujeto + verbo base + pronombre demostrativo + "please"',
        topics: ['modal-could'],
      },
      {
        contextEn: "You're trying to communicate but the person speaks another language. Ask if they know English.",
        contextEs: 'Estás tratando de comunicarte pero la persona habla otro idioma. Pregunta si sabe inglés.',
        en: ['Do','you','speak','English'],
        alternatives: [
          ['Can','you','speak','English'],
        ],
        es: '¿Habla inglés?',
        tense: 'Presente Simple (pregunta con Do)',
        hint: 'Do + sujeto + verbo base + idioma',
        topics: ['pres-simple','pregunta-do'],
      },
    ],
  },
];

const PV_DISTRACT_POOL = [
  'can','could','would','should','must','may','might','will','shall',
  'is','are','am','was','were','be','do','does','did','have','has','had',
  "don't","doesn't","didn't","won't","wouldn't","can't","couldn't","isn't","aren't",
  'a','an','the','this','that','these','those',
  'in','on','at','to','for','with','of','from','by','near','about',
  'my','your','his','her','our','their','its',
  'I','you','he','she','it','we','they','me','him','us','them',
  'where','when','what','how','why','who','which',
  'please','sorry','excuse','thank','yes','no','very','some','any','much','many',
  'go','want','need','help','find','take','give','make','get','see','say','tell',
];

function pvSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function pvShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pvPunct(es) { return es && es.trim().endsWith('?') ? '?' : '.'; }
function pvKind(item) {
  if ((item.es || '').trim().endsWith('?')) return 'pregunta';
  const en = ' ' + (item.en || []).join(' ').toLowerCase() + ' ';
  if (/ not /.test(en) || /n['']t /.test(en)) return 'negacion';
  return 'afirmacion';
}
const PV_KIND_STYLES = {
  pregunta:   { bg: '#0EA5E9', dark: '#0369A1', icon: '❓', label: 'Pregunta' },
  afirmacion: { bg: '#0D9488', dark: '#115E59', icon: '✓',  label: 'Afirmación' },
  negacion:   { bg: '#E11D48', dark: '#9F1239', icon: '✗',  label: 'Negación' },
};
// Construye el banco usando la unión de la respuesta principal Y de todas las
// alternativas válidas (si existen). Si un escenario tiene varias respuestas
// correctas, todas las palabras necesarias estarán disponibles en el banco.
// Limpia la cadena de "tense" quitando auxiliares (Do/Does/Did/will, etc.)
// y nombres específicos de modales. La regularidad del verbo se mueve a la
// pista. Mantiene el tiempo verbal abstracto + función (pregunta, negativa,
// cortesía, posibilidad, etc.).
function pvBriefTense(item) {
  let t = (item.tense || '').trim();
  t = t.replace(/pregunta\s+con\s+(?:Do(?:es)?|Did|to\s+be)/gi, 'pregunta');
  t = t.replace(/\s*\(\s*will\s*\)/gi, '');
  t = t.replace(/\s*\(\s*con\s+["']were["']\s*\)/gi, '');
  t = t.replace(/will,\s+decisión\s+espontánea/gi, 'decisión espontánea');
  t = t.replace(/would\s+like/gi, 'cortesía');
  t = t.replace(/would\s+rather/gi, 'preferencia');
  t = t.replace(/continuo\s+futuro/gi, 'continuo');
  t = t.replace(/Modal\s+(?:Can|Could|May|Might|Should|Must|Would)/g, 'Modal');
  t = t.replace(/\bPasado\s+Simple\s+(?:regular|irregular)\b/gi, 'Pasado Simple');
  t = t.replace(/\s*\+\s*(?:Comparativo(?:\s+intensificado)?|Superlativo)/gi, '');
  t = t.replace(/\s*\(\s*(?:comparativo(?:\s+intensificado)?|superlativo)\s*\)/gi, '');
  t = t.replace(/\s+/g, ' ').replace(/\(\s*\)/g, '').trim();
  return t;
}

// Calcula una pista mínima desde topics + tense del ejercicio.
// NUNCA revela palabras textuales del answer ni el auxiliar.
// Solo marca "Verbo irregular" (para pasado simple irregular), conceptos
// gramaticales abstractos (adjetivos, condicional) y pregunta/negativa.
function pvBriefHint(item) {
  const topics = item.topics || [];
  const tense  = item.tense || '';
  const parts  = [];
  if (/pasado simple irregular/i.test(tense)) parts.push('Verbo irregular');
  else if (/pasado simple regular/i.test(tense)) parts.push('Verbo regular');
  if (topics.includes('comparativo') || topics.includes('comparativo-igualdad') || topics.includes('superlativo')) {
    parts.push('Uso de adjetivos');
  }
  if (topics.includes('cond-1') || topics.includes('cond-2')) parts.push('Condicional con if');
  return parts.length > 0 ? parts.join(' · ') : '—';
}

function pvBuildTiles(scenario) {
  const variants = [scenario.en, ...(scenario.alternatives || [])];
  const wordMaxCounts = {};
  variants.forEach(variant => {
    const localCount = {};
    variant.forEach(w => { localCount[w] = (localCount[w] || 0) + 1; });
    Object.entries(localCount).forEach(([w, c]) => {
      wordMaxCounts[w] = Math.max(wordMaxCounts[w] || 0, c);
    });
  });
  const requiredTokens = [];
  Object.entries(wordMaxCounts).forEach(([w, c]) => {
    for (let i = 0; i < c; i++) requiredTokens.push(w);
  });
  const usedLower = new Set(Object.keys(wordMaxCounts).map(w => w.toLowerCase()));
  const target = Math.max(26, requiredTokens.length * 2 + 8);
  const needed = Math.max(0, target - requiredTokens.length);
  const pool = PV_DISTRACT_POOL.filter(w => !usedLower.has(w.toLowerCase()));
  const distractors = pvShuffle(pool).slice(0, needed);
  return pvShuffle([...requiredTokens, ...distractors]).map((word, id) => ({ id, word }));
}

function ViajesScreen({ onExit }) {
  const [catId, setCatId]       = React.useState(null);
  const [pool, setPool]         = React.useState([]);
  const [idx, setIdx]           = React.useState(0);
  const [placed, setPlaced]     = React.useState([]);
  const [checked, setChecked]   = React.useState(null);
  const [score, setScore]       = React.useState(0);
  const [failures, setFailures] = React.useState([]);
  const [shake, setShake]       = React.useState(false);
  const [showContextEs, setShowContextEs] = React.useState(false);
  const [showHint, setShowHint]           = React.useState(false);
  const [hintCountdown, setHintCountdown] = React.useState(60);
  const [dragIdx, setDragIdx]             = React.useState(null);
  const [dragOverIdx, setDragOverIdx]     = React.useState(null);
  const justDragged                       = React.useRef(false);

  const cat = catId !== null ? PV_CATEGORIES.find(c => c.id === catId) : null;
  const total = pool.length;
  const isDone = cat && idx >= total;
  const ex = pool[idx];
  const progress = total ? (idx + (checked !== null ? 1 : 0)) / total : 0;

  // Countdown de la pista — se reinicia al cambiar escenario
  React.useEffect(() => {
    if (catId === null || isDone) return;
    setShowHint(false);
    setShowContextEs(false);
    setHintCountdown(60);
    const id = setInterval(() => {
      setHintCountdown(s => {
        if (s <= 1) { clearInterval(id); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [idx, catId, isDone]);

  function startCategory(id) {
    const c = PV_CATEGORIES.find(x => x.id === id);
    setCatId(id);
    setPool(pvShuffle(c.scenarios).map(s => ({ ...s, tiles: pvBuildTiles(s) })));
    setIdx(0); setPlaced([]); setChecked(null);
    setScore(0); setFailures([]);
  }
  function backToSelector() {
    setCatId(null); setPool([]);
    setIdx(0); setPlaced([]); setChecked(null);
    setScore(0); setFailures([]);
  }
  function retryCategory() { if (catId !== null) startCategory(catId); }

  function placeTile(id)  { if (checked === null) setPlaced(p => [...p, id]); }
  function removeTile(id) { if (checked === null) setPlaced(p => p.filter(x => x !== id)); }
  function clearAnswer()  { if (checked === null) setPlaced([]); }

  function pvMoveTile(from, to) {
    if (from === null || from === to) return;
    setPlaced(p => {
      const a = [...p];
      const [it] = a.splice(from, 1);
      const insertAt = from < to ? to - 1 : to;
      a.splice(insertAt, 0, it);
      return a;
    });
  }
  function pvOnDragStart(e, i) {
    if (checked !== null) return;
    setDragIdx(i);
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(i)); } catch (_) {}
  }
  function pvOnDragOver(e, i)  { if (dragIdx === null) return; e.preventDefault(); setDragOverIdx(i); }
  function pvOnDrop(e, i)      {
    if (dragIdx === null) return;
    e.preventDefault(); e.stopPropagation();
    pvMoveTile(dragIdx, i);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }
  function pvOnDragEnd()       {
    setDragIdx(null); setDragOverIdx(null);
    setTimeout(() => { justDragged.current = false; }, 0);
  }
  function pvOnDropEnd(e)      {
    if (dragIdx === null) return;
    e.preventDefault();
    pvMoveTile(dragIdx, placed.length);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }

  function handleCheck() {
    const ans = placed.map(id => ex.tiles.find(t => t.id === id).word);
    const matches = (variant) => ans.length === variant.length && ans.every((w, i) => w === variant[i]);
    const ok = matches(ex.en) || (ex.alternatives || []).some(matches);
    setChecked(ok);
    if (ok) setScore(s => s + 1);
    else {
      setFailures(f => [...f, { scenario: ex, userAnswer: ans.join(' ') }]);
      setShake(true); setTimeout(() => setShake(false), 400);
    }
  }
  function handleNext() { setIdx(i => i + 1); setPlaced([]); setChecked(null); }

  // ── Selector ────────────────────────────────────────────────────────────
  if (catId === null) {
    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: 'linear-gradient(135deg, #0EA5E9, #0C4A6E)',
          borderRadius: 'var(--r-2xl)', padding: '28px 32px', color: 'white',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(14,165,233,0.35)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 140, opacity: 0.15 }}>✈️</div>
          <div style={{ fontSize: 42, marginBottom: 10 }}>✈️</div>
          <div style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.4px' }}>Viajes</div>
          <div style={{ fontSize: 14, opacity: 0.95, fontWeight: 600, lineHeight: 1.65, maxWidth: 720 }}>
            Practica con <strong>escenarios reales de viaje</strong>: pedir cosas en el aeropuerto,
            hotel, restaurante, taxi, tiendas y emergencias. Te doy el contexto en inglés
            (con traducción oculta tras 👁️) y tú armas la frase exacta que usarías allí.
          </div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          🌎 Elige una situación
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 14, marginBottom: 22,
        }}>
          {PV_CATEGORIES.map(c => (
            <button key={c.id} onClick={() => startCategory(c.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font)', textAlign: 'left',
              background: 'white', border: `2.5px solid ${c.color.border}`,
              borderRadius: 'var(--r-xl)', padding: '18px 20px',
              boxShadow: `0 4px 0 ${c.color.text}22`, transition: 'all 0.12s',
              display: 'flex', flexDirection: 'column', gap: 10, minHeight: 200,
            }}
              onMouseEnter={ev => { ev.currentTarget.style.background = c.color.bg; ev.currentTarget.style.transform = 'translateY(-3px)'; ev.currentTarget.style.boxShadow = `0 6px 0 ${c.color.text}33`; }}
              onMouseLeave={ev => { ev.currentTarget.style.background = 'white'; ev.currentTarget.style.transform = 'translateY(0)'; ev.currentTarget.style.boxShadow = `0 4px 0 ${c.color.text}22`; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 'var(--r-md)',
                  background: c.color.bg, border: `2px solid ${c.color.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, flexShrink: 0,
                }}>{c.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: c.color.text, lineHeight: 1.15 }}>
                    {c.title}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--muted)', lineHeight: 1.5, flex: 1 }}>
                {c.desc}
              </div>
              <div style={{
                padding: '8px 14px', borderRadius: 'var(--r-md)',
                background: c.color.solid, color: 'white',
                fontWeight: 900, fontSize: 13, textAlign: 'center',
                boxShadow: `0 3px 0 ${c.color.text}`,
              }}>
                ✈️ EMPEZAR ({c.scenarios.length} escenarios)
              </div>
            </button>
          ))}
        </div>

        <button className="btn btn-ghost" onClick={onExit}>← Salir</button>
      </div>
    );
  }

  // ── Done ────────────────────────────────────────────────────────────────
  if (isDone) {
    const pointsPerCorrect = 2;
    const scorePoints = score * pointsPerCorrect;
    const maxPoints = total * pointsPerCorrect;
    const pct = Math.round((score / total) * 100);
    const result =
      pct >= 90 ? { label: '¡Listo para viajar!', emoji: '🏆', accent: 'var(--emerald)', accentDark: 'var(--emerald-dark)', msg: 'Dominas estas frases.' } :
      pct >= 70 ? { label: '¡Muy bien!', emoji: '💪', accent: 'var(--indigo)', accentDark: 'var(--indigo-dark)', msg: 'Buen nivel — repasa lo que fallaste.' } :
      pct >= 50 ? { label: 'Sigue practicando', emoji: '📘', accent: 'var(--amber)', accentDark: 'var(--amber-dark)', msg: 'Vas mejorando, repasa con calma.' } :
                  { label: 'Necesitas practicar más', emoji: '📚', accent: 'var(--rose)', accentDark: 'var(--rose-dark)', msg: '¡Inténtalo de nuevo!' };

    const weakTopicCounts = {};
    failures.forEach(f => {
      (f.scenario.topics || []).forEach(t => {
        weakTopicCounts[t] = (weakTopicCounts[t] || 0) + 1;
      });
    });
    const weakTopics = Object.entries(weakTopicCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, c]) => ({ key: k, label: PV_TOPIC_LABELS[k] || k, count: c }));

    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: `linear-gradient(135deg, ${result.accent}, ${result.accentDark})`,
          borderRadius: 'var(--r-2xl)', padding: '32px', color: 'white', textAlign: 'center',
          marginBottom: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -10, right: -10, fontSize: 110, opacity: 0.18 }}>{result.emoji}</div>
          <div style={{ fontSize: 13, fontWeight: 800, opacity: 0.85, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>
            {cat.icon} {cat.title}
          </div>
          <div style={{ fontSize: 56, marginBottom: 6 }}>{result.emoji}</div>
          <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>
            {scorePoints}<span style={{ fontSize: 24, opacity: 0.85 }}>/{maxPoints}</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 6 }}>{result.label}</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, opacity: 0.9 }}>
            {score} de {total} frases correctas · {pct}% · {result.msg}
          </div>
        </div>

        {weakTopics.length > 0 && (
          <div style={{
            background: '#FEF3C7', border: '2px solid #FCD34D',
            borderRadius: 'var(--r-xl)', padding: '18px 22px', marginBottom: 22,
          }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
              📚 Recuerda estudiar
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {weakTopics.map(t => (
                <div key={t.key} style={{
                  background: 'white', border: '1.5px solid #FCD34D',
                  borderRadius: 999, padding: '6px 14px',
                  fontSize: 13, fontWeight: 800, color: '#92400E',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span>{t.label}</span>
                  <span style={{
                    background: '#FBBF24', color: 'white',
                    borderRadius: 999, padding: '1px 8px',
                    fontSize: 11, fontWeight: 900,
                  }}>{t.count} {t.count === 1 ? 'fallo' : 'fallos'}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {failures.length > 0 && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--rose-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
              ❌ Lo que fallaste ({failures.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {failures.map((f, i) => {
                const correctSentence = f.scenario.en.join(' ') + pvPunct(f.scenario.es);
                return (
                  <div key={i} style={{
                    background: 'white', border: '2px solid var(--rose)',
                    borderRadius: 'var(--r-xl)', padding: '16px 18px',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ background: 'var(--rose)', color: 'white', borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 900 }}>
                        Escenario fallado
                      </span>
                      <span style={{ background: '#7C3AED', color: 'white', borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 900 }}>
                        🕒 {pvBriefTense(f.scenario)}
                      </span>
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 10, lineHeight: 1.5 }}>
                      📖 {f.scenario.contextEn}
                    </div>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--rose-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Tu respuesta:
                      </span>
                      <div style={{
                        fontSize: 14, fontWeight: 700, color: 'var(--rose-dark)',
                        textDecoration: 'line-through', textDecorationColor: 'var(--rose)',
                        marginTop: 2, fontStyle: 'italic',
                      }}>
                        {f.userAnswer || '(vacía)'}
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--emerald-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Frase correcta:
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                        <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--emerald-dark)' }}>
                          {correctSentence}
                        </span>
                        <button onClick={() => pvSpeak(correctSentence)} title="Escuchar" style={{
                          background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                        </button>
                      </div>
                      <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 4 }}>
                        🇪🇸 {f.scenario.es}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" style={{ flex: 1, minWidth: 180 }} onClick={backToSelector}>
            ← Otras situaciones
          </button>
          <button className="btn btn-primary" style={{ flex: 2, minWidth: 220, background: cat.color.solid, boxShadow: `0 4px 0 ${cat.color.text}` }} onClick={retryCategory}>
            ↻ REPETIR ESTA SITUACIÓN
          </button>
        </div>
      </div>
    );
  }

  // ── Escenario activo ────────────────────────────────────────────────────
  const isCorrect = checked === true;
  const punct = pvPunct(ex.es);
  const correctSentence = ex.en.join(' ') + punct;
  const bank   = ex.tiles.filter(t => !placed.includes(t.id));
  const answer = placed.map(id => ex.tiles.find(t => t.id === id));
  const wordCount = ex.en.length;
  const c = cat.color;

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={backToSelector} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)', flexWrap: 'wrap', gap: 6 }}>
            <span>{cat.icon} {cat.title}  ·  Escenario {idx + 1} / {total}</span>
            <span style={{ color: c.text }}>Score: {score * 2}/{total * 2}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: c.solid }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* Contexto */}
      <div style={{
        background: c.bg, border: `2px solid ${c.border}`,
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: c.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          📖 Contexto (situación real)
        </div>
        <div style={{
          fontSize: 15.5, fontWeight: 600, color: c.text, lineHeight: 1.6,
          marginBottom: 10, padding: '10px 14px',
          background: 'rgba(255,255,255,0.7)', borderRadius: 'var(--r-md)',
          border: `1px solid ${c.border}`,
        }}>
          {ex.contextEn}
        </div>
        <div style={{ marginBottom: 12 }}>
          <button onClick={() => setShowContextEs(v => !v)} style={{
            background: 'rgba(255,255,255,0.7)', border: `1.5px solid ${c.border}`,
            borderRadius: 'var(--r-md)', padding: '6px 12px',
            fontFamily: 'var(--font)', fontSize: 12, fontWeight: 800,
            color: c.text, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            {showContextEs ? '🙈 Ocultar traducción' : '👁️ Ver traducción en español'}
          </button>
          {showContextEs && (
            <div style={{
              fontSize: 13, color: c.text, fontStyle: 'italic',
              marginTop: 8, padding: '10px 14px',
              background: 'rgba(255,255,255,0.55)', borderRadius: 'var(--r-md)',
              lineHeight: 1.55, border: `1px dashed ${c.border}`,
            }}>
              🇪🇸 {ex.contextEs}
            </div>
          )}
        </div>

        {/* Pills: word count + kind + tense + hint (con countdown) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'stretch' }}>
          <div style={{
            background: '#059669', color: 'white',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: '0 2px 0 rgba(0,0,0,0.15)',
            whiteSpace: 'nowrap',
          }}>
            🔢 {wordCount} palabras
          </div>
          {(() => {
            const k = PV_KIND_STYLES[pvKind(ex)];
            return (
              <div style={{
                background: k.bg, color: 'white',
                borderRadius: 'var(--r-md)', padding: '8px 14px',
                fontSize: 12.5, fontWeight: 900,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                boxShadow: `0 2px 0 ${k.dark}`,
                whiteSpace: 'nowrap',
              }}>
                {k.icon} {k.label}
              </div>
            );
          })()}
          <div style={{
            background: '#7C3AED', color: 'white',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: '0 2px 0 rgba(0,0,0,0.15)',
            whiteSpace: 'nowrap',
          }}>
            🕒 {pvBriefTense(ex)}
          </div>
          {pvBriefHint(ex) !== '—' && (
            hintCountdown > 0 ? (
              <div style={{
                background: '#94A3B8', color: 'white',
                borderRadius: 'var(--r-md)', padding: '8px 14px',
                fontSize: 12.5, fontWeight: 800,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                flex: 1, minWidth: 220,
                boxShadow: '0 2px 0 rgba(0,0,0,0.12)',
                fontStyle: 'italic',
              }}>
                🔒 Pista en {hintCountdown}s — ¡intenta primero!
              </div>
            ) : !showHint ? (
              <button onClick={() => setShowHint(true)} style={{
                background: 'transparent', border: `1.5px dashed ${c.solid}`,
                borderRadius: 'var(--r-md)', padding: '8px 14px',
                fontFamily: 'var(--font)', fontSize: 12.5, fontWeight: 800,
                color: c.text, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                flex: 1, minWidth: 220,
              }}>
                👁️ Ver pista
              </button>
            ) : (
              <button onClick={() => setShowHint(false)} style={{
                background: 'rgba(255,255,255,0.7)', border: `1.5px dashed ${c.solid}`,
                borderRadius: 'var(--r-md)', padding: '8px 12px',
                fontFamily: 'var(--font)', fontSize: 12, fontWeight: 700, color: c.text,
                textAlign: 'left', cursor: 'pointer',
                flex: 1, minWidth: 220,
              }}>
                🧩 <strong>Pista:</strong> {pvBriefHint(ex)}  <span style={{ opacity: 0.6 }}>🙈</span>
              </button>
            )
          )}
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
            ¿Qué dirías?
          </span>
          <span style={{ fontSize: 11, fontWeight: 800, color: placed.length === wordCount ? 'var(--emerald-dark)' : 'var(--muted)' }}>
            {placed.length} / {wordCount} palabras
          </span>
        </div>
        <div
          onDragOver={e => { if (dragIdx !== null) e.preventDefault(); }}
          onDrop={pvOnDropEnd}
          style={{
            minHeight: 56, border: '2px dashed var(--border-strong)', borderRadius: 'var(--r-lg)',
            padding: '10px 12px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center',
            background: 'var(--bg)', marginBottom: 6,
          }}>
          {answer.length === 0 && (
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--faint)', fontStyle: 'italic' }}>
              Toca palabras del banco · arrastra para reordenar…
            </span>
          )}
          {answer.map((t, i) => (
            <button key={t.id}
              onClick={() => { if (justDragged.current) { justDragged.current = false; return; } removeTile(t.id); }}
              disabled={checked !== null}
              draggable={checked === null}
              onDragStart={e => pvOnDragStart(e, i)}
              onDragOver={e => pvOnDragOver(e, i)}
              onDragLeave={() => setDragOverIdx(null)}
              onDrop={e => pvOnDrop(e, i)}
              onDragEnd={pvOnDragEnd}
              style={{
                background: checked === null ? c.solid : isCorrect ? 'var(--emerald)' : 'var(--rose)',
                color: 'white', border: 'none', borderRadius: 'var(--r-md)',
                padding: '9px 14px', fontSize: 15, fontWeight: 800, fontFamily: 'var(--font)',
                cursor: checked === null ? 'grab' : 'default',
                boxShadow: '0 2px 0 rgba(0,0,0,0.18)',
                opacity: dragIdx === i ? 0.4 : 1,
                outline: dragOverIdx === i && dragIdx !== i ? `3px solid ${c.text}` : 'none',
                outlineOffset: 2,
                transition: 'opacity 0.12s',
              }}>
              {t.word}
            </button>
          ))}
          {punct === '?' && answer.length > 0 && (
            <span style={{
              fontSize: 26, fontWeight: 900,
              color: checked === null ? c.text : isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)',
              padding: '0 6px', userSelect: 'none', alignSelf: 'center', lineHeight: 1,
            }}>?</span>
          )}
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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Banco de palabras
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>
            {bank.length} disponibles
          </span>
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
              style={answer.length ? { background: c.solid, boxShadow: `0 4px 0 ${c.text}` } : {}}>
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
                  {isCorrect ? '¡Perfecto!' : 'Frase correcta:'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)' }}>
                    {correctSentence}
                  </span>
                  <button onClick={() => pvSpeak(correctSentence)} title="Escuchar" style={{
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
              {idx + 1 >= total ? 'VER RESULTADOS' : 'SIGUIENTE ESCENARIO ✈️'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ViajesScreen = ViajesScreen;
