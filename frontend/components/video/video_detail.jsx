import React from 'react';
import { viewsParse, parseDate } from '../../util/functions';
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
    let details = <div></div>;
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
      let date = parseDate(this.props.video.upload_time);
      details = (
        <div className="video-details">
          <h4 id="video-date">Published on {date}</h4>
          <p id="video-description-text">{this.props.video.description}

            <h3 id="license">License - Standard Bullshit License</h3>
          </p>
          <button id="more-toggle">SHOW MORE</button>
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

        <div className="video-detail-container">
          { details }
        </div>

      </div>
    );
  }

}

export default VideoDetail;
