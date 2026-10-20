import Image from "next/image";
import { OvacionPrincipal } from "./ovacion-principal";
import { OvacionListado } from "./ovacion-listado";
import { OvacionAgenda } from "./ovacion-agenda";
import { fetchDeportes } from "@/app/services/fetchs";
import { editorialPhotos } from "@/app/content/editorial-photos";

const tickerItems = [
  {
    kicker: "INDEPENDIENTE RIVADAVIA",
    text: "prepara su próximo desafío",
  },
  {
    kicker: "COPA ARGENTINA",
    text: "se define el cuadro de la nueva ronda",
  },
  {
    kicker: "MERCADO DE PASES",
    text: "últimas novedades de los equipos mendocinos",
  },
  {
    kicker: "LIGA PROFESIONAL",
    text: "resultados y posiciones actualizadas",
  },
] as const;

export async function OvacionWrapper() {
  const fotos = await fetchDeportes();
  const fotoPrincipal = fotos[0];
  const fotosListado = fotos.slice(1, 5);

  if (!fotoPrincipal) {
    return null;
  }

  return (
    <section
      id="ovacion"
      data-home-module="ovacion"
      className="news-module ovacion-integrated mb-4 border-t-2 separadores pb-2 pt-2"
    >
      <div className="news-section-heading flex items-center justify-between pb-2 pr-2 relative">
        {/* Logo Ovación a la izquierda */}
        <div className="news-ovacion-logo w-20 md:w-48">
          <Image
            src="/LOGO-OVACION.svg"
            alt="Ovación"
            width={193}
            height={40}
            className="object-contain object-left w-full h-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <aside
          className="news-ovacion-ticker"
          aria-label="Actualidad deportiva"
        >
          <div className="news-ovacion-ticker-track">
            {[false, true].map((duplicate) => (
              <span
                key={duplicate ? "ticker-copy" : "ticker-original"}
                className="news-ovacion-ticker-group"
                aria-hidden={duplicate || undefined}
              >
                {tickerItems.map((item) => (
                  <span
                    key={`${duplicate ? "copy" : "original"}-${item.kicker}`}
                    className="news-ovacion-ticker-item"
                  >
                    <span className="news-ovacion-ticker-dot" />
                    <strong>{item.kicker}</strong>
                    <span>{item.text}</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="news-ovacion-card p-2 mt-2 bg-white rounded-lg shadow-md">
        <OvacionAgenda />
        <div className="news-ovacion-content">
          <div className="news-ovacion-main">
            <OvacionPrincipal foto={editorialPhotos.ovacion} />
          </div>
          <div className="news-ovacion-divider my-2 border-t border-gray-200"></div>
          <div className="news-ovacion-list">
            <OvacionListado fotos={fotosListado} />
          </div>
        </div>
      </div>
    </section>
  );
}
