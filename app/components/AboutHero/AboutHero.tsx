import Button from "@/ui/components/Button/Button";
import s from "./AboutHero.module.scss";
import userpic from "@/assets/img/urerpic.jpg";
import Icon from "@/ui/icons";

import Shape from "@/assets/img/about-page/shape-badge.svg?react";
import Illustration from "@/assets/img/about-page/about-hero-illustration.svg?react";
import clsx from "clsx";
import { useI18n } from "@/i18n";
import { useUI } from "@/ui/provider/UIProvider";

export default function AboutHero() {
  const { t } = useI18n();
  const { screen } = useUI();

  return (
    <section className={clsx("page-block", s.HeroBlock)}>
      <div className={s.BlockContent}>
        {screen === "mobile" ? (
          <>
            <div className={s.ImgBlock}>
              <div className={s.ImgWrapper}>
                <img src={userpic} alt="Andrew's Image" />
                <Shape className={s.Shape} />
              </div>
            </div>
            <h1 className={s.Title}>Andrew Owlgrim</h1>
          </>
        ) : (
          <div className={s.TopRow}>
            <h1 className={s.Title}>Andrew</h1>
            <div className={s.ImgWrapper}>
              <img src={userpic} alt="Andrew's Image" />
              <Shape className={s.Shape} />
            </div>
            <h1 className={s.Title}>Owlgrim</h1>
          </div>
        )}
        <h4 className={s.Subtitle}>{t["hero.tags"]}</h4>
        <p className={s.Description}>{t["hero.description"]}</p>
        <div className={s.Actions}>
          <Button shape="capsule" asChild>
            <a
              href="https://www.instagram.com/andrew.owlgrim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" />
            </a>
          </Button>
          <Button shape="capsule" asChild>
            <a
              href="https://www.youtube.com/@andrew-owlgrim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="youtube" />
            </a>
          </Button>
          <Button shape="capsule" asChild>
            <a
              href="https://www.tiktok.com/@andrew.owlgrim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="tiktok" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
