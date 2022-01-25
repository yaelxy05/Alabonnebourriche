import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import navReducer from './navReducer';
import reservationReducer from './reservationReducer';
import userSpaceReducer from './userSpaceReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  userSpace: userSpaceReducer,
  auth: authReducer,
  register: registerReducer,
  nav: navReducer,
  reservation: reservationReducer,
  form: formReducer,
});

export default rootReducer;
