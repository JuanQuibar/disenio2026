import { connection } from "next/server";
import { UltimaHoraAgenciaWrapper } from "./ultima-hora-agencia-wrapper";
import { crearNoticiasUltimaHora } from "./ultima-hora-noticias";
import { UltimaHoraLateralWrapper } from "./ultima-hora-lateral-wrapper";

export async function UltimaHoraWrapper({ alternativa = false }: { alternativa?: boolean } = {}) {
  await connection();
  const noticias = crearNoticiasUltimaHora();

  return (
    <>
      <UltimaHoraAgenciaWrapper noticias={noticias.slice(0, 5)} />
      {alternativa && <UltimaHoraLateralWrapper noticias={noticias} />}
    </>
  );
}
