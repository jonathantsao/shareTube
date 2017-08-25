import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import { toggleVideoForm } from '../../actions/ui_actions';
import VideoForm from './form';

const mapStateToProps = (state) => {
  return {
    errors: state.ui.errors,
    page: state.ui.upload_page,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVideo: (video) => dispatch(createVideo(video)),
    nextPage: () => dispatch(toggleVideoForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
