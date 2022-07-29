import { useDispatch } from 'react-redux';
import {
  useRegisterUserMutation,
  useAuthorizeUserMutation,
  useLazyAuthGoogleUserQuery,
} from 'redux/kapustaAPI';
import { setUser } from 'redux/reducer';
import s from './authForm.module.css';
import googleIcon from '../../img/AuthForm/google-symbol.svg';
import { toast } from 'react-toastify';

import { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

const dirtyState = {
  emailDirty: false,
  passwordDirty: false,
};

const errorState = {
  emailError: 'This is a required field',
  passwordError: 'This is a required field',
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

  const onInput = e => {
    setUserForm(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value.trim(),
      };
    });

    if (e.target.id === 'password') {
      if (e.target.value.length !== 0 && e.target.value.length < 8) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'Password must be not less than 8 symbols',
          };
        });
      } else if (!e.target.value) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'This is a required field',
          };
        });
      } else {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: '',
          };
        });
      }
    }

    if (e.target.id === 'email') {
      const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (e.target.value) {
        if (!pattern.test(String(e.target.value).toLowerCase())) {
          setError(prevState => {
            return {
              ...prevState,
              emailError: 'Incorrect email format',
            };
          });
        } else {
          setError(prevState => {
            return {
              ...prevState,
              emailError: '',
            };
          });
        }
      } else {
        setError(prevState => {
          return {
            ...prevState,
            emailError: 'This is a required field',
          };
        });
      }
    }
  };

  const onBlur = e => {
    switch (e.target.id) {
      case 'email':
        setDirty(prevState => {
          return {
            ...prevState,
            emailDirty: true,
          };
        });
        break;

      case 'password':
        setDirty(prevState => {
          return {
            ...prevState,
            passwordDirty: true,
          };
        });
        break;

      default:
        return;
    }
  };

  const onLogin = () => {
    if (!user?.email && !user?.password) {
      toast.warn('Please eneter your email and password');
      return;
    }
    authorizeUser(user)
      .unwrap()
      .then(data => {
        dispatch(
          setUser({
            email: data.userData.email,
            token: data.accessToken,
            refreshToken: data.refreshToken,
            sid: data.sid,
            balance: data.userData.balance,
          })
        );
        setUserForm(initialState);
      })
      .catch(error => toast.error(error.data.message));
  };

  const onRegister = () => {
    if (!user?.email && !user?.password) {
      toast.warn('Please eneter email and password for reistration');
      return;
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
                balance: data.userData.balance,
                token: data.accessToken,
                refreshToken: data.refreshToken,
                sid: data.sid,
              })
            );
            setUserForm(initialState);
          })
      )
      .catch(error => toast.error(error.data.message));
  };
  const googleAuth = () => {
    loginGoogle().then(console.log);
  };

  return (
    <form className={s.form}>
      <p className={s.text}>You can log in with your Google Account:</p>
      <div className={s.googleBox}>
        <div className={s.google}>
          <img className={s.icon} src={googleIcon} alt="" />
          <span className={s.iconText}>Google</span>
          <a
            className={s.link}
            onClick={googleAuth}
            href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=665888736356-aq6fvfmau6mupt4nfbms5tfch0u2698i.apps.googleusercontent.com&prompt=consent&redirect_uri=https%3A%2F%2Fkapusta-backend.goit.global%2Fauth%2Fgoogle-redirect&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile"
          ></a>
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
