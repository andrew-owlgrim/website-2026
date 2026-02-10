import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";

import s from "./select.module.scss";
import Icon from "@/ui/icons";

// Select

type Shape = "square" | "round";

type RootProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  placeholder?: string;
  className?: string;
  shape?: Shape;
};

export function Select({
  children,
  placeholder,
  className,
  shape = "square",
  ...props
}: RootProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className={clsx(s.Select, s[shape], className)}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <Icon name="chevronDown" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={s.Content}
          position="popper"
          sideOffset={4} //todo: replace to rem units
        >
          <SelectPrimitive.Viewport className={s.viewport}>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

// Item

type ItemProps = {
  value: string;
  text: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export const SelectItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ value, text, className, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      value={value}
      className={clsx(s.Item, className)}
      {...props}
    >
      <SelectPrimitive.ItemText className={s.Text}>
        {text}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
);

SelectItem.displayName = "SelectItem";
