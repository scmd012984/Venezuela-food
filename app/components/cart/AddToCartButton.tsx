"use client";

import { Plus } from "lucide-react";
import { primaryCtaClass } from "@/app/components/dulce-venezuela/home-shared";
import { useCart } from "@/app/contexts/cart-context";
import { getCatalogProduct, type CatalogProductId } from "@/lib/catalog";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

const addToCartIconBtnClass =
  "btn-ring-gold btn-hover-lift tap-highlight-none inline-flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-cta-warm text-on-cta-warm hover:bg-cta-warm-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.94]";

const addToCartLabeledBtnClass = `${primaryCtaClass} relative z-30 shrink-0 gap-2 px-4 sm:px-5`;

type AddToCartButtonProps = {
  productId: CatalogProductId;
  /** icon = solo +; labeled = «Añadir» + icono (catálogo unificado) */
  variant?: "icon" | "labeled";
};

export function AddToCartButton({
  productId,
  variant = "icon",
}: AddToCartButtonProps) {
  const { addToCart, openDrawer } = useCart();
  const product = getCatalogProduct(productId);
  const label = product?.name ?? productId;

  if (variant === "labeled") {
    return (
      <button
        type="button"
        className={addToCartLabeledBtnClass}
        aria-label={`Añadir al carrito: ${label}`}
        onClick={() => {
          addToCart(productId);
          openDrawer();
        }}
      >
        <Plus className="size-5 shrink-0" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span>Añadir</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`${addToCartIconBtnClass} relative z-30`}
      aria-label={`Añadir al carrito: ${label}`}
      onClick={() => {
        addToCart(productId);
        openDrawer();
      }}
    >
      <Plus className="size-6 text-white" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
    </button>
  );
}
