import React from "react";
import s from "./Link.module.scss";
import { Link as RouterLink } from "react-router";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  to?: string;
  asChild?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, href, asChild, className, children, ...props }, ref) => {
    const classes = clsx(s.link, "link", className);

    // режим Slot
    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    // react-router
    if (to) {
      return (
        <RouterLink ref={ref as any} to={to} className={classes} {...props}>
          {children}
        </RouterLink>
      );
    }

    // обычная ссылка
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";

export default Link;
