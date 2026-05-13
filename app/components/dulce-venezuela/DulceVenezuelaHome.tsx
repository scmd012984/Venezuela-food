import Image from "next/image";
import Link from "next/link";
import { Mail, PartyPopper } from "lucide-react";
import {
  buildMesaDulceMailto,
  buildWhatsAppContactHref,
  isWhatsAppWebHref,
} from "@/lib/contact-public";
import { AddToCartButton } from "@/app/components/cart/AddToCartButton";
import { CATALOG_PRODUCTS, type CatalogProductBadge } from "@/lib/catalog";
import { formatEuroES } from "@/lib/format-euro";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import { CategoryFilterSection } from "./CategoryFilterSection";
import { WhatsAppBrandIcon } from "./WhatsAppBrandIcon";

type CtaLink = {
  href: string;
  label: string;
  className: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
  icon?: "whatsapp" | "mail";
};

/** Contenedor de foto: misma altura en tarjetas lista + recorte limpio */
const catalogProductImageSlotBase =
  "catalog-product-image-slot relative isolate w-full shrink-0 overflow-hidden bg-slate-200/80 dark:bg-slate-800/90";

const catalogProductThumbHeight = "h-56 sm:h-64 md:h-64";

/**
 * Misma gradación y encuadre en todas las fotos del catálogo (relleno total + cover).
 */
const catalogPhotoClass =
  "h-full w-full min-h-0 min-w-0 max-h-none object-cover object-center brightness-[1.04] contrast-[1.02] saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]";

/** Velo ligero cálido + viñeta para igualar iluminación entre fuentes distintas */
function CatalogImageVeil() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(24,18,14,0.12)_82%,rgba(12,8,6,0.22)_100%),linear-gradient(to_top,rgba(28,20,16,0.12)_0%,transparent_45%,rgba(255,248,240,0.1)_100%)]"
      aria-hidden
    />
  );
}

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

/** Elevación al pasar el ratón: sombra más definida, menos “nublado” */
const cardHoverLiftClass =
  "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/22 hover:shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_12px_36px_-14px_rgba(12,36,99,0.16),0_4px_14px_-6px_rgba(28,29,38,0.08)] dark:hover:border-slate-500/55 dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_16px_40px_-12px_rgba(0,0,0,0.45)]";

/** Hero de entrada: bloque claro con foto, copy breve y acciones */
function LandingHero() {
  const heroProduct = CATALOG_PRODUCTS["tres-leches"];
  const waContactHref = buildWhatsAppContactHref();
  const openWhatsAppInNewTab = isWhatsAppWebHref(waContactHref);
  const heroCtas: CtaLink[] = [
    {
      href: "#catalogo",
      label: "Ver catálogo",
      className:
        "shadow-card-soft inline-flex h-12 min-h-12 items-center justify-center rounded-full bg-primary-container px-8 text-sm font-semibold text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md active:scale-[0.98]",
    },
    {
      href: waContactHref,
      label: "WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className:
        "inline-flex h-12 min-h-12 items-center justify-center rounded-full border-2 border-primary/28 bg-white px-6 text-sm font-semibold text-primary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-surface-container-low active:scale-[0.98] dark:bg-slate-900/70 dark:hover:bg-slate-800/90",
    },
  ];

  return (
    <section
      className="overflow-hidden rounded-3xl border border-outline-variant/55 bg-white shadow-card-soft ring-1 ring-black/[0.03] dark:border-slate-600/50 dark:bg-slate-950 dark:ring-white/[0.06]"
      aria-labelledby="hero-heading"
    >
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 flex flex-col justify-center gap-5 px-6 py-8 sm:gap-6 sm:px-10 sm:py-10 lg:order-1 lg:px-12 lg:py-14">
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[2.45rem] lg:leading-[1.08]"
          >
            Repostería venezolana, hecha hoy.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Para llevar y mesas dulces bajo encargo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {heroCtas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.target}
                rel={cta.rel}
                className={cta.className}
              >
                {cta.icon === "whatsapp" ? (
                  <WhatsAppBrandIcon className="mr-1.5 size-[22px] shrink-0" />
                ) : null}
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative order-1 aspect-[16/11] min-h-[200px] w-full sm:aspect-[16/10] sm:min-h-[240px] lg:aspect-auto lg:min-h-[300px]">
          <Image
            src={heroProduct.imageUrl}
            alt="Tarta tres leches con merengue y canela"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/10"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

function VenezuelaFlagBackground() {
  const stars = [
    { x: 160, y: 170 },
    { x: 245, y: 132 },
    { x: 335, y: 112 },
    { x: 430, y: 104 },
    { x: 525, y: 112 },
    { x: 615, y: 132 },
    { x: 700, y: 170 },
  ] as const;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.38]">
        <div className="h-1/3 bg-linear-to-b from-[#ffdd33] via-[#f7cb18] to-[#e5b700]" />
        <div className="h-1/3 bg-linear-to-b from-[#0a3db4] via-[#0033a0] to-[#00297f]" />
        <div className="h-1/3 bg-linear-to-b from-[#d22a2a] via-[#ba1a1a] to-[#971010]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]" />

      <svg
        viewBox="0 0 860 300"
        className="absolute left-1/2 top-1/2 w-[min(88vw,920px)] max-w-[920px] -translate-x-1/2 -translate-y-[44%] opacity-[0.22]"
        aria-hidden="true"
      >
        {stars.map((star) => (
          <text
            key={`${star.x}-${star.y}`}
            x={star.x}
            y={star.y}
            fill="#ffffff"
            fontSize="34"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))",
            }}
          >
            ★
          </text>
        ))}
      </svg>

      <div className="absolute inset-0 bg-background/88 backdrop-blur-[3px] saturate-[1.02]" />
      <div className="absolute inset-0 bg-linear-to-b from-white/35 via-transparent to-white/28" />
    </div>
  );
}

function HeroHeader() {
  return (
    <section
      aria-label="Explorar catálogo"
      className="space-y-6 sm:space-y-7"
    >
      <div className="max-w-2xl space-y-1.5">
        <h2 className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
          Explorar dulces
        </h2>
        <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base sm:leading-relaxed">
          Busca por nombre o elige una categoría.
        </p>
      </div>

      <div className="flex flex-col items-stretch gap-5 md:flex-row md:items-end md:gap-5 lg:gap-6">
        <div className="relative w-full md:max-w-md md:shrink-0 lg:max-w-lg">
          <label htmlFor="catalog-search" className="sr-only">
            Buscar en el catálogo
          </label>
          <input
            id="catalog-search"
            type="search"
            placeholder="Buscar delicias…"
            autoComplete="off"
            className="shadow-card-soft w-full rounded-3xl border border-outline-variant/60 bg-white py-3.5 pl-5 pr-5 text-base font-normal text-on-surface placeholder:text-on-surface-variant/70 transition duration-200 placeholder:font-normal hover:border-primary/40 hover:shadow-[0_8px_28px_-12px_rgba(12,36,99,0.14)] focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/18 dark:border-slate-600/50 dark:bg-slate-950 dark:text-white dark:hover:border-primary/45 dark:placeholder:text-slate-500"
          />
        </div>
        <CategoryFilterSection />
      </div>
    </section>
  );
}

function OccasionsCallout() {
  const mailtoHref = buildMesaDulceMailto();
  const waContactHref = buildWhatsAppContactHref();
  const openWhatsAppInNewTab = isWhatsAppWebHref(waContactHref);
  const occasionCtas: CtaLink[] = [
    {
      href: mailtoHref,
      label: "Pedir presupuesto",
      icon: "mail",
      className:
        "shadow-card-soft inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-container px-6 text-sm font-semibold text-white ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md hover:ring-white/25 active:translate-y-0 active:scale-[0.98]",
    },
    {
      href: waContactHref,
      label: "Por WhatsApp",
      icon: "whatsapp",
      target: openWhatsAppInNewTab ? "_blank" : undefined,
      rel: openWhatsAppInNewTab ? "noopener noreferrer" : undefined,
      className:
        "inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-white px-6 text-sm font-semibold text-primary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-container-low hover:shadow-md active:translate-y-0 active:scale-[0.98] dark:border-primary/35 dark:bg-slate-950 dark:hover:bg-slate-900",
    },
  ];

  return (
    <section
      className={`glass-panel shadow-card-soft rounded-3xl px-6 py-7 sm:px-8 sm:py-8 ${cardHoverLiftClass}`}
      aria-labelledby="occasions-heading"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <PartyPopper
          className="size-10 shrink-0 text-primary sm:size-12"
          strokeWidth={LUCIDE_ICON_STROKE}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <h2
            id="occasions-heading"
            className="text-xl font-semibold leading-snug tracking-tight text-primary sm:text-2xl"
          >
            Preparamos tu mesa dulce
          </h2>
          <p className="mt-3 text-base font-normal leading-relaxed text-on-surface sm:text-lg sm:leading-relaxed">
            Diseñamos bandejas y mesas de postres para{" "}
            <strong className="font-semibold text-on-surface">bodas</strong>,{" "}
            <strong className="font-semibold text-on-surface">cumpleaños</strong>,
            una{" "}
            <strong className="font-semibold text-on-surface">reunión</strong> con
            amigos,{" "}
            <strong className="font-semibold text-on-surface">celebraciones</strong>{" "}
            en familia,{" "}
            <strong className="font-semibold text-on-surface">eventos</strong> más
            formales y, en general,{" "}
            <strong className="font-semibold text-on-surface">
              todo tipo de celebración
            </strong>
            . Cuéntanos fecha, número de comensales y estilo, y te proponemos una
            selección equilibrada de nuestros dulces.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            {occasionCtas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.target}
                rel={cta.rel}
                className={cta.className}
              >
                {cta.icon === "mail" ? (
                  <Mail
                    className="size-[22px] shrink-0"
                    strokeWidth={LUCIDE_ICON_STROKE}
                    aria-hidden
                  />
                ) : null}
                {cta.icon === "whatsapp" ? (
                  <WhatsAppBrandIcon className="size-[22px] shrink-0" />
                ) : null}
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid() {
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

export function DulceVenezuelaHome() {
  return (
    <div className="relative isolate min-h-screen">
      <VenezuelaFlagBackground />
      <main className="mx-auto max-w-7xl space-y-10 px-4 pt-8 sm:space-y-12 sm:px-6 sm:pt-10 md:space-y-14 md:pt-12 lg:space-y-16 lg:px-8">
        <LandingHero />
        <HeroHeader />
        <OccasionsCallout />
        <ProductGrid />
      </main>
    </div>
  );
}
