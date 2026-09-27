"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { YoutubeShort } from "@/app/services/videos/types";
import { YoutubeShortsCard } from "./youtube-shorts-card";

interface YoutubeShortsCarruselProps {
  shorts: YoutubeShort[];
}

export function YoutubeShortsCarrusel({ shorts }: YoutubeShortsCarruselProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Al deslizar se desmonta el iframe anterior: nunca queda mas de un video sonando.
  const handleSlideChange = () => {
    setActiveVideoId(null);
  };

  return (
    <div className="relative mb-6">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        pagination={{ clickable: true }}
        className="pb-10"
        onSlideChange={handleSlideChange}
      >
        {shorts.map((short) => (
          <SwiperSlide key={short.id}>
            <YoutubeShortsCard
              short={short}
              shouldPlay={activeVideoId === short.id}
              isMuted={false}
              onPlay={() => setActiveVideoId(short.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
