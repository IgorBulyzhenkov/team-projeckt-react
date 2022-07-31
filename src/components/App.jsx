import { Routes, Route, useSearchParams, Navigate } from 'react-router-dom';
import { createContext } from 'react';
import { useEffect, lazy, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RingLoader from "react-spinners/RingLoader"
import {
  useRefreshUserMutation,
  useLazyGetUserDataQuery,
} from 'redux/kapustaAPI';
import { getSid, getIsLoggedIn, getWidth } from 'redux/selectors';
import { setUser, setWidth } from 'redux/reducer';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

// import { useRef } from 'react';

import { darkThemeStyles } from 'services/theme-styles';
// import ActionModal from './ActionModal';

import s from './App.module.css';

export const ThemeContext = createContext(null)


const Header = lazy(() => import('./Header' /* webpackChunkName: "header" */));

const AuthorizationPage = lazy(() =>
  import('pages/AuthorizationPage' /* webpackChunkName: "authorization" */)
);
const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home" */)
);
const ReportPage = lazy(() =>
  import('pages/ReportPage' /* webpackChunkName: "report" */)
);

export const App = () => {
//  const firstRender = useRef(true)
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const [refreshUser] = useRefreshUserMutation();
  const [getUserData] = useLazyGetUserDataQuery();
  const sid = useSelector(getSid);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const width = useSelector(getWidth);

const [theme, setTheme] = useState('light')  

const toggleTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark")
  localStorage.setItem('theme', JSON.stringify(theme))  
}


const themeStyle = theme === "dark" ? darkThemeStyles.basic : {}


  //====================динамически меняет ширину и позволяет ререндер компонентов=========================================
  const getWindowWidth = () => window.innerWidth;

  const [widthPx, setWidthPx] = useState(getWindowWidth());
  const changeWidthState = (width, currentWidth) => {
    if (currentWidth < 768 && width !== 'mobile') {
      dispatch(setWidth({ width: 'mobile' }));
      return;
    }
    if (currentWidth >= 768 && width !== 'tablet') {
      dispatch(setWidth({ width: 'tablet' }));
      return;
    }
  };
  changeWidthState(width, widthPx);
  useEffect(() => {
    function handleResize() {
      const windowWidth = getWindowWidth();
      windowWidth && setWidthPx(windowWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  //============================================================================

  useEffect(()=> {
    const storedTheme = JSON.parse(localStorage.getItem('theme'))
    if (storedTheme === "light")
    {setTheme("dark")} else {setTheme('light')}
  },[])

  

  useEffect(() => {
    if (searchParams.get('accessToken')) {
      const token = searchParams.get('accessToken');
      const refreshToken = searchParams.get('refreshToken');
      const sid = searchParams.get('sid');
      dispatch(
        setUser({
          token,
          refreshToken,
          sid,
        })
      );
      getUserData()
        .unwrap()
        .then(data => {
          dispatch(
            setUser({
              email: data.email,
              balance: data.balance,
            })
          );
        });
    }

    if (sid && !isLoggedIn) {
      refreshUser(sid)
        .unwrap()
        .then(data => {
          dispatch(
            setUser({
              token: data.newAccessToken,
              refreshToken: data.newRefreshToken,
              sid: data.newSid,
            })
          );
        })
        .then(() =>
          getUserData()
            .unwrap()
            .then(data =>
              dispatch(
                setUser({
                  email: data.email,
                  balance: data.balance,
                })
              )
            )
        );
      return;
    }
  }, [dispatch, getUserData, isLoggedIn, refreshUser, sid, searchParams]);

  return (
    <ThemeContext.Provider value={theme}>
    <div className={s.app_container}>
      <Suspense fallback={<RingLoader color="#ff511d" size={100}/>}>
        {/* <ActionModal/> */}
        <Header toggleTheme={toggleTheme}/>

        <Routes>
          <Route
            path="/authorization"
            element={
              <PublicRoute>
                <AuthorizationPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <div className={s.back} style={themeStyle}>
                  <HomePage />
                </div>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/report"
            element={
              <PrivateRoute>
                <div className={s.back} style={themeStyle}>
                  <ReportPage />
                </div>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/authorization" />}></Route>
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
    </ThemeContext.Provider>
  );
};
