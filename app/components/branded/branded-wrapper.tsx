import Image from "next/image";
import { fetchBrandedVideos } from "@/app/services/videos/pexels";
import { VideoContenedor } from "../videos-shared/video-contenedor";
import { BrandedCarrusel } from "./branded-carrusel";
import { BRANDED_VERTICAL_ACTIVA } from "./branded-content";

export async function BrandedWrapper() {
  const vertical = BRANDED_VERTICAL_ACTIVA;
  const videos = await fetchBrandedVideos(vertical);

  if (videos.length === 0) {
    return null;
  }

  // Pexels solo aporta el video de muestra: el copy comercial lo define la vertical.
  const videosConCopy = videos.map((video, index) => ({
    ...video,
    title: vertical.copys[index % vertical.copys.length] ?? "",
  }));

  const header = (
    <div className="flex items-center justify-between pb-2">
      {vertical.logoSrc ? (
        <Image
          src={vertical.logoSrc}
          alt={vertical.logoAlt ?? vertical.brandName}
          width={1000}
          height={190}
          className="p-0 w-36 h-auto"
        />
      ) : (
        <span className="font-serif text-xl font-bold italic text-teal-800">
          {vertical.brandName}
        </span>
      )}

      <div className="flex h-6 w-24 items-center justify-center rounded bg-gray-200 font-sans text-xs uppercase tracking-wider text-gray-500">
        Sponsor
      </div>
    </div>
  );

  return (
    <VideoContenedor titulo={vertical.titulo} header={header}>
      <BrandedCarrusel videos={videosConCopy} />
    </VideoContenedor>
  );
}
