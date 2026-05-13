"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useCart } from "@/app/contexts/cart-context";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

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
      ? "rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-semibold text-primary sm:text-sm"
      : "rounded-lg px-2.5 py-1.5 text-xs font-normal text-on-surface/80 transition hover:bg-surface-container-high hover:text-primary sm:text-sm";

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-outline-variant/50 bg-white/96 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_1px_3px_rgba(28,29,38,0.06)] backdrop-blur-md backdrop-saturate-125 dark:border-slate-600/45 dark:bg-slate-950/96 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_1px_3px_rgba(0,0,0,0.35)]"
        aria-label="Navegación principal"
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
          <div className="flex min-h-0 min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-primary transition hover:bg-surface-container-low active:scale-95 md:hidden dark:text-blue-400 dark:hover:bg-slate-800/60"
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
              className="shadow-card-soft group relative flex h-9 max-w-[min(100%,15.5rem)] min-h-9 min-w-0 shrink-0 items-center overflow-hidden rounded-xl border border-outline-variant/45 px-2.5 ring-1 ring-white/45 sm:max-w-[18rem] sm:rounded-2xl sm:px-3 dark:border-slate-600/50 dark:ring-slate-800/60"
            >
              <div className="absolute inset-0 flex flex-col opacity-50 transition-opacity duration-300 group-hover:opacity-70">
                <div className="h-1/3 bg-[#fed721]" />
                <div className="h-1/3 bg-[#0033a0]" />
                <div className="h-1/3 bg-[#ba1a1a]" />
              </div>
              <div className="absolute inset-0 bg-white/62 backdrop-blur-[1px] dark:bg-slate-900/35" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/35 via-transparent to-white/20" />
              <div className="pointer-events-none absolute -left-[40%] top-[-60%] h-[230%] w-[34%] rotate-12 bg-linear-to-r from-transparent via-white/85 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
              <span className="relative z-[1] max-w-full truncate bg-linear-to-r from-[#001550] via-[#0033a0] to-[#3456c1] bg-clip-text font-headline text-base font-black leading-none tracking-[-0.02em] text-transparent drop-shadow-[0_1px_6px_rgba(0,0,0,0.12)] min-[380px]:text-lg sm:text-xl md:text-2xl dark:from-blue-100 dark:via-blue-300 dark:to-blue-500">
                Dulce Venezuela
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
              className="shadow-card-soft relative flex h-9 min-h-9 items-center gap-1.5 rounded-xl border-2 border-outline-variant/55 bg-white px-2 text-primary transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-container-low hover:shadow-md active:translate-y-0 active:scale-[0.97] sm:rounded-2xl sm:px-2.5 dark:border-slate-600/50 dark:bg-slate-900/90 dark:text-blue-300 dark:hover:border-primary/35 dark:hover:bg-slate-800"
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
                <span className="absolute -right-1 -top-1 flex min-w-[1.125rem] items-center justify-center rounded-full bg-cta-warm px-1 py-0.5 text-[9px] font-semibold leading-none text-on-cta-warm ring-2 ring-white shadow-[0_2px_10px_rgba(229,52,106,0.45)] dark:ring-slate-900 sm:-right-0.5 sm:top-0 sm:text-[10px]">
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
          className={`absolute left-0 top-0 flex h-full w-[min(100vw-3rem,20rem)] max-w-[320px] flex-col border-r border-outline-variant/40 bg-white/96 shadow-[8px_0_40px_-16px_rgba(28,29,38,0.15)] backdrop-blur-xl transition-transform duration-300 ease-out dark:border-slate-600/40 dark:bg-slate-900/96 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-outline-variant/50 px-3 py-3 dark:border-slate-700/60">
            <p className="text-sm font-semibold tracking-tight text-primary">Menú</p>
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
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  link.active
                    ? "bg-primary-container/12 font-semibold text-primary"
                    : "font-normal text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-slate-800/80"
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
                className="size-6 shrink-0 text-primary"
                strokeWidth={LUCIDE_ICON_STROKE}
                aria-hidden
              />
              <span>Carrito</span>
              {itemCount > 0 ? (
                <span className="ml-auto flex min-w-[1.5rem] items-center justify-center rounded-full bg-cta-warm px-2 py-0.5 text-xs font-semibold text-on-cta-warm ring-1 ring-white/30 shadow-[0_2px_10px_rgba(229,52,106,0.4)]">
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
