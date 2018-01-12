import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the Root Reducer
import reducers from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
