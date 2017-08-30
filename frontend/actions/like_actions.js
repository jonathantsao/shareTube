import * as LikeUtil from '../util/like_util';
import { receiveVideo } from './ui_actions';
import { getComments } from './comment_actions';


export const likeItem = (like) => (dispatch) => {
  return LikeUtil.likeItem(like)
    .then((likeable) => {
      if (likeable.video_url) {
        return dispatch(receiveVideo(likeable));
      } else {
        return dispatch(getComments(likeable.video_id));
      }
    });
};

export const unlikeItem = (likeId) => (dispatch) => {
  return LikeUtil.unlikeItem(likeId)
    .then((unlikeable) => {
      if (unlikeable.video_url) {
        return dispatch(receiveVideo(unlikeable));
      } else {
        return dispatch(getComments(unlikeable.video_id));
      }
    });
};
