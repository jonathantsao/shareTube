import { RECEIVE_ALL_VIDEOS } from '../actions/video_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const initialState = {
  videos_list: {},
  video_ids: [],
};

export const videoReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
      newState = { videos_list: action.videos_list, video_ids: action.video_ids };
      return newState;
    default:
      return state;
  }
};
