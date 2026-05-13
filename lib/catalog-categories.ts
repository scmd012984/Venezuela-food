import {
  CATALOG_PRODUCTS,
  type CatalogProductDefinition,
  type CatalogProductCategory,
  type CatalogProductId,
} from "./catalog";

export const CATEGORY_LABELS = [
  "Todos",
  "Golfeados",
  "Cachitos",
  "Postres Fríos",
  "Quesillos",
] as const;

export type CategoryLabel = (typeof CATEGORY_LABELS)[number];

const CATALOG_PRODUCT_ENTRIES = Object.entries(CATALOG_PRODUCTS) as Array<
  [CatalogProductId, CatalogProductDefinition]
>;

function isProductCategory(
  label: CategoryLabel,
): label is CatalogProductCategory {
  return label !== "Todos";
}

/** Productos visibles al explorar cada categoría, derivados del catálogo. */
export const PRODUCT_IDS_BY_CATEGORY: Record<
  CategoryLabel,
  CatalogProductId[]
> = CATEGORY_LABELS.reduce(
  (acc, label) => {
    acc[label] = CATALOG_PRODUCT_ENTRIES.filter(([, product]) => {
      if (!isProductCategory(label)) return true;
      return product.categories.includes(label);
    }).map(([id]) => id);
    return acc;
  },
  {} as Record<CategoryLabel, CatalogProductId[]>,
);

export function getProductIdsForCategory(
  label: CategoryLabel,
): CatalogProductId[] {
  return PRODUCT_IDS_BY_CATEGORY[label] ?? [];
}
