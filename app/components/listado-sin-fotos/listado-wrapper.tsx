import { SinFotosCard } from "./sin-fotos-card";

export function ListadoWrapper() {
  return (
    <>
      <div
        id="listado"
        data-home-module="listado"
        className="news-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <h3 className="news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          legionarius
        </h3>
        <div className=" p-2 pb-4 bg-white rounded-lg shadow-md">
          <SinFotosCard />
        </div>
      </div>
    </>
  );
}
