import axios from "axios";

import {
  saveReservation,
  FETCH_RESERVATION,
  FETCH_USER,
  saveUserList
} from "src/actions/reservationList";

const API_URL = "https://bonnebourricheback.yaelhue-creation.com/api";

const reservationListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RESERVATION: {
      axios
        .get(`${API_URL}/reservations`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveReservation(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_USER: {
      axios
        .get(`${API_URL}/users`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default reservationListMiddleware;
