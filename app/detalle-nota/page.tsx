import Image from "next/image";
import { ShareIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { JwpNoticiasWrapper } from "../components/jwp-noticias/jwp-noticcias-wrapper";
import { Footer } from "../components/footer/footer";

export default async function DetalleNota() {
  return (
    <main className="pt-16 md:pt-0 flex flex-col p-2 gap-2 md:p-8 min-h-screen mb-7">
      {/* Fixed Banner - Option 1 */}
      <div className="fixed top-16 md:top-0 left-0 right-0 h-[50px] z-10 px-2 md:px-8">
        <div className="bg-gray-200 border-b border-gray-300 flex items-center justify-center h-full max-w-4xl mx-auto rounded-t-lg">
          <p className="text-gray-500 text-sm">Banner Superior 100% × 50px</p>
        </div>
      </div>

      {/* Spacer for fixed banner */}
      <div className="h-[50px]"></div>

      <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="p-4 md:p-8 border-b border-gray-200">
          {/* Category Tag */}
          <div className="mb-2">
            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase px-2 py-0 rounded">
              Política
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor
          </h1>

          {/* Lead/Copete */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans mb-4">
            Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur excepteur sint occaecat.
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <div className=" relative w-10 h-10">
                  <Image
                    src="/cara1.png"
                    alt="Foto del autor"
                    fill
                    className="rounded-full object-cover border-2 border-gray-100"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1c69a8]">
                  Juan Pérez
                </p>
                <p className="text-xs text-gray-500">11 Mar 2026 • 5 min</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Compartir"
              >
                <ShareIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Guardar"
              >
                <BookmarkIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[1/1] bg-gray-200">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Lorem ipsum dolor sit amet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm">
              Consectetur adipisicing elit sed do eiusmod tempor
            </p>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-4 md:p-8">
          {/* First Paragraph */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 font-sans">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 font-sans">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            consectetur adipisci velit sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut
            enim ad minima veniam quis nostrum exercitationem ullam corporis
            suscipit laboriosam nisi ut aliquid.
          </p>

          {/* Banner 300x250 */}
          <div className="flex justify-center my-8">
            <div className="w-[300px] h-[250px] bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
              <p className="text-gray-400 text-sm">Publicidad 300×250</p>
            </div>
          </div>

          {/* Third Paragraph */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 font-sans">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident similique sunt in culpa qui officia deserunt mollitia
            animi id est laborum et dolorum fuga.
          </p>

          {/* Subtitle */}
          <h2 className="font-serif text-xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">
            Temporibus autem quibusdam et aut officiis
          </h2>

          {/* Fourth Paragraph */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 font-sans">
            Et harum quidem rerum facilis est et expedita distinctio nam libero
            tempore cum soluta nobis est eligendi optio cumque nihil impedit quo
            minus id quod maxime placeat facere possimus omnis voluptas
            assumenda est omnis dolor repellendus temporibus autem quibusdam et
            aut officiis debitis aut rerum necessitatibus.
          </p>

          {/* Fifth Paragraph */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 font-sans">
            Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium totam rem aperiam
            eaque ipsa quae ab illo inventore veritatis.
          </p>
        </div>

        {/* JWP Noticias Carousel */}
        <div className="border-t border-gray-200 bg-gray-50 p-4 md:p-8">
          <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
            Más noticias
          </h3>
          <JwpNoticiasWrapper />
        </div>

        {/* Banner 300x250 */}
        <div className="flex justify-center py-8 bg-white">
          <div className="w-[300px] h-[250px] bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
            <p className="text-gray-400 text-sm">Publicidad 300×250</p>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="border-t border-gray-200 p-4 md:p-8 bg-gray-50">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
            Notas relacionadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="text-xs text-red-600 font-bold uppercase mb-1">
                  Política
                </p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}
