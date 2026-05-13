import Image from "next/image";
import Link from "next/link";
import {
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import { CATALOG_PRODUCTS } from "@/lib/catalog";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import type { CtaLink } from "./home-shared";
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
        "shadow-card-soft inline-flex h-12 min-h-12 items-center justify-center rounded-full bg-cta-warm px-8 text-sm font-semibold text-on-cta-warm ring-1 ring-white/25 transition duration-200 hover:-translate-y-0.5 hover:bg-cta-warm-hover hover:shadow-[0_12px_32px_-10px_rgba(196,29,82,0.48)] active:scale-[0.98]",
    },
    {
      href: waContactHref,
      label: "WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className:
        "inline-flex h-12 min-h-12 items-center justify-center rounded-full border-2 border-cta-warm/32 bg-white px-6 text-sm font-semibold text-cta-warm shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cta-warm/50 hover:bg-cta-warm-soft active:scale-[0.98] dark:bg-slate-900/70 dark:hover:bg-slate-800/90",
    },
  ];

  return (
    <section
      className="overflow-hidden rounded-3xl border border-outline-variant/55 bg-white shadow-card-soft ring-1 ring-black/[0.03] dark:border-slate-600/50 dark:bg-slate-950 dark:ring-white/[0.06]"
      aria-labelledby="hero-heading"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 flex flex-col justify-center gap-5 px-6 py-8 sm:gap-6 sm:px-10 sm:py-10 lg:order-1 lg:px-12 lg:py-14">
          <h1
            id="hero-heading"
            className="font-headline text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-4xl sm:leading-[1.1] lg:text-[2.45rem] lg:leading-[1.08]"
          >
            Repostería venezolana, hecha hoy.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Para llevar y mesas dulces bajo encargo.
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
        <div className="relative order-1 aspect-[16/11] min-h-[200px] w-full sm:aspect-[16/10] sm:min-h-[240px] lg:aspect-auto lg:min-h-[300px]">
          <Image
            src={heroProduct.imageUrl}
            alt={catalogProductImageAlt(heroProduct)}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/10"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
