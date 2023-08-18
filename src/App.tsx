import { useEffect, useState } from 'react';
import MainView from './views/MainView/MainView';
import LoginPage from './views/LoginPage/LoginPage';
import { hookContext } from './context';
import NavBar from './components/NavBar/NavBar';
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
    <hookContext.Provider value={{userSessionToken, setUserSessionToken}}>
      <NavBar />
      {userSessionToken
      ? <MainView />
      : <>
          <LoginPage
            setUserSessionToken={setUserSessionToken}
          />
        </>}
    </hookContext.Provider>
  )
}

export default App;
