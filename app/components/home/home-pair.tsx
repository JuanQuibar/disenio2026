import type { ReactElement } from "react";

export function HomePair({
  name,
  first,
  second,
  third,
}: {
  name: "participacion" | "transmisiones" | "grafico-chat";
  first: ReactElement | null;
  second: ReactElement | null;
  third?: ReactElement | null;
}) {
  if (!first || !second) {
    return third ?? null;
  }

  return (
    <div
      data-home-pair={name}
      className="home-pair grid min-w-0 grid-cols-1 items-start gap-2 lg:grid-cols-2 lg:gap-6"
    >
      {first}
      {second}
      {third}
    </div>
  );
}
