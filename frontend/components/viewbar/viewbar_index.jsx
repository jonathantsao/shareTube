import React from 'react';
import Carousel from './carousel';

class ViewBarIndex extends React.Component {

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const videos = this.props.videos;
    const videoIds = this.props.video_ids;
    const videoList = videoIds.map((id) => {
      return videos[id];
    });


    return (
      <div className="viewbar-index">
        <Carousel videos={videoList}/>
      </div>
    );

  }

}

export default ViewBarIndex;
