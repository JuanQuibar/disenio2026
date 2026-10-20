"use client";

interface BannerPublicitarioProps {
  moduleId: "ad-listado" | "ad-ovacion";
}

export function BannerPublicitario({
  moduleId,
}: BannerPublicitarioProps) {
  if (moduleId === "ad-ovacion") {
    return (
      <div
        id={moduleId}
        data-home-module={moduleId}
        className="lg:py-2"
      >
        <aside
          aria-label="Espacio Publicitario"
          className="mb-4 flex flex-col items-center rounded-lg bg-white p-4 shadow-md lg:mb-0 lg:justify-center lg:overflow-hidden lg:bg-gradient-to-r lg:from-[#1c69a8] lg:via-[#0f3d61] lg:to-[#1c69a8] lg:text-center lg:text-white"
        >
          <div className="flex flex-col items-center lg:hidden">
            <p className="mb-2 text-[10px] uppercase tracking-wider text-gray-400">
              Publicidad
            </p>
            <MediumRectangle />
          </div>

          <div className="hidden w-full flex-col items-center justify-center lg:flex">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.1em] opacity-75">
              Espacio publicitario • IAB Leaderboard Premium
            </span>
            <div className="flex w-full max-w-4xl items-center justify-between gap-4 px-4 py-2">
              <div className="text-left">
                <h4 className="font-serif text-[22px]/7 font-bold">
                  VENDIMIA CONNECT 2026
                </h4>
                <p className="font-sans text-sm/5 text-slate-200">
                  Adquirí tus entradas oficiales y experiencias VIP para el Acto
                  Central en el Teatro Griego Frank Romero Day.
                </p>
              </div>
              <span className="shrink-0 whitespace-nowrap rounded-lg bg-white px-6 py-2 font-sans text-sm font-bold text-[#0f3d61] shadow-sm">
                Reservar Experiencia →
              </span>
            </div>
          </div>
        </aside>
      </div>
    );
  }

  return (
    <div
      id={moduleId}
      data-home-module={moduleId}
      className="mb-4 p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
    >
      {/* Leyenda PUBLICIDAD */}
      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">
        Publicidad
      </p>
      <MediumRectangle />
    </div>
  );
}

function MediumRectangle() {
  return (
    <div className="relative h-[250px] w-[300px] overflow-hidden rounded-md bg-gradient-to-br from-[#1c69a8] to-[#0f3d61] shadow-inner">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-6 text-center text-white">
          <div className="mb-2 text-4xl font-bold opacity-90">🎯</div>
          <p className="mb-1 font-sans text-2xl font-bold tracking-wide">
            Acá va un anuncio
          </p>
          <p className="font-sans text-sm opacity-70">300 x 250</p>
        </div>
      </div>

      <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}
