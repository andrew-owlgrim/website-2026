import ProjectCard from "~/components/ProjectCard/ProjectCard";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="page">
      <header>
        <div className="img-wrapper">
          <div className="logo-wrapper"></div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>Andrew Owlgrim</h1>
          <h5>#Designer #Developer #Creator</h5>
          <div>
            <button>About me</button>
            <a
              href="https://www.instagram.com/andrew.owlgrim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@andrew-owlgrim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.tiktok.com/@andrew.owlgrim"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </header>
      <main>
        <ProjectCard
          title="Planner"
          description="Make decisions, set goals, plan your schedule and monitor progress within one app"
          imgUrl=""
        />
        <ProjectCard
          title="Circuits"
          description="Make your custom devices in this game about computer logic"
          imgUrl=""
        />
        <ProjectCard
          title="Game Theory"
          description="Simple simulation of society with cooperation and cheating"
          imgUrl=""
        />
        <ProjectCard
          title="Silly Knight"
          description="Demo game made during my experiments with Godot engine"
          imgUrl=""
        />
        <ProjectCard
          title="Brick Breaker"
          description="Made during experiments with custom game engine"
          imgUrl=""
        />
        <ProjectCard
          title="Minesweeper"
          description="A classic game but on endless field"
          imgUrl=""
        />
      </main>
      <footer> Andrew Owlgrim — 2026</footer>
    </div>
  );
}
