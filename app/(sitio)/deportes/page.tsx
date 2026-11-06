import { DeportesWrapper } from "@/app/components/deportes/deportes-wrapper";

export default async function DeportesPage({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>;
}) {
  const { pagina } = await searchParams;
  return <DeportesWrapper pagina={pagina} />;
}
