// 💬 Preguntas — lee una historia corta en inglés y responde 4 preguntas sobre
// ella armando la respuesta con fichas. Practica la habilidad de ENTENDER una
// pregunta en inglés y formular la respuesta en el tiempo verbal correcto.

const PQ_TOPIC_LABELS = {
  'pres-simple':         'Presente Simple',
  'pres-cont':           'Presente Continuo',
  'past-simple':         'Pasado Simple',
  'past-cont':           'Pasado Continuo',
  'fut-will':            'Futuro Simple (will)',
  'fut-cont':            'Futuro Continuo',
  'going-to':            'Futuro · Going to',
  'modal-can':           'Modal Can',
  'modal-could':         'Modal Could',
  'modal-may':           'Modal May',
  'modal-might':         'Modal Might',
  'modal-should':        'Modal Should',
  'modal-must':          'Modal Must',
  'modal-would':         'Modal Would',
  'cond-1':              'Condicional Tipo 1',
  'cond-2':              'Condicional Tipo 2',
  'comparativo':         'Comparativos de superioridad',
  'comparativo-igualdad':'Comparativo de igualdad (as ... as)',
  'superlativo':         'Superlativos',
  'cuantificador':       'Cuantificadores (some, any, much, many, a lot of, no, few, little)',
};

const PQ_STORIES = [
  {
    id: 1,
    title: 'Alex en Madrid',
    icon: '🏙️',
    color: { bg: '#DBEAFE', text: '#1E40AF', border: '#93C5FD', solid: '#2563EB' },
    story: 'Alex is a 28-year-old software engineer. He grew up in a small quiet town in Mexico, but two years ago he moved to Madrid, a big and busy city. Today he lives in a small apartment near the center. Every morning he wakes up at 6 AM and takes the metro to the office. Last weekend, Alex visited the Prado Museum with his friends. Next month, he will travel to Barcelona for a conference, and after that he is going to buy a new laptop.',
    storyEs: 'Alex es un ingeniero de software de 28 años. Creció en un pueblo pequeño y tranquilo en México, pero hace dos años se mudó a Madrid, una ciudad grande y ajetreada. Hoy vive en un pequeño apartamento cerca del centro. Cada mañana se despierta a las 6 AM y toma el metro a la oficina. El fin de semana pasado, Alex visitó el Museo del Prado con sus amigos. El próximo mes viajará a Barcelona para una conferencia, y después se va a comprar una laptop nueva.',
    questions: [
      {
        q: "How was Alex's hometown compared to Madrid?",
        qEs: '¿Cómo era el pueblo natal de Alex comparado con Madrid?',
        tense: 'Pasado Simple + Comparativo',
        hint: 'was + dos comparativos (-er) + than + Madrid',
        en: ['His','hometown','was','smaller','and','quieter','than','Madrid'],
        es: 'Su pueblo natal era más pequeño y más tranquilo que Madrid.',
        topics: ['past-simple','comparativo'],
      },
      {
        q: 'Where did Alex go last weekend, and with whom?',
        qEs: '¿A dónde fue Alex el fin de semana pasado, y con quién?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + complemento + with + pronombre posesivo + sustantivo',
        en: ['He','visited','the','Prado','Museum','with','his','friends'],
        alternatives: [
          ['He','went','to','the','Prado','Museum','with','his','friends'],
        ],
        es: 'Él visitó el Museo del Prado con sus amigos.',
        topics: ['past-simple'],
      },
      {
        q: 'What will Alex do next month?',
        qEs: '¿Qué hará Alex el próximo mes?',
        tense: 'Futuro Simple (will)',
        hint: 'will + verbo base + lugar + razón',
        en: ['He','will','travel','to','Barcelona','for','a','conference'],
        es: 'Él viajará a Barcelona para una conferencia.',
        topics: ['fut-will'],
      },
      {
        q: 'What is Alex going to buy after the conference?',
        qEs: '¿Qué va a comprar Alex después de la conferencia?',
        tense: 'Futuro · Going to',
        hint: 'is + going to + verbo base + adjetivo + sustantivo',
        en: ['He','is','going','to','buy','a','new','laptop'],
        es: 'Él va a comprar una laptop nueva.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 2,
    title: 'El fin de semana de Maria',
    icon: '👩‍🍳',
    color: { bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4', solid: '#EC4899' },
    story: 'Maria is a teacher in London. She loves cooking Italian food. Last Saturday, she was preparing pizza when her brother suddenly arrived from Italy. They cooked dinner together and watched a movie. On Sunday, they went to a park near the river and had a wonderful time. Maria\'s brother is taller than her, but she is funnier. Tomorrow, she will start a new English class with thirty students.',
    storyEs: 'Maria es profesora en Londres. Le encanta cocinar comida italiana. El sábado pasado, ella estaba preparando pizza cuando su hermano llegó de repente desde Italia. Cocinaron la cena juntos y vieron una película. El domingo fueron a un parque cerca del río y la pasaron muy bien. El hermano de Maria es más alto que ella, pero ella es más graciosa. Mañana, comenzará una nueva clase de inglés con treinta estudiantes.',
    questions: [
      {
        q: 'What was Maria doing when her brother arrived?',
        qEs: '¿Qué estaba haciendo Maria cuando llegó su hermano?',
        tense: 'Pasado Continuo',
        hint: 'was + verbo-ing + objeto',
        en: ['She','was','preparing','pizza'],
        es: 'Ella estaba preparando pizza.',
        topics: ['past-cont'],
      },
      {
        q: 'Where did they go on Sunday?',
        qEs: '¿A dónde fueron el domingo?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + lugar + cláusula descriptiva',
        en: ['They','went','to','a','park','near','the','river'],
        alternatives: [
          ['They','visited','a','park','near','the','river'],
        ],
        es: 'Fueron a un parque cerca del río.',
        topics: ['past-simple'],
      },
      {
        q: "Who is taller, Maria or her brother?",
        qEs: '¿Quién es más alto, Maria o su hermano?',
        tense: 'Presente Simple + Comparativo',
        hint: 'is + comparativo corto (-er) + than',
        en: ['Her','brother','is','taller','than','her'],
        es: 'Su hermano es más alto que ella.',
        topics: ['pres-simple','comparativo'],
      },
      {
        q: 'What will Maria do tomorrow?',
        qEs: '¿Qué hará Maria mañana?',
        tense: 'Futuro Simple (will)',
        hint: 'will + verbo base + objeto',
        en: ['She','will','start','a','new','English','class'],
        es: 'Ella comenzará una nueva clase de inglés.',
        topics: ['fut-will'],
      },
    ],
  },

  {
    id: 3,
    title: 'El viaje de camping',
    icon: '⛺',
    color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', solid: '#10B981' },
    story: 'Last summer, John and his family went camping in the mountains for a week. They stayed in a big tent near a beautiful lake. Every morning, John woke up early and swam in the cold water. His sister was reading her favorite book when a bird suddenly landed on her tent. This year, they are going to visit the beach instead because John thinks it will be more relaxing.',
    storyEs: 'El verano pasado, John y su familia fueron de camping a las montañas por una semana. Se quedaron en una gran tienda cerca de un hermoso lago. Cada mañana, John se levantaba temprano y nadaba en el agua fría. Su hermana estaba leyendo su libro favorito cuando un pájaro se posó de repente en su tienda. Este año, van a visitar la playa en su lugar porque John piensa que será más relajante.',
    questions: [
      {
        q: "Where did John's family go camping last summer?",
        qEs: '¿A dónde fue de camping la familia de John el verano pasado?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + verbo-ing + lugar',
        en: ['They','went','camping','in','the','mountains'],
        es: 'Fueron de camping a las montañas.',
        topics: ['past-simple'],
      },
      {
        q: "What was John's sister doing when the bird landed?",
        qEs: '¿Qué estaba haciendo la hermana de John cuando aterrizó el pájaro?',
        tense: 'Pasado Continuo',
        hint: 'was + verbo-ing + pronombre posesivo + adjetivo + sustantivo',
        en: ['She','was','reading','her','favorite','book'],
        es: 'Estaba leyendo su libro favorito.',
        topics: ['past-cont'],
      },
      {
        q: 'Where are they going to visit this year?',
        qEs: '¿A dónde van a visitar este año?',
        tense: 'Futuro · Going to',
        hint: 'are + going to + verbo base + lugar',
        en: ['They','are','going','to','visit','the','beach'],
        es: 'Van a visitar la playa.',
        topics: ['going-to'],
      },
      {
        q: 'Why does John think the beach will be better?',
        qEs: '¿Por qué John piensa que la playa será mejor?',
        tense: 'Futuro Simple (will) + Comparativo',
        hint: 'will + be + more + adjetivo largo',
        en: ['It','will','be','more','relaxing'],
        es: 'Será más relajante.',
        topics: ['fut-will','comparativo'],
      },
    ],
  },

  {
    id: 4,
    title: 'Sarah en la oficina',
    icon: '🏦',
    color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD', solid: '#7C3AED' },
    story: 'Sarah works at a bank in Toronto. She must arrive at the office before 9 AM every day. Yesterday, she had a long meeting with her boss about a new project. The boss said she should take a short vacation soon. Sarah is very tired because she works many extra hours. She might travel to the countryside next weekend with her family.',
    storyEs: 'Sarah trabaja en un banco en Toronto. Debe llegar a la oficina antes de las 9 AM todos los días. Ayer tuvo una larga reunión con su jefe sobre un nuevo proyecto. El jefe le dijo que debería tomarse unas vacaciones cortas pronto. Sarah está muy cansada porque trabaja muchas horas extras. Podría viajar al campo el próximo fin de semana con su familia.',
    questions: [
      {
        q: 'Where does Sarah work?',
        qEs: '¿Dónde trabaja Sarah?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + lugar específico',
        en: ['She','works','at','a','bank','in','Toronto'],
        es: 'Ella trabaja en un banco en Toronto.',
        topics: ['pres-simple'],
      },
      {
        q: 'What did Sarah do yesterday at work?',
        qEs: '¿Qué hizo Sarah ayer en el trabajo?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + adjetivo + sustantivo + complemento',
        en: ['She','had','a','long','meeting','with','her','boss'],
        es: 'Tuvo una larga reunión con su jefe.',
        topics: ['past-simple'],
      },
      {
        q: 'What did her boss say she should do?',
        qEs: '¿Qué dijo su jefe que debería hacer?',
        tense: 'Modal Should',
        hint: 'should + verbo base + objeto',
        en: ['She','should','take','a','short','vacation'],
        es: 'Debería tomarse unas vacaciones cortas.',
        topics: ['modal-should'],
      },
      {
        q: 'Where might Sarah travel next weekend?',
        qEs: '¿A dónde podría viajar Sarah el próximo fin de semana?',
        tense: 'Modal Might',
        hint: 'might + verbo base + lugar',
        en: ['She','might','travel','to','the','countryside'],
        alternatives: [
          ['She','may','travel','to','the','countryside'],
        ],
        es: 'Podría viajar al campo.',
        topics: ['modal-might'],
      },
    ],
  },

  {
    id: 5,
    title: 'El futuro de David',
    icon: '🎓',
    color: { bg: '#FEE2E2', text: '#7F1D1D', border: '#FCA5A5', solid: '#DC2626' },
    story: 'David is a student at the university. He studies engineering and really likes mathematics. He could speak three languages when he was younger, but now he only speaks Spanish and English. If he had more free time, he would learn Japanese. Next year, David is going to move to Tokyo to work for a Japanese company. He is the smartest student in his class.',
    storyEs: 'David es un estudiante en la universidad. Estudia ingeniería y le gustan mucho las matemáticas. Podía hablar tres idiomas cuando era más joven, pero ahora solo habla español e inglés. Si tuviera más tiempo libre, aprendería japonés. El próximo año, David se va a mudar a Tokio para trabajar para una empresa japonesa. Es el estudiante más inteligente de su clase.',
    questions: [
      {
        q: 'What does David study at the university?',
        qEs: '¿Qué estudia David en la universidad?',
        tense: 'Presente Simple',
        hint: 'Presente Simple (dos verbos) + objetos',
        en: ['He','studies','engineering','and','likes','mathematics'],
        es: 'Estudia ingeniería y le gustan las matemáticas.',
        topics: ['pres-simple'],
      },
      {
        q: 'How many languages could he speak when he was younger?',
        qEs: '¿Cuántos idiomas podía hablar cuando era más joven?',
        tense: 'Modal Could (pasado)',
        hint: 'could + verbo base + número + objeto',
        en: ['He','could','speak','three','languages'],
        es: 'Podía hablar tres idiomas.',
        topics: ['modal-could'],
      },
      {
        q: 'What would David learn if he had more time?',
        qEs: '¿Qué aprendería David si tuviera más tiempo?',
        tense: 'Condicional Tipo 2',
        hint: 'would + verbo base + objeto',
        en: ['He','would','learn','Japanese'],
        es: 'Aprendería japonés.',
        topics: ['cond-2'],
      },
      {
        q: 'What is David going to do next year?',
        qEs: '¿Qué va a hacer David el próximo año?',
        tense: 'Futuro · Going to',
        hint: 'is + going to + verbo base + lugar',
        en: ['He','is','going','to','move','to','Tokyo'],
        es: 'Va a mudarse a Tokio.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 6,
    title: 'Carlos en la playa',
    icon: '🏖️',
    color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#F59E0B' },
    story: 'Last summer, Carlos and his wife traveled to a beautiful beach in Mexico. They stayed there for ten days. Every morning they swam in the ocean before breakfast. One afternoon, while they were walking on the sand, they found a small turtle. They took many photos with it. This year, they are going to visit a different beach in Costa Rica, and Carlos thinks the weather will be perfect in November.',
    storyEs: 'El verano pasado, Carlos y su esposa viajaron a una hermosa playa en México. Se quedaron allí por diez días. Cada mañana nadaban en el océano antes del desayuno. Una tarde, mientras caminaban por la arena, encontraron una pequeña tortuga. Tomaron muchas fotos con ella. Este año, van a visitar una playa diferente en Costa Rica, y Carlos piensa que el clima será perfecto en noviembre.',
    questions: [
      {
        q: 'Where did Carlos and his wife travel last summer?',
        qEs: '¿A dónde viajaron Carlos y su esposa el verano pasado?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + lugar específico',
        en: ['They','traveled','to','a','beautiful','beach','in','Mexico'],
        alternatives: [
          ['They','went','to','a','beautiful','beach','in','Mexico'],
        ],
        es: 'Viajaron a una hermosa playa en México.',
        topics: ['past-simple'],
      },
      {
        q: 'What were they doing when they found the turtle?',
        qEs: '¿Qué estaban haciendo cuando encontraron la tortuga?',
        tense: 'Pasado Continuo',
        hint: 'were + verbo-ing + lugar',
        en: ['They','were','walking','on','the','sand'],
        es: 'Estaban caminando por la arena.',
        topics: ['past-cont'],
      },
      {
        q: 'Where are they going to visit this year?',
        qEs: '¿A dónde van a visitar este año?',
        tense: 'Futuro · Going to',
        hint: 'are + going to + verbo base + lugar',
        en: ['They','are','going','to','visit','Costa','Rica'],
        es: 'Van a visitar Costa Rica.',
        topics: ['going-to'],
      },
      {
        q: 'How does Carlos think the weather will be in November?',
        qEs: '¿Cómo piensa Carlos que será el clima en noviembre?',
        tense: 'Futuro Simple (will)',
        hint: 'will + be + adjetivo',
        en: ['It','will','be','perfect'],
        es: 'Será perfecto.',
        topics: ['fut-will'],
      },
    ],
  },

  {
    id: 7,
    title: 'El restaurante de Anna',
    icon: '🍽️',
    color: { bg: '#CCFBF1', text: '#134E4A', border: '#5EEAD4', solid: '#14B8A6' },
    story: 'Anna owns a small Italian restaurant in Paris. She opens at noon and closes at midnight every day. The chefs must wash their hands before cooking any meal. Anna is currently preparing a special menu for the weekend. Many customers say her pasta is the best in the city. Next month, she will open a second restaurant near the Eiffel Tower.',
    storyEs: 'Anna es dueña de un pequeño restaurante italiano en París. Abre a mediodía y cierra a medianoche todos los días. Los chefs deben lavarse las manos antes de cocinar cualquier comida. Anna está preparando actualmente un menú especial para el fin de semana. Muchos clientes dicen que su pasta es la mejor de la ciudad. El próximo mes abrirá un segundo restaurante cerca de la Torre Eiffel.',
    questions: [
      {
        q: 'What does Anna own?',
        qEs: '¿De qué es dueña Anna?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + adjetivos + sustantivo',
        en: ['She','owns','a','small','Italian','restaurant'],
        es: 'Es dueña de un pequeño restaurante italiano.',
        topics: ['pres-simple'],
      },
      {
        q: 'What must the chefs do before cooking?',
        qEs: '¿Qué deben hacer los chefs antes de cocinar?',
        tense: 'Modal Must',
        hint: 'must + verbo base + pronombre posesivo + objeto',
        en: ['They','must','wash','their','hands'],
        alternatives: [
          ['They','have','to','wash','their','hands'],
        ],
        es: 'Deben lavarse las manos.',
        topics: ['modal-must'],
      },
      {
        q: 'What is Anna preparing right now?',
        qEs: '¿Qué está preparando Anna ahora mismo?',
        tense: 'Presente Continuo',
        hint: 'is + verbo-ing + adjetivo + sustantivo',
        en: ['She','is','preparing','a','special','menu'],
        es: 'Está preparando un menú especial.',
        topics: ['pres-cont'],
      },
      {
        q: 'What will Anna do next month?',
        qEs: '¿Qué hará Anna el próximo mes?',
        tense: 'Futuro Simple (will)',
        hint: 'will + verbo base + ordinal + sustantivo',
        en: ['She','will','open','a','second','restaurant'],
        es: 'Abrirá un segundo restaurante.',
        topics: ['fut-will'],
      },
    ],
  },

  {
    id: 8,
    title: 'El partido de fútbol',
    icon: '⚽',
    color: { bg: '#FFE4E6', text: '#881337', border: '#FDA4AF', solid: '#BE123C' },
    story: 'Yesterday, my brother and I watched a very exciting football match on TV. Our favorite team was losing two to zero in the first half. During the second half, they scored three goals in only ten minutes. Their new player is faster than anyone else on the team. Next Sunday, they will play against the strongest team in the league.',
    storyEs: 'Ayer, mi hermano y yo vimos un partido de fútbol muy emocionante en la tele. Nuestro equipo favorito iba perdiendo dos a cero en la primera mitad. Durante la segunda mitad, anotaron tres goles en solo diez minutos. Su nuevo jugador es más rápido que cualquier otro del equipo. El próximo domingo jugarán contra el equipo más fuerte de la liga.',
    questions: [
      {
        q: 'What did you watch yesterday?',
        qEs: '¿Qué viste ayer?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + adverbio + adjetivo + sustantivo',
        en: ['We','watched','a','very','exciting','football','match'],
        es: 'Vimos un partido de fútbol muy emocionante.',
        topics: ['past-simple'],
      },
      {
        q: 'What was happening in the first half?',
        qEs: '¿Qué estaba pasando en la primera mitad?',
        tense: 'Pasado Continuo',
        hint: 'was + verbo-ing + resultado del marcador',
        en: ['Our','team','was','losing','two','to','zero'],
        es: 'Nuestro equipo iba perdiendo dos a cero.',
        topics: ['past-cont'],
      },
      {
        q: 'How is the new player compared to the others?',
        qEs: '¿Cómo es el nuevo jugador comparado con los demás?',
        tense: 'Presente Simple + Comparativo',
        hint: 'is + comparativo (-er) + than + anyone else',
        en: ['He','is','faster','than','anyone','else'],
        es: 'Es más rápido que cualquier otro.',
        topics: ['pres-simple','comparativo'],
      },
      {
        q: 'Who will they play against next Sunday?',
        qEs: '¿Contra quién jugarán el próximo domingo?',
        tense: 'Futuro Simple (will) + Superlativo',
        hint: 'will + verbo base + against + the + superlativo (-est)',
        en: ['They','will','play','against','the','strongest','team'],
        es: 'Jugarán contra el equipo más fuerte.',
        topics: ['fut-will','superlativo'],
      },
    ],
  },

  {
    id: 9,
    title: 'El nuevo cachorro',
    icon: '🐶',
    color: { bg: '#F3E8FF', text: '#6B21A8', border: '#D8B4FE', solid: '#A855F7' },
    story: 'Last month, my parents bought a new puppy. His name is Max and he is very playful. Every morning, Max wakes us up at six o\'clock. He loves running in the park near our house. Yesterday, he ate one of my shoes while I was at school. My mother says we should train him with patience. Tomorrow we are going to take him to the veterinarian for a checkup.',
    storyEs: 'El mes pasado, mis padres compraron un nuevo cachorro. Se llama Max y es muy juguetón. Cada mañana, Max nos despierta a las seis. Le encanta correr en el parque cerca de nuestra casa. Ayer se comió uno de mis zapatos mientras yo estaba en la escuela. Mi madre dice que deberíamos entrenarlo con paciencia. Mañana lo vamos a llevar al veterinario para un chequeo.',
    questions: [
      {
        q: 'When did your parents buy the puppy?',
        qEs: '¿Cuándo compraron tus padres al cachorro?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + pronombre objeto + marcador de tiempo',
        en: ['They','bought','him','last','month'],
        es: 'Lo compraron el mes pasado.',
        topics: ['past-simple'],
      },
      {
        q: 'What does Max do every morning?',
        qEs: '¿Qué hace Max cada mañana?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + pronombre objeto + adverbio + hora',
        en: ['He','wakes','us','up','at','six'],
        es: 'Nos despierta a las seis.',
        topics: ['pres-simple'],
      },
      {
        q: 'What did Max do yesterday?',
        qEs: '¿Qué hizo Max ayer?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + complemento con "of"',
        en: ['He','ate','one','of','my','shoes'],
        es: 'Se comió uno de mis zapatos.',
        topics: ['past-simple'],
      },
      {
        q: 'What does your mother say you should do?',
        qEs: '¿Qué dice tu madre que deberían hacer?',
        tense: 'Modal Should',
        hint: 'should + verbo base + pronombre objeto + con + sustantivo',
        en: ['We','should','train','him','with','patience'],
        es: 'Deberíamos entrenarlo con paciencia.',
        topics: ['modal-should'],
      },
    ],
  },

  {
    id: 10,
    title: 'La entrevista de trabajo',
    icon: '💼',
    color: { bg: '#E0E7FF', text: '#3730A3', border: '#A5B4FC', solid: '#4F46E5' },
    story: 'Two days ago, Lisa had an important job interview at a big technology company. She wore her best suit and arrived twenty minutes early. The interviewer asked her many difficult questions about her experience. Lisa thinks she might get the job because the conversation went very well. If they offer her the position, she would move to Berlin in March. She is going to send an email this evening.',
    storyEs: 'Hace dos días, Lisa tuvo una entrevista de trabajo importante en una gran empresa de tecnología. Se puso su mejor traje y llegó veinte minutos antes. El entrevistador le hizo muchas preguntas difíciles sobre su experiencia. Lisa piensa que podría conseguir el trabajo porque la conversación salió muy bien. Si le ofrecen el puesto, se mudaría a Berlín en marzo. Va a enviar un correo electrónico esta tarde.',
    questions: [
      {
        q: 'When did Lisa have the interview?',
        qEs: '¿Cuándo tuvo Lisa la entrevista?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + pronombre objeto + marcador con "ago"',
        en: ['She','had','it','two','days','ago'],
        es: 'La tuvo hace dos días.',
        topics: ['past-simple'],
      },
      {
        q: 'What did she wear to the interview?',
        qEs: '¿Qué se puso para la entrevista?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + posesivo + superlativo + sustantivo',
        en: ['She','wore','her','best','suit'],
        es: 'Se puso su mejor traje.',
        topics: ['past-simple','superlativo'],
      },
      {
        q: 'What would Lisa do if they offer her the position?',
        qEs: '¿Qué haría Lisa si le ofrecen el puesto?',
        tense: 'Condicional Tipo 2',
        hint: 'would + verbo base + lugar',
        en: ['She','would','move','to','Berlin'],
        es: 'Se mudaría a Berlín.',
        topics: ['cond-2'],
      },
      {
        q: 'What is she going to do this evening?',
        qEs: '¿Qué va a hacer esta tarde?',
        tense: 'Futuro · Going to',
        hint: 'is + going to + verbo base + objeto',
        en: ['She','is','going','to','send','an','email'],
        es: 'Va a enviar un correo electrónico.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 11,
    title: 'La obra de teatro escolar',
    icon: '🎭',
    color: { bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD', solid: '#8B5CF6' },
    story: 'Last Friday, my younger sister performed in her first school play. She played the role of a princess and wore a beautiful blue dress. Many parents came to watch, and the auditorium was full. While she was speaking her lines, the lights suddenly went out. The actors waited five minutes in the dark, but they finished the play perfectly. Next year, she wants to play a more difficult character.',
    storyEs: 'El viernes pasado, mi hermana menor actuó en su primera obra de teatro escolar. Interpretó el papel de una princesa y llevaba un hermoso vestido azul. Muchos padres vinieron a verla, y el auditorio estaba lleno. Mientras decía sus líneas, las luces se apagaron de repente. Los actores esperaron cinco minutos a oscuras, pero terminaron la obra perfectamente. El próximo año, ella quiere interpretar un personaje más difícil.',
    questions: [
      {
        q: 'When did your sister perform in the school play?',
        qEs: '¿Cuándo actuó tu hermana en la obra escolar?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + marcador de tiempo',
        en: ['She','performed','last','Friday'],
        es: 'Actuó el viernes pasado.',
        topics: ['past-simple'],
      },
      {
        q: 'What was she doing when the lights went out?',
        qEs: '¿Qué estaba haciendo cuando se apagaron las luces?',
        tense: 'Pasado Continuo',
        hint: 'was + verbo-ing + pronombre posesivo + sustantivo',
        en: ['She','was','speaking','her','lines'],
        es: 'Estaba diciendo sus líneas.',
        topics: ['past-cont'],
      },
      {
        q: 'How was the auditorium during the play?',
        qEs: '¿Cómo estaba el auditorio durante la obra?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + adjetivo + complemento',
        en: ['It','was','full','of','parents'],
        es: 'Estaba lleno de padres.',
        topics: ['past-simple'],
      },
      {
        q: 'What does she want to play next year?',
        qEs: '¿Qué quiere interpretar el próximo año?',
        tense: 'Presente Simple + Comparativo',
        hint: 'Presente Simple + artículo + comparativo (more + adj) + sustantivo',
        en: ['She','wants','a','more','difficult','character'],
        es: 'Quiere un personaje más difícil.',
        topics: ['pres-simple','comparativo'],
      },
    ],
  },

  {
    id: 12,
    title: 'El cumpleaños del abuelo',
    icon: '🎂',
    color: { bg: '#FCE7F3', text: '#831843', border: '#F9A8D4', solid: '#F472B6' },
    story: "Yesterday was my grandfather's eightieth birthday. The whole family traveled to his house in the countryside to celebrate. My aunt baked a huge chocolate cake with eighty candles. We were singing happy birthday when my grandfather started crying with joy. He told us many funny stories from his childhood. Next month, he is going to travel to Europe with my grandmother for the first time.",
    storyEs: 'Ayer fue el octogésimo cumpleaños de mi abuelo. Toda la familia viajó a su casa en el campo para celebrar. Mi tía horneó un enorme pastel de chocolate con ochenta velas. Estábamos cantando feliz cumpleaños cuando mi abuelo empezó a llorar de alegría. Nos contó muchas historias graciosas de su infancia. El próximo mes, va a viajar a Europa con mi abuela por primera vez.',
    questions: [
      {
        q: 'How old did the grandfather turn yesterday?',
        qEs: '¿Cuántos años cumplió el abuelo ayer?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + número + "years old"',
        en: ['He','turned','eighty','years','old'],
        es: 'Cumplió ochenta años.',
        topics: ['past-simple'],
      },
      {
        q: 'What did the aunt bake for the party?',
        qEs: '¿Qué horneó la tía para la fiesta?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + artículo + adjetivos + sustantivo',
        en: ['She','baked','a','huge','chocolate','cake'],
        es: 'Horneó un enorme pastel de chocolate.',
        topics: ['past-simple'],
      },
      {
        q: 'What were they doing when the grandfather cried?',
        qEs: '¿Qué estaban haciendo cuando el abuelo lloró?',
        tense: 'Pasado Continuo',
        hint: 'were + verbo-ing + complemento',
        en: ['They','were','singing','happy','birthday'],
        es: 'Estaban cantando feliz cumpleaños.',
        topics: ['past-cont'],
      },
      {
        q: 'What is he going to do next month?',
        qEs: '¿Qué va a hacer el próximo mes?',
        tense: 'Futuro · Going to',
        hint: 'is + going to + verbo base + lugar',
        en: ['He','is','going','to','travel','to','Europe'],
        es: 'Va a viajar a Europa.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 13,
    title: 'La billetera perdida',
    icon: '💰',
    color: { bg: '#FEF3C7', text: '#78350F', border: '#FCD34D', solid: '#D97706' },
    story: 'Last Tuesday, Robert lost his wallet on the bus. He had two hundred dollars and all his credit cards inside. A kind woman found the wallet and called him because his phone number was on a card. He was very lucky. Now he keeps his wallet in his front pocket instead of his back pocket. He is going to send the woman flowers as a thank-you gift.',
    storyEs: 'El martes pasado, Robert perdió su billetera en el autobús. Tenía doscientos dólares y todas sus tarjetas de crédito adentro. Una mujer amable encontró la billetera y lo llamó porque su número de teléfono estaba en una tarjeta. Tuvo mucha suerte. Ahora guarda su billetera en el bolsillo delantero en lugar del bolsillo trasero. Va a enviarle flores a la mujer como regalo de agradecimiento.',
    questions: [
      {
        q: 'Where did Robert lose his wallet?',
        qEs: '¿Dónde perdió Robert su billetera?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + pronombre objeto + lugar',
        en: ['He','lost','it','on','the','bus'],
        es: 'La perdió en el autobús.',
        topics: ['past-simple'],
      },
      {
        q: 'Why did the woman call him?',
        qEs: '¿Por qué lo llamó la mujer?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + complemento + lugar',
        en: ['Because','his','phone','number','was','on','a','card'],
        es: 'Porque su número de teléfono estaba en una tarjeta.',
        topics: ['past-simple'],
      },
      {
        q: 'Where does he keep his wallet now?',
        qEs: '¿Dónde guarda ahora su billetera?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + pronombre objeto + lugar específico',
        en: ['He','keeps','it','in','his','front','pocket'],
        es: 'La guarda en el bolsillo delantero.',
        topics: ['pres-simple'],
      },
      {
        q: 'What is he going to send the woman?',
        qEs: '¿Qué va a enviarle a la mujer?',
        tense: 'Futuro · Going to',
        hint: 'is + going to + verbo base + pronombre objeto + sustantivo',
        en: ['He','is','going','to','send','her','flowers'],
        es: 'Va a enviarle flores.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 14,
    title: 'La clase de cocina',
    icon: '👨‍🍳',
    color: { bg: '#CCFBF1', text: '#134E4A', border: '#5EEAD4', solid: '#0D9488' },
    story: 'Every Wednesday evening, Patricia takes an online cooking class. She loves learning new recipes from different countries. Last week, the chef was teaching them how to make sushi when her internet connection failed. She missed the most important part of the lesson. She must buy a new router because the old one is very slow. Tomorrow she will try the recipe by herself using a video on YouTube.',
    storyEs: 'Cada miércoles por la noche, Patricia toma una clase de cocina en línea. Le encanta aprender nuevas recetas de diferentes países. La semana pasada, el chef les estaba enseñando cómo hacer sushi cuando su conexión a internet falló. Se perdió la parte más importante de la lección. Debe comprar un router nuevo porque el viejo es muy lento. Mañana probará la receta sola usando un video en YouTube.',
    questions: [
      {
        q: 'When does Patricia take her cooking class?',
        qEs: '¿Cuándo toma Patricia su clase de cocina?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + pronombre objeto + adverbio de frecuencia',
        en: ['She','takes','it','every','Wednesday','evening'],
        es: 'La toma cada miércoles por la noche.',
        topics: ['pres-simple'],
      },
      {
        q: 'What was the chef teaching when the internet failed?',
        qEs: '¿Qué estaba enseñando el chef cuando falló el internet?',
        tense: 'Pasado Continuo',
        hint: 'was + verbo-ing + cláusula con "how to"',
        en: ['He','was','teaching','how','to','make','sushi'],
        es: 'Estaba enseñando cómo hacer sushi.',
        topics: ['past-cont'],
      },
      {
        q: 'Why must she buy a new router?',
        qEs: '¿Por qué debe comprar un router nuevo?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + sujeto + "is" + intensificador + adjetivo',
        en: ['Because','the','old','one','is','very','slow'],
        es: 'Porque el viejo es muy lento.',
        topics: ['pres-simple'],
      },
      {
        q: 'What will she try tomorrow?',
        qEs: '¿Qué intentará mañana?',
        tense: 'Futuro Simple (will)',
        hint: 'will + verbo base + complemento + "by herself"',
        en: ['She','will','try','the','recipe','by','herself'],
        es: 'Intentará la receta sola.',
        topics: ['fut-will'],
      },
    ],
  },

  {
    id: 15,
    title: 'Entrenamiento para el maratón',
    icon: '🏃',
    color: { bg: '#FEE2E2', text: '#991B1B', border: '#FCA5A5', solid: '#EF4444' },
    story: 'Michael is training for his first marathon in October. He runs ten kilometers every morning and goes to the gym three times a week. Last Saturday, he ran twenty kilometers without stopping. His personal trainer thinks he could finish the race in less than four hours. If he keeps training hard, he will achieve his goal. After the marathon, he is going to take a long vacation in Hawaii.',
    storyEs: 'Michael está entrenando para su primer maratón en octubre. Corre diez kilómetros cada mañana y va al gimnasio tres veces a la semana. El sábado pasado, corrió veinte kilómetros sin parar. Su entrenador personal piensa que podría terminar la carrera en menos de cuatro horas. Si sigue entrenando duro, logrará su objetivo. Después del maratón, va a tomarse unas largas vacaciones en Hawai.',
    questions: [
      {
        q: 'How often does Michael go to the gym?',
        qEs: '¿Con qué frecuencia va Michael al gimnasio?',
        tense: 'Presente Simple',
        hint: 'Presente Simple + frecuencia + período',
        en: ['He','goes','three','times','a','week'],
        es: 'Va tres veces a la semana.',
        topics: ['pres-simple'],
      },
      {
        q: 'What did Michael do last Saturday?',
        qEs: '¿Qué hizo Michael el sábado pasado?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + número + complemento + "without" + -ing',
        en: ['He','ran','twenty','kilometers','without','stopping'],
        es: 'Corrió veinte kilómetros sin parar.',
        topics: ['past-simple'],
      },
      {
        q: 'What does his trainer think he could do?',
        qEs: '¿Qué piensa su entrenador que podría hacer?',
        tense: 'Modal Could',
        hint: 'could + verbo base + complemento con "less than"',
        en: ['He','could','finish','in','less','than','four','hours'],
        alternatives: [
          ['He','might','finish','in','less','than','four','hours'],
        ],
        es: 'Podría terminar en menos de cuatro horas.',
        topics: ['modal-could'],
      },
      {
        q: 'What will happen if he keeps training hard?',
        qEs: '¿Qué pasará si sigue entrenando duro?',
        tense: 'Condicional Tipo 1',
        hint: 'will + verbo base + pronombre posesivo + sustantivo',
        en: ['He','will','achieve','his','goal'],
        es: 'Logrará su objetivo.',
        topics: ['cond-1'],
      },
    ],
  },

  {
    id: 16,
    title: 'La casa nueva',
    icon: '🏡',
    color: { bg: '#E0F2FE', text: '#0C4A6E', border: '#7DD3FC', solid: '#0EA5E9' },
    story: 'Three months ago, the Garcia family bought a beautiful house in a quiet neighborhood. The house has four bedrooms and a large garden. Before they moved, they lived in a small apartment in the city center. The children love their new home because it is much bigger than the old one. They are going to plant fruit trees in the garden next spring. The parents must paint all the walls before December.',
    storyEs: 'Hace tres meses, la familia Garcia compró una hermosa casa en un barrio tranquilo. La casa tiene cuatro habitaciones y un gran jardín. Antes de mudarse, vivían en un pequeño apartamento en el centro de la ciudad. A los niños les encanta su nueva casa porque es mucho más grande que la antigua. Van a plantar árboles frutales en el jardín la próxima primavera. Los padres deben pintar todas las paredes antes de diciembre.',
    questions: [
      {
        q: 'When did the Garcia family buy the house?',
        qEs: '¿Cuándo compró la familia Garcia la casa?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + pronombre objeto + marcador con "ago"',
        en: ['They','bought','it','three','months','ago'],
        es: 'La compraron hace tres meses.',
        topics: ['past-simple'],
      },
      {
        q: 'Where did they live before?',
        qEs: '¿Dónde vivían antes?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + lugar + adjetivo + sustantivo',
        en: ['They','lived','in','a','small','apartment'],
        es: 'Vivían en un pequeño apartamento.',
        topics: ['past-simple'],
      },
      {
        q: 'How is the new house compared to the old one?',
        qEs: '¿Cómo es la nueva casa comparada con la antigua?',
        tense: 'Presente Simple + Comparativo',
        hint: 'Presente Simple + much + comparativo (-er) + than + the + adj + one',
        en: ['It','is','much','bigger','than','the','old','one'],
        es: 'Es mucho más grande que la antigua.',
        topics: ['pres-simple','comparativo'],
      },
      {
        q: 'What must the parents do before December?',
        qEs: '¿Qué deben hacer los padres antes de diciembre?',
        tense: 'Modal Must',
        hint: 'must + verbo base + cuantificador + sustantivo',
        en: ['They','must','paint','all','the','walls'],
        es: 'Deben pintar todas las paredes.',
        topics: ['modal-must'],
      },
    ],
  },

  {
    id: 17,
    title: 'El concierto de rock',
    icon: '🎸',
    color: { bg: '#FAE8FF', text: '#86198F', border: '#F0ABFC', solid: '#C026D3' },
    story: 'Last Saturday night, Tom and his friends went to a rock concert downtown. They were dancing when the lead singer invited them to the stage. Tom sang one song with the band in front of thousands of people. It was the best night of his life. His friends took many videos and posted them on Instagram. Next month, the band is going to play in another city, but the tickets are very expensive.',
    storyEs: 'El sábado pasado por la noche, Tom y sus amigos fueron a un concierto de rock en el centro. Estaban bailando cuando el cantante principal los invitó al escenario. Tom cantó una canción con la banda frente a miles de personas. Fue la mejor noche de su vida. Sus amigos tomaron muchos videos y los publicaron en Instagram. El próximo mes, la banda va a tocar en otra ciudad, pero los boletos son muy caros.',
    questions: [
      {
        q: 'Where did Tom and his friends go last Saturday night?',
        qEs: '¿A dónde fueron Tom y sus amigos el sábado por la noche?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + lugar + adjetivo + sustantivo',
        en: ['They','went','to','a','rock','concert'],
        es: 'Fueron a un concierto de rock.',
        topics: ['past-simple'],
      },
      {
        q: 'What were they doing when the singer invited them?',
        qEs: '¿Qué estaban haciendo cuando el cantante los invitó?',
        tense: 'Pasado Continuo',
        hint: 'were + verbo-ing',
        en: ['They','were','dancing'],
        es: 'Estaban bailando.',
        topics: ['past-cont'],
      },
      {
        q: 'What was that night for Tom?',
        qEs: '¿Qué fue esa noche para Tom?',
        tense: 'Pasado Simple + Superlativo',
        hint: 'Pasado Simple irregular + the + superlativo (-est irregular) + sustantivo + of',
        en: ['It','was','the','best','night','of','his','life'],
        es: 'Fue la mejor noche de su vida.',
        topics: ['past-simple','superlativo'],
      },
      {
        q: 'What is the band going to do next month?',
        qEs: '¿Qué va a hacer la banda el próximo mes?',
        tense: 'Futuro · Going to',
        hint: 'are + going to + verbo base + preposición + adjetivo + sustantivo',
        en: ['They','are','going','to','play','in','another','city'],
        es: 'Van a tocar en otra ciudad.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 18,
    title: 'La cita con el doctor',
    icon: '🩺',
    color: { bg: '#D1FAE5', text: '#064E3B', border: '#6EE7B7', solid: '#059669' },
    story: 'Yesterday morning, Carmen visited her doctor because she had a terrible headache. The doctor examined her carefully and asked many questions about her diet and sleep. She must drink more water and sleep at least eight hours every night. If she follows these recommendations, the headaches will disappear soon. She is going to come back in two weeks for another checkup.',
    storyEs: 'Ayer por la mañana, Carmen visitó a su doctor porque tenía un terrible dolor de cabeza. El doctor la examinó cuidadosamente y le hizo muchas preguntas sobre su dieta y sueño. Debe beber más agua y dormir al menos ocho horas cada noche. Si sigue estas recomendaciones, los dolores de cabeza desaparecerán pronto. Va a regresar en dos semanas para otro chequeo.',
    questions: [
      {
        q: 'When did Carmen visit the doctor?',
        qEs: '¿Cuándo visitó Carmen al doctor?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + pronombre objeto + marcador de tiempo',
        en: ['She','visited','him','yesterday','morning'],
        es: 'Lo visitó ayer por la mañana.',
        topics: ['past-simple'],
      },
      {
        q: 'Why did she visit the doctor?',
        qEs: '¿Por qué fue al doctor?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + adjetivo + sustantivo',
        en: ['Because','she','had','a','terrible','headache'],
        es: 'Porque tenía un terrible dolor de cabeza.',
        topics: ['past-simple'],
      },
      {
        q: 'What must she do every night?',
        qEs: '¿Qué debe hacer cada noche?',
        tense: 'Modal Must',
        hint: 'must + verbo base + "at least" + número + sustantivo',
        en: ['She','must','sleep','at','least','eight','hours'],
        es: 'Debe dormir al menos ocho horas.',
        topics: ['modal-must'],
      },
      {
        q: 'What will happen if she follows the recommendations?',
        qEs: '¿Qué pasará si sigue las recomendaciones?',
        tense: 'Condicional Tipo 1',
        hint: 'sujeto + will + verbo base + adverbio',
        en: ['The','headaches','will','disappear','soon'],
        es: 'Los dolores de cabeza desaparecerán pronto.',
        topics: ['cond-1'],
      },
    ],
  },

  {
    id: 19,
    title: 'El refugio de animales',
    icon: '🐕',
    color: { bg: '#FFEDD5', text: '#7C2D12', border: '#FDBA74', solid: '#EA580C' },
    story: 'Every Sunday, Daniel volunteers at the animal shelter near his house. He feeds the dogs, cleans their cages, and plays with the cats. Last weekend, a small puppy was sleeping in the corner when Daniel arrived. He fell in love immediately and decided to adopt the puppy. If he had a bigger house, he would adopt more animals. Next year, he is going to study to become a veterinarian.',
    storyEs: 'Cada domingo, Daniel hace voluntariado en el refugio de animales cerca de su casa. Alimenta a los perros, limpia sus jaulas y juega con los gatos. El fin de semana pasado, un pequeño cachorro estaba durmiendo en un rincón cuando Daniel llegó. Se enamoró inmediatamente y decidió adoptar al cachorro. Si tuviera una casa más grande, adoptaría más animales. El próximo año, va a estudiar para convertirse en veterinario.',
    questions: [
      {
        q: 'What does Daniel do at the shelter?',
        qEs: '¿Qué hace Daniel en el refugio?',
        tense: 'Presente Simple',
        hint: 'Presente Simple (dos verbos) + complementos',
        en: ['He','feeds','the','dogs','and','cleans','their','cages'],
        es: 'Alimenta a los perros y limpia sus jaulas.',
        topics: ['pres-simple'],
      },
      {
        q: 'What was the puppy doing when Daniel arrived?',
        qEs: '¿Qué estaba haciendo el cachorro cuando Daniel llegó?',
        tense: 'Pasado Continuo',
        hint: 'was + verbo-ing + lugar',
        en: ['It','was','sleeping','in','the','corner'],
        es: 'Estaba durmiendo en un rincón.',
        topics: ['past-cont'],
      },
      {
        q: 'What would he do if he had a bigger house?',
        qEs: '¿Qué haría si tuviera una casa más grande?',
        tense: 'Condicional Tipo 2',
        hint: 'would + verbo base + cuantificador + sustantivo',
        en: ['He','would','adopt','more','animals'],
        es: 'Adoptaría más animales.',
        topics: ['cond-2'],
      },
      {
        q: 'What is he going to study next year?',
        qEs: '¿Qué va a estudiar el próximo año?',
        tense: 'Futuro · Going to',
        hint: 'is + going to + verbo base + "to become" + sustantivo',
        en: ['He','is','going','to','study','to','become','a','veterinarian'],
        es: 'Va a estudiar para convertirse en veterinario.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 20,
    title: 'Vacaciones en Italia',
    icon: '🇮🇹',
    color: { bg: '#ECFCCB', text: '#3F6212', border: '#BEF264', solid: '#65A30D' },
    story: 'Two weeks ago, my parents traveled to Italy for their twenty-fifth wedding anniversary. They visited Rome, Florence, and Venice in just ten days. While they were eating dinner in Venice, a gondolier sang a beautiful Italian song for them. They took hundreds of photos and bought many souvenirs for the family. It was the most romantic trip of their lives. Next year, they are going to visit Greece for their next anniversary.',
    storyEs: 'Hace dos semanas, mis padres viajaron a Italia por su vigésimo quinto aniversario de bodas. Visitaron Roma, Florencia y Venecia en solo diez días. Mientras cenaban en Venecia, un gondolero les cantó una hermosa canción italiana. Tomaron cientos de fotos y compraron muchos recuerdos para la familia. Fue el viaje más romántico de sus vidas. El próximo año, van a visitar Grecia para su próximo aniversario.',
    questions: [
      {
        q: 'Where did they travel two weeks ago?',
        qEs: '¿A dónde viajaron hace dos semanas?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple regular + lugar',
        en: ['They','traveled','to','Italy'],
        es: 'Viajaron a Italia.',
        topics: ['past-simple'],
      },
      {
        q: 'What was happening while they were eating dinner?',
        qEs: '¿Qué estaba pasando mientras cenaban?',
        tense: 'Pasado Continuo',
        hint: 'sujeto + was + verbo-ing + complemento',
        en: ['A','gondolier','was','singing','for','them'],
        es: 'Un gondolero les estaba cantando.',
        topics: ['past-cont'],
      },
      {
        q: 'What was that trip for them?',
        qEs: '¿Qué fue ese viaje para ellos?',
        tense: 'Pasado Simple + Superlativo',
        hint: 'Pasado Simple irregular + the + most + adj + sustantivo + of',
        en: ['It','was','the','most','romantic','trip','of','their','lives'],
        es: 'Fue el viaje más romántico de sus vidas.',
        topics: ['past-simple','superlativo'],
      },
      {
        q: 'Where are they going to visit next year?',
        qEs: '¿A dónde van a visitar el próximo año?',
        tense: 'Futuro · Going to',
        hint: 'are + going to + verbo base + lugar',
        en: ['They','are','going','to','visit','Greece'],
        es: 'Van a visitar Grecia.',
        topics: ['going-to'],
      },
    ],
  },

  {
    id: 21,
    title: 'El mercado de Anna',
    icon: '🧺',
    color: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', solid: '#F59E0B' },
    story: 'Last Saturday morning, Anna went to the local farmers\' market with her mother to buy ingredients for a big family dinner. Anna bought some apples, a few oranges, and a lot of vegetables. Her mother said they had very little time before the guests arrived. There was no fresh bread at their favorite bakery because a lot of people had bought it earlier. They walked to another bakery and found a few small loaves. By noon, they had everything they needed and Anna had no money left in her wallet.',
    storyEs: 'El sábado pasado por la mañana, Anna fue al mercado de agricultores local con su madre para comprar ingredientes para una gran cena familiar. Anna compró algunas manzanas, unas pocas naranjas y muchas verduras. Su madre dijo que tenían muy poco tiempo antes de que llegaran los invitados. No había pan fresco en su panadería favorita porque mucha gente lo había comprado antes. Caminaron a otra panadería y encontraron unos pocos panes pequeños. A mediodía, tenían todo lo que necesitaban y a Anna no le quedaba nada de dinero en la cartera.',
    questions: [
      {
        q: 'What did Anna buy at the market?',
        qEs: '¿Qué compró Anna en el mercado?',
        tense: 'Pasado Simple',
        hint: 'Pasado Simple irregular + cuantificadores (some / a few / a lot of)',
        en: ['She','bought','some','apples','a','few','oranges','and','a','lot','of','vegetables'],
        alternatives: [
          ['She','bought','some','apples','a','few','oranges','and','lots','of','vegetables'],
        ],
        es: 'Compró algunas manzanas, unas pocas naranjas y muchas verduras.',
        topics: ['past-simple','cuantificador'],
      },
      {
        q: 'How much time did they have before the guests arrived?',
        qEs: '¿Cuánto tiempo tenían antes de que llegaran los invitados?',
        tense: 'Pasado Simple',
        hint: '"Had" + cuantificador para incontable con sentido negativo',
        en: ['They','had','very','little','time'],
        es: 'Tenían muy poco tiempo.',
        topics: ['past-simple','cuantificador'],
      },
      {
        q: 'Why was there no fresh bread at their favorite bakery?',
        qEs: '¿Por qué no había pan fresco en su panadería favorita?',
        tense: 'Pasado Perfecto + Cuantificador',
        hint: '"Because" + cuantificador para AFIRMATIVA (a lot of / lots of) + sujeto + pasado + objeto',
        en: ['Because','a','lot','of','people','had','bought','it','earlier'],
        alternatives: [
          ['Because','lots','of','people','had','bought','it','earlier'],
        ],
        es: 'Porque mucha gente lo había comprado antes.',
        topics: ['past-simple','cuantificador'],
      },
      {
        q: 'How much money did Anna have left at noon?',
        qEs: '¿Cuánto dinero le quedaba a Anna a mediodía?',
        tense: 'Pasado Simple',
        hint: '"Had no" + sustantivo = no le quedaba nada de…',
        en: ['She','had','no','money','left'],
        alternatives: [
          ['She','did','not','have','any','money','left'],
        ],
        es: 'No le quedaba nada de dinero.',
        topics: ['past-simple','cuantificador'],
      },
    ],
  },
];

const PQ_DISTRACT_POOL = [
  'will','would','could','should','must','may','might','can','shall',
  'is','are','am','was','were','be','been','being',
  'do','does','did','have','has','had',
  "don't","doesn't","didn't","won't","wouldn't","shouldn't","couldn't","isn't","aren't","wasn't","weren't",
  'a','an','the','some','any','many','much','few','little','more','less','most','least',
  'in','on','at','to','for','with','of','about','from','by','around','through','over','under','between','during','after','before','near',
  'than','as','not','very','really','too','so','also','still','already','just','only','even','well','today','yesterday','tomorrow',
  'because','when','while','if','unless','although','but','and','or','so','since','then',
  'this','that','these','those','here','there','now',
  'I','you','he','she','it','we','they','me','him','her','us','them','my','your','his','our','their',
];

function pqSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function pqPunct(es) { return es && es.trim().endsWith('?') ? '?' : '.'; }
function pqKind(item) {
  if ((item.es || '').trim().endsWith('?')) return 'pregunta';
  const en = ' ' + (item.en || []).join(' ').toLowerCase() + ' ';
  if (/ not /.test(en) || /n['']t /.test(en)) return 'negacion';
  return 'afirmacion';
}
const PQ_KIND_STYLES = {
  pregunta:   { bg: '#0EA5E9', dark: '#0369A1', icon: '❓', label: 'Pregunta' },
  afirmacion: { bg: '#0D9488', dark: '#115E59', icon: '✓',  label: 'Afirmación' },
  negacion:   { bg: '#E11D48', dark: '#9F1239', icon: '✗',  label: 'Negación' },
};
function pqShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Limpia la cadena de "tense" quitando auxiliares (Do/Does/Did/will, etc.)
// y nombres específicos de modales. La regularidad del verbo se mueve a la
// pista. Mantiene el tiempo verbal abstracto + función (pregunta, negativa,
// cortesía, posibilidad, etc.).
function pqBriefTense(item) {
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
function pqBriefHint(item) {
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

// Construye el banco con la unión de la respuesta principal Y todas las
// alternativas válidas (si las hay). Cualquier variante puede armarse.
function pqBuildTiles(question) {
  const variants = [question.en, ...(question.alternatives || [])];
  const wordMaxCounts = {};
  variants.forEach(variant => {
    const local = {};
    variant.forEach(w => { local[w] = (local[w] || 0) + 1; });
    Object.entries(local).forEach(([w, c]) => {
      wordMaxCounts[w] = Math.max(wordMaxCounts[w] || 0, c);
    });
  });
  const requiredTokens = [];
  Object.entries(wordMaxCounts).forEach(([w, c]) => {
    for (let i = 0; i < c; i++) requiredTokens.push(w);
  });
  const usedLower = new Set(Object.keys(wordMaxCounts).map(w => w.toLowerCase()));
  const targetTotal = Math.max(26, requiredTokens.length * 2 + 8);
  const needed = Math.max(0, targetTotal - requiredTokens.length);
  const pool = PQ_DISTRACT_POOL.filter(w => !usedLower.has(w.toLowerCase()));
  const distractors = pqShuffle(pool).slice(0, needed);
  return pqShuffle([...requiredTokens, ...distractors]).map((word, id) => ({ id, word }));
}

function PreguntasScreen({ onExit }) {
  const [storyId, setStoryId]   = React.useState(null); // null = selector
  const [qOrder, setQOrder]     = React.useState([]);   // shuffled list of questions
  const [qIdx, setQIdx]         = React.useState(0);
  const [tiles, setTiles]       = React.useState([]);
  const [placed, setPlaced]     = React.useState([]);
  const [checked, setChecked]   = React.useState(null);
  const [score, setScore]       = React.useState(0);
  const [failures, setFailures] = React.useState([]);
  const [shake, setShake]       = React.useState(false);
  const [storyOpen, setStoryOpen] = React.useState(true);
  const [showStoryEs, setShowStoryEs]       = React.useState(false);
  const [showQuestionEs, setShowQuestionEs] = React.useState(false);
  const [showHint, setShowHint]             = React.useState(false);
  const [hintCountdown, setHintCountdown]   = React.useState(60);
  const [dragIdx, setDragIdx]               = React.useState(null);
  const [dragOverIdx, setDragOverIdx]       = React.useState(null);
  const justDragged                         = React.useRef(false);

  const story = storyId !== null ? PQ_STORIES.find(s => s.id === storyId) : null;
  const totalQ = qOrder.length;
  const isDone = story && qIdx >= totalQ;
  const ex = story ? qOrder[qIdx] : null;
  const progress = totalQ ? (qIdx + (checked !== null ? 1 : 0)) / totalQ : 0;

  // Countdown de 60s antes de desbloquear la pista (se reinicia al cambiar pregunta o historia)
  React.useEffect(() => {
    if (storyId === null || isDone) return;
    setShowHint(false);
    setHintCountdown(60);
    const id = setInterval(() => {
      setHintCountdown(s => {
        if (s <= 1) { clearInterval(id); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [qIdx, storyId, isDone]);

  function startStory(id) {
    const s = PQ_STORIES.find(x => x.id === id);
    const shuffled = pqShuffle(s.questions);
    setStoryId(id);
    setQOrder(shuffled);
    setQIdx(0); setPlaced([]); setChecked(null);
    setScore(0); setFailures([]);
    setTiles(pqBuildTiles(shuffled[0]));
    setStoryOpen(true);
    setShowStoryEs(false); setShowQuestionEs(false);
  }
  function backToSelector() {
    setStoryId(null); setQOrder([]); setTiles([]);
    setQIdx(0); setPlaced([]); setChecked(null);
    setScore(0); setFailures([]);
  }
  function retryStory() {
    if (storyId !== null) startStory(storyId);
  }

  function placeTile(id)  { if (checked === null) setPlaced(p => [...p, id]); }
  function removeTile(id) { if (checked === null) setPlaced(p => p.filter(x => x !== id)); }
  function clearAnswer()  { if (checked === null) setPlaced([]); }

  function pqMoveTile(from, to) {
    if (from === null || from === to) return;
    setPlaced(p => {
      const a = [...p];
      const [it] = a.splice(from, 1);
      const insertAt = from < to ? to - 1 : to;
      a.splice(insertAt, 0, it);
      return a;
    });
  }
  function pqOnDragStart(e, i) {
    if (checked !== null) return;
    setDragIdx(i);
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(i)); } catch (_) {}
  }
  function pqOnDragOver(e, i)  { if (dragIdx === null) return; e.preventDefault(); setDragOverIdx(i); }
  function pqOnDrop(e, i)      {
    if (dragIdx === null) return;
    e.preventDefault(); e.stopPropagation();
    pqMoveTile(dragIdx, i);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }
  function pqOnDragEnd()       {
    setDragIdx(null); setDragOverIdx(null);
    setTimeout(() => { justDragged.current = false; }, 0);
  }
  function pqOnDropEnd(e)      {
    if (dragIdx === null) return;
    e.preventDefault();
    pqMoveTile(dragIdx, placed.length);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }

  function handleCheck() {
    const ansWords = placed.map(id => tiles.find(t => t.id === id).word);
    const matches = (variant) => ansWords.length === variant.length && ansWords.every((w, i) => w === variant[i]);
    const ok = matches(ex.en) || (ex.alternatives || []).some(matches);
    setChecked(ok);
    if (ok) {
      setScore(s => s + 1);
    } else {
      setFailures(f => [...f, { question: ex, userAnswer: ansWords.join(' ') }]);
      setShake(true); setTimeout(() => setShake(false), 400);
    }
  }
  function handleNext() {
    const next = qIdx + 1;
    setQIdx(next);
    setPlaced([]); setChecked(null);
    setShowQuestionEs(false);
    if (next < totalQ) setTiles(pqBuildTiles(qOrder[next]));
  }

  // ── Selector ─────────────────────────────────────────────────────────────
  if (storyId === null) {
    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: 'linear-gradient(135deg, #2563EB, #1E3A8A)',
          borderRadius: 'var(--r-2xl)', padding: '30px 36px', color: 'white',
          marginBottom: 22, boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -20, right: -20, fontSize: 140, opacity: 0.13 }}>💬</div>
          <div style={{ fontSize: 42, marginBottom: 10 }}>💬</div>
          <div style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.4px' }}>Historias</div>
          <div style={{ fontSize: 14, opacity: 0.95, fontWeight: 600, lineHeight: 1.65, maxWidth: 720 }}>
            Practica lo que más cuesta: <strong>entender preguntas en inglés y responderlas</strong>.
            Lee una historia corta y luego responde 4 preguntas sobre ella armando la respuesta
            con fichas. Te indico el <strong>tiempo verbal</strong>, la <strong>cantidad de palabras</strong>
            y el banco tiene muchos distractores para que tengas que pensar bien.
          </div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          📖 Elige una historia
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 14, marginBottom: 20,
        }}>
          {PQ_STORIES.map(s => (
            <button key={s.id} onClick={() => startStory(s.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font)', textAlign: 'left',
              background: 'white', border: `2.5px solid ${s.color.border}`,
              borderRadius: 'var(--r-xl)', padding: '18px 20px',
              boxShadow: `0 4px 0 ${s.color.text}22`, transition: 'all 0.12s',
              display: 'flex', flexDirection: 'column', gap: 10, minHeight: 200,
            }}
              onMouseEnter={ev => { ev.currentTarget.style.background = s.color.bg; ev.currentTarget.style.transform = 'translateY(-3px)'; ev.currentTarget.style.boxShadow = `0 6px 0 ${s.color.text}33`; }}
              onMouseLeave={ev => { ev.currentTarget.style.background = 'white'; ev.currentTarget.style.transform = 'translateY(0)'; ev.currentTarget.style.boxShadow = `0 4px 0 ${s.color.text}22`; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--r-md)',
                  background: s.color.bg, border: `2px solid ${s.color.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, flexShrink: 0,
                }}>{s.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, color: s.color.text, opacity: 0.75, letterSpacing: '0.05em' }}>
                    HISTORIA {s.id}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: s.color.text, lineHeight: 1.2 }}>
                    {s.title}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--muted)', lineHeight: 1.5, flex: 1 }}>
                {s.story.slice(0, 110)}…
              </div>
              <div style={{
                padding: '8px 14px', borderRadius: 'var(--r-md)',
                background: s.color.solid, color: 'white',
                fontWeight: 900, fontSize: 13, textAlign: 'center',
                boxShadow: `0 3px 0 ${s.color.text}`,
              }}>
                📖 LEER Y RESPONDER (4 preguntas)
              </div>
            </button>
          ))}
        </div>

        <button className="btn btn-ghost" onClick={onExit}>← Salir</button>
      </div>
    );
  }

  // ── Done — resultados ───────────────────────────────────────────────────
  if (isDone) {
    const pointsPerCorrect = 2;
    const scorePoints = score * pointsPerCorrect;
    const maxPoints = totalQ * pointsPerCorrect;
    const pct = Math.round((score / totalQ) * 100);
    const result =
      scorePoints >= maxPoints * 0.9 ? { label: '¡Excelente!', emoji: '🏆', accent: 'var(--emerald)', accentDark: 'var(--emerald-dark)', msg: 'Entendiste perfectamente la historia.' } :
      scorePoints >= maxPoints * 0.7 ? { label: '¡Muy bien!',  emoji: '💪', accent: 'var(--indigo)',  accentDark: 'var(--indigo-dark)',  msg: 'Vas comprendiendo bien — sigue practicando.' } :
      scorePoints >= maxPoints * 0.5 ? { label: 'Bien, sigue practicando', emoji: '📘', accent: 'var(--amber)',   accentDark: 'var(--amber-dark)',   msg: 'Relee la historia y revisa los puntos débiles.' } :
                                       { label: 'Necesitas repasar más',    emoji: '📚', accent: 'var(--rose)',    accentDark: 'var(--rose-dark)',    msg: '¡No te rindas! Practica con otra historia.' };

    const weakTopicCounts = {};
    failures.forEach(f => {
      (f.question.topics || []).forEach(t => {
        weakTopicCounts[t] = (weakTopicCounts[t] || 0) + 1;
      });
    });
    const weakTopics = Object.entries(weakTopicCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, c]) => ({ key: k, label: PQ_TOPIC_LABELS[k] || k, count: c }));

    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: `linear-gradient(135deg, ${result.accent}, ${result.accentDark})`,
          borderRadius: 'var(--r-2xl)', padding: '32px', color: 'white', textAlign: 'center',
          marginBottom: 24, boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -10, right: -10, fontSize: 110, opacity: 0.18 }}>{result.emoji}</div>
          <div style={{ fontSize: 13, fontWeight: 800, opacity: 0.85, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>
            {story.icon} {story.title}
          </div>
          <div style={{ fontSize: 56, marginBottom: 6 }}>{result.emoji}</div>
          <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>
            {scorePoints}<span style={{ fontSize: 24, opacity: 0.85 }}>/{maxPoints}</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 6 }}>{result.label}</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, opacity: 0.9 }}>
            {score} de {totalQ} preguntas correctas · {pct}% · {result.msg}
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
                  }}>
                    {t.count} {t.count === 1 ? 'fallo' : 'fallos'}
                  </span>
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
                const correctSentence = f.question.en.join(' ') + pqPunct(f.question.es);
                return (
                  <div key={i} style={{
                    background: 'white', border: '2px solid var(--rose)',
                    borderRadius: 'var(--r-xl)', padding: '16px 18px',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ background: 'var(--rose)', color: 'white', borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 900 }}>
                        Pregunta fallada
                      </span>
                      <span style={{ background: '#7C3AED', color: 'white', borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 900 }}>
                        🕒 {pqBriefTense(f.question)}
                      </span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>
                      ❓ {f.question.q}
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 10 }}>
                      🇪🇸 {f.question.qEs}
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
                        Respuesta correcta:
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                        <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--emerald-dark)' }}>
                          {correctSentence}
                        </span>
                        <button onClick={() => pqSpeak(correctSentence)} title="Escuchar" style={{
                          background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                        </button>
                      </div>
                      <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 4 }}>
                        🇪🇸 {f.question.es}
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
            ← Otras historias
          </button>
          <button className="btn btn-primary" style={{ flex: 2, minWidth: 220, background: story.color.solid, boxShadow: `0 4px 0 ${story.color.text}` }} onClick={retryStory}>
            ↻ REPETIR HISTORIA
          </button>
        </div>
      </div>
    );
  }

  // ── Question screen ─────────────────────────────────────────────────────
  const isCorrect = checked === true;
  const punct = pqPunct(ex.es);
  const correctSentence = ex.en.join(' ') + punct;
  const bank   = tiles.filter(t => !placed.includes(t.id));
  const answer = placed.map(id => tiles.find(t => t.id === id));
  const wordCount = ex.en.length;
  const c = story.color;

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={backToSelector} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)', flexWrap: 'wrap', gap: 6 }}>
            <span>{story.icon} {story.title}  ·  Pregunta {qIdx + 1} / {totalQ}</span>
            <span style={{ color: c.text }}>Score: {score * 2}/{totalQ * 2}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: c.solid }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* La historia (colapsable) */}
      <div style={{
        background: c.bg, border: `2px solid ${c.border}`,
        borderRadius: 'var(--r-2xl)', padding: '16px 20px', marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: storyOpen ? 12 : 0 }}>
          <button onClick={() => setStoryOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', gap: 8,
            flex: 1, fontFamily: 'var(--font)',
          }}>
            <span style={{ fontSize: 18 }}>📖</span>
            <span style={{ fontSize: 13, fontWeight: 900, color: c.text, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              La historia
            </span>
            <span style={{ fontSize: 14, color: c.text, opacity: 0.7 }}>{storyOpen ? '▾' : '▸'}</span>
          </button>
          <button onClick={() => pqSpeak(story.story)} title="Escuchar historia" style={{
            background: c.solid, border: 'none', borderRadius: 'var(--r-sm)',
            width: 32, height: 32, cursor: 'pointer', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </button>
        </div>
        {storyOpen && (
          <div>
            <div style={{
              background: 'white', borderRadius: 'var(--r-md)', padding: '12px 16px',
              fontSize: 14.5, lineHeight: 1.65, color: 'var(--text)', fontWeight: 600,
              border: `1px solid ${c.border}`,
            }}>
              {story.story}
            </div>
            <div style={{ marginTop: 10 }}>
              <button onClick={() => setShowStoryEs(v => !v)} style={{
                background: 'rgba(255,255,255,0.65)', border: `1.5px solid ${c.border}`,
                borderRadius: 'var(--r-md)', padding: '6px 12px',
                fontFamily: 'var(--font)', fontSize: 12, fontWeight: 800,
                color: c.text, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                {showStoryEs ? '🙈 Ocultar traducción' : '👁️ Ver traducción en español'}
              </button>
              {showStoryEs && (
                <div style={{
                  fontSize: 13, color: c.text, fontStyle: 'italic',
                  marginTop: 8, padding: '10px 14px',
                  background: 'rgba(255,255,255,0.7)', borderRadius: 'var(--r-md)',
                  lineHeight: 1.55, border: `1px dashed ${c.border}`,
                }}>
                  🇪🇸 {story.storyEs}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Pregunta */}
      <div style={{
        background: 'white', border: `2px solid ${c.border}`,
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: c.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          ❓ Pregunta {qIdx + 1} de {totalQ}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
          <button onClick={() => pqSpeak(ex.q)} title="Escuchar pregunta" style={{
            background: c.solid, border: 'none', borderRadius: 'var(--r-sm)',
            width: 32, height: 32, cursor: 'pointer', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 800, color: c.text, lineHeight: 1.4 }}>
              {ex.q}
            </div>
            <div style={{ marginTop: 8 }}>
              <button onClick={() => setShowQuestionEs(v => !v)} style={{
                background: 'transparent', border: `1.5px solid ${c.border}`,
                borderRadius: 'var(--r-md)', padding: '4px 10px',
                fontFamily: 'var(--font)', fontSize: 11.5, fontWeight: 800,
                color: c.text, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                {showQuestionEs ? '🙈 Ocultar traducción' : '👁️ Ver traducción de la pregunta'}
              </button>
              {showQuestionEs && (
                <div style={{
                  fontSize: 13.5, fontStyle: 'italic', color: c.text,
                  marginTop: 6, padding: '8px 12px',
                  background: c.bg, borderRadius: 'var(--r-md)',
                  lineHeight: 1.5, border: `1px dashed ${c.border}`,
                }}>
                  🇪🇸 {ex.qEs}
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'stretch', marginTop: 12 }}>
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
            const k = PQ_KIND_STYLES[pqKind(ex)];
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
            🕒 {pqBriefTense(ex)}
          </div>
          {pqBriefHint(ex) !== '—' && (
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
                🔒 Pista disponible en {hintCountdown}s — ¡piénsalo primero!
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
                background: c.bg, border: `1.5px dashed ${c.solid}`,
                borderRadius: 'var(--r-md)', padding: '8px 12px',
                fontFamily: 'var(--font)', fontSize: 12, fontWeight: 700, color: c.text,
                textAlign: 'left', cursor: 'pointer',
                flex: 1, minWidth: 220,
              }}>
                🧩 <strong>Pista:</strong> {pqBriefHint(ex)}  <span style={{ opacity: 0.6 }}>🙈</span>
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
            Tu respuesta
          </span>
          <span style={{ fontSize: 11, fontWeight: 800, color: placed.length === wordCount ? 'var(--emerald-dark)' : 'var(--muted)' }}>
            {placed.length} / {wordCount} palabras
          </span>
        </div>
        <div
          onDragOver={e => { if (dragIdx !== null) e.preventDefault(); }}
          onDrop={pqOnDropEnd}
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
              onDragStart={e => pqOnDragStart(e, i)}
              onDragOver={e => pqOnDragOver(e, i)}
              onDragLeave={() => setDragOverIdx(null)}
              onDrop={e => pqOnDrop(e, i)}
              onDragEnd={pqOnDragEnd}
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
                  {isCorrect ? '¡Correcto!' : 'Respuesta correcta:'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)' }}>
                    {correctSentence}
                  </span>
                  <button onClick={() => pqSpeak(correctSentence)} title="Escuchar" style={{
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
              {qIdx + 1 >= totalQ ? 'VER RESULTADOS' : 'SIGUIENTE PREGUNTA →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.PreguntasScreen = PreguntasScreen;
