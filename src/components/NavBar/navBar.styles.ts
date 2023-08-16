/**
 * @desc   Styled Components for Header section
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { navBar, sectionAccent } from '../../assets/theming';

type HeaderProps = {
  menu: boolean;
}
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
    justify-content: flex-start;
    width: auto;
  }
`;

export const Hamburger = styled.button<HeaderProps>`
  height: 27pt;
  padding-top: 4pt;
  width: 27pt;
  color: #16161D;
  border: none;
  transform: rotate(${(props) => (props.menu ? 90 : 0)}deg);
  transition: all 0.25s;
  background: inherit;
  margin: 0 1.5em 0 auto;
  &:hover { cursor: pointer; }
  @media(min-width: ${mq.tablet}){
    display: none;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(min-width: ${mq.tablet}){
    flex-direction: row;
    width: auto;
  }
`;

export const MenuImg = styled.img`
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const NavCont = styled.ul<HeaderProps>`
  display: ${(props) => props.menu ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  @media (min-width: ${mq.tablet}){
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: left;
  }
`;
export const NavItem = styled.li`
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30pt;
  @media (max-width: ${mq.tablet}){
    border-top: 1px solid #b6b7b7;
    &:hover {
      transition: 0.5s ease-in;
      width: 100%;
      border-top: none;
      background-color: #b6b7b7
    }
    &:hover + li {
      transition: 0.5s ease-in;
      border-top: none;
    }
    &:last-child{
      padding-bottom: 5pt;
    }
  }
  @media (min-width: ${mq.tablet}){
    margin-left: 15pt;
    height: auto;
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
