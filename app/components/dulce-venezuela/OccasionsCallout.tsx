import Link from "next/link";
import { Mail, PartyPopper } from "lucide-react";
import {
  buildMesaDulceMailto,
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { cardHoverLiftClass, type CtaLink } from "./home-shared";
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
        "shadow-card-soft inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-container px-6 text-sm font-semibold text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md hover:ring-white/25 active:translate-y-0 active:scale-[0.98]",
    },
    {
      href: waContactHref,
      label: "Por WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className:
        "inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-white px-6 text-sm font-semibold text-primary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-container-low hover:shadow-md active:translate-y-0 active:scale-[0.98] dark:border-primary/35 dark:bg-slate-950 dark:hover:bg-slate-900",
    },
  ];

  return (
    <section
      className={`glass-panel shadow-card-soft rounded-3xl px-6 py-7 sm:px-8 sm:py-8 ${cardHoverLiftClass}`}
      aria-labelledby="occasions-heading"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <PartyPopper
          className="size-10 shrink-0 text-primary sm:size-12"
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <h2
            id="occasions-heading"
            className="text-xl font-semibold leading-snug tracking-tight text-primary sm:text-2xl"
          >
            Preparamos tu mesa dulce
          </h2>
          <p className="mt-3 text-base font-normal leading-relaxed text-on-surface sm:text-lg sm:leading-relaxed">
            Diseñamos bandejas y mesas de postres para{" "}
            <strong className="font-semibold text-on-surface">bodas</strong>,{" "}
            <strong className="font-semibold text-on-surface">cumpleaños</strong>,
            una{" "}
            <strong className="font-semibold text-on-surface">reunión</strong> con
            amigos,{" "}
            <strong className="font-semibold text-on-surface">celebraciones</strong>{" "}
            en familia,{" "}
            <strong className="font-semibold text-on-surface">eventos</strong> más
            formales y, en general,{" "}
            <strong className="font-semibold text-on-surface">
              todo tipo de celebración
            </strong>
            . Cuéntanos fecha, número de comensales y estilo, y te proponemos una
            selección equilibrada de nuestros dulces.
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
