"use client";

import {
  CATALOG_QUICK_FILTERS,
  shouldShowCatalogQuickStrip,
} from "@/lib/catalog-quick-filters";
import { useCategoryPanelBridge } from "./category-panel-bridge";
import { goldFilterChipClass } from "./home-shared";

/** Accesos rápidos al panel de categorías (encima del catálogo visual). */
export function CatalogQuickStrip() {
  const { openCatalogCategory, activeCategory } = useCategoryPanelBridge();

  if (!shouldShowCatalogQuickStrip()) return null;

  const scrollToExplorer = () => {
    document
      .getElementById("explorar-dulces")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-label="Accesos rápidos por tipo de producto"
    >
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-chocolate-ink sm:text-xs">
        Accesos rápidos
      </p>
      <div className="no-scrollbar flex flex-wrap gap-2">
        {CATALOG_QUICK_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${goldFilterChipClass(item.category === activeCategory)} px-3.5 sm:px-4`}
            aria-pressed={item.category === activeCategory}
            onClick={() => {
              openCatalogCategory(item.category);
              scrollToExplorer();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
