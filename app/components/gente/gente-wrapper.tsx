import { GenteListado } from "./gente-card";
import { fetchFotos } from "@/app/services/fetchs";

export async function GenteWrapper() {
  const fotos = await fetchFotos();
  const fotosGente = fotos.slice(16, 22);

  if (fotosGente.length === 0) {
    return null;
  }

  return (
    <>
      <div
        id="gente"
        data-home-module="gente"
        className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <div className="gente-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          <div className="gente-heading-main">
            <span
              aria-hidden="true"
              className="gente-heading-marker hidden lg:block"
            />
            <h3>
              <span className="lg:hidden">gente</span>
              <span className="hidden lg:inline">
                Gente &amp; Cultura Cuyana
              </span>
            </h3>
          </div>
          <span className="gente-heading-meta hidden lg:block">
            Personajes &amp; Retratos
          </span>
        </div>
        <div className="news-portrait-grid p-2 pb-4 bg-white rounded-lg shadow-md">
          <GenteListado fotos={fotosGente} />
        </div>
      </div>
    </>
  );
}
