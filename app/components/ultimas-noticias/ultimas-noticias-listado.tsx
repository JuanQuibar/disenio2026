import { EditorialImage } from "@/app/components/editorial-image";
import { getCalibrationTitle } from "@/app/content/typography-calibration";
import { ArrowDownIcon } from "@/app/components/icons";

interface UltimasNoticiasListadoProps {
  fotos: Array<{ src: string; alt: string }>;
}

const stories = Array.from({ length: 10 }, (_, index) =>
  getCalibrationTitle(index),
);

const authors = [
  "María González",
  "Carlos Pérez",
  "Laura Martínez",
  "Diego Sánchez",
];

const categories = [
  "LOREM IPSUM",
  "DOLOR SIT",
  "AMET CONSECTETUR",
  "ADIPISCING ELIT",
  "SED EIUSMOD",
  "TEMPOR INCIDIDUNT",
  "UT LABORE",
  "DOLORE MAGNA",
  "ALIQUA ENIM",
  "MINIM VENIAM",
];

export function UltimasNoticiasListado({ fotos }: UltimasNoticiasListadoProps) {
  return (
    <>
      <div className="news-latest-grid">
        {fotos.map((foto, index) => (
          <article
            key={index}
            className={`news-latest-item flex gap-3 py-3 ${
              index !== fotos.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex-1 flex flex-col justify-start">
              <span className="ultimatem-category hidden lg:block">
                {categories[index]}
              </span>
              <h3 className="ultimatem-title font-serif text-base text-gray-900 leading-snug mb-1">
                {stories[index]}
              </h3>

              {[2, 4, 7, 9].includes(index) && (
                <div className="ultimatem-author flex items-center gap-1 mt-1">
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
                    {authors[[2, 4, 7, 9].indexOf(index)]}
                  </p>
                </div>
              )}
            </div>

            <div className="ultimatem-image flex-1 relative aspect-[4/3] flex-shrink-0 overflow-hidden rounded-md">
              <EditorialImage
                desktopSizes="200px"
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 50vw, 128px"
              />
            </div>
          </article>
        ))}
      </div>
      <button type="button" className="ultimatem-load-more hidden lg:flex">
        <ArrowDownIcon className="h-[18px] w-[18px]" />
        <span>Cargar más noticias de la edición de hoy</span>
      </button>
    </>
  );
}
