import {
  UPDATE_RESERVATION_FIELD,
  INCREMENT,
  DECREMENT,
  SELECT_HOUR,
  SELECT_DATE,
} from "src/actions/reservation";




// variable for define the time zone
let date = new Date();
const myTimeZone = 1;

const initialState = {
  email: "",
  address: "",
  name: "",
  phoneNumber: "",
  nbPerson: 1,
  date: new Date(date.setTime(date.getTime() + myTimeZone * 60 * 60 * 1000)),
  hour: "",
};

function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RESERVATION_FIELD:
      return {
        ...state,
        email: action.name === "email" ? action.newValue : state.email,
        address: action.name === "address" ? action.newValue : state.address,
        name: action.name === "name" ? action.newValue : state.name,
        phoneNumber:
          action.name === "phoneNumber" ? action.newValue : state.phoneNumber,
        nbPerson: action.name === "nbPerson" ? action.newValue : state.nbPerson,
        hour: action.hour === "hour" ? action.newValue : state.hour,
        date: action.date === "date" ? action.newValue : state.date,
      };
    case SELECT_DATE:
      return {
        ...state,
        date: action.date,
      };

    case INCREMENT:
      return {
        ...state,
        nbPerson: state.nbPerson + 1,
      };
    case DECREMENT:
      return {
        ...state,
        nbPerson: state.nbPerson - 1,
      };
    case SELECT_HOUR:
      return {
        ...state,
        hour: action.hour,
      };
    default:
      return state;
  }
}

export default reservationReducer;
