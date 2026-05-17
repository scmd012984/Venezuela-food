"use client";

import { useCallback, useMemo } from "react";
import { CatalogProductImage } from "@/app/components/dulce-venezuela/CatalogProductImage";
import { CatalogProductPurchaseRow } from "@/app/components/dulce-venezuela/CatalogProductPurchaseRow";
import { ProductBadgeStrip } from "@/app/components/dulce-venezuela/ProductBadgeStrip";
import {
  CATALOG_PRODUCTS,
  type CatalogProductId,
} from "@/lib/catalog";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import {
  cardHoverLiftClass,
  catalogPhotoSlotClass,
  giftPanelClass,
  heroOnImageSecondaryCtaClass,
  premiumDisplayClass,
  premiumProductDescClass,
  premiumProductTitleClass,
  pageEnterProductClass,
  pageEnterProductDelay,
  productBadgeAnchorClass,
  productPhotoInnerClass,
} from "./home-shared";
import { useCatalogSearch } from "./catalog-search-context";
import { useCategoryPanelBridge } from "./category-panel-bridge";

const catalogProductThumbHeight = "h-56 sm:h-64 md:h-64";

function matchHighlightClass(active: boolean): string {
  return active
    ? "z-[2] ring-[3px] ring-gold-bright ring-offset-2 ring-offset-background shadow-[0_0_0_2px_rgba(250,240,200,0.5),0_0_28px_-5px_rgba(224,184,64,0.5)] transition-shadow duration-300"
    : "";
}

export function ProductGrid() {
  const { query, matchingIds } = useCatalogSearch();
  const { openCatalogCategory } = useCategoryPanelBridge();
  const q = query.trim();
  const matchSet = useMemo(() => new Set(matchingIds), [matchingIds]);
  const active = (id: CatalogProductId) => q.length > 0 && matchSet.has(id);

  const openGolfeadosBandejas = useCallback(() => {
    openCatalogCategory("Golfeados");
    document
      .getElementById("explorar-dulces")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openCatalogCategory]);

  const tresLeches = CATALOG_PRODUCTS["tres-leches"];
  const cachitos = CATALOG_PRODUCTS.cachitos;
  const quesillo = CATALOG_PRODUCTS.quesillo;
  const golfeados = CATALOG_PRODUCTS.golfeados;

  return (
    <section
      id="catalogo"
      className="scroll-mt-24 grid grid-cols-1 gap-5 pb-8 sm:gap-6 sm:scroll-mt-28 md:grid-cols-12 md:gap-7 md:pb-10"
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

      {/* Tres leches — hero editorial */}
      <div
        id="favoritos"
        className={`${pageEnterProductClass} catalog-product-image-slot catalog-featured-tres-leches photo-hover-group ${giftPanelClass} group relative min-h-[22rem] h-[min(70vh,32rem)] overflow-hidden rounded-3xl sm:min-h-[26rem] md:col-span-8 md:h-[500px] md:min-h-0 ${cardHoverLiftClass} ${matchHighlightClass(active("tres-leches"))}`}
        style={pageEnterProductDelay(0)}
      >
        <div className={`${productPhotoInnerClass} absolute inset-0 z-0`}>
          <CatalogProductImage
            productId="tres-leches"
            src={tresLeches.imageUrl}
            alt={catalogProductImageAlt(tresLeches, "tres-leches")}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 800px"
            priority
            variant="card"
          />
        </div>
        <div
          className="photo-overlay-shine-top pointer-events-none absolute inset-x-0 top-0 z-[3] h-[52%]"
          aria-hidden
        />
        <div
          className="photo-overlay-bottom pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[42%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-linear-to-br from-chocolate-deep/8 to-transparent opacity-50"
          aria-hidden
        />
        <div className={productBadgeAnchorClass}>
          <ProductBadgeStrip badges={tresLeches.badges} />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-4 p-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:p-6 md:p-7">
          <div className="catalog-hero-card-copy gift-caption-box gift-caption-box--featured max-w-[min(100%,24rem)] space-y-1.5 rounded-2xl px-3.5 py-2.5 backdrop-blur-md backdrop-saturate-150 sm:max-w-md sm:space-y-2 sm:px-4 sm:py-3">
            <p className="type-eyebrow-gold text-[0.625rem] sm:text-[0.6875rem]">
              Capricho artesanal
            </p>
            <h3
              className={`${premiumDisplayClass} text-xl leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-2xl`}
            >
              {tresLeches.name}
            </h3>
            <p className="leading-body text-pretty text-sm font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-[0.9375rem]">
              {tresLeches.description}
            </p>
          </div>
          <div className="relative z-20 w-full shrink-0 sm:max-w-[min(100%,20rem)]">
            <CatalogProductPurchaseRow
              productId="tres-leches"
              unitPriceEuro={tresLeches.unitPriceEuro}
            />
          </div>
        </div>
      </div>

      {/* Cachitos — ficha estándar */}
      <div
        id="catalog-product-cachitos"
        className={`${pageEnterProductClass} ${giftPanelClass} group relative flex flex-col overflow-hidden rounded-3xl md:col-span-4 ${cardHoverLiftClass} ${matchHighlightClass(active("cachitos"))}`}
        style={pageEnterProductDelay(1)}
      >
        <div
          className={`${catalogPhotoSlotClass} ${catalogProductThumbHeight}`}
        >
          <CatalogProductImage
            productId="cachitos"
            src={cachitos.imageUrl}
            alt={catalogProductImageAlt(cachitos, "cachitos")}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            variant="card"
          />
          <div className={productBadgeAnchorClass}>
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
          <CatalogProductPurchaseRow
            productId="cachitos"
            unitPriceEuro={cachitos.unitPriceEuro}
          />
        </div>
      </div>

      {/* Quesillo — ficha estándar */}
      <div
        id="catalog-product-quesillo"
        className={`${pageEnterProductClass} ${giftPanelClass} group relative flex flex-col overflow-hidden rounded-3xl md:col-span-4 ${cardHoverLiftClass} ${matchHighlightClass(active("quesillo"))}`}
        style={pageEnterProductDelay(2)}
      >
        <div
          className={`${catalogPhotoSlotClass} ${catalogProductThumbHeight}`}
        >
          <CatalogProductImage
            productId="quesillo"
            src={quesillo.imageUrl}
            alt={catalogProductImageAlt(quesillo, "quesillo")}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            variant="card"
          />
          <div className={productBadgeAnchorClass}>
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
          <CatalogProductPurchaseRow
            productId="quesillo"
            unitPriceEuro={quesillo.unitPriceEuro}
          />
        </div>
      </div>

      {/* Golfeados — hero ancho + CTA bandejas */}
      <div
        id="catalog-product-golfeados"
        className={`${pageEnterProductClass} catalog-product-image-slot catalog-golfeados-hero photo-hover-group ${giftPanelClass} group relative min-h-[24rem] overflow-hidden rounded-3xl sm:min-h-[26rem] md:col-span-8 md:min-h-[28rem] lg:min-h-[30rem] ${cardHoverLiftClass} ${matchHighlightClass(active("golfeados"))}`}
        style={pageEnterProductDelay(3)}
      >
        <div className={`${productPhotoInnerClass} absolute inset-0 z-0`}>
          <CatalogProductImage
            productId="golfeados"
            src={golfeados.imageUrl}
            alt={catalogProductImageAlt(golfeados, "golfeados")}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 900px"
            variant="card"
          />
        </div>
        <div
          className="photo-overlay-shine-top pointer-events-none absolute inset-x-0 top-0 z-[2] h-[40%]"
          aria-hidden
        />
        <div
          className="catalog-hero-scrim pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        />
        <div
          className="photo-overlay-bottom pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[58%]"
          aria-hidden
        />
        <div className={productBadgeAnchorClass}>
          <ProductBadgeStrip badges={golfeados.badges} />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-5 p-5 sm:gap-6 sm:p-7 md:p-8 lg:p-9">
          <div className="catalog-hero-card-copy max-w-2xl space-y-2 sm:space-y-2.5 md:space-y-3">
            <p className="type-eyebrow-gold text-[0.6875rem] sm:text-xs">
              Bandejas y porciones
            </p>
            <h3
              className={`${premiumDisplayClass} text-[1.75rem] leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-3xl md:text-4xl lg:text-[2.5rem]`}
            >
              {golfeados.name}
            </h3>
            <p className="leading-body max-w-xl text-pretty text-sm font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-base md:text-lg">
              {golfeados.description}
            </p>
          </div>
          <CatalogProductPurchaseRow
            productId="golfeados"
            unitPriceEuro={golfeados.unitPriceEuro}
            secondaryAction={{
              label: "Ver bandejas",
              className: heroOnImageSecondaryCtaClass,
              onClick: openGolfeadosBandejas,
            }}
          />
        </div>
      </div>
    </section>
  );
}
