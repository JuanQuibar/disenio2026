"use client";

import { useEffect, useRef } from "react";

interface CardVideosProps {
  videos?: string;
  index?: number;
}

export function VideosCard({ videos, index }: CardVideosProps) {
  const noticias = [
    "Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore ",
    "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
    "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit quisquam voluptatum  ",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim",
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    "Consectetur adipisicing elit sed do eiusmod tempor incididunt labore dolore",
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    if (!videoElement || !containerElement) return;

    // Auto-reproducir el primer video inmediatamente
    if (index === 0) {
      videoElement.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Auto-play was prevented. This is expected on some devices/browsers.
                // We silently ignore the error to avoid console noise.
              });
            }
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.1, // Reducido a 0.1 para que cargue apenas entre en pantalla
        rootMargin: "50px", // Margen extra para pre-cargar antes de que entre totalmente
      }
    );

    observer.observe(containerElement);

    return () => {
      observer.unobserve(containerElement);
    };
  }, [index]);

  return (
    <div ref={containerRef} className="w-full max-w-sm mx-auto">
      {/* Contenedor del video */}
      <div className="rounded-md bg-white border border-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 w-full aspect-9/16">
        <video
          ref={videoRef}
          src={videos}
          //controls
          muted
          loop
          playsInline
          preload="metadata" // Cargar metadata para mostrar primer frame rápido
          className="w-full h-full rounded-t-md object-cover"
        ></video>
      </div>

      {/* Título debajo del video */}
      <div className="flex flex-col justify-center py-2 bg-white  border-black">
        <h3 className="font-sans text-sm font-medium text-gray-900 line-clamp-3 leading-snug">
          {noticias[index ?? 0]}
        </h3>
      </div>
    </div>
  );
}
