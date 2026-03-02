import { Dialog, VisuallyHidden } from "radix-ui";
import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import type React from "react";
import { AnimatePresence, motion } from "motion/react";
import s from "./Modal.module.scss";
import clsx from "clsx";
import { useUI } from "../../provider/UIProvider";
import Button from "../Button/Button";
import Icon from "@/ui/icons";

// Modal

type ModalProps = ComponentPropsWithoutRef<typeof Dialog.Content> & {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  closer?: boolean;
  title?: string;
  description?: string;
};

const Modal = ({
  className,
  children,
  id,
  closer = false,
  title,
  description,
  ...props
}: ModalProps) => {
  const { register, unregister, isOpen, closeModal } = useUI();

  useEffect(() => {
    register(id);
    return () => unregister(id);
  }, [id]);

  const open = isOpen(id);

  const handleOpenChange = (next: boolean) => {
    if (!next) closeModal(id);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay asChild>
                <motion.div
                  className={s.overlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </Dialog.Overlay>
              <Dialog.Content className={s.content} {...props}>
                {title && (
                  <VisuallyHidden.Root>
                    <Dialog.Title>{title}</Dialog.Title>
                    {description && (
                      <Dialog.Description>{description}</Dialog.Description>
                    )}
                  </VisuallyHidden.Root>
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={clsx(s.contentCard, className)}
                >
                  {closer && (
                    <Dialog.Close asChild>
                      <Button
                        size="xs"
                        variant="surface"
                        shape="round"
                        className={s.closer}
                      >
                        <Icon name="x" />
                      </Button>
                    </Dialog.Close>
                  )}
                  {children}
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Export

export default Modal;
