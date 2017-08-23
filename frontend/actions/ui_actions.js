import * as APIUtil from '../util/session_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";
export const RECEIVE_TOGGLE_DROPDOWN = 'RECEIVE_TOGGLE_DROPDOWN';


export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const receiveUsername = () => {
  return {
    type: RECEIVE_USERNAME,
  };
};

export const receiveToggleDropdown = () => {
  return {
    type: RECEIVE_TOGGLE_DROPDOWN,
  };
};

export const verifyUsername = (username) => (dispatch) => {
  return APIUtil.verifyUsername(username)
    .then(() => dispatch(receiveUsername()),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const checkUsername = (username) => (dispatch) => {
  return APIUtil.checkUsername(username)
    .then(() => dispatch(receiveUsername()),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
