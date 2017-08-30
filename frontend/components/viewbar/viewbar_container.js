import { connect } from 'react-redux';
import { getVideos } from '../../actions/video_actions';
import ViewBarIndex from './viewbar_index';
import { receiveHamDropdown } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    videoIds: state.ui[ownProps.filter],
    videoList: state.entities.videos.videos_list,
    dropdown: state.ui.hamDropdown,
    filter: ownProps.filter,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (filter, userId) => dispatch(getVideos(filter, userId)),
    toggleDropdownHam: () => dispatch(receiveHamDropdown()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBarIndex);
