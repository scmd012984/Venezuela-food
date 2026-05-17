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
  premiumEyebrowClass,
  type CtaLink,
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
      className:
        "shadow-card-soft inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta-warm px-6 text-sm font-semibold text-on-cta-warm ring-1 ring-white/25 transition duration-200 hover:-translate-y-0.5 hover:bg-cta-warm-hover hover:shadow-[0_12px_32px_-10px_rgba(196,29,82,0.48)] hover:ring-white/35 active:translate-y-0 active:scale-[0.98]",
    },
    {
      href: waContactHref,
      label: "Por WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className:
        "inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-cta-warm/35 bg-white px-6 text-sm font-semibold text-cta-warm shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cta-warm/55 hover:bg-cta-warm-soft hover:shadow-md active:translate-y-0 active:scale-[0.98] dark:border-cta-warm/40 dark:bg-slate-950 dark:hover:bg-slate-900",
    },
  ];

  return (
    <section
      className={`${giftPanelClass} rounded-3xl px-6 py-7 sm:px-8 sm:py-8 ${cardHoverLiftClass}`}
      aria-labelledby="occasions-heading"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <PartyPopper
          className="size-10 shrink-0 text-gold-bright sm:size-12"
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className={premiumEyebrowClass}>Para celebrar</p>
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
