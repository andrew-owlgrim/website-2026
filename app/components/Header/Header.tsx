import Icon from "@/ui/icons";
import s from "./Header.module.scss";
import Logo from "@/assets/img/logo.svg?react";
import { Navbar, NavbarItem } from "../Navbar/Navbar";
import Link from "@/ui/components/Link/Link";
import Button from "@/ui/components/Button/Button";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "@/ui/components/DropdownMenu/DropdownMenu";
import { Link as RouterLink } from "react-router";
import clsx from "clsx";
import { useUI } from "@/ui/provider/UIProvider";
import { useLocale } from "@/i18n";

function Header() {
  const { t, l, switchLocale } = useLocale();

  // theme

  const { theme, setTheme } = useUI();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //

  return (
    <header className={clsx("page-block", s.Header)}>
      <div className={s.Content}>
        <div className={s.Left}>
          <Button variant="ghost" size="sm" asChild>
            <RouterLink to={l("/")}>
              <Logo className={s.Logo} />
            </RouterLink>
          </Button>
          <Icon name="chevron-right" className={s.BreadCrumbs_Chevron} />
          <Button variant="ghost" size="sm" asChild>
            <RouterLink to={l("/about")}>
              <span>{t["header.about"]}</span>
            </RouterLink>
          </Button>
        </div>
        <Navbar>
          <Link href="#background">{t["header.background"]}</Link>
          <Link href="#skills">{t["header.skills"]}</Link>
          <Link href="#portfolio">{t["header.portfolio"]}</Link>
          <Link href="#manifesto">{t["header.manifesto"]}</Link>
          <Link href="#contact">{t["header.contact"]}</Link>
        </Navbar>
        <div className={s.Right}>
          <DropdownMenu
            trigger={
              <Button size="sm" variant="ghost">
                <Icon name="globe" />
              </Button>
            }
          >
            <DropdownMenuItem text="Eng" onClick={() => switchLocale("en")} />
            <DropdownMenuItem text="Укр" onClick={() => switchLocale("uk")} />
            <DropdownMenuItem text="Рус" onClick={() => switchLocale("ru")} />
          </DropdownMenu>

          <Button size="sm" variant="ghost" onClick={switchTheme}>
            <Icon name={theme === "light" ? "moon" : "sun"} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
