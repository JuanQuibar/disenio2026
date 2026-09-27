/**
 * Carga de la IFrame Player API de YouTube.
 *
 * Un iframe comun no expone `currentTime` ni permite pausar desde afuera, asi
 * que sin esta API el modal de Shorts no podria tener los mismos controles que
 * MAM y branded. La API se carga una sola vez y se comparte entre slides.
 */

export interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  /** Apaga modulos del player. Se usa para sacar los subtitulos. */
  unloadModule(moduleName: string): void;
  destroy(): void;
}

interface YouTubePlayerEvent {
  target: YouTubePlayer;
  data: number;
}

interface YouTubePlayerOptions {
  videoId: string;
  playerVars?: Record<string, string | number>;
  events?: {
    onReady?: (event: YouTubePlayerEvent) => void;
    onStateChange?: (event: YouTubePlayerEvent) => void;
    onError?: (event: YouTubePlayerEvent) => void;
  };
}

interface YouTubeNamespace {
  Player: new (
    host: HTMLElement | string,
    options: YouTubePlayerOptions
  ) => YouTubePlayer;
}

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

/** Estados que devuelve `getPlayerState()`. */
export const YT_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

let loaderPromise: Promise<YouTubeNamespace> | null = null;

/**
 * Devuelve el namespace `YT` ya listo. Las llamadas simultaneas comparten la
 * misma promesa: el script se inyecta una unica vez aunque varios slides lo
 * pidan a la vez.
 */
export function loadYouTubeIframeApi(): Promise<YouTubeNamespace> {
  if (loaderPromise) {
    return loaderPromise;
  }

  loaderPromise = new Promise((resolve, reject) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }

    // El callback es global y lo dispara el script descargado: se encadena el
    // anterior por si otra parte de la pagina ya habia registrado el suyo.
    const previousCallback = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();

      if (window.YT?.Player) {
        resolve(window.YT);
      } else {
        reject(new Error("La IFrame API de YouTube cargo sin el constructor"));
      }
    };

    const script = document.createElement("script");

    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      loaderPromise = null;
      reject(new Error("No se pudo cargar la IFrame API de YouTube"));
    };

    document.head.appendChild(script);
  });

  return loaderPromise;
}
