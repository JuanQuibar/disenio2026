"use client";

import { useEffect, useState } from "react";

export function UltimaHoraReloj() {
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
      className="font-mono text-base font-extralight tabular-nums"
    >
      {hora ?? "--:--:--"}
    </time>
  );
}
