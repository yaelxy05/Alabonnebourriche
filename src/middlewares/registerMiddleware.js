import axios from "axios";

import {
  NEW_USER_CREATION,
  signupResponse,
  getError,
  signupError
} from "src/actions/register";

const API_URL = "https://bonnebourricheback.yaelhue-creation.com/api";

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_USER_CREATION: {
      const {
        email,
        password,
        confirmPassword,
        name,
        address,
        phoneNumber,
        nameFirst,
      } = store.getState().register;

      const newUser = {
        email,
        password,
        confirmPassword,
        name,
        address,
        phoneNumber,
        nameFirst,
      };


      if (password === confirmPassword) {
        axios
          .post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response.data);
            store.dispatch(signupResponse(response.data.email));
            window.location = '/connexion';
          })
          .catch((error) => {
            console.log(error.response.data.error.email);
            store.dispatch(signupError(error.response.data.error.email));
          });
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default registerMiddleware;
