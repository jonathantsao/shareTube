import React from 'react';
import { viewsParse } from '../../util/functions';
import { Link } from 'react-router-dom';

class VideoDetail extends React.Component {

  constructor(props) {
    super(props);


  }

  componentDidMount() {
    if (this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
    const videoId = parseInt(this.props.match.params.videoId);
    this.props.getVideo(videoId);
  }

  render() {
    let video = <div></div>;
    let description = <div></div>;
    if (this.props.video) {
      video = (
        <div>
          <video src={this.props.video.video_url}
            autoPlay="autoPlay" controls className="video-player">
            Your browser does not support this video.
          </video>
        </div>
      );
      let views = viewsParse(this.props.video.views);
      description = (
        <div className="video-description">
          <h1 id="video-detail-title">{this.props.video.title}</h1>
          <div className="user-view">
            <div className="user-info">

              <Link to={`/users/${this.props.video.user_id}`}
                id="video-detail-user-icon">
                  <h3>
                    {this.props.video.user.username[0].toUpperCase()}
                  </h3>
              </Link>

              <Link to={`/users/${this.props.video.user_id}`} id="video-detail-user">
                {this.props.video.user.username}
              </Link>

            </div>

            <div id="video-detail-views"><h3>{views}</h3></div>
          </div>

          <div className="video-detail-likes">

          </div>

        </div>
      );
    }

    return (
      <div className="video-show-page">
        <div className="video-player-container">
          { video }
        </div>

        <div className="video-description-container">
          { description }
        </div>
      </div>
    );
  }

}

export default VideoDetail;
