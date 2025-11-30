import { Suspense } from "react";
import { MuyDestacada } from "./components/muy-destacada/muy-destacada";
import { AperturaWrapper } from "./components/apertura/apertura-wrapper";
import { PrincipalesWrapper } from "./components/principales/principales-wrapper";
import { PoliticaWrapper } from "./components/politica/politica-wrapper";
import { OpinionWrapper } from "./components/opinion/opinion-wrapper";
import { EncuestaWrapper } from "./components/encuesta/encuesta-wrapper";
import { SudokuWrapper } from "./components/sudoku/sudoku-wrapper";
import { SenatusWrapper } from "./components/senatur-romano/senatus-wrapper";
import { YoutubeShortsWrapper } from "./components/youtube-shorts/youtube-shorts-wrapper";
import { VideosWrapperCarrusel } from "./components/carrusel-videos/videos-wrapper-carrusel";
import { ServiciosWrapper } from "./components/servicios/servicios-wrapper";
import { Canal7LiveWrapper } from "./components/live/canal7-live-wrapper";
import { RadioNihuilWrapper } from "./components/live/radio-nihuil-wrapper";
import { ListadoWrapper } from "./components/listado-sin-fotos/listado-wrapper";
import { ChatBotWrapper } from "./components/chat-bot/chat-bot-wrapper";
import { Footer } from "./components/footer/footer";
import { SociedadWrapper } from "./components/sociedad/sociedad-wrapper";
import { GenteWrapper } from "./components/gente/gente-wrapper";
import { CrimenWrapper } from "./components/crimen/crimen-wrapper";
import { BrandedWrapper } from "./components/branded/branded-wrapper";
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
  AperturaSkeleton,
  ListadoSinFotosSkeleton,
} from "./components/skeletons";
import { JwpNoticiasWrapper } from "./components/jwp-noticias/jwp-noticcias-wrapper";

export default async function Home() {
  return (
    <main className="pt-16 md:pt-0 flex flex-col p-2 gap-2 md:p-8 min-h-screen mb-7">
      <Suspense fallback={<MuyDestacadaSkeleton />}>
        <MuyDestacada />
      </Suspense>
      <JwpNoticiasWrapper />
      <Suspense fallback={<AperturaSkeleton />}>
        <AperturaWrapper />
      </Suspense>
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <PrincipalesWrapper />
      </Suspense>
      <Suspense fallback={<VideosSkeleton />}>
        <VideosWrapperCarrusel />
      </Suspense>
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <PoliticaWrapper />
      </Suspense>
      <ServiciosWrapper />
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <OpinionWrapper />
      </Suspense>
      <EncuestaWrapper />
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <SenatusWrapper />
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
      <Suspense fallback={<ListadoSinFotosSkeleton />}>
        <ListadoWrapper />
      </Suspense>
      <ChatBotWrapper />
      <Suspense fallback={<OvacionSkeleton />}>
        <OvacionWrapper />
      </Suspense>
      <BannerPublicitario />
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <GenteWrapper />
      </Suspense>
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <CrimenWrapper />
      </Suspense>
      <Suspense fallback={<SeccionListadoSkeleton />}>
        <BrandedWrapper />
      </Suspense>
      <SudokuWrapper />
      <Suspense fallback={<UltimasNoticiasSkeleton />}>
        <UltimasNoticiasWrapper />
      </Suspense>
      <Footer />
    </main>
  );
}
