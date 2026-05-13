export type CtaLink = {
  href: string;
  label: string;
  className: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
  icon?: "whatsapp" | "mail";
};

/** Elevación al pasar el ratón: sombra más definida, menos “nublado” */
export const cardHoverLiftClass =
  "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/22 hover:shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_12px_36px_-14px_rgba(12,36,99,0.16),0_4px_14px_-6px_rgba(28,29,38,0.08)] dark:hover:border-slate-500/55 dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_16px_40px_-12px_rgba(0,0,0,0.45)]";
