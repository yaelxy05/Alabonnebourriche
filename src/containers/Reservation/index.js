import {
  updateReservationField,
  newReservationCreation,
  decrement,
  increment,
  countPerson,
  selectHour,
  selectDate,
} from 'src/actions/reservation';
import { signupError } from 'src/actions/register';
import { connect } from 'react-redux';

import Reservation from 'src/components/Reservation';


const mapStateToProps = (state) => ({
  email: state.reservation.email,
  name: state.reservation.name,
  address: state.reservation.address,
  phoneNumber: state.reservation.phoneNumber,
  nbPerson: state.reservation.nbPerson,
  date: state.reservation.date,
  hour: state.reservation.hour,
  messagesError: state.register.messagesError,
});


const mapDispatchToProps = (dispatch) => ({
  changeFieldReservation: (newValue, name) => {
    dispatch(updateReservationField(newValue, name));
  },
  handleReservation: () => {
    dispatch(newReservationCreation());
  },
  handleCount: (newValue, name) => {
    dispatch(countPerson(newValue, name))
  },
  handleSelect: (hour) => {
    const action = selectHour(hour);
    dispatch(action)
  },
  handleSelectDate: (date) => {
    const action = selectDate(date);
    dispatch(action)
    
  },
  decrement: () => {
    dispatch(decrement());
  },
  increment: () => {
    dispatch(increment());
  },
  signupError: (message) => {
    dispatch(signupError(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
