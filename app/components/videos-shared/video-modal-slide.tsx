"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { VideoModalControls } from "./video-modal-controls";

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

      <VideoModalControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        allowSound={allowSound}
        progress={progress}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
      >
        {children}
      </VideoModalControls>
    </div>
  );
}
