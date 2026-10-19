import { UltimasNoticiasListado } from "./ultimas-noticias-listado";
import { fetchFotos } from "@/app/services/fetchs";

export async function UltimasNoticiasWrapper() {
  const fotos = await fetchFotos();
  const fotosUltimas = fotos.slice(28, 38);

  if (fotosUltimas.length === 0) {
    return null;
  }

  return (
    <div
      id="ultimas"
      data-home-module="ultimas"
      className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
    >
      <div className="ultimatem-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        <div className="ultimatem-heading-main">
          <span
            aria-hidden="true"
            className="ultimatem-heading-marker hidden lg:block"
          />
          <h3>
            <span className="lg:hidden">ultimatem</span>
            <span className="hidden lg:inline">
              ULTIMATEM • MÁS NOTICIAS DE CUYO Y EL PAÍS
            </span>
          </h3>
        </div>
        <span className="ultimatem-heading-meta hidden lg:block">
          ACTUALIZACIÓN CONTINUA
        </span>
      </div>
      <div className="ultimatem-panel p-2 bg-white rounded-lg shadow-md">
        <UltimasNoticiasListado fotos={fotosUltimas} />
      </div>
    </div>
  );
}
