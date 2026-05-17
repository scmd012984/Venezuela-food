"use client";

import { ChevronUp, X } from "lucide-react";
import { useEffect, useMemo } from "react";
import { CatalogProductImage } from "@/app/components/dulce-venezuela/CatalogProductImage";
import { CatalogProductPurchaseRow } from "@/app/components/dulce-venezuela/CatalogProductPurchaseRow";
import { ProductBadgeStrip } from "@/app/components/dulce-venezuela/ProductBadgeStrip";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import { getCatalogProduct, type CatalogProductId } from "@/lib/catalog";
import { getMatchingProductIds } from "@/lib/catalog-search";
import type { CategoryLabel } from "@/lib/catalog-categories";
import { getProductIdsForCategory } from "@/lib/catalog-categories";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import {
  productPhotoFrameClass,
  productPhotoInnerClass,
  giftPanelClass,
  panelCloseBtnClass,
  premiumProductDescClass,
  premiumProductTitleClass,
} from "./home-shared";

type CategoryProductsPanelProps = {
  category: CategoryLabel;
  onClose: () => void;
  /** Si no está vacío, solo se listan productos de esta categoría que coincidan con la búsqueda. */
  searchFilterQuery?: string;
};

export function CategoryProductsPanel({
  category,
  onClose,
  searchFilterQuery = "",
}: CategoryProductsPanelProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const filterTrim = searchFilterQuery.trim();
  const ids = useMemo(() => {
    const base = getProductIdsForCategory(category);
    if (!filterTrim) return base;
    const matched = new Set(getMatchingProductIds(filterTrim));
    return base.filter((id) => matched.has(id));
  }, [category, filterTrim]);

  const multiColumn = ids.length > 1;
  const isSearchFiltered = filterTrim.length > 0;

  return (
    <div
      className={`${giftPanelClass} animate-category-panel-content motion-reduce:animate-none w-full max-w-full overflow-hidden rounded-2xl md:rounded-3xl`}
      role="region"
      aria-labelledby="category-panel-title"
    >
      <div className="category-panel-header border-gold-separator border-gold-separator-b flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5">
        <h2
          id="category-panel-title"
          className="type-premium-product-title min-w-0 truncate text-base sm:text-lg md:text-xl"
        >
          {category}
        </h2>
        <button
          type="button"
          className={`${panelCloseBtnClass} size-9 sm:size-10 sm:rounded-2xl`}
          aria-label="Cerrar lista de categoría"
          onClick={onClose}
        >
          <X
            className="size-5 sm:size-[1.35rem]"
            strokeWidth={LUCIDE_ICON_STROKE}
            aria-hidden
          />
        </button>
      </div>

      <div
        className="max-h-[min(52vh,19rem)] touch-pan-y overflow-y-auto overscroll-y-contain px-3 py-3 sm:max-h-[min(58vh,24rem)] sm:px-4 sm:py-4 md:max-h-[min(64vh,28rem)] md:px-5 md:py-5 lg:max-h-[min(72vh,34rem)] lg:py-5"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {ids.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-8 text-center sm:gap-3 sm:py-10 md:py-12">
            <ChevronUp
              className="size-8 text-on-surface-variant/50"
              strokeWidth={LUCIDE_ICON_STROKE}
              aria-hidden
            />
            {isSearchFiltered ? (
              <>
                <p className="text-base font-medium text-on-surface">
                  Ningún resultado en{" "}
                  <span className="font-semibold">{category}</span>
                </p>
                <p className="leading-body max-w-sm text-sm text-on-surface-variant">
                  No encontramos «{filterTrim}» entre los dulces de esta categoría.
                  Prueba otras palabras o elige otra categoría.
                </p>
              </>
            ) : (
              <>
                <p className="text-base font-medium text-on-surface">
                  Aún no hay nada en esta categoría
                </p>
                <p className="leading-body max-w-sm text-sm text-on-surface-variant">
                  Pronto añadiremos productos aquí. Mientras tanto, revisa{" "}
                  <strong className="font-semibold text-on-surface">Todos</strong>{" "}
                  u otra categoría en la lista.
                </p>
              </>
            )}
          </div>
        ) : (
          <ul
            className={`grid grid-cols-1 gap-2.5 sm:gap-3 md:gap-4 ${
              multiColumn
                ? "lg:grid-cols-2 lg:gap-x-4 lg:gap-y-3.5 xl:gap-x-5"
                : ""
            }`}
          >
            {ids.map((productId) => {
              const p = getCatalogProduct(productId);
              if (!p) return null;
              const desc = p.description.trim();
              return (
                <li
                  key={productId}
                  className="shadow-card-subtle flex min-h-0 min-w-0 items-start gap-3 rounded-xl border-2 border-gold-bright/70 bg-surface-container-low/95 p-3 sm:gap-4 sm:rounded-2xl sm:p-4 md:gap-5 md:p-5"
                >
                  <div
                    className={`${productPhotoFrameClass} catalog-product-image-slot group relative h-20 w-20 shrink-0 p-1 min-[380px]:h-[5.25rem] min-[380px]:w-[5.25rem] sm:h-24 sm:w-24 md:h-[7.25rem] md:w-[7.25rem] lg:h-32 lg:w-32`}
                  >
                    <div className={productPhotoInnerClass}>
                      <CatalogProductImage
                        productId={productId as CatalogProductId}
                        src={p.imageUrl}
                        alt={catalogProductImageAlt(p, productId as CatalogProductId)}
                        sizes="(max-width: 379px) 80px, (max-width: 639px) 84px, (max-width: 767px) 96px, (max-width: 1023px) 116px, 128px"
                        variant="thumb"
                      />
                    </div>
                    {p.badges.length > 0 ? (
                      <div className="absolute left-1 top-1 z-[2] max-w-[calc(100%-0.5rem)] sm:left-1.5 sm:top-1.5">
                        <ProductBadgeStrip badges={p.badges} />
                      </div>
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-2.5">
                    <div className="min-w-0">
                      <p className={`${premiumProductTitleClass} text-[0.9375rem] sm:text-base md:text-lg`}>
                        {p.name}
                      </p>
                      {desc ? (
                        <p className={`${premiumProductDescClass} mt-1.5 text-sm sm:mt-2 md:text-base`}>
                          {desc}
                        </p>
                      ) : null}
                    </div>
                    <CatalogProductPurchaseRow
                      productId={productId as CatalogProductId}
                      unitPriceEuro={p.unitPriceEuro}
                      compact
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
