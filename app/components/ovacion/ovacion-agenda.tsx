"use client";

import { DATAFACTORY_WIDGETS } from "@/config/datafactory";

export function OvacionAgenda() {
  return (
    <div className="news-ovacion-agenda mb-4">
      <div className="w-full bg-gray-50 rounded-md border p-2 border-gray-300 overflow-hidden">
        <h3 className="text-sm font-bold text-gray-700 uppercase mb-2 border-l-4 border-red-600 pl-2">
          Fixture - Primera A
        </h3>
        <style jsx>{`
          iframe.hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          iframe.hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <iframe
          src={DATAFACTORY_WIDGETS.AGENDA_GENERAL}
          className="w-full h-[90px] border-0 hide-scrollbar"
          title="Agenda deportiva"
          loading="lazy"
          scrolling="no"
        />
      </div>
    </div>
  );
}
