import { connection } from "next/server";
import { UltimaHoraWrapper } from "./ultima-hora-wrapper";
import { UltimaHoraAgenciaWrapper } from "./ultima-hora-agencia-wrapper";
import { crearNoticiasUltimaHora } from "./ultima-hora-noticias";
import { UltimaHoraLateralWrapper } from "./ultima-hora-lateral-wrapper";

export async function UltimaHoraComparacionWrapper({ alternativa = false }: { alternativa?: boolean } = {}) {
  await connection();
  const noticias = crearNoticiasUltimaHora();
  const noticiasMobile = noticias.slice(0, 5);

  return (
    <>
      <UltimaHoraWrapper noticias={noticiasMobile} />
      <UltimaHoraAgenciaWrapper noticias={noticiasMobile} />
      {alternativa && <UltimaHoraLateralWrapper noticias={noticias} />}
    </>
  );
}
