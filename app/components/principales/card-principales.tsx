import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import { CardSummary } from "./card-summary";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

interface CardPrincipalesProps {
  fotos: { src: string; alt: string };
  contentIndex: number;
  priority?: boolean;
}

export function CardPrincipales({
  fotos,
  contentIndex,
  priority = false,
}: CardPrincipalesProps) {
  return (
    <article className="news-principales-card rounded-md bg-white aspect-square border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 pb-6">
      <div className="news-principales-card-media">
        <Image
          src={fotos.src}
          alt={fotos.alt}
          width={525}
          height={350}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto rounded-t-md overflow-hidden object-cover aspect-4/3"
        />
      </div>
      <div className="news-principales-card-body px-2 pt-2">
        <h2 className="font-serif text-lg/6">
          {getCalibrationTitle(contentIndex + 4)}
        </h2>
        <p className="news-principales-card-summary pt-2 bajada font-sans">
          {getCalibrationSummary(contentIndex + 4)}
        </p>
        <div className="news-principales-card-byline flex items-center gap-1 pt-2">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            Sara González
          </p>
        </div>
      </div>
    </article>
  );
}
