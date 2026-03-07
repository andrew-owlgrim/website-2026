import {
  createContext,
  useContext,
  Children,
  isValidElement,
  type MouseEvent,
} from "react";
import { motion } from "motion/react";
import clsx from "clsx";

import { useActiveSection } from "@/hooks/useActiveSection";
import s from "./navbar.module.scss";

// Context

const NavbarContext = createContext<{ active: string }>({ active: "" });

// Root

type NavbarProps = {
  children: React.ReactNode;
  className?: string;
};

export function Navbar({ children, className }: NavbarProps) {
  const ids = Children.toArray(children)
    .filter(isValidElement)
    .map((child: any) => child.props.id);

  const active = useActiveSection(ids);

  return (
    <NavbarContext.Provider value={{ active }}>
      <nav className={clsx(s.Navbar, className)}>{children}</nav>
    </NavbarContext.Provider>
  );
}

// Item

type NavItemProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  onClick?: Function;
};

export function NavbarItem({ id, children, className, onClick }: NavItemProps) {
  const { active } = useContext(NavbarContext);
  const isActive = active === id;

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    onClick?.();
  }

  return (
    <a
      href={`#${id}`}
      className={clsx(s.Item, className, isActive && s.active)}
      onClick={handleClick}
    >
      {children}

      {/* {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className={s.Indicator}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )} */}
    </a>
  );
}
