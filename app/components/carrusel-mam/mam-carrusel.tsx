"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { MamVideo } from "@/app/services/videos/types";
import { MamCard } from "./mam-card";

interface MamCarruselProps {
  videos: MamVideo[];
}

export function MamCarrusel({ videos }: MamCarruselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
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
            isActive={index === activeIndex}
            isMuted={isMuted}
            onToggleMute={() => setIsMuted((muted) => !muted)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
