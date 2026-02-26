import { useEffect, useState } from "react";

// Const & Types

export type Theme = "light" | "dark" | "system";

const KEY = "theme";

// Utils

function resolve(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function apply(theme: Theme) {
  const resolved = resolve(theme);
  document.documentElement.dataset.theme = resolved;
}

// Hook

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // apply & save
  useEffect(() => {
    if (theme === null) return;
    localStorage.setItem(KEY, theme);
    apply(theme);
  }, [theme]);

  // if system -> listen to system change
  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => apply("system");

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  //
  return {
    theme,
    setTheme,
  };
}
