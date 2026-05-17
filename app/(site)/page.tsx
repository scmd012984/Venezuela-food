import { DulceVenezuelaHome } from "@/app/components/dulce-venezuela/DulceVenezuelaHome";
import { getInstagramFeedData } from "@/lib/instagram-feed";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const instagramFeed = await getInstagramFeedData();
  return (
    <DulceVenezuelaHome
      instagramFeed={instagramFeed}
      initialSearchQuery={q?.trim() ?? ""}
    />
  );
}
