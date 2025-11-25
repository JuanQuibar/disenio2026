import { SociedadListado } from "./sociedad-card";
import { fetchFotos } from "@/app/services/fetchs";

export async function SociedadWrapper() {
    const fotos = await fetchFotos();
    const fotosSociedad = fotos.slice(10, 16);
    
    return (
        <>
            <div className="mb-4 border-t-2 separadores pb-2 pt-1">
                <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
                    {" "}
                    sociedad
                </h3>
                <div className=" p-2 pb-4 bg-white rounded-lg shadow-md">
                    <SociedadListado fotos={fotosSociedad} />
                </div>
            </div>
        </>
    );
}