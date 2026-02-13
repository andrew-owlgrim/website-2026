import s from "./AboutBackground.module.scss";
import BackgroundCard from "./BackgroundCard";

import IconCam from "@/assets/img/about-page/cam.svg?react";
import IconWork from "@/assets/img/about-page/work.svg?react";
import IconCode from "@/assets/img/about-page/code.svg?react";
import Link from "@/ui/components/Link/Link";
import clsx from "clsx";

export default function AboutBackground() {
  return (
    <section id="background" className={clsx("page-block", s.BackgroundBlock)}>
      <div className={s.BlockContent}>
        <h2 className={s.SectionTitle}>Background</h2>
        <div className={s.CardsContainer}>
          <BackgroundCard
            icon={<IconCam />}
            occupation="Youtube"
            title={"Channel owner\n& Content maker"}
            description={
              <>
                Created content for games, primarily mechanisms in Minecraft,
                and made videos about it. Full production cycle: scripts, sound,
                editing, graphics. Grew a{" "}
                <Link
                  href="https://www.youtube.com/@Sivprod-Minecraft/"
                  target="blank"
                  rel="norefferer noopener"
                >
                  channel
                </Link>{" "}
                to <em>160K+</em> subscribers and <em>1M+</em> views.
              </>
            }
            date="2013—2017"
          />
          <BackgroundCard
            icon={<IconWork />}
            occupation="Employment"
            title={"Web designer\n& UX/UI Designer"}
            description={
              <>
                Designed various websites and mobile apps while working at{" "}
                <Link
                  href="https://limera.ru"
                  target="blank"
                  rel="norefferer noopener"
                >
                  Limera
                </Link>{" "}
                and later at{" "}
                <Link
                  href="https://dzencode.com"
                  target="blank"
                  rel="norefferer noopener"
                >
                  dZencode
                </Link>
                . Designed a dating service based on interest matching, an admin
                panels for a large Israeli utility company, and complex modules
                of a banking app.
              </>
            }
            date="2019—2022"
          />
          <BackgroundCard
            icon={<IconCode />}
            occupation="Freelance"
            title={"Frontend Developer\n& Web Designer"}
            description={
              <>
                I went freelance to focus not only on design but also on
                development. In partnership with{" "}
                <Link
                  href="https://ampersand-it.com/"
                  target="blank"
                  rel="norefferer noopener"
                >
                  Ampersand IT
                </Link>
                , we provide a full range of web development services. At the
                same time, I started working on my own projects.
              </>
            }
            date="2023—P.T."
          />
        </div>
      </div>
    </section>
  );
}
