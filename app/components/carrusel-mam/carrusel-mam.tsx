"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";

export function CarruselMam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const messageType = event.data?.type;

      if (messageType === "playerFullscreen") {
        setIsFullscreen(true);
      }

      if (messageType === "playerNormal") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="mb-4 border-t-2 separadores pb-2 pt-1">
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        MAM
      </h3>

      <div className="p-2 bg-white rounded-lg shadow-md">
        <div
          id="dpReels"
          ref={containerRef}
          className={
            isFullscreen
              ? "fixed inset-0 w-full h-full max-h-none z-999999 overflow-hidden bg-black"
              : "relative w-full h-[85vh] max-h-[720px] overflow-hidden bg-black"
          }
        >
          <iframe
            src="https://mam.grupoamericainterior.com.ar/playlist/s95tWnrDuP?embed=1"
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="MAM reels"
          />
        </div>
      </div>
    </div>
  );
}
