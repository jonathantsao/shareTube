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
    this.updateHamburger = this.updateHamburger.bind(this);
    this.viewbarSize = this.viewbarSize.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      if (this.props.filter === "likes" || this.props.filter === "dislikes" || this.props.filter === "subscriptions") {
        this.props.getVideos(this.props.filter, this.props.currentUser.id);
      }
    }
    if (this.props.filter !== "likes" && this.props.filter !== "dislikes" && this.props.filter !== "subscriptions"){
      this.props.getVideos(this.props.filter);
    }
    window.addEventListener("resize", this.updateWidth);
    window.addEventListener("resize", this.updateHamburger);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
    window.removeEventListener("resize", this.updateHamburger);
  }

  updateHamburger() {
    if (slidesCount(this.state.width) >= 3 && !this.props.dropdown) {
      this.props.toggleDropdownHam();
    } else if (slidesCount(this.state.width) < 3 && this.props.dropdown) {
      this.props.toggleDropdownHam();
    }
  }

  updateWidth() {
    this.setState({
      width: $(window).width()
    });
  }

  viewbarSize() {


    let videoIds = this.props.videoIds.filter((el) => {
      return el !== undefined;
    });

    let videos = videoIds.map((id) => {
      return this.props.videoList[id];
    });

    let videoList = videos.filter((el) => {
      return el !== undefined;
    });


    let viewbarIndex;
    let viewbarTitleText;
    switch(this.props.filter) {
      case "all":
        viewbarTitleText = "All Videos";
        break;
      case "recent":
        viewbarTitleText = "Recently uploaded";
        break;
      case "hot":
        viewbarTitleText = "Hot";
        break;
      case "likes":
        viewbarTitleText = "Liked Videos";
        break;
      case "dislikes":
        viewbarTitleText = "Disliked Videos";
        break;
      case "subscriptions":
        viewbarTitleText = "Your Subscriptions";
        break;
    }
    const viewbarTitle = (
      <h4 className="viewbar-title">{ viewbarTitleText }</h4>
    );
    switch(slidesCount(this.state.width)) {
      case 6:
        viewbarIndex = (
          <div className="viewbar-index six">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        break;
      case 5:
        viewbarIndex = (
          <div className="viewbar-index five">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        break;
      case 4:
        viewbarIndex = (
          <div className="viewbar-index four">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        break;
      case 3:
        viewbarIndex = (
          <div className="viewbar-index three">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        break;
      case 2:
        viewbarIndex = (
          <div className="viewbar-index two">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
        break;
      case 1:
        viewbarIndex = (
          <div className="viewbar-index two">
            { viewbarTitle }
            <Carousel videos={videoList}/>
          </div>
        );
    }
    return viewbarIndex;
  }

  render() {
    if (this.props.filter === "likes" || this.props.filter === "dislikes" || this.props.filter === "subscriptions") {
      if (!this.props.currentUser) return <div></div>;
      if (this.props.videoIds) {
        if (this.props.videoIds.length === 0) {
          return <div></div>;
        }
      }
    }

    const viewbarIndex = this.viewbarSize();
    const viewbarSize = this.props.dropdown ? "viewbar-container" : "viewbar-container full";
    return (
      <div className="viewbar">
        <div className={viewbarSize}>
          { viewbarIndex }
        </div>
      </div>
    );

  }

}

export default ViewBarIndex;
