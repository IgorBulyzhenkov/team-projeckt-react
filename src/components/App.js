import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRefreshUserMutation, useLazyGetUserDataQuery } from 'redux/kapustaAPI';
import { getSid, getIsLoggedIn } from 'redux/selectors';
import { setUser, setWidth } from 'redux/reducer';
import Test from './test/test';
// import ReportPage from 'pages/ReportPage';


export const App = () => {
  const dispatch = useDispatch();
  const [refreshUser] = useRefreshUserMutation();
  const [getUserData] = useLazyGetUserDataQuery();
  const sid = useSelector(getSid);
  const isLoggedIn = useSelector(getIsLoggedIn);
  
  useEffect(()=>{
    if(window.innerWidth<=768){
      dispatch(setWidth({width:'mobile'}))
  }
  if(window.innerWidth>768){
      dispatch(setWidth({width:'tablet'}))
  }
  if(sid && !isLoggedIn){
    // const user = JSON.parse(localStorage.getItem('persist:user'))
    // console.log(user?.token)
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
              balance: data.balance
            })
          )
        )
    );
    return
  } 
  },[dispatch, getUserData, isLoggedIn, refreshUser, sid])

  

  return (
    <div>
      {/* <ReportPage /> */}
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Test />
    </div>
  );
};
