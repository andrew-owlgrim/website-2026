import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • Brick Breaker" },
    {
      name: "description",
      content:
        "The result of experiments with writing custom game engine, rendering custom graphics onto canvas, and physics simulation",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <iframe
        src="./projects/brick-breaker/build/index.html"
        className="project-iframe"
      />
    </div>
  );
}
