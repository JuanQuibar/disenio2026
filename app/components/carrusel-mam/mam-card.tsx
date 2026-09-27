"use client";

import type { MamVideo } from "@/app/services/videos/types";
import { useVideoAutoplay } from "../videos-shared/use-video-autoplay";

interface MamCardProps {
  video: MamVideo;
  /** Solo el slide activo reproduce, para no superponer audio ni saturar la red. */
  isActive: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
}

function formatDuration(seconds: number) {
  if (!seconds || seconds < 0) return "";

  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);

  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

export function MamCard({
  video,
  isActive,
  isMuted,
  onToggleMute,
}: MamCardProps) {
  const { containerRef, videoRef } = useVideoAutoplay(isActive);
  const duration = formatDuration(video.durationSeconds);

  return (
    <div ref={containerRef} className="w-full max-w-sm mx-auto">
      <div className="relative w-full aspect-9/16 overflow-hidden rounded-md border border-gray-900 bg-black shadow-md transition-shadow duration-300 hover:shadow-lg">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl || undefined}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {duration && (
          <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-sans text-[11px] text-white">
            {duration}
          </span>
        )}

        <button
          onClick={onToggleMute}
          aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
          className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm"
        >
          {isMuted ? (
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>

      <div className="flex flex-col justify-center border-black bg-white py-2">
        {video.articleUrl ? (
          <a
            href={video.articleUrl}
            className="font-sans text-sm font-medium leading-snug text-gray-900 line-clamp-3 hover:underline"
          >
            {video.title}
          </a>
        ) : (
          <h4 className="font-sans text-sm font-medium leading-snug text-gray-900 line-clamp-3">
            {video.title}
          </h4>
        )}
      </div>
    </div>
  );
}
