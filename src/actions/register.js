export const UPDATE_REGISTER_FIELD = 'UPDATE_REGISTER_FIELD';
export const NEW_USER_CREATION = 'NEW_USER_CREATION';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const updateRegisterField = (newValue, name) => ({
  type: UPDATE_REGISTER_FIELD,
  newValue,
  name,
});

export const newUserCreation = () => ({
  type: NEW_USER_CREATION,
});

export const signupResponse = (response) => ({
  type: SIGNUP_RESPONSE,
  response,
});

export const signupError = (message) => ({
  type: SIGNUP_ERROR,
  message,
});
