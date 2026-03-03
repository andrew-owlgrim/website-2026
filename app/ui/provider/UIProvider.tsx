import { createContext, useContext } from "react";
import { useTheme } from "./useTheme";
import { useModals } from "./useModals";
import { useScreen } from "./useScreen";

const UIContext = createContext<any>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const modals = useModals();
  const screen = useScreen();

  return (
    <UIContext.Provider value={{ ...theme, ...modals, ...screen }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
