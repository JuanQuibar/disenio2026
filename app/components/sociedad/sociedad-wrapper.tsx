import { SociedadListado, SociedadPrincipal } from "./sociedad-card";
import { fetchFotos } from "@/app/services/fetchs";
import { EditorialLeadListLayout } from "@/app/components/news-shared/editorial-lead-list-layout";

export async function SociedadWrapper() {
  const fotos = await fetchFotos();
  const fotosSociedad = fotos.slice(11, 16);
  const principalFoto = fotosSociedad[0];
  const listaFotos = fotosSociedad.slice(1);

  if (!principalFoto) return null;

  return (
    <EditorialLeadListLayout
      id="sociedad"
      moduleName="sociedad"
      mobileTitle="Sociedad"
      desktopTitle="Sociedad & Comunidad"
      desktopMeta="Educación, Salud y Ciudad"
      tone="society"
      lead={<SociedadPrincipal foto={principalFoto} />}
      list={<SociedadListado fotos={listaFotos} />}
    />
  );
}
