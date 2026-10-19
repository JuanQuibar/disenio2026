import { CarruselSwiper } from "./carrusel-swiper";
import { fetchFotos } from "@/app/services/fetchs";

export async function PrincipalesWrapper() {
  const fotos = await fetchFotos();
  const fotosPrincipales = fotos.slice(0, 6);

  if (fotosPrincipales.length === 0) {
    return null;
  }

  return (
    <>
      <div
        id="principales"
        data-home-module="principales"
        className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <h3 className="news-section-heading news-principales-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          <span className="news-principales-heading-main">
            <span
              className="news-principales-heading-marker"
              aria-hidden="true"
            />
            <span className="news-principales-heading-mobile">
              legionarius
            </span>
            <span className="news-principales-heading-desktop">
              Legionarius • Noticias destacadas
            </span>
          </span>
          <span className="news-principales-heading-meta">Al minuto</span>
        </h3>
        <div className="news-principales-panel p-2 pb-4 bg-white rounded-lg shadow-md">
          <CarruselSwiper fotos={fotosPrincipales} />
        </div>
      </div>
    </>
  );
}
