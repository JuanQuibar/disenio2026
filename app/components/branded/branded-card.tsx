"use client";

import type { BrandedVideo } from "@/app/services/videos/types";
import { useVideoAutoplay } from "../videos-shared/use-video-autoplay";

interface BrandedCardProps {
  video: BrandedVideo;
  /** Solo el slide activo reproduce, para no cargar varios mp4 en paralelo. */
  isActive: boolean;
  onOpen: () => void;
}

export function BrandedCard({ video, isActive, onOpen }: BrandedCardProps) {
  const { containerRef, videoRef } = useVideoAutoplay(isActive);

  return (
    <div ref={containerRef} className="branded-card w-full max-w-sm mx-auto">
      <div className="branded-card-media relative w-full aspect-9/16 overflow-hidden rounded-md border border-gray-900 bg-black shadow-md transition-shadow duration-300 hover:shadow-lg">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="branded-card-video h-full w-full object-cover"
        />

        <div aria-hidden="true" className="branded-card-gradient hidden lg:block" />

        <button
          onClick={onOpen}
          aria-label={`Abrir video: ${video.title}`}
          className="absolute inset-0 z-10 h-full w-full cursor-pointer"
        >
          <span aria-hidden="true" className="branded-card-play hidden lg:flex">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>

        <p className="branded-card-title-overlay hidden line-clamp-2">
          {video.title}
        </p>
      </div>

      <div className="branded-card-caption bg-white py-2">
        <h4 className="font-sans text-sm font-medium leading-snug text-gray-900 line-clamp-3">
          {video.title}
        </h4>
      </div>
    </div>
  );
}
