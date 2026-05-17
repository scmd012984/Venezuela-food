"use client";

import { PanelLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ADMIN_NAV_ITEMS } from "@/app/components/admin/admin-nav";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

type AdminShellProps = {
  children: React.ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const navId = useId();

  useEffect(() => {
    if (!sidebarOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-dvh bg-slate-100 text-slate-900">
      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[1px] lg:hidden"
          aria-label="Cerrar menú lateral"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      <aside
        id={navId}
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white shadow-lg transition-[transform,width] duration-300 ease-out lg:static lg:shadow-none",
          sidebarOpen
            ? "translate-x-0 lg:w-64"
            : "-translate-x-full lg:w-0 lg:overflow-hidden lg:border-r-0",
        ].join(" ")}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-slate-200 px-4">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-on-primary"
            aria-hidden
          >
            DV
          </span>
          <div className="min-w-0">
            <p className="truncate font-headline text-sm font-semibold leading-tight text-primary">
              Dulce Venezuela
            </p>
            <p className="truncate text-xs text-slate-500">Administración</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Admin">
          <ul className="space-y-0.5">
            {ADMIN_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                !item.disabled && pathname === item.href && item.label === "Panel";
              const className = item.disabled
                ? "flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400"
                : isActive
                  ? "flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary"
                  : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary";

              const content = (
                <>
                  <Icon
                    className="size-5 shrink-0"
                    strokeWidth={LUCIDE_ICON_STROKE}
                    aria-hidden
                  />
                  <span className="truncate">{item.label}</span>
                  {item.disabled ? (
                    <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Pronto
                    </span>
                  ) : null}
                </>
              );

              return (
                <li key={item.label}>
                  {item.disabled ? (
                    <span className={className} aria-disabled>
                      {content}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={className}
                      onClick={() => {
                        if (window.matchMedia("(max-width: 1023px)").matches) {
                          setSidebarOpen(false);
                        }
                      }}
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-slate-200 p-3">
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
          >
            Volver a la tienda
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur-sm sm:px-6">
          <button
            type="button"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-primary active:scale-95"
            aria-label={sidebarOpen ? "Ocultar menú" : "Mostrar menú"}
            aria-expanded={sidebarOpen}
            aria-controls={navId}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <PanelLeft className="size-5" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate font-headline text-base font-semibold text-slate-900 sm:text-lg">
              Panel de administración
            </h1>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
