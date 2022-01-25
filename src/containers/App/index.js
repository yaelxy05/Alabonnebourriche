import { connect } from 'react-redux';
import { refreshLogin } from 'src/actions/auth';
import { fetchReservation } from 'src/actions/reservationList';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  loading: state.reservation.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReservation: () => {
    const action = fetchReservation();
    dispatch(action);
    console.log(action);
  },
  checkLogin: () => {
    const action = refreshLogin();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
