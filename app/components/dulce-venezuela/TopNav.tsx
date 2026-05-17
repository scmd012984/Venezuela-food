"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useCart } from "@/app/contexts/cart-context";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { LogoBrandStars } from "./LogoBrandMark";

type NavLink = { href: string; label: string; active?: boolean };

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/#catalogo", label: "Tienda", active: true },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#favoritos", label: "Favoritos" },
  { href: "/#instagram", label: "Instagram" },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const { itemCount, openDrawer } = useCart();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    active
      ? "rounded-lg bg-chocolate-deep/10 px-2.5 py-1.5 text-sm font-semibold text-chocolate-deep lg:px-3 lg:text-[0.9375rem]"
      : "rounded-lg px-2.5 py-1.5 text-sm font-medium text-on-surface transition hover:bg-surface-container-high hover:text-chocolate-deep lg:px-3 lg:text-[0.9375rem] dark:text-slate-100";

  return (
    <>
      <nav
        className="bg-surface-elevated-strong sticky top-0 z-50 border-b border-outline-variant/50 shadow-[0_1px_0_rgba(254,253,250,0.75)_inset,0_1px_3px_rgba(34,22,16,0.05)] backdrop-blur-md backdrop-saturate-125 dark:border-slate-600/45 dark:bg-slate-950/96 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_1px_3px_rgba(0,0,0,0.35)]"
        aria-label="Navegación principal"
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
          <div className="flex min-h-0 min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-chocolate-deep transition hover:bg-surface-container-low active:scale-95 md:hidden dark:text-vanilla-bright dark:hover:bg-slate-800/60"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
              ) : (
                <Menu className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
              )}
            </button>
            <Link
              href="/"
              aria-label="Dulce Venezuela, repostería artesanal"
              className="shadow-card-soft group relative flex h-9 max-w-[min(100%,17.5rem)] min-h-9 min-w-0 shrink-0 items-center overflow-hidden rounded-xl border border-outline-variant/45 py-0 pl-2.5 pr-1.5 ring-1 ring-white/45 sm:max-w-[20rem] sm:rounded-2xl sm:pl-3 sm:pr-2 dark:border-slate-600/50 dark:ring-slate-800/60"
            >
              <div
                className="absolute inset-0 flex flex-col opacity-[0.72] transition-opacity duration-300 group-hover:opacity-[0.88]"
                aria-hidden
              >
                <div className="h-1/3 bg-linear-to-b from-[#ffdd33] via-[#fed721] to-[#f7cb18]" />
                <div className="h-1/3 bg-linear-to-b from-[#0a3db4] via-[#0033a0] to-[#00297f]" />
                <div className="h-1/3 bg-linear-to-b from-[#d22a2a] via-[#ba1a1a] to-[#971010]" />
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-white/18 backdrop-blur-[0.5px] dark:bg-slate-900/25"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-[40%] top-[-60%] h-[230%] w-[34%] rotate-12 bg-linear-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100"
                aria-hidden
              />
              <span className="relative z-[1] flex min-w-0 flex-1 items-center gap-0.5 sm:gap-1">
                <span className="min-w-0 truncate bg-linear-to-r from-chocolate-ink via-chocolate-deep to-chocolate bg-clip-text font-headline text-base font-black leading-none tracking-[-0.02em] text-transparent drop-shadow-[0_1px_2px_rgba(255,252,245,0.85),0_1px_4px_rgba(34,22,16,0.2)] min-[380px]:text-lg sm:text-xl md:text-2xl dark:from-vanilla-bright dark:via-gold-soft dark:to-gold-shine">
                  Dulce Venezuela
                </span>
                <LogoBrandStars />
              </span>
            </Link>
          </div>

          <div
            role="navigation"
            aria-label="Secciones"
            className="hidden min-w-0 flex-1 justify-center md:flex"
          >
            <div className="flex max-w-full items-center gap-1 sm:gap-2 lg:gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  className={linkClass(!!link.active)}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="ml-auto flex shrink-0 items-center">
            <button
              type="button"
              className="bg-surface-elevated shadow-card-soft relative flex h-9 min-h-9 items-center gap-1.5 rounded-xl border-2 border-outline-variant/55 px-2 text-chocolate-deep transition duration-200 hover:-translate-y-0.5 hover:border-chocolate/25 hover:bg-surface-container-low hover:shadow-md active:translate-y-0 active:scale-[0.97] sm:rounded-2xl sm:px-2.5 dark:border-slate-600/50 dark:bg-slate-900/90 dark:text-vanilla-bright dark:hover:border-gold-bright/35 dark:hover:bg-slate-800"
              aria-label={
                itemCount === 0
                  ? "Abrir carrito"
                  : `Abrir carrito: ${itemCount} productos`
              }
              onClick={() => openDrawer()}
            >
              <ShoppingCart
                className="size-6 shrink-0 sm:size-[26px]"
                strokeWidth={LUCIDE_ICON_STROKE}
                aria-hidden
              />
              <span className="hidden min-[360px]:inline text-xs font-semibold tracking-tight">
                Carrito
              </span>
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex min-w-[1.125rem] items-center justify-center rounded-full bg-cta-warm px-1 py-0.5 text-[9px] font-semibold leading-none text-on-cta-warm ring-2 ring-surface-elevated-strong shadow-[0_2px_10px_rgba(92,6,30,0.38)] dark:ring-slate-900 sm:-right-0.5 sm:top-0 sm:text-[10px]">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </nav>

      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed inset-0 z-[100] md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 dark:bg-black/55 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`bg-surface-elevated-strong absolute left-0 top-0 flex h-full w-[min(100vw-3rem,20rem)] max-w-[320px] flex-col border-r border-outline-variant/40 shadow-[8px_0_40px_-16px_rgba(34,22,16,0.12)] backdrop-blur-xl transition-transform duration-300 ease-out dark:border-slate-600/40 dark:bg-slate-900/96 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-outline-variant/50 px-3 py-3 dark:border-slate-700/60">
            <p className="text-sm font-semibold tracking-tight text-chocolate-deep">Menú</p>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-slate-800"
              aria-label="Cerrar"
              onClick={() => setMenuOpen(false)}
            >
              <X className="size-5" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col items-stretch gap-1 overflow-y-auto p-2"
            aria-label="Secciones"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-[15px] transition-colors ${
                  link.active
                    ? "bg-chocolate-deep/10 font-semibold text-chocolate-deep"
                    : "font-medium text-on-surface hover:bg-surface-container-low dark:text-slate-100 dark:hover:bg-slate-800/80"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-on-surface hover:bg-surface-container-low dark:hover:bg-slate-800/80"
              aria-label={
                itemCount === 0
                  ? "Abrir carrito"
                  : `Abrir carrito, ${itemCount} productos`
              }
              onClick={() => {
                setMenuOpen(false);
                openDrawer();
              }}
            >
              <ShoppingCart
                className="size-6 shrink-0 text-chocolate-deep"
                strokeWidth={LUCIDE_ICON_STROKE}
                aria-hidden
              />
              <span>Carrito</span>
              {itemCount > 0 ? (
                <span className="ml-auto flex min-w-[1.5rem] items-center justify-center rounded-full bg-cta-warm px-2 py-0.5 text-xs font-semibold text-on-cta-warm ring-1 ring-surface-elevated-strong/80 shadow-[0_2px_10px_rgba(92,6,30,0.35)]">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
