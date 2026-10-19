import Image from "next/image";

interface OpinionCardProps {
  author: string;
  imageSrc: string;
  title: string;
  desktopKicker: string;
  desktopTitle: string;
}

export function OpinionCard({
  author,
  imageSrc,
  title,
  desktopKicker,
  desktopTitle,
}: OpinionCardProps) {
  return (
    <article className="opinion-card flex h-full flex-col items-center rounded-md border border-gray-200 bg-white p-4 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="opinion-card-avatar relative mb-3 h-20 w-20 lg:h-24 lg:w-24">
        <Image
          src={imageSrc}
          alt={`Foto de ${author}`}
          fill
          className="opinion-card-image rounded-full border-2 border-gray-100 object-cover"
          sizes="(max-width: 1023px) 80px, 96px"
        />
      </div>

      <div className="opinion-card-copy flex flex-col items-center justify-start gap-2">
        <span className="opinion-card-author font-sans text-xs font-bold tracking-wider text-[#1c69a8]">
          {author}
        </span>
        <span className="opinion-card-kicker hidden lg:block">
          {desktopKicker}
        </span>
        <h3 className="opinion-card-title line-clamp-4 font-serif text-base italic leading-tight text-gray-900">
          <span className="lg:hidden">{title}</span>
          <span className="hidden lg:inline">“{desktopTitle}”</span>
        </h3>
      </div>
    </article>
  );
}
