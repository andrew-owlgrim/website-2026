import { createContext, useContext } from "react";
import { useTheme } from "./useTheme";
// import { useLocale } from "./useLocale";
// import { useScreen } from "./useScreen";

const UIContext = createContext<any>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  // const locale = useLocale();
  // const screen = useScreen();

  return (
    <UIContext.Provider value={{ ...theme }}>{children}</UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
