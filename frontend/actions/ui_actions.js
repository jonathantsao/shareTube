import * as APIUtil from '../util/session_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";
export const RECEIVE_TOGGLE_DROPDOWN_HAM = 'RECEIVE_TOGGLE_DROPDOWN_HAM';
export const RECEIVE_TOGGLE_DROPDOWN_USER = 'RECEIVE_TOGGLE_DROPDOWN_USER';
export const CHANGE_FORM = "CHANGE_FORM";
export const CHANGE_UPLOAD_PAGE = "CHANGE_UPLOAD_PAGE";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const CLEAR_UPLOAD = "CLEAR_UPLOAD";

export const clearSession = () => {
  return {
    type: CLEAR_SESSION,
  };
};

export const clearUpload = () => {
  return {
    type: CLEAR_UPLOAD,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};


export const toggleVideoForm = () => {
  return {
    type: CHANGE_UPLOAD_PAGE,
  };
};

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

export const receiveHamDropdown = () => {
  return {
    type: RECEIVE_TOGGLE_DROPDOWN_HAM,
  };
};

export const receiveUserDropdown = () => {
  return {
    type: RECEIVE_TOGGLE_DROPDOWN_USER,
  };
};

export const changeForm = () => {
  return {
    type: CHANGE_FORM,
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
