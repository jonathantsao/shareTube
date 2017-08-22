import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, { currentUser: action.user });
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
