export const UPDATE_RESERVATION_FIELD = 'UPDATE_RESERVATION_FIELD';
export const NEW_RESERVATION_CREATION = 'NEW_RESERVATION_CREATION';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
export const COUNT_PERSON = 'COUNT_PERSON';
export const SELECT_HOUR = 'SELECT_HOUR';
export const SELECT_DATE = 'SELECT_DATE';

export const updateReservationField = (newValue, name) => ({
  type: UPDATE_RESERVATION_FIELD,
  newValue,
  name,
});

export const newReservationCreation = () => ({
  type: NEW_RESERVATION_CREATION,
});

export const selectHour = (hour) => ({
  type: SELECT_HOUR,
  hour,
});

export const selectDate = (date) => ({
  type: SELECT_DATE,
  date,
});

export const countPerson = () => ({
  type: COUNT_PERSON,
  newValue,
  name,
})

export const decrement = () => ({
  type: DECREMENT,
});

export const increment = () => ({
  type: INCREMENT,
});
