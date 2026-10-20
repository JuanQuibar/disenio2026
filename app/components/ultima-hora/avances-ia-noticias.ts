import { getCalibrationSummary } from "@/app/content/typography-calibration";
import type { NoticiaUltimaHora } from "./ultima-hora-noticias";

// Contenido de muestra de la referencia; las atribuciones no son citas reales.
const titulares: { titulo: string; volanta: string; fuentes: NoticiaUltimaHora["contribuciones"][number]["fuente"][] }[] = [
  {
    titulo: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ac consequuntur",
    volanta: "GEOPOLÍTICA",
    fuentes: ["La Nación", "Infobae"],
  },
  {
    titulo: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ea laboriosam",
    volanta: "ESTADOS UNIDOS",
    fuentes: ["Clarín", "Página 12"],
  },
  {
    titulo: "Quis vel eum iure reprehenderit qui in ea voluptate velit esse nihil molestiae consequatur",
    volanta: "EUROPA",
    fuentes: ["Infobae", "Cronista"],
  },
  {
    titulo: "At vero eos et accusamus et odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    volanta: "MEDIO ORIENTE",
    fuentes: ["La Nación", "a24"],
  },
];

export const avancesIaNoticias: NoticiaUltimaHora[] = titulares.map((noticia, index) => ({
  id: `avances-ia-${index + 1}`,
  titulo: noticia.titulo,
  volanta: noticia.volanta,
  hora: "",
  contribuciones: noticia.fuentes.map((fuente, numero) => ({
    fuente,
    parrafo: getCalibrationSummary(index + numero + 3),
  })),
}));
