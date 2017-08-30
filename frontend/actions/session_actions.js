import * as APIUtil from '../util/session_api_util';
import { receiveErrors, toggleLoading } from "./ui_actions";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then
    ((currentUser) => dispatch(receiveCurrentUser(currentUser)),
     (errors) => {
       return dispatch(receiveErrors(errors.responseJSON));
     }
    );
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then
    ((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));}
    );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(() => {
      return dispatch(receiveCurrentUser(null));
    });
};

export const editProfile = (formData, id) => (dispatch) => {
  dispatch(toggleLoading());
  return APIUtil.editProfile(formData, id)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
};
