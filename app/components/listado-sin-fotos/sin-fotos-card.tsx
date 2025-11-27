const noticias = [
  "Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit quisquam voluptatum numquam",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim",
  "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
  "Consectetur adipisicing elit sed do eiusmod tempor incididunt labore dolore",
];

export function SinFotosCard() {
  return (
    <div className="flex flex-col">
      {noticias.map((noticia, index) => (
        <article
          key={index}
          className={`flex gap-3 py-3 ${
            index !== noticias.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="flex-1 flex flex-col justify-start">
            <h3 className="font-serif text-base text-gray-900 line-clamp-4 leading-snug mb-1">
              {noticia}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
