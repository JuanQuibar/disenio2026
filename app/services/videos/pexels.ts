import type { BrandedVideo } from "./types";

const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

interface PexelsVideoFile {
  link: string;
  file_type: string;
  width: number;
  height: number;
}

interface PexelsVideo {
  id: number;
  image?: string;
  video_files: PexelsVideoFile[];
}

interface PexelsVideoResponse {
  videos?: PexelsVideo[];
}

export interface BrandedVerticalConfig {
  /** Consulta enviada a Pexels. Define la vertical comercial demostrada. */
  query: string;
  /** Etiqueta visible de la vertical: comidas, autos, etc. */
  category: string;
  brandName: string;
  sponsorLabel: string;
  perPage?: number;
}

function findBestVerticalFile(files: PexelsVideoFile[]): PexelsVideoFile | null {
  const verticalMp4 = files.filter(
    (file) => file.file_type === "video/mp4" && file.width < file.height
  );

  if (verticalMp4.length === 0) {
    return null;
  }

  const hd = verticalMp4.find((file) => file.width === 720);
  if (hd) {
    return hd;
  }

  const fullHd = verticalMp4.find((file) => file.width === 1080);
  if (fullHd) {
    return fullHd;
  }

  return verticalMp4.sort((a, b) => b.width - a.width)[0];
}

/**
 * Videos verticales de Pexels usados como muestra de diseno del bloque branded.
 * Pexels es solo una fuente de maqueta: el contrato `BrandedVideo` es el que
 * representa como llegaria el contenido patrocinado real.
 */
export async function fetchBrandedVideos(
  config: BrandedVerticalConfig
): Promise<BrandedVideo[]> {
  if (!apiKey) {
    console.error("API Key de Pexels no esta definida");
    return [];
  }

  const perPage = config.perPage ?? 10;
  const url = `https://api.pexels.com/videos/search?query=${encodeURIComponent(
    config.query
  )}&orientation=portrait&per_page=${perPage}&page=1`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: apiKey },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `Error al obtener videos branded de Pexels: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data: PexelsVideoResponse = await res.json();

    if (!Array.isArray(data.videos)) {
      return [];
    }

    return data.videos.flatMap((video) => {
      const file = findBestVerticalFile(video.video_files ?? []);

      if (!file) {
        return [];
      }

      const normalized: BrandedVideo = {
        id: String(video.id),
        source: "pexels",
        title: "",
        videoUrl: file.link,
        thumbnailUrl: video.image,
        category: config.category,
        brandName: config.brandName,
        sponsorLabel: config.sponsorLabel,
      };

      return [normalized];
    });
  } catch (error) {
    console.error("Error fetching branded videos from Pexels:", error);
    return [];
  }
}
