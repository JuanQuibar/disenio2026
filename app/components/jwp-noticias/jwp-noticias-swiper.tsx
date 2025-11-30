"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { JwpNoticiasCard, JWVideo } from "./jwp-noticias-card";

import { useState, useRef } from "react";

export function JwpNoticiasSwiper({ videos }: { videos: JWVideo[] }) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  // Map para rastrear el estado de reproducción de CADA video por su índice
  const playingStates = useRef<Record<number, boolean>>({});
  // Ref para capturar la intención del usuario al tocar la pantalla (antes de que el swipe pause el video)
  const swipeIntentRef = useRef<boolean | null>(null);

  const handleVideoEnded = (index: number) => {
    if (swiperInstance) {
      // Mover al siguiente slide
      swiperInstance.slideNext();

      // Intentar reproducir el siguiente video
      const nextIndex = index + 1;
      if (nextIndex < videos.length) {
        const nextVideo = videos[nextIndex];
        const nextContainerId = `jwplayer-${nextVideo.mediaid}`;

        // Esperamos un poco a que el slide termine de moverse
        setTimeout(() => {
          if (window.jwplayer) {
            const player = window.jwplayer(nextContainerId);
            if (player && player.play) {
              player.play();
              // El estado se actualizará vía onPlay
            }
          }
        }, 300);
      }
    }
  };

  const handleTouchStart = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;
    // Capturamos si el video actual está sonando en el momento exacto que el usuario toca la pantalla
    swipeIntentRef.current = playingStates.current[activeIndex] === true;
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;

    // 1. Determinar si debemos reproducir el siguiente video
    // Prioridad: swipeIntentRef (capturado al inicio del toque) > playingStates (estado actual)
    let shouldPlayNext = false;

    if (swipeIntentRef.current !== null) {
      shouldPlayNext = swipeIntentRef.current;
      swipeIntentRef.current = null; // Resetear para la próxima
    } else {
      // Fallback por si el cambio no fue por touch (ej. navegación programática)
      const prevIndex = swiper.previousIndex;
      shouldPlayNext = playingStates.current[prevIndex] === true;
    }

    // 2. Pausar TODOS los videos (limpieza general)
    videos.forEach((video, index) => {
      const containerId = `jwplayer-${video.mediaid}`;
      if (window.jwplayer) {
        try {
          const player = window.jwplayer(containerId);
          if (player && typeof player.pause === "function") {
            // Solo pausamos si está playing/buffering para evitar llamadas innecesarias
            const state = player.getState();
            if (state === "playing" || state === "buffering") {
              player.pause();
            }
          }
        } catch (e) {
          // Ignorar errores
        }
      }
    });

    // 3. Si corresponde, reproducir el nuevo video
    if (shouldPlayNext && activeIndex >= 0 && activeIndex < videos.length) {
      const activeVideo = videos[activeIndex];
      const activeContainerId = `jwplayer-${activeVideo.mediaid}`;

      setTimeout(() => {
        if (window.jwplayer) {
          try {
            const activePlayer = window.jwplayer(activeContainerId);
            if (activePlayer && activePlayer.play) {
              activePlayer.play();
            }
          } catch (e) {
            // Ignorar errores
          }
        }
      }, 150);
    }
  };

  return (
    <div className="">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={false}
        loop={false}
        simulateTouch={true}
        grabCursor={true}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        onTouchStart={handleTouchStart}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <JwpNoticiasCard
              video={video}
              onEnded={() => handleVideoEnded(index)}
              onPlay={() => {
                playingStates.current[index] = true;
              }}
              onPause={() => {
                playingStates.current[index] = false;
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
