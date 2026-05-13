import { CATALOG_PRODUCTS } from "./catalog";
import type { CategoryLabel } from "./catalog-categories";

export type CatalogQuickFilter = {
  id: string;
  /** Texto del botón (comercial). */
  label: string;
  /** Categoría del panel / catálogo interno. */
  category: CategoryLabel;
};

/** Mínimo de productos para mostrar la franja de accesos rápidos encima del catálogo. */
export const MIN_PRODUCTS_FOR_CATALOG_QUICK_STRIP = 4;

export function shouldShowCatalogQuickStrip(): boolean {
  return Object.keys(CATALOG_PRODUCTS).length >= MIN_PRODUCTS_FOR_CATALOG_QUICK_STRIP;
}

/**
 * Atajos encima del catálogo cuando hay volumen suficiente.
 * Las etiquetas son comerciales; `category` debe existir en `CATEGORY_LABELS`.
 * Al crecer el catálogo, amplía esta lista o añade nuevas categorías en el catálogo.
 */
export const CATALOG_QUICK_FILTERS: readonly CatalogQuickFilter[] = [
  { id: "todos", label: "Ver todo", category: "Todos" },
  { id: "postres-frios", label: "Postres fríos", category: "Postres Fríos" },
  { id: "panaderia", label: "Panadería", category: "Cachitos" },
  { id: "salados", label: "Salados", category: "Cachitos" },
  { id: "golfeados", label: "Golfeados", category: "Golfeados" },
  { id: "quesillos", label: "Quesillos", category: "Quesillos" },
];
