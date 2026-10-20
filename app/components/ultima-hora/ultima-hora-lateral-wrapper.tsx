import Image from "next/image";
import { EncuestaWrapper } from "@/app/components/encuesta/encuesta-wrapper";
import type { NoticiaUltimaHora } from "./ultima-hora-noticias";
import { avancesIaNoticias } from "./avances-ia-noticias";
import { UltimaHoraReloj } from "./ultima-hora-reloj";
import { UltimaHoraResumenes } from "./ultima-hora-resumenes";

export function UltimaHoraLateralWrapper({ noticias }: { noticias: NoticiaUltimaHora[] }) {
  if (noticias.length === 0) return null;

  return (
    <aside className="home-alternative-sidebar" aria-label="Actualidad y participación">
      <section data-home-module="ahora-desktop" aria-labelledby="ahora-desktop-title">
        <h2 id="ahora-desktop-title" className="home-alternative-sidebar-heading">
          <span aria-hidden="true" className="relative inline-flex h-2 w-2 shrink-0">
            <span className="motion-safe:animate-ping motion-safe:[animation-duration:2s] absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          AHORA
          <UltimaHoraReloj />
        </h2>
        <UltimaHoraResumenes noticias={noticias.slice(0, 6)} variante="timeline" apariencia="agencia" />
      </section>

      <section className="home-alternative-ad-container" aria-label="Publicidad">
        <div className="home-alternative-divider"><span>PUBLICIDAD</span></div>
        <div className="home-alternative-ad">
          <Image src="/aviso_pepsi.jpeg" alt="Pepsi: Nuevo sabor, nueva generación" width={300} height={600} sizes="(max-width: 1100px) 224px, 300px" />
        </div>
      </section>

      <div className="home-alternative-divider home-alternative-participation"><span>PARTICIPACIÓN</span></div>
      <EncuestaWrapper lateral />

      <section data-home-module="avances-ia" className="home-alternative-ia" aria-labelledby="avances-ia-title">
        <h2 id="avances-ia-title" className="home-alternative-sidebar-heading">
          <svg className="home-alternative-ia-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4.25 8 8m4-3.75L8 8m0 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="4" cy="4" r="2" fill="currentColor" />
            <circle cx="12" cy="4" r="2" fill="currentColor" />
            <circle cx="8" cy="12" r="2" fill="currentColor" />
          </svg>
          AVANCES DE LA IA
        </h2>
        <UltimaHoraResumenes noticias={avancesIaNoticias} variante="agencia" mostrarPastillas={false} />
      </section>
    </aside>
  );
}
