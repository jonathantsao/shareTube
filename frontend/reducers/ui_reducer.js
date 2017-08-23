import { RECEIVE_ERRORS } from '../actions/ui_actions';
import merge from 'lodash/merge';

const initialState = {
  viewedUser: {},
  errors: [],
  session_page: 1
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return merge({}, initialState, { viewedUser: action.viewedUser });
  }
};

export default uiReducer;
