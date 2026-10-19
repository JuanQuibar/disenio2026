"use client";

import { useEffect, useState } from "react";

export function UltimaHoraReloj({ compacto = false }: { compacto?: boolean }) {
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    const formato = new Intl.DateTimeFormat("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    });
    const actualizarHora = () => setHora(formato.format(new Date()));

    actualizarHora();
    const intervalo = window.setInterval(actualizarHora, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  return (
    <time
      dateTime={hora ?? undefined}
      className={compacto
        ? "ml-auto inline-flex items-baseline gap-0.5 font-mono text-sm font-normal tracking-normal text-inherit tabular-nums"
        : "font-mono text-base font-extralight tabular-nums"}
    >
      {compacto ? (
        <>
          <span>{hora?.slice(0, 5) ?? "--:--"}</span>
          <span className="text-xs">
            {hora?.slice(5) ?? ":--"}
          </span>
        </>
      ) : hora ?? "--:--:--"}
    </time>
  );
}
