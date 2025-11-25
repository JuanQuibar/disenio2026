import Image from "next/image";
import Nav from "./nav";
import { LogoIcon } from "./icons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black md:bg-slate-100 md:static">
      <div className="flex items-center justify-between px-2 py-2 md:justify-start md:space-x-4 md:border-none">
        {/* Menú hamburguesa en dispositivos móviles */}
        <button className="block md:hidden text-white" title="Menú">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            // stroke="#1c69a8"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start ">
          <LogoIcon className="block md:hidden w-30 h-auto" />
          {/* <Image
            src="/LOGO-UNO_BLANCO.svg"
            alt="Logo Diario UNO"
            width={150}
            height={50}
            className="block md:hidden w-20 h-auto"
          /> */}
          <Image
            src="/LOGO-UNO_AZUL.svg"
            alt="Logo Diario UNO"
            width={150}
            height={50}
            priority
            className="hidden md:block w-20 h-auto"
          />
        </div>

        {/* Nav en dispositivos mayores a 768px */}
        <div className="hidden md:block">
          <Nav />
        </div>
      </div>
      
      {/* Borde separador con margen */}
      <div className="border-b-2 separadores mx-2 md:hidden"></div>
    </header>
  );
}
