"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { YoutubeShort } from "@/app/services/videos/types";
import { YoutubeShortsCard } from "./youtube-shorts-card";
import { YoutubeShortsModal } from "./youtube-shorts-modal";
import { VideoCarouselNavigation } from "../videos-shared/video-carousel-navigation";

interface YoutubeShortsCarruselProps {
  shorts: YoutubeShort[];
}

export function YoutubeShortsCarrusel({ shorts }: YoutubeShortsCarruselProps) {
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  return (
    <div className="youtube-shorts-content relative mb-6">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
        pagination={{ clickable: true }}
        className="youtube-shorts-carousel video-carousel pb-10 lg:pb-0"
      >
        <div slot="container-start" className="youtube-shorts-desktop-header">
          <div className="youtube-shorts-desktop-heading">
            <span className="youtube-shorts-desktop-badge">
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              SHORTS
            </span>
            <h3>CANAL OFICIAL DE YOUTUBE @DIARIOUNO</h3>
          </div>
          <VideoCarouselNavigation label="Shorts" />
        </div>
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
