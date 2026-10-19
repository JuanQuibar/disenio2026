import { getCalibrationSummary, getCalibrationTitle } from "@/app/content/typography-calibration";

const fuentes = [
  "Infobae", "Clarín", "La Nación", "Cronista", "Página 12", "iProfesional", "a24",
] as const;

const volantas = [
  "Economía", "Internacionales", "Crisis del petróleo", "Finanzas", "Inseguridad",
  "Política", "Mendoza", "Sociedad", "Energía", "Deportes",
];

export type NoticiaUltimaHora = {
  id: string;
  titulo: string;
  hora: string;
  volanta: string;
  contribuciones: {
    fuente: (typeof fuentes)[number];
    parrafo: string;
  }[];
};

export function crearNoticiasUltimaHora(): NoticiaUltimaHora[] {
  return volantas.map((volanta, index) => {
    const seleccion = [...fuentes];
    for (let ultimo = seleccion.length - 1; ultimo > 0; ultimo--) {
      const elegido = Math.floor(Math.random() * (ultimo + 1));
      [seleccion[ultimo], seleccion[elegido]] = [seleccion[elegido], seleccion[ultimo]];
    }
    const cantidad = 2 + Math.floor(Math.random() * 3);
    const minutos = 14 * 60 + 48 - index * 7;

    return {
      id: `ultima-hora-${index}`,
      titulo: getCalibrationTitle(index + 3),
      volanta,
      hora: `${Math.floor(minutos / 60).toString().padStart(2, "0")}:${(minutos % 60).toString().padStart(2, "0")}`,
      contribuciones: seleccion.slice(0, cantidad).map((fuente, numero) => ({
        fuente,
        parrafo: getCalibrationSummary(index + 3 + numero),
      })),
    };
  });
}
