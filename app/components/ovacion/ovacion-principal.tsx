import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

const story = {
  title: getCalibrationTitle(8),
  summary: getCalibrationSummary(8),
  author: "Analía Doña",
};

interface OvacionPrincipalProps {
  foto: { src: string; alt: string };
}

export function OvacionPrincipal({ foto }: OvacionPrincipalProps) {
  return (
    <div className="news-ovacion-principal mb-2">
      <div className="news-ovacion-main-image relative aspect-[4/3] w-full overflow-hidden rounded-md mb-2">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="">
        <p className="news-ovacion-kicker hidden lg:block">
          INDEPENDIENTE RIVADAVIA
        </p>
        <h2 className="font-sans font-bold text-lg leading-snug text-gray-900 mb-1">
          {story.title}
        </h2>

        <p className="news-ovacion-summary font-sans bajada mb-2">
          {story.summary}
        </p>

        <div className="news-ovacion-byline flex items-center gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            {story.author}
          </p>
        </div>
      </div>
    </div>
  );
}
