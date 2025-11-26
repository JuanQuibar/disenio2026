import { EncuestaCard } from "./encuesta-card";

export function EncuestaWrapper() {
  return (
    <div className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        {" "}
        encuesta
      </h3>
      <div className="pb-4">
        <EncuestaCard />
      </div>
    </div>
  );
}
