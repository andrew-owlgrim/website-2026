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

function Header() {
  const { theme, setTheme } = useUI();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={clsx("page-block", s.Header)}>
      <div className={s.Content}>
        <div className={s.Left}>
          <Button variant="ghost" size="sm" asChild>
            <RouterLink to={"/"}>
              <Logo className={s.Logo} />
            </RouterLink>
          </Button>
          <Icon name="chevron-right" className={s.BreadCrumbs_Chevron} />
          <Button variant="ghost" size="sm" asChild>
            <RouterLink to="/about">
              <span>About me</span>
            </RouterLink>
          </Button>
        </div>
        <Navbar>
          <Link href="#background">Background</Link>
          <Link href="#skills">Skills & Stack</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#manifesto">Manifesto</Link>
          <Link href="#contact">Contact</Link>
        </Navbar>
        <div className={s.Right}>
          <DropdownMenu
            trigger={
              <Button size="sm" variant="ghost">
                <Icon name="globe" />
              </Button>
            }
          >
            <DropdownMenuItem text="Eng" />
            <DropdownMenuItem text="Укр" />
            <DropdownMenuItem text="Рус" />
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
