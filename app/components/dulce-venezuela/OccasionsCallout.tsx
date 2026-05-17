import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { CatalogProductImage } from "@/app/components/dulce-venezuela/CatalogProductImage";
import {
  buildMesaDulceMailto,
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import {
  MESA_DULCE_AMBIENT_IMAGE,
  MESA_DULCE_HERO_PRODUCT,
  MESA_DULCE_HERO_PRODUCT_ID,
  MESA_DULCE_IMAGE_CAPTION,
} from "@/lib/mesa-dulce-visual";
import {
  cardHoverLiftClass,
  giftPanelClass,
  premiumDisplayClass,
  testimonialsEyebrowClass,
  primaryCtaClass,
  type CtaLink,
  whatsappCtaClass,
} from "./home-shared";
import { WhatsAppBrandIcon } from "./WhatsAppBrandIcon";

export function OccasionsCallout() {
  const mailtoHref = buildMesaDulceMailto();
  const waContactHref = buildWhatsAppContactHref();
  const openWhatsAppInNewTab = isWhatsAppWebHref(waContactHref);
  const occasionCtas: CtaLink[] = [
    {
      href: mailtoHref,
      label: "Pedir presupuesto",
      icon: "mail",
      className: `${primaryCtaClass} px-6`,
    },
    {
      href: waContactHref,
      label: "Por WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className: whatsappCtaClass,
    },
  ];

  return (
    <section
      className={`${giftPanelClass} overflow-hidden rounded-3xl ${cardHoverLiftClass}`}
      aria-labelledby="occasions-heading"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative order-2 flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 lg:order-1 lg:px-10 lg:py-10 xl:px-12">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden lg:block"
            aria-hidden
          >
            <Image
              src={MESA_DULCE_AMBIENT_IMAGE}
              alt=""
              fill
              sizes="50vw"
              className="scale-110 object-cover object-[46%_38%] opacity-[0.22] blur-2xl saturate-[1.08] lg:opacity-[0.28] lg:blur-3xl"
            />
            <div className="absolute inset-0 bg-linear-to-br from-ivory-bright/92 via-surface-elevated/88 to-ivory-soft/90 backdrop-blur-[2px] lg:from-ivory-bright/94 lg:via-surface-elevated/90 lg:to-ivory/85" />
          </div>

          <div className="relative z-[1] min-w-0">
            <p className={testimonialsEyebrowClass}>Para celebrar</p>
            <div className="premium-divider-gold mt-2 mb-3" aria-hidden />
            <h2
              id="occasions-heading"
              className={`${premiumDisplayClass} text-2xl leading-[1.15] sm:text-3xl md:text-[2.125rem] md:leading-[1.12]`}
            >
              Preparamos tu mesa dulce
            </h2>
            <p className="type-premium-body leading-body mt-3 text-base sm:mt-4 sm:text-lg">
              Diseñamos bandejas y{" "}
              <strong className="font-semibold text-on-surface">mesas de postres</strong>{" "}
              para{" "}
              <strong className="font-semibold text-on-surface">bodas</strong>,{" "}
              <strong className="font-semibold text-on-surface">cumpleaños</strong>,
              reuniones con amigos, celebraciones en familia, eventos más formales y
              cualquier otra ocasión. Cuéntanos{" "}
              <strong className="font-semibold text-on-surface">
                fecha, número de comensales y estilo
              </strong>
              , y te proponemos una selección equilibrada de nuestros{" "}
              <strong className="font-semibold text-on-surface">dulces</strong>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              {occasionCtas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  target={cta.target}
                  rel={cta.rel}
                  className={cta.className}
                >
                  {cta.icon === "mail" ? (
                    <Mail
                      className="size-[22px] shrink-0"
                      strokeWidth={LUCIDE_ICON_STROKE}
                      aria-hidden
                    />
                  ) : null}
                  {cta.icon === "whatsapp" ? (
                    <WhatsAppBrandIcon className="size-[22px] shrink-0" />
                  ) : null}
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[min(52vw,17.5rem)] w-full overflow-hidden sm:min-h-[20rem] lg:order-2 lg:min-h-[22rem] xl:min-h-[24rem]">
          <CatalogProductImage
            productId={MESA_DULCE_HERO_PRODUCT_ID}
            src={MESA_DULCE_HERO_PRODUCT.imageUrl}
            alt={catalogProductImageAlt(
              MESA_DULCE_HERO_PRODUCT,
              MESA_DULCE_HERO_PRODUCT_ID,
            )}
            sizes="(max-width: 1024px) 100vw, 50vw"
            variant="hero"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-chocolate-deep/35 via-transparent to-transparent lg:bg-linear-to-l lg:from-chocolate-deep/20 lg:via-transparent lg:to-transparent"
            aria-hidden
          />
          <div
            className="ring-gold-frame pointer-events-none absolute inset-3 rounded-2xl sm:inset-4"
            aria-hidden
          />

          <div className="mesa-dulce-caption absolute bottom-3 left-3 z-[2] max-w-[min(100%,15rem)] rounded-full px-3.5 py-2 backdrop-blur-md sm:bottom-4 sm:left-4 sm:max-w-none sm:px-4 sm:py-2.5">
            <p className="mesa-dulce-caption-text text-center text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.12em]">
              {MESA_DULCE_IMAGE_CAPTION}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
