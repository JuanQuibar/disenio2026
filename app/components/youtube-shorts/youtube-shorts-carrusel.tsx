"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { YoutubeShortsCard } from "./youtube-shorts-card";

interface YoutubeShortsCarruselProps {
  shorts: Array<{ id: string; title: string; thumbnail: string }>;
}

export function YoutubeShortsCarrusel({ shorts }: YoutubeShortsCarruselProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isChainMode, setIsChainMode] = useState(false);

  const handlePlay = (id: string) => {
    setActiveVideoId(id);
    setIsChainMode(true);
  };

  const handleSlideChange = (swiper: any) => {
    // Si el modo cadena está activo, reproducimos automáticamente el video que queda en foco
    if (isChainMode) {
      // Nota: swiper.activeIndex puede no ser exacto si usamos slidesPerView fraccionario,
      // pero para este caso de uso simple suele funcionar bien alineado a la izquierda.
      // Si se necesita más precisión, se puede usar swiper.realIndex
      const nextVideo = shorts[swiper.activeIndex];
      if (nextVideo) {
        setActiveVideoId(nextVideo.id);
      }
    }
  };

  return (
    <div className="relative mb-6">
      <Swiper
       
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        pagination={{ clickable: true }}
        className="pb-10"
        onSlideChange={handleSlideChange}
      >
        {shorts.map((short) => (
          <SwiperSlide key={short.id}>
            <YoutubeShortsCard
              id={short.id}
              title={short.title}
              thumbnail={short.thumbnail}
              shouldPlay={activeVideoId === short.id}
              isMuted={isMuted}
              onPlay={() => handlePlay(short.id)}
              onToggleMute={() => setIsMuted(!isMuted)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
