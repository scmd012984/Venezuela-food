"use client";

import { useEffect, useState } from "react";
import { CatalogProductImage } from "@/app/components/dulce-venezuela/CatalogProductImage";
import { CATALOG_PRODUCTS, type CatalogProductId } from "@/lib/catalog";
import { catalogProductImageAlt } from "@/lib/catalog-image-alt";
import { productPhotoInnerClass } from "./home-shared";

const SLIDE_ORDER = [
  "tres-leches",
  "golfeados",
  "cachitos",
  "quesillo",
] as const satisfies readonly CatalogProductId[];

/** Tiempo visible por postre antes del fade */
const HOLD_MS = 6500;
/** Duración del fundido entre imágenes */
const FADE_MS = 2000;

/**
 * Un solo recuadro: cada postre ocupa todo el espacio y aparece de uno en uno.
 */
export function ProductCascade() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const activeId = SLIDE_ORDER[activeIndex]!;
  const product = CATALOG_PRODUCTS[activeId];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    let index = 0;
    let holdTimer = 0;
    let fadeTimer = 0;

    const advance = () => {
      setVisible(false);
      fadeTimer = window.setTimeout(() => {
        index = (index + 1) % SLIDE_ORDER.length;
        setActiveIndex(index);
        setVisible(true);
        holdTimer = window.setTimeout(advance, HOLD_MS);
      }, FADE_MS);
    };

    holdTimer = window.setTimeout(advance, HOLD_MS);

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div
      className="product-cascade product-cascade--hero absolute inset-0"
      aria-label="Nuestros postres"
      aria-live="polite"
    >
      <div className="product-cascade-viewport absolute inset-3 overflow-hidden rounded-2xl sm:inset-4">
        <div
          data-product={activeId}
          className={[
            "photo-hover-group product-cascade-slide absolute inset-0 overflow-hidden rounded-2xl transition-opacity ease-in-out",
            visible ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        >
          <div
            className={`${productPhotoInnerClass} product-cascade-slide__frame relative h-full w-full`}
          >
            <CatalogProductImage
              productId={activeId}
              src={product.imageUrl}
              alt={catalogProductImageAlt(product, activeId)}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              variant="showcase"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-t from-chocolate-deep/18 via-transparent to-transparent"
            aria-hidden
          />
          <p className="mesa-dulce-caption-text absolute inset-x-0 bottom-0 z-[2] bg-linear-to-t from-chocolate-deep/50 to-transparent px-3 pb-3 pt-6 text-center text-sm font-semibold sm:px-4 sm:pb-4 sm:pt-8 sm:text-base">
            {product.name}
          </p>
        </div>
      </div>

      <div
        className="ring-gold-frame pointer-events-none absolute inset-3 z-20 rounded-2xl sm:inset-4"
        aria-hidden
      />
    </div>
  );
}
