import type { CSSProperties } from "react";

/** Entrada al cargar — fade + slide-up */
export const pageEnterSectionClass = "page-enter-section";
export const pageEnterProductClass = "page-enter-product";
export const pageEnterNavTopClass = "page-enter-nav-top";
export const pageEnterNavBottomClass = "page-enter-nav-bottom";
export const pageEnterShellClass = "page-enter-shell";
export const pageEnterBackdropClass = "page-enter-backdrop";

export const PAGE_ENTER_DELAYS = {
  navTop: 0,
  hero: 70,
  header: 150,
  occasions: 230,
  testimonials: 310,
  quickStrip: 390,
  catalogBase: 470,
  productStagger: 72,
  instagram: 700,
  navBottom: 580,
} as const;

export function pageEnterDelay(ms: number): CSSProperties {
  return { "--page-enter-delay": `${ms}ms` } as CSSProperties;
}

export function pageEnterProductDelay(index: number): CSSProperties {
  return {
    "--page-enter-base-delay": `${PAGE_ENTER_DELAYS.catalogBase}ms`,
    "--page-enter-stagger": `${index * PAGE_ENTER_DELAYS.productStagger}ms`,
  } as CSSProperties;
}

export type CtaLink = {
  href: string;
  label: string;
  className: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
  icon?: "whatsapp" | "mail";
};

/** Contenedor principal — ancho y padding unificados con la nav */
export const siteContentClass = "site-content";

/** Separación vertical entre bloques de la home */
export const siteSectionStackClass = "site-section-stack";

/** Tarjeta tipo regalo: borde dorado y elevación cálida */
export const giftPanelClass =
  "glass-panel glass-panel-gold shadow-card-soft shadow-card-gold";

/** Elevación al pasar el ratón — sube 3px + sombra dorada (ver .card-hover-lift) */
export const cardHoverLiftClass = "card-hover-lift";

export const premiumEyebrowClass = "type-eyebrow-gold";

/** Cabecera de sección (catálogo, bloques secundarios) */
export const siteSectionHeaderClass = "site-section-header";

/** Cabecera centrada (testimonios, instagram) */
export const siteSectionHeaderCenterClass =
  "site-section-header site-section-header--center";

export const siteSectionTitleClass = "type-section-title";

export const siteSectionTitleSmClass = "type-section-title-sm";

export const siteSectionLeadClass = "type-section-lead";

/** Rótulos dorados de la sección testimonios (más grandes y legibles) */
export const testimonialsEyebrowClass = "type-eyebrow-gold-lg";

export const premiumDisplayClass = "type-premium-display";

export const premiumProductTitleClass = "type-premium-product-title";

export const premiumProductDescClass = "type-premium-product-desc";

/** Citas en testimonios — Playfair cursiva */
export const premiumQuoteClass = "type-premium-quote";

export const pricePremiumClass = "price-premium";

/** Fila precio + añadir al carrito (grid y panel) */
export const catalogPurchaseRowClass = "catalog-purchase-row";

/** Badges sobre foto — esquina superior izquierda */
export const productBadgeAnchorClass =
  "absolute left-4 top-4 z-[12] sm:left-5 sm:top-5";

const uiChipBase =
  "filter-chip btn-text ui-chip tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chocolate/12 focus-visible:ring-offset-2";

/** Contenedor de chips (legacy rosa — solo si se usa ui-chip) */
export const uiChipTrackClass =
  "ui-chip-track w-full rounded-2xl p-1";

/** Chip en reposo — #F3DDE2, sin borde */
export const uiChipClass = `${uiChipBase} font-medium text-chocolate-mid`;

/** Chip activo — borgoña + texto claro */
export const uiChipActiveClass = `${uiChipBase} ui-chip--active font-medium`;

/** Contenedor filtros categoría — dorado suave como la nav */
export const categoryFilterTrackClass = "category-filter-track";

/** Fila de chips alineados con separación uniforme */
export const filterChipRowClass = "filter-chip-row";

/** Fila de categorías — una sola línea, chips alineados */
export const categoryFilterChipRowClass =
  "filter-chip-row filter-chip-row--single-line";

/** Campo de búsqueda del catálogo */
export const catalogSearchFieldClass =
  "catalog-search-field w-full rounded-2xl py-3 pl-10 pr-4 text-base font-normal sm:py-3.5 sm:pl-11 sm:pr-5";

/** Chip dorado — categorías, accesos rápidos y filtros similares */
export function goldFilterChipClass(active: boolean): string {
  return `filter-chip filter-chip--gold btn-text topnav-link tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chocolate/12 focus-visible:ring-offset-2 ${
    active ? "filter-chip--active" : ""
  }`;
}

const ctaButtonBase =
  "btn-text btn-ring-gold btn-hover-lift inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-full text-sm active:translate-y-0 active:scale-[0.98]";

/** CTA principal (borgoña) — anillo dorado metálico */
export const primaryCtaClass = `${ctaButtonBase} bg-cta-warm text-on-cta-warm hover:bg-cta-warm-hover`;

/** Recuadro hero — borgoña (color del antiguo botón Ver catálogo) */
export const heroPanelClass = "hero-panel-burgundy";

const goldCtaBase = `${ctaButtonBase} btn-cta-gold`;

/** CTA dorado oro — p. ej. «Ver catálogo» en el hero */
export const goldCtaClass = goldCtaBase;

/** CTA dorado con padding horizontal amplio (hero) */
export const goldCtaHeroClass = `${goldCtaBase} px-8`;

/** CTA WhatsApp — verde oliva + anillo dorado */
export const whatsappCtaClass = `${ctaButtonBase} bg-whatsapp px-6 text-on-whatsapp hover:bg-whatsapp-hover`;

/** Marco de foto — borgoña + anillo dorado + movimiento al hover */
export const productPhotoFrameClass =
  "photo-hover-group bg-cta-warm btn-ring-gold overflow-hidden rounded-2xl";

/** Recorte interior de la foto (animación en la imagen) */
export const productPhotoInnerClass =
  "photo-hover-inner relative size-full overflow-hidden rounded-xl";

/** Contenedor de foto en catálogo */
export const catalogPhotoSlotClass = `catalog-product-image-slot group relative isolate w-full shrink-0 ${productPhotoFrameClass}`;

/** Botón secundario con contorno dorado */
export const secondaryOutlineCtaClass =
  "btn-text btn-secondary-outline btn-hover-lift active:translate-y-0 active:scale-[0.98]";

/** CTA secundario sobre foto oscura (p. ej. «Ver bandejas» en hero de producto) */
export const heroOnImageSecondaryCtaClass =
  `${ctaButtonBase} btn-hero-on-image-secondary px-6`;

/** Iconos secundarios — hover rosa suave de la paleta */
export const iconGhostBtnClass =
  "btn-icon-ghost tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chocolate/10 focus-visible:ring-offset-2";

/** Botón cerrar (X) — borgoña del hero «Repostería venezolana» */
export const panelCloseBtnClass =
  "btn-close-burgundy btn-hover-lift tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2";
