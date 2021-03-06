import { connect } from 'react-redux';
import { getVideo, receiveHamDropdown, removeVideo } from '../../actions/ui_actions';
import { addView } from '../../actions/video_actions';
import { getComments } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';
import VideoDetail from './video_detail';
import { likeItem, unlikeItem } from '../../actions/like_actions';
import { subscribe, unsubscribe } from '../../actions/subscription_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    hamDropdown: state.ui.hamDropdown,
    video: state.ui.video,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideo: (videoId) => dispatch(getVideo(videoId)),
    toggleHamDropdown: () => dispatch(receiveHamDropdown()),
    addView: (videoId) => dispatch(addView(videoId)),
    getComments: (videoId) => dispatch(getComments(videoId)),
    removeVideo: () => dispatch(removeVideo()),
    emotionVideo: (like) => dispatch(likeItem(like)),
    unemotionVideo: (likeId) => dispatch(unlikeItem(likeId)),
    subscribe: (currentUserId, subId) => dispatch(subscribe(currentUserId, subId)),
    unsubscribe: (currentUserId, subId) => dispatch(unsubscribe(currentUserId, subId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDetail));
