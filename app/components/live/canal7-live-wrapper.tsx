import { Canal7Live } from "./canal7-live";

export function Canal7LiveWrapper() {
  return (
    <>
      <div
        id="canal-7"
        data-home-module="canal-7"
        className="live-module news-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <h3 className="live-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          <span aria-hidden="true" className="live-heading-dot w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
          canal 7<span className="hidden lg:inline"> en vivo</span>
        </h3>
        <div className="live-panel p-2 bg-white rounded-lg shadow-md">
          <Canal7Live/>
        </div>
      </div>
    </>
  );
}
