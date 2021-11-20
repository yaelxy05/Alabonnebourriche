import axios from 'axios';

import { NEW_RESERVATION_CREATION } from 'src/actions/reservation';

const API_URL = 'http://localhost:8081/api';

const reservationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_RESERVATION_CREATION: {
      const {
        email,
        name,
        address,
        phoneNumber,
        nbPerson,
        date,
        hour,
      } = store.getState().reservation;

      const newReservation = {
        email,
        name,
        address,
        phoneNumber,
        nbPerson,
        date,
        hour,
      };

   
      
        axios
          .post(`${API_URL}/reservation`, newReservation)
          .then((response) => {
            console.log(response);
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

export default reservationMiddleware;
