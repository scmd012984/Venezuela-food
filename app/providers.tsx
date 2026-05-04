"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/app/contexts/cart-context";
import { CartDrawer } from "@/app/components/cart/CartDrawer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
