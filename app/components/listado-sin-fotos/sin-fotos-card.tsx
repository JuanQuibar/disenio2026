import { getCalibrationTitle } from "@/app/content/typography-calibration";

const stories = Array.from({ length: 5 }, (_, index) =>
  getCalibrationTitle(index + 3),
);

export function SinFotosCard() {
  return (
    <div className="news-brief-list flex flex-col">
      {stories.map((noticia, index) => (
        <article
          key={index}
          className={`news-brief-item flex gap-3 py-3 ${
            index !== stories.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="flex-1 flex flex-col justify-start">
            <h3 className="news-brief-title font-serif text-base text-gray-900 leading-snug mb-1">
              {noticia}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
