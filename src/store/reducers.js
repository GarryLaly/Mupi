import {SET_USER, SET_ACCESS_TOKEN} from './actions';

// Contains authenticated user data
export const user = (state = null, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_USER:
      return payload;

    default:
      return state;
  }
};

export const accessToken = (state = null, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_ACCESS_TOKEN:
      return payload;

    default:
      return state;
  }
};
