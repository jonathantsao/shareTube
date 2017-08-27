import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const initialState = {
  comments_list: {},
};

const commentReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      const comments = merge({}, action.comments);
      newState = { comments_list: comments };
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
