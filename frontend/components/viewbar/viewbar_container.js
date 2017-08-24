import { connect } from 'react-redux';
import { getVideos } from '../../actions/video_actions';
import ViewBarIndex from './viewbar_index';

const mapStateToProps = (state) => {
  return {
    videos: state.entities.videos.videos_list,
    video_ids: state.entities.videos.video_ids,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: () => dispatch(getVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBarIndex);
