import { CATALOG_PRODUCTS, type CatalogProductId } from "@/lib/catalog";

/** Producto protagonista en el bloque «Preparamos tu mesa dulce». */
export const MESA_DULCE_HERO_PRODUCT_ID = "golfeados" satisfies CatalogProductId;

export const MESA_DULCE_HERO_PRODUCT =
  CATALOG_PRODUCTS[MESA_DULCE_HERO_PRODUCT_ID];

/** Fondo difuminado (misma foto principal, lectura suave del copy). */
export const MESA_DULCE_AMBIENT_IMAGE = MESA_DULCE_HERO_PRODUCT.imageUrl;

export const MESA_DULCE_IMAGE_CAPTION =
  "Bandejas de golfeados y surtido dulce para celebrar";
