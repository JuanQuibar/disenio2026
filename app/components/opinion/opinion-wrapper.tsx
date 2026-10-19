import { OpinionListado } from "./opinion-listado";

export function OpinionWrapper() {
  return (
    <div
      id="opinion"
      data-home-module="opinion"
      className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
    >
      <div className="opinion-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        <div className="opinion-heading-main">
          <span
            aria-hidden="true"
            className="opinion-heading-marker hidden lg:block"
          />
          <h3>
            <span className="lg:hidden">opinión</span>
            <span className="hidden lg:inline">
              Firmas &amp; Opinión Editorial
            </span>
          </h3>
        </div>
        <span className="opinion-heading-meta hidden lg:block">
          Las miradas más leídas de la región
        </span>
      </div>
      <div className="opinion-panel p-2 pb-4 bg-white rounded-lg shadow-md">
        <OpinionListado />
      </div>
    </div>
  );
}
