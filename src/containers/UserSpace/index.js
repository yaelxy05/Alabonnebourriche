

import {
  fetchReservation,
} from 'src/actions/reservationList';

import { connect } from 'react-redux';

import UserSpace from 'src/components/UserSpace';


const mapStateToProps = (state) => ({
  reservations: state.userSpace.userSpaceList,
});


const mapDispatchToProps = (dispatch) => ({
  fetchReservation: () => {
    dispatch(fetchReservation());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSpace);
