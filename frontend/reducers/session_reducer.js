import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_SUBS } from '../actions/subscription_actions';
import { RECEIVE_SUBSCRIPTIONS } from '../actions/video_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  subscriptions: {},
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  let subs;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, initialState, state, { currentUser: action.user });
      return newState;
    case RECEIVE_SUBS:
      newState = merge({}, state);
      newState.currentUser.subscriptions = action.subscriptions;
      newState.currentUser.subscribed_channels = action.subscribed_channels;
      subs = {};
      action.subscribed_channels.forEach((channel) => {
        subs[channel] = {
          user: action.subscribed_users[channel].username,
          image_url: action.subscribed_users[channel].image,
        };
      });
      newState.subscriptions = subs;
      return newState;
    case RECEIVE_SUBSCRIPTIONS:
      newState = merge({}, state);
      subs = {};
      if (action.videos_list) {
        Object.values(action.videos_list).forEach((video) => {
          subs[video.user_id] = {
            user: video.user.username,
            image_url: video.user.image,
          };
        })
      }
      newState.subscriptions = subs;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
