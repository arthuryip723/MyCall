import merge from 'lodash/merge';

import { RECEIVE_BABES } from '../actions/babe_actions';

const babesReducer = (state={ babes: [] }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_BABES:
      newState.babes = action.babes;
      return newState;
    default:
      return state;
  }
};

export default babesReducer;
