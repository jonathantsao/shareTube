import * as APIUtil from '../util/video_util';
import { receiveErrors } from './ui_actions';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_HOT = "RECEIVE_HOT";
export const RECEIVE_RECENT = "RECEIVE_RECENT";
export const RECEIVE_UPLOADS = "RECEIVE_UPLOADS";
export const UPLOAD_VIDEO = "UPLOAD_VIDEO";


export const uploadVideo = (video) => {
  return {
    type: UPLOAD_VIDEO,
    video
  };
};


export const receiveAllVideos = (res) => {
  let type;
  switch(res.filter) {
    case "all":
      type = RECEIVE_ALL_VIDEOS;
      break;
    case "recent":
      type = RECEIVE_RECENT;
      break;
    case "hot":
      type = RECEIVE_HOT;
      break;
    case "uploads":
      type = RECEIVE_UPLOADS;
      break;
  }
  return {
    type: type,
    videos_list: res.videos_list,
    video_ids: res.video_ids,
  };
};

export const addView = (videoId) => (dispatch) => {
  return APIUtil.addView(videoId);
};

export const getVideos = (filter) => (dispatch) => {
  return APIUtil.getVideos(filter)
    .then((res) => dispatch(receiveAllVideos(res)));
};

export const createVideo = (video) => (dispatch) => {
  return APIUtil.createVideo(video)
    .then((newVideo) => {
      dispatch(uploadVideo(newVideo));
      return newVideo.id;
    }, ((errors) => dispatch(receiveErrors(errors.responseJSON))));
};
