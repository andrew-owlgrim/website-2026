import Footer from "@/components/Footer/Footer";

import s from "./home.module.scss";
import type { Route } from "../../+types/root";
import HomeHeader from "@/components/HomeHeader/HomeHeader";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
