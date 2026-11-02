// Datos del negocio. Edita aquí y se actualiza todo el sitio (incluido el SEO).

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lacuevadeloso.mx").replace(/\/$/, "");

export const business = {
  name: "La Cueva del Oso",
  tagline: "Steak House",
  city: "San Juan del Río",
  state: "Querétaro",
  phoneDisplay: "427 244 0303",
  phoneE164: "+524272440303",
  whatsapp: "524272440303",
  address: {
    street: "Blvd. Pablo Cabrera 83",
    neighborhood: "Centro",
    postalCode: "76800",
    city: "San Juan del Río",
    region: "Qro.",
    country: "MX",
  },
  geo: { lat: 20.3955173, lng: -99.9902954 },
  mapsUrl: "https://maps.google.com/?cid=8534336546597580632",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=La+Cueva+del+Oso,+Blvd+Pablo+Cabrera+83,+Centro,+76800+San+Juan+del+R%C3%ADo,+Qro.",
  reviewsUrl:
    "https://maps.google.com/?cid=8534336546597580632",
  rating: { value: 4.5, count: 2229 },
  priceRange: "$$",
  payment: ["Tarjeta de crédito", "Tarjeta de débito", "Pagos móviles NFC"],
} as const;

export const fullAddress = `${business.address.street}, ${business.address.neighborhood}, ${business.address.postalCode} ${business.address.city}, ${business.address.region}`;

// 0 = domingo … 6 = sábado. Horas en formato 24 h, hora del centro de México.
export const hours: { day: number; label: string; open?: string; close?: string }[] = [
  { day: 1, label: "Lunes" },
  { day: 2, label: "Martes", open: "13:00", close: "23:00" },
  { day: 3, label: "Miércoles", open: "13:00", close: "23:00" },
  { day: 4, label: "Jueves", open: "13:00", close: "23:00" },
  { day: 5, label: "Viernes", open: "13:00", close: "23:00" },
  { day: 6, label: "Sábado", open: "13:00", close: "23:00" },
  { day: 0, label: "Domingo", open: "13:00", close: "22:00" },
];

export const TIMEZONE = "America/Mexico_City";

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultReservationMessage =
  "¡Hola, La Cueva del Oso! Me gustaría reservar una mesa.";

/* ---------- Carta ---------- */

// Nombres y gramajes tomados de la carta física del restaurante.
export const cuts = [
  { name: "Churrasco", detail: "Punta de las costillas", weight: "600 g" },
  { name: "Bife de chorizo", detail: "Corte grueso, jugoso", weight: "500 g" },
  { name: "Porter House", detail: "Filete y New York en un solo corte", weight: "450 g" },
  { name: "Agujas norteñas", detail: "Corte norteño con hueso", weight: "450 g" },
  { name: "Corte Ing. Rodríguez", detail: "Club steak con elotes baby y puré", weight: "350 g" },
  { name: "Ribeye", detail: "El favorito por su marmoleo", weight: "350 g" },
  { name: "New York", detail: "Firme y lleno de sabor", weight: "350 g" },
  { name: "T-Bone Steak", detail: "Clásico de steak house", weight: "350 g" },
  { name: "Prime Rib", detail: "Suave y generoso", weight: "350 g" },
  { name: "Arrachera", detail: "Individual, ½ kg o el kilo para compartir", weight: "250 g – 1 kg" },
] as const;

export type MenuHighlight = {
  title: string;
  text: string;
  items: string[];
  image?: { src: string; alt: string };
};

export const menuHighlights: MenuHighlight[] = [
  {
    title: "Hamburguesas artesanales",
    text: "Carne jugosa, pan dorado y combinaciones que no encuentras en otro lado.",
    items: ["Hamburguesa de la casa", "Hamburguesa de camarón", "Con papas o chips"],
    image: {
      src: "/images/hamburguesa-artesanal.jpg",
      alt: "Hamburguesa artesanal con pan de ajonjolí negro, champiñones y queso gratinado en La Cueva del Oso",
    },
  },
  {
    title: "Parrilladas para compartir",
    text: "Arrachera, pollo y chorizo argentino y español al centro de la mesa.",
    items: ["Parrillada 1", "Trío de fajitas", "Guisado Monterrey"],
    image: {
      src: "/images/parrillada-para-compartir.jpg",
      alt: "Parrillada para compartir con arrachera, chorizo y guarniciones en San Juan del Río",
    },
  },
  {
    title: "Mar y especialidades",
    text: "Para quien viene con ganas de algo distinto: pulpo, camarón y pescado.",
    items: ["Pulpo a la parrilla", "Mojarra especial", "Tacos Gobernador"],
    image: {
      src: "/images/pulpo-a-la-parrilla.jpg",
      alt: "Pulpo a la parrilla con ensalada y pan de ajo",
    },
  },
  {
    title: "Alitas, tacos y botanas",
    text: "Lo ideal para el partido: platos para picar y pasar de mano en mano.",
    items: ["Alitas", "Tacos de arrachera", "Burritos y snacks"],
  },
  {
    title: "Cerveza, coctelería y café",
    text: "Cerveza artesanal e industrial, micheladas, cocteles, licores y café de la casa.",
    items: ["Cerveza artesanal", "Micheladas", "Cocteles y licores"],
    image: {
      src: "/images/cervezas-y-micheladas.jpg",
      alt: "Cerveza y micheladas escarchadas servidas en la barra de La Cueva del Oso",
    },
  },
  {
    title: "Postres",
    text: "El cierre dulce que siempre cabe, aunque digas que no.",
    items: ["Postres de la casa", "Café para acompañar"],
    image: { src: "/images/postre.jpg", alt: "Postre de la casa con helado y salsa de cajeta" },
  },
];

/* ---------- Servicios ---------- */

export const amenities = [
  "Estacionamiento gratis",
  "Terraza al aire libre",
  "Partidos en vivo",
  "Wi-Fi gratis",
  "Para llevar",
  "Menú infantil",
] as const;

/* ---------- Opiniones ---------- */

// Temas que más se repiten en las reseñas de Google (no son citas).
export const reviewTopics = [
  "Platillos",
  "Estacionamiento",
  "Cortes de carne",
  "Arrachera",
  "Antigüedades",
  "Decoración vintage",
  "Mariscos",
  "Ambientación",
] as const;

/* ---------- Preguntas frecuentes ---------- */

export const faqs = [
  {
    q: "¿Qué días y en qué horario abren?",
    a: "Abrimos de martes a sábado de 1:00 PM a 11:00 PM y los domingos de 1:00 PM a 10:00 PM. Los lunes descansamos.",
  },
  {
    q: "¿Necesito reservar?",
    a: "No es obligatorio, pero lo recomendamos, sobre todo fines de semana, días de partido y grupos grandes. Puedes reservar por WhatsApp o al 427 244 0303.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí. Contamos con estacionamiento amplio y sin costo, en lote y cochera, dentro del restaurante.",
  },
  {
    q: "¿Es un lugar para ir con niños?",
    a: "Totalmente. Es un ambiente familiar y seguro, con sillas altas, cambiadores y menú infantil.",
  },
  {
    q: "¿Transmiten partidos y eventos deportivos?",
    a: "Sí, transmitimos partidos y eventos deportivos en vivo. Para fechas importantes te sugerimos reservar con anticipación.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Aceptamos tarjetas de crédito, débito y pagos móviles sin contacto (NFC).",
  },
  {
    q: "¿Tienen comida para llevar?",
    a: "Sí. Llámanos o escríbenos por WhatsApp para pedir tu comida para llevar.",
  },
] as const;
