import {
  SAVE_RESERVATION,
  loader,
} from 'src/actions/reservationList';

const initialState = {
  userSpaceList: [],
  loading: true,
}

function userSpaceReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_RESERVATION:
      return {
        ...state,
        userSpaceList: action.reservations,
        loading: false,
      };
    case loader: 
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default userSpaceReducer;
