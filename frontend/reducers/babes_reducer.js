import merge from 'lodash/merge';

import { RECEIVE_BABE, RECEIVE_BABES } from '../actions/babe_actions';

const babesReducer = (state={ babes: [], currentBabe: null }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_BABES:
      newState.babes = action.babes;
      return newState;
    case RECEIVE_BABE:
      // const newBabe = {[action.bench.id]: action.bench};
      // return merge({}, state, newBabe);
      newState.currentBabe = action.babe;
      return newState;
    default:
      return state;
  }
};

export default babesReducer;
