import { PencilIcon } from "@heroicons/react/16/solid";
import {
  BoltIcon,
  SignalIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

const story = {
  title: getCalibrationTitle(0),
  summary: getCalibrationSummary(0),
  author: "Natalia Sosa Abagianos",
  related: [
    {
      mobileCategory: "Oqua pronobis",
      desktopCategory: "Vialidad Provincial",
      title: getCalibrationTitle(1),
      summary: getCalibrationSummary(1),
    },
    {
      mobileCategory: "Pectrom dicta",
      desktopCategory: "Mendoza & Región",
      title: getCalibrationTitle(2),
      summary: getCalibrationSummary(2),
      author: "Facundo García",
    },
  ],
};

export function MuyDestacada({ videoUrl }: { videoUrl: string }) {
  return (
    <section
      id="destacada"
      data-home-module="destacada"
      aria-label="Cobertura Extraordinaria"
      className="news-lead rounded-md bg-white h-auto border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 pb-2 mt-2"
    >
      <div className="news-lead-header">
        <div className="news-lead-header-main">
          <span className="news-lead-live-dot relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="news-lead-live-label font-sans font-bold text-red-600 uppercase text-xs tracking-wide">
            <span className="news-lead-live-mobile">LIVE</span>
            <span className="news-lead-live-desktop">EN VIVO</span>
          </span>
          <span className="news-lead-coverage-label">
            COBERTURA EXTRAORDINARIA • URGENCIA REGIONAL
          </span>
        </div>
        <div className="news-lead-transmission">
          <SignalIcon aria-hidden="true" />
          <span>Mendoza • Transmisión Simultánea HD</span>
        </div>
      </div>

      <div className="news-lead-layout">
        <div className="news-lead-main">
          <div className="news-lead-copy">
            <h1 className="font-serif font-bold text-[1.5rem]/[1.8rem]">
              {story.title}
            </h1>
            <p className="pt-2 bajada font-sans">{story.summary}</p>
            <div className="news-lead-byline flex gap-1 pb-4 pt-2">
              <PencilIcon aria-hidden="true" className="w-4 h-4 text-gray-500" />
              <p className="news-lead-author font-sans font-bold text-gray-500 uppercase text-[10px]">
                {story.author}
              </p>
              <span className="news-lead-byline-separator">•</span>
              <span className="news-lead-edition">EDICIÓN ESPECIAL</span>
            </div>
          </div>
          <div className="news-lead-video aspect-video">
            <video
              src={videoUrl}
              aria-label="Ejercicio de entrenamiento militar en un bosque denso"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full rounded-t-md object-cover"
            ></video>
          </div>
        </div>
        <aside className="news-lead-related" aria-label="Más noticias">
          <div className="news-lead-related-heading">
            <BoltIcon aria-hidden="true" />
            <span>FOCO DE COBERTURA</span>
          </div>
          {story.related.map((item) => (
            <article
              key={item.mobileCategory}
              className="news-lead-related-item"
            >
              <p className="news-lead-related-category uppercase text-[8px]">
                <span className="news-lead-related-category-mobile">
                  {item.mobileCategory}
                </span>
                <span className="news-lead-related-category-desktop">
                  {item.desktopCategory}
                </span>
              </p>
              <h2 className="font-serif">{item.title}</h2>
              <p className="news-lead-related-summary">{item.summary}</p>
              {item.author && (
                <div className="news-lead-related-author flex gap-1 items-center mt-1">
                  <UserCircleIcon aria-hidden="true" className="w-4 h-4" />
                  <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
                    {item.author}
                  </p>
                </div>
              )}
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
