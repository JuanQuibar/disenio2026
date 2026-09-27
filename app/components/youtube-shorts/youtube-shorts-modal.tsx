"use client";

import type { YoutubeShort } from "@/app/services/videos/types";
import { VideoModalShell } from "../videos-shared/video-modal-shell";
import { YoutubeShortsModalSlide } from "./youtube-shorts-modal-slide";

interface YoutubeShortsModalProps {
  shorts: YoutubeShort[];
  activeVideoId: string;
  onClose: () => void;
}

export function YoutubeShortsModal({
  shorts,
  activeVideoId,
  onClose,
}: YoutubeShortsModalProps) {
  return (
    <VideoModalShell
      videos={shorts}
      activeVideoId={activeVideoId}
      onClose={onClose}
      renderSlide={(short, isActive) => (
        <YoutubeShortsModalSlide short={short} isActive={isActive} />
      )}
    />
  );
}
