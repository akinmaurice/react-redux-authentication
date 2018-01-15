import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Import the Root Reducer
import reducers from '../reducers';

// Persist Store Config
const config = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const reducer = persistReducer(config, reducers);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
