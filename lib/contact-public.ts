/**
 * Datos de contacto expuestos al cliente (prefijo NEXT_PUBLIC_).
 * Copia `.env.example` a `.env.local` y rellena los valores reales.
 */

const DEFAULT_EMAIL = "info@dulcevenezuela.com";

export function getPublicContactEmail(): string {
  const v = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return v || DEFAULT_EMAIL;
}

/** Dígitos con prefijo país, p. ej. 34612345678. Sin él no se muestra el botón de WhatsApp. */
export function getPublicWhatsAppE164(): string | null {
  const digits = process.env.NEXT_PUBLIC_WHATSAPP_E164?.replace(/\D/g, "") ?? "";
  return digits.length >= 10 ? digits : null;
}

export function buildMesaDulceMailto(): string {
  const email = getPublicContactEmail();
  const subject = "Presupuesto — mesa dulce / celebración (Dulce Venezuela)";
  const body = `Hola,

Me gustaría recibir un presupuesto para una mesa dulce (boda, cumpleaños u otra celebración).

• Fecha aproximada del evento:
• Número de comensales:
• Tipo de celebración (boda, cumpleaños, reunión, empresa, comunión, bautizo, otra…):
• Preferencias o alergias:

Gracias.`;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildMesaDulceWhatsAppHref(): string | null {
  const wa = getPublicWhatsAppE164();
  if (!wa) return null;
  const text = `Hola, me gustaría pedir presupuesto para una mesa dulce (boda, cumpleaños o cualquier tipo de celebración). Fecha, comensales y detalles te los escribo abajo.

`;
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}

/**
 * Siempre devuelve un enlace usable: WhatsApp web cuando hay número público;
 * si no, un mailto pidiendo que os escriban por WhatsApp (el botón puede mostrarse siempre).
 */
export function buildWhatsAppContactHref(): string {
  const direct = buildMesaDulceWhatsAppHref();
  if (direct) return direct;
  const email = getPublicContactEmail();
  const subject = "Contacto por WhatsApp — Dulce Venezuela";
  const body = `Hola,

Me gustaría contactar por WhatsApp. ¿Podéis indicarme el número del negocio o escribirme desde vuestro WhatsApp comercial?

Gracias.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function isWhatsAppWebHref(href: string): boolean {
  return href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/");
}
