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
    `topnav-link btn-text rounded-lg px-2.5 py-1.5 text-sm lg:px-3 lg:text-[0.9375rem] ${
      active ? "topnav-link--active" : ""
    }`;

  return (
    <>
      <nav
        className="topnav-gold-bar topnav-gold-surface sticky top-0 z-50"
        aria-label="Navegación principal"
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
          <div className="flex min-h-0 min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              className="topnav-link flex size-9 shrink-0 items-center justify-center rounded-lg md:hidden"
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
              className="logo-brand-frame group relative flex h-9 max-w-[min(100%,17.5rem)] min-h-9 min-w-0 shrink-0 items-center overflow-hidden rounded-xl py-0 pl-2.5 pr-1.5 sm:max-w-[20rem] sm:rounded-2xl sm:pl-3 sm:pr-2"
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
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-gold-flare/28 via-gold-shine/34 to-gold-bright/22 backdrop-blur-[0.5px] dark:from-gold-deep/32 dark:via-gold/20 dark:to-gold-bright/15"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-[40%] top-[-60%] h-[230%] w-[34%] rotate-12 bg-linear-to-r from-transparent via-gold-flare/80 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100"
                aria-hidden
              />
              <span className="relative z-[1] flex min-w-0 flex-1 items-center gap-0.5 sm:gap-1">
                <span className="logo-brand-title min-w-0 truncate font-headline text-base font-black leading-none tracking-[-0.02em] min-[380px]:text-lg sm:text-xl md:text-2xl">
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
              className="topnav-link btn-text relative flex h-9 min-h-9 items-center gap-1.5 rounded-xl px-2 sm:rounded-2xl sm:px-2.5"
              aria-label={
                itemCount === 0
                  ? "Abrir carrito"
                  : `Abrir carrito: ${itemCount} productos`
              }
              onClick={() => openDrawer()}
            >
              <ShoppingCart
                className="size-6 shrink-0 text-chocolate-ink sm:size-[26px]"
                strokeWidth={LUCIDE_ICON_STROKE}
                aria-hidden
              />
              <span className="topnav-link hidden min-[360px]:inline text-xs font-semibold tracking-tight">
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
          className={`topnav-gold-bar topnav-gold-surface absolute left-0 top-0 flex h-full w-[min(100vw-3rem,20rem)] max-w-[320px] flex-col border-r border-gold-bright/35 shadow-[10px_0_30px_rgba(60,47,47,0.08)] transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-gold-bright/40 px-3 py-3">
            <p className="logo-brand-title text-sm font-semibold tracking-tight">Menú</p>
            <button
              type="button"
              className="topnav-link flex size-9 items-center justify-center rounded-lg"
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
                className={`topnav-link btn-text rounded-lg px-3 py-2.5 text-[15px] ${
                  link.active ? "topnav-link--active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="topnav-link btn-text mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium"
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
                className="size-6 shrink-0 text-chocolate-ink"
                strokeWidth={LUCIDE_ICON_STROKE}
                aria-hidden
              />
              <span className="text-chocolate-ink">Carrito</span>
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
