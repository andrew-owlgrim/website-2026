import s from "./AboutPortfolio.module.scss";
import clsx from "clsx";
import { useI18n } from "@/i18n";
import Button from "@/ui/components/Button/Button";
import Icon from "@/ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import clverMindPreview from "@/assets/img/about-page/portfolio/clevermind-preview.jpg";
import justfitPreview from "@/assets/img/about-page/portfolio/justfit-preview.webp";
import limeraPreview from "@/assets/img/about-page/portfolio/limera-preview.webp";
import mobileAppsPreview from "@/assets/img/about-page/portfolio/mobile-apps-preview.webp";
import sivprodPreview from "@/assets/img/about-page/portfolio/sivprod-preview.webp";
import { useUI } from "@/ui/provider/UIProvider";

export default function AboutPortfolio() {
  const { t } = useI18n();
  const { screen, rem } = useUI();

  const swiperRef = useRef<any>(null);

  const [transition, setTransition] = useState(false);
  const [touch, setTouch] = useState(false);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    if (!touch && !transition) setMoving(false);
    else setMoving(true);
  }, [transition, touch]);

  return (
    <section id="portfolio" className={clsx("page-block", s.Block)}>
      <div className={s.BlockContent}>
        <div className={s.Header}>
          <h2 className={s.SectionTitle}>{t["portfolio.title"]}</h2>
          {screen !== "mobile" && <Buttons />}
        </div>
        <div className={s.Projects}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={
              screen === "mobile" ? 1 : screen === "tablet" ? 2 : 3
            }
            slidesPerGroup={1}
            spaceBetween={0.5 * rem}
            loop={screen !== "mobile"}
            watchSlidesProgress
            onTransitionStart={() => {
              setTransition(true);
              setMoving(true);
            }}
            onTransitionEnd={() => setTransition(false)}
            onTouchStart={() => setTouch(true)}
            onTouchEnd={() => setTouch(false)}
            className={clsx(
              s.Slider,
              !moving && s.showOverflow,
              screen == "mobile" && s.Mobile,
            )}
          >
            <SwiperSlide>
              <ProjectCard
                imgUrl={justfitPreview}
                alt="JustFit logo"
                title={t["portfolio.project1.title"]}
                description={t["portfolio.project1.details"]}
                href="https://www.behance.net/gallery/159184899/JustFit-Workout-App-UIUX-Template"
                className={s.Slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                imgUrl={limeraPreview}
                alt="Home page preview of Limera website"
                title={t["portfolio.project2.title"]}
                description={t["portfolio.project2.details"]}
                href="https://www.behance.net/gallery/122487127/Limera"
                className={s.Slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                imgUrl={sivprodPreview}
                alt="Sivprod logo"
                title={t["portfolio.project3.title"]}
                description={t["portfolio.project3.details"]}
                href="https://www.behance.net/gallery/122486511/Siv-prod"
                className={s.Slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                imgUrl={mobileAppsPreview}
                alt="Preview image with design of mobile app"
                title={t["portfolio.project4.title"]}
                description={t["portfolio.project4.details"]}
                href="https://www.behance.net/gallery/122486739/Mobile-UI-collection"
                className={s.Slide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                imgUrl={clverMindPreview}
                alt="Clevermind website preview image with blog structure that contains articles and its dietary supplements shop promotion"
                title={t["portfolio.project5.title"]}
                description={t["portfolio.project5.details"]}
                href="https://www.behance.net/gallery/70145287/CleverMindRu-Website-redesign"
                className={s.Slide}
              />
            </SwiperSlide>
          </Swiper>
          <Button
            shape="round"
            variant="alt-surface"
            onClick={() => swiperRef.current?.slidePrev()}
            className={s.SliderLeft}
          >
            <Icon name="chevron-left" />
          </Button>
          <Button
            shape="round"
            variant="alt-surface"
            onClick={() => swiperRef.current?.slideNext()}
            className={s.SliderRight}
          >
            <Icon name="chevron-right" />
          </Button>
        </div>
        {screen === "mobile" && <Buttons />}
      </div>
    </section>
  );
}

function Buttons() {
  return (
    <div className={s.Buttons}>
      <Button className={s.Behance} asChild>
        <a
          href="https://www.behance.net/andrew-owlgrim"
          target="_blank"
          rel="norefferer nofollow"
        >
          <Icon name="behance" />
          <p>Behance</p>
        </a>
      </Button>
      <Button className={s.Dribbble} asChild>
        <a
          href="https://dribbble.com/andrew-owlgrim"
          target="_blank"
          rel="norefferer nofollow"
        >
          <Icon name="dribbble" />
          <p>Dribbble</p>
        </a>
      </Button>
      <Button className={s.Github} asChild>
        <a
          href="https://github.com/andrew-owlgrim"
          target="_blank"
          rel="norefferer nofollow"
        >
          <Icon name="github" />
          <p>Github</p>
        </a>
      </Button>
    </div>
  );
}
