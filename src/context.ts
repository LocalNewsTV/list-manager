import { createContext } from "react";
import { TaskType } from "./types/TaskType";

interface userContextType {
  userSessionToken: string;
  setUserSessionToken: (arg: string) => void;
}

interface appContextType {
  taskList: Array<TaskType>;
  setTaskList: (arg: Array<TaskType>) => void;
  taskType: string;
  setTaskType: (arg: string) => void;
}
export const appContext = createContext<appContextType | undefined>(undefined);
export const userContext = createContext<userContextType | undefined>(undefined);
