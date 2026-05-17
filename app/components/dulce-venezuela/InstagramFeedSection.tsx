import { instagramFeedImageAlt, type InstagramFeedData } from "@/lib/instagram-feed";
import {
  goldFilterChipClass,
  productPhotoFrameClass,
  siteSectionHeaderClass,
  siteSectionLeadClass,
  siteSectionTitleClass,
  productPhotoInnerClass,
} from "./home-shared";

const PLACEHOLDER_SLOTS = 6;

/** Icono estilo cámara / red social (lucide no exporta marca Instagram). */
function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

type InstagramFeedSectionProps = {
  data: InstagramFeedData;
};

/**
 * Cuadrícula compacta con las últimas fotos de Instagram (compra por los ojos).
 * Sin API configurada muestra huecos suaves + CTA al perfil.
 */
export function InstagramFeedSection({ data }: InstagramFeedSectionProps) {
  const { items, profileUrl, handle } = data;
  const hasPhotos = items.length > 0;

  return (
    <section
      id="instagram"
      className="scroll-mt-24 border-t border-gold-bright/28 pb-10 pt-1 sm:scroll-mt-28 sm:pb-12"
      aria-labelledby="instagram-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <header className={`${siteSectionHeaderClass} min-w-0 flex-1`}>
          <h2 id="instagram-heading" className={siteSectionTitleClass}>
            Recién salido del horno
          </h2>
          <p className={`${siteSectionLeadClass} max-w-xl`}>
            {hasPhotos
              ? "Lo último de nuestro horno en Málaga — toca una foto para verla en Instagram."
              : "Síguenos en Instagram para ver el día a día mientras conectamos el feed aquí."}
          </p>
        </header>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${goldFilterChipClass(false)} shrink-0 gap-1.5 self-start sm:self-auto`}
        >
          <InstagramGlyph className="size-5 shrink-0 text-chocolate-ink" />
          @{handle}
        </a>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-3 md:grid-cols-6">
        {hasPhotos
          ? items.map((item, index) => (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${productPhotoFrameClass} group relative aspect-square p-1 hover:bg-cta-warm-hover`}
              >
                <div className={`${productPhotoInnerClass} aspect-square`}>
                  {/* CDN de Instagram: <img> evita lista fija de hostnames en next/image */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- URLs dinámicas del CDN de Instagram */}
                  <img
                    src={item.imageSrc}
                    alt={instagramFeedImageAlt({
                      handle,
                      caption: item.caption,
                      position: index + 1,
                      total: items.length,
                    })}
                    className="photo-hover-img size-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="sr-only">Ver publicación en Instagram</span>
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-chocolate-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              </a>
            ))
          : Array.from({ length: PLACEHOLDER_SLOTS }, (_, i) => (
              <a
                key={`ph-${i}`}
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${productPhotoFrameClass} photo-hover-group relative flex aspect-square items-center justify-center p-2 hover:bg-cta-warm-hover`}
              >
                <InstagramGlyph className="size-8 text-on-cta-warm/70 sm:size-9" />
                <span className="sr-only">Abrir perfil de Instagram @{handle}</span>
              </a>
            ))}
      </div>
    </section>
  );
}
