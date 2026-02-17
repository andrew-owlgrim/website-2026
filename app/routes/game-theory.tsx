import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • Game Theory" },
    {
      name: "description",
      content: "Simple simulation of society with cooperation and cheating",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <iframe
        src="./projects/game-theory/build/index.html"
        className="project-iframe"
      />
    </div>
  );
}
