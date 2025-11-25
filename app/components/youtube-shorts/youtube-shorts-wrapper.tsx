import { fetchYoutubeShorts } from "../../services/fetchs";
import { YoutubeShortsCarrusel } from "./youtube-shorts-carrusel";

export async function YoutubeShortsWrapper() {
  const shorts = await fetchYoutubeShorts();

  if (!shorts || shorts.length === 0) {
    return null;
  }

  return (
    <section className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        Shorts
      </h3>
      
      <div className="p-2 bg-white rounded-lg shadow-md">
        <YoutubeShortsCarrusel shorts={shorts} />
      </div>
    </section>
  );
}
