import {
  ArrowDownIcon,
  ChileFlagIcon,
  TrafficLightRedIcon,
  WarningIcon,
  RainIcon,
} from "../icons";

export function ServiciosCard() {
  return (
    <section className="rounded-md  bg-white flex flex-col gap-4 font-sans pt-2 pb-1">
      <div className="grid grid-cols-2 gap-4">
        {/* clima*/}
        <div className="bg-white px-2 rounded-lg shadow-md ">
          <div className="flex justify-center items-center gap-1">
            <img
              src="/clima.png"
              width={200}
              height={182}
              alt="Partly cloudy and windy"
              className="w-14 h-12 object-cover  "
            />

            <p className="text-lg font-bold">15°</p>
          </div>
          <div className="flex flex-col justify-center items-center -mt-2 ">
            <p className="text-xs text-gray-500 font-medium">
              Min 10° / Max 20°
            </p>
            <div className="flex items-start justify-start text-sm text-gray-600 font-medium ">
              <RainIcon />
              <span className="ml-1">9%</span>
            </div>
          </div>
        </div>
        {/* Chile Crossing */}
        <div className="bg-white p-1 rounded-lg shadow-md ">
          {/* <div className="flex items-center justify-center space-x-2">
            <img
              src="/tunel.png"
              width={100}
              height={88}
              alt="Road tunnel"
              className="w-8 h-8 object-cover"
            />
            <ChileFlagIcon className="w-8 h-auto object-cover" />
          </div> */}
          <div className="grid grid-cols-2 gap-2 pl-6">
            <div className="flex items-center">
              <h3 className=" text-xs text-gray-800">Paso Cristo Redentor</h3>
            </div>

            <TrafficLightRedIcon className="w-14 h-auto object-cover ml-[-10] " />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        {/* Dollar */}
        <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center space-y-1 ">
          <div className="flex items-center jjustify-center space-x-1 font-semibold">
            <h3 className="text-xl font-bold text-center text-emerald-800">
              U$S
            </h3>
            <ArrowDownIcon className="text-green-600 w-6 h-6" />
            <span className="text-black text-xs">-1.0%</span>
          </div>

          <div>
            <p className="text-[10px] text-gray-600">
              Venta: <span className="font-semibold text-black">$1.430</span>
            </p>
            <p className="text-[10px] text-gray-600">
              Compra: <span className="font-semibold text-black">$1.400</span>
            </p>
          </div>
        </div>
        {/* Country Risk */}
        <div className="bg-white p-3 rounded-lg shadow-md flex flex-col ">
          <h3 className=" text-gray-800 text-lg">Riesgo País</h3>
          <div className="flex">
            <p className="text-lgfont-bold text-[900] ">600</p>
            <div className="flex items-center  font-semibold">
              <ArrowDownIcon className="text-green-600 w-6 h-6" />
              <span className="text-black text-xs">-5%</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 pt-[-10] ">pts. básicos</p>
        </div>
      </div>

      {/* Chile Crossing */}

      {/* Keys of the Day */}
      <div className="bg-white p-4 rounded-lg shadow-md grow">
        <div className="flex items-center space-x-2 mb-3">
          <WarningIcon />
          <h3 className="font-bold text-gray-800">Claves del día</h3>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </li>
          <li>Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</li>
          <li>
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </li>
        </ol>
      </div>
    </section>
  );
}
