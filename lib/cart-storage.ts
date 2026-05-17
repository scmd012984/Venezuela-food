import { getCatalogProduct } from "@/lib/catalog";
import type { CartLine } from "@/lib/cart-types";

const STORAGE_KEY = "dulce-venezuela-cart-v1";

type StoredCartLine = {
  productId: string;
  quantity: number;
};

function isStoredLine(value: unknown): value is StoredCartLine {
  if (!value || typeof value !== "object") return false;
  const row = value as StoredCartLine;
  return (
    typeof row.productId === "string" &&
    typeof row.quantity === "number" &&
    Number.isFinite(row.quantity) &&
    row.quantity > 0
  );
}

/** Lee el carrito guardado y valida contra el catálogo actual. */
export function loadStoredCartLines(): CartLine[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const lines: CartLine[] = [];

    for (const item of parsed) {
      if (!isStoredLine(item)) continue;
      const product = getCatalogProduct(item.productId);
      if (!product) continue;

      const quantity = Math.min(99, Math.max(1, Math.floor(item.quantity)));
      lines.push({
        productId: item.productId,
        name: product.name,
        unitPriceEuro: product.unitPriceEuro,
        quantity,
      });
    }

    return lines;
  } catch {
    return [];
  }
}

export function saveStoredCartLines(lines: CartLine[]): void {
  if (typeof window === "undefined") return;

  const payload: StoredCartLine[] = lines.map((line) => ({
    productId: line.productId,
    quantity: line.quantity,
  }));

  try {
    if (payload.length === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* quota / modo privado — ignorar */
  }
}
