"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { YoutubeShort } from "@/app/services/videos/types";
import { VideoModalControls } from "../videos-shared/video-modal-controls";
import {
  loadYouTubeIframeApi,
  YT_STATE,
  type YouTubePlayer,
} from "../videos-shared/youtube-iframe-api";

interface YoutubeShortsModalSlideProps {
  short: YoutubeShort;
  /** Solo el slide visible crea su player. */
  isActive: boolean;
}

/**
 * Slide de YouTube a pantalla completa. No usa `VideoModalSlide` porque no hay
 * `<video>` que controlar: la reproduccion pasa por la IFrame Player API.
 *
 * El player se crea al activarse el slide y se destruye al salir. Mantener doce
 * players vivos seria inviable, y a diferencia de un `<video>` con
 * `preload="none"` un iframe de YouTube empieza a pesar apenas se monta.
 */
/**
 * Apaga los subtitulos del player, que se dibujan al pie y pisan los controles
 * propios. El `playerVar` `cc_load_policy` no sirve: solo el valor 1 es
 * vinculante (fuerza los subtitulos), no hay un valor que los fuerce a apagarse.
 * Los nombres de modulo cambiaron entre versiones del player, asi que se
 * descargan los dos.
 */
function hideCaptions(player: YouTubePlayer) {
  try {
    player.unloadModule("captions");
    player.unloadModule("cc");
  } catch {
    // Si el player ya se fue, no hay subtitulos que apagar.
  }
}

export function YoutubeShortsModalSlide({
  short,
  isActive,
}: YoutubeShortsModalSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  // `isReady` dice que el player acepta ordenes; `hasStarted`, que el video ya
  // tiene imagen. Son momentos distintos: entre uno y otro YouTube muestra su
  // pantalla negra con spinner, y es lo que el thumbnail tiene que tapar.
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;

    if (!container) return;

    let cancelled = false;
    let player: YouTubePlayer | null = null;
    let fallbackTimer = 0;
    let didRetryMuted = false;
    let started = false;

    /**
     * iOS bloquea el autoplay con sonido de un iframe de otro origen y el
     * player se queda detenido sin avisar. Se reintenta muteado, una sola vez y
     * solo si el video nunca arranco, para no pisar una pausa del usuario.
     */
    const retryMuted = () => {
      if (cancelled || didRetryMuted || started) return;

      const current = playerRef.current;

      if (!current) return;

      const state = current.getPlayerState();

      if (state === YT_STATE.PLAYING || state === YT_STATE.BUFFERING) return;

      didRetryMuted = true;
      current.mute();
      setIsMuted(true);
      current.playVideo();
    };

    // `YT.Player` reemplaza el nodo que recibe por el iframe, asi que se le
    // entrega un hijo descartable y no el contenedor que React controla.
    const host = document.createElement("div");
    host.className = "h-full w-full";
    container.appendChild(host);

    loadYouTubeIframeApi()
      .then((YT) => {
        if (cancelled) return;

        player = new YT.Player(host, {
          videoId: short.id,
          playerVars: {
            autoplay: 1,
            playsinline: 1,
            controls: 0,
            rel: 0,
            mute: 0,
            // `loop` sin `playlist` no repite un video suelto: es un requisito
            // de la API, no una redundancia.
            loop: 1,
            playlist: short.id,
            // Recomendado por YouTube para embeds que usan la JS API. No evita
            // el warning de postMessage que emite `www-widgetapi.js` al crear
            // el player: ese lo dispara su propio handshake y es inofensivo.
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              if (cancelled) return;

              playerRef.current = event.target;
              hideCaptions(event.target);
              setIsMuted(event.target.isMuted());
              setIsReady(true);
              event.target.playVideo();

              // Respaldo por si el bloqueo no dispara ningun cambio de estado.
              // Era de 1500 ms: demasiado, porque en iOS el bloqueo es la regla
              // y esa espera se sumaba entera al arranque de cada video.
              fallbackTimer = window.setTimeout(retryMuted, 600);
            },
            onStateChange: (event) => {
              if (cancelled) return;

              if (event.data === YT_STATE.PLAYING) {
                started = true;
                setHasStarted(true);
                // Se repite al arrancar: en `onReady` el modulo de subtitulos
                // todavia no esta cargado y la descarga no tiene efecto.
                hideCaptions(event.target);
              }

              // Volver a UNSTARTED o CUED despues de pedir play es la senal de
              // que el navegador lo rechazo: se reintenta sin esperar al timer.
              if (event.data === YT_STATE.UNSTARTED || event.data === YT_STATE.CUED) {
                retryMuted();
              }

              setIsPlaying(event.data === YT_STATE.PLAYING);
            },
          },
        });
      })
      .catch((error) => {
        console.error("No se pudo iniciar el player de YouTube:", error);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);

      try {
        player?.destroy();
      } catch {
        // `destroy` falla si el iframe ya se fue con el desmontaje de React.
      }

      playerRef.current = null;
      container.replaceChildren();
      setIsReady(false);
      setHasStarted(false);
      setIsPlaying(false);
      setProgress(0);
    };
  }, [isActive, short.id]);

  useEffect(() => {
    if (!isActive || !isReady) return;

    let frameId = 0;

    const tick = () => {
      const player = playerRef.current;

      if (player) {
        const duration = player.getDuration();

        if (duration > 0) {
          setProgress(
            Math.round((player.getCurrentTime() / duration) * 1000) / 1000
          );
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, isReady]);

  const togglePlay = useCallback(() => {
    const player = playerRef.current;

    if (!player) return;

    if (player.getPlayerState() === YT_STATE.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;

    if (!player) return;

    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }, []);

  return (
    <div className="relative h-full w-full bg-black">
      {/* Tapa toda la carga del iframe, que es mucho mas lenta que arrancar un
          mp4 propio. Se desvanece recien cuando el video esta reproduciendo, no
          cuando el player responde: en el medio se ve la pantalla negra con
          spinner de YouTube. */}
      <img
        src={short.thumbnailUrl}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 ${
          hasStarted ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      />

      {/* El player de YouTube encaja el video (`contain`) y un 9:16 en una
          pantalla mas alargada queda con bandas negras. Como no se puede
          aplicar object-fit sobre un iframe, se lo agranda hasta cubrir y se lo
          centra: el sobrante lo recorta el overflow del contenedor.
          `pointer-events-none` es imprescindible: un iframe de otro origen se
          queda con el gesto y Swiper nunca veria el swipe vertical. Los
          controles son propios, asi que el iframe no necesita recibir nada. */}
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden [&>iframe]:pointer-events-none [&>iframe]:absolute [&>iframe]:top-1/2 [&>iframe]:left-1/2 [&>iframe]:h-[max(100dvh,calc(100dvw*16/9))] [&>iframe]:w-[max(100dvw,calc(100dvh*9/16))] [&>iframe]:-translate-x-1/2 [&>iframe]:-translate-y-1/2"
      />

      <VideoModalControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        allowSound
        progress={progress}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
      />
    </div>
  );
}
