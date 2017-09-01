import React from 'react';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      muted: false
    };

    this.playPause = this.playPause.bind(this);
    this.vidSeek = this.vidSeek.bind(this);
    this.seekTimeUpdate = this.seekTimeUpdate.bind(this);
    this.vidMute = this.vidMute.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.clickSeek = this.clickSeek.bind(this);
    this.setVolumeManual = this.setVolumeManual.bind(this);

  }

  componentDidMount() {
    this.vid = document.getElementById("video");
    this.seekSlider = document.getElementById("seekslider");
    this.currentTimeText = document.getElementById("curTimeText");
    this.durationTimeText = document.getElementById("durTimeText");
    this.volumeSlider = document.getElementById("volumeslider");
    this.vid.addEventListener("timeupdate", this.seekTimeUpdate, false);
  }

  componentWillUnmount() {
    this.vid.removeEventListener("timeupdate", this.seekTimeUpdate, false);
  }

  playPause(e) {
    e.preventDefault();
    if (this.vid.paused) {
      this.vid.play();
      this.setState({
        paused: false,
      });
    } else {
      this.vid.pause();
      this.setState({
        paused: true,
      });
      e.currentTarget.style.background = "image-url(play-button-overlay.png)";
    }
  }

  vidSeek(e) {
    const seekTo = this.vid.duration * (e.currentTarget.value / 100);
    this.vid.currentTime = seekTo;
  }

  setVolumeManual(e) {
    const pageWidth = e.view.innerWidth * 0.01;
    const relatedVideosWidth = 419;
    const videoPlayerWidth = document.getElementById("video-controls-bar").clientWidth;
    const marginLeft = (e.view.innerWidth - pageWidth - relatedVideosWidth - videoPlayerWidth) / 2;
    const realMargin = marginLeft + 126;
    const clickX = e.pageX - realMargin;
    e.currentTarget.value = clickX;
    this.vid.volume = clickX / 100;
  }

  clickSeek(e) {
    const pageWidth = e.view.innerWidth * 0.01;
    const relatedVideosWidth = 419;
    const videoPlayerWidth = e.currentTarget.clientWidth;
    const marginLeft = (e.view.innerWidth - pageWidth - relatedVideosWidth - videoPlayerWidth) / 2;
    const clickX = e.pageX - marginLeft;
    this.vid.currentTime = this.vid.duration * (clickX / videoPlayerWidth);
  }

  seekTimeUpdate() {
    const nt = this.vid.currentTime * (100 / this.vid.duration);
    this.seekSlider.value = nt;
    let currentMin = Math.floor(this.vid.currentTime / 60);
    let currentSec = Math.floor(this.vid.currentTime - currentMin * 60);
    let durationMin = Math.floor(this.vid.duration / 60);
    let durationSec = Math.floor(this.vid.duration - durationMin * 60);
    if (currentSec < 10) {
      currentSec = "0" + currentSec;
    }
    if (currentMin < 10) {
      currentMin = "0" + currentMin;
    }
    if (durationSec < 10) {
      durationSec = "0" + durationSec;
    }
    if (durationMin < 10) {
      durationMin = "0" + durationMin;
    }
    this.currentTimeText.innerHTML = currentMin + ":" + currentSec;
    this.durationTimeText.innerHTML = durationMin + ":" + durationSec;
    if (this.vid.ended) {
      this.setState({
        paused: true,
      });
    }
  }

  vidMute(e) {
    e.preventDefault();
    if (this.vid.muted) {
      this.vid.muted = false;
      this.setState({
        muted: false,
      });
      this.volumeSlider.value = 100;
    } else {
      this.vid.muted = true;
      this.vid.volume = 1;
      this.setState({
        muted: true,
      });
      this.volumeSlider.value = 0;
    }
  }

  setVolume(e) {
    this.vid.volume = e.currentTarget.value / 100;
    e.currentTarget.value = this.vid.volume * 100;
  }

  toggleFullScreen(e) {
    e.preventDefault();

    if (this.vid.requestFullScreen) {
      this.vid.requestFullScreen();
    } else if (this.vid.webkitRequestFullScreen) {
      this.vid.webkitRequestFullScreen();
    } else if (this.vid.mozRequestFullScreen) {
      this.vid.mozRequestFullScreen();
    }
  }


  render() {
    let playpausebtn = <div id="pause-btn"></div>;

    if (this.state.paused) {
      playpausebtn = <div id="play-btn"></div>;
    }

    let mutebtn = <div id="mute-btn"></div>;

    if (this.state.muted) {
      mutebtn = <div id="sound-btn"></div>;
    }

    return(
      <div id="video-player-box">
        <video id="video" autoPlay="autoPlay" src={this.props.source} height={this.props.height}>

        </video>
        <div id="control-panel">
          <progress id="seekslider" type="range" min="0" max="100"
            value="0" step="0.1" onChange={this.vidSeek} onClick={this.clickSeek}/>
          <div id="video-controls-bar">
            <div id="first-buttons">
              <button id="playpausebtn" onClick={this.playPause}>
                { playpausebtn }
              </button>
              <span id="curTimeText">00:00</span> /
              <span id="durTimeText">00:00</span>
                <progress id="volumeslider" type="range" min="0" max="100"
                  value="100" step="1" onChange={this.setVolume} onClick={this.setVolumeManual}/>
              <button id="mutebtn" onClick={this.vidMute}>
                { mutebtn }
              </button>
            </div>

            <button id="full-screen-btn" onClick={this.toggleFullScreen}>
              <div id="fullscreen"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
