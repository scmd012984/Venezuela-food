import type { Metadata, Viewport } from "next";
import { BRAND_META_DESCRIPTION } from "@/lib/brand";
import { Fraunces, Inter, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

/** Sans limpia — párrafos, UI y botones (pesos ligeros en secundarios vía tema). */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/** Serif con carácter — titulares secundarios y logo. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

/** Serif elegante — titulares de sección y nombres de producto (identidad gastronómica). */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulce Venezuela",
  description: BRAND_META_DESCRIPTION,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`light ${inter.variable} ${fraunces.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-dvh font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
