"use client";

export function CardSummary() {
  const sumaryText = `Todavía no tengo pensado qué poner aquí, pero tal vez será un resumen de la noticia.
  `;
  const showSummary = () => {
    alert(sumaryText);
  };

  return (
    <button onClick={showSummary} className="">
      <p className="font-sans text-xs ">mas...</p>
    </button>
  );
}
