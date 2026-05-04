import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulce Venezuela",
  description:
    "Repostería venezolana: sabores que cuentan historias entre tradición y refinamiento.",
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
    <html lang="es" className={`light ${inter.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background pb-24 font-sans text-base font-normal text-on-surface md:pb-6">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
