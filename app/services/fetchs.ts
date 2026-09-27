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

export async function fetchFotos(): Promise<
  Array<{ src: string; alt: string }>
> {
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  // Usamos una página fija para mantener el contenido consistente en la maqueta
  const randomPage = 1;
  const query = "people";
  const url = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=46&page=${randomPage}`;

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
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  // Usamos una página fija para mantener el contenido consistente en la maqueta
  const randomPage = 1;
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

export async function fetchVideosCuadrados(): Promise<string[]> {
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
  if (!apiKey) {
    throw new Error("API Key de Pexels no está definida");
  }

  // Usamos una página fija para mantener el contenido consistente en la maqueta
  const randomPage = 1;
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
