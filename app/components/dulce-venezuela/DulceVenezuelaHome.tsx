import { HeroHeader } from "./HeroHeader";
import { LandingHero } from "./LandingHero";
import { OccasionsCallout } from "./OccasionsCallout";
import { ProductGrid } from "./ProductGrid";
import { VenezuelaFlagBackground } from "./VenezuelaFlagBackground";

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
