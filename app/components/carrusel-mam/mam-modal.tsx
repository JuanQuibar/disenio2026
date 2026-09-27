"use client";

import type { MamVideo } from "@/app/services/videos/types";
import { VideoModalShell } from "../videos-shared/video-modal-shell";
import { VideoModalSlide } from "../videos-shared/video-modal-slide";

interface MamModalProps {
  videos: MamVideo[];
  activeVideoId: string;
  onClose: () => void;
}

export function MamModal({ videos, activeVideoId, onClose }: MamModalProps) {
  return (
    <VideoModalShell
      videos={videos}
      activeVideoId={activeVideoId}
      onClose={onClose}
      renderSlide={(video, isActive) => (
        <VideoModalSlide
          videoUrl={video.videoUrl}
          posterUrl={video.thumbnailUrl || undefined}
          isActive={isActive}
          allowSound
        >
          {video.articleUrl && (
            <a
              href={video.articleUrl}
              className="inline-block font-sans text-sm text-white/80 underline"
            >
              Leer la nota
            </a>
          )}
        </VideoModalSlide>
      )}
    />
  );
}
