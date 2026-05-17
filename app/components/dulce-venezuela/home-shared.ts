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
  "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,248,220,0.95)_inset,0_0_0_2px_rgba(224,184,64,0.28),0_0_32px_-6px_rgba(224,184,64,0.48),0_16px_44px_-14px_rgba(120,90,30,0.26),0_4px_14px_-6px_rgba(61,40,23,0.12)]";

export const premiumEyebrowClass = "type-eyebrow-gold";

/** Rótulos dorados de la sección testimonios (más grandes y legibles) */
export const testimonialsEyebrowClass = "type-eyebrow-gold-lg";

export const premiumDisplayClass = "type-premium-display";

export const premiumProductTitleClass = "type-premium-product-title";

export const premiumProductDescClass = "type-premium-product-desc";

export const pricePremiumClass = "price-premium";
