import { PencilIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { fetchVideosCuadrados } from "@/app/services/fetchs";

export async function MuyDestacada() {
  const videos = await fetchVideosCuadrados();
  // Usar el primer video del array, o fallback si no hay videos
  const videoUrl =
    videos.length > 0
      ? videos[0]
      : "https://videos.pexels.com/video-files/9040724/9040724-hd_720_720_30fps.mp4";

  const urlFoto =
    "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=720";
  const fotos = {
    src: urlFoto,
    alt: "Imagen destacada de la noticia",
  };
  return (
    <div className="rounded-md bg-white h-auto border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 pb-2 mt-2">
      <div className="flex items-center gap-1 pt-2 px-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="font-sans font-bold text-red-600 uppercase text-xs tracking-wide">
          LIVE
        </span>
      </div>

      <div className="px-2 pt-1">
        <h1 className="font-serif font-bold text-[1.5rem]/[1.8rem] line-clamp-3">
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit libero consectetur esse "
          }
        </h1>
        <p className="pt-2 bajada font-sans">
          Sit amet consectetur adipisicing elit, placeat officiis, consectetur
          alias iusto delectus cum, neque sapiente accusamus magni eius odit
        </p>
        <div className="flex gap-1 pb-4 pt-2">
          <PencilIcon className="w-4 h-4 text-gray-500" />
          <p className="font-sans font-bold text-gray-500 uppercase text-[10px]">
            Natalia Sosa Abagianos
          </p>
        </div>
        <div className="aspect-[1/1">
          <video
            src={videoUrl}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full rounded-t-md object-cover"
          ></video>
        </div>
        <div className="border-t border-gray-300 p-2 mt-4">
          <p className="uppercase text-[8px] ">oqua pronobis</p>
          <h2 className="font-serif ">
            Aut dolorum asperiores eaque quibusdam repudiandae
          </h2>
        </div>
        <div className="border-t border-gray-300 p-2 mt-2">
          <p className="uppercase text-[8px] ">pectrom dicta</p>
          <h2 className="font-serif italic">
            Enim assumenda quae dicta eum repudiandae aliquid
          </h2>
          <div className="flex gap-1 items-center mt-1">
            <UserCircleIcon className="w-4 h-4" />
            <p className="font-sans font-bold text-gray-500 uppercase text-[8px]">
              {" "}
              Facundo García
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
