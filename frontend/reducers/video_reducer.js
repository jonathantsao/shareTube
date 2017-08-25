import { RECEIVE_ALL_VIDEOS, UPLOAD_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const initialState = {
  videos_list: {},
};

export const videoReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
      const videos = merge({}, state.videos_list, action.videos_list);
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
