import type { MamVideo } from "./types";

export const MAM_ORIGIN = "https://mam.grupoamericainterior.com.ar";

/** Playlist de reels usada en el prototipo. */
export const MAM_PLAYLIST_ID = "s95tWnrDuP";

interface MamApiVideo {
  id?: string;
  _id?: string;
  title?: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  diarioUnoPublication?: {
    articleUrl?: string;
  };
}

interface MamApiPlaylistResponse {
  name?: string;
  videos?: Array<{
    video?: MamApiVideo;
    order?: number;
  }>;
}

export async function fetchMamVideos(
  playlistId: string = MAM_PLAYLIST_ID
): Promise<MamVideo[]> {
  try {
    const res = await fetch(`${MAM_ORIGIN}/api/playlists/${playlistId}`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      console.error(
        `Error al obtener la playlist MAM ${playlistId}: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data: MamApiPlaylistResponse = await res.json();

    if (!Array.isArray(data.videos)) {
      return [];
    }

    return data.videos
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .flatMap((entry) => {
        const video = entry.video;
        const id = video?.id ?? video?._id;

        if (!video || !id || !video.videoUrl) {
          return [];
        }

        const normalized: MamVideo = {
          id,
          source: "mam",
          title: video.title ?? "",
          description: video.description ?? "",
          videoUrl: video.videoUrl,
          thumbnailUrl: video.thumbnailUrl ?? "",
          durationSeconds: video.duration ?? 0,
          articleUrl: video.diarioUnoPublication?.articleUrl,
        };

        return [normalized];
      });
  } catch (error) {
    console.error("Error fetching MAM playlist:", error);
    return [];
  }
}
