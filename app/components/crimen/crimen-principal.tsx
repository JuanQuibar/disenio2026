import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";

interface CrimenPrincipalProps {
  foto: { src: string; alt: string };
}

export function CrimenPrincipal({ foto }: CrimenPrincipalProps) {
  return (
    <div className="mb-2">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md mb-2">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="">
        <h2 className="font-serif text-lg leading-snug text-gray-900 mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum
        </h2>

        <p className="font-sans bajada line-clamp-2 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className="flex items-center gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            Analía Doña
          </p>
        </div>
      </div>
    </div>
  );
}
