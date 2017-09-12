import React from 'react';
import { viewsParse, parseDate, count } from '../../util/functions';
import { Link } from 'react-router-dom';
import RelatedVideosIndexContainer from './related_videos_index_container';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
import VideoPlayer from './video_player';

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
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.renderVideo = this.renderVideo.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderLikeWidth = this.renderLikeWidth.bind(this);
    this.renderDislikeWidth = this.renderDislikeWidth.bind(this);
    this.renderLikeButton = this.renderLikeButton.bind(this);
    this.renderDislikeButton = this.renderDislikeButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.props.getVideo(nextProps.match.params.videoId);
      this.props.getComments(nextProps.match.params.videoId);
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    if (this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
    const videoId = parseInt(this.props.match.params.videoId);
    this.props.getVideo(videoId).then(() => {
      document.querySelector("video").controlsList.add("nodownload");
    });
    window.addEventListener("resize", this.updateHeight);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    if (!this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
    window.removeEventListener("resize", this.updateHeight);
    this.props.removeVideo();
  }

  updateHeight() {
    let height;
    if ($(window).height() > 620 && this.state.height) {
      height = $(window).height() * 0.48;
      this.setState({
        height: height,
      });
    } else {
      height = $(window).height() * 0.56;
      this.setState({
        height: height,
      });
    }
  }

  handleLike(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.history.push("/login");
    }
    for (let i = 0; i < this.props.video.likes.length; i++) {
      if ((this.props.video.likes[i].user_id === this.props.currentUser.id) && this.props.video.likes[i].value === -1) {
        return this.props.unemotionVideo(this.props.video.likes[i].id);
      }
    }
    let like = {
      user_id: this.props.currentUser.id,
      video_id: this.props.video.id,
      value: 1,
    };
    this.props.emotionVideo(like);
  }

  handleDislike(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.history.push("/");
    }
    for (let i = 0; i < this.props.video.likes.length; i++) {
      if ((this.props.video.likes[i].user_id === this.props.currentUser.id) && this.props.video.likes[i].value === 1) {
        return this.props.unemotionVideo(this.props.video.likes[i].id);
      }
    }
    let dislike = {
      user_id: this.props.currentUser.id,
      video_id: this.props.video.id,
      value: -1,
    };
    this.props.emotionVideo(dislike);
  }

  handleSubscribe(e) {
    e.preventDefault();
    this.props.subscribe(this.props.currentUser.id, this.props.video.user_id);
  }

  handleUnsubscribe(e) {
    e.preventDefault();
    this.props.unsubscribe(this.props.currentUser.id, this.props.video.user_id);
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  renderVideo() {
    const videoHeight = this.state.height;
    let video = <div></div>;
    if (this.props.video) {
      video = (
        <VideoPlayer source={this.props.video.video_url}  height={videoHeight} match={this.props.match}/>
      );
    }
    return video;
  }

  renderDetails() {
    const showMore = <div id="more-toggle"></div>;
      // <button id="more-toggle">SHOW MORE</button>
    let details = <div></div>;
    if (this.props.video) {
      const date = parseDate(this.props.video.upload_time);
      details = (
        <div className="video-details">
          <h4 id="video-date">Published on {date}</h4>

          <div id="video-description-text">
            <p>{this.props.video.description}</p>
            <h3 id="license">License - Standard ShareTube License</h3>
          </div>
          { showMore }
        </div>
      );
    }
    return details;
  }

  renderLikeWidth() {
    let likeWidth;
    const totalLikes = this.props.video.likes.length;
    if (totalLikes > 0) {
      let likes = 0;
      this.props.video.likes.forEach((like) => {
        if (like.value === 1) {
          likes += 1;
        }
      });
      likes = 100 * likes / totalLikes;
      likeWidth = { width: `${likes}%` };
    } else {
      likeWidth = { width: "0%" };
    }
    return likeWidth;
  }

  renderDislikeWidth() {
    const totalLikes = this.props.video.likes.length;
    let dislikeWidth;
    if (totalLikes > 0) {
      let likes = 0;
      this.props.video.likes.forEach((like) => {
        if (like.value === 1) {
          likes += 1;
        }
      });
      likes = 100 * likes / totalLikes;
      let dislikes = 100 - likes;
      dislikeWidth = { width: `${dislikes}%` };
    } else {
      dislikeWidth = { width: "100%" };
    }
    return dislikeWidth;
  }

  renderLikeButton() {
    let likeButton = (
      <button disabled
        id="like-button-disabled"></button>
    );
    if (this.props.currentUser) {
      likeButton = (
        <button id="like-button" onClick={this.handleLike}></button>
      );
      this.props.video.likes.forEach((like) => {
        if (like.user_id === this.props.currentUser.id && like.value === 1) {
          likeButton = (
            <button id="like-button-disabled" disabled></button>
          );
        }
      });
    }
    return likeButton;
  }

  renderDislikeButton() {
    let dislikeButton = (
      <button disabled
        id="dislike-button-disabled"></button>
    );
    if (this.props.currentUser) {
      dislikeButton = (
        <button id="dislike-button" onClick={this.handleDislike}></button>
      );
      this.props.video.likes.forEach((like) => {
        if (like.user_id === this.props.currentUser.id && like.value === -1) {
          dislikeButton = (
            <button id="dislike-button-disabled" disabled></button>
          );
        }
      });
    }
    return dislikeButton;
  }

  renderDescription() {
    let description = <div></div>;
    if (this.props.video) {
      let views = viewsParse(this.props.video.views);

      const likeButton = this.renderLikeButton();
      const dislikeButton = this.renderDislikeButton();

      let numSubscribers = this.props.video.user.subscribers.length;
      let subscribeButton = (
        <div id="subscribers">
          <button onClick={this.handleRedirect}
            id="toggle-subscribe">
            <div id="subscribe-icon"></div>
            <h4>Subscribe</h4>
          </button>
          <p>{ numSubscribers }</p>
        </div>
      );
      let likeWidth = this.renderLikeWidth();
      let dislikeWidth = this.renderDislikeWidth();

      if (this.props.currentUser) {

        let method = this.handleSubscribe;
        let subscribeButtonText = "Subscribe";
        let id = "toggle-subscribe";
        this.props.currentUser.subscribed_channels.forEach((subscription) => {
          if (subscription === this.props.video.user_id) {
            method = this.handleUnsubscribe;
            subscribeButtonText = "Unsubscribe";
            id = "toggle-unsubscribe";
          }
        });
        if (this.props.currentUser.id === this.props.video.user_id) {
          method = "";
        }
        subscribeButton = (
          <div id="subscribers">
            <button onClick={method}
              id={id}>
              <div id="subscribe-icon"></div>
              <h4>{ subscribeButtonText }</h4>
            </button>
            <p>{ numSubscribers }</p>
          </div>
        );
      }


      description = (
        <div className="video-description">
          <h1 id="video-detail-title">{this.props.video.title}</h1>
          <div className="user-view">
            <div className="user-info">

              <Link to={`/users/${this.props.video.user_id}`}
                id="video-detail-user-icon">
                <img id="video-user-icon" src={this.props.video.user.image}/>
              </Link>

              <div>
                <Link to={`/users/${this.props.video.user_id}`} id="video-detail-user">
                  {this.props.video.user.username}
                </Link>
                { subscribeButton }
              </div>

            </div>
            <div id="video-detail-views"><h3>{views}</h3></div>
          </div>
          <div id="video-likes-section">
            <div className="video-detail-likes">
            </div>
            <div className="video-detail-likes-bar">
              <div className="like-bar">
                <div className="video-detail-likes-bar-percent" style={likeWidth}>
                </div>
                <div className="video-detail-likes-bar-total"
                style={dislikeWidth}>
                </div>
              </div>


              <div className="like-buttons">
                { likeButton }
                <h6 id="like-count">{count(this.props.video.likes, 1)}</h6>
                { dislikeButton }
                <h6 id="dislike-count">{count(this.props.video.likes, -1)}</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return description;
  }

  render() {
    const video = this.renderVideo();
    let description = this.renderDescription();
    const details = this.renderDetails();
    const form = this.props.video ? <CommentFormContainer videoId={this.props.video.id}/> : <div></div>;
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
