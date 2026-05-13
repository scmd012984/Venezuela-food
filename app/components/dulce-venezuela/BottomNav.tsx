"use client";

import { Heart, Home, ShoppingCart, Star, Store } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/contexts/cart-context";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

export function BottomNav() {
  const { itemCount, openDrawer } = useCart();

  return (
    <nav className="pb-safe fixed bottom-0 left-0 z-50 flex w-full justify-around rounded-t-3xl border-t border-outline-variant/50 bg-white/96 px-2 pt-2 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_-10px_36px_-14px_rgba(12,36,99,0.1),0_-4px_16px_-8px_rgba(28,29,38,0.08)] backdrop-blur-xl backdrop-saturate-125 dark:border-slate-600/50 dark:bg-slate-950/96 dark:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_-12px_32px_-8px_rgba(0,0,0,0.4)] md:hidden">
      <Link
        href="/"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-primary transition duration-200 hover:bg-primary/10 active:scale-95 dark:text-blue-300 dark:hover:bg-primary/15"
      >
        <Home className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Inicio
        </span>
      </Link>
      <Link
        href="/#catalogo"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-on-surface-variant/75 transition duration-200 hover:bg-primary/8 hover:text-primary active:scale-95"
      >
        <Store className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Tienda
        </span>
      </Link>
      <Link
        href="/#testimonios"
        aria-label="Reseñas y testimonios de clientes"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-1.5 py-1.5 text-on-surface-variant/75 transition duration-200 hover:bg-primary/8 hover:text-primary active:scale-95"
      >
        <Star className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 max-w-[4.25rem] text-center text-[9px] font-semibold uppercase leading-tight tracking-widest sm:text-[10px]">
          Reseñas
        </span>
      </Link>
      <Link
        href="/#favoritos"
        className="tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-on-surface-variant/75 transition duration-200 hover:bg-primary/8 hover:text-primary active:scale-95"
      >
        <Heart className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Favoritos
        </span>
      </Link>
      <button
        type="button"
        className="tap-highlight-none relative flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 text-on-surface-variant/75 transition duration-200 hover:bg-primary/8 hover:text-primary active:scale-95"
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
            <span className="absolute -right-1.5 -top-1 flex min-w-[1rem] items-center justify-center rounded-full bg-secondary-container px-1 text-[9px] font-semibold leading-none text-on-secondary-container">
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
