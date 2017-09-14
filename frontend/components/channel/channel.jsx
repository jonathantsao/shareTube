import React from 'react';

class Channel extends React.Component {

  constructor(props) {
    super(props);

    this.createVideoList = this.createVideoList.bind(this);
  }


  componentDidMount() {
    const id = this.props.match.params.userId;
    this.props.getChannel(id);
    this.props.getVideos("all");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getChannel(nextProps.match.params.userId);
      this.props.getVideos("all");
    }
  }

  createVideoList() {
    if (this.props.viewedUser && this.props.videoList) {
      const videoList = this.props.viewedUser.videos.map((videoId) => {
        return this.props.videoList[videoId];
      });
      return videoList;
    }
    return <div></div>;
  }



  render() {
    return <div></div>;
  }

}

export default Channel;
