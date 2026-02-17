import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • Minesweeper" },
    {
      name: "description",
      content:
        "A classic minesweeper, but the board is infinite, and it's generated as new cells are opened. My first JavaScript project.",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <iframe
        src="./projects/minesweeper/build/index.html"
        className="project-iframe"
      />
    </div>
  );
}
