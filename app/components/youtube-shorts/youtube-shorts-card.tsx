"use client";

import type { YoutubeShort } from "@/app/services/videos/types";
import { VideoPlayButton } from "../videos-shared/video-play-button";

interface YoutubeShortsCardProps {
  short: YoutubeShort;
  onOpen: () => void;
}

/**
 * Tarjeta de short: solo thumbnail y boton de apertura.
 *
 * Ya no monta el iframe en linea. Desde que el video se reproduce en el modal,
 * el carrusel no necesita ningun iframe, que era lo mas caro de esta seccion.
 */
export function YoutubeShortsCard({ short, onOpen }: YoutubeShortsCardProps) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm mx-auto group/card">
      <div className="relative aspect-9/16 overflow-hidden rounded-md border border-gray-200 bg-black shadow-sm">
        <img
          src={short.thumbnailUrl}
          alt={short.title}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />

        <VideoPlayButton
          label={`Abrir video: ${short.title}`}
          onClick={onOpen}
        />

        <div className="absolute right-2 top-2 z-20 rounded-md bg-red-600 p-1 shadow-sm">
          <svg
            className="h-3 w-3 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      </div>

      <h4 className="min-h-[2.5em] font-sans text-sm leading-tight text-black line-clamp-2">
        {short.title}
      </h4>
    </div>
  );
}
