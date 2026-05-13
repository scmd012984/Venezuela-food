import { instagramFeedImageAlt, type InstagramFeedData } from "@/lib/instagram-feed";

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
      className="scroll-mt-24 border-t border-outline-variant/40 pb-16 pt-10 sm:scroll-mt-28 sm:pb-20 sm:pt-12 md:pt-14 dark:border-slate-600/40"
      aria-labelledby="instagram-heading"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <h2
            id="instagram-heading"
            className="font-headline text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
          >
            Recién salido del horno (Instagram)
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            {hasPhotos
              ? "Las últimas fotos de nuestros dulces y celebraciones. Toca una imagen para verla en Instagram."
              : "Conecta tu cuenta profesional para mostrar aquí las fotos más recientes. Mientras tanto, síguenos en Instagram para ver el día a día."}
          </p>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border-2 border-primary/25 bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:bg-surface-container-low sm:self-auto dark:border-slate-600/50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <InstagramGlyph className="size-5 shrink-0" />
          @{handle}
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3 md:grid-cols-6">
        {hasPhotos
          ? items.map((item, index) => (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-outline-variant/45 bg-surface-container shadow-sm ring-1 ring-black/[0.03] transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-600/50 dark:ring-white/[0.05]"
              >
                {/* CDN de Instagram: <img> evita lista fija de hostnames en next/image */}
                <img
                  src={item.imageSrc}
                  alt={instagramFeedImageAlt({
                    handle,
                    caption: item.caption,
                    position: index + 1,
                    total: items.length,
                  })}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">Ver publicación en Instagram</span>
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden
                />
              </a>
            ))
          : Array.from({ length: PLACEHOLDER_SLOTS }, (_, i) => (
              <a
                key={`ph-${i}`}
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-dashed border-outline-variant/55 bg-linear-to-br from-cta-warm-soft/80 via-surface-container-low to-surface-container transition hover:border-cta-warm/40 hover:shadow-sm dark:border-slate-600/55 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-900"
              >
                <InstagramGlyph className="size-8 text-cta-warm/50 sm:size-9" />
                <span className="sr-only">Abrir perfil de Instagram @{handle}</span>
              </a>
            ))}
      </div>
    </section>
  );
}
