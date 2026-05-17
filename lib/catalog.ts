export type CatalogProductBadge = "nuevo" | "masVendido" | "favorito";

export type CatalogProductCategory =
  | "Golfeados"
  | "Cachitos"
  | "Postres Fríos"
  | "Quesillos";

export type CatalogProductDefinition = {
  name: string;
  unitPriceEuro: number;
  imageUrl: string;
  description: string;
  badges: readonly CatalogProductBadge[];
  categories: readonly CatalogProductCategory[];
};

export const CATALOG_PRODUCTS = {
  "tres-leches": {
    name: "Tarta Tres Leches",
    unitPriceEuro: 8.5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WxSLnUZb2xvF8ZuSn8IIPvQHS9pyBah-phM5iWfv5oHIk2zg9m9skLQ50quxvnxpFGZy8gjHQlONPK7_-hHY2szP9raCWYPHEVj8y1wexaeF_iN9YiYMibnswosvOHFvB_chpb3t9_NVfvizsefTno6elkwpOmXdRUJC-IsPfLaUASWKMGitHpU2J6U1splxxl0n4U1Sg16RCRllkf7sgs8KY0_x7BmSxUcfh3YPOR3UItNA_U9ZbhAR3MikvvWBH55-1MqylaM4",
    description:
      "Bizcocho esponjoso bañado en tres tipos de leche, coronado con merengue suizo y canela.",
    badges: ["masVendido", "favorito"],
    categories: ["Postres Fríos"],
  },
  cachitos: {
    name: "Cachitos de Jamón",
    unitPriceEuro: 3.5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUB_AGOwQgL52Xg3CwB83ZFYQfG-zJifRhdwJFlJ9dM39n8fIj0GniyNqWC-m19F_RSJKdH9VpJDwo6631jQrIvQYIJKEhTjRx0kClGyRwiO-XXFVbDlTBkp0gXIeIIIv2iviGVa0D3i5Jo-3julr878RUeYoJoedGJLohilauls5QInC5OShek6TpNnYlqupSq0BI-kDmF3upBDUAcbUGgg9OGYhQ5RkTqlxn4ZTHHvTvK7OYnNBaNThkvWCg764kzkRz_YKazDvH",
    description:
      "Pan suave relleno de jamón ahumado y tocineta, horneado al momento.",
    badges: ["masVendido"],
    categories: ["Cachitos"],
  },
  quesillo: {
    name: "Quesillo tradicional",
    unitPriceEuro: 5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBozKqZoogbgijyV8-KJUFC5-7LZRILIGALzyZ3H8Rb8GPNANMlpSNOWDvmDKdLPkDHmU7WuWmX3lT21vdBM_6_QdJsOXnVSPIHPk76JdyHh7paE-NAcVoXLNcZImV7IZY81wSPiOYSNfwMNdIFB53UvYN1grgxgAuas_rrsfAzSOwFvfTkgEk9IhJZ8luaXDh1jqEgAT5Ey_ShNMt62MpeiVx_O5bbzlqinGoU0372LZlH6LNs6zZI2DTdGWMEs-k6hlVyPMaKz1Yv",
    description: "",
    badges: ["nuevo"],
    categories: ["Quesillos"],
  },
  golfeados: {
    name: "Golfeado con queso blanco latino",
    unitPriceEuro: 4.2,
    imageUrl:
      "https://images.unsplash.com/photo-1694632288834-17d86b340745?w=1920&q=90&auto=format&fit=crop",
    description:
      "Rollos de canela y papelón con un toque de anís dulce, servidos con queso fresco fundido.",
    badges: ["nuevo", "favorito"],
    categories: ["Golfeados"],
  },
} as const satisfies Record<string, CatalogProductDefinition>;

export type CatalogProductId = keyof typeof CATALOG_PRODUCTS;
export type CatalogProduct = (typeof CATALOG_PRODUCTS)[CatalogProductId];

export function getCatalogProduct(id: string) {
  return CATALOG_PRODUCTS[id as CatalogProductId];
}
