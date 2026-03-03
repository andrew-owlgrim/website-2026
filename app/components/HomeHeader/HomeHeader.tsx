import userpicUrl from "@/assets/img/urerpic.jpg";
import Logo from "@/assets/img/logo.svg?react";
import s from "./HomeHeader.module.scss";
import clsx from "clsx";
import Button from "@/ui/components/Button/Button";
import Icon from "@/ui/icons";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@/ui/components/Select/Select";
import {
  ToggleSwitch,
  ToggleSwitchItem,
} from "@/ui/components/ToggleSwitch/ToggleSwitch";
import { Link } from "react-router";
import { useUI } from "@/ui/provider/UIProvider";
import { useI18n } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { SiteSettings } from "../SiteSettings/SiteSettings";

//

const HomeHeader = () => {
  const { t, locale, setLocale } = useI18n();

  // theme

  const { theme, setTheme, screen } = useUI();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // language

  const [language, setLanguage] = useState<string>(locale);

  useEffect(() => {
    if (language !== locale) setLocale(language as Locale);
  }, [language]);

  //

  return (
    <div className={clsx("page-block", s.HeaderBlock)}>
      {screen !== "desktop" && (
        <div className={s.MobileTopRow}>
          <Logo className={s.Logo} />
          <SiteSettings size="sm" />
        </div>
      )}

      <header className={s.Header}>
        <div className={s.ImgWrapper}>
          {screen === "desktop" && (
            <div className={s.LogoWrapper}>
              <Logo className={s.Logo} />
            </div>
          )}
          <img className={s.Userpic} src={userpicUrl} alt="Andrew's image" />
        </div>

        <div className={s.Content}>
          <div className={s.TextBlock}>
            <h2>{t.title}</h2>
            <h5>{t.subtitle}</h5>
          </div>
          <div className={s.ButtonsRow}>
            <Button shape="capsule" asChild>
              <Link to={"/about"}>
                <span>{t.about}</span>
              </Link>
            </Button>
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
        {screen === "desktop" && <SiteSettings size="lg" />}
      </header>
    </div>
  );
};

export default HomeHeader;
