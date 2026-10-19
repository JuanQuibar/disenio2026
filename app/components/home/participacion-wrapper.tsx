import { EncuestaWrapper } from "@/app/components/encuesta/encuesta-wrapper";
import { SenatusWrapper } from "@/app/components/senatur-romano/senatus-wrapper";
import { HomePair } from "./home-pair";

export async function ParticipacionWrapper() {
  // Resolver los wrappers de servidor permite validar la pareja antes de montarla.
  const [encuesta, senatus] = await Promise.all([
    EncuestaWrapper(),
    SenatusWrapper(),
  ]);

  return HomePair({
    name: "participacion",
    first: encuesta,
    second: senatus,
  });
}
