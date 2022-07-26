import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { id: '', email: '' },
  token: null,
  refreshToken: null,
  sir: null,
  wasBalanceChanged: false,
  isLoggedIn: false,
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
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice;
