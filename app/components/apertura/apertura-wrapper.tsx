import { fetchFotos } from "@/app/services/fetchs";
import { AperturaCard } from "./apertura-card";

export async function AperturaWrapper() {
  const fotos = await fetchFotos();
  const fotoApertura = fotos.slice(39, 40);

  return (
    <>
      <div className="mb-4 border-t-2 separadores pb-2 pt-1">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          apertum
        </h3>
        <div className=" p-2 pb-4 bg-white rounded-lg shadow-md">
          <AperturaCard foto={fotoApertura[0]} />
        </div>
      </div>
    </>
  );
}
