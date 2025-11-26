import { CrimenPrincipal } from "./crimen-principal";
import { CrimenListado } from "./crimen-listado";
import { fetchFotos } from "@/app/services/fetchs";

interface CrimenWrapperProps {
  fotos: Array<{ src: string; alt: string }>;
}

export async function CrimenWrapper() {
  const fotos = await fetchFotos();
  const fotosCrimen = fotos.slice(22, 27);

  const principalFoto = fotosCrimen[0];
  const listaFotos = fotosCrimen.slice(1, 5);

  if (!principalFoto) return null;

  return (
    <section className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        Crimen
      </h3>

      <div className="p-2 pb-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
        <CrimenPrincipal foto={principalFoto} />
        <div className="border-t border-gray-200 my-1"></div>
        <CrimenListado fotos={listaFotos} />
      </div>
    </section>
  );
}
