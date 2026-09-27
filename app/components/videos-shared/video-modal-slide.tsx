"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface VideoModalSlideProps {
  videoUrl: string;
  posterUrl?: string;
  /** Solo el slide visible reproduce. */
  isActive: boolean;
  /** Metadatos superpuestos: cada fuente decide que mostrar. */
  children?: ReactNode;
}

/**
 * Slide de video mp4 a pantalla completa. Lo comparten las fuentes que sirven
 * mp4 propio (MAM y branded); YouTube necesita un iframe y no usa este slide.
 *
 * Se recorta con `object-cover` en vez de dejar bandas negras: todas las fuentes
 * entregan material vertical (MAM es 9:16 y el servicio de Pexels descarta los
 * horizontales), asi que el recorte es minimo y el resultado es full-bleed.
 *
 * A diferencia del carrusel de la home, aca no se usa `useVideoAutoplay`: en un
 * modal fullscreen solo hay un slide visible por definicion, asi que observar la
 * interseccion agrega latencia y podria activar slides vecinos.
 */
export function VideoModalSlide({
  videoUrl,
  posterUrl,
  isActive,
  children,
}: VideoModalSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        // Si el navegador bloquea el audio, se reintenta sin sonido antes de rendirse.
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => undefined);
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        loop
        playsInline
        preload={isActive ? "auto" : "none"}
        className="h-full w-full object-cover"
      />

      {children && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-10 pt-16">
          <div className="pointer-events-auto">{children}</div>
        </div>
      )}
    </div>
  );
}
