import { EditorialImage } from "@/app/components/editorial-image";
import { getCalibrationTitle } from "@/app/content/typography-calibration";

const stories = Array.from({ length: 4 }, (_, index) =>
  getCalibrationTitle(index + 1),
);

const categories = [
  "Polo Judicial",
  "Operativo Regional",
  "Peritajes Forenses",
  "Poder Judicial",
];

const authors: Record<number, string> = {
  1: "Julián Imazio",
  3: "Rosana Villegas",
};

interface CrimenListadoProps {
  fotos: Array<{ src: string; alt: string }>;
}

export function CrimenListado({ fotos }: CrimenListadoProps) {
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
            <EditorialImage
              desktopSizes="200px"
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 1023px) 96px, 112px"
            />
          </div>
          <div className="editorial-side-card-content flex min-w-0 flex-col justify-center">
            <span className="editorial-side-card-category hidden lg:block">
              {categories[index]}
            </span>
            <h3 className="editorial-side-card-title font-serif text-sm font-medium text-gray-900 leading-snug mb-1 transition-colors">
              {stories[index]}
            </h3>

            {/* Firmas solo en la segunda y cuarta noticia (índices 1 y 3) */}
            {authors[index] && (
              <div className="editorial-story-author flex items-center gap-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3 h-3 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
                    clipRule="evenodd"
                  />
                </svg>
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
