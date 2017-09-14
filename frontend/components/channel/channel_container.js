import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getChannel, receiveHamDropdown } from '../../actions/ui_actions';
import { getVideos } from '../../actions/video_actions';
import Channel from './channel';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    viewedUser: state.ui.viewedUser,
    hamDropdown: state.ui.hamDropdown,
    videoList: state.entities.videos.videos_list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChannel: (channelId) => dispatch(getChannel(channelId)),
    toggleHamDropdown: () => dispatch(receiveHamDropdown()),
    getVideos: (filter) => dispatch(getVideos(filter)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
