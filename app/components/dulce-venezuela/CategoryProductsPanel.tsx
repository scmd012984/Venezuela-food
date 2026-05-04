"use client";

import { ChevronUp, X } from "lucide-react";
import { useEffect } from "react";
import { AddToCartButton } from "@/app/components/cart/AddToCartButton";
import { formatEuroES } from "@/lib/format-euro";
import { getCatalogProduct } from "@/lib/catalog";
import type { CategoryLabel } from "@/lib/catalog-categories";
import { getProductIdsForCategory } from "@/lib/catalog-categories";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

type CategoryProductsPanelProps = {
  category: CategoryLabel;
  onClose: () => void;
};

export function CategoryProductsPanel({
  category,
  onClose,
}: CategoryProductsPanelProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const ids = getProductIdsForCategory(category);

  return (
    <div
      className="glass-panel shadow-card-soft animate-category-panel-content motion-reduce:animate-none overflow-hidden rounded-2xl dark:ring-0"
      role="region"
      aria-labelledby="category-panel-title"
    >
      <div className="flex items-center justify-between gap-2 border-b border-outline-variant/40 px-3 py-2.5 sm:px-4 dark:border-slate-700/60">
        <h2
          id="category-panel-title"
          className="min-w-0 truncate text-base font-semibold tracking-tight text-primary sm:text-lg"
        >
          {category}
        </h2>
        <button
          type="button"
          className="tap-highlight-none inline-flex size-9 shrink-0 items-center justify-center rounded-xl text-on-surface-variant transition hover:bg-surface-container-low dark:hover:bg-slate-800"
          aria-label="Cerrar lista de categoría"
          onClick={onClose}
        >
          <X className="size-5" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        </button>
      </div>

      <div className="max-h-[min(60vh,22rem)] overflow-y-auto px-3 py-3 sm:px-4 sm:py-4">
        {ids.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-8 text-center sm:gap-3 sm:py-10">
            <ChevronUp
              className="size-8 text-on-surface-variant/50"
              strokeWidth={LUCIDE_ICON_STROKE}
              aria-hidden
            />
            <p className="text-base font-medium text-on-surface">
              Aún no hay nada en esta categoría
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
              Pronto añadiremos productos aquí. Mientras tanto, revisa{" "}
              <strong className="font-semibold text-on-surface">Todos</strong> u
              otra categoría en la lista.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {ids.map((productId) => {
              const p = getCatalogProduct(productId);
              if (!p) return null;
              return (
                <li
                  key={productId}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-low/80 p-3 sm:rounded-2xl sm:p-4 dark:border-slate-600/50 dark:bg-slate-800/50"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-on-surface">{p.name}</p>
                    <p className="mt-1 text-sm tabular-nums text-primary">
                      {formatEuroES(p.unitPriceEuro)}
                    </p>
                  </div>
                  <AddToCartButton productId={productId} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
