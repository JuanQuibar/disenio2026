"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { CardPrincipales } from "./card-principales";
import { useState, useRef } from "react"; // 1. Importa useRef

export function CarruselSwiper({
  fotos,
}: {
  fotos: { src: string; alt: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // 2. Crea una ref para guardar la instancia de Swiper
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative mb-6">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={false}
        loop={false}
        simulateTouch={true}
        grabCursor={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        // 3. Guarda la instancia de Swiper en nuestra ref
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {fotos.map((foto, index) => (
          <SwiperSlide key={index}>
            <CardPrincipales fotos={foto} priority={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="
          swiper-pagination 
          swiper-pagination-clickable 
          swiper-pagination-bullets 
          swiper-pagination-horizontal
          -mb-8
        "
      >
        {fotos.map((_, index) => (
          <span
            key={index}
            className={`
              swiper-pagination-bullet
              ${index === activeIndex ? "swiper-pagination-bullet-active" : ""}
            `}
            // 4. ¡AÑADE EL onClick AQUÍ!
            onClick={() => swiperRef.current?.slideTo(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
