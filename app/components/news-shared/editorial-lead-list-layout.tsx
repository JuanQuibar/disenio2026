import type { ReactNode } from "react";

interface EditorialLeadListLayoutProps {
  id: string;
  moduleName: string;
  mobileTitle: string;
  desktopTitle: string;
  desktopMeta: string;
  tone?: "default" | "crime" | "society";
  mobile?: ReactNode;
  lead: ReactNode;
  list: ReactNode;
}

export function EditorialLeadListLayout({
  id,
  moduleName,
  mobileTitle,
  desktopTitle,
  desktopMeta,
  tone = "default",
  mobile,
  lead,
  list,
}: EditorialLeadListLayoutProps) {
  return (
    <section
      id={id}
      data-home-module={moduleName}
      className={`editorial-lead-list editorial-lead-list--${tone} ${
        mobile ? "editorial-lead-list--alternate-mobile" : ""
      } news-module mb-4 border-t-2 separadores pb-2 pt-1`}
    >
      {mobile && (
        <div className="editorial-lead-list-mobile">{mobile}</div>
      )}

      <div className="editorial-lead-list-heading news-section-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
        <div className="editorial-lead-list-heading-main">
          <span
            aria-hidden="true"
            className="editorial-lead-list-heading-marker hidden lg:block"
          />
          <h3>
            <span className="lg:hidden">{mobileTitle}</span>
            <span className="hidden lg:inline">{desktopTitle}</span>
          </h3>
        </div>
        <span className="editorial-lead-list-heading-meta hidden lg:block">
          {desktopMeta}
        </span>
      </div>

      <div className="editorial-lead-list-content p-2 pb-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
        <div className="editorial-lead-list-main">{lead}</div>
        <div className="editorial-lead-list-divider border-t border-gray-200 my-1" />
        <div className="editorial-lead-list-side">{list}</div>
      </div>
    </section>
  );
}
