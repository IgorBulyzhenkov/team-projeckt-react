export const getToken = state => state.currentUser.token;
export const getRefreshToken = state => state.currentUser.refreshToken;
export const getSir = state => state.currentUser.sir;
export const getIsLoggedIn = state => state.currentUser.isLoggedIn;
export const getName = state => state.currentUser.user.name;
export const getEmail = state => state.currentUser.user.email;
