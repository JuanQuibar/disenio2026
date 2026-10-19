"use client";

export function EncuestaCard() {
  const pollData = {
    question: "Quaestio de opinione publica: Lorem ipsum dolor sit amet?",
    totalVotes: 1245,
    options: [
      { text: "Optio Prima: Consectetur adipiscing elit", votes: 45, color: "bg-[#1c69a8]" },
      { text: "Optio Secunda: Sed do eiusmod tempor", votes: 25, color: "bg-[#1c69a8]" },
      { text: "Optio Tertia: Ut labore et dolore magna", votes: 20, color: "bg-[#1c69a8]" },
      { text: "Optio Quarta: Ut enim ad minim veniam", votes: 10, color: "bg-[#1c69a8]" },
    ],
  };

  return (
    <div className="encuesta-card bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="participacion-desktop-header encuesta-desktop-header">
        <div className="participacion-desktop-header-main">
          <svg
            aria-hidden="true"
            className="participacion-desktop-header-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 19V9m5 10V5m5 14v-7m5 7V3" />
            <path d="M2.5 21h19" />
          </svg>
          <h2>LA ENCUESTA DE HOY</h2>
        </div>
        <span>SONDEO EXCLUSIVO</span>
      </div>

      <h3 className="encuesta-question font-sans text-xl font-bold text-gray-900 mb-2 leading-tight">
        {pollData.question}
      </h3>
      <p className="encuesta-total encuesta-total-mobile text-xs text-gray-500 mb-6 uppercase tracking-wider font-sans">
        Total de votos: {pollData.totalVotes}
      </p>

      <div className="encuesta-options space-y-4">
        {pollData.options.map((option, index) => (
          <div
            key={index}
            className="encuesta-option relative group cursor-pointer"
          >
            {/* Label y Porcentaje */}
            <div className="flex justify-between items-end mb-1">
              <span className="text-sm font-medium font-sans text-gray-700 group-hover:text-[#1c69a8] transition-colors">
                {option.text}
              </span>
              <span className="text-sm font-sans font-bold text-gray-900">
                {option.votes}%
              </span>
            </div>

            {/* Barra de progreso background */}
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              {/* Barra de progreso fill */}
              <div
                className={`h-2.5 rounded-full ${option.color} opacity-80 group-hover:opacity-100 transition-all duration-500`}
                style={{ width: `${option.votes}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="encuesta-footer mt-6 flex justify-end">
        <p className="encuesta-total encuesta-total-desktop">
          Total de votos: {pollData.totalVotes}
        </p>
        <button className="encuesta-history-button text-xs font-bold text-[#1c69a8] font-sans uppercase tracking-wider hover:underline">
          Ver resultados anteriores
        </button>
      </div>
    </div>
  );
}
