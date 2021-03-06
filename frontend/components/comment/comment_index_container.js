import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment, getComments } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';
import { likeItem, unlikeItem } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    comments: state.entities.comments.comments_list,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (videoId) => dispatch(getComments(videoId)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    emotionComment: (like) => dispatch(likeItem(like)),
    unemotionComment: (likeId) => dispatch(unlikeItem(likeId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
