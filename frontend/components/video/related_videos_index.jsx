import React from 'react';
import RelatedVideosIndexItem from './related_videos_index_item';


class RelatedVideosIndex extends React.Component {

  constructor(props) {
    super(props);
    this.filterVideos = this.filterVideos.bind(this);
  }

  componentDidMount() {
    this.props.getVideos(this.props.filter);
  }

  filterVideos() {
    let videoIds = this.props.videoIds.filter((el) => {
      return el !== undefined;
    });

    let videos = videoIds.map((id) => {
      return this.props.videoList[id];
    });

    let videoList = videos.filter((el) => {
      return el !== undefined;
    });

    return videoList;
  }

  render() {
    const videoList = this.filterVideos();
    if (videoList.length === 0) {
      return <div></div>;
    } else {
      const videoListWithItems = videoList.map((video) => {
        return <RelatedVideosIndexItem
          video={video} key={`${video.id}`} />;
      });

      return (
        <div className="related-videos-index">
          <ul>
            { videoListWithItems }
          </ul>
        </div>
      );
    }
  }

}

export default RelatedVideosIndex;
