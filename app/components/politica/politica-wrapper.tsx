import { PoliticaPrincipal } from "./politica-principal";
import { PoliticaListado } from "./politica-listado";
import { fetchFotos } from "@/app/services/fetchs";
import { EditorialLeadListLayout } from "@/app/components/news-shared/editorial-lead-list-layout";

export async function PoliticaWrapper() {
  const fotos = await fetchFotos();
  const fotosPolitica = fotos.slice(6, 11);

  const principalFoto = fotosPolitica[0];
  const listaFotos = fotosPolitica.slice(1, 5);

  if (!principalFoto) return null;

  return (
    <EditorialLeadListLayout
      id="politica"
      moduleName="politica"
      mobileTitle="Política"
      desktopTitle="Política & Gobierno"
      desktopMeta="Legislatura y Poder Ejecutivo"
      lead={<PoliticaPrincipal foto={principalFoto} />}
      list={<PoliticaListado fotos={listaFotos} />}
    />
  );
}
