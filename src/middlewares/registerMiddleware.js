import axios from 'axios';

import { NEW_USER_CREATION } from 'src/actions/register';

const API_URL = '';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_USER_CREATION: {
      const {
        mail,
        password,
        confirmPassword,
        lastName,
        firstName,
        address,
        phoneNumber,
      } = store.getState().register;

      const newUser = {
        mail,
        password,
        confirmPassword,
        lastName,
        firstName,
        address,
        phoneNumber,
      };

      console.log(confirmPassword);
      console.log(password);
      if (password === confirmPassword) {
        axios
          .post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
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
