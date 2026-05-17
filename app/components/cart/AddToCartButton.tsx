"use client";

import { Plus } from "lucide-react";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { getCatalogProduct, type CatalogProductId } from "@/lib/catalog";
import { useCart } from "@/app/contexts/cart-context";

const addToCartBtnClass =
  "btn-ring-gold tap-highlight-none inline-flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-cta-warm text-on-cta-warm transition duration-200 hover:-translate-y-0.5 hover:bg-cta-warm-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.94]";

export function AddToCartButton({ productId }: { productId: CatalogProductId }) {
  const { addToCart } = useCart();
  const product = getCatalogProduct(productId);

  return (
    <button
      type="button"
      className={`${addToCartBtnClass} relative z-30`}
      aria-label={`Añadir al carrito: ${product?.name ?? productId}`}
      onClick={() => addToCart(productId)}
    >
      <Plus className="size-6 text-white" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
    </button>
  );
}
