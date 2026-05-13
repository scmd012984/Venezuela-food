import {
  CATALOG_PRODUCTS,
  type CatalogProductId,
} from "./catalog";

/** Orden fijo del catálogo en la página (coincide con ProductGrid). */
export const CATALOG_PRODUCT_ORDER: readonly CatalogProductId[] = [
  "tres-leches",
  "cachitos",
  "quesillo",
  "golfeados",
] as const;

function normalizeSearchText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function productMatchesQuery(id: CatalogProductId, q: string): boolean {
  const p = CATALOG_PRODUCTS[id];
  const idWords = id.replace(/-/g, " ");
  const blob = normalizeSearchText(
    [p.name, p.description, idWords, ...p.categories].join(" "),
  );
  if (blob.includes(q)) return true;
  const words = blob.split(/\s+/).filter(Boolean);
  return words.some((w) => w.startsWith(q));
}

/** Coincidencias por nombre, descripción, categorías o fragmento del id. */
export function getMatchingProductIds(query: string): CatalogProductId[] {
  const q = normalizeSearchText(query.trim());
  if (!q) return [...CATALOG_PRODUCT_ORDER];
  return CATALOG_PRODUCT_ORDER.filter((id) => productMatchesQuery(id, q));
}
