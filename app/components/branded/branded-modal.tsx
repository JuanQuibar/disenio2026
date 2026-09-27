"use client";

import type { BrandedVideo } from "@/app/services/videos/types";
import { VideoModalShell } from "../videos-shared/video-modal-shell";
import { VideoModalSlide } from "../videos-shared/video-modal-slide";

interface BrandedModalProps {
  videos: BrandedVideo[];
  activeVideoId: string;
  onClose: () => void;
}

export function BrandedModal({
  videos,
  activeVideoId,
  onClose,
}: BrandedModalProps) {
  return (
    <VideoModalShell
      videos={videos}
      activeVideoId={activeVideoId}
      onClose={onClose}
      renderSlide={(video, isActive) => (
        <VideoModalSlide
          videoUrl={video.videoUrl}
          posterUrl={video.thumbnailUrl}
          isActive={isActive}
        >
          <p className="font-sans text-xs uppercase tracking-wider text-white/70">
            {video.brandName} · {video.category}
          </p>
        </VideoModalSlide>
      )}
    />
  );
}
