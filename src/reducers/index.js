import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import navReducer from './navReducer';
import reservationReducer from './reservationReducer';
import userSpaceReducer from './userSpaceReducer';


const rootReducer = combineReducers({
  userSpace: userSpaceReducer,
  auth: authReducer,
  register: registerReducer,
  nav: navReducer,
  reservation: reservationReducer,
});

export default rootReducer;
