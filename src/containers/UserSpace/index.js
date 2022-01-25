

import {
  fetchReservation,
  fetchUser
} from 'src/actions/reservationList';

import { connect } from 'react-redux';

import UserSpace from 'src/components/UserSpace';


const mapStateToProps = (state) => ({
  reservations: state.userSpace.userSpaceList,
  users: state.userSpace.users,
});


const mapDispatchToProps = (dispatch) => ({
  fetchReservation: () => {
    dispatch(fetchReservation());
  },
  fetchUser: () => {
    dispatch(fetchUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSpace);
