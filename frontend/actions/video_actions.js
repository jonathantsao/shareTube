import * as APIUtil from '../util/video_util';
import { receiveErrors, toggleLoading } from './ui_actions';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_HOT = "RECEIVE_HOT";
export const RECEIVE_RECENT = "RECEIVE_RECENT";
export const RECEIVE_UPLOADS = "RECEIVE_UPLOADS";
export const UPLOAD_VIDEO = "UPLOAD_VIDEO";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_DISLIKES = "RECEIVE_DISLIKES";
export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_VIDEO_TITLES = "RECEIVE_VIDEO_TITLES";


export const uploadVideo = (video) => {
  return {
    type: UPLOAD_VIDEO,
    video
  };
};

export const receiveVideoTitles = (videoList) => {
  return {
    type: RECEIVE_VIDEO_TITLES,
    videoList,
  };
};



export const receiveAllVideos = (res) => {
  let type;
  switch(res.filter.split(" ")[0]) {
    case "all":
      type = RECEIVE_ALL_VIDEOS;
      break;
    case "likes":
      type = RECEIVE_LIKES;
      break;
    case "dislikes":
      type = RECEIVE_DISLIKES;
      break;
    case "recent":
      type = RECEIVE_RECENT;
      break;
    case "hot":
      type = RECEIVE_HOT;
      break;
    case "search":
      type = RECEIVE_SEARCH;
      break;
    case "subscriptions":
      type = RECEIVE_SUBSCRIPTIONS;
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

export const getVideos = (filter, userId) => (dispatch) => {
  return APIUtil.getVideos(filter, userId)
    .then((res) => dispatch(receiveAllVideos(res)));
};

export const searchVideos = (filter, search_query) => (dispatch) => {
  return APIUtil.searchVideos(filter, search_query)
    .then((res) => {
      return dispatch(receiveAllVideos(res));
    });
};
export const createVideo = (video) => (dispatch) => {
  dispatch(toggleLoading());
  return APIUtil.createVideo(video)
    .then((newVideo) => {
      dispatch(uploadVideo(newVideo));
      return newVideo.id;
    }, ((errors) => dispatch(receiveErrors(errors.responseJSON))));
};

export const searchBar = (search_query) => (dispatch) => {
  return APIUtil.searchBar(search_query)
    .then((videoList) => dispatch(receiveVideoTitles(videoList)));
};
