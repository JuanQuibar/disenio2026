import type { NoticiaUltimaHora } from "./ultima-hora-noticias";
import { UltimaHoraResumenes } from "./ultima-hora-resumenes";

export function UltimaHoraAgenciaListado({ noticias }: { noticias: NoticiaUltimaHora[] }) {
  return <UltimaHoraResumenes noticias={noticias} variante="agencia" />;
}
