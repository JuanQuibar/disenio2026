"use client";

export function BannerPublicitario() {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      {/* Leyenda PUBLICIDAD */}
      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">
        Publicidad
      </p>
      
      {/* Banner animado 300x250 */}
      <div className="w-[300px] h-[250px] rounded-md overflow-hidden relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="text-4xl font-bold mb-2 animate-pulse">
              🎯
            </div>
            <p className="text-2xl font-bold mb-1">
              Tu Anuncio Aquí
            </p>
            <p className="text-sm opacity-80">
              300 x 250
            </p>
          </div>
        </div>
        
        {/* Efecto de brillo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
      </div>
    </div>
  );
}
