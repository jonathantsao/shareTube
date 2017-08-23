import * as APIUtil from '../session_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";


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

export const checkUsername = (username) => (dispatch) => {
  return APIUtil.checkUsername(username)
    .then(() => dispatch(receiveUsername()),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
