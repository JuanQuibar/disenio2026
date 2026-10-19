"use client";

import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export function VideoCarouselNavigation({ label }: { label: string }) {
  const swiper = useSwiper();
  const [edges, setEdges] = useState({
    beginning: true,
    end: false,
    locked: false,
  });

  useEffect(() => {
    const update = () => {
      setEdges({
        beginning: swiper.isBeginning,
        end: swiper.isEnd,
        locked: swiper.isLocked,
      });
    };

    update();
    swiper.on("slideChange", update);
    swiper.on("resize", update);
    swiper.on("lock", update);
    swiper.on("unlock", update);
    swiper.on("toEdge", update);
    swiper.on("fromEdge", update);

    return () => {
      swiper.off("slideChange", update);
      swiper.off("resize", update);
      swiper.off("lock", update);
      swiper.off("unlock", update);
      swiper.off("toEdge", update);
      swiper.off("fromEdge", update);
    };
  }, [swiper]);

  return (
    <div className="video-carousel-navigation hidden justify-end gap-2 pb-3 lg:flex">
      <button
        type="button"
        aria-label={`Videos anteriores de ${label}`}
        disabled={edges.beginning || edges.locked}
        onClick={() => swiper.slidePrev()}
        className="video-carousel-navigation-button flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white disabled:cursor-default disabled:opacity-30"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label={`Videos siguientes de ${label}`}
        disabled={edges.end || edges.locked}
        onClick={() => swiper.slideNext()}
        className="video-carousel-navigation-button flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white disabled:cursor-default disabled:opacity-30"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
