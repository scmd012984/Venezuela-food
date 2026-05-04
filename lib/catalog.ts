export const CATALOG_PRODUCTS = {
  "tres-leches": { name: "Tarta Tres Leches", unitPriceEuro: 8.5 },
  cachitos: { name: "Cachitos de Jamón", unitPriceEuro: 3.5 },
  quesillo: { name: "Quesillo tradicional", unitPriceEuro: 5 },
  golfeados: { name: "Golfeado con queso blanco latino", unitPriceEuro: 4.2 },
} as const;

export type CatalogProductId = keyof typeof CATALOG_PRODUCTS;

export function getCatalogProduct(id: string) {
  return CATALOG_PRODUCTS[id as CatalogProductId];
}
