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
  // Estado local para controlar si este video específico ya se le dio play
  // Esto permite que el usuario le de play, y si se mueve el carrusel, se mantenga (o se resetee si queremos)
  // Por simplicidad, usamos la prop shouldPlay que viene del padre para coordinar "solo uno sonando"
  
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm mx-auto group/card">
      <div className="rounded-md bg-black border border-gray-200 shadow-sm overflow-hidden aspect-[9/16] relative">
        {!shouldPlay ? (
          <button
            onClick={onPlay}
            className="w-full h-full relative flex items-center justify-center cursor-pointer group/btn"
            aria-label={`Reproducir short: ${title}`}
          >
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

            {/* Play Button */}
            <div className="relative z-10 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover/btn:scale-110 transition-transform duration-300 shadow-lg">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* YouTube Icon Badge */}
            <div className="absolute top-2 right-2 bg-red-600 p-1 rounded-md shadow-sm z-20">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </button>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Título Fijo Debajo */}
      <h3 className="font-serif text-sm text-black line-clamp-2 leading-tight min-h-[2.5em]">
        {title}
      </h3>
    </div>
  );
}
