"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { BrandedVideo } from "@/app/services/videos/types";
import { BrandedCard } from "./branded-card";

interface BrandedCarruselProps {
  videos: BrandedVideo[];
}

export function BrandedCarrusel({ videos }: BrandedCarruselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <BrandedCard video={video} isActive={index === activeIndex} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
