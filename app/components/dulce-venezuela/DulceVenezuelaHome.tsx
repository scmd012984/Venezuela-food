import type { InstagramFeedData } from "@/lib/instagram-feed";
import { CatalogQuickStrip } from "./CatalogQuickStrip";
import { ClientTestimonials } from "./ClientTestimonials";
import { HeroHeader } from "./HeroHeader";
import { InstagramFeedSection } from "./InstagramFeedSection";
import { LandingHero } from "./LandingHero";
import { OccasionsCallout } from "./OccasionsCallout";
import { ProductGrid } from "./ProductGrid";
import { VenezuelaFlagBackground } from "./VenezuelaFlagBackground";
import { CatalogSearchProvider } from "./catalog-search-context";
import { CategoryPanelBridgeProvider } from "./category-panel-bridge";

type DulceVenezuelaHomeProps = {
  instagramFeed: InstagramFeedData;
};

export function DulceVenezuelaHome({ instagramFeed }: DulceVenezuelaHomeProps) {
  return (
    <div className="relative isolate min-h-screen">
      <VenezuelaFlagBackground />
      <CatalogSearchProvider>
        <CategoryPanelBridgeProvider>
          <main className="mx-auto max-w-7xl space-y-10 px-4 pt-8 sm:space-y-12 sm:px-6 sm:pt-10 md:space-y-14 md:pt-12 lg:space-y-16 lg:px-8">
            <LandingHero />
            <HeroHeader />
            <OccasionsCallout />
            <ClientTestimonials />
            <CatalogQuickStrip />
            <ProductGrid />
            <InstagramFeedSection data={instagramFeed} />
          </main>
        </CategoryPanelBridgeProvider>
      </CatalogSearchProvider>
    </div>
  );
}
