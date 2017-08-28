import * as LikeUtil from '../util/like_util';
import { getVideo } from './ui_actions';


export const likeVideo = (like) => (dispatch) => {
  return LikeUtil.likeItem(like)
    .then((newLike) => {
      if (newLike.likeable_type === "Video") {

        return dispatch(getVideo(newLike.likeable_id));
      } else {
        return dispatch(getVideo(newLike.likeable.likeable_id));
      }
    });
};
