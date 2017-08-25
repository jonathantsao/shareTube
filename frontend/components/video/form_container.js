import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoForm from './form';

const mapStateToProps = (state) => {
  return {
    errors: state.ui.errors,
    page: state.ui.upload_page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVideo: (video) => dispatch(createVideo(video)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
