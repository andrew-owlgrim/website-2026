import Icon from "@/ui/icons";
import s from "./Header.module.scss";
import Logo from "@/assets/img/logo.svg?react";
import { Navbar, NavbarItem } from "../Navbar/Navbar";
import Button from "@/ui/components/Button/Button";
import { Link as RouterLink } from "react-router";
import clsx from "clsx";
import { useUI } from "@/ui/provider/UIProvider";
import { useI18n } from "@/i18n";
import { SiteSettings } from "../SiteSettings/SiteSettings";

function Header() {
  const { t } = useI18n();
  const { screen } = useUI();

  return (
    <header className={clsx("page-block", s.Header)}>
      {screen === "desktop" ? (
        <div className={s.Content}>
          <div className={s.Left}>
            <Button variant="ghost" size="sm" asChild>
              <RouterLink to="/">
                <Logo className={s.Logo} />
              </RouterLink>
            </Button>
            <p className={s.Slash}>/</p>
            <Button variant="ghost" size="sm" asChild>
              <RouterLink to="/about">
                <h6>{t["header.about"]}</h6>
              </RouterLink>
            </Button>
          </div>
          <Navbar>
            <NavbarItem id="background">{t["header.background"]}</NavbarItem>
            <NavbarItem id="skills">{t["header.skills"]}</NavbarItem>
            <NavbarItem id="portfolio">{t["header.portfolio"]}</NavbarItem>
            <NavbarItem id="manifesto">{t["header.manifesto"]}</NavbarItem>
            <NavbarItem id="contact">{t["header.contact"]}</NavbarItem>
          </Navbar>
          <SiteSettings size="sm" className={s.Right} />
        </div>
      ) : (
        <div className={s.Content}>
          <div className={s.Left}>
            <RouterLink to="/">
              <Logo className={s.Logo} />
            </RouterLink>
          </div>
          <div className={s.Middle}>
            <RouterLink to="/about">
              <h5>{t["header.about"]}</h5>
            </RouterLink>
          </div>
          <div className={s.Right}>
            <Button variant="ghost">
              <Icon name="menu" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
