import s from "./AboutBackground.module.scss";
import BackgroundCard from "./BackgroundCard";

import IconCam from "@/assets/img/about-page/cam.svg?react";
import IconWork from "@/assets/img/about-page/work.svg?react";
import IconCode from "@/assets/img/about-page/code.svg?react";
import Link from "@/ui/components/Link/Link";
import clsx from "clsx";
import { useI18n } from "@/i18n";

export default function AboutBackground() {
  const { t } = useI18n();

  return (
    <section id="background" className={clsx("page-block", s.BackgroundBlock)}>
      <div className={s.BlockContent}>
        <h2 className={s.SectionTitle}>{t["background.title"]}</h2>
        <div className={s.CardsContainer}>
          <BackgroundCard
            icon={<IconCam />}
            occupation={t["background.card1.occupation"]}
            title={t["background.card1.title"]}
            description={
              <>
                {t["background.card1.description.0"]}
                <Link
                  href="https://www.youtube.com/@Sivprod-Minecraft/"
                  target="blank"
                  rel="norefferer noopener"
                >
                  {t["background.card1.description.1"]}
                </Link>
                {t["background.card1.description.2"]}
                <em>{t["background.card1.description.3"]}</em>
                {t["background.card1.description.4"]}
                <em>{t["background.card1.description.5"]}</em>
                {t["background.card1.description.6"]}
              </>
            }
            date={t["background.card1.date"]}
          />
          <BackgroundCard
            icon={<IconWork />}
            occupation={t["background.card2.occupation"]}
            title={t["background.card2.title"]}
            description={
              <>
                {t["background.card2.description.0"]}
                <Link
                  href="https://limera.ru"
                  target="blank"
                  rel="norefferer noopener"
                >
                  {t["background.card2.description.1"]}
                </Link>
                {t["background.card2.description.2"]}
                <Link
                  href="https://dzencode.com"
                  target="blank"
                  rel="norefferer noopener"
                >
                  {t["background.card2.description.3"]}
                </Link>
                {t["background.card2.description.4"]}
              </>
            }
            date={t["background.card2.date"]}
          />
          <BackgroundCard
            icon={<IconCode />}
            occupation={t["background.card3.occupation"]}
            title={t["background.card3.title"]}
            description={
              <>
                {t["background.card3.description.0"]}
                <Link
                  href="https://ampersand-it.com/"
                  target="blank"
                  rel="norefferer noopener"
                >
                  {t["background.card3.description.1"]}
                </Link>
                {t["background.card3.description.2"]}
              </>
            }
            date={t["background.card3.date"]}
          />
        </div>
      </div>
    </section>
  );
}
