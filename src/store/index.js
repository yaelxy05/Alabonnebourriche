import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(authMiddleware, registerMiddleware)
);
const store = createStore(reducer, enhancers);
export default store;
