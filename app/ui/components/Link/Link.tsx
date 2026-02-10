import type React from "react";
import s from "./Link.module.scss";
import { Link as RouterLink } from "react-router";
import clsx from "clsx";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

const Link: React.FC<LinkProps> = ({
  to,
  href,
  className,
  children,
  ...props
}) => {
  const classList = clsx(s.link, className);
  if (to)
    return (
      <RouterLink to={to} className={classList} {...props}>
        {children}
      </RouterLink>
    );
  else
    return (
      <a href={href} className={classList} {...props}>
        <span>{children}</span>
      </a>
    );
};

export default Link;
