import * as APIUtil from '../util/babe_api_util'

export const RECEIVE_BABES = 'RECEIVE_BABES';

export const receiveBabes = babes => ({
  type: RECEIVE_BABES,
  babes
});

export const fetchBabes = () => dispatch => (
  APIUtil.fetchBabes().then(babes => (
    dispatch(receiveBabes(babes))
  ))
);
