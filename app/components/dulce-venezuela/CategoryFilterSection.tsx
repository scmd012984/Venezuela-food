"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CATEGORY_LABELS,
  type CategoryLabel,
} from "@/lib/catalog-categories";
import { CategoryProductsPanel } from "./CategoryProductsPanel";

const CLOSE_MS = 320;

const filterTrackClass =
  "w-full rounded-2xl border-2 border-outline-variant/65 bg-surface-container p-1 shadow-[inset_0_2px_8px_rgba(28,29,38,0.08)] dark:border-slate-600/55 dark:bg-slate-800/85";

/** Categoría seleccionada: azul oscuro de marca (#0c2463) + texto blanco */
const filterActiveClass =
  "cursor-pointer rounded-xl border-2 border-primary bg-primary px-3 py-2 text-xs font-semibold text-white shadow-[0_2px_10px_rgba(12,36,99,0.35)] transition duration-200 hover:border-primary-container hover:bg-primary-container hover:shadow-[0_4px_14px_rgba(12,36,99,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] sm:px-4 sm:py-2.5 sm:text-sm dark:border-primary dark:bg-primary dark:text-white dark:hover:bg-primary-container dark:hover:border-primary-container";

/** Resto: borde fino, fondo casi neutro */
const filterInactiveClass =
  "cursor-pointer rounded-xl border border-outline-variant/55 bg-white/90 px-3 py-2 text-xs font-medium text-on-surface-variant shadow-none transition duration-200 hover:border-primary/30 hover:bg-surface-container-low hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 active:scale-[0.98] sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-600/45 dark:bg-slate-900/55 dark:text-slate-300 dark:hover:border-primary/45 dark:hover:bg-slate-800/90 dark:hover:text-slate-50";

const panelGridClass =
  "grid min-h-0 transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none motion-reduce:duration-0";

export function CategoryFilterSection() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryLabel>("Todos");
  const [panelCategory, setPanelCategory] = useState<CategoryLabel | null>(
    null,
  );
  const [panelOpen, setPanelOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  const closePanel = useCallback(() => {
    clearCloseTimer();
    setPanelOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setPanelCategory(null);
      closeTimerRef.current = null;
    }, CLOSE_MS);
  }, [clearCloseTimer]);

  const openCategory = useCallback(
    (tag: CategoryLabel) => {
      setActiveCategory(tag);
      clearCloseTimer();

      if (panelCategory === tag && panelOpen) {
        closePanel();
        return;
      }

      setPanelCategory(tag);
      setPanelOpen(true);
    },
    [panelCategory, panelOpen, clearCloseTimer, closePanel],
  );

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant sm:text-xs"
        id="filter-cat-label"
      >
        Categoría
      </span>
      <fieldset
        className={filterTrackClass}
        aria-labelledby="filter-cat-label"
      >
        <legend className="sr-only">Filtrar por categoría</legend>
        <div className="no-scrollbar flex flex-wrap gap-1">
          {CATEGORY_LABELS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={
                tag === activeCategory ? filterActiveClass : filterInactiveClass
              }
              aria-pressed={tag === activeCategory}
              onClick={() => openCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </fieldset>

      <div
        className={`${panelGridClass} ${
          panelOpen && panelCategory !== null
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {panelCategory !== null ? (
            <div className="mt-3 min-h-0">
              <CategoryProductsPanel
                key={panelCategory}
                category={panelCategory}
                onClose={closePanel}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
