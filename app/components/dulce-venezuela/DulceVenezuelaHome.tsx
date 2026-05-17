import type { InstagramFeedData } from "@/lib/instagram-feed";
import { CatalogQuickStrip } from "./CatalogQuickStrip";
import { ClientTestimonials } from "./ClientTestimonials";
import { HeroHeader } from "./HeroHeader";
import { InstagramFeedSection } from "./InstagramFeedSection";
import { LandingHero } from "./LandingHero";
import { OccasionsCallout } from "./OccasionsCallout";
import { ProductGrid } from "./ProductGrid";
import { VenezuelaFlagBackground } from "./VenezuelaFlagBackground";
import {
  PAGE_ENTER_DELAYS,
  pageEnterDelay,
  pageEnterSectionClass,
  siteContentClass,
  siteSectionStackClass,
} from "./home-shared";
import { CatalogSearchProvider } from "./catalog-search-context";
import { CategoryPanelBridgeProvider } from "./category-panel-bridge";

type DulceVenezuelaHomeProps = {
  instagramFeed: InstagramFeedData;
  initialSearchQuery?: string;
};

export function DulceVenezuelaHome({
  instagramFeed,
  initialSearchQuery = "",
}: DulceVenezuelaHomeProps) {
  return (
    <div className="relative isolate min-h-screen">
      <VenezuelaFlagBackground />
      <CatalogSearchProvider initialQuery={initialSearchQuery}>
        <CategoryPanelBridgeProvider>
          <div
            className={`${siteContentClass} ${siteSectionStackClass} pt-6 sm:pt-7 md:pt-8`}
          >
            <div
              className={pageEnterSectionClass}
              style={pageEnterDelay(PAGE_ENTER_DELAYS.hero)}
            >
              <LandingHero />
            </div>
            <div
              className={pageEnterSectionClass}
              style={pageEnterDelay(PAGE_ENTER_DELAYS.header)}
            >
              <HeroHeader />
            </div>
            <div
              className={pageEnterSectionClass}
              style={pageEnterDelay(PAGE_ENTER_DELAYS.occasions)}
            >
              <OccasionsCallout />
            </div>
            <div
              className={pageEnterSectionClass}
              style={pageEnterDelay(PAGE_ENTER_DELAYS.testimonials)}
            >
              <ClientTestimonials />
            </div>
            <div
              className={pageEnterSectionClass}
              style={pageEnterDelay(PAGE_ENTER_DELAYS.quickStrip)}
            >
              <CatalogQuickStrip />
            </div>
            <ProductGrid />
            <div
              className={pageEnterSectionClass}
              style={pageEnterDelay(PAGE_ENTER_DELAYS.instagram)}
            >
              <InstagramFeedSection data={instagramFeed} />
            </div>
          </div>
        </CategoryPanelBridgeProvider>
      </CatalogSearchProvider>
    </div>
  );
}
