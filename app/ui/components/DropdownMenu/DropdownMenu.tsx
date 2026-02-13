import * as Radix from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import type { FC, ReactNode, ComponentPropsWithoutRef } from "react";
import s from "./DropdownMenu.module.scss";
import Icon, { type IconName } from "../../icons";

// Root

interface DropdownMenuProps extends ComponentPropsWithoutRef<
  typeof Radix.Root
> {
  trigger: ReactNode;
  children?: ReactNode;
  className?: string;
  side?: ComponentPropsWithoutRef<typeof Radix.Content>["side"];
  align?: ComponentPropsWithoutRef<typeof Radix.Content>["align"];
  sideOffset?: number;
  alignOffset?: number;
  arrow?: boolean;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  trigger,
  children,
  className,
  side = "bottom",
  align = "center",
  sideOffset = 4, //todo: replace to rem units
  alignOffset = 0,
  arrow = false,
  ...props
}) => {
  return (
    <Radix.Root {...props}>
      <Radix.Trigger asChild>{trigger}</Radix.Trigger>

      <Radix.Portal>
        <Radix.Content
          className={clsx(s.dropdown, "dropdown", className)}
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}

          {arrow && <Radix.Arrow className={s.arrow} />}
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
};

// Item

interface DropdownMenuItemProps extends ComponentPropsWithoutRef<
  typeof Radix.Item
> {
  icon?: IconName;
  className?: string;
  text: string;
  danger?: boolean;
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  icon,
  className,
  text,
  danger = false,
  ...props
}) => {
  return (
    <Radix.Item
      className={clsx(s.dropdownItem, className, danger && s.danger)}
      {...props}
    >
      {icon && <Icon name={icon} />}
      <span className={s.itemText}>{text}</span>
    </Radix.Item>
  );
};

// Separator

const DropdownMenuSeparator: FC<
  ComponentPropsWithoutRef<typeof Radix.Separator>
> = ({ className, ...props }) => (
  <Radix.Separator className={clsx(s.separator, className)} {...props} />
);
