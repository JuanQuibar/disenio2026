"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { VideosCard } from "./videos-card";

export function VideoCarruselSwiper({ videos }: { videos: string[] }) {
  return (
    <div className="">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={false}
        loop={false}
        simulateTouch={true}
        grabCursor={true}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <VideosCard videos={video} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
