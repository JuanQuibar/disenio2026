"use client";

import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import { useRef, useEffect } from "react";

interface SenatusCardProps {
  mediaType: "video" | "image";
  mediaSrc: string;
  alt?: string;
}

export function SenatusCard({
  mediaType,
  mediaSrc,
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
    <div className="mb-2">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md mb-2 bg-gray-100">
        {mediaType === "video" ? (
          <video
            ref={videoRef}
            src={mediaSrc}
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="">
        <h2 className="font-serif text-lg leading-snug text-gray-900 mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum
        </h2>

        <p className="font-sans bajada text-gray-600 line-clamp-2 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className="flex items-center gap-1">
          <PencilIcon className="w-3 h-3 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
            Marcus Aurelius
          </p>
        </div>
      </div>
    </div>
  );
}
