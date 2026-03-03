import { useEffect, useLayoutEffect, useState } from "react";

// Const & Types

export type Theme = "light" | "dark";

const KEY = "theme";

// Utils

function detectTheme(): Theme {
  return (
    (localStorage.getItem(KEY) as Theme) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}

// Hook

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  // init
  useLayoutEffect(() => {
    setTheme(detectTheme());
  }, []);

  // apply & save
  useEffect(() => {
    localStorage.setItem(KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  //
  return {
    theme,
    setTheme,
  };
}
