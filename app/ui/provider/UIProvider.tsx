import { createContext, useContext } from "react";
import { useTheme } from "./useTheme";
import { useModals } from "./useModals";
import { useScreen } from "./useScreen";
import { useInput } from "./useInput";

const UIContext = createContext<any>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const modals = useModals();
  const screen = useScreen();
  const input = useInput();

  return (
    <UIContext.Provider value={{ ...theme, ...modals, ...screen, input }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
