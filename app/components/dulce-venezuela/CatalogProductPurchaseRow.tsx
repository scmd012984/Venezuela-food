import { AddToCartButton } from "@/app/components/cart/AddToCartButton";
import type { CatalogProductId } from "@/lib/catalog";
import { formatEuroES } from "@/lib/format-euro";
import { catalogPurchaseRowClass, pricePremiumClass } from "./home-shared";

export type CatalogPurchaseSecondaryAction = {
  label: string;
  className: string;
  onClick: () => void;
};

type CatalogProductPurchaseRowProps = {
  productId: CatalogProductId;
  unitPriceEuro: number;
  /** Variante compacta para listas del panel de categoría */
  compact?: boolean;
  secondaryAction?: CatalogPurchaseSecondaryAction;
};

/** Fila unificada: precio + añadir (+ CTA secundario opcional) */
export function CatalogProductPurchaseRow({
  productId,
  unitPriceEuro,
  compact = false,
  secondaryAction,
}: CatalogProductPurchaseRowProps) {
  return (
    <div
      className={`${catalogPurchaseRowClass}${compact ? " catalog-purchase-row--compact" : ""}`}
    >
      <span
        className={`${pricePremiumClass}${compact ? " price-premium--compact" : ""}`}
      >
        {formatEuroES(unitPriceEuro)}
      </span>
      <div className="catalog-purchase-row__actions flex flex-wrap items-center gap-2.5 sm:gap-3">
        <AddToCartButton productId={productId} variant="labeled" />
        {secondaryAction ? (
          <button
            type="button"
            className={secondaryAction.className}
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.label}
          </button>
        ) : null}
      </div>
    </div>
  );
}

