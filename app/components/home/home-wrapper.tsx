import { Suspense } from "react";
import "./home-alternative.css";
import type { HomeVariant } from "./home-types";
import type { ReactNode } from "react";
import { MuyDestacadaWrapper } from "@/app/components/muy-destacada/muy-destacada-wrapper";
import { UltimaHoraWrapper } from "@/app/components/ultima-hora/ultima-hora-wrapper";
import { AperturaWrapper } from "@/app/components/apertura/apertura-wrapper";
import { PrincipalesWrapper } from "@/app/components/principales/principales-wrapper";
import { PoliticaWrapper } from "@/app/components/politica/politica-wrapper";
import { OpinionWrapper } from "@/app/components/opinion/opinion-wrapper";
import { ParticipacionWrapper } from "@/app/components/home/participacion-wrapper";
import { HomePair } from "@/app/components/home/home-pair";
import { YoutubeShortsWrapper } from "@/app/components/youtube-shorts/youtube-shorts-wrapper";
import { TransmisionesWrapper } from "@/app/components/home/transmisiones-wrapper";
import { GraficoChatWrapper } from "@/app/components/home/grafico-chat-wrapper";
import { SociedadWrapper } from "@/app/components/sociedad/sociedad-wrapper";
import { GenteWrapper } from "@/app/components/gente/gente-wrapper";
import { CrimenWrapper } from "@/app/components/crimen/crimen-wrapper";
import { BrandedWrapper } from "@/app/components/branded/branded-wrapper";
import { OvacionWrapper } from "@/app/components/ovacion/ovacion-wrapper";
import { UltimasNoticiasWrapper } from "@/app/components/ultimas-noticias/ultimas-noticias-wrapper";
import { CarruselMamWrapper } from "@/app/components/carrusel-mam/carrusel-mam-wrapper";
import { BannerPublicitario } from "@/app/components/banner-publicitario";
import { EspacioJuegos } from "@/app/components/espacio-juegos";
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

export function HomeWrapper({ variante = "original" }: { variante?: HomeVariant }) {
  const alternativa = variante === "alternativa";
  const editorial = (
    <>
      <Suspense
        fallback={
          <HomeModuleFallback module="apertura">
            <AperturaSkeleton />
          </HomeModuleFallback>
        }
      >
        <AperturaWrapper />
      </Suspense>
      <UltimaHoraWrapper alternativa={alternativa} />
      <Suspense
        fallback={
          <HomeModuleFallback module="principales">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <PrincipalesWrapper variante={variante} />
      </Suspense>
    </>
  );
  return (
    <main
      className="home-page grid grid-cols-1 content-start items-start gap-2 lg:gap-6"
      data-home-variant={variante}
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
      {alternativa ? (
        <div className="home-alternative-editorial">{editorial}</div>
      ) : editorial}
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
          <HomeModuleFallback module="sociedad">
            <SeccionListadoSkeleton />
          </HomeModuleFallback>
        }
      >
        <SociedadWrapper />
      </Suspense>
      <TransmisionesWrapper />
      <GraficoChatWrapper />
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
      <EspacioJuegos />
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
