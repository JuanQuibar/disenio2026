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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

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
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (element) =>
          !element.closest("[inert]") &&
          element.getClientRects().length > 0
      );

      if (focusable.length === 0) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === first || !dialog.contains(activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (activeElement === last || !dialog.contains(activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [onClose]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);

    if (document.activeElement?.closest(".swiper-slide")) {
      closeButtonRef.current?.focus();
    }
  };

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Reproductor de video"
      className="fixed inset-0 z-50 bg-black lg:bg-black/75 lg:backdrop-blur-sm"
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        initialSlide={initialSlide}
        modules={[Mousewheel, Keyboard]}
        mousewheel
        keyboard={{ enabled: true }}
        className="h-dvh w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {videos.map((video, index) => (
          <SwiperSlide
            key={video.id}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex ? true : undefined}
          >
            {renderSlide(video, index === activeIndex)}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center gap-4 lg:flex">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
          aria-label="Ver video anterior"
          className="pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-xl transition-colors hover:bg-white disabled:cursor-default disabled:opacity-30"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19 8 12l7-7" />
          </svg>
        </button>

        <div aria-hidden="true" className="h-dvh aspect-9/16 shrink-0" />

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex === videos.length - 1}
          aria-label="Ver video siguiente"
          className="pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-xl transition-colors hover:bg-white disabled:cursor-default disabled:opacity-30"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Cerrar video"
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm lg:right-6 lg:top-6 lg:h-12 lg:w-12 lg:bg-white/90 lg:text-gray-900 lg:shadow-xl"
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
