import { ServiciosCard } from "./servicios-card";

export function ServiciosWrapper() {
  return (
    <>
      <div className="mb-4 border-t-2 separadores pb-2 pt-1">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          serviciums
        </h3>
        <div className=" p-2 bg-white rounded-lg shadow-md">
          <ServiciosCard />
        </div>
      </div>
    </>
  );
}
