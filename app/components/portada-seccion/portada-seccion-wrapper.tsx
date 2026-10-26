import { editorialPhotos } from "@/app/content/editorial-photos";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";
import { PortadaSeccion } from "./portada-seccion";

// Contenido editorial de muestra para revisar la plantilla, sin conexión al CMS.
const photos = [
  editorialPhotos.sociedad,
  editorialPhotos.principales[0],
  editorialPhotos.politica,
  editorialPhotos.sociedadSecundaria,
  editorialPhotos.apertura,
  editorialPhotos.principales[1],
  editorialPhotos.crimen,
  editorialPhotos.ovacion,
];

const listingAuthors = ["Sara González", "Soledad Segade", "Facundo García"];
const leadTitle = getCalibrationTitle(3);
const leadSummary = getCalibrationSummary(3);

const stories = Array.from({ length: 20 }, (_, index) => {
  const title = getCalibrationTitle(index + 4);
  const summary = getCalibrationSummary(index + 4);
  const author = listingAuthors[index % listingAuthors.length];

  return {
    id: `muestra-${index + 1}`,
    title,
    desktopTitle: title,
    summary,
    desktopSummary: summary,
    image: photos[index % photos.length],
    category: index % 3 === 0 ? "En foco" : "Sociedad",
    author,
    desktopAuthor: author,
  };
});

export function PortadaSeccionWrapper({ pagina }: { pagina?: string }) {
  const currentPage = pagina === "2" ? 2 : 1;
  const pageStories = stories.slice((currentPage - 1) * 10, currentPage * 10);

  if (pageStories.length === 0) return null;

  return (
    <PortadaSeccion
      lead={{
        title: leadTitle,
        desktopTitle: leadTitle,
        summary: leadSummary,
        desktopSummary: leadSummary,
        image: editorialPhotos.politica,
        desktopImage: editorialPhotos.politica,
        category: "Tema del día",
        author: "Daniel Calivares",
        desktopAuthor: "Daniel Calivares",
      }}
      stories={pageStories}
      currentPage={currentPage}
      pageCount={2}
    />
  );
}
