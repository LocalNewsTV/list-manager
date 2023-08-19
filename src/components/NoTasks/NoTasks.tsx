import { useContext } from 'react';
import { Container, StyledHeader, StyledP } from "./noTasks.styles";
import { appContext } from "../../context";
const NoTasks = () => { 
  const context = useContext(appContext);
  if(!context){
    throw new Error("NoTasks being used without an appContextProvider")
  }
  const { taskType } = context;

  return (
    <>
      {taskType !== ""
      ? <Container>
        <StyledHeader>
          All Tasks are Complete
        </StyledHeader>
        <StyledP>
          You can change that by adding to your {taskType} list
        </StyledP>
      </Container>
      : <Container>
        <StyledHeader>
          No List Selected
        </StyledHeader>
        <StyledP>
          Select or create a list to get started
        </StyledP>
      </Container>
  }
    </>
  )
}

export default NoTasks;
