"use client";

import { useState } from "react";

const initialBoard = [
  [5, 3, "", "", 7, "", "", "", ""],
  [6, "", "", 1, 9, 5, "", "", ""],
  ["", 9, 8, "", "", "", "", 6, ""],
  [8, "", "", "", 6, "", "", "", 3],
  [4, "", "", 8, "", 3, "", "", 1],
  [7, "", "", "", 2, "", "", "", 6],
  ["", 6, "", "", "", "", 2, 8, ""],
  ["", "", "", 4, 1, 9, "", "", 5],
  ["", "", "", "", 8, "", "", 7, 9],
];

export function SudokuCard() {
  const [board, setBoard] = useState(initialBoard);

  function handleChange(row: number, col: number, value: string) {
    if (/^[1-9]?$/.test(value)) {
      const newBoard = board.map((arr) => [...arr]);
      // @ts-ignore - Simple casting for the demo
      newBoard[row][col] = value;
      setBoard(newBoard);
    }
  }

  return (
    <div className="mx-auto font-sans w-full max-w-md bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-900">
        Sudoku del Día
      </h2>
      
      <div className="grid grid-cols-9 border-2 border-gray-800 bg-gray-800 gap-px">
        {board.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              className={`
                w-8 h-8 sm:w-10 sm:h-10 text-center text-lg font-sans font-semibold
                ${
                  (Math.floor(i / 3) + Math.floor(j / 3)) % 2 === 0
                    ? "bg-gray-50"
                    : "bg-white"
                }
                outline-none focus:ring-2 focus:ring-[#1c69a8] focus:z-10
                ${initialBoard[i][j] !== "" ? "text-gray-900" : "text-[#1c69a8]"}
                ${(j + 1) % 3 === 0 && j !== 8 ? "mr-0.5" : ""}
                ${(i + 1) % 3 === 0 && i !== 8 ? "mb-0.5" : ""}
              `}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={cell}
              onChange={(e) => handleChange(i, j, e.target.value)}
              disabled={initialBoard[i][j] !== ""}
            />
          ))
        )}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 font-sans">
          Completa los espacios vacíos con números del 1 al 9.
        </p>
      </div>
    </div>
  );
}
