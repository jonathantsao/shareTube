import React from 'react';
import Carousel from '../viewbar/carousel';

class Channel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
    this.createVideoList = this.createVideoList.bind(this);
    this.renderBanner = this.renderBanner.bind(this);
    this.renderUserInfo = this.renderUserInfo.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }


  componentDidMount() {
    this.props.getVideos("all");
    const id = this.props.match.params.userId;
    this.props.getChannel(id);
    if (this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
  }

  componentWillUnmount() {
    this.props.removeChannel();
    if (!this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getVideos("all");
      this.props.getChannel(nextProps.match.params.userId);
    }
  }

  createVideoList() {
    if (this.props.viewedUser && Object.keys(this.props.videoList).length > 0) {
      const videoList = this.props.viewedUser.videos.map((videoId) => {
        return this.props.videoList[videoId];
      });
      return videoList;
    }
    return [];
  }

  renderBanner() {
    let banner = <div></div>;
    if (this.props.viewedUser) {
      banner = <img id="channel-banner"
      src={this.props.viewedUser.banner} />;
    }
    return banner;
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  subscribe(e) {
    e.preventDefault();
    this.props.subscribe(this.props.currentUser.id, this.props.viewedUser.id);
  }

  unsubscribe(e) {
    e.preventDefault();
    this.props.unsubscribe(this.props.currentUser.id, this.props.viewedUser.id);
  }

  renderUserInfo() {
    let userInfo = <div></div>;
    let button = <div></div>;
    if (this.props.viewedUser) {
      let numSubscribers = this.props.viewedUser.subscribers.length;
      numSubscribers = numSubscribers === 1 ? `${numSubscribers} subscriber` : `${numSubscribers} subscribers`;

      if (this.props.currentUser) {
        if (this.props.currentUser.subscribed_channels.includes(this.props.viewedUser.id)) {
          button = (
            <button id="subscribed-button"
              onClick={this.unsubscribe}>SUBSCRIBED
            </button>
          );
        } else {
          button = (
            <button id="subscribe-button"
              onClick={this.subscribe}>SUBSCRIBE
            </button>
          );
        }
      } else {
        button = (
          <button id="subscribe-button"
            onClick={this.handleRedirect}>SUBSCRIBE
          </button>
        );
      }

      userInfo = (
        <div id='user-info'>
          <img id="user-info-thumbnail"
            src={this.props.viewedUser.image} />
          <div id="user-info-text">
            <p id="user-info-username">
              {this.props.viewedUser.username}
            </p>
            <p id="user-info-subs">{ numSubscribers }</p>
          </div>
          { button }
        </div>
      );
    }
    return userInfo;
  }

  renderCarousel(videoList) {
    const viewbarSize = videoList.length;
    return (
      <div className="viewbar channel">
        <div className={viewbarSize}>
          <div className="viewbar-index channel-index">
            <h4 className="viewbar-title channel-title">Uploads</h4>
            <Carousel videos={videoList}/>
          </div>
        </div>
      </div>
    );
  }


  render() {
    let banner = this.renderBanner();
    let videoList = this.createVideoList();
    let userInfo = this.renderUserInfo();
    let carousel = videoList.length > 0 ? this.renderCarousel(videoList) : <div></div>;
    let id = "channel-page";
    if (!this.props.hamDropdown) id = "channel-page full-page";
    return (
      <div className={id}>
        { banner }
        { userInfo }
        { carousel }
      </div>
    );
  }

}

export default Channel;
