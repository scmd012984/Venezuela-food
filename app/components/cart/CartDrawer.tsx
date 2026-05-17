"use client";

import { Minus, Plus, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/app/contexts/cart-context";
import { formatEuroES } from "@/lib/format-euro";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

const rowBtnClass =
  "tap-highlight-none bg-surface-elevated inline-flex size-9 items-center justify-center rounded-xl border border-outline-variant/55 text-chocolate-deep transition hover:border-chocolate/35 hover:bg-surface-container-low active:scale-95 dark:border-slate-600/60 dark:bg-slate-900/80 dark:text-gold-soft";

export function CartDrawer() {
  const {
    lines,
    totalEuro,
    isDrawerOpen,
    closeDrawer,
    increment,
    decrement,
    removeLine,
  } = useCart();

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[120]">
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity dark:bg-black/55"
        aria-label="Cerrar carrito"
        onClick={closeDrawer}
      />
      <div
        className="bg-surface-elevated-strong absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-outline-variant/40 shadow-[-8px_0_40px_-16px_rgba(34,22,16,0.14)] backdrop-blur-md dark:border-slate-600/50 dark:bg-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className="flex items-center justify-between border-b border-outline-variant/45 px-4 py-3 dark:border-slate-700/60">
          <h2
            id="cart-drawer-title"
            className="font-headline text-lg font-semibold tracking-tight text-chocolate-deep"
          >
            Carrito
          </h2>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-on-surface-variant transition hover:bg-surface-container-low dark:hover:bg-slate-800"
            aria-label="Cerrar"
            onClick={closeDrawer}
          >
            <X className="size-5" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
          {lines.length === 0 ? (
            <p className="py-8 text-center text-sm text-on-surface-variant">
              Tu carrito está vacío. Añade productos desde el catálogo.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {lines.map((line) => (
                <li
                  key={line.productId}
                  className="rounded-2xl border border-outline-variant/40 bg-surface-container-low/80 p-3 dark:border-slate-600/50 dark:bg-slate-800/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="font-headline font-semibold leading-snug text-on-surface dark:text-slate-100">
                        {line.name}
                      </p>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        {formatEuroES(line.unitPriceEuro)} / ud.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 rounded-lg p-1.5 text-on-surface-variant transition hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400"
                      aria-label={`Quitar ${line.name} del carrito`}
                      onClick={() => removeLine(line.productId)}
                    >
                      <Trash2 className="size-4" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        className={rowBtnClass}
                        aria-label="Quitar una unidad"
                        onClick={() => decrement(line.productId)}
                      >
                        <Minus className="size-4" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
                      </button>
                      <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums text-on-surface dark:text-slate-100">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        className={rowBtnClass}
                        aria-label="Añadir una unidad"
                        onClick={() => increment(line.productId)}
                      >
                        <Plus className="size-4" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
                      </button>
                    </div>
                    <span className="text-sm font-bold tabular-nums text-chocolate-deep">
                      {formatEuroES(line.unitPriceEuro * line.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-outline-variant/45 p-4 dark:border-slate-700/60">
          <div className="mb-3 flex items-center justify-between text-base">
            <span className="font-medium text-on-surface-variant">Total</span>
            <span className="text-xl font-extrabold tabular-nums text-chocolate-deep">
              {formatEuroES(totalEuro)}
            </span>
          </div>
          <button
            type="button"
            className="w-full rounded-full border-2 border-chocolate/20 py-3 text-sm font-semibold text-chocolate-deep transition hover:bg-chocolate-deep/8 dark:hover:bg-chocolate-deep/15"
            onClick={closeDrawer}
          >
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
}
