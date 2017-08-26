import { connect } from 'react-redux';
import RelatedVideosIndex from './related_videos_index';
import { getVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    videoIds: state.ui[ownProps.filter],
    videoList: state.entities.videos.videos_list,
    filter: ownProps.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideos: (filter) => dispatch(getVideos(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedVideosIndex);
