"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CATEGORY_LABELS,
  type CategoryLabel,
} from "@/lib/catalog-categories";
import { CategoryProductsPanel } from "./CategoryProductsPanel";
import { useCatalogSearch } from "./catalog-search-context";
import { useCategoryPanelBridge } from "./category-panel-bridge";
import {
  categoryFilterTrackClass,
  categoryFilterChipRowClass,
  goldFilterChipClass,
} from "./home-shared";

const CLOSE_MS = 320;

const panelGridClass =
  "grid min-h-0 transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none motion-reduce:duration-0";

export function CategoryFilterSection() {
  const { debouncedSearchQuery, query, setQuery } = useCatalogSearch();
  const {
    setOpenCatalogCategory,
    activeCategory,
    setActiveCategory,
  } = useCategoryPanelBridge();
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

  const handlePanelClose = useCallback(() => {
    if (query.trim().length > 0) {
      setQuery("");
    }
    closePanel();
  }, [query, setQuery, closePanel]);

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
    [panelCategory, panelOpen, clearCloseTimer, closePanel, setActiveCategory],
  );

  /** Desde accesos rápidos: siempre abre la categoría (no alterna cierre). */
  const openCatalogCategoryForced = useCallback(
    (tag: CategoryLabel) => {
      setActiveCategory(tag);
      clearCloseTimer();
      setPanelCategory(tag);
      setPanelOpen(true);
    },
    [clearCloseTimer, setActiveCategory],
  );

  useEffect(() => {
    setOpenCatalogCategory(openCatalogCategoryForced);
    return () => setOpenCatalogCategory(null);
  }, [setOpenCatalogCategory, openCatalogCategoryForced]);

  const searchQuery = debouncedSearchQuery.trim();
  const searchDrivesPanel = searchQuery.length > 0;
  const displayedCategory: CategoryLabel | null = searchDrivesPanel
    ? "Todos"
    : panelCategory;
  const displayedOpen = searchDrivesPanel || panelOpen;
  const chipActiveCategory: CategoryLabel = searchDrivesPanel
    ? "Todos"
    : activeCategory;

  useEffect(() => {
    if (!searchDrivesPanel) return;
    clearCloseTimer();
  }, [searchDrivesPanel, clearCloseTimer]);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span
        className="text-[11px] font-medium uppercase tracking-[0.14em] text-chocolate-ink sm:text-xs"
        id="filter-cat-label"
      >
        Categoría
      </span>
      <fieldset
        className={categoryFilterTrackClass}
        aria-labelledby="filter-cat-label"
      >
        <legend className="sr-only">Filtrar por categoría</legend>
        <div className={`${categoryFilterChipRowClass} no-scrollbar`}>
          {CATEGORY_LABELS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={goldFilterChipClass(tag === chipActiveCategory)}
              aria-pressed={tag === chipActiveCategory}
              onClick={() => openCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </fieldset>

      <div
        className={`${panelGridClass} ${
          displayedOpen && displayedCategory !== null
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {displayedCategory !== null ? (
            <div className="mt-3 min-h-0">
              <CategoryProductsPanel
                key={displayedCategory}
                category={displayedCategory}
                searchFilterQuery={debouncedSearchQuery}
                onClose={handlePanelClose}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
