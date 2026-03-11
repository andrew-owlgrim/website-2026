import { Dialog, VisuallyHidden } from "radix-ui";
import s from "./MobileMenu.module.scss";
import Button from "@/ui/components/Button/Button";
import Icon from "@/ui/icons";
import Logo from "@/assets/img/logo.svg?react";
import { Navbar, NavbarItem } from "../Navbar/Navbar";
import { SiteSettings } from "../SiteSettings/SiteSettings";
import { useState } from "react";
import { Link } from "react-router";

export default function MobileMenu({
  title,
  sections,
}: {
  title: string;
  sections: string[][];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="sm" className={s.Button}>
          <Icon name="menu" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.Overlay} />
        <Dialog.Content className={s.Content}>
          <VisuallyHidden.Root>
            <Dialog.Title>Menu</Dialog.Title>
            <Dialog.Description>Navigation menu</Dialog.Description>
          </VisuallyHidden.Root>

          <div className={s.Header}>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Logo className={s.Logo} />
              </Link>
            </Button>
            <h5>{title}</h5>
            <Dialog.Close asChild>
              <Button variant="ghost" size="sm">
                <Icon name="x" />
              </Button>
            </Dialog.Close>
          </div>

          <Navbar className={s.Main}>
            {sections.map((section, i) => (
              <NavbarItem
                key={i}
                id={section[0]}
                onClick={() => setOpen(false)}
              >
                {section[1]}
              </NavbarItem>
            ))}
          </Navbar>

          <SiteSettings size="lg" className={s.Footer} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
