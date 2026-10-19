import type { ReactNode } from "react";
import { Footer } from "../components/footer/footer";
import Header from "../components/header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-layout">
      <Header />
      <div className="site-page-frame">{children}</div>
      <Footer />
    </div>
  );
}
