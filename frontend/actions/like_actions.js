import * as LikeUtil from '../util/like_util';
import { getVideo } from './ui_actions';
import { getComments } from './comment_actions';


export const likeItem = (like) => (dispatch) => {
  return LikeUtil.likeItem(like)
    .then((newLike) => {
      if (newLike.likeable_type === "Video") {
        return dispatch(getVideo(newLike.likeable_id));
      } else {
        return dispatch(getComments(newLike.likeable.video_id));
      }
    });
};

export const unlikeItem = (likeId) => (dispatch) => {
  return LikeUtil.unlikeItem(likeId)
    .then((unlikedItem) => {
      if (unlikedItem.likeable_type === "Video") {
        return dispatch(getVideo(unlikedItem.likeable_id));
      } else {
        return dispatch(getComments(unlikedItem.likeable.video_id));
      }
    });
};
