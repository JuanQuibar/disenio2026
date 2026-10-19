import type { ReactNode } from "react";

interface VideoContenedorProps {
  titulo: string;
  moduleId: string;
  children: ReactNode;
  /** Cabecera opcional dentro del bloque blanco (logo de marca, sponsor, etc.). */
  header?: ReactNode;
}

/**
 * Contenedor visual comun de los bloques de video de la home.
 * Centraliza el separador, el cabezal y la tarjeta blanca para que cada
 * carrusel solo se ocupe de su propia experiencia de reproduccion.
 */
export function VideoContenedor({
  titulo,
  moduleId,
  children,
  header,
}: VideoContenedorProps) {
  return (
    <section
      id={moduleId}
      data-home-module={moduleId}
      className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
    >
      <h3 className="news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        {titulo}
      </h3>

      <div className="video-section-panel p-2 bg-white rounded-lg shadow-md lg:p-5">
        {header}
        {children}
      </div>
    </section>
  );
}
