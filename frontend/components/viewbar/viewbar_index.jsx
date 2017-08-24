import React from 'react';
import Carousel from './carousel';
import { slidesCount } from '../../util/functions';

class ViewBarIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: $(window).width()
    };

    this.updateWidth = this.updateWidth.bind(this);
    this.viewbarSize = this.viewbarSize.bind(this);
  }

  componentDidMount() {
    this.props.getVideos();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({
      width: $(window).width()
    });
  }

  viewbarSize() {
    const videos = this.props.videos;
    const videoIds = this.props.video_ids;
    const videoList = videoIds.map((id) => {
      return videos[id];
    });

    let viewbarIndex;
    const viewbarTitle = (
      <h4 className="viewbar-title">All Videos</h4>
    );
    switch(slidesCount(this.state.width)) {
      case 6:
        viewbarIndex = (
          <div className="viewbar-index six">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        if (!this.props.dropdown) {
          this.props.toggleDropdownHam();
        }
        break;
      case 5:
        viewbarIndex = (
          <div className="viewbar-index five">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        if (!this.props.dropdown) {
          this.props.toggleDropdownHam();
        }
        break;
      case 4:
        viewbarIndex = (
          <div className="viewbar-index four">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );

        if (!this.props.dropdown) {
          this.props.toggleDropdownHam();
        }
        break;
      case 3:
        viewbarIndex = (
          <div className="viewbar-index three">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        if (!this.props.dropdown) {
          this.props.toggleDropdownHam();
        }
        break;
      case 2:
        viewbarIndex = (
          <div className="viewbar-index two">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        if (this.props.dropdown) {
          this.props.toggleDropdownHam();
        }
        break;
      case 1:
        viewbarIndex = (
          <div className="viewbar-index two">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        if (this.props.dropdown) {
          this.props.toggleDropdownHam();
        }
    }
    return viewbarIndex;
  }

  render() {

    const viewbarIndex = this.viewbarSize();

    return (
      <div className="viewbar">
        <div className="viewbar-container">
          { viewbarIndex }
        </div>
      </div>
    );

  }

}

export default ViewBarIndex;
