import { JwpNoticiasSwiper } from "./jwp-noticias-swiper";
import { getPlaylistData } from "@/app/services/fetchs";

export async function JwpNoticiasWrapper() {
  const MY_PLAYLIST_ID = "Qz8iCJbC";
  //   const MY_PLAYLIST_ID = "jB63jc49";
  const videos = await getPlaylistData(MY_PLAYLIST_ID);

  // Si no hay videos disponibles, no mostrar la sección
  if (!videos || !videos.playlist || videos.playlist.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mb-4 border-t-2 separadores pb-2 pt-1">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          soldi entrare
        </h3>
        <div className=" p-2 bg-white rounded-lg shadow-md">
          <JwpNoticiasSwiper videos={videos.playlist} />
        </div>
      </div>
    </>
  );
}
