import { DulceVenezuelaHome } from "@/app/components/dulce-venezuela/DulceVenezuelaHome";
import { getInstagramFeedData } from "@/lib/instagram-feed";

export default async function Home() {
  const instagramFeed = await getInstagramFeedData();
  return <DulceVenezuelaHome instagramFeed={instagramFeed} />;
}
