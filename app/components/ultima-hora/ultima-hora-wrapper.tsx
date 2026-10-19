import { UltimaHoraCard } from "./utlima-hora-card";
import { UltimaHoraReloj } from "./ultima-hora-reloj";
import type { NoticiaUltimaHora } from "./ultima-hora-noticias";

export function UltimaHoraWrapper({ noticias }: { noticias: NoticiaUltimaHora[] }) {
  return (
    <div data-home-module="ultima-hora-timeline" className="pt-1 pb-2 lg:hidden">
      <div className="news-module pb-2 rounded-lg border border-white">
        <h3 className="text-cabezal font-sans font-bold uppercase rounded-t-[7px] bg-gray-100 text-black px-2 py-1 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="relative inline-flex h-2 w-2 shrink-0"
          >
            <span className="motion-safe:animate-ping motion-safe:[animation-duration:2s] absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          AHORA
          <UltimaHoraReloj compacto />
        </h3>
        <div className=" px-2 bg-[color-background] ">
          <UltimaHoraCard noticias={noticias} />
        </div>
      </div>
    </div>
  );
}
