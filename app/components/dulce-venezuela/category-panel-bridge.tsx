"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";
import type { CategoryLabel } from "@/lib/catalog-categories";

type OpenCatalogCategoryFn = (tag: CategoryLabel) => void;

type CategoryPanelBridgeValue = {
  /** El panel de categorías registra aquí la función que abre una categoría (sin cerrar al repetir). */
  setOpenCatalogCategory: (fn: OpenCatalogCategoryFn | null) => void;
  /** Accesos rápidos / enlaces externos: abre el panel en esa categoría. */
  openCatalogCategory: (tag: CategoryLabel) => void;
};

const CategoryPanelBridgeContext =
  createContext<CategoryPanelBridgeValue | null>(null);

export function CategoryPanelBridgeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const openerRef = useRef<OpenCatalogCategoryFn | null>(null);

  const setOpenCatalogCategory = useCallback(
    (fn: OpenCatalogCategoryFn | null) => {
      openerRef.current = fn;
    },
    [],
  );

  const openCatalogCategory = useCallback((tag: CategoryLabel) => {
    openerRef.current?.(tag);
  }, []);

  const value = useMemo(
    () => ({ setOpenCatalogCategory, openCatalogCategory }),
    [setOpenCatalogCategory, openCatalogCategory],
  );

  return (
    <CategoryPanelBridgeContext.Provider value={value}>
      {children}
    </CategoryPanelBridgeContext.Provider>
  );
}

export function useCategoryPanelBridge(): CategoryPanelBridgeValue {
  const ctx = useContext(CategoryPanelBridgeContext);
  if (!ctx) {
    throw new Error(
      "useCategoryPanelBridge debe usarse dentro de CategoryPanelBridgeProvider",
    );
  }
  return ctx;
}
