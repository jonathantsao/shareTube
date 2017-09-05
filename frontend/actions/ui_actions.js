import * as APIUtil from '../util/session_api_util';
import * as VideoUtil from '../util/video_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";
export const RECEIVE_TOGGLE_DROPDOWN_HAM = 'RECEIVE_TOGGLE_DROPDOWN_HAM';
export const RECEIVE_TOGGLE_DROPDOWN_USER = 'RECEIVE_TOGGLE_DROPDOWN_USER';
export const CHANGE_FORM = "CHANGE_FORM";
export const CHANGE_UPLOAD_PAGE = "CHANGE_UPLOAD_PAGE";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const CLEAR_UPLOAD = "CLEAR_UPLOAD";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const GO_BACK_FORM = "GO_BACK_FORM";

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const goBackForm = () => {
  return {
    type: GO_BACK_FORM,
  };
};

export const clearSession = () => {
  return {
    type: CLEAR_SESSION,
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

export const removeVideo = () => {
  return {
    type: REMOVE_VIDEO,
  };
};

export const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video,
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

export const getVideo = (videoId) => (dispatch) => {
  return VideoUtil.getVideo(videoId)
    .then((video) => {
      return dispatch(receiveVideo(video));
    });
};

export const verifyUsername = (username) => (dispatch) => {
  return APIUtil.verifyUsername(username)
    .then((data) => {
      return dispatch(receiveUsername());
    },
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const checkUsername = (username) => (dispatch) => {
  return APIUtil.checkUsername(username)
    .then(() => dispatch(receiveUsername()),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
