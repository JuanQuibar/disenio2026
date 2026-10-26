import { PortadaSeccionWrapper } from "@/app/components/portada-seccion/portada-seccion-wrapper";

export default async function PortadaSeccionPage({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>;
}) {
  const { pagina } = await searchParams;
  return <PortadaSeccionWrapper pagina={pagina} />;
}
