import { connect } from 'react-redux';
import { getVideo, receiveHamDropdown } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';
import VideoDetail from './video_detail';

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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDetail));
