import VideoBranded from "./branded-card";
import Image from "next/image";
import { VideoCarruselSwiper } from "../carrusel-videos/videos-carrusel-swiper";
import { fetchVideosVerticales } from "@/app/services/fetchs";

//import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export async function BrandedWrapper() {
  const videos = await fetchVideosVerticales();
  return (
    <>
      <div className="pt-2 md:pt-0 md:mb-4 border-t-2 separadores pb-2">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2 px-2">
          {" "}
          Branded
        </h3>
        <div className="p-2 bg-white rounded-lg shadow-md  md:h-auto flex flex-col justify-center">
          {/* Custom Header */}
          <div className="flex justify-between items-center pb-2">
            <Image
              src="/a-comer.png"
              alt="Qué comer"
              width={1000}
              height={190}
              className="p-0 w-36 h-auto"
            />

            {/* <div className="flex items-center gap-1">
              <ChatBubbleOvalLeftIcon className="w-5 h-5 text-teal-800" />
              <h4
                className="font-serif font-bold text-xl italic text-teal-800"
                style={{ lineHeight: "1.5rem" }}
              >
                #qué comer
              </h4>
            </div> */}

            {/* Right: Sponsor Logo */}
            <div className="flex items-center">
              <div className="h-6 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 font-sans uppercase tracking-wider">
                Sponsor
              </div>
            </div>
          </div>
          <div className=" p-2 bg-white rounded-lg shadow-md">
            <VideoCarruselSwiper videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}
