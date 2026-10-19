import { connection } from "next/server";
import { UltimaHoraWrapper } from "./ultima-hora-wrapper";
import { UltimaHoraAgenciaWrapper } from "./ultima-hora-agencia-wrapper";
import { crearNoticiasUltimaHora } from "./ultima-hora-noticias";

export async function UltimaHoraComparacionWrapper() {
  await connection();
  const noticias = crearNoticiasUltimaHora();

  return (
    <>
      <UltimaHoraWrapper noticias={noticias} />
      <UltimaHoraAgenciaWrapper noticias={noticias} />
    </>
  );
}
