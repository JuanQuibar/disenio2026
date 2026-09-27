import Image from "next/image";
import { OvacionPrincipal } from "./ovacion-principal";
import { OvacionListado } from "./ovacion-listado";
import { OvacionAgenda } from "./ovacion-agenda";
import { fetchDeportes } from "@/app/services/fetchs";

export async function OvacionWrapper() {
  const fotos = await fetchDeportes();
  const fotoPrincipal = fotos[0];
  const fotosListado = fotos.slice(1, 5);

  return (
    <section className="mb-4 border-t-2 separadores pb-2 pt-2">
      <div className="flex items-center justify-between pb-2 pr-2 relative">
        {/* Logo Ovación a la izquierda */}
        <div className="w-20 md:w-48">
          <Image
            src="/LOGO-OVACION.svg"
            alt="Ovación"
            width={193}
            height={40}
            className="object-contain object-left w-full h-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="p-2 mt-2 bg-white rounded-lg shadow-md">
        <OvacionAgenda />
        {fotoPrincipal && <OvacionPrincipal foto={fotoPrincipal} />}
        <div className="my-2 border-t border-gray-200"></div>
        <OvacionListado fotos={fotosListado} />
      </div>
    </section>
  );
}
