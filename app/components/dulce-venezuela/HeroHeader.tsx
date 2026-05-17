"use client";

import { Search } from "lucide-react";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { CategoryFilterSection } from "./CategoryFilterSection";
import { useCatalogSearch } from "./catalog-search-context";
import {
  catalogSearchFieldClass,
  siteSectionHeaderClass,
  siteSectionLeadClass,
  siteSectionTitleSmClass,
} from "./home-shared";

export function HeroHeader() {
  const { query, setQuery } = useCatalogSearch();

  return (
    <section
      id="explorar-dulces"
      aria-label="Explorar catálogo"
      className="scroll-mt-24 space-y-4 sm:scroll-mt-28 sm:space-y-5"
    >
      <header className={siteSectionHeaderClass}>
        <h2 className={siteSectionTitleSmClass}>Explorar dulces</h2>
        <p className={siteSectionLeadClass}>
          Busca por nombre o elige una categoría.
        </p>
      </header>

      <div className="flex flex-col items-stretch gap-3.5 md:flex-row md:items-end md:gap-3 lg:gap-4">
        <div className="relative w-full md:max-w-sm md:shrink-0 lg:max-w-md">
          <label htmlFor="catalog-search" className="sr-only">
            Buscar en el catálogo
          </label>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-[1.125rem] -translate-y-1/2 text-chocolate-ink sm:left-4 sm:size-5"
            strokeWidth={LUCIDE_ICON_STROKE}
            aria-hidden
          />
          <input
            id="catalog-search"
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar delicias…"
            autoComplete="off"
            className={catalogSearchFieldClass}
          />
        </div>
        <CategoryFilterSection />
      </div>
    </section>
  );
}
