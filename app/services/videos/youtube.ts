import { unstable_noStore as noStore } from "next/cache";
import type { YoutubeShort } from "./types";

const YOUTUBE_CHANNEL_ID = "UC64ZNqX0FQHabP8iIkmnR3A";
const YOUTUBE_SHORTS_PLAYLIST_ID = "PLDedS24i-fT9rjzB0-Zd2LNe_z3YuZ8BK";
const MAX_RESULTS = 12;

interface YoutubePlaylistItem {
  snippet?: {
    title?: string;
    resourceId?: { videoId?: string };
    thumbnails?: Record<string, { url?: string } | undefined>;
  };
}

export async function fetchYoutubeShorts(): Promise<YoutubeShort[]> {
  noStore();

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  if (!apiKey) {
    console.error("YouTube API Key no definida");
    return [];
  }

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&channelId=${YOUTUBE_CHANNEL_ID}&playlistId=${YOUTUBE_SHORTS_PLAYLIST_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(
        "Error fetching YouTube Shorts:",
        res.status,
        res.statusText
      );
      return [];
    }

    const data: { items?: YoutubePlaylistItem[] } = await res.json();

    if (!Array.isArray(data.items)) {
      return [];
    }

    return data.items.flatMap((item) => {
      const snippet = item.snippet;
      const id = snippet?.resourceId?.videoId;
      const thumbnails = snippet?.thumbnails ?? {};
      const thumbnailUrl =
        thumbnails.maxres?.url ??
        thumbnails.high?.url ??
        thumbnails.medium?.url;

      if (!id || !thumbnailUrl) {
        return [];
      }

      const normalized: YoutubeShort = {
        id,
        source: "youtube",
        title: snippet?.title ?? "",
        thumbnailUrl,
      };

      return [normalized];
    });
  } catch (error) {
    console.error("Error fetching YouTube Shorts:", error);
    return [];
  }
}
