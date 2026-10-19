import { CrimenPrincipal } from "./crimen-principal";
import { CrimenListado } from "./crimen-listado";
import { fetchFotos } from "@/app/services/fetchs";
import { EditorialLeadListLayout } from "@/app/components/news-shared/editorial-lead-list-layout";

export async function CrimenWrapper() {
  const fotos = await fetchFotos();
  const fotosCrimen = fotos.slice(22, 27);

  const principalFoto = fotosCrimen[0];
  const listaFotos = fotosCrimen.slice(1, 5);

  if (!principalFoto) return null;

  return (
    <EditorialLeadListLayout
      id="crimen"
      moduleName="crimen"
      mobileTitle="Crimen"
      desktopTitle="Crimen & Policiales"
      desktopMeta="Investigación y Justicia"
      tone="crime"
      lead={<CrimenPrincipal foto={principalFoto} />}
      list={<CrimenListado fotos={listaFotos} />}
    />
  );
}
