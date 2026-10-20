import { ChartBarSquareIcon } from "@heroicons/react/24/solid";
import { SinFotosCard } from "./sin-fotos-card";
import { LegionariusVideo } from "./legionarius-video";

export function ListadoWrapper() {
  return (
    <>
      <div
        id="listado"
        data-home-module="listado"
        className="listado-module news-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <h3 className="listado-mobile-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          legionarius
        </h3>
        <div className="listado-panel p-2 pb-4 bg-white rounded-lg shadow-md">
          <div className="listado-desktop-header">
            <div className="listado-desktop-heading">
              <ChartBarSquareIcon
                aria-hidden="true"
                className="listado-desktop-icon"
              />
              <h3>GRÁFICO INTERACTIVO</h3>
            </div>
            <span className="listado-desktop-meta">EDICIÓN ESPCIAL</span>
          </div>
          <div className="listado-mobile-content">
            <SinFotosCard />
          </div>
          <LegionariusVideo />
        </div>
      </div>
    </>
  );
}
