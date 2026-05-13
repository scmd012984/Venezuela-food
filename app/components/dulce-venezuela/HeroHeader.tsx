"use client";

import { CategoryFilterSection } from "./CategoryFilterSection";
import { useCatalogSearch } from "./catalog-search-context";

export function HeroHeader() {
  const { query, setQuery } = useCatalogSearch();

  return (
    <section
      id="explorar-dulces"
      aria-label="Explorar catálogo"
      className="scroll-mt-24 space-y-6 sm:scroll-mt-28 sm:space-y-7"
    >
      <div className="max-w-2xl space-y-1.5">
        <h2 className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
          Explorar dulces
        </h2>
        <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base sm:leading-relaxed">
          Busca por nombre o elige una categoría.
        </p>
      </div>

      <div className="flex flex-col items-stretch gap-5 md:flex-row md:items-end md:gap-5 lg:gap-6">
        <div className="relative w-full md:max-w-md md:shrink-0 lg:max-w-lg">
          <label htmlFor="catalog-search" className="sr-only">
            Buscar en el catálogo
          </label>
          <input
            id="catalog-search"
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar delicias…"
            autoComplete="off"
            className="shadow-card-soft w-full rounded-3xl border border-outline-variant/60 bg-white py-3.5 pl-5 pr-5 text-base font-normal text-on-surface placeholder:text-on-surface-variant/70 transition duration-200 placeholder:font-normal hover:border-primary/40 hover:shadow-[0_8px_28px_-12px_rgba(12,36,99,0.14)] focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/18 dark:border-slate-600/50 dark:bg-slate-950 dark:text-white dark:hover:border-primary/45 dark:placeholder:text-slate-500"
          />
        </div>
        <CategoryFilterSection />
      </div>
    </section>
  );
}
