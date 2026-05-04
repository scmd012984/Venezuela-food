import type { CatalogProductId } from "./catalog";

export const CATEGORY_LABELS = [
  "Todos",
  "Golfeados",
  "Cachitos",
  "Postres Fríos",
  "Quesillos",
] as const;

export type CategoryLabel = (typeof CATEGORY_LABELS)[number];

/** Productos visibles al explorar cada categoría (puede ser [] para categorías vacías). */
export const PRODUCT_IDS_BY_CATEGORY: Record<
  CategoryLabel,
  CatalogProductId[]
> = {
  Todos: ["tres-leches", "cachitos", "quesillo", "golfeados"],
  Golfeados: ["golfeados"],
  Cachitos: ["cachitos"],
  "Postres Fríos": ["tres-leches"],
  Quesillos: ["quesillo"],
};

export function getProductIdsForCategory(
  label: CategoryLabel,
): CatalogProductId[] {
  return PRODUCT_IDS_BY_CATEGORY[label] ?? [];
}
