import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import babesReducer from '../reducers/babes_reducer';

// TODO Should fix this later.
const configureStore = (preloadedState = { babes: [], currentBabe: {} }) => (
  createStore(
    babesReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
