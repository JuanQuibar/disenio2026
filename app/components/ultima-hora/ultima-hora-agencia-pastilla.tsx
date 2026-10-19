"use client";

import { useEffect, useState } from "react";

export function UltimaHoraAgenciaPastilla() {
  const [estado, setEstado] = useState<"urgente" | "tendencia" | null>(null);

  useEffect(() => {
    setEstado(Math.random() < 0.5 ? "urgente" : "tendencia");
  }, []);

  return (
    <span
      aria-hidden={estado === null ? true : undefined}
      className={`inline-flex min-w-16 shrink-0 justify-center rounded-full px-1.5 font-sans text-[9px] font-medium uppercase leading-4 tracking-wide ${
        estado === null
          ? "invisible"
          : estado === "urgente"
            ? "bg-red-400/10 text-red-400"
            : "bg-green-400/10 text-green-400"
      }`}
    >
      {estado ?? "tendencia"}
    </span>
  );
}
