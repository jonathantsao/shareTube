import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import { toggleVideoForm, receiveErrors, clearErrors, clearUpload, receiveHamDropdown, toggleLoading } from '../../actions/ui_actions';
import VideoForm from './form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    errors: state.ui.errors,
    page: state.ui.uploadPage,
    currentUserId: state.session.currentUser.id,
    dropdown: state.ui.hamDropdown,
    loading: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearUpload: () => dispatch(clearUpload()),
    createVideo: (video) => dispatch(createVideo(video)),
    nextPage: () => dispatch(toggleVideoForm()),
    provideErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    toggleDropdown: () => dispatch(receiveHamDropdown()),
    toggleLoading: () => dispatch(toggleLoading()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoForm));
