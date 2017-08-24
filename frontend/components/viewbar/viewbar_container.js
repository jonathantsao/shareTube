import { connect } from 'react-redux';
import { getVideos } from '../../actions/video_actions';
import ViewBarIndex from './viewbar_index';
import { receiveHamDropdown } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    videos: state.entities.videos.videos_list,
    video_ids: state.entities.videos.video_ids,
    dropdown: state.ui.hamDropdown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: () => dispatch(getVideos()),
    toggleDropdownHam: () => dispatch(receiveHamDropdown()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBarIndex);
