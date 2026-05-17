import Link from "next/link";
import { ProductCascade } from "@/app/components/dulce-venezuela/ProductCascade";
import {
  BRAND_HERO_LEAD,
  BRAND_HERO_TITLE,
  BRAND_TAGLINE,
} from "@/lib/brand";
import {
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import type { CtaLink } from "./home-shared";
import {
  goldCtaHeroClass,
  heroPanelClass,
  premiumDisplayClass,
  premiumEyebrowClass,
  whatsappCtaClass,
} from "./home-shared";
import { WhatsAppBrandIcon } from "./WhatsAppBrandIcon";

/** Hero de entrada: marca, copy breve y acciones */
export function LandingHero() {
  const waContactHref = buildWhatsAppContactHref();
  const openWhatsAppInNewTab = isWhatsAppWebHref(waContactHref);
  const heroCtas: CtaLink[] = [
    {
      href: "#catalogo",
      label: "Ver catálogo",
      className: goldCtaHeroClass,
    },
    {
      href: waContactHref,
      label: "WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className: whatsappCtaClass,
    },
  ];

  return (
    <section className={heroPanelClass} aria-labelledby="hero-heading">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="hero-copy-stack order-2 flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:order-1 lg:px-10 lg:py-10">
          <p className={premiumEyebrowClass}>{BRAND_TAGLINE}</p>
          <div className="premium-divider-gold hero-panel-divider" aria-hidden />
          <h1
            id="hero-heading"
            className={`${premiumDisplayClass} hero-panel-title text-balance text-3xl leading-[1.12] sm:text-4xl sm:leading-[1.1] lg:text-[2.45rem] lg:leading-[1.08]`}
          >
            {BRAND_HERO_TITLE}
          </h1>
          <p className="hero-panel-body hero-panel-lead text-pretty text-base sm:text-lg">
            {BRAND_HERO_LEAD}
          </p>
          <div className="hero-panel-actions flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
        <div className="photo-hover-group group relative order-1 aspect-[16/11] min-h-[200px] w-full overflow-hidden sm:aspect-[16/10] sm:min-h-[240px] lg:aspect-auto lg:min-h-[300px]">
          <ProductCascade />
        </div>
      </div>
    </section>
  );
}
