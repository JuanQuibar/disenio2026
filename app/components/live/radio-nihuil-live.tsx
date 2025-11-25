"use client";

import { useState } from "react";

export function RadioNihuilLive() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative aspect-video w-full bg-black">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="group relative w-full h-full flex items-center justify-center cursor-pointer"
            aria-label="Reproducir Radio Nihuil en vivo"
          >
            {/* Imagen de portada (Thumbnail de YouTube) */}
            <img
              src="https://img.youtube.com/vi/fkbDYjUVkho/maxresdefault.jpg"
              alt="Radio Nihuil en Vivo"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Botón de Play superpuesto */}
            <div className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Badge de "EN VIVO" estático */}
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm z-10 pointer-events-none">
              EN VIVO
            </div>
          </button>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/fkbDYjUVkho?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0"
            title="Radio Nihuil en Vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
