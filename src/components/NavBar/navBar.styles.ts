/**
 * @desc   Styled Components for Header section
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { navBar, sectionAccent } from '../../assets/theming';

export const AccentSpan = styled.span`
  color: ${sectionAccent};
  font-size: 10pt;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 1em;
  justify-content: center;
  @media (min-width: ${mq.tablet}){
    justify-content: space-evenly;
    width: auto;
  }
`;


export const HeaderCont = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 3;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100svw;
  min-height: 35pt;
  background-color: ${navBar};
  margin: 0;
  border-bottom: 1px solid black;
  @media (min-width: ${mq.tablet}){
    flex-direction: row;
    padding: 0 1.5em;
    height: 45pt;
  }
`;

export const Logo = styled.img`
  height: 30pt;
  margin: 0 8pt 0 4pt;
`;

export const MainCont = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media(min-width: ${mq.tablet}){
    flex-direction: row;
    width: auto;
  }
`;

export const Title = styled.h1`
  padding: 0;
  font-size: 20pt;
  color: #16161D;
  margin: 0;
  @media (min-width: ${mq.tablet}){
    font-size: 24pt;
  }
`;
