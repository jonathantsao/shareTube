import { connect } from 'react-redux';
import { createComment, editComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    videoId: ownProps.videoId,
    type: ownProps.type,
    comment: ownProps.comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
