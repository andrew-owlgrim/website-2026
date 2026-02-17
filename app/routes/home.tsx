import Footer from "@/components/Footer/Footer";
import type { Route } from "../+types/root";
import HomeHeader from "@/components/HomeHeader/HomeHeader";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim" },
    {
      name: "description",
      content:
        "Personal playground of experiments, demos, and crafted digital products. UI/UX design, frontend engineering, and interactive ideas brought to life.",
    },
  ];
}

export default function Home() {
  return (
    <div className="page">
      <HomeHeader />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
