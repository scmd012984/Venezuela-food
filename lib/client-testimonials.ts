/**
 * Testimonios (sustituye fotos por las reales del negocio).
 */

export type ClientTestimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
  imageUrl: string;
  imageDescription: string;
};

/** Testimonio estrella: foto emocional + cita que conecta producto con felicidad real. */
export const FEATURED_STAR_TESTIMONIAL = {
  id: "featured",
  quote:
    "La mesa dulce de la boda quedó espectacular: invitados preguntando todo el rato por los cachitos y el tres leches. No fue solo comida — fue el momento en el que todos sonrieron al mismo tiempo.",
  name: "Carla M.",
  detail: "Boda · mesa dulce a medida",
  imageUrl:
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=88&auto=format&fit=crop",
  imageDescription:
    "Invitados celebrando alrededor de una mesa con postres y brindis; momento de felicidad en evento con repostería Dulce Venezuela.",
} as const;

/** Tarjetas de apoyo: estructura clara en rejilla. */
export const CLIENT_TESTIMONIALS: readonly ClientTestimonial[] = [
  {
    id: "1",
    quote:
      "Encargamos bandejas para un cumple en casa y superaron la expectativa: presentación impecable y sabor que nos recordó a Venezuela.",
    name: "Diego R.",
    detail: "Cumpleaños familiar",
    imageUrl:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=82&auto=format&fit=crop",
    imageDescription:
      "Celebración familiar con pastel; encargo de repostería Dulce Venezuela.",
  },
  {
    id: "2",
    quote:
      "Para un brunch en la oficina pedimos surtido dulce: quesillo y golfeados volaron en minutos. Porciones generosas y trato cercano.",
    name: "Lucía V.",
    detail: "Evento empresa",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=82&auto=format&fit=crop",
    imageDescription:
      "Equipo brindando en mesa compartida; surtido dulce para evento corporativo.",
  },
  {
    id: "3",
    quote:
      "Los golfeados y el quesillo fueron el regalo perfecto para visitar a mi familia. Se nota el cariño en cada detalle.",
    name: "María P.",
    detail: "Regalo · visita familiar",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=82&auto=format&fit=crop",
    imageDescription:
      "Personas compartiendo mesa en reunión familiar cálida; dulces venezolanos como regalo.",
  },
] as const;
