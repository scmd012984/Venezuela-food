"use client";

import { Plus } from "lucide-react";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { getCatalogProduct, type CatalogProductId } from "@/lib/catalog";
import { useCart } from "@/app/contexts/cart-context";

const addToCartBtnClass =
  "tap-highlight-none inline-flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl border-2 border-cta-warm-hover/90 bg-cta-warm text-on-cta-warm shadow-[0_4px_18px_-4px_rgba(229,52,106,0.42)] transition duration-200 hover:-translate-y-0.5 hover:border-cta-warm-hover hover:bg-cta-warm-hover hover:shadow-[0_10px_28px_-6px_rgba(196,29,82,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-warm focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.94]";

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
