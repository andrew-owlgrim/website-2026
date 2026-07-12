import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • Board game" },
    {
      name: "description",
      content:
        "Prototype of the board game about business, competition and cooperation",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <iframe
        src="./projects/board-game/build/index.html"
        className="project-iframe"
      />
    </div>
  );
}
