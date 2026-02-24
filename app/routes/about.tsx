import Header from "@/components/Header/Header";
import type { Route } from "../+types/root";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutBackground from "@/components/AboutBackground/AboutBackground";
import AboutContact from "@/components/AboutContact/AboutContact";
import Footer from "@/components/Footer/Footer";
import { loadLocale } from "@/i18n";

export async function loader({ params }: Route.LoaderArgs) {
  return await loadLocale(params, ["common", "about"]);
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Owlgrim • About" },
    {
      name: "description",
      content:
        "Hey! I’m Andrew. I specialize in custom design and front-end development. This website is my lab — a place where I share my projects, demos, experiments, case studies and sharpen new skills.",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <AboutHero />
      <AboutBackground />
      <AboutContact />
      <Footer />
    </div>
  );
}
