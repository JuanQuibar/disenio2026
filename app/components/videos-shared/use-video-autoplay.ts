"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reproduce un video HTML5 solo cuando esta habilitado y visible en pantalla.
 * Lo comparten los carruseles que sirven mp4 propios (MAM y branded) para
 * evitar consumo de datos y CPU fuera del viewport.
 */
export function useVideoAutoplay(enabled: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (enabled && isInView) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        // El autoplay puede ser bloqueado por el navegador. Es esperable.
        playPromise.catch(() => undefined);
      }
    } else {
      video.pause();
    }
  }, [enabled, isInView]);

  return { containerRef, videoRef, isInView };
}
