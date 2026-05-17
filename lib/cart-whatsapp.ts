import type { CartLine } from "@/lib/cart-types";
import { getPublicWhatsAppE164 } from "@/lib/contact-public";
import { formatEuroES } from "@/lib/format-euro";

/** Mensaje de pedido listo para WhatsApp; null si no hay número o el carrito está vacío. */
export function buildCartWhatsAppHref(lines: CartLine[]): string | null {
  const wa = getPublicWhatsAppE164();
  if (!wa || lines.length === 0) return null;

  const items = lines
    .map(
      (line) =>
        `• ${line.name} × ${line.quantity} — ${formatEuroES(line.unitPriceEuro * line.quantity)}`,
    )
    .join("\n");

  const total = lines.reduce(
    (sum, line) => sum + line.unitPriceEuro * line.quantity,
    0,
  );

  const text = `Hola, me gustaría hacer este pedido en Dulce Venezuela:

${items}

Total: ${formatEuroES(total)}

¿Podéis confirmar disponibilidad y si es recogida en tienda o entrega?

Gracias.`;

  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}
