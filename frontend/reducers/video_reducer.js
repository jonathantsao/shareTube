import { RECEIVE_ALL_VIDEOS, UPLOAD_VIDEO, RECEIVE_SEARCH } from '../actions/video_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const initialState = {
  videos_list: {},
};

export const videoReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  let videos;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
      videos = merge({}, state.videos_list, action.videos_list);
      newState = { videos_list: videos };
      return newState;
    case RECEIVE_SEARCH:
      videos = merge({}, state.videos_list, action.videos_list);
      newState = { videos_list: videos };
      return newState;
    case UPLOAD_VIDEO:
      const id = action.video.id;
      newState = merge({}, state, { videos_list: { [id]: action.video } });
      return newState;
    default:
      return state;
  }
};
