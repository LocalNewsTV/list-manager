import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { StyledButton, TaskContainer } from "./addTaskBar.styles";
import { appContext, userContext } from "../../context";
import CONSTANTS from "../../constants";
import axios from "axios";
import { TaskType } from "../../types/TaskType";

const AddTaskBar = () => {
  const [newItem, setNewItem] = useState<string>("");
  const context = useContext(appContext);
  const userSession = useContext(userContext);
  if(!context){throw new Error("Using AddTaskBar without an appContext Provider");}
  if(!userSession){throw new Error("Using AddTaskBar without a userContext Provider");}
  const { taskList, taskType, setTaskList} = context;
  const {userSessionToken } = userSession;

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => setNewItem(event.target.value);
  const handleSubmit = async () => {
    const config = {
      headers: {
        'Authorization': `Bearer ${userSessionToken}`
      }
    }
    const body = {
      'listName': taskType,
      content: {
        item: newItem
      }
    }
    await axios.post(`${CONSTANTS.BACKEND_URL}/api/list`, body, config)
      .then((response) => {
        if(response.status === 201) {
          setTaskList([...taskList, response.data]);
          setNewItem("");
        }
      })
      .catch((err) => console.log("Just us chickens", err));
  }
  const handleExport = (): void => {
    let list: string = taskType + " List:\n\n";
    try {
      taskList.forEach((item: TaskType) => list += "- " + item.content.item + "\n");
      navigator.clipboard.writeText(list);
    } catch (ex) {
      alert(`Writing to clipboard failed: \n ${list}\n you are seeing this alert because you're running this page on a non-HTTPS connection`);
    }
  }
const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }
  return (
    <TaskContainer>
      <TextField 
        placeholder="Enter new item..."
        onChange={handleTextChange}
        disabled={taskType === ""}
        value={newItem}
        onKeyUp={handleKeyUp}
        error={newItem.length > 100}
        helperText={newItem.length > 100 ? `${newItem.length}/100`: ""}
      />
      <StyledButton 
        variant="outlined"
        disabled={newItem === "" && newItem.length <= 100}
        onClick={handleSubmit}
      >
        Submit
      </StyledButton>
      <StyledButton 
        variant="outlined"
        disabled={taskList.length === 0}
        onClick={handleExport}
      >
        Copy List
      </StyledButton>
    </TaskContainer>
  )
}

export default AddTaskBar;
