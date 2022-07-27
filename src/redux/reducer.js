import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  balance: '',
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
      console.log(payload);
      return { ...state, ...payload };
    },
  },
});

export const { setUser, resetUser, setBalance } = userSlice.actions;
export default userSlice;
