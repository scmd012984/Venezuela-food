import type { CatalogProductId } from "@/lib/catalog";

export type CatalogImageVariant = "hero" | "card" | "thumb";

export type ProductImagePresentation = {
  /** Encuadre macro: punto de enfoque CSS (object-position). */
  objectPosition: string;
  /** Zoom para acercar textura (1 = plano general, ~1.2 = macro). */
  macroScale: number;
};

/**
 * Directriz creativa por producto (sesión foto / brief para IA o fotógrafo).
 * El deseo de compra viene del detalle: brillo del merengue, fibra del jamón, etc.
 */
export const PRODUCT_PHOTOGRAPHY_BRIEF: Record<CatalogProductId, string> = {
  "tres-leches":
    "Macro del merengue: picos brillantes y textura aterciopelada. Luz lateral dramática (chiaroscuro), fondo oscuro suave.",
  cachitos:
    "Macro del interior: jamón y capas de masa hojaldrada. Muy cerca, nitidez en el relleno, vapor o calidez de horno.",
  quesillo:
    "Macro del caramelo y la superficie del flan: brillo ámbar, textura sedosa, corte o porción que invite a probar.",
  golfeados:
    "Macro del rollo: canela, papelón y queso fundido. Profundidad de campo corta, dorados cálidos de horneado.",
};

const BASE_PRESENTATION: Record<CatalogProductId, ProductImagePresentation> = {
  "tres-leches": { objectPosition: "48% 30%", macroScale: 1.2 },
  cachitos: { objectPosition: "52% 42%", macroScale: 1.24 },
  quesillo: { objectPosition: "50% 36%", macroScale: 1.22 },
  golfeados: { objectPosition: "46% 38%", macroScale: 1.18 },
};

const VARIANT_SCALE: Record<CatalogImageVariant, number> = {
  hero: 1.04,
  card: 1,
  thumb: 0.92,
};

export function getProductImagePresentation(
  productId: CatalogProductId,
  variant: CatalogImageVariant = "card",
): ProductImagePresentation {
  const base = BASE_PRESENTATION[productId];
  return {
    objectPosition: base.objectPosition,
    macroScale: base.macroScale * VARIANT_SCALE[variant],
  };
}
