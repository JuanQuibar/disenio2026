"use client";

import { EditorialImage } from "@/app/components/editorial-image";
import { PencilIcon } from "@heroicons/react/16/solid";
import { useRef, useEffect } from "react";
import {
  getCalibrationSummary,
  getCalibrationTitle,
} from "@/app/content/typography-calibration";

interface SenatusCardProps {
  mediaType: "video" | "image";
  mediaSrc: string;
  contentIndex: number;
  alt?: string;
}

export function SenatusCard({
  mediaType,
  mediaSrc,
  contentIndex,
  alt = "Senatus Romano",
}: SenatusCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mediaType === "video" && videoRef.current) {
      const video = videoRef.current;
      video.muted = true;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch((err) => {
                if (err.name !== "AbortError") {
                  console.error("Error playing video:", err);
                }
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.1, rootMargin: "50px" }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }
  }, [mediaType]);

  return (
    <article className="senatus-card mb-2">
      <div className="senatus-card-media relative aspect-[3/2] w-full overflow-hidden rounded-md mb-2 bg-gray-100">
        {mediaType === "video" ? (
          <video
            ref={videoRef}
            src={mediaSrc}
            loop
            muted
            playsInline
            preload="metadata"
            className="senatus-card-visual w-full h-full object-cover"
          />
        ) : (
          <EditorialImage
            desktopSizes="(max-width: 1360px) 30vw, 340px"
            src={mediaSrc}
            alt={alt}
            fill
            className="senatus-card-visual object-cover"
            sizes="(max-width: 1023px) 100vw, 30vw"
          />
        )}
      </div>
      <div className="senatus-card-copy">
        <h2 className="senatus-card-title font-serif text-lg leading-snug text-gray-900 mb-1">
          {getCalibrationTitle(contentIndex + 5)}
        </h2>

        <p className="senatus-card-summary font-sans bajada mb-2">
          {getCalibrationSummary(contentIndex + 5)}
        </p>

        <div className="senatus-card-author flex items-center gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            Marcus Aurelius
          </p>
        </div>
      </div>
    </article>
  );
}
