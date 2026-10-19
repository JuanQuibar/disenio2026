import { UltimaHoraAgenciaListado } from "./ultima-hora-agencia-listado";
import { UltimaHoraReloj } from "./ultima-hora-reloj";
import type { NoticiaUltimaHora } from "./ultima-hora-noticias";

export function UltimaHoraAgenciaWrapper({ noticias }: { noticias: NoticiaUltimaHora[] }) {
  return (
    <div data-home-module="ultima-hora-agencia" className="pt-1 pb-2 lg:hidden">
    <section
      aria-label="Última hora: variante agencia"
      className="news-module rounded-lg border border-white py-2"
    >
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal px-2 flex items-center gap-2">
        <span className="inline-flex items-center gap-2 border-b border-white pb-2 mb-2">
        <span
          aria-hidden="true"
          className="relative inline-flex h-2 w-2 shrink-0"
        >
          <span className="motion-safe:animate-ping motion-safe:[animation-duration:2s] absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
          <span>AHORA</span>
          <UltimaHoraReloj />
        </span>
      </h3>
      <div className="px-2">
        <UltimaHoraAgenciaListado noticias={noticias} />
      </div>
    </section>
    </div>
  );
}
