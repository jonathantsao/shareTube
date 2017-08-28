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
