import { useContext } from 'react';
import axios from 'axios';
import { TaskType } from "../../types/TaskType";
import { Button, DateData, DeleteData, Image, ItemData, Row } from "./taskItem.styles";
import deleteIcon from '/Cancel.svg';
import { appContext, userContext } from '../../context';
import CONSTANTS from '../../constants';

type PropTypes = {
  item: TaskType;
}

const TaskItem = ({item}: PropTypes) => {
  const userSession = useContext(userContext);
  const context = useContext(appContext);
  if(!context){throw new Error('TaskItem used without appContext Provider')}
  if(!userSession){throw new Error('TaskItem used without userContext Provider')}
  const { userSessionToken } = userSession;
  const { taskList, setTaskList } = context;

  const handleDelete = async (id: string) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${userSessionToken}`
        },
        data: {
          "id": id
        }
      }
      const response = await axios.delete(`${CONSTANTS.BACKEND_URL}/api/list`, config);
      if (response.status === 200) {
        const removalID = taskList.findIndex(item => item.id === id);
        if (removalID !== -1){
          const temp: Array<TaskType> = [...taskList];
          temp.splice(removalID, 1);
          setTaskList(temp);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <Row>
      <ItemData>{item.content.item}</ItemData>
      <DateData>{new Date(item.content.date).toDateString()}</DateData>
      <DeleteData>
        <Button
          onClick={()=>handleDelete(item.id)}
        >
          <Image src={deleteIcon} />
        </Button>
      </DeleteData>
    </Row>
  )
}

export default TaskItem;
