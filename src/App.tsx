import { useEffect, useState } from 'react';
import MainView from './views/MainView/MainView';
import LoginPage from './views/LoginPage/LoginPage';
import { hookContext } from './context';

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
      : <LoginPage />}
    </hookContext.Provider>
  )
}

export default App;
