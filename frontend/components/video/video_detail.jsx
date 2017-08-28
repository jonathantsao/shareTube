import React from 'react';
import { viewsParse, parseDate, count } from '../../util/functions';
import { Link } from 'react-router-dom';
import RelatedVideosIndexContainer from './related_videos_index_container';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';

class VideoDetail extends React.Component {

  constructor(props) {
    super(props);


    let height;
    if ($(window).height() > 620) {
      height = $(window).height() * 0.48;
    } else {
      height = $(window).height() * 0.56;
    }

    this.state = {
      height: height,
    };

    this.updateHeight = this.updateHeight.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.props.getVideo(nextProps.match.params.videoId);
      this.props.addView(nextProps.match.params.videoId);
      this.props.getComments(nextProps.match.params.videoId);
    }
  }

  componentDidMount() {
    if (this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
    const videoId = parseInt(this.props.match.params.videoId);
    this.props.getVideo(videoId);
    window.addEventListener("resize", this.updateHeight);
  }

  updateHeight() {
    let height;
    if ($(window).height() > 620 && this.state.height) {
      height = $(window).height() * 0.48;
      this.setState({
        height: height,
      });
      document.getElementsByClassName("vsc-controller")[0].style.height = `${height}px`;
    } else {
      height = $(window).height() * 0.56;
      this.setState({
        height: height,
      });
      document.getElementsByClassName("vsc-controller")[0].style.height = `${height}px`;
    }
  }

  handleLike(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.history.push("/login");
    } else {
      const like = {
        user_id: this.props.currentUser.id,
        video_id: this.props.video.id,
      };
      this.props.likeVideo(like);
    }
  }

  handleDislike(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.history.push("/");
    } else {
      const dislike = {
        user_id: this.props.currentUser.id,
        video_id: this.props.video.id,
      };
      this.props.dislikeItem(dislike);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight);
  }


  render() {
    let video = <div></div>;
    let description = <div></div>;
    let details = <div></div>;
    let videoHeight = this.state.height;
    if (this.props.video) {
      video = (
        <video src={this.props.video.video_url}
          autoPlay="autoPlay" controls className="video-player" height={videoHeight}>
          Your browser does not support this video.
        </video>
      );

      let views = viewsParse(this.props.video.views);

      let likeButton = (
        <button onClick={this.handleLike}
          id="like-button"></button>
      );
      let dislikeButton = (
        <button onClick={this.handleDislike}
          id="dislike-button"></button>
      );

      this.props.video.likes.forEach((like) => {
        if (like.user_id === this.props.currentUser.id) {
          likeButton = (
            <button id="like-button-disabled" disabled></button>
          );
        }
      });

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
          <div id="video-likes-section">
            <div className="video-detail-likes">
            </div>
            <div className="video-detail-likes-bar">
              <div className="like-buttons">
                { likeButton }
                <h6 id="like-count">{count(this.props.video.likes)}</h6>
                { dislikeButton }
              </div>
            </div>
          </div>
        </div>
      );
      let date = parseDate(this.props.video.upload_time);
      details = (
        <div className="video-details">
          <h4 id="video-date">Published on {date}</h4>

        <div id="video-description-text">
          <p>{this.props.video.description}</p>
          <h3 id="license">License - Standard Bullshit License</h3>
        </div>

          <button id="more-toggle">SHOW MORE</button>
        </div>
      );
    }
    let form = <div></div>;
    if (this.props.video) {
      form = <CommentFormContainer videoId={this.props.video.id}/>;
    }

    return (
      <div className="video-show-page">
        <div className="video-show-page-left">

            { video }


          <div className="video-description-container">
            { description }
          </div>

          <div className="video-detail-container">
            { details }
          </div>

          <div className="comments-container">
            { form }
            <CommentIndexContainer />
          </div>

        </div>

      <div className="related-videos-container">
        <RelatedVideosIndexContainer filter="all" />
      </div>

    </div>
    );
  }

}

export default VideoDetail;
