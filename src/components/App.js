import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useRefreshUserMutation,
  useLazyGetUserDataQuery,
} from 'redux/kapustaAPI';
import { getSid, getIsLoggedIn } from 'redux/selectors';
import { setUser, setWidth } from 'redux/reducer';

import HomePage from 'pages/HomePage';
import { ToastContainer } from 'react-toastify';
import Test from './test/test';
import ReportPage from 'pages/ReportPage';
import AuthorizationPage from 'pages/AuthorizationPage';
import Header from './Header';
// import ActionModal from './ActionModal';
import s from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const [refreshUser] = useRefreshUserMutation();
  const [getUserData] = useLazyGetUserDataQuery();
  const sid = useSelector(getSid);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      dispatch(setWidth({ width: 'mobile' }));
    }
    if (window.innerWidth > 768) {
      dispatch(setWidth({ width: 'tablet' }));
    }

    // console.log('1',sid)
    if (sid && !isLoggedIn) {
      // console.log('2',sid)
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
  }, [dispatch, getUserData, isLoggedIn, refreshUser, sid]);

  return (
    <div>
      {/* <ActionModal/> */}
      <Header />
      <AuthorizationPage />
      <div className={s.back}>
        <ReportPage />
      </div>
      <div className={s.back}>
        <HomePage />
      </div>
      <Test />
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>

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
  );
};
