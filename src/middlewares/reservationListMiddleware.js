import axios from "axios";

import {
  saveReservation,
  fetchReservation,
  FETCH_RESERVATION,
} from "src/actions/reservationList";

const API_URL = "http://localhost:8081/api";

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
    
    default:
      next(action);
  }
};

export default reservationListMiddleware;
