import { GenteListado } from "./gente-card";
import { fetchFotos } from "@/app/services/fetchs";

export async function GenteWrapper() {
  const fotos = await fetchFotos();
  const fotosGente = fotos.slice(16, 22);

  return (
    <>
      <div className="mb-4 border-t-2 separadores pb-2 pt-1">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          gente
        </h3>
        <div className=" p-2 pb-4 bg-white rounded-lg shadow-md">
          <GenteListado fotos={fotosGente} />
        </div>
      </div>
    </>
  );
}
