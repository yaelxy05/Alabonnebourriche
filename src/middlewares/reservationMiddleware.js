import axios from "axios";

import {
  NEW_RESERVATION_CREATION,
} from "src/actions/reservation";

const API_URL = "https://bonnebourricheback.yaelhue-creation.com/api";

const reservationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_RESERVATION_CREATION: {
      const { email, name, address, phoneNumber, nbPerson, date, hour } =
        store.getState().reservation;
      const newTitle = {
        email,
        name,
        address,
        phoneNumber,
        nbPerson,
        date,
        hour,
      };
      if (localStorage.getItem("token") !== null) {
        axios
          .post(`${API_URL}/reservation/create`, newTitle, {
            email: email,
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            nbPerson: nbPerson,
            date: date,
            hour: hour,

            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });

        next(action);
        break;
      };
      axios
        .post(`${API_URL}/reservation/create`, newTitle, {
          email: email,
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          nbPerson: nbPerson,
          date: date,
          hour: hour,
        })
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
