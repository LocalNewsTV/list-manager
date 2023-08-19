import { useContext, useState, useEffect } from 'react';
import { ContentContainer, ViewContainer } from "./mainView.styles"
import axios from 'axios';
import { appContext, userContext } from '../../context';  
import CONSTANTS from '../../constants';
import NavBar from '../../components/NavBar/NavBar';
import TaskList from '../../components/TaskList/TaskList';
import { TaskType } from '../../types/TaskType';

const MainView = () => {
  const userSession = useContext(userContext);
  const [taskType, setTaskType] = useState("");
  const [taskList, setTaskList] = useState<Array<TaskType>>([]);
  if(!userSession) {
    throw new Error('MainView being used without a userContextProvider');
  }
  const { userSessionToken } = userSession;
  useEffect(() => {
    (async() => {
      if(userSessionToken !== "" && taskType !== ""){
        const config = {
          headers: {
            Authorization: `Bearer ${userSessionToken}`,
          },
        }
        const { data } = await axios.post(`${CONSTANTS.BACKEND_URL}/api/listItems`, { listName: taskType}, config)
        setTaskList(data);
      }
    })();
  }, [userSessionToken, taskType]);

  return (
    <appContext.Provider value={{taskType, setTaskType, taskList, setTaskList}}>
      <ViewContainer>
        <NavBar />
        <ContentContainer>
          <TaskList />
        </ContentContainer>
      </ViewContainer>
    </appContext.Provider>
  );
}

export default MainView;
