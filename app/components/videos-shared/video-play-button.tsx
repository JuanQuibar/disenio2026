"use client";

interface VideoPlayButtonProps {
  label: string;
  onClick: () => void;
}

/** Boton de reproduccion usado por los carruseles con patron click-to-load. */
export function VideoPlayButton({ label, onClick }: VideoPlayButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center group/btn"
    >
      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/30 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover/btn:scale-110">
        <svg
          className="ml-1 h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
