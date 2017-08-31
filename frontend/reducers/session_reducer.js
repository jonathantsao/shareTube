import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_SUBS } from '../actions/subscription_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  subscriptions: [],
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, initialState, state, { currentUser: action.user });
      return newState;
    case RECEIVE_SUBS:
      newState = merge({}, state);
      newState.subscriptions = action.subscriptions;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
