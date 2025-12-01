import { getPlaylistData } from "@/app/services/fetchs";
import { JwpViralesSwiper } from "./jwp-virales-swiper";

export async function JwpViralesWrapper() {
  // Usamos el otro ID que estaba comentado en noticias como posible ID para virales
  // O si no funciona, el usuario nos dirá el correcto.
  const VIRALES_PLAYLIST_ID = "5bp8jLVq";

  const videos = await getPlaylistData(VIRALES_PLAYLIST_ID);

  if (!videos || !videos.playlist || videos.playlist.length === 0) {
    return null;
  }

  return (
    <div className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        Virales
      </h3>
      <div className="p-2 bg-white rounded-lg shadow-md">
        <JwpViralesSwiper videos={videos.playlist} />
      </div>
    </div>
  );
}
