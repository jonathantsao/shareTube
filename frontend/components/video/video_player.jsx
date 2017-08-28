import React from 'react';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.mediaPlayer = document.getElementById("media-player");
    this.mediaPlayer.controls = false;
    this.mediaPlayer.addEventListener("timeupdate", this.updateProgressBar, false);



    this.stopPlayer = this.stopPlayer.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.replyMedia = this.replyMedia.bind(this);
    this.resetPlayer = this.resetPlayer.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.progressBar = document.getElementById('progress-bar');

    this.mediaPlayer.addEventListener("play", () => {
      let button = document.getElementById("play-pause-button");
      this.changeButtonType(button, "pause");
    }, false);

    this.mediaPlayer.addEventListener("pause", () => {
      let button = document.getElementById("play-pause-button");
      this.changeButtonType(button, "play");
    }, false);

    this.mediaPlayer.addEventListener("volumechange", (e) => {
      let button = document.getElementById("mute-button");
      if (this.mediaPlayer.muted) {
        this.changeButtonType(button, "unmute");
      } else {
        this.changeButtonType(button, "mute");
      }
    }, false);
  }

  togglePlayPause(e) {
    e.preventDefault();
    let button = e.currentTarget;
    if (this.mediaPlayer.paused || this.mediaPlayer.ended) {
      button.title = "pause";
      button.innerHTML = "pause";
      button.className = "pause";
      this.mediaPlayer.play();
    } else {
      button.title = "play";
      button.innerHTML = "play";
      button.className = "play";
      this.mediaPlayer.pause();
    }
  }

  stopPlayer(e) {
    e.preventDefault();
    this.mediaPlayer.pause();
    this.mediaPlayer.currentTime = 0;
  }

  changeButtonType(button, value) {
    button.value = value;
    button.innerHTML = value;
    button.className = value;
  }

  changeVolume(direction) {
    if (direction === "+") {
      this.mediaPlayer.volume += this.mediaPlayer === 1 ? 0 : 0.1;
    } else {
      this.mediaPlayer.volume -= (this.mediaPlayer === 0 ? 0 : 0.1);
    }
    this.mediaPlayer.volume = parseFloat(this.mediaPlayer.volume).toFixed(1);
  }

  toggleMute(e) {
    e.preventDefault();
    const button = e.currentTarget;
    if (this.mediaPlayer.muted) {
      this.changeButtonType(button, 'mute');
      this.mediaPlayer.muted = false;
    } else {
      this.changeButtonType(button, 'unmute');
      this.mediaPlayer.muted = true;
    }
  }

  replyMedia(e) {
    e.preventDefault();
    this.resetPlayer;
    this.mediaPlayer.play();
  }

  resetPlayer() {
    this.progressBar.value = 0;
    this.mediaPlayer.currentTime = 0;
    const button = document.getElementById("play-pause-button");
    this.changeButtonType(button, 'play');
  }

  updateProgressBar() {
   const percentage = Math.floor((100 / this.mediaPlayer.duration) *
   this.mediaPlayer.currentTime);
   this.progressBar.value = percentage;
   this.progressBar.innerHTML = percentage + '% played';
}


  render() {
    return (
      <div id='media-player'>
         <video id='media-video' src={this.props.videoSource} height={this.props.height} >
         </video>
         <progress id='progress-bar' min='0' max='100'
           value='0'>0% played</progress>
         <div id='media-controls'>
           <button id='play-pause-button'
             className='play' title='play'
             onClick={this.togglePlayPause}>
             Play
           </button>
           <button id='stop-button'
             className='stop' title='stop'
             onClick={this.stopPlayer}>
             Stop
           </button>
           <button id='volume-inc-button'
             className='volume-plus' title='increase volume'
             onClick={() => this.changeVolume("+")}>
             Increase volume
           </button>
           <button id='volume-dec-button' className='volume-minus'
             title='decrease volume'
             onClick={() => this.changeVolume("-")}>
             Decrease volume
           </button>
           <button id='mute-button'
             className='mute' title='mute'
             onClick={this.toggleMute}>
             Mute
           </button>
           <button id='replay-button'
             className='replay' title='replay' onClick={this.replayMedia}>
             Replay
           </button>

         </div>

      </div>
    );

  }

}

export default VideoPlayer;
