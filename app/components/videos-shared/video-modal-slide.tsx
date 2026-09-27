"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface VideoModalSlideProps {
  videoUrl: string;
  posterUrl?: string;
  /** Solo el slide visible reproduce. */
  isActive: boolean;
  /**
   * Arranca con audio y muestra el control de silencio. Se decide por fuente:
   * MAM entrega material con sonido real, mientras que el stock de Pexels que
   * alimenta branded viene mudo, asi que alli el control no tendria que hacer.
   */
  allowSound?: boolean;
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
  allowSound = false,
  children,
}: VideoModalSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(!allowSound);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      // Cada apertura vuelve al estado de audio por defecto de la fuente.
      video.muted = !allowSound;
      setIsMuted(!allowSound);

      const playPromise = video.play();

      if (playPromise !== undefined) {
        // Si el navegador bloquea el audio, se reintenta sin sonido antes de rendirse.
        playPromise.catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => undefined);
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
      setProgress(0);
    }
  }, [isActive, allowSound]);

  // La barra se actualiza por frame y no con `timeupdate`, que dispara unas 4
  // veces por segundo y se veria a saltos. React descarta el render cuando el
  // valor redondeado no cambia, asi que solo repinta lo que se nota.
  useEffect(() => {
    if (!isActive) return;

    let frameId = 0;

    const tick = () => {
      const video = videoRef.current;

      if (video && video.duration > 0) {
        setProgress(
          Math.round((video.currentTime / video.duration) * 1000) / 1000
        );
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isActive]);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

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
        // El estado sigue al elemento y no al reves: asi queda sincronizado
        // aunque la reproduccion la cambie el navegador y no un click.
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-16">
        <div className="flex items-end gap-3 px-4 pb-3">
          <div className="pointer-events-auto min-w-0 flex-1">{children}</div>

          <div className="pointer-events-auto flex shrink-0 items-center gap-2">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm"
            >
              {isPlaying ? (
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
              ) : (
                <svg
                  className="ml-0.5 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {allowSound && (
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm"
              >
                {isMuted ? (
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>

        {/* El margen inferior esquiva el indicador de inicio del iPhone, que si
            no taparia la barra por estar pegada al borde. */}
        <div
          role="progressbar"
          aria-label="Progreso del video"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          className="h-[3px] w-full bg-white/25"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div
            className="h-full bg-white"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
