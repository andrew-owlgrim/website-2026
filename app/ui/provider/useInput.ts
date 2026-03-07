import { useEffect, useState } from "react";

export type InputType = "keyboard" | "pointer";

export function useInput() {
  const [input, setInput] = useState<InputType>("pointer");

  useEffect(() => {
    const setKeyboard = () => {
      document.body.dataset.input = "keyboard";
      setInput("keyboard");
    };

    const setPointer = () => {
      document.body.dataset.input = "pointer";
      setInput("pointer");
    };

    window.addEventListener("keydown", setKeyboard);
    window.addEventListener("pointerdown", setPointer);

    // initial
    document.body.dataset.input = "pointer";

    return () => {
      window.removeEventListener("keydown", setKeyboard);
      window.removeEventListener("pointerdown", setPointer);
    };
  }, []);

  return input;
}
