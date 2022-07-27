export const getToken = state => state.currentUser.token;
export const getRefreshToken = state => state.currentUser.refreshToken;
export const getSid = state => state.currentUser.sid;
export const getIsLoggedIn = state => state.currentUser.isLoggedIn;
export const getName = state => state.currentUser.user.name;
export const getBalance = state => state.currentUser.balance;
export const getEmail = state => state.currentUser.email;

