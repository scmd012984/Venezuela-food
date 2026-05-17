"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { getCatalogProduct } from "@/lib/catalog";
import {
  loadStoredCartLines,
  saveStoredCartLines,
} from "@/lib/cart-storage";
import type { CartLine } from "@/lib/cart-types";

export type { CartLine } from "@/lib/cart-types";

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  totalEuro: number;
  isDrawerOpen: boolean;
  addToCart: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  removeLine: (productId: string) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const persistReadyRef = useRef(false);

  useEffect(() => {
    const stored = loadStoredCartLines();
    persistReadyRef.current = true;
    if (stored.length > 0) {
      queueMicrotask(() => setLines(stored));
    }
  }, []);

  useEffect(() => {
    if (!persistReadyRef.current) return;
    saveStoredCartLines(lines);
  }, [lines]);

  const addToCart = useCallback((productId: string) => {
    const p = getCatalogProduct(productId);
    if (!p) return;
    setLines((prev) => {
      const i = prev.findIndex((l) => l.productId === productId);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i]!, quantity: next[i]!.quantity + 1 };
        return next;
      }
      return [
        ...prev,
        {
          productId,
          name: p.name,
          unitPriceEuro: p.unitPriceEuro,
          quantity: 1,
        },
      ];
    });
  }, []);

  const increment = useCallback((productId: string) => {
    setLines((prev) =>
      prev.map((l) =>
        l.productId === productId ? { ...l, quantity: l.quantity + 1 } : l,
      ),
    );
  }, []);

  const decrement = useCallback((productId: string) => {
    setLines((prev) =>
      prev
        .map((l) =>
          l.productId === productId
            ? { ...l, quantity: Math.max(0, l.quantity - 1) }
            : l,
        )
        .filter((l) => l.quantity > 0),
    );
  }, []);

  const removeLine = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const itemCount = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines],
  );

  const totalEuro = useMemo(
    () => lines.reduce((s, l) => s + l.unitPriceEuro * l.quantity, 0),
    [lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      itemCount,
      totalEuro,
      isDrawerOpen,
      addToCart,
      increment,
      decrement,
      removeLine,
      openDrawer,
      closeDrawer,
    }),
    [
      lines,
      itemCount,
      totalEuro,
      isDrawerOpen,
      addToCart,
      increment,
      decrement,
      removeLine,
      openDrawer,
      closeDrawer,
    ],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
}
