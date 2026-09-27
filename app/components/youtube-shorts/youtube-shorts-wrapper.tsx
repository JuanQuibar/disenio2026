import { fetchYoutubeShorts } from "@/app/services/videos/youtube";
import { VideoContenedor } from "../videos-shared/video-contenedor";
import { YoutubeShortsCarrusel } from "./youtube-shorts-carrusel";

export async function YoutubeShortsWrapper() {
  const shorts = await fetchYoutubeShorts();

  if (shorts.length === 0) {
    return null;
  }

  return (
    <VideoContenedor titulo="Shorts">
      <YoutubeShortsCarrusel shorts={shorts} />
    </VideoContenedor>
  );
}
