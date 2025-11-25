import { UltimasNoticiasListado } from "./ultimas-noticias-listado";
import { fetchFotos } from "@/app/services/fetchs";

export async function UltimasNoticiasWrapper() {
  const fotos = await fetchFotos();
  const fotosUltimas = fotos.slice(16, 26);
  
  return (
    <div className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        ultimatem
      </h3>
      <div className="p-2 bg-white rounded-lg shadow-md">
        <UltimasNoticiasListado fotos={fotosUltimas} />
      </div>
    </div>
  );
}
