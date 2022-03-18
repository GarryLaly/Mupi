import {SET_USER, SET_ACCESS_TOKEN} from './actions';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const setAccessToken = token => ({
  type: SET_ACCESS_TOKEN,
  payload: token,
});
