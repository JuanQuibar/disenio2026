"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { YoutubeShort } from "@/app/services/videos/types";
import { YoutubeShortsCard } from "./youtube-shorts-card";
import { YoutubeShortsModal } from "./youtube-shorts-modal";

interface YoutubeShortsCarruselProps {
  shorts: YoutubeShort[];
}

export function YoutubeShortsCarrusel({ shorts }: YoutubeShortsCarruselProps) {
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

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
      >
        {shorts.map((short) => (
          <SwiperSlide key={short.id}>
            <YoutubeShortsCard
              short={short}
              onOpen={() => setModalVideoId(short.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalVideoId && (
        <YoutubeShortsModal
          shorts={shorts}
          activeVideoId={modalVideoId}
          onClose={() => setModalVideoId(null)}
        />
      )}
    </div>
  );
}
