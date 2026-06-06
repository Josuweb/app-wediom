// 🔥 ON FIRE — 5 versiones de examen mixto, cada una con 10 oraciones que
// combinan TODOS los temas (presente, pasado, futuro, modales, comparativos,
// superlativos, condicionales). Al pulsar EMPEZAR se elige una versión al azar
// (evita repetir la anterior). Score sobre 20. Al final muestra fallos y
// temas que conviene repasar.

const TOPIC_LABELS = {
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
  'cond-1':              'Condicional Tipo 1 (if + presente, will)',
  'cond-2':              'Condicional Tipo 2 (if + pasado, would)',
  'comparativo':         'Comparativos de superioridad',
  'comparativo-igualdad':'Comparativo de igualdad (as ... as)',
  'superlativo':         'Superlativos',
  'cuantificador':       'Cuantificadores (some, any, much, many, a lot of, no, few, little)',
};

// ── 50 drills definidos una sola vez (referenciados por las 5 versiones) ────
const D = {
  // Presente
  amigo_amable: {
    context: 'Acabas de presentar a tu mejor amigo a una persona nueva. Lleváis años juntos y siempre te trata genial.',
    situation: 'Describe esa cualidad positiva y constante hacia ti, con un adverbio que indique frecuencia total.',
    es: 'Mi mejor amigo siempre es muy amable conmigo.',
    en: ['My','best','friend','is','always','very','kind','to','me'],
    tense: 'Presente Simple',
    hint: 'Superlativo irregular (best) + "to be" + adverbio de frecuencia',
    topics: ['pres-simple','superlativo'],
  },
  estudio_ingles: {
    context: 'Estás en la biblioteca con un libro de inglés. Llega un amigo y te pregunta: "¿Qué haces?"',
    situation: 'Explícale lo que haces justo ahora (acción prolongada) y tu razón principal (viajar).',
    es: 'Estoy estudiando inglés porque quiero viajar.',
    en: ['I','am','studying','English','because','I','want','to','travel'],
    tense: 'Presente Continuo + Presente Simple',
    hint: 'am/is/are + -ing + presente simple en la segunda parte',
    topics: ['pres-cont','pres-simple'],
  },
  hermana_alta: {
    context: 'Tu hermana y tú siempre competís en deportes. Ella mide más que tú, pero tú corres más rápido.',
    situation: 'Describe esa comparación: ella es más en una cosa pero menos en la otra. Usa "as ... as" en la segunda parte.',
    es: 'Mi hermana es más alta pero no tan rápida como yo.',
    en: ['My','sister','is','taller','but','not','as','fast','as','me'],
    tense: 'Presente Simple',
    hint: 'Comparativo de superioridad (-er) + igualdad negativa (not as ... as)',
    topics: ['pres-simple','comparativo','comparativo-igualdad'],
  },
  hermana_hospital: {
    context: 'Estás hablando de tu hermana mayor. Trabaja en un hospital cuidando pacientes todos los días.',
    situation: 'Describe en qué trabaja y qué tipo de personas atiende.',
    es: 'Ella trabaja en un hospital y ayuda a personas enfermas.',
    en: ['She','works','in','a','hospital','and','helps','sick','people'],
    tense: 'Presente Simple',
    hint: 'Verbo + -s con she/he/it (works, helps)',
    topics: ['pres-simple'],
  },
  viendo_pelicula: {
    context: 'Tu amigo te llama por teléfono. Tú y tu familia están en el sofá viendo una película.',
    situation: 'Cuéntale qué estás haciendo justo en este momento.',
    es: 'Estamos viendo una película ahora mismo.',
    en: ['We','are','watching','a','movie','right','now'],
    tense: 'Presente Continuo',
    hint: 'are + verbo-ing + marcador "right now"',
    topics: ['pres-cont'],
  },
  cafe_manana: {
    context: 'Conoces a una persona nueva y quieres saber sus hábitos de la mañana.',
    situation: 'Pregúntale si toma café habitualmente al despertar.',
    es: '¿Sueles tomar café por la mañana?',
    en: ['Do','you','usually','drink','coffee','in','the','morning'],
    tense: 'Presente Simple (pregunta)',
    hint: 'Do + sujeto + adverbio de frecuencia + verbo base',
    topics: ['pres-simple'],
  },
  padres_no_hablan: {
    context: 'Le explicas a tu profesor por qué tus padres no pueden ayudarte con la tarea de inglés.',
    situation: 'Habla de tus padres y de su limitación con el idioma.',
    es: 'Mis padres no hablan inglés muy bien.',
    en: ['My','parents','do','not','speak','English','very','well'],
    tense: 'Presente Simple (negativo)',
    hint: 'do not + verbo base (con I/you/we/they)',
    topics: ['pres-simple'],
  },
  esta_lloviendo: {
    context: 'Habías quedado con un amigo para ir al parque. Ves por la ventana que hay tormenta.',
    situation: 'Explica el clima ahora y lo que están decidiendo hacer.',
    es: 'Está lloviendo afuera, así que nos estamos quedando en casa.',
    en: ['It','is','raining','outside','so','we','are','staying','home'],
    tense: 'Presente Continuo',
    hint: 'is + verbo-ing (clima) + are + verbo-ing (acción actual)',
    topics: ['pres-cont'],
  },
  jefe_puntual: {
    context: 'Hablas con un colega sobre tu jefe. Es muy puntual — nunca llega tarde a la oficina.',
    situation: 'Describe esa cualidad suya con un adverbio de frecuencia.',
    es: 'Él siempre llega a tiempo al trabajo.',
    en: ['He','always','arrives','on','time','to','work'],
    tense: 'Presente Simple',
    hint: 'Sujeto + adverbio + verbo (+ -s para he/she/it)',
    topics: ['pres-simple'],
  },
  escuchando_estudiando: {
    context: 'Entras al cuarto de tus hijos. Tienen los audífonos puestos y los libros abiertos.',
    situation: 'Describe lo que están haciendo simultáneamente.',
    es: 'Están escuchando música mientras estudian.',
    en: ['They','are','listening','to','music','while','they','study'],
    tense: 'Presente Continuo + Presente Simple',
    hint: 'are + verbo-ing (continuo) + "while" + verbo base (simple)',
    topics: ['pres-cont','pres-simple'],
  },

  // Pasado
  visite_abuela: {
    context: 'Un compañero del trabajo te pregunta qué hiciste el fin de semana. El sábado fuiste a ver a tu abuela porque ella vive sin compañía.',
    situation: 'Cuenta esa visita familiar y el motivo (que vive sola).',
    es: 'Visité a mi abuela el sábado porque ella vive sola.',
    en: ['I','visited','my','grandma','on','Saturday','because','she','lives','alone'],
    tense: 'Pasado Simple + Presente Simple',
    hint: 'Verbo pasado regular (-ed) + cláusula con "because" en presente simple',
    topics: ['past-simple','pres-simple'],
  },
  durmiendo_telefono: {
    context: 'Anoche perdiste una llamada importante a las 11 PM. Hoy te disculpas con la persona que llamó.',
    situation: 'Explica qué estabas haciendo en ese momento cuando sonó el teléfono.',
    es: 'Estaba durmiendo cuando sonó el teléfono.',
    en: ['I','was','sleeping','when','the','phone','rang'],
    tense: 'Pasado Continuo + Pasado Simple',
    hint: 'was/were + -ing (acción larga) interrumpida por pasado simple (acción corta)',
    topics: ['past-cont','past-simple'],
  },
  coche_pasado_igual: {
    context: 'Tu vecino y tú compraron coches el año pasado. Hablan de las prestaciones y resulta que ambos eran igual de rápidos.',
    situation: 'Compara la velocidad de ambos coches usando "as ... as".',
    es: 'El año pasado mi coche fue tan rápido como el tuyo.',
    en: ['Last','year','my','car','was','as','fast','as','yours'],
    tense: 'Pasado Simple',
    hint: 'was/were + igualdad (as ... as) + pronombre posesivo (yours)',
    topics: ['past-simple','comparativo-igualdad'],
  },
  compramos_caro: {
    context: 'Ayer fuiste con tu familia al concesionario y, después de mucho mirar, decidieron llevarse el modelo más caro de toda la tienda.',
    situation: 'Cuenta la compra del día anterior, destacando que era el más caro de todos.',
    es: 'Ayer compramos el coche más caro de la tienda.',
    en: ['Yesterday','we','bought','the','most','expensive','car','in','the','store'],
    tense: 'Pasado Simple',
    hint: 'Pasado simple irregular (buy → bought) + superlativo largo (the most + adj)',
    topics: ['past-simple','superlativo'],
  },
  no_fui_fiesta: {
    context: 'Un amigo te reclama no haber ido a su fiesta. Ese día habías trabajado muchas horas y estabas agotado.',
    situation: 'Discúlpate explicando por qué no fuiste y el estado en que estabas.',
    es: 'No fui a la fiesta porque estaba cansado.',
    en: ['I','did','not','go','to','the','party','because','I','was','tired'],
    tense: 'Pasado Simple (negativo)',
    hint: 'did not + verbo base + verbo "to be" en pasado',
    topics: ['past-simple'],
  },
  did_you_finish: {
    context: 'Eres profesor y revisas con un estudiante si entregó su tarea a tiempo.',
    situation: 'Pregúntale si terminó la tarea ayer.',
    es: '¿Terminaste tu tarea ayer?',
    en: ['Did','you','finish','your','homework','yesterday'],
    tense: 'Pasado Simple (pregunta)',
    hint: 'Did + sujeto + verbo base + ...?',
    topics: ['past-simple'],
  },
  cocinando_perro: {
    context: 'Cuentas una anécdota graciosa de la cena de ayer. Estabas preparando la comida cuando tu perro entró corriendo.',
    situation: 'Cuenta esa interrupción: tu acción larga + lo que el perro hizo de repente.',
    es: 'Mientras cocinaba, mi perro entró corriendo a la cocina.',
    en: ['While','I','was','cooking','my','dog','ran','into','the','kitchen'],
    tense: 'Pasado Continuo + Pasado Simple',
    hint: 'While + was/were + -ing + pasado simple (acción puntual)',
    topics: ['past-cont','past-simple'],
  },
  padre_jugaba_futbol: {
    context: 'Tu padre te cuenta cómo era su rutina los domingos cuando era joven. Siempre iba al campo de fútbol.',
    situation: 'Describe esa costumbre del pasado.',
    es: 'Él jugaba fútbol cada domingo cuando era joven.',
    en: ['He','played','soccer','every','Sunday','when','he','was','young'],
    tense: 'Pasado Simple',
    hint: 'verbo + -ed (regular) + cláusula con "when" + was',
    topics: ['past-simple'],
  },
  cenando_apagon: {
    context: 'Estaban cenando en familia cuando se cortó la luz por una tormenta.',
    situation: 'Cuenta la escena: lo que hacían cuando se fue la luz.',
    es: 'Estábamos cenando cuando se fue la luz.',
    en: ['We','were','having','dinner','when','the','lights','went','out'],
    tense: 'Pasado Continuo + Pasado Simple',
    hint: 'were + verbo-ing + "when" + pasado simple (interrupción)',
    topics: ['past-cont','past-simple'],
  },
  vivieron_espana: {
    context: 'Le cuentas a un amigo sobre tus tíos. Vivieron una larga temporada en otro país.',
    situation: 'Cuenta dónde vivieron y por cuánto tiempo (terminado).',
    es: 'Vivieron en España durante diez años.',
    en: ['They','lived','in','Spain','for','ten','years'],
    tense: 'Pasado Simple',
    hint: 'verbo + -ed + "for" + duración',
    topics: ['past-simple'],
  },

  // Futuro
  manana_frio: {
    context: 'Hoy hace 20 °C pero el pronóstico del clima dice que mañana bajará a 12 °C. Estás viendo las noticias con alguien.',
    situation: 'Comenta la predicción comparando mañana con hoy.',
    es: 'Mañana hará más frío que hoy.',
    en: ['Tomorrow','it','will','be','colder','than','today'],
    tense: 'Futuro Simple (will)',
    hint: 'will + be + comparativo de superioridad (-er + than)',
    topics: ['fut-will','comparativo'],
  },
  te_llamare: {
    context: 'Estás saliendo del trabajo y tu pareja te dice: "Avísame cuando llegues a casa, ¿vale?"',
    situation: 'Prométele que la llamarás en cuanto llegues.',
    es: 'Te llamaré cuando llegue a casa.',
    en: ['I','will','call','you','when','I','arrive','home'],
    tense: 'Futuro Simple + Presente Simple',
    hint: 'will + verbo base, pero DESPUÉS de "when" se usa presente (no will)',
    topics: ['fut-will','pres-simple'],
  },
  comprar_coche_rapido: {
    context: 'Tu coche actual es muy lento. Ya ahorraste suficiente y decidiste comprarte uno mejor el próximo año.',
    situation: 'Anuncia ese plan ya decidido a un amigo.',
    es: 'Voy a comprar un coche más rápido el próximo año.',
    en: ['I','am','going','to','buy','a','faster','car','next','year'],
    tense: 'Futuro · Going to',
    hint: 'am/is/are + going to + verbo base + comparativo de superioridad',
    topics: ['going-to','comparativo'],
  },
  cocinando_invitados: {
    context: 'Has invitado a unos amigos a cenar. Llegarán a las 7 PM y a esa hora vosotros estaréis en plena preparación de la cena.',
    situation: 'Explica qué actividad estaréis HACIENDO (en progreso) cuando lleguen.',
    es: 'Vamos a estar cocinando cuando ellos lleguen.',
    en: ['We','are','going','to','be','cooking','when','they','arrive'],
    tense: 'Going to + be + -ing (continuo futuro)',
    hint: 'am/is/are + going to + be + verbo-ing, y presente en cláusula con "when"',
    topics: ['going-to','fut-cont'],
  },
  trabajando_durmiendo: {
    context: 'Tu pareja se va de vacaciones mañana y descansará todo el día. Tú, en cambio, tienes una jornada larga de trabajo desde casa.',
    situation: 'Explica vuestras actividades simultáneas para mañana (tú trabajando, ella durmiendo).',
    es: 'Mañana estaré trabajando mientras tú estás durmiendo.',
    en: ['Tomorrow','I','will','be','working','while','you','are','sleeping'],
    tense: 'Futuro Continuo + Presente Continuo',
    hint: 'will be + -ing (futuro continuo) + am/is/are + -ing (presente continuo, tras "while")',
    topics: ['fut-cont','pres-cont'],
  },
  viajara_japon: {
    context: 'Tu amiga lleva años queriendo conocer Asia. Por fin tiene los pasajes para irse el próximo verano.',
    situation: 'Cuenta su plan futuro a otra persona.',
    es: 'Ella viajará a Japón el próximo verano.',
    en: ['She','will','travel','to','Japan','next','summer'],
    tense: 'Futuro Simple (will)',
    hint: 'will + verbo base',
    topics: ['fut-will'],
  },
  visitar_padres: {
    context: 'Hace meses que no ves a tus padres. Ya decidiste ir a verlos este fin de semana.',
    situation: 'Anuncia ese plan ya decidido.',
    es: 'Voy a visitar a mis padres este fin de semana.',
    en: ['I','am','going','to','visit','my','parents','this','weekend'],
    tense: 'Futuro · Going to',
    hint: 'am/is/are + going to + verbo base',
    topics: ['going-to'],
  },
  te_ayudare: {
    context: 'Tu amigo está agobiado moviendo cajas pesadas. Decides en ese momento ofrecerle ayuda.',
    situation: 'Tranquilízale ofreciendo ayuda espontánea.',
    es: 'No te preocupes, te ayudaré con eso.',
    en: ['Do','not','worry','I','will','help','you','with','that'],
    tense: 'Futuro Simple (will, decisión espontánea)',
    hint: 'will para decisiones tomadas EN EL MOMENTO',
    topics: ['fut-will'],
  },
  cenando_nueve: {
    context: 'Un amigo quiere llamarte esta noche. Le avisas a qué hora estaréis ocupados cenando.',
    situation: 'Dile a qué hora exacta estaréis cenando (acción en progreso futura).',
    es: 'A las nueve esta noche estaremos cenando.',
    en: ['At','nine','tonight','we','will','be','having','dinner'],
    tense: 'Futuro Continuo',
    hint: 'will be + verbo-ing (acción en progreso en momento futuro)',
    topics: ['fut-cont'],
  },
  no_vendra: {
    context: 'Estás organizando una fiesta. Un amigo confirmó que no podrá venir por trabajo.',
    situation: 'Avísale al anfitrión la situación de tu amigo.',
    es: 'Él no vendrá a la fiesta porque está ocupado.',
    en: ['He','will','not','come','to','the','party','because','he','is','busy'],
    tense: 'Futuro Simple (negativo) + Presente Simple',
    hint: 'will not + verbo base + cláusula "because" en presente',
    topics: ['fut-will','pres-simple'],
  },

  // Modales
  estudiar_examen: {
    context: 'Tu amigo tiene un examen importante el lunes pero apenas ha estudiado. Quieres ayudarle a aprobar.',
    situation: 'Dale un consejo condicionado a su meta de aprobar.',
    es: 'Deberías estudiar más si quieres aprobar el examen.',
    en: ['You','should','study','more','if','you','want','to','pass','the','exam'],
    tense: 'Modal Should + Presente Simple',
    hint: 'should + verbo base + cláusula condicional con "if" + presente',
    topics: ['modal-should','pres-simple'],
  },
  nadar_nino: {
    context: 'En una sobremesa hablan de la infancia. Alguien pregunta si sabías nadar de pequeño/a. Sí, lo hacías muy bien.',
    situation: 'Cuenta esa habilidad pasada, especificando la etapa de tu vida.',
    es: 'Yo podía nadar muy bien cuando era niño.',
    en: ['I','could','swim','very','well','when','I','was','a','child'],
    tense: 'Modal Could (pasado) + Pasado Simple',
    hint: 'could (habilidad pasada) + cláusula con "when" + "was"',
    topics: ['modal-could','past-simple'],
  },
  respetar_reglas: {
    context: 'Eres parte de una nueva empresa donde están definiendo la cultura. En una reunión, hablas con tus compañeros sobre las normas.',
    situation: 'Expresa la obligación fuerte y diaria que aplica a todo el grupo (incluido tú).',
    es: 'Debemos respetar las reglas todos los días.',
    en: ['We','must','respect','the','rules','every','day'],
    alternatives: [
      ['We','have','to','respect','the','rules','every','day'],
    ],
    tense: 'Modal Must',
    hint: 'must (obligación fuerte) + verbo base + adverbio de frecuencia',
    topics: ['modal-must'],
  },
  puede_llover: {
    context: 'Tienes una salida al aire libre planeada para mañana en la mañana. Miras al cielo y ves nubes oscuras.',
    situation: 'Expresa esa posibilidad climática (no es seguro, pero podría pasar).',
    es: 'Puede que llueva mañana por la mañana.',
    en: ['It','may','rain','tomorrow','morning'],
    tense: 'Modal May (Posibilidad)',
    hint: 'It + may + verbo base + marcador de tiempo',
    topics: ['modal-may'],
  },
  podrias_ayudarme: {
    context: 'Tienes una tarea complicada para mañana y tu amigo es bueno en esa materia. Quieres pedirle ayuda, pero con educación.',
    situation: 'Pídele ayuda de forma cortés especificando el momento del día.',
    es: '¿Podrías ayudarme con mi tarea esta tarde?',
    en: ['Could','you','help','me','with','my','homework','this','afternoon'],
    alternatives: [
      ['Can','you','help','me','with','my','homework','this','afternoon'],
    ],
    tense: 'Modal Could (Pregunta cortés)',
    hint: 'Could + sujeto + verbo base + ...? · usa pronombre objeto (me)',
    topics: ['modal-could'],
  },
  smartest_class: {
    context: 'Comentas con un amigo sobre una compañera muy lista de la clase. No quieres afirmarlo categóricamente — solo crees que es posible.',
    situation: 'Especula sobre su inteligencia respecto a todo el grupo.',
    es: 'Ella podría ser la persona más inteligente de la clase.',
    en: ['She','could','be','the','smartest','person','in','the','class'],
    alternatives: [
      ['She','might','be','the','smartest','person','in','the','class'],
    ],
    tense: 'Modal Could (Posibilidad)',
    hint: 'could + be + the + superlativo corto (-est)',
    topics: ['modal-could','superlativo'],
  },
  no_comer_rapido: {
    context: 'Ayer tu amigo comió tan rápido que le dolió el estómago. Hoy lo ves comiendo otra vez a toda velocidad.',
    situation: 'Dale un consejo negativo comparándolo con su comportamiento del día anterior.',
    es: 'No deberías comer tan rápido como ayer.',
    en: ['You','should','not','eat','as','fast','as','yesterday'],
    tense: 'Modal Should (Negativo)',
    hint: 'should + not + verbo base + comparativo de igualdad (as ... as)',
    topics: ['modal-should','comparativo-igualdad'],
  },
  no_fumar: {
    context: 'Eres el guardia de seguridad de un edificio público. Ves a alguien encendiendo un cigarro adentro.',
    situation: 'Prohíbele fumar dentro del edificio.',
    es: 'No debes fumar dentro del edificio.',
    en: ['You','must','not','smoke','inside','the','building'],
    tense: 'Modal Must (Prohibición)',
    hint: 'must not + verbo base = prohibición fuerte',
    topics: ['modal-must'],
  },
  abrir_ventana: {
    context: 'Hace mucho calor en la sala donde estás reunido con tu compañero. La ventana está cerrada.',
    situation: 'Pídele de forma informal que abra la ventana.',
    es: '¿Puedes abrir la ventana, por favor?',
    en: ['Can','you','open','the','window','please'],
    tense: 'Modal Can (Pregunta informal)',
    hint: 'Can + sujeto + verbo base + ...?',
    topics: ['modal-can'],
  },
  might_come: {
    context: 'Una amiga te dijo que tal vez vendría a la fiesta pero no está segura. Te preguntan si vendrá.',
    situation: 'Expresa la baja certeza sobre su asistencia.',
    es: 'Tal vez ella venga a la fiesta esta noche.',
    en: ['She','might','come','to','the','party','tonight'],
    tense: 'Modal Might (Posibilidad baja)',
    hint: 'might + verbo base (probabilidad 30-50%)',
    topics: ['modal-might'],
  },

  // Mix avanzado
  if_dinero: {
    context: 'Un amigo te pregunta: "¿Qué harías si fueras millonario?" Tú siempre soñaste con recorrer el planeta entero.',
    situation: 'Imagina la situación hipotética y respóndele qué harías.',
    es: 'Si tuviera más dinero, viajaría por el mundo.',
    en: ['If','I','had','more','money','I','would','travel','around','the','world'],
    tense: 'Condicional Tipo 2',
    hint: 'if + pasado simple (had), would + verbo base (travel)',
    topics: ['cond-2'],
  },
  if_estudias: {
    context: 'Tu hermano está nervioso por un examen difícil mañana. Le quieres motivar con una promesa condicional.',
    situation: 'Dile que si pone esfuerzo, conseguirá el resultado.',
    es: 'Si estudias duro, aprobarás el examen.',
    en: ['If','you','study','hard','you','will','pass','the','test'],
    tense: 'Condicional Tipo 1',
    hint: 'if + presente simple, will + verbo base',
    topics: ['cond-1'],
  },
  if_temprano_parque: {
    context: 'Esperas a una amiga para salir. Si llega temprano, hay tiempo para el parque; si no, no.',
    situation: 'Expresa esa condición real para hoy.',
    es: 'Si ella llega temprano, iremos al parque.',
    en: ['If','she','comes','early','we','will','go','to','the','park'],
    tense: 'Condicional Tipo 1',
    hint: 'if + presente (3ª persona +s), will + verbo base',
    topics: ['cond-1'],
  },
  would_rather: {
    context: 'Tus amigos te invitan a salir esta noche, pero estás cansado y prefieres quedarte.',
    situation: 'Expresa tu preferencia: quedarte en lugar de salir.',
    es: 'Preferiría quedarme en casa antes que salir esta noche.',
    en: ['I','would','rather','stay','home','than','go','out','tonight'],
    tense: 'Modal Would (would rather)',
    hint: 'would rather + verbo base + than + verbo base',
    topics: ['modal-would'],
  },
  if_were_you: {
    context: 'Tu amiga te cuenta que le ofrecieron un puesto nuevo pero duda si aceptar. Tú lo aceptarías sin pensarlo.',
    situation: 'Aconséjale ponerte en su lugar — qué harías tú.',
    es: 'Si yo fuera tú, aceptaría el trabajo.',
    en: ['If','I','were','you','I','would','take','the','job'],
    tense: 'Condicional Tipo 2 (con "were")',
    hint: 'if + "were" (todas las personas) + would + verbo base',
    topics: ['cond-2'],
  },
  kindest_person: {
    context: 'Le cuentas a alguien sobre tu mejor amiga. De todas las personas que conoces, ninguna es tan buena como ella.',
    situation: 'Destaca su cualidad como superlativa entre todos los que conoces.',
    es: 'Ella es la persona más amable que conozco.',
    en: ['She','is','the','kindest','person','I','know'],
    tense: 'Presente Simple (superlativo)',
    hint: 'is + the + adj-est + sustantivo + cláusula',
    topics: ['superlativo','pres-simple'],
  },
  much_more_intelligent: {
    context: 'Comentan dos hermanos. La diferencia de inteligencia entre ellos es enorme.',
    situation: 'Enfatiza esa gran diferencia usando "much" antes del comparativo.',
    es: 'Él es mucho más inteligente que su hermano.',
    en: ['He','is','much','more','intelligent','than','his','brother'],
    tense: 'Presente Simple (comparativo intensificado)',
    hint: 'is + much + more + adjetivo largo + than',
    topics: ['comparativo','pres-simple'],
  },
  runs_faster: {
    context: 'Eres entrenador de un equipo de atletismo. Tienes una corredora que destaca por encima de todos.',
    situation: 'Compárala con cualquier otra del equipo: nadie le gana.',
    es: 'Ella corre más rápido que cualquier otra del equipo.',
    en: ['She','runs','faster','than','anyone','else','in','the','team'],
    tense: 'Presente Simple (comparativo)',
    hint: 'verbo + comparativo (-er) + than + anyone else',
    topics: ['comparativo','pres-simple'],
  },
  best_pizza: {
    context: 'Acabas de probar una pizza en tu restaurante favorito. De todas las pizzas de la ciudad, ninguna se le compara.',
    situation: 'Declara que es la mejor de toda la ciudad.',
    es: 'Esta es la mejor pizza de la ciudad.',
    en: ['This','is','the','best','pizza','in','the','city'],
    tense: 'Presente Simple (superlativo irregular)',
    hint: 'is + the + best (irregular de good) + in + lugar',
    topics: ['superlativo','pres-simple'],
  },
  if_no_hurry: {
    context: 'Tu familia va con prisa para tomar el tren. Si no aprietan el paso, lo perderán.',
    situation: 'Expresa esa advertencia condicional negativa.',
    es: 'Si no se apuran, perderán el tren.',
    en: ['If','they','do','not','hurry','they','will','miss','the','train'],
    tense: 'Condicional Tipo 1 (negativo)',
    hint: 'if + do/does not + verbo base, will + verbo base',
    topics: ['cond-1'],
  },

  // ── CUANTIFICADORES ─────────────────────────────────────────────────────
  some_amigos_madrid: {
    context: 'Estás hablando con un colega nuevo sobre tu vida social en Madrid. No conoces a mucha gente, pero sí a algunos.',
    situation: 'Confirma que sí tienes algunos amigos allí. Usa el cuantificador típico de afirmativas con contables.',
    es: 'Tengo algunos amigos en Madrid.',
    en: ['I','have','some','friends','in','Madrid'],
    alternatives: [
      ['I','have','a','few','friends','in','Madrid'],
    ],
    tense: 'Presente Simple',
    hint: '"Some" en afirmativa con contable plural — alternativa: "a few"',
    topics: ['pres-simple','cuantificador'],
  },
  any_preguntas_clase: {
    context: 'Acabas de terminar de explicar un tema en la pizarra. El grupo te mira en silencio.',
    situation: 'Pregunta si alguien tiene alguna duda usando el cuantificador propio de preguntas.',
    es: '¿Tienes alguna pregunta?',
    en: ['Do','you','have','any','questions'],
    tense: 'Presente Simple (pregunta con Do)',
    hint: '"Any" en preguntas + contable plural',
    topics: ['pres-simple','cuantificador'],
  },
  many_libros_anio: {
    context: 'En una primera cita, tu acompañante quiere saber cuánto lees al año.',
    situation: 'Pregúntale cuántos libros lee al año. Usa el cuantificador correcto para contables.',
    es: '¿Cuántos libros lees al año?',
    en: ['How','many','books','do','you','read','a','year'],
    tense: 'Presente Simple (pregunta con Do)',
    hint: '"How many" + contable plural + Do + sujeto + verbo base',
    topics: ['pres-simple','cuantificador'],
  },
  much_tiempo_semana: {
    context: 'Un amigo te pide ayuda con su mudanza pero esta semana estás desbordado.',
    situation: 'Dile que no dispones de mucho tiempo libre. Usa el cuantificador para incontables.',
    es: 'No tengo mucho tiempo libre esta semana.',
    en: ['I','do','not','have','much','free','time','this','week'],
    tense: 'Presente Simple (negativo)',
    hint: 'do not + have + "much" + incontable (time)',
    topics: ['pres-simple','cuantificador'],
  },
  alotof_trabajo_hoy: {
    context: 'Tu jefe te pregunta cómo va el día. Tienes la bandeja de entrada hasta arriba.',
    situation: 'Cuéntale que tienes muchísimo trabajo hoy. Usa el cuantificador más natural en afirmativa.',
    es: 'Tengo mucho trabajo hoy.',
    en: ['I','have','a','lot','of','work','today'],
    alternatives: [
      ['I','have','lots','of','work','today'],
    ],
    tense: 'Presente Simple',
    hint: 'En afirmativa con incontable, prefiere "a lot of" / "lots of" antes que "much"',
    topics: ['pres-simple','cuantificador'],
  },
  no_dinero_finmes: {
    context: 'Tu amigo te invita a cenar fuera pero estás a fin de mes y la cuenta vacía.',
    situation: 'Dile que no te queda nada de dinero hasta el mes que viene. Usa el cuantificador corto "no" antes del sustantivo.',
    es: 'No tengo dinero hasta el mes que viene.',
    en: ['I','have','no','money','until','next','month'],
    alternatives: [
      ['I','do','not','have','any','money','until','next','month'],
    ],
    tense: 'Presente Simple',
    hint: '"have no" + sustantivo = "do not have any" — el primero es más corto',
    topics: ['pres-simple','cuantificador'],
  },
  little_leche_nevera: {
    context: 'Tu compañero quiere preparar café con leche, pero ya viste la nevera y queda muy poca.',
    situation: 'Avísale que apenas queda leche. Usa el cuantificador para incontables con sentido negativo (sin "a").',
    es: 'Queda poca leche en la nevera.',
    en: ['There','is','little','milk','in','the','fridge'],
    tense: 'Presente Simple',
    hint: '"Little" SIN "a" = poca cantidad, sentido negativo. Con incontables.',
    topics: ['pres-simple','cuantificador'],
  },
  afew_amigos_ciudad: {
    context: 'Tu prima te pregunta cómo te ha ido socialmente desde que te mudaste.',
    situation: 'Cuéntale que tienes unos pocos buenos amigos en la nueva ciudad (sentido positivo).',
    es: 'Tengo unos pocos buenos amigos en la nueva ciudad.',
    en: ['I','have','a','few','good','friends','in','the','new','city'],
    tense: 'Presente Simple',
    hint: '"A few" + contable plural = unos pocos (positivo, suficiente)',
    topics: ['pres-simple','cuantificador'],
  },
  lotsof_peliculas: {
    context: 'Un amigo te pregunta cómo pasas los fines de semana. La verdad es que ves cine sin parar.',
    situation: 'Cuéntale que ves muchísimas películas. Usa una variante informal de "a lot of" en afirmativa.',
    es: 'Veo muchísimas películas.',
    en: ['I','watch','lots','of','movies'],
    alternatives: [
      ['I','watch','a','lot','of','movies'],
    ],
    tense: 'Presente Simple',
    hint: '"Lots of" / "a lot of" se usan principalmente en AFIRMATIVAS; ambos con contables e incontables',
    topics: ['pres-simple','cuantificador'],
  },
  none_galletas_quedan: {
    context: 'Tu hermano pregunta desde el sofá si quedan galletas en el bote de la cocina. Acabas de mirar.',
    situation: 'Respóndele que no queda ninguna, usando el cuantificador que va SOLO (sin sustantivo después).',
    es: 'No queda ninguna.',
    en: ['There','are','none','left'],
    tense: 'Presente Simple',
    hint: '"None" se usa solo, sin sustantivo después (referido al contexto anterior)',
    topics: ['pres-simple','cuantificador'],
  },
};

// ── 5 versiones del examen — cada una mezcla 10 oraciones de TODOS los temas
const ON_FIRE_TESTS = [
  { id: 1, drills: [D.amigo_amable, D.visite_abuela, D.manana_frio, D.estudiar_examen, D.if_dinero,
                    D.viendo_pelicula, D.no_fui_fiesta, D.viajara_japon, D.no_fumar, D.kindest_person] },
  { id: 2, drills: [D.estudio_ingles, D.durmiendo_telefono, D.te_llamare, D.nadar_nino, D.if_estudias,
                    D.cafe_manana, D.did_you_finish, D.visitar_padres, D.abrir_ventana, D.much_more_intelligent] },
  { id: 3, drills: [D.hermana_alta, D.coche_pasado_igual, D.comprar_coche_rapido, D.respetar_reglas, D.if_temprano_parque,
                    D.padres_no_hablan, D.cocinando_perro, D.te_ayudare, D.might_come, D.runs_faster] },
  { id: 4, drills: [D.hermana_hospital, D.compramos_caro, D.cocinando_invitados, D.puede_llover, D.would_rather,
                    D.esta_lloviendo, D.padre_jugaba_futbol, D.cenando_nueve, D.podrias_ayudarme, D.best_pizza] },
  { id: 5, drills: [D.jefe_puntual, D.cenando_apagon, D.trabajando_durmiendo, D.smartest_class, D.if_were_you,
                    D.escuchando_estudiando, D.vivieron_espana, D.no_vendra, D.no_comer_rapido, D.if_no_hurry] },
  { id: 6, drills: [D.some_amigos_madrid, D.any_preguntas_clase, D.many_libros_anio, D.much_tiempo_semana, D.alotof_trabajo_hoy,
                    D.no_dinero_finmes, D.little_leche_nevera, D.afew_amigos_ciudad, D.lotsof_peliculas, D.none_galletas_quedan] },
];

// ── Banco de distractores grande (≥40 palabras comunes) ─────────────────────
const OF_DISTRACT_POOL = [
  'will','would','could','should','must','may','might','can','shall',
  'is','are','am','was','were','be','been','being',
  'do','does','did','have','has','had',
  "don't","doesn't","didn't","won't","wouldn't","shouldn't","couldn't","isn't","aren't","wasn't","weren't",
  'a','an','the','some','any','many','much','few','little','more','less','most','least',
  'in','on','at','to','for','with','of','about','from','by','around','through','over','under','between','during','after','before',
  'than','as','not','very','really','too','so','also','still','already','just','only','even',
  'because','when','while','if','unless','although','though','but','and','or','so','since',
  'this','that','these','those','here','there','now','then','today','tomorrow','yesterday',
  'I','you','he','she','it','we','they','me','him','her','us','them','my','your','his','our','their',
];

function ofSpeak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
}
function ofShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function ofPunct(es) { return es.trim().endsWith('?') ? '?' : '.'; }
function ofKind(item) {
  if ((item.es || '').trim().endsWith('?')) return 'pregunta';
  const en = ' ' + (item.en || []).join(' ').toLowerCase() + ' ';
  if (/ not /.test(en) || /n['']t /.test(en)) return 'negacion';
  return 'afirmacion';
}
const OF_KIND_STYLES = {
  pregunta:   { bg: '#0EA5E9', dark: '#0369A1', icon: '❓', label: 'Pregunta' },
  afirmacion: { bg: '#0D9488', dark: '#115E59', icon: '✓',  label: 'Afirmación' },
  negacion:   { bg: '#E11D48', dark: '#9F1239', icon: '✗',  label: 'Negación' },
};

// Limpia la cadena de "tense" quitando auxiliares (Do/Does/Did/will, etc.)
// y nombres específicos de modales. La regularidad del verbo se mueve a la
// pista. Mantiene el tiempo verbal abstracto + función (pregunta, negativa,
// cortesía, posibilidad, etc.).
function ofBriefTense(item) {
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

// Calcula una pista mínima desde topics + tense del drill.
// NUNCA revela palabras textuales del answer ni el auxiliar.
// Solo marca "Verbo irregular" (para pasado simple irregular), conceptos
// gramaticales abstractos (adjetivos, condicional) y pregunta/negativa.
function ofBriefHint(item) {
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

// Construye el banco con MUCHOS distractores: total ~30 fichas, al menos
// el doble de palabras de la respuesta correcta. Si el drill define
// "alternatives" (respuestas alternativas válidas), todas sus palabras
// también se incluyen en el banco.
function ofBuildTiles(drill) {
  const variants = [drill.en, ...(drill.alternatives || [])];
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
  const targetTotal = Math.max(28, requiredTokens.length * 2 + 6);
  const needed = Math.max(0, targetTotal - requiredTokens.length);
  const pool = OF_DISTRACT_POOL.filter(w => !usedLower.has(w.toLowerCase()));
  const distractors = ofShuffle(pool).slice(0, needed);
  return ofShuffle([...requiredTokens, ...distractors]).map((word, id) => ({ id, word }));
}

function ofBuildPool(test) {
  return ofShuffle(test.drills).map(d => ({ ...d, tiles: ofBuildTiles(d) }));
}

// Elige una versión al azar — evita repetir la anterior si es posible
function ofPickRandomTest(excludeId) {
  const candidates = ON_FIRE_TESTS.filter(t => t.id !== excludeId);
  const pool = candidates.length > 0 ? candidates : ON_FIRE_TESTS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function OnFireScreen({ onExit }) {
  const [test, setTest]         = React.useState(null); // null = intro
  const [pool, setPool]         = React.useState([]);
  const [idx, setIdx]           = React.useState(0);
  const [placed, setPlaced]     = React.useState([]);
  const [checked, setChecked]   = React.useState(null);
  const [score, setScore]       = React.useState(0);
  const [failures, setFailures] = React.useState([]); // {drill, userAnswer}
  const [shake, setShake]       = React.useState(false);
  const [dragIdx, setDragIdx]         = React.useState(null);
  const [dragOverIdx, setDragOverIdx] = React.useState(null);
  const justDragged                   = React.useRef(false);

  const total  = pool.length;
  const isDone = test && idx >= total;
  const ex     = pool[idx];
  const progress = total ? (idx + (checked !== null ? 1 : 0)) / total : 0;

  function startRandom() {
    const t = ofPickRandomTest(test ? test.id : null);
    setTest(t);
    setPool(ofBuildPool(t));
    setIdx(0); setPlaced([]); setChecked(null);
    setScore(0); setFailures([]);
  }
  function backToIntro() {
    setTest(null); setPool([]);
    setIdx(0); setPlaced([]); setChecked(null);
    setScore(0); setFailures([]);
  }

  function placeTile(id)  { if (checked === null) setPlaced(p => [...p, id]); }
  function removeTile(id) { if (checked === null) setPlaced(p => p.filter(x => x !== id)); }
  function clearAnswer()  { if (checked === null) setPlaced([]); }

  function ofMoveTile(from, to) {
    if (from === null || from === to) return;
    setPlaced(p => {
      const a = [...p];
      const [it] = a.splice(from, 1);
      const insertAt = from < to ? to - 1 : to;
      a.splice(insertAt, 0, it);
      return a;
    });
  }
  function ofOnDragStart(e, i) {
    if (checked !== null) return;
    setDragIdx(i);
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(i)); } catch (_) {}
  }
  function ofOnDragOver(e, i)  { if (dragIdx === null) return; e.preventDefault(); setDragOverIdx(i); }
  function ofOnDrop(e, i)      {
    if (dragIdx === null) return;
    e.preventDefault(); e.stopPropagation();
    ofMoveTile(dragIdx, i);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }
  function ofOnDragEnd()       {
    setDragIdx(null); setDragOverIdx(null);
    setTimeout(() => { justDragged.current = false; }, 0);
  }
  function ofOnDropEnd(e)      {
    if (dragIdx === null) return;
    e.preventDefault();
    ofMoveTile(dragIdx, placed.length);
    justDragged.current = true;
    setDragIdx(null); setDragOverIdx(null);
  }

  function handleCheck() {
    const ansWords = placed.map(id => ex.tiles.find(t => t.id === id).word);
    const matches = (variant) => ansWords.length === variant.length && ansWords.every((w, i) => w === variant[i]);
    const ok = matches(ex.en) || (ex.alternatives || []).some(matches);
    setChecked(ok);
    if (ok) {
      setScore(s => s + 1);
    } else {
      setFailures(f => [...f, { drill: ex, userAnswer: ansWords.join(' ') }]);
      setShake(true); setTimeout(() => setShake(false), 400);
    }
  }
  function handleNext() { setIdx(i => i + 1); setPlaced([]); setChecked(null); }

  // ── Intro ────────────────────────────────────────────────────────────────
  if (test === null) {
    return (
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          background: 'linear-gradient(135deg, #DC2626, #991B1B)',
          borderRadius: 'var(--r-2xl)', padding: '36px 40px', color: 'white',
          marginBottom: 24, boxShadow: '0 10px 32px rgba(220,38,38,0.4)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 180, opacity: 0.13 }}>🔥</div>
          <div style={{ position: 'absolute', bottom: -40, left: -10, fontSize: 100, opacity: 0.1 }}>🔥</div>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <div style={{ fontSize: 30, fontWeight: 900, marginBottom: 10, letterSpacing: '-0.5px' }}>TEST 🔥</div>
          <div style={{ fontSize: 14.5, opacity: 0.95, fontWeight: 600, lineHeight: 1.65, maxWidth: 720 }}>
            <strong>Examen integral de 10 oraciones</strong> que aplica TODO lo aprendido:
            los 7 tiempos verbales, modales, adjetivos comparativos y superlativos,
            pronombres y condicionales — todo mezclado en un mismo examen.
            <br/><br/>
            Hay <strong>5 versiones distintas</strong> del examen y cada vez que pulses EMPEZAR
            te tocará una <strong>al azar</strong> (sin repetir la anterior). Cada acierto vale 2 puntos →
            score sobre <strong>20</strong>. Al final te muestro qué fallaste y los temas que conviene repasar.
          </div>
          <button onClick={startRandom} style={{
            marginTop: 28, background: 'white', color: '#991B1B', border: 'none',
            borderRadius: 'var(--r-lg)', padding: '14px 32px',
            fontFamily: 'var(--font)', fontWeight: 900, fontSize: 16,
            cursor: 'pointer', boxShadow: '0 5px 0 rgba(0,0,0,0.25)',
            letterSpacing: '0.02em',
          }}>
            🔥 EMPEZAR (test aleatorio)
          </button>
        </div>

        <div style={{
          background: '#FEE2E2', border: '1.5px solid #FCA5A5',
          borderRadius: 'var(--r-lg)', padding: '14px 18px', fontSize: 12.5,
          fontWeight: 700, color: '#7F1D1D', lineHeight: 1.6,
        }}>
          💡 <strong>Tip:</strong> el banco tiene <strong>~30 palabras</strong> (muchos distractores),
          así que no podrás adivinar por descarte. Tienes que <strong>pensar la oración primero</strong>
          y luego buscar las palabras exactas que necesitas. La pista te dice cuántas palabras debe tener
          la respuesta correcta.
        </div>

        <div style={{ marginTop: 16 }}>
          <button className="btn btn-ghost" onClick={onExit}>← Salir</button>
        </div>
      </div>
    );
  }

  // ── Done — resultados ───────────────────────────────────────────────────
  if (isDone) {
    const pointsPerCorrect = 2;
    const scorePoints = score * pointsPerCorrect;
    const maxPoints = total * pointsPerCorrect;
    const pct = Math.round((score / total) * 100);
    const result =
      scorePoints >= 18 ? { label: '¡Excelente!', emoji: '🏆', accent: 'var(--emerald)', accentDark: 'var(--emerald-dark)', msg: 'Estás dominando esto.' } :
      scorePoints >= 14 ? { label: '¡Muy bien!',  emoji: '💪', accent: 'var(--indigo)',  accentDark: 'var(--indigo-dark)',  msg: 'Buen nivel — solo te faltan algunos detalles.' } :
      scorePoints >= 10 ? { label: 'Bien, sigue practicando', emoji: '📘', accent: 'var(--amber)',   accentDark: 'var(--amber-dark)',   msg: 'Vas por buen camino. Revisa los puntos débiles.' } :
                          { label: 'Necesitas repasar más',    emoji: '📚', accent: 'var(--rose)',    accentDark: 'var(--rose-dark)',    msg: '¡No te rindas! Repasa los temas que fallaste.' };

    const weakTopicCounts = {};
    failures.forEach(f => {
      (f.drill.topics || []).forEach(t => {
        weakTopicCounts[t] = (weakTopicCounts[t] || 0) + 1;
      });
    });
    const weakTopics = Object.entries(weakTopicCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, c]) => ({ key: k, label: TOPIC_LABELS[k] || k, count: c }));

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
            Test #{test.id} completado
          </div>
          <div style={{ fontSize: 56, marginBottom: 6 }}>{result.emoji}</div>
          <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>
            {scorePoints}<span style={{ fontSize: 24, opacity: 0.85 }}>/{maxPoints}</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 6 }}>{result.label}</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, opacity: 0.9 }}>
            {score} de {total} oraciones correctas · {pct}% · {result.msg}
          </div>
        </div>

        {weakTopics.length > 0 && (
          <div style={{
            background: '#FEF3C7', border: '2px solid #FCD34D',
            borderRadius: 'var(--r-xl)', padding: '18px 22px', marginBottom: 22,
          }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
              📚 Recuerda estudiar (puntos débiles)
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
                const correctSentence = f.drill.en.join(' ') + ofPunct(f.drill.es);
                return (
                  <div key={i} style={{
                    background: 'white', border: '2px solid var(--rose)',
                    borderRadius: 'var(--r-xl)', padding: '16px 18px',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{
                        background: 'var(--rose)', color: 'white',
                        borderRadius: 6, padding: '3px 10px',
                        fontSize: 11, fontWeight: 900,
                      }}>
                        Ejercicio fallado
                      </span>
                      <span style={{
                        background: '#7C3AED', color: 'white',
                        borderRadius: 6, padding: '3px 10px',
                        fontSize: 11, fontWeight: 900,
                      }}>
                        🕒 {ofBriefTense(f.drill)}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 8, lineHeight: 1.4 }}>
                      📖 {f.drill.context}
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
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--emerald-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Respuesta correcta:
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                        <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--emerald-dark)' }}>
                          {correctSentence}
                        </span>
                        <button onClick={() => ofSpeak(correctSentence)} title="Escuchar" style={{
                          background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                        </button>
                      </div>
                      <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 4 }}>
                        🇪🇸 {f.drill.es}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" style={{ flex: 1, minWidth: 180 }} onClick={backToIntro}>
            ← Salir
          </button>
          <button className="btn btn-primary" style={{ flex: 2, minWidth: 220, background: '#DC2626', boxShadow: '0 4px 0 #991B1B' }} onClick={startRandom}>
            🔥 NUEVO TEST (otra versión al azar)
          </button>
        </div>
      </div>
    );
  }

  // ── Exercise ─────────────────────────────────────────────────────────────
  const isCorrect = checked === true;
  const punct = ofPunct(ex.es);
  const correctSentence = ex.en.join(' ') + punct;
  const bank   = ex.tiles.filter(t => !placed.includes(t.id));
  const answer = placed.map(id => ex.tiles.find(t => t.id === id));
  const wordCount = ex.en.length;

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <button onClick={backToIntro} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--faint)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 800, color: 'var(--muted)', flexWrap: 'wrap', gap: 6 }}>
            <span>🔥 Test #{test.id}  ·  Ejercicio {idx + 1} / {total}</span>
            <span style={{ color: '#991B1B' }}>Score: {score * 2}/{total * 2}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress * 100}%`, background: '#DC2626' }}/>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--emerald-dark)', minWidth: 56, textAlign: 'right' }}>
          ✓ {score}
        </div>
      </div>

      {/* Prompt (contexto + situation + tense + word count + hint) */}
      <div style={{
        background: 'linear-gradient(135deg, #FEE2E2, #FECACA)',
        border: '2px solid #FCA5A5',
        borderRadius: 'var(--r-2xl)', padding: '18px 22px', marginBottom: 16,
      }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: '#9A3412', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          📖 Contexto
        </div>
        <div style={{
          fontSize: 15, fontWeight: 600, color: '#7C2D12', lineHeight: 1.55,
          marginBottom: 14, padding: '10px 14px',
          background: 'rgba(255,255,255,0.55)',
          borderRadius: 'var(--r-md)',
          border: '1px solid #FED7AA',
        }}>
          {ex.context}
        </div>

        <div style={{ fontSize: 12, fontWeight: 900, color: '#991B1B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
          🎯 Lo que debes decir en inglés
        </div>
        <div style={{
          fontSize: 16, fontWeight: 700, color: '#991B1B', lineHeight: 1.5,
          marginBottom: 12, padding: '10px 14px',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 'var(--r-md)',
          borderLeft: '4px solid #DC2626',
        }}>
          {ex.situation}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'stretch' }}>
          <div style={{
            background: '#059669', color: 'white',
            border: '1.5px solid #047857',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: '0 2px 0 rgba(0,0,0,0.15)',
            whiteSpace: 'nowrap',
          }}>
            🔢 {wordCount} palabras
          </div>
          {(() => {
            const k = OF_KIND_STYLES[ofKind(ex)];
            return (
              <div style={{
                background: k.bg, color: 'white',
                border: `1.5px solid ${k.dark}`,
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
            border: '1.5px solid #5B21B6',
            borderRadius: 'var(--r-md)', padding: '8px 14px',
            fontSize: 12.5, fontWeight: 900,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            boxShadow: '0 2px 0 rgba(0,0,0,0.15)',
            whiteSpace: 'nowrap',
          }}>
            🕒 {ofBriefTense(ex)}
          </div>
          {ofBriefHint(ex) !== '—' && (
            <div style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1.5px dashed #F87171',
              borderRadius: 'var(--r-md)', padding: '8px 12px',
              fontSize: 12, fontWeight: 700, color: '#7F1D1D',
              flex: 1, minWidth: 240,
            }}>
              🧩 <strong>Pista:</strong> {ofBriefHint(ex)}
            </div>
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
          onDrop={ofOnDropEnd}
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
              onDragStart={e => ofOnDragStart(e, i)}
              onDragOver={e => ofOnDragOver(e, i)}
              onDragLeave={() => setDragOverIdx(null)}
              onDrop={e => ofOnDrop(e, i)}
              onDragEnd={ofOnDragEnd}
              style={{
                background: checked === null ? '#DC2626' : isCorrect ? 'var(--emerald)' : 'var(--rose)',
                color: 'white', border: 'none', borderRadius: 'var(--r-md)',
                padding: '9px 14px', fontSize: 15, fontWeight: 800, fontFamily: 'var(--font)',
                cursor: checked === null ? 'grab' : 'default',
                boxShadow: '0 2px 0 rgba(0,0,0,0.18)',
                opacity: dragIdx === i ? 0.4 : 1,
                outline: dragOverIdx === i && dragIdx !== i ? '3px solid #7F1D1D' : 'none',
                outlineOffset: 2,
                transition: 'opacity 0.12s',
              }}>
              {t.word}
            </button>
          ))}
          {punct === '?' && answer.length > 0 && (
            <span style={{
              fontSize: 26, fontWeight: 900,
              color: checked === null ? '#7F1D1D' : isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)',
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
              style={answer.length ? { background: '#DC2626', boxShadow: '0 4px 0 #991B1B' } : {}}>
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
                  {isCorrect ? '¡On fire! 🔥' : 'Respuesta correcta:'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)' }}>
                    {correctSentence}
                  </span>
                  <button onClick={() => ofSpeak(correctSentence)} title="Escuchar" style={{
                    background: 'var(--indigo)', border: 'none', borderRadius: 6, width: 26, height: 26,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="white"/><path d="M16 8c1.5 1 2.5 2.4 2.5 4s-1 3-2.5 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 6 }}>
                  🇪🇸 Equivalente en español: <strong>{ex.es}</strong>
                </div>
              </div>
            </div>
            <button className="btn btn-lg" onClick={handleNext} style={{
              background: isCorrect ? 'var(--emerald)' : 'var(--rose)', color: 'white',
              boxShadow: `0 4px 0 ${isCorrect ? 'var(--emerald-dark)' : 'var(--rose-dark)'}`,
            }}>
              {idx + 1 >= total ? 'VER RESULTADOS' : 'SIGUIENTE 🔥'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.OnFireScreen = OnFireScreen;
