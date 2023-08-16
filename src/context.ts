import { createContext } from "react";

interface appContext {
  userSessionToken: string;
  setUserSessionToken: (arg: string) => void; 
}
export const hookContext = createContext<appContext | undefined>(undefined);
