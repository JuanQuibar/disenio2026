import { fetchMamVideos } from "@/app/services/videos/mam";
import { VideoContenedor } from "../videos-shared/video-contenedor";
import { MamCarrusel } from "./mam-carrusel";

export async function CarruselMamWrapper() {
  const videos = await fetchMamVideos();

  if (videos.length === 0) {
    return null;
  }

  return (
    <VideoContenedor titulo="MAM">
      <MamCarrusel videos={videos} />
    </VideoContenedor>
  );
}
