import {
  SAVE_RESERVATION,
  loader,
  SAVE_USERLIST,
} from 'src/actions/reservationList';

const initialState = {
  userSpaceList: [],
  loading: true,
  users: [],
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
      case SAVE_USERLIST:
        return {
          ...state,
          users: action.users,
          loading: false,
        };
    default:
      return state;
  }
}

export default userSpaceReducer;
