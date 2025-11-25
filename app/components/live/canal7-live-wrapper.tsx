import { Canal7Live } from "./canal7-live";

export function Canal7LiveWrapper() {
  return (
    <>
      <div className="mb-4 border-t-2 separadores pb-2 pt-1">
        <h3 className="text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
          canal 7
        </h3>
        <div className=" p-2 bg-white rounded-lg shadow-md">
          <Canal7Live/>
        </div>
      </div>
    </>
  );
}
