"use client";

import { useState } from "react";

export function Canal7Live() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative aspect-video w-full bg-black">
      <div className="relative aspect-video w-full bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/aqz-KE-bpKQ?playsinline=1&rel=0"
          title="Video de Prueba"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      </div>
    </div>
  );
}
