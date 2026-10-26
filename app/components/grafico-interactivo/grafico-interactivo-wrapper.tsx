import { ChartBarSquareIcon } from "@heroicons/react/24/solid";
import { GraficoVideoDemo } from "./grafico-video-demo";

export function GraficoInteractivoWrapper() {
  return (
    <section
      id="grafico-interactivo"
      data-home-module="grafico-interactivo"
      className="grafico-module news-module mb-4 border-t-2 separadores pb-2 pt-1"
    >
      <h3 className="grafico-mobile-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        gráfico interactivo
      </h3>
      <div className="grafico-panel p-2 pb-4 bg-white rounded-lg shadow-md">
        <div className="grafico-desktop-header">
          <div className="grafico-desktop-heading">
            <ChartBarSquareIcon
              aria-hidden="true"
              className="grafico-desktop-icon"
            />
            <h3>GRÁFICO INTERACTIVO</h3>
          </div>
          <span className="grafico-desktop-meta">EDICIÓN ESPECIAL</span>
        </div>
        <div className="grafico-mobile-content flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-md border border-dashed border-[#1c69a8]/40 bg-[#f4f8fb] px-6 text-center text-[#0f3d61] md:aspect-video">
          <ChartBarSquareIcon aria-hidden="true" className="h-12 w-12" />
          <p className="font-sans text-base font-semibold leading-snug">
            Espacio reservado para el gráfico interactivo responsive
          </p>
        </div>
        <GraficoVideoDemo />
      </div>
    </section>
  );
}
