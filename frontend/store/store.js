import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import babesReducer from '../reducers/babes_reducer';

const configureStore = (preloadedState = { babes: [] }) => (
  createStore(
    babesReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
