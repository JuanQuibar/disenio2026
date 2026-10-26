import { SudokuCard } from "./sudoku-card";

export function SudokuWrapper() {
  return (
    <div
      id="sudoku"
      data-home-module="sudoku"
      className="mb-4 border-t-2 separadores pb-2 pt-1"
    >
      <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        {" "}
        juegos
      </h3>
      <p className="pb-2 font-sans text-xs text-gray-300">
        Una muestra del futuro espacio de juegos
      </p>
      <div className="pb-4">
        <SudokuCard />
      </div>
    </div>
  );
}
