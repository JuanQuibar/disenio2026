import Link from "next/link";
import { SITE_NAV_LINKS } from "../nav";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__wordmark">
            UNO
          </Link>
          <p>Diario de Mendoza y Cuyo</p>
        </div>

        <nav className="site-footer__nav" aria-label="Secciones del diario">
          {SITE_NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="site-footer__copyright">
          © 2026 Diario UNO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
