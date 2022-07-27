import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { id: '', email: '' },
  token: null,
  refreshToken: null,
  sir: null,
  wasBalanceChanged: false,
  isLoggedIn: false,
  balance: '00.00',
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
