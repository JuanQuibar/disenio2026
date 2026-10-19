import type { NoticiaUltimaHora } from "./ultima-hora-noticias";
import { UltimaHoraResumenes } from "./ultima-hora-resumenes";

export function UltimaHoraCard({ noticias }: { noticias: NoticiaUltimaHora[] }) {
  return <UltimaHoraResumenes noticias={noticias} variante="timeline" />;
}
