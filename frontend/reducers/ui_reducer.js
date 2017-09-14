import { RECEIVE_ERRORS, RECEIVE_USERNAME, RECEIVE_TOGGLE_DROPDOWN_HAM, RECEIVE_TOGGLE_DROPDOWN_USER, CHANGE_FORM, CHANGE_UPLOAD_PAGE, CLEAR_SESSION, CLEAR_UPLOAD, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_ERRORS, CLEAR_SEARCH, TOGGLE_LOADING, GO_BACK_FORM, RECEIVE_CHANNEL } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_HOT, RECEIVE_ALL_VIDEOS, RECEIVE_RECENT, RECEIVE_UPLOADS, UPLOAD_VIDEO, RECEIVE_SEARCH, RECEIVE_LIKES, RECEIVE_DISLIKES, RECEIVE_SUBSCRIPTIONS, RECEIVE_VIDEO_TITLES } from '../actions/video_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_SUBS } from '../actions/subscription_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const initialState = {
  viewedUser: null,
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
  likes: [],
  subscriptions: [],
  dislikes: [],
  loading: false,
  videoTitles: []
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newIds;
  let newState;
  switch(action.type) {
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      newState.viewedUser = action.user;
      return newState;
    case RECEIVE_VIDEO_TITLES:
      newState = merge({}, state);
      newState.videoTitles = action.videoTitles;
      return newState;
    case RECEIVE_SUBS:
      newState = merge({}, state);
      newState.video.user.subscribers = action.subscribers;
      return newState;
    case TOGGLE_LOADING:
      newState = merge({}, state);
      newState.loading = !state.loading;
      return newState;
    case CLEAR_SEARCH:
      newState = merge({}, state);
      newState.search = [];
      return newState;
    case REMOVE_VIDEO:
      newState = merge({}, state);
      newState.video = null;
      newState.subscribers = [];
      return newState;
    case RECEIVE_VIDEO:
      newState = merge({}, state);
      newState.video = action.video;
      newState.subscribers = action.video.subscribers;
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
    case RECEIVE_LIKES:
      newState = merge({}, state);
      newState.likes = action.video_ids;
      return newState;
    case RECEIVE_DISLIKES:
      newState = merge({}, state);
      newState.dislikes = action.video_ids;
      return newState;
    case RECEIVE_SUBSCRIPTIONS:
      newState = merge({}, state);
      newState.subscriptions = action.video_ids;
      return newState;
    case RECEIVE_SEARCH:
      newState = merge({}, state);
      newState.search = action.video_ids;
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case GO_BACK_FORM:
      newState = merge({}, state, { sessionPage: 1});
      newState.errors = [];
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
      newState.loading = false;
      return newState;
    case RECEIVE_USERNAME:
      newState = merge({}, state, { sessionPage: 2 });
      newState.errors = [];
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, initialState);
      newState.errors = [];
      newState.loading = false;
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
      return state;
  }
};

export default uiReducer;
