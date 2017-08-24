import { combineReducers } from 'redux';
import { videoReducer } from './video_reducer';

const entitiesReducer = combineReducers({
  videos: videoReducer,
});


export default entitiesReducer;
