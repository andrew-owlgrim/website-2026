import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • Silly Knight" },
    {
      name: "description",
      content:
        "Demo platformer game made during my experiments with Godot engine.",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <iframe
        src="./projects/silly-knight/build/index.html"
        className="project-iframe"
      />
    </div>
  );
}
