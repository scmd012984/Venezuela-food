import type { CatalogProductDefinition } from "@/lib/catalog";

const BRAND = "Dulce Venezuela";
const MAX_ALT = 140;

type ProductAltInput = Pick<
  CatalogProductDefinition,
  "name" | "description" | "categories"
>;

/**
 * Texto alternativo para imágenes de producto (accesibilidad y SEO).
 */
export function catalogProductImageAlt(product: ProductAltInput): string {
  const desc = product.description.trim();
  const categories = product.categories.join(", ");

  let core: string;
  if (desc) {
    core = `${product.name}: ${desc}`;
  } else if (categories) {
    core = `${product.name} — ${categories}. Repostería venezolana artesanal.`;
  } else {
    core = `${product.name}. Repostería venezolana artesanal.`;
  }

  let text = `${core} ${BRAND}.`.replace(/\s+/g, " ").trim();
  if (text.length <= MAX_ALT) return text;

  const short = `${product.name}, repostería venezolana — ${BRAND}.`.replace(
    /\s+/g,
    " ",
  );
  if (short.length <= MAX_ALT) return short;
  return `${short.slice(0, MAX_ALT - 1)}…`;
}
