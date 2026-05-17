"use client";

import { Minus, Plus, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/app/contexts/cart-context";
import { formatEuroES } from "@/lib/format-euro";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { WhatsAppBrandIcon } from "@/app/components/dulce-venezuela/WhatsAppBrandIcon";
import {
  iconGhostBtnClass,
  panelCloseBtnClass,
  primaryCtaClass,
  secondaryOutlineCtaClass,
  whatsappCtaClass,
} from "@/app/components/dulce-venezuela/home-shared";
import { buildCartWhatsAppHref } from "@/lib/cart-whatsapp";
import { buildWhatsAppContactHref, isWhatsAppWebHref } from "@/lib/contact-public";

const rowBtnClass =
  "tap-highlight-none bg-surface-elevated inline-flex size-9 items-center justify-center rounded-xl border border-outline-variant/55 text-chocolate-deep transition hover:border-gold-bright/40 hover:bg-ui-chip/60 active:scale-95";

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

  const cartWhatsAppHref = buildCartWhatsAppHref(lines);
  const fallbackContactHref = buildWhatsAppContactHref();
  const orderHref = cartWhatsAppHref ?? fallbackContactHref;
  const orderOpensWhatsApp = isWhatsAppWebHref(orderHref);

  return (
    <div className="fixed inset-0 z-[120]">
      <button
        type="button"
        className="cart-scrim absolute inset-0 backdrop-blur-[3px] transition-opacity"
        aria-label="Cerrar carrito"
        onClick={closeDrawer}
      />
      <div
        className="glass-panel bg-surface-elevated-strong absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-gold-bright/25 shadow-[-10px_0_30px_rgba(60,47,47,0.06)] backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className="topnav-gold-surface border-gold-separator border-gold-separator-b flex items-center justify-between px-4 py-3">
          <h2
            id="cart-drawer-title"
            className="font-display text-lg font-semibold tracking-tight text-chocolate-deep"
          >
            Carrito
          </h2>
          <button
            type="button"
            className={`${panelCloseBtnClass} size-9 rounded-lg`}
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
                  className="shadow-card-subtle rounded-2xl border border-gold-bright/30 bg-surface-container-low/90 p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-base font-semibold leading-snug text-chocolate-ink">
                        {line.name}
                      </p>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        {formatEuroES(line.unitPriceEuro)} / ud.
                      </p>
                    </div>
                    <button
                      type="button"
                      className={`${iconGhostBtnClass} shrink-0 rounded-lg p-1.5 hover:bg-cta-warm/12 hover:text-cta-warm`}
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
                      <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums text-chocolate-ink">
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

        <div className="border-gold-separator border-gold-separator-t bg-ivory-soft/50 p-4">
          <div className="mb-3 flex items-center justify-between text-base">
            <span className="font-medium text-on-surface-variant">Total</span>
            <span className="text-xl font-extrabold tabular-nums text-chocolate-deep">
              {formatEuroES(totalEuro)}
            </span>
          </div>
          {lines.length > 0 ? (
            <a
              href={orderHref}
              target={orderOpensWhatsApp ? "_blank" : undefined}
              rel={orderOpensWhatsApp ? "noopener noreferrer" : undefined}
              className={`${cartWhatsAppHref ? whatsappCtaClass : primaryCtaClass} mb-3 w-full`}
              onClick={closeDrawer}
            >
              {cartWhatsAppHref ? (
                <WhatsAppBrandIcon className="size-5 shrink-0" />
              ) : null}
              {cartWhatsAppHref
                ? "Pedir por WhatsApp"
                : "Contactar para pedir"}
            </a>
          ) : null}
          <button
            type="button"
            className={`${secondaryOutlineCtaClass} w-full`}
            onClick={closeDrawer}
          >
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
}
