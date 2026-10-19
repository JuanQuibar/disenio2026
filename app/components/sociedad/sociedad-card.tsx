import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

interface SociedadNoticiasProps {
  fotos: Array<{ src: string; alt: string }>;
}

const stories = Array.from({ length: 5 }, (_, index) =>
  getCalibrationTitle(index),
);

const leadStory = {
  summary: getCalibrationSummary(0),
  author: "Soledad Segade",
};

const categories = [
  "Salud Pública",
  "Biodiversidad",
  "Educación",
  "Patrimonio",
];

const authors: Record<number, string> = {
  0: "Daniel Calivares",
  2: "Miguel Guayama",
};

interface SociedadPrincipalProps {
  foto: { src: string; alt: string };
}

export function SociedadPrincipal({ foto }: SociedadPrincipalProps) {
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
          {stories[0]}
        </h2>
        <p className="editorial-lead-story-summary font-sans bajada mb-2">
          {leadStory.summary}
        </p>
        <div className="editorial-story-author flex items-center gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            {leadStory.author}
          </p>
        </div>
      </div>
    </article>
  );
}

export function SociedadListado({ fotos }: SociedadNoticiasProps) {
  return (
    <div className="editorial-side-list news-story-list flex flex-col">
      {fotos.map((foto, index) => (
        <article
          key={index}
          className={`editorial-side-card news-story-item flex gap-3 py-3 transition-colors ${
            index !== fotos.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="editorial-side-card-media relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 1023px) 96px, 96px"
            />
          </div>
          <div className="editorial-side-card-content flex min-w-0 flex-col justify-center">
            <span className="editorial-side-card-category hidden lg:block">
              {categories[index]}
            </span>
            <h3 className="editorial-side-card-title font-serif text-sm font-medium text-gray-900 leading-snug mb-1 transition-colors">
              {stories[index + 1]}
            </h3>
            {authors[index] && (
              <div className="editorial-story-author flex items-center gap-1 mt-1">
                <PencilIcon className="w-3 h-3 text-gray-500" />
                <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
                  {authors[index]}
                </p>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
