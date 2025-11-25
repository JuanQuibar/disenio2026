import { CardPrincipales } from "./card-principales";

interface CarruselPrincipalesProps {
  fotos: { src: string; alt: string }[];
}

export function CarruselPrincipales({ fotos }: CarruselPrincipalesProps) {
  return (
    <>
      {fotos.map((foto: { src: string; alt: string }, index: number) => (
        <div key={index} className="mb-4">
          <CardPrincipales fotos={foto} />
        </div>
      ))}
    </>
  );
}
