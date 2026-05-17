import Image from "next/image";
import { Star } from "lucide-react";
import { CLIENT_TESTIMONIALS } from "@/lib/client-testimonials";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { cardHoverLiftClass, giftPanelClass, premiumDisplayClass, premiumEyebrowClass } from "./home-shared";

function FiveStars() {
  return (
    <div className="flex gap-0.5" aria-label="Valoración 5 sobre 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="size-[1.05rem] shrink-0 fill-amber-500 text-amber-500 sm:size-[1.125rem]"
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
      ))}
    </div>
  );
}

/** Opiniones con foto y 5 estrellas para generar confianza. */
export function ClientTestimonials() {
  return (
    <section
      id="testimonios"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="testimonios-heading"
    >
      <div className="mb-8 text-center sm:mb-10">
        <p className={premiumEyebrowClass}>Confianza</p>
        <div className="premium-divider-gold mx-auto mt-2 mb-4" aria-hidden />
        <h2
          id="testimonios-heading"
          className={`${premiumDisplayClass} text-2xl sm:text-3xl md:text-[2.125rem]`}
        >
          Lo que dicen nuestros clientes
        </h2>
        <p className="type-premium-body mx-auto mt-3 max-w-2xl text-base sm:text-lg">
          Experiencias reales con nuestros dulces: celebraciones, encargos y mesas
          dulces que dejan huella.
        </p>
      </div>

      <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:gap-7 md:grid-cols-3 md:gap-8">
        {CLIENT_TESTIMONIALS.map((t) => (
          <li key={t.id} className="min-w-0">
            <article
              className={`${giftPanelClass} flex h-full flex-col overflow-hidden rounded-3xl ${cardHoverLiftClass}`}
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-surface-container">
                <Image
                  src={t.imageUrl}
                  alt={t.imageDescription}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-6">
                <FiveStars />
                <blockquote className="flex-1">
                  <p className="text-[15px] font-normal leading-relaxed text-on-surface sm:text-base sm:leading-relaxed">
                    “{t.quote}”
                  </p>
                </blockquote>
                <footer className="border-t border-outline-variant/40 pt-3 dark:border-slate-600/50">
                  <p className="font-semibold text-on-surface">{t.name}</p>
                  <p className="mt-0.5 text-sm text-on-surface-variant">{t.detail}</p>
                </footer>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
