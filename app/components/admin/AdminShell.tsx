"use client";

import { LayoutDashboard, PanelLeft, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import {
  adminFooterLinkClass,
  adminNavIconClass,
  adminNavLinkClass,
} from "@/app/components/admin/admin-styles";
import { ADMIN_NAV_ITEMS } from "@/app/components/admin/admin-nav";
import { getAdminSectionByPath } from "@/lib/admin/sections";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

type AdminShellProps = {
  children: React.ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const navId = useId();
  const activeSection = getAdminSectionByPath(pathname);
  const headerTitle = activeSection?.title ?? "Panel de administración";

  useEffect(() => {
    if (!sidebarOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="admin-canvas flex min-h-dvh">
      {sidebarOpen ? (
        <button
          type="button"
          className="admin-overlay fixed inset-0 z-40 backdrop-blur-[2px] lg:hidden"
          aria-label="Cerrar menú lateral"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      <aside
        id={navId}
        className={[
          "admin-sidebar fixed inset-y-0 left-0 z-50 flex w-[17.5rem] flex-col backdrop-blur-md transition-[transform,width] duration-300 ease-out lg:static",
          sidebarOpen
            ? "translate-x-0 lg:w-[17.5rem]"
            : "-translate-x-full lg:w-0 lg:overflow-hidden lg:border-r-0",
        ].join(" ")}
        aria-hidden={!sidebarOpen}
      >
        <div className="admin-sidebar-brand relative overflow-hidden px-4 py-5">
          <div
            className="admin-glow-gold pointer-events-none absolute -right-6 -top-6 size-24 rounded-full blur-2xl"
            aria-hidden
          />
          <div className="relative flex items-center gap-3">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--admin-gold)_22%,transparent)] text-sm font-bold text-[var(--admin-gold-bright)] ring-1 ring-[color-mix(in_srgb,var(--admin-gold)_40%,transparent)]"
              aria-hidden
            >
              DV
            </span>
            <div className="min-w-0">
              <p className="truncate font-headline text-sm font-semibold leading-tight text-[var(--admin-panel-elevated)]">
                Dulce Venezuela
              </p>
              <p className="truncate text-xs text-[color-mix(in_srgb,var(--admin-gold-soft)_88%,white)]">
                Administración
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Admin">
          <p className="admin-nav-label mb-2 px-3">Gestión</p>
          <ul className="space-y-1">
            {ADMIN_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={adminNavLinkClass(isActive)}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      if (window.matchMedia("(max-width: 1023px)").matches) {
                        setSidebarOpen(false);
                      }
                    }}
                  >
                    <span className={adminNavIconClass(isActive)}>
                      <Icon
                        className="size-4"
                        strokeWidth={LUCIDE_ICON_STROKE}
                        aria-hidden
                      />
                    </span>
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-2 border-t border-[color-mix(in_srgb,var(--admin-chocolate)_10%,var(--admin-bone))] p-3">
          <Link
            href="/admin"
            className={adminFooterLinkClass(pathname === "/admin")}
            aria-current={pathname === "/admin" ? "page" : undefined}
          >
            <LayoutDashboard
              className="size-4 shrink-0"
              strokeWidth={LUCIDE_ICON_STROKE}
              aria-hidden
            />
            Panel
          </Link>
          <Link href="/" className={adminFooterLinkClass(false)}>
            <Store
              className="size-4 shrink-0"
              strokeWidth={LUCIDE_ICON_STROKE}
              aria-hidden
            />
            Volver a la tienda
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="admin-topbar sticky top-0 z-30 flex h-[3.75rem] shrink-0 items-center gap-3 px-4 sm:px-6">
          <button
            type="button"
            className="admin-icon-btn"
            aria-label={sidebarOpen ? "Ocultar menú" : "Mostrar menú"}
            aria-expanded={sidebarOpen}
            aria-controls={navId}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <PanelLeft
              className="size-5"
              strokeWidth={LUCIDE_ICON_STROKE}
              aria-hidden
            />
          </button>
          <div className="min-w-0 flex-1">
            <p className="admin-nav-label">Admin</p>
            <h1 className="admin-text-heading truncate font-headline text-base font-semibold sm:text-lg">
              {headerTitle}
            </h1>
          </div>
        </header>

        <main className="admin-main flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
