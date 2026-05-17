import type { CatalogProductDefinition } from "@/lib/catalog";
import type { CatalogProductId } from "@/lib/catalog";
import { PRODUCT_PHOTOGRAPHY_BRIEF } from "@/lib/catalog-image-presentation";

const BRAND = "Dulce Venezuela";
const MAX_ALT = 140;

type ProductAltInput = Pick<
  CatalogProductDefinition,
  "name" | "description" | "categories"
>;

/**
 * Texto alternativo para imágenes de producto (accesibilidad y SEO).
 * Incluye detalle de textura cuando encaja en el límite de caracteres.
 */
export function catalogProductImageAlt(
  product: ProductAltInput,
  productId?: CatalogProductId,
): string {
  const desc = product.description.trim();
  const categories = product.categories.join(", ");
  const textureHint =
    productId && PRODUCT_PHOTOGRAPHY_BRIEF[productId]
      ? PRODUCT_PHOTOGRAPHY_BRIEF[productId].split(".")[0]
      : "";

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

  const withTexture = textureHint
    ? `${product.name}, primer plano: ${textureHint.toLowerCase()} — ${BRAND}.`
    : "";
  if (withTexture && withTexture.length <= MAX_ALT) return withTexture.replace(/\s+/g, " ");

  const short = `${product.name}, repostería venezolana — ${BRAND}.`.replace(
    /\s+/g,
    " ",
  );
  if (short.length <= MAX_ALT) return short;
  return `${short.slice(0, MAX_ALT - 1)}…`;
}
