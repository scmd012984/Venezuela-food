"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menu" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-outline-variant/50 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-primary sm:text-xl"
        >
          Dulce Venezuela
        </Link>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? "Cerrar" : "Menu"}
        </button>

        <ul className="hidden items-center gap-2 sm:gap-4 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActiveRoute(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActiveRoute(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface/80 hover:bg-surface-container-low hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`border-t border-outline-variant/40 px-4 py-3 transition md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActiveRoute(item.href) ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActiveRoute(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface/80 hover:bg-surface-container-low hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
