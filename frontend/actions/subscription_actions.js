import * as APIUtil from '../util/subscription_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_SUBS = "RECEIVE_SUBS";

export const receiveSubs = (subs) => {
  return {
    type: RECEIVE_SUBS,
    subscriptions: subs.subscriptions,
    subscribers: subs.subscribers
  };
};

export const subscribe = (currentUserId, subId) => (dispatch) => {
  return APIUtil.subscribe(currentUserId, subId)
    .then((subs) => dispatch(receiveSubs(subs)));
};

export const unsubscribe = (currentUserId, subId) => (dispatch) => {
  return APIUtil.unsubscribe(currentUserId, subId)
    .then((subs) => dispatch(receiveSubs(subs)));
};
