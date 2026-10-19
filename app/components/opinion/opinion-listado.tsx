import { OpinionCard } from "./opinion-card";

const opinions = [
  {
    author: "Juan Quibar",
    imageSrc: "/cara1.png",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    desktopKicker: "Panorama Político",
    desktopTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt",
  },
  {
    author: "Paola Alé",
    imageSrc: "/cara3.png",
    title: "Ut enim ad minim veniam quis nostrud exercitation ullamco",
    desktopKicker: "Sociedad & Derechos",
    desktopTitle:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
  },
  {
    author: "Pablo Philippens",
    imageSrc: "/cara2.png",
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna",
    desktopKicker: "Economía & Negocios",
    desktopTitle:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
  },
  {
    author: "Paola Piquer",
    imageSrc: "/cara4.png",
    title: "Duis aute irure dolor in reprehenderit in voluptate velit",
    desktopKicker: "Cultura Cuyo",
    desktopTitle:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
];

export function OpinionListado() {
  return (
    <div className="opinion-grid grid grid-cols-2 md:grid-cols-4 gap-4">
      {opinions.map((op) => (
        <OpinionCard
          key={op.author}
          author={op.author}
          imageSrc={op.imageSrc}
          title={op.title}
          desktopKicker={op.desktopKicker}
          desktopTitle={op.desktopTitle}
        />
      ))}
    </div>
  );
}
