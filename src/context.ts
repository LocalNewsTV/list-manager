import { createContext } from "react";

export type appContextType = {
  userSessionToken: string;
  setUserSessionToken: (arg: string) => void; 
}
export const hookContext = createContext<appContextType | undefined>(undefined);
