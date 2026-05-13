"use client";

import {
  CATALOG_QUICK_FILTERS,
  shouldShowCatalogQuickStrip,
} from "@/lib/catalog-quick-filters";
import { useCategoryPanelBridge } from "./category-panel-bridge";

/** Accesos rápidos al panel de categorías (encima del catálogo visual). */
export function CatalogQuickStrip() {
  const { openCatalogCategory } = useCategoryPanelBridge();

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
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant sm:text-xs">
        Accesos rápidos
      </p>
      <div className="no-scrollbar flex flex-wrap gap-2">
        {CATALOG_QUICK_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="tap-highlight-none rounded-full border border-outline-variant/55 bg-white/95 px-3.5 py-2 text-xs font-semibold text-primary shadow-sm transition duration-200 hover:border-cta-warm/45 hover:bg-cta-warm-soft hover:text-cta-warm-hover active:scale-[0.98] sm:px-4 sm:text-sm dark:border-slate-600/55 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:border-cta-warm/40 dark:hover:bg-slate-800/90"
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
