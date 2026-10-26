import Link from "next/link";
import Image from "next/image";
import { PencilIcon } from "@heroicons/react/16/solid";
import { EditorialImage } from "@/app/components/editorial-image";
import { PoliticaPrincipal } from "@/app/components/politica/politica-principal";
import { PoliticaListado } from "@/app/components/politica/politica-listado";
import "./portada-seccion.css";

type Story = {
  id?: string;
  title: string;
  desktopTitle: string;
  summary: string;
  desktopSummary: string;
  image: { src: string; alt: string };
  desktopImage?: { src: string; alt: string };
  category: string;
  author: string;
  desktopAuthor: string;
};

function SectionPagination({
  currentPage,
  pageCount,
}: {
  currentPage: number;
  pageCount: number;
}) {
  return (
    <nav className="section-front__pagination" aria-label="Páginas de la sección">
      <Link
        href={`/portada-seccion?pagina=${Math.max(1, currentPage - 1)}`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
        className={currentPage === 1 ? "is-disabled" : ""}
      >
        Anterior
      </Link>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={`/portada-seccion?pagina=${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
      <Link
        href={`/portada-seccion?pagina=${Math.min(pageCount, currentPage + 1)}`}
        aria-disabled={currentPage === pageCount}
        tabIndex={currentPage === pageCount ? -1 : undefined}
        className={currentPage === pageCount ? "is-disabled" : ""}
      >
        Siguiente
      </Link>
    </nav>
  );
}

export function PortadaSeccion({
  lead,
  stories,
  currentPage,
  pageCount,
}: {
  lead: Story;
  stories: Story[];
  currentPage: number;
  pageCount: number;
}) {
  const leadDesktopImage = lead.desktopImage ?? lead.image;

  return (
    <main className="section-front">
      <div className="section-front__layout">
        <div className="section-front__editorial">
          <header className="section-front__masthead">
            <span className="section-front__masthead-marker" aria-hidden="true" />
            <h1>
              <span className="section-front__mobile-copy">Nombre sección</span>
              <span className="section-front__desktop-copy">Nombre sección</span>
            </h1>
          </header>

          <div className="section-front__politica-mobile editorial-lead-list-content p-2 pb-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
            <div className="editorial-lead-list-main">
              <PoliticaPrincipal
                foto={leadDesktopImage}
                content={{
                  title: lead.desktopTitle,
                  summary: lead.desktopSummary,
                  author: lead.desktopAuthor,
                }}
              />
            </div>
            <div className="editorial-lead-list-divider border-t border-gray-200 my-1" />
            <div className="editorial-lead-list-side">
              <PoliticaListado
                fotos={stories.map((story) => story.image)}
                items={stories.map((story) => ({
                  title: story.desktopTitle,
                  category: story.category,
                  author: story.desktopAuthor,
                }))}
              />
            </div>
            <SectionPagination currentPage={currentPage} pageCount={pageCount} />
          </div>

          <article className="section-front__lead">
            <div className="section-front__lead-image">
              <div className="section-front__lead-image-mobile">
                <EditorialImage
                  src={lead.image.src}
                  alt={lead.image.alt}
                  width={1000}
                  height={563}
                  sizes="100vw"
                  desktopSizes="(max-width: 1360px) 62vw, 830px"
                  priority
                />
              </div>
              <div className="section-front__lead-image-desktop">
                <EditorialImage
                  src={leadDesktopImage.src}
                  alt={leadDesktopImage.alt}
                  width={1000}
                  height={563}
                  sizes="(max-width: 1360px) 62vw, 830px"
                  desktopSizes="(max-width: 1360px) 62vw, 830px"
                  priority
                />
              </div>
            </div>
            <div className="section-front__lead-copy">
              <p className="section-front__kicker">{lead.category}</p>
              <h2>
                <span className="section-front__mobile-copy">{lead.title}</span>
                <span className="section-front__desktop-copy">{lead.desktopTitle}</span>
              </h2>
              <p className="section-front__lead-summary">
                <span className="section-front__mobile-copy">{lead.summary}</span>
                <span className="section-front__desktop-copy">{lead.desktopSummary}</span>
              </p>
              <p className="section-front__byline">Por {lead.author}</p>
              <div className="section-front__lead-desktop-meta">
                <span className="section-front__lead-desktop-author">
                  <PencilIcon aria-hidden="true" />
                  {lead.desktopAuthor}
                </span>
              </div>
            </div>
          </article>

          <section className="section-front__listing" aria-labelledby="section-front-list-title">
            <div className="section-front__listing-heading">
              <span className="section-front__listing-marker" aria-hidden="true" />
              <h2 id="section-front-list-title">Principales</h2>
            </div>
            <div className="section-front__stories">
              {stories.map((story, index) => (
                <article className="section-front__story" key={story.id}>
                  <div className="section-front__story-image">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      width={525}
                      height={350}
                      sizes="(max-width: 1023px) 100vw, (max-width: 1360px) 30vw, 400px"
                      priority={index < 2 && currentPage === 1}
                    />
                  </div>
                  <div className="section-front__story-copy">
                    <p className="section-front__kicker">{story.category}</p>
                    <h3>
                      <span className="section-front__mobile-copy">{story.title}</span>
                      <span className="section-front__desktop-copy">{story.desktopTitle}</span>
                    </h3>
                    <p className="section-front__story-summary">
                      <span className="section-front__mobile-copy">{story.summary}</span>
                      <span className="section-front__desktop-copy">{story.desktopSummary}</span>
                    </p>
                    <p className="section-front__byline">
                      <span className="section-front__mobile-copy">Por {story.author}</span>
                    </p>
                    <div className="section-front__story-desktop-byline">
                      <PencilIcon aria-hidden="true" />
                      <span>{story.desktopAuthor}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <SectionPagination currentPage={currentPage} pageCount={pageCount} />
          </section>
        </div>

        <aside className="section-front__rail" aria-label="Espacios publicitarios">
          <div className="section-front__rail-sticky">
            {[1, 2].map((number) => (
              <div className="section-front__ad" key={number}>
                <span>Publicidad</span>
                <div className="section-front__ad-placeholder">
                  <span>Espacio publicitario</span>
                  <strong>300 × 250</strong>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
