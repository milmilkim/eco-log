import GlobalStyle from './components/GlobalStyle';
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { useRecoilState } from 'recoil';
import { recoilLoginState, recoilMyProfileState } from './state/recoilLoginState';
import { useEffect } from 'react';

import useAxios from './config/useAxios';

function App() {
  const [, setIsLogin] = useRecoilState(recoilLoginState);
  const [, setMyProfile] = useRecoilState(recoilMyProfileState);

  const axios = useAxios();

  useEffect(() => {
    (async () => {
      const token = window.localStorage.getItem('token') || null;
      if (token) {
        const { data } = await axios.get('/api/me');
        setIsLogin(true);
        setMyProfile(data);
      }
    })();
  }, [setMyProfile, setIsLogin, axios]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
