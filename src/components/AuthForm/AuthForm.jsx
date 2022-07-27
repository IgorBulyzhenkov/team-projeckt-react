import s from "./authForm.module.css";
import googleIcon from "../../img/AuthForm/google-symbol.svg";

import { useState } from "react";
// import { useDispatch } from "react-redux";

const initialState = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [user, setUser] = useState(initialState);

  // const dispatch = useDispatch()

  const onInput = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  // const onLogin = () => {
  //   dispatch()
  // }

  // const onRegister = () => {
  //   dispatch()
  // }

  const { email, password } = user;
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

      <label className={s.label} htmlFor="">
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
      <label className={s.label} htmlFor="">
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

      <button className={s.btn} type="submit">
        log in
      </button>
      <button className={s.btn} type="submit">
        registration
      </button>
    </form>
  );
};

export default AuthForm;
