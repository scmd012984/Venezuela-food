import Image from "next/image";
import { Star } from "lucide-react";
import {
  CLIENT_TESTIMONIALS,
  FEATURED_STAR_TESTIMONIAL,
  type ClientTestimonial,
} from "@/lib/client-testimonials";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import {
  cardHoverLiftClass,
  giftPanelClass,
  premiumDisplayClass,
  testimonialsEyebrowClass,
  premiumProductDescClass,
} from "./home-shared";

function StarRating({ size = "md" }: { size?: "md" | "lg" }) {
  const starClass =
    size === "lg"
      ? "size-5 fill-gold-bright text-gold drop-shadow-[0_0_6px_rgba(224,184,64,0.55)] sm:size-6"
      : "size-4 fill-gold-bright text-gold drop-shadow-[0_0_4px_rgba(224,184,64,0.45)]";
  return (
    <div className="flex gap-0.5" role="img" aria-label="Valoración 5 sobre 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${starClass} shrink-0`}
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: ClientTestimonial }) {
  return (
    <article
      className={`${giftPanelClass} flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl ${cardHoverLiftClass}`}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-vanilla-muted">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.imageDescription}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-chocolate-deep/25 via-transparent to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-6">
        <StarRating />
        <blockquote className="flex-1">
          <p className="text-[15px] leading-relaxed text-on-surface sm:text-base">
            “{testimonial.quote}”
          </p>
        </blockquote>
        <footer className="border-gold-separator border-gold-separator-t pt-3">
          <p className="font-headline text-base font-semibold text-chocolate">
            {testimonial.name}
          </p>
          <p className={`${premiumProductDescClass} mt-0.5 not-italic text-sm`}>
            {testimonial.detail}
          </p>
        </footer>
      </div>
    </article>
  );
}

/** Testimonio estrella + rejilla de apoyo: claridad organizada y momento emocional. */
export function ClientTestimonials() {
  const featured = FEATURED_STAR_TESTIMONIAL;

  return (
    <section
      id="testimonios"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="testimonios-heading"
    >
      <div className="mb-8 text-center sm:mb-10">
        <p className={testimonialsEyebrowClass}>Momentos reales</p>
        <div className="premium-divider-gold mx-auto mt-2 mb-4" aria-hidden />
        <h2
          id="testimonios-heading"
          className={`${premiumDisplayClass} text-2xl sm:text-3xl md:text-[2.125rem]`}
        >
          Felicidad que se comparte
        </h2>
        <p className="type-premium-body leading-body mx-auto mt-3 max-w-2xl text-base sm:text-lg">
          Nuestros dulces acompañan bodas, cumpleaños y encuentros que se quedan
          en la memoria.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <article
          className={`${giftPanelClass} overflow-hidden rounded-2xl sm:rounded-3xl`}
          aria-labelledby="featured-testimonial-quote"
        >
          <div className="border-gold-separator border-gold-separator-b grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative min-h-[14rem] w-full sm:min-h-[18rem] lg:min-h-[20rem]">
              <Image
                src={featured.imageUrl}
                alt={featured.imageDescription}
                fill
                className="object-cover object-[center_38%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-chocolate-deep/40 via-chocolate-deep/5 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-chocolate-deep/10"
                aria-hidden
              />
              <div
                className="ring-gold-frame pointer-events-none absolute inset-3 rounded-xl sm:inset-4"
                aria-hidden
              />
              <p className="absolute bottom-3 left-3 z-[1] rounded-full bg-chocolate-deep/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-soft backdrop-blur-sm sm:bottom-4 sm:left-4">
                Celebrando con los tuyos
              </p>
            </div>

            <div className="border-gold-separator flex flex-col justify-center gap-4 border-gold-separator-t px-5 py-6 sm:gap-5 sm:px-8 sm:py-8 lg:border-t-0 lg:border-l lg:border-gold-separator-l">
              <StarRating size="lg" />
              <blockquote>
                <p
                  id="featured-testimonial-quote"
                  className="font-headline text-lg font-medium italic leading-relaxed tracking-wide text-chocolate sm:text-xl"
                >
                  “{featured.quote}”
                </p>
              </blockquote>
              <footer className="border-gold-separator border-gold-separator-t pt-3">
                <p className="font-headline text-base font-semibold text-chocolate-deep sm:text-lg">
                  {featured.name}
                </p>
                <p className={`${premiumProductDescClass} mt-0.5 not-italic text-sm`}>
                  {featured.detail}
                </p>
              </footer>
            </div>
          </div>
        </article>

        <div>
          <p className={`${testimonialsEyebrowClass} mb-4 text-center sm:mb-5`}>
            Más historias
          </p>
          <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:gap-6 md:grid-cols-3 md:gap-6">
            {CLIENT_TESTIMONIALS.map((t) => (
              <li key={t.id} className="min-w-0">
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
