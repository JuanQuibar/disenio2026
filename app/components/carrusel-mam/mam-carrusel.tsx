"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { MamVideo } from "@/app/services/videos/types";
import { MamCard } from "./mam-card";
import { MamModal } from "./mam-modal";

interface MamCarruselProps {
  videos: MamVideo[];
}

export function MamCarrusel({ videos }: MamCarruselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        loop={false}
        simulateTouch
        grabCursor
        onSlideChange={handleSlideChange}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <MamCard
              video={video}
              // Con el modal abierto el carrusel se pausa: si no, suenan dos videos.
              isActive={index === activeIndex && modalVideoId === null}
              isMuted={isMuted}
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
