import clsx from "clsx";
import s from "./Button.module.scss";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonVariant =
  | "fill"
  | "surface"
  | "surfacesec"
  | "border"
  | "bordersec"
  | "ghost"
  | "ghostsec";
type ButtonShape = "square" | "round" | "capsule";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  danger?: boolean;
  asChild?: boolean;
}

// Component

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      variant = "fill",
      shape = "square",
      className,
      danger,
      asChild,
      children,
      ...rest
    },
    ref,
  ) => {
    const classes = clsx(
      s.Button,
      danger && s.Danger,
      s[size],
      s[variant],
      s[shape],
      "Button",
      className,
    );

    const Comp = asChild ? Slot : "button";

    return (
      <Comp ref={ref} className={classes} {...rest}>
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export default Button;
