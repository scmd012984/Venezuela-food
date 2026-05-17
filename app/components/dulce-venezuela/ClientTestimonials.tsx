import Image from "next/image";
import { Star } from "lucide-react";
import { FEATURED_STAR_TESTIMONIAL } from "@/lib/client-testimonials";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import {
  giftPanelClass,
  premiumDisplayClass,
  premiumEyebrowClass,
  premiumProductDescClass,
} from "./home-shared";

function FeaturedStars() {
  return (
    <div className="flex gap-1" role="img" aria-label="Valoración 5 sobre 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="size-5 shrink-0 fill-gold-bright text-gold sm:size-6"
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
      ))}
    </div>
  );
}

/** Testimonio estrella: foto emocional de celebración + cita destacada. */
export function ClientTestimonials() {
  const t = FEATURED_STAR_TESTIMONIAL;

  return (
    <section
      id="testimonios"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="testimonios-heading"
    >
      <div className="mb-8 text-center sm:mb-10">
        <p className={premiumEyebrowClass}>Momentos reales</p>
        <div className="premium-divider-gold mx-auto mt-2 mb-4" aria-hidden />
        <h2
          id="testimonios-heading"
          className={`${premiumDisplayClass} text-2xl sm:text-3xl md:text-[2.125rem]`}
        >
          Felicidad que se comparte
        </h2>
        <p className="type-premium-body mx-auto mt-3 max-w-2xl text-base sm:text-lg">
          Nuestros dulces no solo alimentan: acompañan bodas, cumpleaños y encuentros
          que se quedan en la memoria.
        </p>
      </div>

      <article
        className={`${giftPanelClass} overflow-hidden rounded-3xl`}
        aria-labelledby="featured-testimonial-quote"
      >
        <div className="grid lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          <div className="relative min-h-[16rem] w-full sm:min-h-[20rem] lg:min-h-[22rem]">
            <Image
              src={t.imageUrl}
              alt={t.imageDescription}
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={false}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_24%_18%,rgba(255,248,235,0.28)_0%,transparent_52%),linear-gradient(to_top,rgba(61,40,23,0.55)_0%,rgba(61,40,23,0.12)_38%,transparent_62%),linear-gradient(to_right,transparent_0%,rgba(61,40,23,0.08)_100%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-3 rounded-2xl ring-1 ring-gold-bright/35 sm:inset-4"
              aria-hidden
            />
            <p className="absolute bottom-4 left-4 right-4 z-[2] max-w-xs font-headline text-sm font-medium italic leading-snug text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-base">
              Celebrando con los tuyos
            </p>
          </div>

          <div className="flex flex-col justify-center gap-5 px-6 py-8 sm:gap-6 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <FeaturedStars />
            <blockquote className="relative">
              <span
                className="font-headline text-5xl leading-none text-gold-bright/35 select-none"
                aria-hidden
              >
                “
              </span>
              <p
                id="featured-testimonial-quote"
                className="font-headline -mt-4 text-xl font-medium italic leading-relaxed tracking-wide text-chocolate sm:text-2xl sm:leading-relaxed"
              >
                {t.quote}
              </p>
            </blockquote>
            <footer className="border-t border-gold-bright/25 pt-4">
              <p className="font-headline text-lg font-semibold text-chocolate-deep">
                {t.name}
              </p>
              <p className={`${premiumProductDescClass} mt-1 not-italic text-sm`}>
                {t.detail}
              </p>
            </footer>
          </div>
        </div>
      </article>
    </section>
  );
}
