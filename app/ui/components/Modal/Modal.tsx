import { Dialog, VisuallyHidden } from "radix-ui";
import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import type React from "react";
import { AnimatePresence, motion } from "motion/react";
import s from "./Modal.module.scss";
import clsx from "clsx";
import { useModalManager } from "../ModalManager/ModalManager";
import Button from "../Button/Button";

// Modal

export interface ModalProps
  extends ComponentPropsWithoutRef<typeof Dialog.Content> {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  id?: string;
  showCloser?: boolean;
}

const Modal = ({
  open,
  setOpen = () => {},
  className,
  children,
  title,
  description,
  id,
  showCloser = false,
  ...props
}: ModalProps) => {
  const modalManager = useModalManager();

  // local bufer to defeat state race
  const [localOpen, setLocalOpen] = useState(open ?? false);

  // define if modal controlled by state or by manager
  const isManaged = !!(id && modalManager);
  const isControlled =
    typeof open === "boolean" && typeof setOpen === "function";

  // sync local state
  useEffect(() => {
    if (isManaged && id) {
      const next = modalManager.isOpen(id);
      if (next !== localOpen) setLocalOpen(next);
    } else if (isControlled) {
      if (open !== localOpen) setLocalOpen(open);
    }
  }, [modalManager?.stack, open]);

  // set state on radix interactions
  const handleOpenChange = (next: boolean) => {
    setLocalOpen(next);

    if (isManaged && id) {
      queueMicrotask(() => {
        next ? modalManager.openModal(id) : modalManager.closeModal(id);
      });
    } else if (isControlled && setOpen) {
      setOpen(next);
    }
  };

  return (
    <Dialog.Root open={localOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {localOpen && (
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
                    <Dialog.Description>{description}</Dialog.Description>
                  </VisuallyHidden.Root>
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={clsx(s.contentCard, className)}
                >
                  {showCloser && (
                    <Dialog.Close asChild>
                      <Button
                        size="xs"
                        variant="tertiary"
                        icon="x"
                        className={s.closer}
                      />
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
