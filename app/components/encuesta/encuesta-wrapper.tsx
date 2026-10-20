import { EncuestaCard } from "./encuesta-card";

export function EncuestaWrapper({ lateral = false }: { lateral?: boolean } = {}) {
  return (
    <div
      id={lateral ? "encuesta-lateral" : "encuesta"}
      data-home-module={lateral ? "encuesta-lateral" : "encuesta"}
      className={lateral ? "home-alternative-survey" : "participacion-panel mb-4 border-t-2 separadores pb-2 pt-1"}
    >
      <h3 className="participacion-mobile-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        {" "}
        encuesta
      </h3>
      <div className="pb-4">
        <EncuestaCard />
      </div>
    </div>
  );
}
