import Image from "next/image";

interface GenteListadoProps {
  fotos: Array<{ src: string; alt: string }>;
}

export function GenteListado({ fotos }: GenteListadoProps) {
  const noticias = [
    "Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 ">
      {fotos.map((foto, index) => (
        <article key={index} className="flex flex-col gap-2rounded-md ">
          <div className="border border-gray-300 w-full aspect-[3/4] overflow-hidden object-cover rounded-md">
            <Image
              src={foto.src}
              alt={foto.alt}
              width={525}
              height={350}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-2">
            <h3 className="font-serif text-sm font-medium text-gray-900 line-clamp-3 leading-snug mb-1">
              {noticias[index]}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
