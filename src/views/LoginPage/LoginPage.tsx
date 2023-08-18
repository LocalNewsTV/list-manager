import { Button } from "@mui/material";
import axios from 'axios';
import { LoginContainer, ViewContainer, StyledForm, StyledTextField, ErrorP } from "./loginPage.styles";
import { useState, KeyboardEvent } from 'react';
import CONSTANTS from "../../constants";

type PropType = {
  setUserSessionToken: (arg: string) => void;
}
const LoginPage = ({ setUserSessionToken }: PropType) => {
  const [login, setLogin] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const clearFields = () => {
    setPassword("");
    setUsername("");
    setEmail("");
  }
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      login ? LoginHandler() : RegisterHandler();
    }
  }
  const LoginHandler = async () => {
    if(username && password){
      try {
        const payload = {
          username: username,
          password: password,
        };
        const response = await axios.post(`${CONSTANTS.BACKEND_URL}/api/login`, payload);
        console.log(response);
        if(response.status === 200 && response.data.token){
          setUserSessionToken(response.data.token);
          sessionStorage.setItem(CONSTANTS.SESSION, response.data.token);
          clearFields();
        } else { 
          throw Error("Bad Credentials"); }
      } catch(ex) {
        setErrorMessage("Invalid username or password");
        console.log(ex);
        setUserSessionToken("");
        setPassword("");
      }
    }
  }
  const LoginRegisterChangeHandler = () => {
    clearFields();
    setLogin(!login);
  }
  const RegisterHandler = async () => {
    if(username && password && email) {
      const payload = {
        username: username,
        password: password,
        email: email,
      };
      const response = await axios.post(CONSTANTS.BACKEND_URL, payload);
      if (response.status === 200){
        setErrorMessage("Username or email already in use");
      } else if (response.status === 201) {
        setLogin(true);
      }
    }
  }

  return (
    <ViewContainer>
      <LoginContainer>
        <StyledForm>

          <StyledTextField 
            label="Username"
            variant="standard"
            type="text"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            onKeyUp={handleKeyUp}
            required
          />
          {!login && <StyledTextField
            label="Email Address"
            variant="standard"
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            onKeyUp={handleKeyUp}
            required
          />}
          <StyledTextField
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            onKeyUp={handleKeyUp}
            required
          />
          <ErrorP>{errorMessage}</ErrorP>
          <Button
            variant="contained"
            style={{'marginTop': '8pt'}}
            onClick={login ? LoginHandler : RegisterHandler}
          >
            {login ? "Login" : "Register"}
          </Button>
        </StyledForm>
        <Button
          color="info"
          variant="text"
          onClick={LoginRegisterChangeHandler}
          size="small"
          style={{'margin': '8pt 0'}}
        >
          {login ? "Don't Have an account? Register Here" : "Have an account? Login Here!"}
        </Button>
      </LoginContainer>
    </ViewContainer>
  );
}
export default LoginPage;
