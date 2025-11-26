import Image from "next/image";

interface CrimenListadoProps {
  fotos: Array<{ src: string; alt: string }>;
}

export function CrimenListado({ fotos }: CrimenListadoProps) {
  const noticias = [
    "Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  ];

  return (
    <div className="flex flex-col">
      {fotos.map((foto, index) => (
        <article
          key={index}
          className={`flex gap-3 py-3 ${
            index !== fotos.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-sm font-medium text-gray-900 line-clamp-3 leading-snug mb-1">
              {noticias[index]}
            </h3>

            {/* Firmas solo en la segunda y cuarta noticia (índices 1 y 3) */}
            {(index === 1 || index === 3) && (
              <div className="flex items-center gap-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3 h-3 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
                  {index === 1 ? "Julián Imazio" : "Rosana Villegas"}
                </p>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
