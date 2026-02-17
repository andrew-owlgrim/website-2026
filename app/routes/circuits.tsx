import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • Circuits" },
    {
      name: "description",
      content: "Game about computer logic.",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <iframe
        src="./projects/circuits/build/index.html"
        className="project-iframe"
      />
    </div>
  );
}
