import { SudokuWrapper } from "@/app/components/sudoku/sudoku-wrapper";

export function EspacioJuegos() {
  return (
    <section
      aria-label="Espacio reservado para juegos"
      data-home-module="espacio-juegos"
      className="w-full lg:flex lg:h-[400px] lg:items-center lg:justify-center lg:bg-white lg:px-6"
    >
      <div className="lg:hidden">
        <SudokuWrapper />
      </div>
      <p className="hidden text-center font-sans text-2xl text-gray-500 lg:block">
        Espacio reservado para juegos. Proyecto en fase de evaluación
      </p>
    </section>
  );
}
