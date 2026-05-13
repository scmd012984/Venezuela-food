import Image from "next/image";
import { AddToCartButton } from "@/app/components/cart/AddToCartButton";
import { CATALOG_PRODUCTS, type CatalogProductBadge } from "@/lib/catalog";
import { formatEuroES } from "@/lib/format-euro";
import { cardHoverLiftClass } from "./home-shared";

/** Contenedor de foto: misma altura en tarjetas lista + recorte limpio */
const catalogProductImageSlotBase =
  "catalog-product-image-slot relative isolate w-full shrink-0 overflow-hidden bg-slate-200/80 dark:bg-slate-800/90";

const catalogProductThumbHeight = "h-56 sm:h-64 md:h-64";

/**
 * Misma gradación y encuadre en todas las fotos del catálogo (relleno total + cover).
 */
const catalogPhotoClass =
  "h-full w-full min-h-0 min-w-0 max-h-none object-cover object-center brightness-[1.04] contrast-[1.02] saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]";

/** Precio: mismo bloque en todas las tarjetas para lectura rápida */
const priceDisplayClass =
  "inline-flex min-h-[3.25rem] min-w-[6.5rem] items-center justify-center rounded-2xl border border-primary/25 bg-white px-4 text-xl font-extrabold tabular-nums tracking-tight text-primary shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_8px_-2px_rgba(12,36,99,0.12)] sm:min-w-[7rem] sm:text-2xl dark:border-primary/35 dark:bg-slate-900 dark:text-slate-50 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]";

/** Etiquetas de confianza / novedad para orientar la compra */
const BADGE_LABEL: Record<CatalogProductBadge, string> = {
  nuevo: "Nuevo",
  masVendido: "Más vendido",
  favorito: "Favorito",
};

function productBadgeClass(kind: CatalogProductBadge): string {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow-md ring-1 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-[11px]";
  if (kind === "nuevo") {
    return `${base} bg-emerald-600/95 text-white ring-white/25`;
  }
  if (kind === "masVendido") {
    return `${base} bg-amber-500/95 text-white ring-white/30`;
  }
  return `${base} bg-secondary-container text-on-secondary-container ring-black/12`;
}

/** Velo ligero cálido + viñeta para igualar iluminación entre fuentes distintas */
function CatalogImageVeil() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(24,18,14,0.12)_82%,rgba(12,8,6,0.22)_100%),linear-gradient(to_top,rgba(28,20,16,0.12)_0%,transparent_45%,rgba(255,248,240,0.1)_100%)]"
      aria-hidden
    />
  );
}

function ProductBadgeStrip({
  badges,
}: {
  badges: readonly CatalogProductBadge[];
}) {
  if (badges.length === 0) return null;
  return (
    <ul
      className="flex max-w-[min(100%,22rem)] flex-wrap gap-2"
      aria-label="Destacados del producto"
    >
      {badges.map((kind) => (
        <li key={kind}>
          <span className={productBadgeClass(kind)}>{BADGE_LABEL[kind]}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductGrid() {
  const tresLeches = CATALOG_PRODUCTS["tres-leches"];
  const cachitos = CATALOG_PRODUCTS.cachitos;
  const quesillo = CATALOG_PRODUCTS.quesillo;
  const golfeados = CATALOG_PRODUCTS.golfeados;

  return (
    <section
      id="catalogo"
      className="scroll-mt-24 grid grid-cols-1 gap-8 pb-14 sm:gap-10 sm:scroll-mt-28 md:grid-cols-12 md:gap-12 md:pb-16"
      aria-label="Catálogo de productos"
    >
      <div
        id="favoritos"
        className={`catalog-product-image-slot glass-panel shadow-card-soft group relative min-h-[22rem] h-[min(70vh,32rem)] overflow-hidden rounded-3xl sm:min-h-[26rem] md:col-span-8 md:h-[500px] md:min-h-0 ${cardHoverLiftClass}`}
      >
        <Image
          src={tresLeches.imageUrl}
          alt={tresLeches.name}
          fill
          className={catalogPhotoClass}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 800px"
          priority
        />
        <CatalogImageVeil />
        <div className="absolute inset-0 bg-linear-to-t from-[#040814]/90 via-[#040814]/35 via-45% to-transparent" />
        <div className="absolute inset-0 bg-linear-to-br from-black/25 to-transparent opacity-80" />
        <div className="absolute left-4 top-4 z-[12] sm:left-5 sm:top-5">
          <ProductBadgeStrip badges={tresLeches.badges} />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div className="max-w-xl space-y-3 rounded-3xl border border-white/25 bg-black/50 px-5 py-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md backdrop-saturate-125 sm:space-y-3 sm:px-6 sm:py-5">
            <h3 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-4xl">
              {tresLeches.name}
            </h3>
            <p className="max-w-md text-base font-normal leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg sm:leading-relaxed">
              {tresLeches.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-row flex-wrap items-center justify-end gap-3 sm:gap-4">
            <span className={priceDisplayClass}>
              {formatEuroES(tresLeches.unitPriceEuro)}
            </span>
            <AddToCartButton productId="tres-leches" />
          </div>
        </div>
      </div>

      <div
        className={`glass-panel shadow-card-soft group relative flex flex-col overflow-hidden rounded-3xl md:col-span-4 ${cardHoverLiftClass}`}
      >
        <div
          className={`${catalogProductImageSlotBase} ${catalogProductThumbHeight}`}
        >
          <Image
            src={cachitos.imageUrl}
            alt={cachitos.name}
            fill
            className={catalogPhotoClass}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          />
          <CatalogImageVeil />
          <div className="absolute left-3 top-3 z-[2] sm:left-4 sm:top-4">
            <ProductBadgeStrip badges={cachitos.badges} />
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-4 p-5 sm:p-8">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              {cachitos.name}
            </h3>
            <p className="mt-2 text-[15px] font-normal leading-relaxed text-on-surface-variant sm:text-base">
              {cachitos.description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className={priceDisplayClass}>
              {formatEuroES(cachitos.unitPriceEuro)}
            </span>
            <AddToCartButton productId="cachitos" />
          </div>
        </div>
      </div>

      <div
        className={`glass-panel shadow-card-soft group relative flex flex-col overflow-hidden rounded-3xl md:col-span-4 ${cardHoverLiftClass}`}
      >
        <div
          className={`${catalogProductImageSlotBase} ${catalogProductThumbHeight}`}
        >
          <Image
            src={quesillo.imageUrl}
            alt={quesillo.name}
            fill
            className={catalogPhotoClass}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          />
          <CatalogImageVeil />
          <div className="absolute left-3 top-3 z-[2] sm:left-4 sm:top-4">
            <ProductBadgeStrip badges={quesillo.badges} />
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-4 p-5 sm:p-8">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              {quesillo.name}
            </h3>
            {quesillo.description ? (
              <p className="mt-2 text-[15px] font-normal leading-relaxed text-on-surface-variant sm:text-base">
                {quesillo.description}
              </p>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className={priceDisplayClass}>
              {formatEuroES(quesillo.unitPriceEuro)}
            </span>
            <AddToCartButton productId="quesillo" />
          </div>
        </div>
      </div>

      <div
        className={`glass-panel shadow-card-soft group relative overflow-hidden rounded-3xl md:col-span-8 md:min-h-[24rem] lg:min-h-[26rem] ${cardHoverLiftClass}`}
      >
        <div className="flex flex-col md:absolute md:inset-0 md:min-h-[24rem] md:flex-row md:items-stretch lg:min-h-[26rem]">
          <div className="z-10 order-1 flex w-full flex-col justify-center gap-4 p-6 sm:gap-5 sm:p-8 md:order-none md:min-h-0 md:w-1/2 md:justify-between md:gap-6 md:p-10 lg:p-12">
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-primary sm:text-3xl">
                {golfeados.name}
              </h3>
              <p className="text-[15px] font-normal leading-relaxed text-on-surface-variant sm:text-base">
                {golfeados.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 md:mt-0">
              <span className={priceDisplayClass}>
                {formatEuroES(golfeados.unitPriceEuro)}
              </span>
              <AddToCartButton productId="golfeados" />
            </div>
          </div>
          <div
            className={`${catalogProductImageSlotBase} order-2 h-56 w-full shrink-0 sm:h-64 md:order-none md:h-full md:min-h-0 md:w-1/2 md:flex-1`}
          >
            <Image
              src={golfeados.imageUrl}
              alt={golfeados.name}
              fill
              className={catalogPhotoClass}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
            />
            <CatalogImageVeil />
            <div className="absolute left-3 top-3 z-[2] sm:left-4 sm:top-4">
              <ProductBadgeStrip badges={golfeados.badges} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
