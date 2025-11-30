"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    jwplayer: any;
  }
}

interface VideoBrandedProps {
  mediaId?: string; // ID del media desde JW Player dashboard
  playlistId?: string; // ID de playlist desde JW Player dashboard
}

export default function VideoBranded({
  mediaId = "ygHoePtt", // Media ID de JW Player
  playlistId,
}: VideoBrandedProps = {}) {
  const playerRef = useRef<HTMLDivElement>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const playerInstance = useRef<any>(null);

  useEffect(() => {
    if (!playerReady || !window.jwplayer || !playerRef.current) return;

    // Evitar inicialización múltiple
    if (playerInstance.current) {
      return;
    }

    try {
      const player = window.jwplayer(playerRef.current);

      const config: any = {
        width: "100%",
        aspectratio: "9:16",
        autostart: false,
        mute: false,
        repeat: true, // Match Loop: ON from dashboard
        controls: true,
        stretching: "uniform",
      };

      // Usar playlist si está disponible, sino usar media ID
      if (playlistId) {
        config.playlist = `https://cdn.jwplayer.com/v2/playlists/${playlistId}`;
      } else if (mediaId) {
        config.playlist = `https://cdn.jwplayer.com/v2/media/${mediaId}`;
      }

      player.setup(config);
      playerInstance.current = player;

      // Event listeners opcionales
      player.on("ready", () => {
        console.log("JW Player ready");
      });

      player.on("error", (error: any) => {
        console.error("JW Player error:", error);
      });
    } catch (error) {
      console.error("Error initializing JW Player:", error);
    }

    return () => {
      if (playerInstance.current) {
        try {
          playerInstance.current.remove();
          playerInstance.current = null;
        } catch (e) {
          console.error("Error removing player:", e);
        }
      }
    };
  }, [playerReady, mediaId, playlistId]);

  return (
    <div className=" rounded-xl bg-white border border-gray-900  shadow-md hover:shadow-lg transition-shadow duration-300 w-full aspect-9/16">
      <Script
        src="https://cdn.jwplayer.com/libraries/REo268Kx.js"
        strategy="afterInteractive"
        onReady={() => {
          console.log("JW Player script loaded");
          setPlayerReady(true);
        }}
        onError={(e) => {
          console.error("Error loading JW Player script:", e);
        }}
      />
      <div
        ref={playerRef}
        id="branded-player"
        className="w-full  rounded-md overflow-hidden bg-black"
      />
    </div>
  );
}
