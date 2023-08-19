import { useEffect, useState } from 'react';
import MainView from './views/MainView/MainView';
import LoginPage from './views/LoginPage/LoginPage';
import { userContext } from './context';
import '@fontsource/roboto';
import '@fontsource-variable/open-sans';
import CONSTANTS from './constants';

const App = () => {
  const [userSessionToken, setUserSessionToken] = useState('');
  useEffect(() => {
    (async () => {
      if(userSessionToken === "" && sessionStorage.getItem(CONSTANTS.SESSION)){
        setUserSessionToken(sessionStorage.getItem(CONSTANTS.SESSION)!);
      }
    })();
  },);
  return(
    <userContext.Provider value={{userSessionToken, setUserSessionToken}}>
      {userSessionToken
      ? <MainView />
      : <>
          <LoginPage
            setUserSessionToken={setUserSessionToken}
          />
        </>}
    </userContext.Provider>
  )
}

export default App;
