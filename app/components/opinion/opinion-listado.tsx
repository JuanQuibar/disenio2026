import { OpinionCard } from "./opinion-card";

export function OpinionListado() {
  const opinions = [
    {
      author: "Juan Quibar",
      imageSrc: "/cara1.png",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      author: "Paola Alé",
      imageSrc: "/cara3.png",
      title: "Ut enim ad minim veniam quis nostrud exercitation ullamco",
    },
    {
      author: "Pablo Philippens",
      imageSrc: "/cara2.png",
      title: "Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      author: "Paola Piquer",
      imageSrc: "/cara4.png",
      title: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {opinions.map((op, index) => (
        <OpinionCard
          key={index}
          author={op.author}
          imageSrc={op.imageSrc}
          title={op.title}
        />
      ))}
    </div>
  );
}
