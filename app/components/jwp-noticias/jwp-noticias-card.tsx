"use client";

import { useEffect, useRef } from "react";

// Declaramos window para que TS no se queje
declare global {
  interface Window {
    jwplayer: any;
  }
}

export interface JWVideo {
  mediaid: string;
  title: string;
  description: string;
  image: string;
  duration: number;
}

export function JwpNoticiasCard({
  video,
  onEnded,
  onPlay,
  onPause,
}: {
  video: JWVideo;
  onEnded?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
}) {
  const PLAYER_ID = "REo268Kx"; // Tu Player ID
  const playerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Ref para el contenedor principal
  // Creamos un ID único para el div basado en el mediaid para que no choquen en el Swiper
  const containerId = `jwplayer-${video.mediaid}`;

  // Intersection Observer para pausar si sale de pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Si sale de pantalla, pausar
            if (window.jwplayer) {
              try {
                const player = window.jwplayer(containerId);
                if (player && typeof player.pause === "function") {
                  const state = player.getState();
                  if (state === "playing" || state === "buffering") {
                    player.pause();
                  }
                }
              } catch (e) {
                // Ignorar
              }
            }
          }
        });
      },
      { threshold: 0.5 } // Se dispara cuando el 50% del elemento es visible/invisible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerId]);

  useEffect(() => {
    // 1. Verificamos si el script de la librería JWP ya existe en el head
    const libraryUrl = `https://cdn.jwplayer.com/libraries/${PLAYER_ID}.js`;
    let script = document.querySelector(
      `script[src="${libraryUrl}"]`
    ) as HTMLScriptElement;

    // Función para iniciar este player específico
    const initPlayer = () => {
      // Nos aseguramos que el div exista y jwplayer esté cargado
      if (window.jwplayer && document.getElementById(containerId)) {
        // Si ya existe una instancia previa en este div, la limpiamos (importante para Swiper)
        const playerInstance = window.jwplayer(containerId);
        if (playerInstance && playerInstance.remove) {
          playerInstance.remove();
        }

        // Iniciamos el player
        const player = window.jwplayer(containerId).setup({
          playlist: `https://cdn.jwplayer.com/v2/media/${video.mediaid}`,
          aspectratio: "9:16",
          width: "100%",
          stretching: "uniform",
          autostart: false,
          displaytitle: false,
        });

        // Evento cuando termina el video
        player.on("complete", () => {
          if (onEnded) {
            onEnded();
          }
        });

        // Eventos para detectar cuando el usuario hace play/pause manualmente
        player.on("play", () => {
          if (onPlay) {
            onPlay();
          }
        });

        player.on("pause", () => {
          if (onPause) {
            onPause();
          }
        });
      }
    };

    // 2. Lógica de carga del script
    if (!script) {
      // Si no existe el script, lo creamos
      script = document.createElement("script");
      script.src = libraryUrl;
      script.async = true;
      script.setAttribute("data-loaded", "false");
      document.head.appendChild(script);

      script.onload = () => {
        script.setAttribute("data-loaded", "true");
        // Una vez cargado el script global, iniciamos ESTE player
        // Disparamos un evento custom para avisar a otros componentes que el script llegó
        window.dispatchEvent(new Event("jwplayerLoaded"));
        initPlayer();
      };
    } else if (script.getAttribute("data-loaded") === "true") {
      // Si ya estaba cargado de antes, iniciamos directo
      initPlayer();
    } else {
      // Si el script existe pero se está cargando, esperamos
      const handleLoad = () => initPlayer();
      script.addEventListener("load", handleLoad);
      window.addEventListener("jwplayerLoaded", handleLoad);

      return () => {
        script.removeEventListener("load", handleLoad);
        window.removeEventListener("jwplayerLoaded", handleLoad);
      };
    }

    // Cleanup: Destruir el player si el componente se desmonta (cambio de página)
    return () => {
      if (window.jwplayer) {
        try {
          const player = window.jwplayer(containerId);
          if (player) player.remove();
        } catch (e) {
          // ignorar errores de limpieza
        }
      }
    };
  }, [video.mediaid, video.image, containerId, onEnded, onPlay, onPause]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-black rounded-lg overflow-hidden shadow-sm"
    >
      <div className="aspect-[9/16] relative">
        {/* Este es el DIV vacío que JWP llenará con el video */}
        <div id={containerId} ref={playerRef} className="w-full h-full">
          {/* Opcional: Mostrar imagen mientras carga el script */}
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-3 bg-white">
        <h4 className="text-sm font-bold line-clamp-2 leading-tight">
          {video.title}
        </h4>
      </div>
    </div>
  );
}
