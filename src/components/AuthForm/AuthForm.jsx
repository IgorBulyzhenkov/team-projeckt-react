
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

const dirtyState = {
  emailDirty: false,
  passwordDirty: false,
};

const errorState = {
  emailError: "This is a required field",
  passwordError: "This is a required field",
};

const AuthForm = () => {
  const [user, setUserForm] = useState(initialState);
  const [error, setError] = useState(errorState);
  const [dirty, setDirty] = useState(dirtyState);

  const { email, password } = user;
  const { emailError, passwordError } = error;
  const { emailDirty, passwordDirty } = dirty;


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
        [e.target.id]: e.target.value.trim(),
      };
    });

    if (e.target.id === "password") {
      if (e.target.value.length !== 0 && e.target.value.length < 8) {
        setError((prevState) => {
          return {
            ...prevState,
            passwordError: "Password must be not less than 8 symbols",
          };
        });
      } else if (!e.target.value) {
        setError((prevState) => {
          return {
            ...prevState,
            passwordError: "This is a required field",
          };
        });
      } else {
        setError((prevState) => {
          return {
            ...prevState,
            passwordError: "",
          };
        });
      }
    }

    if (e.target.id === "email") {
      const pattern =  /^[^@\s]+@[^@\s]+\.[^@\s]+$/

      if (e.target.value) {if (!pattern.test(String(e.target.value).toLowerCase())) {
          setError(prevState=> {
            return {
              ...prevState,
              emailError: "Incorrect email format"
            }
          })
      } else {
        setError(prevState=> {
          return {
            ...prevState,
            emailError: ""
          }
        })
      }} else {
        setError(prevState=> {
          return {
            ...prevState,
            emailError: "This is a required field"
          }
        })
      }
    }
  };

  const onBlur = (e) => {
    switch (e.target.id) {
      case "email":
        setDirty((prevState) => {
          return {
            ...prevState,
            emailDirty: true,
          };
        });
        break;

      case "password":
        setDirty((prevState) => {
          return {
            ...prevState,
            passwordDirty: true,
          };
        });
        break;

        default: return
    }
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

  
  return (
    <form className={s.form}>
      <p className={s.text}>You can log in with your Google Account:</p>
      <div className={s.googleBox}>
        <div className={s.google}>
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
      <div className={s.fieldBox}>
        <input
          onBlur={onBlur}
          onChange={onInput}
          value={email}
          id="email"
          className={s.input}
          placeholder="your@mail.com"
          type="email"
        />
        {emailDirty && emailError && <p className={s.message}>{emailError}</p>}
      </div>

      <label className={s.label} htmlFor="password">
        Password:
      </label>
      <div className={s.fieldBox}>
        <input
          onBlur={onBlur}
          onChange={onInput}
          value={password}
          id="password"
          className={s.input}
          placeholder="password"
          type="password"
        />
        {passwordDirty && passwordError && (
          <p className={s.message}>{passwordError}</p>
        )}
      </div>

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
