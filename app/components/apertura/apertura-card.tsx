import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

interface AperturaCardProps {
  foto: { src: string; alt: string };
}

export function AperturaCard({ foto }: AperturaCardProps) {
  return (
    <article className="news-opening-content rounded-md bg-white aspect-square border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 pb-6">
      <div className="news-opening-media">
        <Image
          src={foto.src}
          alt={foto.alt}
          width={525}
          height={350}
          sizes="(max-width: 1023px) 100vw, (max-width: 1360px) 58vw, 794px"
          className="w-full h-auto rounded-t-md overflow-hidden object-cover aspect-4/3"
        />
      </div>
      <div className="news-opening-copy px-2 pt-2">
        <div className="news-opening-mobile-byline flex gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            Sara González
          </p>
        </div>

        <p className="news-opening-desktop-category">
          DECISIÓN ESTRATÉGICA REGIONAL
        </p>

        <h2 className="font-serif font-bold text-[1.5rem]/[1.8rem]">
          {APERTURA_STORY.title}
        </h2>
        <p className="pt-2 bajada font-sans">{APERTURA_STORY.summary}</p>

        <div className="news-opening-desktop-keys">
          <p>Claves de la resolución ministerial:</p>
          <ul>
            {APERTURA_STORY.keys.map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>

        <div className="news-opening-desktop-meta">
          <span className="news-opening-desktop-author">
            <PencilIcon aria-hidden="true" />
            GUSTAVO DE MARINIS
          </span>
          <span>INFORME ESPECIAL</span>
        </div>
      </div>
    </article>
  );
}

const APERTURA_STORY = {
  title: getCalibrationTitle(3),
  summary: getCalibrationSummary(3),
  keys: [
    "Licitación pública de 14 compuertas automatizadas telemétricas en mayo",
    "Incentivos fiscales a fincas con tecnificación de riego por goteo certificado",
    "Monitoreo de glaciares satelital conjunto con IANIGLA-CONICET",
  ],
};
