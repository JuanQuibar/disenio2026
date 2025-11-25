import { VideoCarruselSwiper } from "./videos-carrusel-swiper";
import { fetchVideosVerticales } from "@/app/services/fetchs";

export async function VideosWrapperCarrusel() {
  const videos = await fetchVideosVerticales();
  
  // Si no hay videos disponibles, no mostrar la sección
  if (!videos || videos.length === 0) {
    return null;
  }
  
  return (
    <>
      <div className="mb-4 border-t-2 separadores pb-2 pt-1">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          astra caelum
        </h3>
        <div className=" p-2 bg-white rounded-lg shadow-md">
          <VideoCarruselSwiper videos={videos} />
        </div>
      </div>
    </>
  );
}
