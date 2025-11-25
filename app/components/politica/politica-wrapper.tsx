import { PoliticaPrincipal } from "./politica-principal";
import { PoliticaListado } from "./politica-listado";
import { fetchFotos } from "@/app/services/fetchs";

interface PoliticaWrapperProps {
  fotos: Array<{ src: string; alt: string }>;
}

export async function PoliticaWrapper() {
  const fotos = await fetchFotos();
  const fotosPolitica = fotos.slice(5, 10);
  
  const principalFoto = fotosPolitica[0];
  const listaFotos = fotosPolitica.slice(1, 5);

  if (!principalFoto) return null;

  return (
    <section className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        Política
      </h3>
      
      <div className="p-2 pb-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
        <PoliticaPrincipal foto={principalFoto} />
        <div className="border-t border-gray-200 my-1"></div>
        <PoliticaListado fotos={listaFotos} />
      </div>
    </section>
  );
}
