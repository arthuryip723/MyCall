import * as APIUtil from '../util/babe_api_util';

export const RECEIVE_BABES = 'RECEIVE_BABES';
export const RECEIVE_BABE = 'RECEIVE_BABE';

export const receiveBabes = babes => ({
  type: RECEIVE_BABES,
  babes
});

export const receiveBabe = babe => ({
  type: RECEIVE_BABE,
  babe
});

export const fetchBabes = () => dispatch => (
  APIUtil.fetchBabes().then(babes => (
    dispatch(receiveBabes(babes))
  ))
);

export const fetchBabe = id => dispatch => (
  APIUtil.fetchBabe(id).then(babe => (
    dispatch(receiveBabe(babe))
  ))
);

export const createBabe = babe => dispatch => (
  APIUtil.createBabe(babe).then(babe => (
    dispatch(receiveBabe(babe))
  ))
);
