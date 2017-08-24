import * as APIUtil from '../util/video_util';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";


export const receiveAllVideos = (res) => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos_list: res.videos_list,
    video_ids: res.video_ids,
  };
};

export const getVideos = () => (dispatch) => {
  return APIUtil.getVideos()
    .then((res) => dispatch(receiveAllVideos(res)));
};
