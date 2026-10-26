import Link from "next/link";

export const SITE_NAV_LINKS = [
  { label: "Portada", href: "/" },
  { label: "Política", href: "/#politica" },
  { label: "Ovación", href: "/#ovacion" },
  { label: "Sociedad", href: "/#sociedad" },
  { label: "Opinión", href: "/#opinion" },
  { label: "MAM", href: "/#mam" },
];

const HEADER_NAV_ITEMS = [
  { label: "Portada", href: "/" },
  { label: "Mendoza" },
  { label: "Política" },
  { label: "Economía" },
  { label: "Ovación" },
  { label: "Policiales" },
  { label: "Sociedad" },
  { label: "Opinión" },
  { label: "MAM", isLive: true },
] as const;

export default function Nav({
  homeHref = "/",
  activeHome = true,
}: {
  homeHref?: string;
  activeHome?: boolean;
} = {}) {
  return (
    <nav className="site-nav" aria-label="Secciones principales">
      {HEADER_NAV_ITEMS.map((item) => {
        const content = (
          <>
            <span>{item.label}</span>
            {"isLive" in item && item.isLive && (
              <span className="site-nav__live-dot" aria-hidden="true" />
            )}
          </>
        );

        if ("href" in item) {
          return (
            <Link
              key={item.label}
              href={homeHref}
              className={`site-nav__item${activeHome ? " site-nav__item--active" : ""}`}
            >
              {content}
            </Link>
          );
        }

        return (
          <span key={item.label} className="site-nav__item">
            {content}
          </span>
        );
      })}
    </nav>
  );
}
