export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const REFRESH_LOGIN = 'REFRESH_LOGIN';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const refreshLogin = () => ({
  type: REFRESH_LOGIN,
});
