export type InstagramFeedItem = {
  id: string;
  imageSrc: string;
  permalink: string;
};

export type InstagramFeedData = {
  items: InstagramFeedItem[];
  profileUrl: string;
  handle: string;
};

const GRAPH_VERSION = "v21.0";

function mapMediaEntry(raw: Record<string, unknown>): InstagramFeedItem | null {
  const id = typeof raw.id === "string" ? raw.id : null;
  const permalink = typeof raw.permalink === "string" ? raw.permalink : null;
  if (!id || !permalink) return null;

  const mediaType = typeof raw.media_type === "string" ? raw.media_type : "";
  let imageSrc = "";
  if (mediaType === "VIDEO") {
    imageSrc =
      typeof raw.thumbnail_url === "string"
        ? raw.thumbnail_url
        : typeof raw.media_url === "string"
          ? raw.media_url
          : "";
  } else if (mediaType === "IMAGE") {
    imageSrc = typeof raw.media_url === "string" ? raw.media_url : "";
  } else if (mediaType === "CAROUSEL_ALBUM") {
    imageSrc =
      typeof raw.media_url === "string"
        ? raw.media_url
        : typeof raw.thumbnail_url === "string"
          ? raw.thumbnail_url
          : "";
  } else {
    imageSrc =
      typeof raw.media_url === "string"
        ? raw.media_url
        : typeof raw.thumbnail_url === "string"
          ? raw.thumbnail_url
          : "";
  }

  if (!imageSrc) return null;
  return { id, imageSrc, permalink };
}

/**
 * Últimas publicaciones de Instagram (API Graph, cuenta profesional).
 * Sin `INSTAGRAM_ACCESS_TOKEN` / `INSTAGRAM_USER_ID` devuelve lista vacía (UI con fallback).
 */
export async function getInstagramFeedData(): Promise<InstagramFeedData> {
  const handle =
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE?.replace(/^@/, "").trim() ||
    "dulcevenezuela";
  const profileUrl = `https://www.instagram.com/${handle}/`;

  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  if (!token || !userId) {
    return { items: [], profileUrl, handle };
  }

  const url = new URL(
    `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(userId)}/media`,
  );
  url.searchParams.set(
    "fields",
    "id,media_type,media_url,permalink,thumbnail_url",
  );
  url.searchParams.set("limit", "6");
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return { items: [], profileUrl, handle };
    }

    const json = (await res.json()) as { data?: unknown[] };
    const rows = Array.isArray(json.data) ? json.data : [];
    const items: InstagramFeedItem[] = [];

    for (const row of rows) {
      if (items.length >= 6) break;
      if (!row || typeof row !== "object") continue;
      const mapped = mapMediaEntry(row as Record<string, unknown>);
      if (mapped) items.push(mapped);
    }

    return { items, profileUrl, handle };
  } catch {
    return { items: [], profileUrl, handle };
  }
}
