"use client";

import { Plus } from "lucide-react";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { getCatalogProduct, type CatalogProductId } from "@/lib/catalog";
import { useCart } from "@/app/contexts/cart-context";

const addToCartBtnClass =
  "tap-highlight-none inline-flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl border-2 border-primary-container/95 bg-primary-container text-white shadow-[0_4px_18px_-4px_rgba(26,58,143,0.5)] transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:shadow-[0_10px_28px_-6px_rgba(12,36,99,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.94]";

export function AddToCartButton({ productId }: { productId: CatalogProductId }) {
  const { addToCart } = useCart();
  const product = getCatalogProduct(productId);

  return (
    <button
      type="button"
      className={addToCartBtnClass}
      aria-label={`Añadir al carrito: ${product?.name ?? productId}`}
      onClick={() => addToCart(productId)}
    >
      <Plus className="size-6 text-white" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
    </button>
  );
}
