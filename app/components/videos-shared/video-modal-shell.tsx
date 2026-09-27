"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { VideoItem } from "@/app/services/videos/types";

interface VideoModalShellProps<T extends VideoItem> {
  videos: T[];
  /** Video por el que se abre. Se usa un id y no un indice: es estable si cambia el orden. */
  activeVideoId: string;
  onClose: () => void;
  /** Cada fuente pinta su propio slide: el shell no conoce tipos concretos. */
  renderSlide: (video: T, isActive: boolean) => ReactNode;
}

/**
 * Contenedor a pantalla completa con navegacion vertical entre los videos de un
 * mismo carrusel. Resuelve todo lo que no depende de la fuente: portal, cierre,
 * foco, bloqueo del scroll y desplazamiento.
 *
 * El portal no es opcional: el modal se dispara desde dentro de un slide de
 * Swiper, cuyo wrapper lleva `transform`. Un `position: fixed` dentro de un
 * ancestro transformado se posiciona respecto de ese ancestro y no del viewport,
 * con lo que el modal quedaria recortado dentro de la tarjeta.
 */
export function VideoModalShell<T extends VideoItem>({
  videos,
  activeVideoId,
  onClose,
  renderSlide,
}: VideoModalShellProps<T>) {
  const initialSlide = Math.max(
    videos.findIndex((video) => video.id === activeVideoId),
    0
  );

  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    // Se bloquean los dos: con overflow solo en body, la barra de scroll del
    // documento sigue ocupando ancho y el modal no llega al borde derecho.
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reproductor de video"
      className="fixed inset-0 z-50 bg-black"
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        initialSlide={initialSlide}
        modules={[Mousewheel, Keyboard]}
        mousewheel
        keyboard={{ enabled: true }}
        className="h-dvh w-full"
        onSlideChange={handleSlideChange}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            {renderSlide(video, index === activeIndex)}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Cerrar video"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>,
    document.body
  );
}
