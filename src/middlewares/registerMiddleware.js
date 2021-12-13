import axios from "axios";

import {
  NEW_USER_CREATION,
  signupResponse,
  getError,
  signupError
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
            store.dispatch(signupResponse(response.data.email));
            //window.location = '/connexion';
          })
          .catch((error) => {
            console.log(error);
            const { violations } = error.response.data;
            console.log(violations);
            if (violations) {
              const message = {};
              violations.forEach(({ propertyPath, title }) => {
                message[propertyPath] = title;
              })
              console.log(message.email);
              store.dispatch(signupError(message.email)); 

            }
  
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
