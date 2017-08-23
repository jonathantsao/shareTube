import { RECEIVE_ERRORS, RECEIVE_USERNAME, RECEIVE_TOGGLE_DROPDOWN_HAM, RECEIVE_TOGGLE_DROPDOWN_USER, CHANGE_FORM } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  viewedUser: {},
  errors: [],
  session_page: 1,
  hamDropdown: true,
  userDropdown: false,
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CHANGE_FORM:
      newState = merge({}, state, { session_page: 1 });
      newState.errors = [];
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
