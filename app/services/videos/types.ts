/**
 * Tipos compartidos de la capa de video.
 *
 * Cada carrusel tiene su propia fuente y su propio contrato, pero todos
 * normalizan sus datos a partir de `VideoItem` para poder alimentar en el
 * futuro una experiencia inmersiva comun (modal fullscreen con scroll vertical).
 */

export type VideoSource = "mam" | "youtube" | "pexels";

export interface VideoItem {
  /** Identificador estable dentro de su fuente. No depende del orden del carrusel. */
  id: string;
  title: string;
  source: VideoSource;
  thumbnailUrl?: string;
}

export interface MamVideo extends VideoItem {
  source: "mam";
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
  durationSeconds: number;
  articleUrl?: string;
}

export interface YoutubeShort extends VideoItem {
  source: "youtube";
  thumbnailUrl: string;
}

export interface BrandedVideo extends VideoItem {
  source: "pexels";
  videoUrl: string;
  /**
   * Atribucion comercial. Hoy no se muestra en la tarjeta (se quito la leyenda
   * por decision de diseno), pero se mantiene en el contrato porque es el dato
   * que necesita el modal inmersivo para identificar al anunciante.
   */
  category: string;
  brandName: string;
}
