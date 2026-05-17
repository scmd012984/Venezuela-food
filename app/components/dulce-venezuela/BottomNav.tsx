"use client";

import { Heart, Home, ShoppingCart, Star, Store } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/contexts/cart-context";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import {
  PAGE_ENTER_DELAYS,
  pageEnterDelay,
  pageEnterNavBottomClass,
} from "./home-shared";

export function BottomNav() {
  const { itemCount, openDrawer } = useCart();

  return (
    <nav
      className={`${pageEnterNavBottomClass} topnav-gold-surface pb-safe fixed bottom-0 left-0 z-50 flex w-full justify-around rounded-t-3xl border-t border-gold-bright/40 px-2 pt-2 shadow-[0_1px_0_rgba(255,248,232,0.85)_inset,0_-10px_30px_rgba(60,47,47,0.06)] backdrop-blur-xl backdrop-saturate-125 md:hidden`}
      style={pageEnterDelay(PAGE_ENTER_DELAYS.navBottom)}
    >
      <Link
        href="/"
        className="topnav-link topnav-link--active tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-colors duration-200"
      >
        <Home className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Inicio
        </span>
      </Link>
      <Link
        href="/#catalogo"
        className="topnav-link tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-colors duration-200"
      >
        <Store className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Tienda
        </span>
      </Link>
      <Link
        href="/#testimonios"
        aria-label="Reseñas y testimonios de clientes"
        className="topnav-link tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-1.5 py-1.5 transition-colors duration-200"
      >
        <Star className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 max-w-[4.25rem] text-center text-[9px] font-semibold uppercase leading-tight tracking-widest sm:text-[10px]">
          Reseñas
        </span>
      </Link>
      <Link
        href="/#favoritos"
        className="topnav-link tap-highlight-none flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-colors duration-200"
      >
        <Heart className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">
          Favoritos
        </span>
      </Link>
      <button
        type="button"
        className="topnav-link tap-highlight-none relative flex min-w-[3.5rem] flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-colors duration-200"
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
            <span className="absolute -right-1.5 -top-1 flex min-w-[1rem] items-center justify-center rounded-full bg-cta-warm px-1 text-[9px] font-semibold leading-none text-on-cta-warm ring-2 ring-gold-flare/80 shadow-[0_2px_10px_rgba(92,6,30,0.38)]">
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
