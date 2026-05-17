export type CtaLink = {
  href: string;
  label: string;
  className: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
  icon?: "whatsapp" | "mail";
};

/** Tarjeta tipo regalo: borde dorado y elevación cálida */
export const giftPanelClass = "glass-panel glass-panel-gold shadow-card-soft";

/** Elevación al pasar el ratón — acento dorado */
export const cardHoverLiftClass =
  "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-gold-bright/45 hover:shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_14px_40px_-14px_rgba(120,90,30,0.22),0_4px_14px_-6px_rgba(61,40,23,0.1)]";

export const premiumEyebrowClass = "type-eyebrow-gold";

export const premiumDisplayClass = "type-premium-display";

export const premiumProductTitleClass = "type-premium-product-title";

export const premiumProductDescClass = "type-premium-product-desc";

export const pricePremiumClass = "price-premium";
