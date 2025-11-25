import { Suspense } from "react";
import { MuyDestacada } from "./components/muy-destacada/muy-destacada";
import { PrincipalesWrapper } from "./components/principales/principales-wrapper";
import { PoliticaWrapper } from "./components/politica/politica-wrapper";
import { YoutubeShortsWrapper } from "./components/youtube-shorts/youtube-shorts-wrapper";
import { VideosWrapperCarrusel } from "./components/carrusel-videos/videos-wrapper-carrusel";
import { ServiciosWrapper } from "./components/servicios/servicios-wrapper";
import { Canal7LiveWrapper } from "./components/live/canal7-live-wrapper";
import { RadioNihuilWrapper } from "./components/live/radio-nihuil-wrapper";
import { ChatBotWrapper } from "./components/chat-bot/chat-bot-wrapper";
import { Footer } from "./components/footer/footer";
import { SociedadWrapper } from "./components/sociedad/sociedad-wrapper";
import { OvacionWrapper } from "./components/ovacion/ovacion-wrapper";
import { UltimasNoticiasWrapper } from "./components/ultimas-noticias/ultimas-noticias-wrapper";
import { BannerPublicitario } from "./components/banner-publicitario";
import {
  MuyDestacadaSkeleton,
  SeccionListadoSkeleton,
  VideosSkeleton,
  YoutubeShortsSkeleton,
  OvacionSkeleton,
  UltimasNoticiasSkeleton,
} from "./components/skeletons";

export default async function Home() {
  return (
    <main className="pt-16 md:pt-0 flex flex-col p-2 gap-2 md:p-8 min-h-screen mb-7">
      <Suspense fallback={<MuyDestacadaSkeleton />}>
        <MuyDestacada />
      </Suspense>
      
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <PrincipalesWrapper />
      </Suspense>
      
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <PoliticaWrapper />
      </Suspense>
      
      <ServiciosWrapper />
      
      <Suspense fallback={<VideosSkeleton />}>
        <VideosWrapperCarrusel />
      </Suspense>
      
      <BannerPublicitario />
      
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <SociedadWrapper />
      </Suspense>
      
      <Suspense fallback={<YoutubeShortsSkeleton />}>
        <YoutubeShortsWrapper />
      </Suspense>
      
      <Canal7LiveWrapper />  
      <RadioNihuilWrapper />
      <ChatBotWrapper />
      
      <Suspense fallback={<OvacionSkeleton />}>
        <OvacionWrapper />
      </Suspense>
      
      <BannerPublicitario />
      
      <Suspense fallback={<UltimasNoticiasSkeleton />}>
        <UltimasNoticiasWrapper />
      </Suspense>
      
      <Footer />
    </main>
  );
}
