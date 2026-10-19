import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

const story = {
  title: getCalibrationTitle(0),
  summary: getCalibrationSummary(0),
  author: "Analía Doña",
};

interface PoliticaPrincipalProps {
  foto: { src: string; alt: string };
}

export function PoliticaPrincipal({ foto }: PoliticaPrincipalProps) {
  return (
    <article className="editorial-lead-story mb-2">
      <div className="editorial-lead-story-media relative aspect-[3/2] w-full overflow-hidden rounded-md mb-2">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 1023px) 100vw, (max-width: 1360px) 58vw, 730px"
        />
      </div>
      <div className="editorial-lead-story-body">
        <h2 className="editorial-lead-story-title font-serif text-lg leading-snug text-gray-900 mb-1 transition-colors">
          {story.title}
        </h2>

        <p className="editorial-lead-story-summary font-sans bajada mb-2">
          {story.summary}
        </p>

        <div className="editorial-story-author flex items-center gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            {story.author}
          </p>
        </div>
      </div>
    </article>
  );
}
