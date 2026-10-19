import { Suspense } from "react";
import type { ReactNode } from "react";
import { MuyDestacadaWrapper } from "@/app/components/muy-destacada/muy-destacada-wrapper";
import { UltimaHoraComparacionWrapper } from "@/app/components/ultima-hora/ultima-hora-comparacion-wrapper";
import { AperturaWrapper } from "@/app/components/apertura/apertura-wrapper";
import { PrincipalesWrapper } from "@/app/components/principales/principales-wrapper";
import { PoliticaWrapper } from "@/app/components/politica/politica-wrapper";
import { OpinionWrapper } from "@/app/components/opinion/opinion-wrapper";
import { SudokuWrapper } from "@/app/components/sudoku/sudoku-wrapper";
import { ParticipacionWrapper } from "@/app/components/home/participacion-wrapper";
import { HomePair } from "@/app/components/home/home-pair";
import { YoutubeShortsWrapper } from "@/app/components/youtube-shorts/youtube-shorts-wrapper";
import { ServiciosWrapper } from "@/app/components/servicios/servicios-wrapper";
import { TransmisionesWrapper } from "@/app/components/home/transmisiones-wrapper";
import { LegionariusChatWrapper } from "@/app/components/home/legionarius-chat-wrapper";
import { SociedadWrapper } from "@/app/components/sociedad/sociedad-wrapper";
import { GenteWrapper } from "@/app/components/gente/gente-wrapper";
import { CrimenWrapper } from "@/app/components/crimen/crimen-wrapper";
import { BrandedWrapper } from "@/app/components/branded/branded-wrapper";
import { OvacionWrapper } from "@/app/components/ovacion/ovacion-wrapper";
import { UltimasNoticiasWrapper } from "@/app/components/ultimas-noticias/ultimas-noticias-wrapper";
import { CarruselMamWrapper } from "@/app/components/carrusel-mam/carrusel-mam-wrapper";
import { BannerPublicitario } from "@/app/components/banner-publicitario";
import {
  MuyDestacadaSkeleton,
  SeccionListadoSkeleton,
  MamSkeleton,
  YoutubeShortsSkeleton,
  OvacionSkeleton,
  UltimasNoticiasSkeleton,
  AperturaSkeleton,
  BrandedSkeleton,
} from "@/app/components/skeletons";

function HomeModuleFallback({
  module,
  children,
}: {
  module: string;
  children: ReactNode;
}) {
  return (
    <div className="home-module-fallback" data-home-module={module}>
      {children}
    </div>
  );
}

export default async function Home() {
  return (
    <main
      className="home-page grid grid-cols-1 content-start items-start gap-2 lg:gap-6"
      id="portada"
    >
      <Suspense
        fallback={
          <HomeModuleFallback module="destacada">
            <MuyDestacadaSkeleton />
          </HomeModuleFallback>
        }
      >
        <MuyDestacadaWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="apertura">
            <AperturaSkeleton />
          </HomeModuleFallback>
        }
      >
        <AperturaWrapper />
      </Suspense>
      <UltimaHoraComparacionWrapper />
      <Suspense
        fallback={
          <HomeModuleFallback module="principales">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <PrincipalesWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="mam">
            <MamSkeleton />
          </HomeModuleFallback>
        }
      >
        <CarruselMamWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="politica">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <PoliticaWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="shorts">
            <YoutubeShortsSkeleton />
          </HomeModuleFallback>
        }
      >
        <YoutubeShortsWrapper />
      </Suspense>
      <ServiciosWrapper />
      <Suspense
        fallback={
          <HomeModuleFallback module="opinion">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <OpinionWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="branded">
            <BrandedSkeleton />
          </HomeModuleFallback>
        }
      >
        <BrandedWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomePair
            name="participacion"
            first={
              <HomeModuleFallback module="encuesta">
                <SeccionListadoSkeleton />
              </HomeModuleFallback>
            }
            second={
              <HomeModuleFallback module="senatus">
                <SeccionListadoSkeleton />
              </HomeModuleFallback>
            }
          />
        }
      >
        <ParticipacionWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="sociedad">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <SociedadWrapper />
      </Suspense>
      <TransmisionesWrapper />
      <LegionariusChatWrapper />
      <Suspense
        fallback={
          <HomeModuleFallback module="ovacion">
            <OvacionSkeleton />
          </HomeModuleFallback>
        }
      >
        <OvacionWrapper />
      </Suspense>
      <BannerPublicitario moduleId="ad-ovacion" />
      <Suspense
        fallback={
          <HomeModuleFallback module="gente">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <GenteWrapper />
      </Suspense>
      <Suspense
        fallback={
          <HomeModuleFallback module="crimen">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <CrimenWrapper />
      </Suspense>
      <SudokuWrapper />
      <Suspense
        fallback={
          <HomeModuleFallback module="ultimas">
            <UltimasNoticiasSkeleton />
          </HomeModuleFallback>
        }
      >
        <UltimasNoticiasWrapper />
      </Suspense>
    </main>
  );
}
