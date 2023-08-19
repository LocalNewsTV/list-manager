/**
 * @desc   Header component for the Portfolio Website
 * @author LocalNewsTV
 */
import { useState } from "react";
import { Banner, HeaderCont, MainCont, Logo, Hamburger, MenuImg, Title } from "./navBar.styles";
import hamburger from '/Hamburger.svg';
import cancel from '/Cancel.svg';

/**
 * @desc Main component Portfolio Header
 */
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderCont>
      <MainCont>
        <Banner>
          <Logo src="/Logo.png" alt="List Manager Logo" />
          <Title>List Manager</Title>
          <Hamburger
            menu={menu}
            onClick={() => setMenu(!menu)}
            aria-label="Hamburger Menu"
          >
          <MenuImg
            src={menu? cancel : hamburger}
            alt="Menu Button"
          />
          
          </Hamburger>
        </Banner>
      </MainCont>
    </HeaderCont>
  );
}

export default NavBar;
