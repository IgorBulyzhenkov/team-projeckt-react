import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation, useAuthorizeUserMutation, useLazyAuthGoogleUserQuery,useLazyGetUserDataQuery } from "redux/kapustaAPI";
import { setUser } from "redux/reducer";
import s from "./authForm.module.css";
import googleIcon from "../../img/AuthForm/google-symbol.svg";
import { toast } from 'react-toastify';

import { useState } from "react";


const initialState = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [user, setUserForm] = useState(initialState);

  const dispatch = useDispatch();


  const [registerUser] = useRegisterUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();
  const [loginGoogle] = useLazyAuthGoogleUserQuery();

  const [getUserData] = useLazyGetUserDataQuery();

  const googleAuth = () => {
    loginGoogle().then(console.log);
  };
  

 

  const onInput = (e) => {
    setUserForm((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onLogin = () => {
    if(!user?.email && !user?.password){
      toast.warn('Please eneter your email and password')
      return
    }
    authorizeUser(user).unwrap().then(( data ) => {
      dispatch(
        setUser({
          email: data.userData.email,
          token: data.accessToken,
          refreshToken: data.refreshToken,
          sid: data.sid,
        })
      );
    }).then(() =>
    getUserData()
      .unwrap()
      .then(data =>
       { dispatch(
          setUser({
            email: data.email,
            balance: data.balance
          })
        )
        setUserForm(initialState)}
      )
  ).catch(error=>
    toast.error(error.data.message));
  }

  const onRegister = () => {
    if(!user?.email && !user?.password){
      toast.warn('Please eneter email and password for reistration')
      return
    }
    registerUser(user)
      .unwrap()
      .then(() =>
        authorizeUser(user)
          .unwrap()
          .then(data => {
            dispatch(
              setUser({
                email: data.userData.email,
                token: data.accessToken,
                refreshToken: data.refreshToken,
                sid: data.sid,
              })
            );
          })
      ).then(() =>
      getUserData()
        .unwrap()
        .then(data =>
          {dispatch(
            setUser({
              email: data.email,
              balance: data.balance
            })
          )
          setUserForm(initialState)}
        )
    ).catch(error=>
      toast.error(error.data.message));
  }

  const { email, password } = user;
  return (
    <form className={s.form}>
      <p className={s.text}>You can log in with your Google Account:</p>
      <div className={s.googleBox}>
        <div className={s.google} onClick={googleAuth}>
          <img className={s.icon} src={googleIcon} alt="" />
          <span className={s.iconText}>Google</span>
        </div>
      </div>

      <p className={s.text}>
        Or log in using an email and password, after registering:
      </p>

      <label className={s.label} htmlFor="email">
        Email:
      </label>
      <input
        onChange={onInput}
        value={email}
        id="email"
        className={s.input}
        placeholder="your@mail.com"
        type="email"
        
      />
      <label className={s.label} htmlFor="password">
        Password:
      </label>
      <input
        onChange={onInput}
        value={password}
        id="password"
        className={s.input}
        placeholder="password"
        type="password"
      />

      <button className={s.btn} type="button" onClick={onLogin}>
        log in
      </button>
      <button className={s.btn} type="button" onClick={onRegister}>
        registration
      </button>
    </form>
  );
};

export default AuthForm;
