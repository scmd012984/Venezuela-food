import Link from "next/link";
import { Mail, PartyPopper } from "lucide-react";
import {
  buildMesaDulceMailto,
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
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
      className={`${giftPanelClass} rounded-3xl px-6 py-7 sm:px-8 sm:py-8 ${cardHoverLiftClass}`}
      aria-labelledby="occasions-heading"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <PartyPopper
          className="size-10 shrink-0 text-gold-bright drop-shadow-[0_0_10px_rgba(224,184,64,0.5)] sm:size-12"
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className={testimonialsEyebrowClass}>Para celebrar</p>
          <div className="premium-divider-gold mt-2 mb-3" aria-hidden />
          <h2
            id="occasions-heading"
            className={`${premiumDisplayClass} text-2xl leading-[1.15] sm:text-3xl md:text-[2.125rem] md:leading-[1.12]`}
          >
            Preparamos tu mesa dulce
          </h2>
          <p className="type-premium-body mt-3 text-base sm:mt-4 sm:text-lg">
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
    </section>
  );
}
