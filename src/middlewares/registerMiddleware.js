import axios from "axios";

import {
  NEW_USER_CREATION,
  signupResponse,
  getError,
} from "src/actions/register";

const API_URL = "http://localhost:8081/api";

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

      console.log(confirmPassword);
      console.log(password);
      if (password === confirmPassword) {
        axios
          .post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response.data);
            store.dispatch(signupResponse(response.data));
            //window.location = '/connexion';
          })
          .catch((error) => {
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
