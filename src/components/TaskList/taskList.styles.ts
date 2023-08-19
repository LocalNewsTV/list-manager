import styled from "@emotion/styled";
import mq from "../../utilities/mq";


type ExperienceProps = {
  selected: boolean;
};

export const StyledHeader = styled.h1`
  margin-bottom: 17pt;
  font-size: 36pt;
`;

export const StyledP = styled.p`
  font-size: 16pt;
`;

export const TaskContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 500pt;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  max-width: ${mq.tablet};
  @media (min-width: ${mq.tablet}){
    flex-direction: row;
  }
`;

export const ListTabs = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  @media (min-width: ${mq.tablet}){
    width: auto;
  }
`;

export const ListItemSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${mq.tablet}){
    padding-left: 1.25em;
  }
`;

export const ListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding-left: 10pt;
  font-size: 16pt;
`;

export const List = styled.ul`
display: flex;
  list-style-type: none;
  max-width: 100%;
  margin: 0;
  padding: 0;
  height: auto;
  margin-bottom: 1em;
  @media (min-width: ${mq.tablet}){
    flex-direction: column;
    overflow-x: auto;
  }
`;

export const ListItem = styled.li<ExperienceProps>`
  display: flex;
  white-space: nowrap;
  width: 100%;
  color: ${({selected}) => (selected ? 'darkred' : 'inherit')};
  font-size: 11pt;
  align-items: center;
  padding: 0.25em 0.5em;
  height: 2em;
  margin: 0;
  background-color: ${({selected}) => (selected ? '#EAEAEA' : 'inherit')};
  &:hover {
    transition: 0.35s ease-in;
    background-color: lightblue;
    cursor: pointer;
  }
  @media (min-width: ${mq.tablet}){
    padding: 0.5em;
    border-radius: 0 5pt 5pt 0;
    border-left: ${({selected}) => (selected ? `1px solid lightblue` : 'none')};
  }
`;
