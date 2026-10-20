import { EditorialImage } from "@/app/components/editorial-image";
import { desktopEditorialPhotos } from "@/app/content/desktop-editorial-photos";
import { getCalibrationTitle } from "@/app/content/typography-calibration";

interface GenteListadoProps {
  fotos: Array<{ src: string; alt: string }>;
}

const stories = Array.from({ length: 6 }, (_, index) =>
  getCalibrationTitle(index + 4),
);

export function GenteListado({ fotos }: GenteListadoProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {fotos.map((foto, index) => (
        <article
          key={index}
          className="news-portrait-card flex flex-col gap-2 rounded-md"
        >
          <div className="gente-card-media border border-gray-300 w-full aspect-[3/4] overflow-hidden object-cover rounded-md">
            <EditorialImage
              desktopSizes="(max-width: 1360px) 70vw, 900px"
              src={foto.src}
              desktopSrc={desktopEditorialPhotos.gente[index]}
              alt={foto.alt}
              width={525}
              height={350}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="gente-card-image w-full h-full object-cover"
            />
            <div aria-hidden="true" className="gente-card-gradient" />
          </div>
          <div className="gente-card-copy flex flex-col justify-center py-2">
            <h3 className="gente-card-title mb-1 font-serif text-sm font-medium leading-snug text-gray-900">
              {stories[index]}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
