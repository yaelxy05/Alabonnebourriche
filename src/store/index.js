import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';
import reservationMiddleware from 'src/middlewares/reservationMiddleware';
import reservationListMiddleware from 'src/middlewares/reservationListMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(authMiddleware, registerMiddleware, reservationMiddleware,reservationListMiddleware)
);
const store = createStore(reducer, enhancers);
export default store;
