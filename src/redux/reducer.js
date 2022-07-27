import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  width: null,
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
    setWidth: (state, { payload }) => {
      return { ...state, ...payload,};
    },
  },
});

export const { setUser, resetUser, setWidth } = userSlice.actions;
export default userSlice;
