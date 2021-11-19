import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import navReducer from './navReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  nav: navReducer
});

export default rootReducer;
