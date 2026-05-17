"use client";

import { useMemo } from "react";
import { AddToCartButton } from "@/app/components/cart/AddToCartButton";
import { CatalogProductImage } from "@/app/components/dulce-venezuela/CatalogProductImage";
import {
  CATALOG_PRODUCTS,
  type CatalogProductBadge,
  type CatalogProductId,
} from "@/lib/catalog";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import { formatEuroES } from "@/lib/format-euro";
import {
  cardHoverLiftClass,
  giftPanelClass,
  premiumProductDescClass,
  premiumProductTitleClass,
  pricePremiumClass,
} from "./home-shared";
import { useCatalogSearch } from "./catalog-search-context";

/** Contenedor de foto: misma altura en tarjetas lista + recorte limpio */
const catalogProductImageSlotBase =
  "catalog-product-image-slot relative isolate w-full shrink-0 overflow-hidden bg-slate-200/80 dark:bg-slate-800/90";

const catalogProductThumbHeight = "h-56 sm:h-64 md:h-64";

function matchHighlightClass(active: boolean): string {
  return active
    ? "z-[2] ring-[3px] ring-gold-bright ring-offset-2 ring-offset-background shadow-[0_0_0_2px_rgba(250,240,200,0.5),0_0_28px_-5px_rgba(224,184,64,0.5)] transition-shadow duration-300"
    : "";
}

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
    return `${base} bg-chocolate text-gold-soft ring-2 ring-gold-bright/70 shadow-[0_2px_12px_rgba(61,40,23,0.35),0_0_14px_-4px_rgba(224,184,64,0.35)]`;
  }
  return `${base} bg-gold-soft/95 text-chocolate ring-2 ring-gold-bright/80 shadow-[0_1px_8px_rgba(120,90,30,0.2),0_0_14px_-4px_rgba(224,184,64,0.4)]`;
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
  const { query, matchingIds } = useCatalogSearch();
  const q = query.trim();
  const matchSet = useMemo(() => new Set(matchingIds), [matchingIds]);
  const active = (id: CatalogProductId) => q.length > 0 && matchSet.has(id);

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
      {q.length > 0 && matchingIds.length === 0 ? (
        <p
          className="col-span-full rounded-2xl border border-outline-variant/50 bg-surface-container-low/90 px-4 py-3 text-center text-sm text-on-surface-variant md:col-span-12"
          role="status"
          aria-live="polite"
        >
          No encontramos coincidencias para{" "}
          <span className="font-semibold text-on-surface">«{query.trim()}»</span>.
          Prueba otras palabras o navega por las tarjetas.
        </p>
      ) : null}
      <div
        id="favoritos"
        className={`catalog-product-image-slot ${giftPanelClass} group relative min-h-[22rem] h-[min(70vh,32rem)] overflow-hidden rounded-3xl sm:min-h-[26rem] md:col-span-8 md:h-[500px] md:min-h-0 ${cardHoverLiftClass} ${matchHighlightClass(active("tres-leches"))}`}
      >
        <CatalogProductImage
          productId="tres-leches"
          src={tresLeches.imageUrl}
          alt={catalogProductImageAlt(tresLeches, "tres-leches")}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 800px"
          priority
          variant="card"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[55%] bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,rgba(255,252,245,0.42)_0%,rgba(255,235,200,0.12)_42%,transparent_72%)]"
          aria-hidden
        />
        <div className="absolute inset-0 z-[3] bg-linear-to-t from-[#040814]/88 via-[#040814]/32 via-48% to-transparent" />
        <div className="absolute inset-0 z-[3] bg-linear-to-br from-black/20 to-transparent opacity-75" />
        <div className="absolute left-4 top-4 z-[12] sm:left-5 sm:top-5">
          <ProductBadgeStrip badges={tresLeches.badges} />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div className="gift-caption-box max-w-xl space-y-3 rounded-3xl bg-black/50 px-5 py-4 backdrop-blur-md backdrop-saturate-125 sm:space-y-3 sm:px-6 sm:py-5">
            <p className="type-eyebrow-gold drop-shadow-[0_1px_6px_rgba(224,184,64,0.65)]">
              Capricho artesanal
            </p>
            <h3 className="font-headline text-3xl font-semibold leading-tight tracking-[-0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-4xl">
              {tresLeches.name}
            </h3>
            <p className="max-w-md font-headline text-base font-medium italic leading-relaxed tracking-wide text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg">
              {tresLeches.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-row flex-wrap items-center justify-end gap-3 sm:gap-4">
            <span className={pricePremiumClass}>
              {formatEuroES(tresLeches.unitPriceEuro)}
            </span>
            <AddToCartButton productId="tres-leches" />
          </div>
        </div>
      </div>

      <div
        id="catalog-product-cachitos"
        className={`${giftPanelClass} group relative flex flex-col overflow-hidden rounded-3xl md:col-span-4 ${cardHoverLiftClass} ${matchHighlightClass(active("cachitos"))}`}
      >
        <div
          className={`${catalogProductImageSlotBase} ${catalogProductThumbHeight}`}
        >
          <CatalogProductImage
            productId="cachitos"
            src={cachitos.imageUrl}
            alt={catalogProductImageAlt(cachitos, "cachitos")}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            variant="card"
          />
          <div className="absolute left-3 top-3 z-[2] sm:left-4 sm:top-4">
            <ProductBadgeStrip badges={cachitos.badges} />
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-4 p-5 sm:p-8">
          <div>
            <div className="premium-divider-gold mb-3" aria-hidden />
            <h3 className={`${premiumProductTitleClass} text-xl sm:text-2xl`}>
              {cachitos.name}
            </h3>
            <p className={`${premiumProductDescClass} mt-2 sm:text-base`}>
              {cachitos.description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className={pricePremiumClass}>
              {formatEuroES(cachitos.unitPriceEuro)}
            </span>
            <AddToCartButton productId="cachitos" />
          </div>
        </div>
      </div>

      <div
        id="catalog-product-quesillo"
        className={`${giftPanelClass} group relative flex flex-col overflow-hidden rounded-3xl md:col-span-4 ${cardHoverLiftClass} ${matchHighlightClass(active("quesillo"))}`}
      >
        <div
          className={`${catalogProductImageSlotBase} ${catalogProductThumbHeight}`}
        >
          <CatalogProductImage
            productId="quesillo"
            src={quesillo.imageUrl}
            alt={catalogProductImageAlt(quesillo, "quesillo")}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            variant="card"
          />
          <div className="absolute left-3 top-3 z-[2] sm:left-4 sm:top-4">
            <ProductBadgeStrip badges={quesillo.badges} />
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-4 p-5 sm:p-8">
          <div>
            <div className="premium-divider-gold mb-3" aria-hidden />
            <h3 className={`${premiumProductTitleClass} text-xl sm:text-2xl`}>
              {quesillo.name}
            </h3>
            {quesillo.description ? (
              <p className={`${premiumProductDescClass} mt-2 sm:text-base`}>
                {quesillo.description}
              </p>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className={pricePremiumClass}>
              {formatEuroES(quesillo.unitPriceEuro)}
            </span>
            <AddToCartButton productId="quesillo" />
          </div>
        </div>
      </div>

      <div
        id="catalog-product-golfeados"
        className={`${giftPanelClass} group relative overflow-hidden rounded-3xl md:col-span-8 md:min-h-[24rem] lg:min-h-[26rem] ${cardHoverLiftClass} ${matchHighlightClass(active("golfeados"))}`}
      >
        <div className="flex flex-col md:absolute md:inset-0 md:min-h-[24rem] md:flex-row md:items-stretch lg:min-h-[26rem]">
          <div className="z-10 order-1 flex w-full flex-col justify-center gap-4 p-6 sm:gap-5 sm:p-8 md:order-none md:min-h-0 md:w-1/2 md:justify-between md:gap-6 md:p-10 lg:p-12">
            <div className="space-y-4 sm:space-y-5">
              <div className="premium-divider-gold" aria-hidden />
              <h3 className={`${premiumProductTitleClass} text-2xl sm:text-3xl`}>
                {golfeados.name}
              </h3>
              <p className={`${premiumProductDescClass} sm:text-base`}>
                {golfeados.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 md:mt-0">
              <span className={pricePremiumClass}>
                {formatEuroES(golfeados.unitPriceEuro)}
              </span>
              <AddToCartButton productId="golfeados" />
            </div>
          </div>
          <div
            className={`${catalogProductImageSlotBase} order-2 h-56 w-full shrink-0 sm:h-64 md:order-none md:h-full md:min-h-0 md:w-1/2 md:flex-1`}
          >
            <CatalogProductImage
              productId="golfeados"
              src={golfeados.imageUrl}
              alt={catalogProductImageAlt(golfeados, "golfeados")}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
              variant="card"
            />
            <div className="absolute left-3 top-3 z-[2] sm:left-4 sm:top-4">
              <ProductBadgeStrip badges={golfeados.badges} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
