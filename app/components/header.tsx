import Link from "next/link";
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import Nav from "./nav";
import { LogoIcon } from "./icons";

function LiveLink({ className }: { className: string }) {
  return (
    <Link href="/#canal-7" className={className}>
      <span className="site-live-indicator" aria-hidden="true" />
      Canal 7 &amp; Radio Nihuil <span className="site-live-label">EN VIVO</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__utility">
        <div className="site-header__inner site-header__utility-inner">
          <div className="site-header__utility-data">
            <span className="site-header__utility-weather">
              <SunIcon aria-hidden="true" />
              Mendoza 24°C
            </span>
            <span className="site-header__utility-separator" aria-hidden="true">
              |
            </span>
            <span className="site-header__utility-item">
              <span className="site-header__utility-label">Dólar Blue:</span>
              <strong className="site-header__utility-mono">$1.215</strong>
              <strong className="site-header__utility-positive">▲ 0.4%</strong>
            </span>
            <span className="site-header__utility-separator" aria-hidden="true">
              |
            </span>
            <span className="site-header__utility-item">
              <span className="site-header__utility-label">Dólar Oficial:</span>
              <strong className="site-header__utility-mono">$1.042</strong>
            </span>
            <span className="site-header__utility-separator" aria-hidden="true">
              |
            </span>
            <span className="site-header__utility-item">
              <span className="site-header__utility-label">Merval:</span>
              <strong className="site-header__utility-positive site-header__utility-mono">
                +1.8%
              </strong>
            </span>
            <span className="site-header__utility-separator" aria-hidden="true">
              |
            </span>
            <span className="site-header__utility-item">
              <span className="site-header__utility-label">Riesgo País:</span>
              <strong className="site-header__utility-mono">680 pts</strong>
            </span>
          </div>

          <div className="site-header__utility-side">
            <span className="site-header__date">
              <CalendarDaysIcon aria-hidden="true" />
              Mendoza, Argentina — Lunes, 24 de Febrero de 2026
            </span>
            <LiveLink className="site-header__live" />
          </div>
        </div>
      </div>

      <div className="site-header__main">
        <div className="site-header__inner site-header__main-inner">
          <div className="site-header__brand">
            <span className="site-header__menu-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="site-header__desktop-menu-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <Link
              href="/"
              aria-label="Diario UNO, portada"
              className="site-header__brand-link"
            >
              <LogoIcon className="site-header__mobile-logo" />
              <LogoIcon className="site-header__desktop-logo" tone="sky" />
              <span className="site-header__edition">MENDOZA</span>
            </Link>
          </div>

          <Nav />

          <div className="site-header__actions" aria-hidden="true">
            <span className="site-header__search-mark">
              <MagnifyingGlassIcon />
            </span>
            <span className="site-header__access">Acceder</span>
            <span className="site-header__subscribe">Suscribite</span>
          </div>
        </div>
      </div>

      <div className="site-header__mobile-divider" />
    </header>
  );
}
