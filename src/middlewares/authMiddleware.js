import axios from "axios";

import { LOG_IN, saveUser, LOG_OUT, REFRESH_LOGIN } from "src/actions/auth";

import { saveReservation } from "src/actions/reservationList";

const API_URL = "http://localhost:8081/api";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().auth;

      axios
        .post(`${API_URL}/login`, {
          username: username,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          store.dispatch(saveUser(response.data.token));
          store.dispatch(saveReservation(response.data));
          window.location = "/espace-utilisateur";
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case REFRESH_LOGIN: {
      if (localStorage.getItem("token") !== null) {
        store.dispatch(saveUser(localStorage.getItem("token")));
      }
      next(action);
      break;
    }

    case LOG_OUT: {
      window.location = "/";
      localStorage.removeItem("token");
      next(action);
      break;
    }
    
    default:
      next(action);
  }
};

export default authMiddleware;
