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

  if (!videoSrc && !imageSrc) {
    return null;
  }

  return (
    <section
      id="senatus"
      data-home-module="senatus"
      className="participacion-panel mb-4 border-t-2 separadores pb-2 pt-1"
    >
      <h3 className="participacion-mobile-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        Senatur Romano
      </h3>

      <div className="participacion-desktop-header senatus-desktop-header">
        <div className="participacion-desktop-header-main">
          <svg
            aria-hidden="true"
            className="participacion-desktop-header-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="m3 9 9-5 9 5" />
            <path d="M5 10v7m4-7v7m6-7v7m4-7v7M3 20h18M4 17h16" />
          </svg>
          <h2>SENATUS • ANÁLISIS LEGISLATIVO</h2>
        </div>
        <span>OBSERVATORIO CUYO</span>
      </div>

      <div className="senatus-panel p-2 pb-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
        {videoSrc && (
          <SenatusCard
            mediaType="video"
            mediaSrc={videoSrc}
            contentIndex={0}
          />
        )}

        {videoSrc && imageSrc && (
          <div className="senatus-divider border-t border-gray-200 my-1"></div>
        )}

        {imageSrc && (
          <SenatusCard
            mediaType="image"
            mediaSrc={imageSrc.src}
            contentIndex={1}
            alt={imageSrc.alt}
          />
        )}
      </div>
    </section>
  );
}
