/**
 * Testimonios de clientes (textos de ejemplo; sustituye fotos por las reales del negocio).
 * Imágenes: Unsplash (licencia) — encuadre social / mesa dulce.
 */
export type ClientTestimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
  imageUrl: string;
  imageDescription: string;
};

export const CLIENT_TESTIMONIALS: readonly ClientTestimonial[] = [
  {
    id: "1",
    quote:
      "La mesa dulce de la boda quedó espectacular: invitados preguntando todo el rato por los cachitos y el tres leches. Puntualidad y un trato cercano de diez.",
    name: "Carla M.",
    detail: "Boda, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=720&q=82&auto=format&fit=crop",
    imageDescription:
      "Grupo de personas celebrando alrededor de una mesa con comida y bebidas.",
  },
  {
    id: "2",
    quote:
      "Encargamos bandejas para un cumple en casa y superaron la expectativa: presentación impecable y sabor que nos recordó a Venezuela. Repetiremos seguro.",
    name: "Diego R.",
    detail: "Cumpleaños familiar",
    imageUrl:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=720&q=82&auto=format&fit=crop",
    imageDescription:
      "Manos encendiendo velas sobre un pastel de cumpleaños en una celebración.",
  },
  {
    id: "3",
    quote:
      "Para un brunch en la oficina pedimos surtido dulce: quesillo y golfeados volaron en minutos. Comunicación clara y porciones generosas.",
    name: "Lucía V.",
    detail: "Evento empresa",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=720&q=82&auto=format&fit=crop",
    imageDescription:
      "Varias personas brindando con copas en una mesa compartida festiva.",
  },
] as const;
