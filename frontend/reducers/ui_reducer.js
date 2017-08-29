import { RECEIVE_ERRORS, RECEIVE_USERNAME, RECEIVE_TOGGLE_DROPDOWN_HAM, RECEIVE_TOGGLE_DROPDOWN_USER, CHANGE_FORM, CHANGE_UPLOAD_PAGE, CLEAR_SESSION, CLEAR_UPLOAD, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_ERRORS, CLEAR_SEARCH } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_HOT, RECEIVE_ALL_VIDEOS, RECEIVE_RECENT, RECEIVE_UPLOADS, UPLOAD_VIDEO, RECEIVE_SEARCH } from '../actions/video_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const initialState = {
  viewedUser: {},
  errors: [],
  sessionPage: 1,
  uploadPage: 1,
  hamDropdown: true,
  userDropdown: false,
  video: null,
  hot: [],
  recent: [],
  all: [],
  search: [],
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newIds;
  let newState;
  switch(action.type) {
    case CLEAR_SEARCH:
      newState = merge({}, state);
      newState.search = [];
      return newState;
    case REMOVE_VIDEO:
      newState = merge({}, state);
      newState.video = null;
      return newState;
    case RECEIVE_VIDEO:
      newState = merge({}, state);
      newState.video = action.video;
      return newState;
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    case CLEAR_SESSION:
      newState = merge({}, state, { sessionPage: 1});
      newState.errors = [];
      return newState;
    case CLEAR_UPLOAD:
      newState = merge({}, state, { uploadPage: 1});
      newState.errors = [];
      return newState;
    case RECEIVE_COMMENTS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    case RECEIVE_ALL_VIDEOS:
      newIds = union(action.video_ids, state.all);
      return merge({}, state, { all: newIds });
    case RECEIVE_HOT:
      newIds = union(action.video_ids, state.hot);
      return merge({}, state, { hot: newIds });
    case RECEIVE_RECENT:
      newIds = union(action.video_ids, state.recent);
      return merge({}, state, { recent: newIds });
    case RECEIVE_SEARCH:
      newState = merge({}, state);
      newState.search = action.video_ids;
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case CHANGE_FORM:
      newState = merge({}, state, { sessionPage: 1 });
      newState.errors = [];
      return newState;
    case CHANGE_UPLOAD_PAGE:
      newState = merge({}, state, { uploadPage: 2 });
      return newState;
    case UPLOAD_VIDEO:
      newState = merge({}, state, { uploadPage: 1 });
      return newState;
    case RECEIVE_USERNAME:
      newState = merge({}, state, { sessionPage: 2 });
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
      newState = merge({}, initialState, { viewedUser: action.viewedUser });
      newState.errors = [];
      return newState;
  }
};

export default uiReducer;
