import { useEffect, useState } from 'react';
import MainView from './views/MainView/MainView';
import LoginPage from './views/LoginPage/LoginPage';
import { hookContext } from './context';
import NavBar from './components/NavBar/NavBar';
import '@fontsource/roboto';
import '@fontsource-variable/open-sans';

const App = () => {
  const [userSessionToken, setUserSessionToken] = useState('');
  useEffect(() => {
    (async() => {
      if(!userSessionToken && sessionStorage.getItem("userSessionToken")){
        setUserSessionToken(sessionStorage.getItem('userSessionToken')!);
      }
    })
  })
  return(
    <hookContext.Provider value={{userSessionToken, setUserSessionToken}}>
      {userSessionToken
      ? <MainView />
      : <>
          <NavBar />
          <LoginPage />
        </>}
    </hookContext.Provider>
  )
}

export default App;
