import { Routes, Route, useSearchParams, Navigate } from 'react-router-dom';

import { useEffect, lazy, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useRefreshUserMutation,
  useLazyGetUserDataQuery,
} from 'redux/kapustaAPI';
import { getSid, getIsLoggedIn, getWidth } from 'redux/selectors';
import { setUser, setWidth } from 'redux/reducer';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';
import SkeletonReport from './Skeleton/SkeletonReport';
import SkeletonHeader from './Skeleton/SkeletonHeader';
// import ActionModal from './ActionModal';
import s from './App.module.css';

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
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const [refreshUser] = useRefreshUserMutation();
  const [getUserData] = useLazyGetUserDataQuery();
  const sid = useSelector(getSid);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const width = useSelector(getWidth);
  //====================динамически меняет ширину и позволяет ререндер компонентов=========================================
  function getWindowWidth() {
    return window.innerWidth;
  }
  const [widthPx, setWidthPx] = useState(getWindowWidth());
  const changeWidthState = (width, currentWidth) => {
    if (currentWidth <= 768 && width !== 'mobile') {
      dispatch(setWidth({ width: 'mobile' }));
    }
    if (currentWidth > 768 && width !== 'tablet') {
      dispatch(setWidth({ width: 'tablet' }));
    }
  };
  changeWidthState(width, widthPx);
  useEffect(() => {
    function handleResize() {
      setWidthPx(getWindowWidth());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, widthPx]);
  //============================================================================
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
  }, [
    dispatch,
    getUserData,
    isLoggedIn,
    refreshUser,
    sid,
    searchParams,
    width,
  ]);

  return (
    <div>
      <Suspense fallback={<>...loading</>}>
        {/* <ActionModal/> */}
        <Suspense fallback={<SkeletonHeader />}>
          <Header />
        </Suspense>
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
              <Suspense fallback={<SkeletonReport />}>
                <PrivateRoute>
                  <div className={s.back}>
                    <HomePage />
                  </div>
                </PrivateRoute>
              </Suspense>
            }
          ></Route>

          <Route
            path="/report"
            element={
              <PrivateRoute>
                <div className={s.back}>
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
  );
};
