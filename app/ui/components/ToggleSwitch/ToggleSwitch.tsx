import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import clsx from "clsx";

import s from "./ToggleSwitch.module.scss";

// Root

type Shape = "square" | "round";

type ToggleSwitchProps = Omit<
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>,
  "type" | "onValueChange"
> & {
  value: string;
  onValueChange: (v: string) => void;
  className?: string;
  shape?: Shape;
};

export function ToggleSwitch({
  value,
  onValueChange,
  children,
  className,
  shape = "square",
  ...props
}: ToggleSwitchProps) {
  const items = React.Children.toArray(children) as React.ReactElement[];

  if (process.env.NODE_ENV !== "production" && items.length !== 2) {
    console.warn("ToggleSwitch expects exactly 2 ToggleSwitchItem children");
  }

  const values = items.map(
    (child) => (child as React.ReactElement<{ value: string }>).props.value,
  );

  const toggle = () => {
    const next = value === values[0] ? values[1] : values[0];
    onValueChange(next);
  };

  // Remove defaultValue if it's an array to avoid type error
  const { defaultValue, ...restProps } = props;
  const safeDefaultValue =
    typeof defaultValue === "string" || defaultValue === undefined
      ? defaultValue
      : undefined;

  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={onValueChange}
      className={clsx(s.ToggleSwitch, s[shape], className)}
      {...restProps}
      {...(safeDefaultValue !== undefined
        ? { defaultValue: safeDefaultValue }
        : {})}
      onClick={toggle}
    >
      {children}
    </ToggleGroup.Root>
  );
}

// Item

type ItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>;

export const ToggleSwitchItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroup.Item>,
  ItemProps
>(({ className, ...props }, ref) => (
  <ToggleGroup.Item ref={ref} className={clsx(s.Item, className)} {...props} />
));

ToggleSwitchItem.displayName = "ToggleSwitchItem";
