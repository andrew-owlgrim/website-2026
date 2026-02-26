import clsx from "clsx";
import s from "./AboutSkills.module.scss";
import { DonutChart } from "./DonutChart";
import { useI18n } from "@/i18n";
import { useMemo, type ReactNode } from "react";

// icons

import blenderLogo from "@/assets/img/about-page/logos/blender.svg";
import chatGptLogo from "@/assets/img/about-page/logos/chat-gpt_mono.svg";
import cssLogo from "@/assets/img/about-page/logos/css.svg";
import davinciResolveLogo from "@/assets/img/about-page/logos/davinci-resolve.svg";
import davinciResolveMonoLogo from "@/assets/img/about-page/logos/davinci-resolve_mono.svg";
import figmaLogo from "@/assets/img/about-page/logos/figma.svg";
import flLogo from "@/assets/img/about-page/logos/fl.svg";
import flMonoLogo from "@/assets/img/about-page/logos/fl_mono.svg";
import geminiMonoLogo from "@/assets/img/about-page/logos/gemini_mono.svg";
import gitLogo from "@/assets/img/about-page/logos/git.svg";
import godotLogo from "@/assets/img/about-page/logos/godot.svg";
import htmlLogo from "@/assets/img/about-page/logos/html.svg";
import miroLogo from "@/assets/img/about-page/logos/miro.svg";
import motionLogo from "@/assets/img/about-page/logos/motion.svg";
import notionLogo from "@/assets/img/about-page/logos/notion.svg";
import copilotLogo from "@/assets/img/about-page/logos/octicon_copilot-16.svg";
import photopeaLogo from "@/assets/img/about-page/logos/photopea.svg";
import radixMonoLogo from "@/assets/img/about-page/logos/radix_mono.svg";
import reactRouterLogo from "@/assets/img/about-page/logos/react-router.svg";
import reactLogo from "@/assets/img/about-page/logos/react.svg";
import typescriptLogo from "@/assets/img/about-page/logos/typescript.svg";
import viteLogo from "@/assets/img/about-page/logos/vite.svg";
import vsCodeLogo from "@/assets/img/about-page/logos/vs-code.svg";

//

export default function AboutSkills() {
  const { t } = useI18n();

  const skills: [string, number][] = [
    [t["skills.design"], 66],
    [t["skills.dev"], 66],
    [t["skills.video"], 50],
    [t["skills.3d"], 33],
    [t["skills.psycho"], 33],
    [t["skills.music"], 25],
  ];

  const stack = [
    ["Figma", figmaLogo],
    ["Photopea", photopeaLogo],
    ["Notion", notionLogo],
    ["Blender", blenderLogo],
    ["Davinci Resolve", davinciResolveLogo],
    ["Fl Studio", flLogo],
    ["Godot", godotLogo],
    ["VS Code", vsCodeLogo],
    ["HTML5", htmlLogo],
    ["SCSS", cssLogo],
    ["Typescript", typescriptLogo],
    ["React", reactLogo],
    ["React Router v7", reactRouterLogo],
    ["Git", gitLogo],
    ["Vite", viteLogo],
    ["Radix UI", radixMonoLogo],
    ["Motion", motionLogo],
    ["Dnd Kit"],
    ["Chart.js"],
    ["Three.js"],
    ["Matter.js"],
    ["Paper.js"],
    ["Recraft"],
    ["ChatGPT", chatGptLogo],
    ["Gemini", geminiMonoLogo],
    ["Github Copilot", copilotLogo],
  ];

  return (
    <section id="skills" className={clsx("page-block", s.SkillsBlock)}>
      <div className={s.SkillsContent}>
        <h2>{t["skills.title"]}</h2>
        <div className={s.SubBlocks}>
          <div className={s.SkillsCards}>
            {skills.map((v, i) => (
              <SkillCard key={i} text={v[0]} value={v[1]} />
            ))}
          </div>

          <div className={s.StackChips}>
            {stack.map((v, i) => (
              <Chip key={i}>
                {v[1] && (
                  <div className="icon-wrapper">
                    <img src={v[1]} alt="" className="icon" />
                  </div>
                )}
                <p>{v[0]}</p>
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ text, value }: { text: string; value: number }) {
  return (
    <div className={s.SkillCard}>
      <DonutChart className={s.SkillChart} value={value} />
      <h6 className={s.SkillText}>{text}</h6>
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <div className={s.Chip}>{children}</div>;
}
