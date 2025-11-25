import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import { CardSummary } from "./card-summary";

interface CardPrincipalesProps {
  fotos: { src: string; alt: string };
  priority?: boolean;
}

export function CardPrincipales({ fotos, priority = false }: CardPrincipalesProps) {
  return (
    <div className="rounded-md bg-white aspect-square border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 pb-6">
      <div className="">
        <Image
          src={fotos.src}
          alt={fotos.alt}
          width={525}
          height={350}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto rounded-t-md overflow-hidden object-cover aspect-4/3"
        />
      </div>
      <div className="px-2 pt-2">
        <div className="flex gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            Sara González
          </p>
        </div>

        <h2 className="font-serif text-lg/6 line-clamp-3 mb-1 ">
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit libero consectetur esse minus labore qui aliquam veritatis "
          }
        </h2>
        <CardSummary />
      </div>
    </div>
  );
}
