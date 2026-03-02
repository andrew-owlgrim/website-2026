import { useCallback, useMemo, useState } from "react";

export type ModalId = string;

export function useModals() {
  const [stack, setStack] = useState<ModalId[]>([]);
  const [registered, setRegistered] = useState<Set<ModalId>>(new Set());

  /* ---------------- register ---------------- */

  const register = useCallback((id: ModalId) => {
    setRegistered((prev) => new Set(prev).add(id));
  }, []);

  const unregister = useCallback((id: ModalId) => {
    setRegistered((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

    // если вдруг была открыта — чистим стек
    setStack((prev) => prev.filter((m) => m !== id));
  }, []);

  /* ---------------- open/close ---------------- */

  const openModal = useCallback(
    (id: ModalId) => {
      if (!registered.has(id)) {
        throw new Error(`Modal "${id}" is not mounted/registered`);
      }

      setStack((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    [registered],
  );

  const closeModal = useCallback((id?: ModalId) => {
    setStack((prev) => {
      if (!prev.length) return prev;

      if (!id) return prev.slice(0, -1);

      return prev.filter((m) => m !== id);
    });
  }, []);

  /* ---------------- selectors ---------------- */

  const isOpen = useCallback((id: ModalId) => stack.includes(id), [stack]);

  const activeModal = stack.at(-1) ?? null;

  return useMemo(
    () => ({
      stack,
      activeModal,
      isOpen,
      openModal,
      closeModal,
      register,
      unregister,
    }),
    [stack, activeModal, isOpen, openModal, closeModal, register, unregister],
  );
}
