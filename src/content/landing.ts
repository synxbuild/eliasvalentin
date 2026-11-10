// All copy and facts come from the live landing (clase.eliasvalentin.com/p/masterclass).
// Do not add numbers, testimonials or event details that are not verified there.

export const EVENT = {
  // Sunday, November 15 2026 · 6:00 PM Puerto Rico (AST, UTC-4) = 22:00 UTC
  startsAt: "2026-11-15T22:00:00Z",
  endsAt: "2026-11-16T00:00:00Z",
  dateLabel: "Domingo 15 de noviembre",
  timeLabel: "6:00 PM de Puerto Rico",
  shortTime: "6:00 PM PR",
  platform: "En vivo por Zoom",
  duration: "Unas 2 horas, con preguntas",
  host: "Elías Valentín",
  cta: "Reservar mi lugar gratis",
  registerHref: "#registro",
} as const;

export const AUTHORITY = [
  { value: 10, suffix: "+", label: "años acompañando personas", detail: "desde su primera conferencia en 2014" },
  { value: 4000, suffix: "+", label: "personas en La Fórmula del Éxito", detail: "Coca Cola Music Hall (2025)" },
  { value: 2010, suffix: "", label: "personas se registraron", detail: "a la masterclass de septiembre" },
] as const;

export const MARQUEE = [
  "Masterclass gratuita",
  "En vivo por Zoom",
  "Domingo 15 de noviembre",
  "10+ años acompañando personas",
  "4,000+ personas en Coca Cola Music Hall",
  "2,010 registrados en septiembre",
] as const;

export const NOT_NEEDED = [
  { lead: "Quizás no necesitas", struck: "otra estrategia" },
  { lead: "Quizás no necesitas", struck: "otro curso" },
  { lead: "Quizás no necesitas encontrar", struck: "otra oportunidad" },
  { lead: "Y quizás tampoco necesitas", struck: "trabajar más horas" },
] as const;

export const LAYERS = [
  {
    step: "01",
    verb: "Tener",
    title: "Cambias lo que tienes",
    body: "Otro negocio, otra oportunidad, otro mentor.",
    outcome: "Al tiempo, el resultado vuelve al mismo lugar.",
  },
  {
    step: "02",
    verb: "Hacer",
    title: "Cambias lo que haces",
    body: "Más horas, más cursos, más disciplina.",
    outcome: "Funciona un rato. Y vuelve.",
  },
  {
    step: "03",
    verb: "Ser",
    title: "Cambias quién eres",
    body: "La versión de ti que decide.",
    outcome: "Y cambia todo lo que está encima.",
  },
] as const;

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  result: string;
  resultDetail: string;
  before?: string;
  after?: string;
  story?: string;
  quote?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fabián Cabrera",
    role: "Trader y mentor · Colombia",
    image: "/images/t-fabian.webp",
    result: "Más de $400,000",
    resultDetail: "retirados en trading en 2 años",
    before: "Años haciendo trading, sin los resultados que buscaba.",
    after: "Creó una academia global con más de 130 estudiantes.",
    quote: "Antes buscaba resultados, hoy construyo desde la identidad.",
  },
  {
    name: "Joel",
    role: "Empresario · Puerto Rico",
    image: "/images/t-joel.webp",
    result: "De $5,000 a $52,000",
    resultDetail: "de ingreso mensual, según su testimonio",
    before: "Un negocio con 2 empleados y dificultades en su relación.",
    after: "Equipo de 5 personas y un matrimonio fortalecido.",
    quote: "Tenía todo para triunfar. Solo necesitaba ordenarse por dentro.",
  },
  {
    name: "El Mago de Oz",
    role: "Trader · Forex",
    image: "/images/t-mago.webp",
    result: "$1 millón",
    resultDetail: "en capital fondeado de trading",
    story:
      "Comparte más de $200,000 en retiros reales. Su historia distingue aprender a operar de poder gestionar ese capital.",
    quote: "Muchos aprenden a operar pero no aprenden a ser la persona que puede gestionar ese capital.",
  },
  {
    name: "Adrián Ibarry",
    role: "Emprendedor · 20 años",
    image: "/images/t-adrian.webp",
    result: "$100,000 al año",
    resultDetail: "como emprendedor a los 20 años",
    story:
      "Construir un negocio desde joven, con propósito. En su testimonio vincula ese proceso con trabajar primero su identidad.",
    quote: "No esperé a tener la edad correcta ni la experiencia suficiente.",
  },
  {
    name: "Hatman · Joseph Reyes",
    role: "Alumno LFDE · Emprendedor",
    image: "/images/t-hatman.webp",
    result: "$1,500 al mes",
    resultDetail: "era su punto de partida",
    story:
      "Su historia parte de una vida con ingresos limitados. Describe el cambio en términos de paz, propósito y una nueva manera de construir.",
    quote: "Creerle a mi mentor me enriqueció.",
  },
  {
    name: "Mike Numbela",
    role: "Empresario · Inversionista",
    image: "/images/t-mike.webp",
    result: "De construcción",
    resultDetail: "a dirigir su propia empresa",
    before: "Él y su esposa trabajaban agotados y su matrimonio estaba a punto de terminar.",
    after: "Dirige su empresa y recuperó su relación.",
  },
];

export const AGENDA = [
  {
    title: "Por qué vuelve el mismo resultado, aunque cambies de estrategia",
    body: "Cambiaste de método, de negocio y hasta de la gente a tu alrededor. El patrón viajó contigo.",
  },
  {
    title: "La distancia entre saber qué hacer y hacerlo",
    body: "Ya sabes lo que deberías estar haciendo. Saberlo nunca fue el problema. Vamos a ver dónde se rompe.",
  },
  {
    title: "Por qué la motivación se te acaba a los tres días",
    body: "Y qué es lo que sí sostiene una decisión cuando se apaga la emoción del principio.",
  },
  {
    title: "Cuál es el primer patrón que tienes que soltar",
    body: "No se cambia todo a la vez. Sales con el tuyo identificado y con el primer paso claro.",
  },
  {
    title: "Qué vas a hacer con la persona en la que te conviertes",
    body: "Porque transformarte no puede ser el final.",
  },
] as const;

export const FOR_YOU = [
  "Sabes que tienes más potencial del que estás demostrando.",
  "Has intentado diferentes cosas, pero sigues sintiendo que estás en el mismo lugar.",
  "Te frustras porque sabes qué deberías hacer, pero no siempre logras hacerlo.",
  "Sientes que otras personas están avanzando más rápido que tú.",
  "Te cansaste de empezar de nuevo.",
  "Quieres cambiar tus resultados, pero sabes que hacer más de lo mismo no es la respuesta.",
  "Sientes que hay una versión de ti que todavía no has logrado desbloquear.",
] as const;

export const NOT_FOR_YOU = [
  "Buscas una táctica para aplicar mañana y facturar el viernes.",
  "Quieres una hora de motivación. Esto no se siente bien, se siente incómodo.",
  "No quieres mirar tu parte antes de mirar la del mercado.",
] as const;

export const FAQ = [
  {
    q: "¿Cuánto cuesta?",
    a: "Nada. La masterclass es gratis. Solo necesitas registrarte para recibir el enlace.",
  },
  {
    q: "¿Dónde se transmite?",
    a: "En vivo por Zoom. Al registrarte te llega el enlace por correo y por WhatsApp, más un recordatorio el mismo día.",
  },
  {
    q: "¿A qué hora es en mi país?",
    a: "A las 6:00 PM de Puerto Rico, que son las 5:00 PM de Nueva York y Miami. Debajo del formulario tienes la hora en cada país.",
  },
  { q: "¿Cuánto dura?", a: "Unas dos horas, con espacio para preguntas al final." },
  {
    q: "¿Es para mí si no tengo un negocio?",
    a: "Sí. Aquí se trabaja la persona, no el vehículo: aplica si tienes un negocio, si trabajas para una empresa, si estás en ventas o en trading, o si todavía no sabes cuál es tu camino.",
  },
  {
    q: "¿Para qué piden mi WhatsApp?",
    a: "Para mandarte el enlace y el recordatorio del día. Tu número no se comparte con nadie.",
  },
] as const;

export const COUNTRY_CODES = [
  { label: "PR/US", code: "+1" },
  { label: "MX", code: "+52" },
  { label: "CO", code: "+57" },
  { label: "RD", code: "+1" },
  { label: "ES", code: "+34" },
  { label: "CL", code: "+56" },
  { label: "PE", code: "+51" },
  { label: "AR", code: "+54" },
  { label: "EC", code: "+593" },
  { label: "VE", code: "+58" },
  { label: "GT", code: "+502" },
  { label: "SV", code: "+503" },
  { label: "HN", code: "+504" },
  { label: "NI", code: "+505" },
  { label: "CR", code: "+506" },
  { label: "PA", code: "+507" },
  { label: "BO", code: "+591" },
  { label: "PY", code: "+595" },
  { label: "UY", code: "+598" },
  { label: "Otro", code: "" },
] as const;

// Local start time per country, computed at runtime with Intl from EVENT.startsAt.
export const TIMEZONES = [
  { label: "Puerto Rico · Rep. Dominicana", tz: "America/Puerto_Rico" },
  { label: "Nueva York · Miami", tz: "America/New_York" },
  { label: "Colombia · Perú · Ecuador · Panamá", tz: "America/Bogota" },
  { label: "México (CDMX)", tz: "America/Mexico_City" },
  { label: "Guatemala · El Salvador · Honduras · Nicaragua · Costa Rica", tz: "America/Guatemala" },
  { label: "Venezuela · Bolivia", tz: "America/Caracas" },
  { label: "Argentina · Uruguay · Paraguay", tz: "America/Argentina/Buenos_Aires" },
  { label: "Chile", tz: "America/Santiago" },
  { label: "España", tz: "Europe/Madrid" },
] as const;
