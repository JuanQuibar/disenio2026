import { unstable_noStore as noStore } from "next/cache";

const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

type PexelsVideoFile = {
  link: string;
  quality: string;
  file_type: string;
  width: number;
  height: number;
};

type PexelsVideo = {
  user: {
    name: string;
    url: string;
  };
  video_files: PexelsVideoFile[];
};

type PexelsVideoResponse = {
  videos: PexelsVideo[];
};

function findBestVerticalVideo(
  files: PexelsVideoFile[]
): PexelsVideoFile | null {
  const verticalMp4Files = files.filter(
    (f) => f.file_type === "video/mp4" && f.width < f.height
  );

  if (verticalMp4Files.length === 0) {
    return null;
  }

  const hdVertical = verticalMp4Files.find((f) => f.width === 720);
  if (hdVertical) {
    return hdVertical;
  }
  const fullHdVertical = verticalMp4Files.find((f) => f.width === 1080);
  if (fullHdVertical) {
    return fullHdVertical;
  }

  verticalMp4Files.sort((a, b) => b.width - a.width);
  return verticalMp4Files[0];
}

export async function fetchFotos(): Promise<
  Array<{ src: string; alt: string }>
> {
  noStore();
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  const randomPage = Math.floor(Math.random() * 100) + 1;
  const query = "people";
  const url = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=38&page=${randomPage}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `Error al obtener fotos de Pexels: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data = await res.json();

    const fotos = data.photos.map(
      (photo: { src: { medium: string }; alt: string }) => ({
        src: photo.src.medium,
        alt: photo.alt,
      })
    );

    return fotos;
  } catch (error) {
    console.error("Error fetching photos from Pexels:", error);
    return [];
  }
}

export async function fetchDeportes(): Promise<
  Array<{ src: string; alt: string }>
> {
  noStore();
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  const randomPage = Math.floor(Math.random() * 100) + 1;
  const query = "sports";
  const url = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=5&page=${randomPage}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `Error al obtener fotos de deportes de Pexels: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data = await res.json();

    return data.photos.map(
      (photo: { src: { medium: string }; alt: string }) => ({
        src: photo.src.medium,
        alt: photo.alt,
      })
    );
  } catch (error) {
    console.error("Error fetching sports photos from Pexels:", error);
    return [];
  }
}

export async function fetchVideosVerticales(): Promise<string[]> {
  noStore();
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  const randomPage = Math.floor(Math.random() * 100) + 1;

  // 1. Usamos /search en lugar de /popular
  const query = "vertical"; // Buscamos videos que Pexels ya etiquetó como verticales

  // 2. Pedimos el máximo (80) para tener más material para filtrar
  const url = `https://api.pexels.com/videos/search?query=${query}&orientation=portrait&per_page=10&page=${randomPage}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) {
      console.error(
        `Error al obtener videos de Pexels: ${res.status} ${res.statusText}`
      );
      // Retornar array vacío en lugar de lanzar error
      return [];
    }

    const data: PexelsVideoResponse = await res.json();

    // 3. El flatMap ahora tendrá 80 videos para revisar, en lugar de 10
    const videoLinks = data.videos.flatMap((video) => {
      const bestFile = findBestVerticalVideo(video.video_files);
      return bestFile ? [bestFile.link] : [];
    });

    return videoLinks;
  } catch (error) {
    console.error("Error fetching videos from Pexels:", error);
    // Retornar array vacío en caso de error de red o timeout
    return [];
  }
}

export async function fetchVideosCuadrados(): Promise<string[]> {
  noStore();
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  // Usamos página 1 que siempre tiene resultados
  const query = "people";
  const url = `https://api.pexels.com/videos/search?query=${query}&orientation=square&per_page=30&page=1`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) {
      console.error(
        `Error al obtener videos cuadrados de Pexels: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data: PexelsVideoResponse = await res.json();

    // Extraer links de videos mp4, preferir calidad HD
    const videoLinks = data.videos.flatMap((video) => {
      const mp4Files = video.video_files.filter(
        (f) => f.file_type === "video/mp4"
      );

      if (mp4Files.length === 0) {
        return [];
      }

      // Preferir HD (640-800px)
      const hdFile = mp4Files.find((f) => f.width >= 640 && f.width <= 800);
      if (hdFile) {
        return [hdFile.link];
      }

      // Si no, tomar el de mejor calidad disponible
      mp4Files.sort((a, b) => b.width - a.width);
      return [mp4Files[0].link];
    });

    return videoLinks;
  } catch (error) {
    console.error("Error fetching square videos from Pexels:", error);
    return [];
  }
}

export async function fetchVideosPaisaje(): Promise<string[]> {
  noStore();
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  const randomPage = Math.floor(Math.random() * 100) + 1;
  const query = "people";
  const url = `https://api.pexels.com/videos/search?query=${query}&orientation=landscape&per_page=10&page=${randomPage}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `Error al obtener videos paisaje de Pexels: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data: PexelsVideoResponse = await res.json();

    const videoLinks = data.videos.flatMap((video) => {
      const mp4Files = video.video_files.filter(
        (f) => f.file_type === "video/mp4"
      );

      if (mp4Files.length === 0) {
        return [];
      }

      // Preferir HD (1280-1920px width)
      const hdFile = mp4Files.find((f) => f.width >= 1280 && f.width <= 1920);
      if (hdFile) {
        return [hdFile.link];
      }

      mp4Files.sort((a, b) => b.width - a.width);
      return [mp4Files[0].link];
    });

    return videoLinks;
  } catch (error) {
    console.error("Error fetching landscape videos from Pexels:", error);
    return [];
  }
}

export async function fetchYoutubeShorts(): Promise<
  Array<{ id: string; title: string; thumbnail: string }>
> {
  noStore();
  const playlistId = "PLDedS24i-fT9rjzB0-Zd2LNe_z3YuZ8BK";
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  if (!apiKey) {
    console.error("YouTube API Key no definida");
    return [];
  }
  const maxResults = 12;

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&channelId=UC64ZNqX0FQHabP8iIkmnR3A&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${maxResults}`;

  const res = await fetch(url);

  if (!res.ok) {
    console.error("Error fetching YouTube Shorts:", res.status, res.statusText);
    return [];
  }

  const data = await res.json();

  return data.items.map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails.maxres?.url ||
      item.snippet.thumbnails.high?.url ||
      item.snippet.thumbnails.medium?.url,
  }));
}

export async function fetchDataFactoryWidget(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) {
      console.error(`Error fetching DataFactory widget: ${res.status}`);
      return "";
    }

    const html = await res.text();

    // Extraer solo el contenido del body para evitar conflictos de hidratación
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) {
      return bodyMatch[1].trim();
    }

    // Si no hay body tag, devolver todo (asumiendo que es un fragmento)
    return html;
  } catch (error) {
    console.error("Error fetching DataFactory widget:", error);
    return "";
  }
}
