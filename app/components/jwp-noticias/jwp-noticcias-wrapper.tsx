import { JwpNoticiasSwiper } from "./jwp-noticias-swiper";
import { JWVideo } from "./jwp-noticias-card";

export interface JWPlaylistResponse {
  length: number;
  title: string; // Título de la playlist
  playlist: JWVideo[]; // Array de videos
}

async function getPlaylistData(
  playlistId: string
): Promise<JWPlaylistResponse> {
  // Usamos fetch nativo. Next.js cacheará esto por defecto.
  // Si necesitas datos frescos siempre, añade { cache: 'no-store' }

  const res = await fetch(
    `https://cdn.jwplayer.com/v2/playlists/${playlistId}`
  );

  if (!res.ok) {
    throw new Error("Fallo al obtener la playlist de JWPlayer");
  }

  return res.json();
}

export async function JwpNoticiasWrapper() {
  const MY_PLAYLIST_ID = "Qz8iCJbC";
  //   const MY_PLAYLIST_ID = "jB63jc49";
  const videos = await getPlaylistData(MY_PLAYLIST_ID);

  // Si no hay videos disponibles, no mostrar la sección
  if (!videos || videos.length === 0) {
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
