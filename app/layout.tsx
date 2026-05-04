import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulce Venezuela",
  description:
    "Repostería venezolana: sabores que cuentan historias entre tradición y refinamiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`light ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-on-surface pb-24 font-sans">
        {children}
      </body>
    </html>
  );
}
