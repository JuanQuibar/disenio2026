"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { BrandedVideo } from "@/app/services/videos/types";
import { BrandedCard } from "./branded-card";
import { BrandedModal } from "./branded-modal";
import { VideoCarouselNavigation } from "../videos-shared/video-carousel-navigation";

interface BrandedCarruselProps {
  videos: BrandedVideo[];
  brandName: string;
  logoSrc?: string;
  logoAlt?: string;
}

export function BrandedCarrusel({
  videos,
  brandName,
  logoSrc,
  logoAlt,
}: BrandedCarruselProps) {
  const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveVideoId(videos[swiper.activeIndex]?.id);
  };

  return (
    <div className="branded-content relative">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{ 1024: { slidesPerView: 6, spaceBetween: 16 } }}
        className="branded-carousel video-carousel"
        loop={false}
        simulateTouch
        grabCursor
        onSlideChange={handleSlideChange}
      >
        <div slot="container-start" className="branded-desktop-header">
          <div className="branded-desktop-heading">
            {logoSrc ? (
              <span className="branded-desktop-logo-frame">
                <Image
                  src={logoSrc}
                  alt={logoAlt ?? brandName}
                  width={1000}
                  height={190}
                  className="branded-desktop-logo"
                />
              </span>
            ) : (
              <span className="branded-desktop-brand-name">{brandName}</span>
            )}
            <h3>BRANDED CONTENT • EXPERIENCIAS DE CUYO</h3>
          </div>
          <VideoCarouselNavigation label={brandName} />
        </div>
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <BrandedCard
              video={video}
              // Con el modal abierto el carrusel se pausa: si no, suenan dos videos.
              isActive={video.id === activeVideoId && modalVideoId === null}
              onOpen={() => setModalVideoId(video.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalVideoId && (
        <BrandedModal
          videos={videos}
          activeVideoId={modalVideoId}
          onClose={() => setModalVideoId(null)}
        />
      )}
    </div>
  );
}
