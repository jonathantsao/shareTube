import React from 'react';
import SearchIndexItem from './search_index_item';
import { filterVideo } from '../../util/functions';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleFilterHot = this.handleFilterHot.bind(this);
    this.handleFilterRecent = this.handleFilterRecent.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.location.search !== nextProps.location.search) {
      const searchQuery = nextProps.location.search.split("=").slice(1).join("");
      this.props.searchVideos("search hot", searchQuery);
    }
  }

  componentDidMount() {
    const searchQuery = this.props.location.search.split("=").slice(1).join("");
    this.props.searchVideos("search hot", searchQuery);
    if (this.props.dropdown) {
      this.props.toggleDropdown();
    }
  }

  handleToggle(e) {
    e.preventDefault();
    const dropdown = !this.state.dropdown;
    this.setState({
      dropdown
    });
  }

  handleFilterHot() {
    this.setState({
      dropdown: false
    });
    const searchQuery = this.props.location.search.split("=").slice(1).join("");
    this.props.searchVideos("search hot", searchQuery);
  }

  handleFilterRecent() {
    this.setState({
      dropdown: false
    });
    const searchQuery = this.props.location.search.split("=").slice(1).join("");
    this.props.searchVideos("search recent", searchQuery);
  }


  componentWillUnmount() {
    this.props.clearSearch();
  }

  render() {

    let videoIndex = <div></div>;

    if (this.props.videoIds.length > 0) {
      const videos = this.props.videoIds.map((videoId) => {
        return this.props.videos[videoId];
      });

      videoIndex = videos.map((video) => {
        return <SearchIndexItem video={video} key={`${video.id}`} />;
      });
    }

    let dropdown = <div></div>;
    if (this.state.dropdown) {
      dropdown = (
        <div id="filter-dropdown">
          <ul id="filter-options">
            <li id="sort-by-text">Sort by</li>
            <li onClick={this.handleFilterRecent}>Recent</li>
            <li onClick={this.handleFilterHot}>Most Views</li>
          </ul>
        </div>
      );
    }

    return (
      <div className="search-index-container">
        <div id="filter-section">
          <div id="filter-bar">
            <button id="filter-toggle"
              onClick={this.handleToggle}>
              <h6>Filters</h6><div className="arrow-down"></div>
            </button>
            <h4>{filterVideo(this.props.videoIds.length)}</h4>
          </div>
          { dropdown }
        </div>
        <ul id="search-index-list">
          { videoIndex }
        </ul>
      </div>
    );
  }

}

export default SearchIndex;
