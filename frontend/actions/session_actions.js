import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CURRENT_USER,
    errors,
  };
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then
    ((currentUser) => dispatch(receiveCurrentUser(currentUser)),
     (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then
    ((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then((user) => dispatch(receiveCurrentUser(null)));
};
