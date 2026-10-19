import { fetchFotos } from "@/app/services/fetchs";
import { AperturaCard } from "./apertura-card";

export async function AperturaWrapper() {
  const fotos = await fetchFotos();
  const fotoApertura = fotos.slice(39, 40);

  if (!fotoApertura[0]) {
    return null;
  }

  return (
    <>
      <div
        id="apertura"
        data-home-module="apertura"
        className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <h3 className="news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          apertum
        </h3>
        <div className="news-opening-card p-2 pb-4 bg-white rounded-lg shadow-md">
          <div className="news-opening-desktop-header" aria-hidden="true">
            <div className="news-opening-desktop-header-main">
              <span className="news-opening-desktop-header-marker" />
              <p>APERTUM • APERTURA DEL DÍA</p>
            </div>
            <span className="news-opening-desktop-header-edition">
              EDICIÓN CENTRAL
            </span>
          </div>
          <AperturaCard foto={fotoApertura[0]} />
        </div>
      </div>
    </>
  );
}
