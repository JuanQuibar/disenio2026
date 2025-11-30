// Skeleton loaders optimized for mobile view

export function MuyDestacadaSkeleton() {
  return (
    <div className="rounded-md bg-white h-auto border border-gray-300 shadow-md mb-4 pb-2 mt-2 animate-pulse">
      {/* LIVE badge */}
      <div className="flex items-center gap-1 pt-2 px-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-3 bg-gray-300 rounded"></div>
      </div>

      <div className="px-2 pt-1">
        {/* Título */}
        <div className="space-y-2 mb-2">
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-4/5"></div>
        </div>

        {/* Texto */}
        <div className="space-y-1 mb-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </div>

        {/* Firma */}
        <div className="flex items-center gap-1 pb-4">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-2 bg-gray-300 rounded w-32"></div>
        </div>

        {/* Video cuadrado - con aspect ratio fijo para evitar layout shift */}
        <div className="w-full aspect-[1/1] bg-gray-300 rounded-t-md mb-4"></div>

        {/* Artículo 1 */}
        <div className="border-t border-gray-200 p-2">
          <div className="h-2 bg-gray-200 rounded w-24 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mt-1"></div>
        </div>

        {/* Artículo 2 */}
        <div className="border-t border-gray-200 p-2 mt-2">
          <div className="h-2 bg-gray-200 rounded w-24 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5 mt-1"></div>
          {/* Firma autor */}
          <div className="flex items-center gap-1 mt-1">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="h-2 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SeccionListadoSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>

      {/* Contenedor con shadow */}
      <div className="p-2 bg-white rounded-lg shadow-md">
        {/* Item principal (si aplica) */}
        <div className="mb-3">
          <div className="w-full aspect-[3/2] bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Listado de 4 items */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`flex gap-3 py-3 ${
              i !== 3 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="relative w-24 h-24 bg-gray-300 rounded-md flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VideosSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-40 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 bg-white rounded-lg shadow-md">
        {/* Video card */}
        <div className="w-full max-w-sm mx-auto">
          <div className="w-full aspect-9/16 bg-gray-300 rounded-md"></div>
          <div className="mt-2 h-3 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export function YoutubeShortsSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-24 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 bg-white rounded-lg shadow-md">
        {/* Shorts card */}
        <div className="flex gap-4 overflow-hidden">
          <div className="w-40 aspect-9/16 bg-gray-300 rounded-md flex-shrink-0"></div>
          <div className="w-40 aspect-9/16 bg-gray-300 rounded-md flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}

export function OvacionSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-2 animate-pulse">
      {/* Cabezal con logo y icono */}
      <div className="flex items-center justify-between pb-2 pr-2 relative">
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
      </div>

      {/* Contenedor */}
      <div className="p-2 mt-2 bg-white rounded-lg shadow-md">
        {/* Fixture DataFactory */}
        <div className="mb-4">
          <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="w-full h-[150px] bg-gray-200 rounded-md"></div>
        </div>

        {/* Noticia principal */}
        <div className="mb-2">
          <div className="w-full aspect-[4/3] bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        </div>

        {/* Separador */}
        <div className="my-2 border-t border-gray-200"></div>

        {/* Listado */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`flex gap-3 py-3 ${
              i !== 3 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="w-24 aspect-[4/3] bg-gray-300 rounded-md flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UltimasNoticiasSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-40 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 bg-white rounded-lg shadow-md">
        {/* 10 noticias */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`flex gap-3 py-3 ${
              i !== 9 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
            <div className="flex-1 aspect-[4/3] bg-gray-300 rounded-md flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AperturaSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 pb-4 bg-white rounded-lg shadow-md">
        <div className="rounded-md bg-white aspect-square border border-gray-300 shadow-md pb-6">
          {/* Imagen */}
          <div className="w-full aspect-4/3 bg-gray-300 rounded-t-md"></div>

          {/* Contenido */}
          <div className="px-2 pt-2">
            {/* Firma */}
            <div className="flex items-center gap-1 mb-2">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-24"></div>
            </div>

            {/* Título */}
            <div className="space-y-2 mb-2">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            </div>

            {/* Bajada */}
            <div className="space-y-1 pt-2">
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListadoSinFotosSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 pb-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col">
          {/* 6 noticias sin fotos */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`py-3 ${i !== 5 ? "border-b border-gray-200" : ""}`}
            >
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function JwpNoticiasSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 bg-white rounded-lg shadow-md">
        {/* Video card carousel */}
        <div className="flex gap-4 overflow-hidden">
          <div className="w-48 aspect-[9/16] bg-gray-300 rounded-lg flex-shrink-0"></div>
          <div className="w-48 aspect-[9/16] bg-gray-300 rounded-lg flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}

export function BrandedSkeleton() {
  return (
    <div className="mb-4 border-t-2 border-white pb-2 pt-1 animate-pulse">
      {/* Cabezal */}
      <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>

      {/* Contenedor */}
      <div className="p-2 bg-white rounded-lg shadow-md">
        {/* Custom header */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
          <div className="w-24 h-6 bg-gray-300 rounded"></div>
          <div className="w-16 h-8 bg-gray-200 rounded"></div>
        </div>

        {/* Video carousel */}
        <div className="flex gap-4 overflow-hidden">
          <div className="w-48 aspect-[9/16] bg-gray-300 rounded-lg flex-shrink-0"></div>
          <div className="w-48 aspect-[9/16] bg-gray-300 rounded-lg flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
