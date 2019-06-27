import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../components/reducer';

const { createLogger } = require('redux-logger');

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
