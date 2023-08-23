import { useContext, useEffect, useState } from "react";
import { List, ListItem, ListItemSection, ListTable, ListTabs, TableHeader, TaskContainer } from "./taskList.styles";
import { appContext, userContext } from "../../context";
import axios from "axios";
import CONSTANTS from "../../constants";
import { TaskType } from "../../types/TaskType";
import TaskItem from "../TaskItem/TaskItem";
import NoTasks from "../NoTasks/NoTasks";
import AddTaskBar from "../AddTaskBar/AddTaskBar";

const TaskList = () => {
  const [lists, setLists] = useState<Array<string>>([]);
  const context = useContext(appContext);
  const userSession = useContext(userContext);
  if(!context){throw new Error("Using TaskList without AppContext Provider")}
  if(!userSession){throw new Error("Using TaskList without userContext Provider")}
  const { taskList, taskType, setTaskType } = context;
  const { userSessionToken } = userSession;
  const handleListChange = (list: string) => {
    setTaskType(list);
  }
  //Creating a new list for tasks
  const createList = async () => {
    try{
      const newList: string | null = prompt("New List Name:");
      if(newList) {
        const config = {
          headers: {
            'Authorization': `Bearer ${userSessionToken}`
          }
        }
        const response = await axios.patch(`${CONSTANTS.BACKEND_URL}/api/userlists`, {'newItem': newList}, config);
        if(response.status === 201) {
          setLists([...lists, newList]);
          setTaskType(newList);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  }
  // useEffect for user login, populates users lists in app 
  useEffect(() => {
    (async () => {
      const config = {
        headers: {
          'Authorization': `Bearer ${userSessionToken}`
        }
      }
      const { data } = await axios.get(`${CONSTANTS.BACKEND_URL}/api/userlists`, config);
      setLists(data);
    })();
  }, [userSessionToken])

  useEffect

  return (
    <TaskContainer>
      <ListTabs>
        <List>
          {lists.map((item, index) => <ListItem selected={taskType === item} key={index} onClick={() => handleListChange(item)}>{item}</ListItem>)}
          <ListItem key={-1} onClick={createList} selected={false} >+ Create List</ListItem>
        </List>
      </ListTabs>
      <ListItemSection>
        {taskList.length === 0
        ? <NoTasks />
        : <ListTable>
            <thead>
              <tr>
                <TableHeader>Task</TableHeader>
                <TableHeader>Date Posted</TableHeader>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task: TaskType, index: number) => <TaskItem key={index} item={task} />)}
            </tbody>
          </ListTable>}
          <AddTaskBar />
      </ListItemSection>
    </TaskContainer>
  )
}
export default TaskList;
