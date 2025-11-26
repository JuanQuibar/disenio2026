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
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="font-sans text-xl font-bold text-gray-900 mb-2 leading-tight">
        {pollData.question}
      </h3>
      <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-sans">
        Total de votos: {pollData.totalVotes}
      </p>

      <div className="space-y-4">
        {pollData.options.map((option, index) => (
          <div key={index} className="relative group cursor-pointer">
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

      <div className="mt-6 flex justify-end">
        <button className="text-xs font-bold text-[#1c69a8] font-sans uppercase tracking-wider hover:underline">
          Ver resultados anteriores
        </button>
      </div>
    </div>
  );
}
