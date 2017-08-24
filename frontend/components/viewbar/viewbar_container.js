import { connect } from 'react-redux';
import { getVideos } from '../../actions/video_actions';
import ViewBarIndex from './viewbar_index';
import { receiveHamDropdown } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    videos: state.entities.videos.videos_list,
    video_ids: state.entities.videos.video_ids,
    dropdown: state.ui.hamDropdown,
    filter: ownProps.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (filter) => dispatch(getVideos(filter)),
    toggleDropdownHam: () => dispatch(receiveHamDropdown()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBarIndex);
