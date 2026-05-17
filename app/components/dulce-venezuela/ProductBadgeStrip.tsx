import type { CatalogProductBadge } from "@/lib/catalog";

const MAX_BADGES = 2;

const BADGE_LABEL: Record<CatalogProductBadge, string> = {
  nuevo: "Nuevo",
  masVendido: "Más vendido",
  favorito: "Favorito",
};

function productBadgeClass(kind: CatalogProductBadge): string {
  if (kind === "nuevo") return "badge-product badge-product--new";
  if (kind === "masVendido") return "badge-product badge-product--bestseller";
  return "badge-product badge-product--favorite";
}

type ProductBadgeStripProps = {
  badges: readonly CatalogProductBadge[];
};

/** Hasta 2 etiquetas — misma posición y estilo en grid y panel */
export function ProductBadgeStrip({ badges }: ProductBadgeStripProps) {
  const visible = badges.slice(0, MAX_BADGES);
  if (visible.length === 0) return null;

  return (
    <ul
      className="flex max-w-[min(100%,22rem)] flex-wrap gap-2"
      aria-label="Destacados del producto"
    >
      {visible.map((kind) => (
        <li key={kind}>
          <span className={productBadgeClass(kind)}>{BADGE_LABEL[kind]}</span>
        </li>
      ))}
    </ul>
  );
}
