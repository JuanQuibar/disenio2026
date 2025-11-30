import Image from "next/image";

interface OpinionCardProps {
  author: string;
  imageSrc: string;
  title: string;
}

export function OpinionCard({ author, imageSrc, title }: OpinionCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="relative w-20 h-20 mb-3">
        <Image
          src={imageSrc}
          alt={`Foto de ${author}`}
          fill
          className="rounded-full object-cover border-2 border-gray-100"
          sizes="(max-width: 768px) 80px, 80px"
        />
      </div>

      <div className="flex flex-col items-center justify-start gap-2">
        <span className="font-sans font-bold text-xs text-[#1c69a8]  tracking-wider">
          {author}
        </span>
        <h3 className="font-serif italic text-base leading-tight text-gray-900 line-clamp-4">
          {title}
        </h3>
      </div>
    </div>
  );
}
