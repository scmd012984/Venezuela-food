"use client";

import { Heart, Home, ShoppingCart, Star, Store } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/contexts/cart-context";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

export function BottomNav() {
  const { itemCount, openDrawer } = useCart();

  return (
    <nav className="bg-surface-elevated-strong pb-safe fixed bottom-0 left-0 z-50 flex w-full justify-around rounded-t-3xl border-t border-outline-variant/50 px-2 pt-2 shadow-[0_1px_0_rgba(254,253,250,0.8)_inset,0_-10px_30px_rgba(60,47,47,0.05)] backdrop-blur-xl backdrop-saturate-125 dark:border-slate-600/50 dark:bg-slate-950/96 dark:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_-10px_30px_rgba(60,47,47,0.14)] md:hidden">
      <Link
        href="/"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-chocolate-deep transition-colors duration-200 dark:text-vanilla-bright"
      >
        <Home className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Inicio
        </span>
      </Link>
      <Link
        href="/#catalogo"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-chocolate-mid transition-colors duration-200 hover:bg-ui-chip hover:text-chocolate-deep dark:text-slate-300 dark:hover:bg-ui-chip/30"
      >
        <Store className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Tienda
        </span>
      </Link>
      <Link
        href="/#testimonios"
        aria-label="Reseñas y testimonios de clientes"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-1.5 py-1.5 text-chocolate-mid transition-colors duration-200 hover:bg-ui-chip hover:text-chocolate-deep dark:text-slate-300 dark:hover:bg-ui-chip/30"
      >
        <Star className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 max-w-[4.25rem] text-center text-[9px] font-semibold uppercase leading-tight tracking-widest sm:text-[10px]">
          Reseñas
        </span>
      </Link>
      <Link
        href="/#favoritos"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-chocolate-mid transition-colors duration-200 hover:bg-ui-chip hover:text-chocolate-deep dark:text-slate-300 dark:hover:bg-ui-chip/30"
      >
        <Heart className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Favoritos
        </span>
      </Link>
      <button
        type="button"
        className="tap-highlight-none relative flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-chocolate-mid transition-colors duration-200 hover:bg-ui-chip hover:text-chocolate-deep dark:text-slate-300 dark:hover:bg-ui-chip/30"
        aria-label={
          itemCount === 0
            ? "Abrir carrito"
            : `Abrir carrito: ${itemCount} productos`
        }
        onClick={() => openDrawer()}
      >
        <span className="relative inline-flex">
          <ShoppingCart
            className="size-[26px] shrink-0"
            strokeWidth={LUCIDE_ICON_STROKE}
            aria-hidden
          />
          {itemCount > 0 ? (
            <span className="absolute -right-1.5 -top-1 flex min-w-[1rem] items-center justify-center rounded-full bg-cta-warm px-1 text-[9px] font-semibold leading-none text-on-cta-warm ring-2 ring-surface-elevated-strong shadow-[0_2px_10px_rgba(92,6,30,0.38)] dark:ring-slate-900">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          ) : null}
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Carrito
        </span>
      </button>
    </nav>
  );
}
