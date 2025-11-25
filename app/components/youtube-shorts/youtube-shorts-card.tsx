"use client";

interface YoutubeShortsCardProps {
  id: string;
  title: string;
  thumbnail: string;
  shouldPlay: boolean;
  isMuted: boolean;
  onPlay: () => void;
  onToggleMute: () => void;
}

export function YoutubeShortsCard({
  id,
  title,
  thumbnail,
  shouldPlay,
  isMuted,
  onPlay,
  onToggleMute,
}: YoutubeShortsCardProps) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm mx-auto group/card">
      <div className="rounded-md bg-black border border-gray-200 shadow-sm overflow-hidden aspect-[9/16] relative">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?playsinline=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Título Fijo Debajo */}
      <h3 className="font-serif text-sm text-black line-clamp-2 leading-tight min-h-[2.5em]">
        {title}
      </h3>
    </div>
  );
}
