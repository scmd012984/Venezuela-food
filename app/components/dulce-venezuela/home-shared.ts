export type CtaLink = {
  href: string;
  label: string;
  className: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
  icon?: "whatsapp" | "mail";
};

/** Tarjeta tipo regalo: borde dorado y elevación cálida */
export const giftPanelClass =
  "glass-panel glass-panel-gold shadow-card-soft shadow-card-gold";

/** Elevación al pasar el ratón — acento dorado */
export const cardHoverLiftClass =
  "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,248,220,0.85),0_0_0_1px_rgba(224,184,64,0.18),0_0_20px_-10px_rgba(224,184,64,0.28),0_14px_36px_rgba(60,47,47,0.07)]";

export const premiumEyebrowClass = "type-eyebrow-gold";

/** Rótulos dorados de la sección testimonios (más grandes y legibles) */
export const testimonialsEyebrowClass = "type-eyebrow-gold-lg";

export const premiumDisplayClass = "type-premium-display";

export const premiumProductTitleClass = "type-premium-product-title";

export const premiumProductDescClass = "type-premium-product-desc";

export const pricePremiumClass = "price-premium";

const uiChipBase =
  "btn-text ui-chip tap-highlight-none rounded-xl px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chocolate/12 focus-visible:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm";

/** Contenedor de chips (legacy rosa — solo si se usa ui-chip) */
export const uiChipTrackClass =
  "ui-chip-track w-full rounded-2xl p-1";

/** Chip en reposo — #F3DDE2, sin borde */
export const uiChipClass = `${uiChipBase} font-medium text-chocolate-mid`;

/** Chip activo — borgoña + texto claro */
export const uiChipActiveClass = `${uiChipBase} ui-chip--active font-medium`;

/** Contenedor filtros categoría — dorado suave como la nav */
export const categoryFilterTrackClass = "category-filter-track";

/** Campo de búsqueda del catálogo */
export const catalogSearchFieldClass =
  "catalog-search-field w-full rounded-2xl py-3 pl-10 pr-4 text-base font-normal sm:py-3.5 sm:pl-11 sm:pr-5";

/** Botón filtro / acceso rápido — mismo fondo, sombra y texto que la barra superior */
export function goldFilterChipClass(active: boolean): string {
  return `topnav-gold-surface topnav-gold-chip btn-text topnav-link tap-highlight-none rounded-xl px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chocolate/12 focus-visible:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm ${
    active ? "topnav-link--active" : ""
  }`;
}

const ctaButtonBase =
  "btn-text btn-ring-gold inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-full text-sm transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

/** CTA principal (borgoña) — anillo dorado metálico */
export const primaryCtaClass = `${ctaButtonBase} bg-cta-warm text-on-cta-warm hover:bg-cta-warm-hover`;

/** CTA WhatsApp — verde oliva + anillo dorado */
export const whatsappCtaClass = `${ctaButtonBase} bg-whatsapp px-6 text-on-whatsapp hover:bg-whatsapp-hover`;
