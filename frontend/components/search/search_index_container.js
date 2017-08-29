import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import { receiveHamDropdown, clearSearch } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';
import SearchIndex from './search_index';


const mapStateToProps = (state) => {
  return {
    videos: state.entities.videos.videos_list,
    videoIds: state.ui.search,
    dropdown: state.ui.hamDropdown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: (filter, searchQuery) => dispatch(searchVideos(filter, searchQuery)),
    toggleDropdown: () => dispatch(receiveHamDropdown()),
    clearSearch: () => dispatch(clearSearch()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
