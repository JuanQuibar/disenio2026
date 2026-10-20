"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { UltimaHoraAgenciaPastilla } from "./ultima-hora-agencia-pastilla";
import type { NoticiaUltimaHora } from "./ultima-hora-noticias";

export function UltimaHoraResumenes({
  noticias,
  variante,
  apariencia = variante,
  mostrarPastillas = apariencia === "agencia",
}: {
  noticias: NoticiaUltimaHora[];
  variante: "timeline" | "agencia";
  apariencia?: "timeline" | "agencia";
  mostrarPastillas?: boolean;
}) {
  const id = useId();
  const areaRef = useRef<HTMLDivElement>(null);
  const contenidoRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [abierta, setAbierta] = useState<number | null>(null);
  const [alto, setAlto] = useState<number>();
  const [posicion, setPosicion] = useState({ panel: 0, desplazamiento: 0 });
  const timeline = variante === "timeline";
  const timelineVisual = apariencia === "timeline";

  useLayoutEffect(() => {
    const contenido = contenidoRef.current;
    if (!contenido) return;

    const filas = contenido.querySelectorAll<HTMLElement>("[data-summary-row]");
    const medir = () =>
      setAlto(Array.from(filas).reduce((total, fila) => total + fila.getBoundingClientRect().height, 0));
    medir();
    const observer = new ResizeObserver(medir);
    filas.forEach((fila) => observer.observe(fila));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const area = areaRef.current;
    const contenido = contenidoRef.current;
    const panel = panelRef.current;
    if (!area || !contenido) return;

    const filas = Array.from(contenido.querySelectorAll<HTMLElement>("[data-summary-row]"));
    const colocar = () => {
      const seleccionada = abierta === null ? undefined : filas[abierta];
      let panelTop = 0;
      let desplazamiento = 0;
      if (seleccionada && panel && alto !== undefined) {
        const inicio = seleccionada.offsetTop;
        const fin = inicio + seleccionada.offsetHeight;
        const panelAlto = panel.getBoundingClientRect().height;
        if (timeline) {
          panelTop = fin + panelAlto <= alto
            ? fin
            : Math.max(0, inicio - panelAlto);
        } else {
          desplazamiento = Math.max(0, fin + panelAlto - alto);
        }
        filas.forEach((fila, index) => {
          const top = fila.offsetTop - desplazamiento;
          const bottom = top + fila.offsetHeight;
          const tapada = timeline && top < panelTop + panelAlto && bottom > panelTop;
          fila.inert = index !== abierta && (top < 0 || bottom > alto || tapada);
        });
      } else {
        filas.forEach((fila) => { fila.inert = false; });
      }
      setPosicion({ panel: panelTop, desplazamiento });
    };
    colocar();
    const observer = new ResizeObserver(colocar);
    if (panel) observer.observe(panel);
    return () => observer.disconnect();
  }, [abierta, alto, timeline]);

  function cerrar() {
    const boton = contenidoRef.current?.querySelector<HTMLButtonElement>(
      `[data-summary-trigger="${abierta}"]`,
    );
    setAbierta(null);
    boton?.focus({ preventScroll: true });
  }

  function resumen(index: number) {
    return (
      <div
        ref={panelRef}
        id={`${id}-resumen-${index}`}
        role="region"
        aria-labelledby={`${id}-titulo-${index}`}
        className={`rounded-md border border-gray-300 bg-white p-3 text-black ${
          timeline
            ? "absolute inset-x-0 z-10 shadow-lg"
            : "mb-3"
        }`}
        style={timeline ? { top: posicion.panel } : undefined}
      >
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="font-sans text-[10px] uppercase tracking-wide text-gray-600">
            Resumen
          </span>
          <button
            type="button"
            onClick={cerrar}
            className="min-h-11 px-2 font-sans text-xs text-black underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-black"
          >
            Cerrar resumen
          </button>
        </div>
        <h4 className="mb-3 font-sans text-sm font-semibold leading-snug">
          {noticias[index].titulo}
        </h4>
        <div className="space-y-3">
          {noticias[index].contribuciones.map(({ fuente, parrafo }) => (
            <div key={fuente} data-summary-contribution>
              <p className="font-sans text-xs leading-relaxed">{parrafo}</p>
              <span className="mt-1 block font-sans text-[10px] leading-4 text-gray-500">
                {fuente}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={areaRef}
      data-summary-variant={variante}
      data-summary-appearance={apariencia}
      className="relative overflow-hidden [overflow-anchor:none]"
      style={{ height: alto }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && abierta !== null) {
          event.preventDefault();
          cerrar();
        }
      }}
    >
      <div
        ref={contenidoRef}
        className="relative"
        style={{ transform: `translateY(-${posicion.desplazamiento}px)` }}
      >
        {noticias.map((noticia, index) => (
          <article key={noticia.id}>
            <div
              data-summary-row
              className={timelineVisual
                ? `relative flex gap-3 ${index === 0 ? "pt-3" : ""}`
                : `py-3 ${index > 0 ? "border-t border-gray-700" : ""}`}
            >
              {timelineVisual && (
                <>
                  <time
                    dateTime={noticia.hora}
                    className={`w-10 shrink-0 pt-0.5 font-mono text-[11px] leading-4 tabular-nums ${
                      index === 0 ? "text-red-400" : "text-gray-400"
                    }`}
                  >
                    {noticia.hora}
                  </time>
                  <div aria-hidden="true" className="relative flex w-2 shrink-0 justify-center">
                    {index !== noticias.length - 1 && (
                      <span className="absolute top-2 bottom-0 w-px bg-gray-700" />
                    )}
                    <span className={`relative mt-1 h-2 w-2 rounded-full ${
                      index === 0 ? "bg-red-500 ring-4 ring-red-500/15" : "bg-gray-500"
                    }`} />
                  </div>
                </>
              )}
              <div className={timelineVisual
                ? `min-w-0 flex-1 ${index === noticias.length - 1 ? "pb-2" : "pb-5"}`
                : "min-w-0"}
              >
                {timelineVisual && index === 0 && (
                  <span className="mb-1.5 block font-sans text-[10px] font-bold uppercase leading-4 tracking-widest text-red-400">
                    Lo último
                  </span>
                )}
                <div className="mb-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
                  <span className="font-sans text-[10px] font-semibold uppercase leading-4 tracking-wide text-gray-400">
                    {noticia.volanta}
                  </span>
                  {mostrarPastillas && <UltimaHoraAgenciaPastilla />}
                </div>
                <h3 className={`font-sans text-white ${
                  timelineVisual && index === 0 ? "text-base font-semibold leading-snug" : "text-sm leading-snug"
                }`}>
                  <button
                    id={`${id}-titulo-${index}`}
                    data-summary-trigger={index}
                    type="button"
                    aria-expanded={abierta === index}
                    aria-controls={abierta === index ? `${id}-resumen-${index}` : undefined}
                    onClick={() => setAbierta(abierta === index ? null : index)}
                    className={`block min-h-11 w-full text-left focus-visible:outline-2 focus-visible:outline-white focus-visible:-outline-offset-2 ${
                      abierta === index ? "text-gray-300" : "text-white"
                    }`}
                  >
                    {noticia.titulo}
                  </button>
                </h3>
                <p data-news-sources className="mt-1 font-sans text-[10px] leading-4 text-gray-400">
                  Fuentes: {noticia.contribuciones.map(({ fuente }) => fuente).join(" · ")}
                </p>
              </div>
            </div>
            {!timeline && abierta === index && resumen(index)}
          </article>
        ))}
      </div>
      {timeline && abierta !== null && resumen(abierta)}
    </div>
  );
}
