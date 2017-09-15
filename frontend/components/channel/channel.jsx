import React from 'react';
import Carousel from '../viewbar/carousel';

class Channel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      image_url: null,
      old_image_url: null,
    };
    this.createVideoList = this.createVideoList.bind(this);
    this.renderBanner = this.renderBanner.bind(this);
    this.renderUserInfo = this.renderUserInfo.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
    this.checkFileType = this.checkFileType.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.getVideos("all");
    const id = this.props.match.params.userId;
    this.props.getChannel(id).then(() => {
      this.setState({
        image_url: this.props.viewedUser.banner,
        old_image_url: this.props.viewedUser.banner,
      });
    });
    if (this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
  }

  componentWillUnmount() {
    this.props.removeChannel();
    this.setState({
      image: null,
      image_url: null,
    });
    if (!this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getVideos("all");
      this.props.getChannel(nextProps.match.params.userId).then(() => {
        this.setState({
          image: null,
          image_url: nextProps.viewedUser.banner,
          old_image_url: nextProps.viewedUser.banner,
        });
      });
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

  checkFileType(file) {
    return file.type.split("/")[0] === "image";
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    if (!this.checkFileType(file)) {
      this.props.provideErrors(["Only image files are allowed"]);
      return;
    } else {
      this.props.clearErrors();
    }
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({
        image: file,
        image_url: fileReader.result
      });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[cover]", this.state.image);
    const id = this.props.currentUser.id;
    this.props.editProfile(formData, id).then(() => {
      this.setState({
        image: null
      });
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      image: null,
      image_url: this.state.old_image_url,
    })
  }

  renderBanner() {
    let banner = <div></div>;
    if (this.props.viewedUser) {
      banner = <img id="channel-banner"
      src={this.state.image_url} />;
      if (this.props.viewedUser.id === this.props.currentUser.id) {
        banner = (
          <div>
            <input id="banner-input" onChange={this.updateFile} type="file"></input>
            <p id="banner-input-text">Change Banner</p>
            <img id="channel-banner-self" src={this.state.image_url} />
          </div>
        );
      }
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
    let coverButtons;
    if (this.props.viewedUser) {
      let numSubscribers = this.props.viewedUser.subscribers.length;
      numSubscribers = numSubscribers === 1 ? `${numSubscribers} subscriber` : `${numSubscribers} subscribers`;
      if (this.state.image) {
        let cancel = <button id="cancel-banner" onClick={this.handleCancel} >Cancel</button>;
        let submit = <button id="submit-banner" onClick={this.handleSubmit} >Save</button>;
        coverButtons = <div id="cover-buttons">{ submit } { cancel } </div>
      }
      if (this.props.currentUser) {
        if (this.props.currentUser.subscribed_channels.includes(this.props.viewedUser.id)) {
          button = (
            <div id="banner-buttons">
              { coverButtons }
              <button id="subscribed-button"
                onClick={this.unsubscribe}>SUBSCRIBED
              </button>
            </div>
          );
        } else {
          button = (
            <div id="banner-buttons">
              { coverButtons }              
              <button id="subscribe-button"
                onClick={this.subscribe}>SUBSCRIBE
              </button>
            </div>
          );
        }
      } else {
        button = (
          <div id="banner-buttons">
            { coverButtons }            
            <button id="subscribe-button"
              onClick={this.handleRedirect}>SUBSCRIBE
            </button>
          </div>
          
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
