/**
 * @desc   Header component for the Portfolio Website
 * @author LocalNewsTV
 */
import { useContext } from "react";
import { Banner, HeaderCont, MainCont, Logo, Title } from "./navBar.styles";
import { userContext } from "../../context";
import { Button } from "@mui/material";

/**
 * @desc Main component Portfolio Header
 */
const NavBar = () => {
  const session = useContext(userContext);
  if(!session){throw new Error("NavBar being used without context provider")}
  const { setUserSessionToken } = session;
  const handleLogout = () => {
    sessionStorage.clear();
    setUserSessionToken("");
  }
  return (
    <HeaderCont>
      <MainCont>
        <Banner>
          <Logo src="/Logo.png" alt="List Manager Logo" />
          <Title>List Manager</Title>
        </Banner>
        <Button
          onClick={handleLogout}
          variant="outlined"
        >
          Log Out
        </Button>
      </MainCont>
    </HeaderCont>
  );
}

export default NavBar;
