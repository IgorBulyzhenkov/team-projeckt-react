import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: null,
  refreshToken: null,
  sid: false,
  isLoggedIn: false,
  balance: '',
  width: null,
  category: '',
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return { ...state, ...payload, isLoggedIn: true };
    },
    resetUser(state) {
      return { ...state, ...initialState };
    },
    setBalance: (state, { payload }) => {
      return { ...state, ...payload };
    },
    setWidth: (state, { payload }) => {
      return { ...state, ...payload };
    },
    setCategory: (state, { payload }) => {
      return { ...state, ...{ category: payload } };
    },
  },
});

export const { setUser, resetUser, setBalance, setWidth, setCategory } =
  userSlice.actions;
export default userSlice;
