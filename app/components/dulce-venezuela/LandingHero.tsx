import Link from "next/link";
import { CatalogProductImage } from "@/app/components/dulce-venezuela/CatalogProductImage";
import {
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import { CATALOG_PRODUCTS } from "@/lib/catalog";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import type { CtaLink } from "./home-shared";
import {
  giftPanelClass,
  premiumDisplayClass,
  premiumEyebrowClass,
} from "./home-shared";
import { WhatsAppBrandIcon } from "./WhatsAppBrandIcon";

/** Hero de entrada: bloque claro con foto, copy breve y acciones */
export function LandingHero() {
  const heroProduct = CATALOG_PRODUCTS["tres-leches"];
  const waContactHref = buildWhatsAppContactHref();
  const openWhatsAppInNewTab = isWhatsAppWebHref(waContactHref);
  const heroCtas: CtaLink[] = [
    {
      href: "#catalogo",
      label: "Ver catálogo",
      className:
        "shadow-card-soft inline-flex h-12 min-h-12 items-center justify-center rounded-full bg-cta-warm px-8 text-sm font-semibold text-on-cta-warm ring-2 ring-gold-bright/65 transition duration-200 hover:-translate-y-0.5 hover:bg-cta-warm-hover hover:ring-gold-shine/80 hover:shadow-[0_12px_32px_-10px_rgba(196,29,82,0.48),0_0_22px_-4px_rgba(224,184,64,0.45)] active:scale-[0.98]",
    },
    {
      href: waContactHref,
      label: "WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className:
        "inline-flex h-12 min-h-12 items-center justify-center rounded-full border-[2.5px] border-gold-bright bg-white px-6 text-sm font-semibold text-chocolate shadow-[0_0_16px_-4px_rgba(224,184,64,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-gold-flare hover:bg-gold-soft hover:shadow-[0_0_24px_-4px_rgba(224,184,64,0.5)] active:scale-[0.98]",
    },
  ];

  return (
    <section
      className={`${giftPanelClass} overflow-hidden rounded-3xl`}
      aria-labelledby="hero-heading"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 flex flex-col justify-center gap-5 px-6 py-8 sm:gap-6 sm:px-10 sm:py-10 lg:order-1 lg:px-12 lg:py-14">
          <p className={premiumEyebrowClass}>Regalos & caprichos</p>
          <div className="premium-divider-gold" aria-hidden />
          <h1
            id="hero-heading"
            className={`${premiumDisplayClass} text-balance text-3xl leading-[1.12] sm:text-4xl sm:leading-[1.1] lg:text-[2.45rem] lg:leading-[1.08]`}
          >
            Repostería venezolana, hecha hoy.
          </h1>
          <p className="type-premium-body max-w-md text-base sm:text-lg">
            Cada pieza es un detalle para consentir — para regalar o para un
            capricho solo tuyo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {heroCtas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.target}
                rel={cta.rel}
                className={cta.className}
              >
                {cta.icon === "whatsapp" ? (
                  <WhatsAppBrandIcon className="mr-1.5 size-[22px] shrink-0" />
                ) : null}
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="group relative order-1 aspect-[16/11] min-h-[200px] w-full overflow-hidden sm:aspect-[16/10] sm:min-h-[240px] lg:aspect-auto lg:min-h-[300px]">
          <CatalogProductImage
            productId="tres-leches"
            src={heroProduct.imageUrl}
            alt={catalogProductImageAlt(heroProduct, "tres-leches")}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            variant="hero"
          />
        </div>
      </div>
    </section>
  );
}
