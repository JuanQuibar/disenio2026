import { SenatusCard } from "./senatus-card";
import { fetchVideosPaisaje, fetchFotos } from "@/app/services/fetchs";

export async function SenatusWrapper() {
  const [videos, fotos] = await Promise.all([
    fetchVideosPaisaje(),
    fetchFotos(),
  ]);

  const videoSrc = videos[0] || "";
  const fotoSenatus = fotos.slice(27, 28);
  const imageSrc = fotoSenatus[0];

  return (
    <section className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        Senatur Romano
      </h3>

      <div className="p-2 pb-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
        {videoSrc && <SenatusCard mediaType="video" mediaSrc={videoSrc} />}

        <div className="border-t border-gray-200 my-1"></div>

        {imageSrc && (
          <SenatusCard
            mediaType="image"
            mediaSrc={imageSrc.src}
            alt={imageSrc.alt}
          />
        )}
      </div>
    </section>
  );
}
