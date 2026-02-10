import { createContext, useContext, useState, type ReactNode } from "react";

const ModalManagerContext = createContext<{
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  isOpen: (id: string) => boolean;
  stack: string[];
} | null>(null);

export const useModalManager = () => {
  const context = useContext(ModalManagerContext);
  if (!context) {
    throw new Error("useModalManager must be used within <ModalManager>");
  }
  return context;
};

export function ModalManager({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<string[]>([]);

  const openModal = (id: string) =>
    setStack((prev) => [...prev.filter((x) => x !== id), id]);
  const closeModal = (id: string) =>
    setStack((prev) => prev.filter((x) => x !== id));
  const isOpen = (id: string) => stack[stack.length - 1] === id;

  return (
    <ModalManagerContext.Provider
      value={{ openModal, closeModal, isOpen, stack }}
    >
      {children}
    </ModalManagerContext.Provider>
  );
}
