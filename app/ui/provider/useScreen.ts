import { useEffect, useLayoutEffect, useState } from "react";

type Screen = "mobile" | "tablet" | "desktop";

function readVars() {
  const s = getComputedStyle(document.documentElement);

  return {
    mobile: parseInt(s.getPropertyValue("--mobile")),
    tablet: parseInt(s.getPropertyValue("--tablet")),
    desktop: parseInt(s.getPropertyValue("--desktop")),
    rem: parseFloat(s.fontSize),
  };
}

function getScreen(): { screen: Screen; rem: number } {
  const { mobile, tablet, desktop, rem } = readVars();

  if (window.matchMedia(`(min-width: ${desktop}px)`).matches)
    return { screen: "desktop", rem };
  if (window.matchMedia(`(min-width: ${tablet}px)`).matches)
    return { screen: "tablet", rem };
  return { screen: "mobile", rem };
}

export function useScreen() {
  const [state, setState] = useState({ screen: "desktop", rem: 16 });

  useLayoutEffect(() => {
    setState(getScreen());
  }, []);

  useEffect(() => {
    const update = () => setState(getScreen());

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return state;
}
