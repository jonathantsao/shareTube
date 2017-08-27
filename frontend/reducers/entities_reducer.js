import { combineReducers } from 'redux';
import { videoReducer } from './video_reducer';
import commentReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  videos: videoReducer,
  comments: commentReducer,
});


export default entitiesReducer;
