import userpicUrl from "@/assets/img/urerpic.jpg";
import Logo from "@/assets/img/logo.svg?react";
import s from "./HomeHeader.module.scss";
import clsx from "clsx";
import Button from "@/ui/components/Button/Button";
import Icon from "@/ui/icons";
import { useState } from "react";
import { Select, SelectItem } from "@/ui/components/Select/Select";
import {
  ToggleSwitch,
  ToggleSwitchItem,
} from "@/ui/components/ToggleSwitch/ToggleSwitch";

const HomeHeader = () => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  return (
    <div className={clsx("page-block", s.HeaderBlock)}>
      <header className={s.Header}>
        <div className={s.ImgWrapper}>
          <div className={s.LogoWrapper}>
            <Logo />
          </div>
          <img className={s.Userpic} src={userpicUrl} alt="Andrew's image" />
        </div>

        <div className={s.Content}>
          <div className={s.TextBlock}>
            <h1>Andrew Owlgrim</h1>
            <h4>#Designer #Developer #Creator</h4>
          </div>
          <div className={s.ButtonsRow}>
            <Button shape="capsule">
              <p>About me</p>
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
        <div className={s.Controls}>
          <Select
            value={language}
            onValueChange={setLanguage}
            placeholder="Language"
            shape="round"
          >
            <SelectItem value="en" text="Eng" />
            <SelectItem value="uk" text="Укр" />
            <SelectItem value="ru" text="Рус" />
          </Select>

          <ToggleSwitch value={theme} onValueChange={setTheme} shape="round">
            <ToggleSwitchItem value="light">
              <Icon name="sun" />
            </ToggleSwitchItem>

            <ToggleSwitchItem value="dark">
              <Icon name="moon" />
            </ToggleSwitchItem>
          </ToggleSwitch>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
