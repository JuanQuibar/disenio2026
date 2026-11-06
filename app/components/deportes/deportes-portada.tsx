import Image from "next/image";
import Link from "next/link";
import { EditorialImage } from "@/app/components/editorial-image";
import { OvacionAgenda } from "@/app/components/ovacion/ovacion-agenda";
import { DeportesPosicionesWrapper } from "./deportes-posiciones-wrapper";
import "./deportes.css";

export type DeportesStory = {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: { src: string; alt: string };
  author: string;
};

const tickerItems = [
  "Fútbol mendocino",
  "Liga profesional",
  "Atletismo",
  "Rugby",
  "Deportes de Mendoza",
];

function StoryImage({ story, priority = false }: { story: DeportesStory; priority?: boolean }) {
  return (
    <EditorialImage
      src={story.image.src}
      alt={story.image.alt}
      fill
      className="object-cover"
      sizes="(max-width: 1023px) 100vw, (max-width: 1360px) 48vw, 720px"
      desktopSizes="(max-width: 1360px) 48vw, 720px"
      priority={priority}
    />
  );
}

function Byline({ author }: { author: string }) {
  return <p className="sports-front__byline">Por {author}</p>;
}

function BelowLeadStory({
  story,
  showByline,
  continuation = false,
}: {
  story: DeportesStory;
  showByline: boolean;
  continuation?: boolean;
}) {
  return (
    <article className="sports-front__below-lead-story">
      <div className="sports-front__below-lead-image">
        <EditorialImage
          src={story.image.src}
          alt={story.image.alt}
          fill
          className="object-cover"
          sizes={continuation
            ? "(max-width: 1023px) 1px, (max-width: 1360px) 30vw, 400px"
            : "(max-width: 1023px) 1px, (max-width: 1360px) 28vw, 320px"}
          desktopSizes={continuation ? "(max-width: 1360px) 30vw, 400px" : "(max-width: 1360px) 28vw, 320px"}
        />
      </div>
      <span className="sports-front__kicker">{story.category}</span>
      <h3>{story.title}</h3>
      {showByline && <Byline author={story.author} />}
    </article>
  );
}

function DeportesPagination({
  currentPage,
  pageCount,
}: {
  currentPage: number;
  pageCount: number;
}) {
  const hrefForPage = (page: number) =>
    page === 1 ? "/deportes#mas-noticias" : `/deportes?pagina=${page}`;

  return (
    <nav className="sports-front__pagination" aria-label="Páginas de noticias de Ovación">
      <Link
        href={hrefForPage(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
        className={currentPage === 1 ? "is-disabled" : ""}
      >
        Anterior
      </Link>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={hrefForPage(page)}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
      <Link
        href={hrefForPage(Math.min(pageCount, currentPage + 1))}
        aria-disabled={currentPage === pageCount}
        tabIndex={currentPage === pageCount ? -1 : undefined}
        className={currentPage === pageCount ? "is-disabled" : ""}
      >
        Siguiente
      </Link>
    </nav>
  );
}

export function DeportesPortada({
  lead,
  featured,
  mostRead,
  belowLead,
  latest,
  currentPage,
  pageCount,
}: {
  lead: DeportesStory;
  featured: DeportesStory[];
  mostRead: DeportesStory[];
  belowLead: DeportesStory[];
  latest: DeportesStory[];
  currentPage: number;
  pageCount: number;
}) {
  return (
    <main className={`sports-front${currentPage > 1 ? " sports-front--continuation" : ""}`}>
      <section className="sports-front__top" aria-labelledby="sports-front-title">
        <header className="sports-front__masthead">
          <div className="sports-front__identity">
            <h1 id="sports-front-title">
              <Image src="/LOGO-OVACION.svg" alt="Ovación" width={254} height={54} priority />
            </h1>
            <p>La portada deportiva de Diario UNO</p>
          </div>
          <div className="sports-front__ticker" aria-label="Disciplinas de Ovación">
            <div className="sports-front__ticker-track">
              {[false, true].map((duplicate) => (
                <span className="sports-front__ticker-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
                  {tickerItems.map((item) => <span className="sports-front__ticker-item" key={item}>{item}</span>)}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="sports-front__agenda" aria-label="Agenda deportiva de DataFactory">
          <span className="sports-front__agenda-label">Agenda deportiva</span>
          <OvacionAgenda />
        </div>

        <div className="sports-front__hero">
          <div className="sports-front__main-column">
            <article className="sports-front__lead">
              <div className="sports-front__lead-image"><StoryImage story={lead} priority /></div>
              <div className="sports-front__lead-copy">
                <span className="sports-front__kicker">{lead.category}</span>
                <h2>{lead.title}</h2>
                <p className="sports-front__lead-summary">{lead.summary}</p>
                <Byline author={lead.author} />
              </div>
            </article>

            <div className="sports-front__below-lead" aria-label="Más noticias de Ovación">
              {belowLead.map((story, index) => (
                <BelowLeadStory
                  key={story.id}
                  story={story}
                  showByline={[1, 2, 5, 6].includes(index)}
                />
              ))}
            </div>
          </div>

          <div className="sports-front__featured" aria-label="Otras noticias destacadas">
            {featured.map((story) => (
              <article className="sports-front__featured-story" key={story.id}>
                <div className="sports-front__featured-image"><StoryImage story={story} /></div>
                <div className="sports-front__featured-copy">
                  <span className="sports-front__kicker">{story.category}</span>
                  <h3>{story.title}</h3>
                  <Byline author={story.author} />
                </div>
              </article>
            ))}
          </div>

          <aside className="sports-front__most-read" aria-labelledby="sports-front-most-read-title">
            <h2 id="sports-front-most-read-title">Más leídas</h2>
            <ol>
              {mostRead.map((story, index) => (
                <li key={story.id}>
                  <span className="sports-front__rank" aria-hidden="true">{index + 1}</span>
                  <div className="sports-front__most-read-copy">
                    <span className="sports-front__kicker">{story.category}</span>
                    <h3>{story.title}</h3>
                  </div>
                  <div className="sports-front__most-read-image">
                    <EditorialImage
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      className="object-cover"
                      sizes="120px"
                      desktopSizes="120px"
                    />
                  </div>
                </li>
              ))}
            </ol>
            <div className="sports-front__ad" aria-label="Espacio publicitario de Disney+">
              <span>Publicidad</span>
              <Image
                src="/ads/disney-mundial-clubes-2025.png"
                alt="Publicidad de Disney+ para el Mundial de Clubes FIFA 2025"
                width={800}
                height={1422}
                sizes="(max-width: 1199px) 283px, 400px"
              />
            </div>
            <DeportesPosicionesWrapper />
          </aside>
        </div>

        <section id="mas-noticias" className="sports-front__latest" aria-label="Más noticias de Ovación">
          <div className="sports-front__latest-grid">
            {latest.map((story, index) => (
              currentPage > 1 ? (
                <BelowLeadStory
                  key={story.id}
                  story={story}
                  showByline={[2, 4, 7, 9].includes(index)}
                  continuation
                />
              ) : (
                <article className="sports-front__latest-story" key={story.id}>
                  <div className="sports-front__latest-copy">
                    <span className="sports-front__kicker">{story.category}</span>
                    <h3>{story.title}</h3>
                    {[2, 4, 7, 9].includes(index) && <Byline author={story.author} />}
                  </div>
                  <div className="sports-front__latest-image">
                    <EditorialImage
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      className="object-cover"
                      sizes="128px"
                      desktopSizes="128px"
                    />
                  </div>
                </article>
              )
            ))}
          </div>
          <DeportesPagination currentPage={currentPage} pageCount={pageCount} />
        </section>
      </section>
    </main>
  );
}
