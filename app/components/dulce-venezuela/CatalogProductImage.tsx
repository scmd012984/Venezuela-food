import Image from "next/image";
import type { CSSProperties } from "react";
import type { CatalogProductId } from "@/lib/catalog";
import { getProductImagePresentation } from "@/lib/catalog-image-presentation";
import type { CatalogImageVariant } from "@/lib/catalog-image-presentation";

type CatalogProductImageProps = {
  productId: CatalogProductId;
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  variant?: CatalogImageVariant;
};

function CatalogImageVeil({ variant }: { variant: CatalogImageVariant }) {
  const intense = variant === "hero" || variant === "card";
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0 z-[1]",
        intense
          ? "bg-[radial-gradient(ellipse_at_28%_14%,rgba(255,248,235,0.38)_0%,transparent_46%),radial-gradient(ellipse_at_82%_86%,rgba(18,10,6,0.36)_0%,rgba(6,4,3,0.5)_72%),linear-gradient(118deg,rgba(28,16,10,0.26)_0%,transparent_42%,rgba(255,250,240,0.12)_100%)]"
          : "bg-[radial-gradient(ellipse_at_24%_12%,rgba(255,248,240,0.28)_0%,transparent_50%),radial-gradient(ellipse_at_center,transparent_0%,rgba(24,16,12,0.12)_82%,rgba(10,6,4,0.2)_100%)]",
      ].join(" ")}
      aria-hidden
    />
  );
}

function CatalogImageShine({ variant }: { variant: CatalogImageVariant }) {
  const isThumb = variant === "thumb";
  return (
    <>
      <div
        className={[
          "catalog-product-shine",
          isThumb ? "catalog-product-shine--thumb" : "",
        ].join(" ")}
        aria-hidden
      />
      {!isThumb ? <div className="catalog-product-gloss" aria-hidden /> : null}
    </>
  );
}

/**
 * Foto de producto: encuadre macro, iluminación dramática, brillo y viñeta cálida.
 */
export function CatalogProductImage({
  productId,
  src,
  alt,
  sizes,
  priority,
  variant = "card",
}: CatalogProductImageProps) {
  const { objectPosition, macroScale } = getProductImagePresentation(
    productId,
    variant,
  );

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="catalog-product-photo relative z-0"
        style={
          {
            objectPosition,
            "--catalog-macro-scale": String(macroScale),
          } as CSSProperties
        }
      />
      <CatalogImageVeil variant={variant} />
      <CatalogImageShine variant={variant} />
    </>
  );
}
