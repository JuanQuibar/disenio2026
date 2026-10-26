"use client";

import { useEffect, useRef, useState } from "react";

const desktopQuery = "(min-width: 1024px)";

export function GraficoVideoDemo() {
  const [isDesktop, setIsDesktop] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery);
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    void videoRef.current?.play().catch(() => undefined);
  }, [isDesktop]);

  return (
    <div className="grafico-desktop-video">
      {isDesktop ? (
        <video
          ref={videoRef}
          src="/video_nepal.mp4"
          aria-label="Video sobre la riada en Nepal"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
    </div>
  );
}
