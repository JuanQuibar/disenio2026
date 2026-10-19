"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import type { MamVideo } from "@/app/services/videos/types";
import { MamCard } from "./mam-card";
import { MamModal } from "./mam-modal";

interface MamCarruselProps {
  videos: MamVideo[];
}

export function MamCarrusel({ videos }: MamCarruselProps) {
  const [activeVideoId, setActiveVideoId] = useState<string>();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    setActiveVideoId(videos[swiper.activeIndex]?.id);
  };

  return (
    <>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          1024: { enabled: false, allowTouchMove: false, spaceBetween: 0 },
        }}
        className="mam-video-carousel video-carousel"
        loop={false}
        simulateTouch
        grabCursor
        onInit={(swiper) => {
          const desktop = window.matchMedia("(min-width: 1024px)").matches;
          setIsDesktop(desktop);

          if (!desktop) {
            setActiveVideoId(videos[swiper.activeIndex]?.id);
          }
        }}
        onSlideChange={handleSlideChange}
        onBreakpoint={(swiper) => {
          const desktop = window.matchMedia("(min-width: 1024px)").matches;
          setIsDesktop(desktop);

          if (desktop) {
            swiper.slideTo(0, 0);
            setActiveVideoId(undefined);
          } else {
            setActiveVideoId(videos[swiper.activeIndex]?.id);
          }
        }}
      >
        <div slot="container-start" className="mam-desktop-header hidden lg:flex">
          <div className="mam-desktop-heading">
            <VideoCameraIcon aria-hidden="true" className="mam-desktop-heading-icon" />
            <span className="mam-desktop-heading-brand">MAM</span>
            <span aria-hidden="true" className="mam-desktop-heading-divider" />
            <span className="mam-desktop-heading-copy">
              CONTENIDOS EN VIDEO • HISTORIAS EN PRIMERA PERSONA
            </span>
          </div>
        </div>
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <MamCard
              video={video}
              // Con el modal abierto el carrusel se pausa: si no, suenan dos videos.
              isActive={video.id === activeVideoId && modalVideoId === null}
              isMuted={isMuted}
              forcePreview={isDesktop && index < 15}
              onToggleMute={() => setIsMuted((muted) => !muted)}
              onOpen={() => setModalVideoId(video.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalVideoId && (
        <MamModal
          videos={videos}
          activeVideoId={modalVideoId}
          onClose={() => setModalVideoId(null)}
        />
      )}
    </>
  );
}
