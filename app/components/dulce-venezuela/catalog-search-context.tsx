"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getMatchingProductIds } from "@/lib/catalog-search";
import type { CatalogProductId } from "@/lib/catalog";

type CatalogSearchContextValue = {
  query: string;
  setQuery: (value: string) => void;
  matchingIds: CatalogProductId[];
  /** Misma cadena que `query`, tras debounce (panel categorías + scroll). */
  debouncedSearchQuery: string;
};

const CatalogSearchContext = createContext<CatalogSearchContextValue | null>(
  null,
);

const SCROLL_DEBOUNCE_MS = 220;

export function CatalogSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQueryState] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const hydratedFromUrl = useRef(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDebouncedQuery(query);
    }, SCROLL_DEBOUNCE_MS);
    return () => window.clearTimeout(t);
  }, [query]);

  useEffect(() => {
    if (hydratedFromUrl.current) return;
    hydratedFromUrl.current = true;
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQueryState(q);
  }, []);

  const setQuery = useCallback((next: string) => {
    setQueryState(next);
    if (typeof window === "undefined") return;
    const trimmed = next.trim();
    const path = window.location.pathname || "/";
    const url = trimmed
      ? `${path}?q=${encodeURIComponent(trimmed)}`
      : path;
    window.history.replaceState(null, "", url);
  }, []);

  const matchingIds = useMemo(() => getMatchingProductIds(query), [query]);

  useEffect(() => {
    const q = debouncedQuery.trim();
    if (!q) return;

    const run = () => {
      document
        .getElementById("explorar-dulces")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const t = window.setTimeout(run, 120);
    return () => window.clearTimeout(t);
  }, [debouncedQuery]);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      matchingIds,
      debouncedSearchQuery: debouncedQuery,
    }),
    [query, setQuery, matchingIds, debouncedQuery],
  );

  return (
    <CatalogSearchContext.Provider value={value}>
      {children}
    </CatalogSearchContext.Provider>
  );
}

export function useCatalogSearch(): CatalogSearchContextValue {
  const ctx = useContext(CatalogSearchContext);
  if (!ctx) {
    throw new Error("useCatalogSearch debe usarse dentro de CatalogSearchProvider");
  }
  return ctx;
}
