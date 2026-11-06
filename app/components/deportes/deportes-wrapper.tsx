import { getCalibrationSummary, getCalibrationTitle } from "@/app/content/typography-calibration";
import { DeportesPortada, type DeportesStory } from "./deportes-portada";

// Selección editorial y fotografías de muestra; no representa resultados deportivos actuales.
const photos = [
  {
    src: "https://images.pexels.com/photos/32179264/pexels-photo-32179264.jpeg?auto=compress&cs=tinysrgb",
    alt: "Futbolista con la pelota en una cancha",
  },
  {
    src: "https://images.pexels.com/photos/11097680/pexels-photo-11097680.jpeg?auto=compress&cs=tinysrgb",
    alt: "Futbolistas disputan una pelota durante un partido",
  },
  {
    src: "https://images.pexels.com/photos/30144519/pexels-photo-30144519.jpeg?auto=compress&cs=tinysrgb",
    alt: "Atletas corren en una pista al aire libre",
  },
  {
    src: "https://images.pexels.com/photos/40337703/pexels-photo-40337703.jpeg?auto=compress&cs=tinysrgb",
    alt: "Jugadores disputan un partido de rugby",
  },
  {
    src: "https://images.pexels.com/photos/36681497/pexels-photo-36681497.jpeg?auto=compress&cs=tinysrgb",
    alt: "Deportistas compiten durante un encuentro",
  },
] as const;

const storySamples = [
  { index: 0, category: "Independiente Rivadavia" },
  { index: 1, category: "Fútbol mendocino" },
  { index: 2, category: "Atletismo" },
  { index: 3, category: "Rugby" },
  { index: 8, category: "Fútbol mendocino" },
  { index: 9, category: "Liga profesional" },
  { index: 10, category: "Atletismo" },
  { index: 11, category: "Rugby" },
  { index: 12, category: "Deportes" },
  { index: 4, category: "Fútbol mendocino" },
  { index: 5, category: "Liga profesional" },
  { index: 6, category: "Atletismo" },
  { index: 7, category: "Rugby" },
  { index: 18, category: "Rugby" },
  { index: 19, category: "Deportes" },
  { index: 20, category: "Fútbol mendocino" },
  { index: 21, category: "Liga profesional" },
] as const;

const authors = ["Analía Doña", "Julián Imazio", "Rosana Villegas"] as const;

const stories: DeportesStory[] = storySamples.map(({ index, category }) => ({
  id: `deportes-muestra-${index + 1}`,
  category,
  title: getCalibrationTitle(index),
  summary: getCalibrationSummary(index),
  image: photos[index % photos.length],
  author: authors[index % authors.length],
}));

const latestStories: DeportesStory[] = Array.from({ length: 22 }, (_, index) => ({
  id: `deportes-ultimas-${index + 1}`,
  category: storySamples[index % storySamples.length].category,
  title: getCalibrationTitle(index + Math.floor(index / 10) * 3),
  summary: getCalibrationSummary(index + Math.floor(index / 10) * 3),
  image: photos[(index + Math.floor(index / 5) * 2) % photos.length],
  author: authors[index % authors.length],
}));

export function DeportesWrapper({ pagina }: { pagina?: string }) {
  if (stories.length === 0) return null;
  const currentPage = pagina === "2" ? 2 : 1;
  const pageSizes = [10, 12] as const;
  const pageStart = currentPage === 1 ? 0 : pageSizes[0];

  return (
    <DeportesPortada
      lead={stories[0]}
      featured={stories.slice(1, 4)}
      mostRead={stories.slice(4, 9)}
      belowLead={stories.slice(9)}
      latest={latestStories.slice(pageStart, pageStart + pageSizes[currentPage - 1])}
      currentPage={currentPage}
      pageCount={pageSizes.length}
    />
  );
}
