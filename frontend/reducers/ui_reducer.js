import { RECEIVE_ERRORS, RECEIVE_USERNAME, RECEIVE_TOGGLE_DROPDOWN_HAM, RECEIVE_TOGGLE_DROPDOWN_USER, CHANGE_FORM, CHANGE_UPLOAD_PAGE } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_HOT, RECEIVE_ALL_VIDEOS, RECEIVE_RECENT, RECEIVE_UPLOADS, UPLOAD_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const initialState = {
  viewedUser: {},
  errors: [],
  session_page: 1,
  upload_page: 1,
  hamDropdown: true,
  userDropdown: false,
  hot: [],
  recent: [],
  all: [],
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newIds;
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
      newIds = union(action.video_ids, state.all);
      return merge({}, state, { all: newIds });
    case RECEIVE_HOT:
      newIds = union(action.video_ids, state.all);
      return merge({}, state, { hot: newIds });
    case RECEIVE_RECENT:
      newIds = union(action.video_ids, state.all);
      return merge({}, state, { recent: newIds });
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CHANGE_FORM:
      newState = merge({}, state, { session_page: 1 });
      newState.errors = [];
      return newState;
    case CHANGE_UPLOAD_PAGE:
      newState = merge({}, state, { upload_page: 2 });
      return newState;
    case UPLOAD_VIDEO:
      newState = merge({}, state, { upload_page: 1 });
      return newState;
    case RECEIVE_USERNAME:
      newState = merge({}, state, { session_page: 2 });
      newState.errors = [];
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, initialState);
      newState.errors = [];
      return newState;
    case RECEIVE_TOGGLE_DROPDOWN_HAM:
      const newHamDropdown = !state.hamDropdown;
      newState = merge({}, state, { hamDropdown: newHamDropdown });
      newState.errors = [];
      return newState;
    case RECEIVE_TOGGLE_DROPDOWN_USER:
      const newUserDropdown = !state.userDropdown;
      newState = merge({}, state, { userDropdown: newUserDropdown });
      newState.errors = [];
      return newState;
    default:
      return merge({}, initialState, { viewedUser: action.viewedUser });
  }
};

export default uiReducer;
