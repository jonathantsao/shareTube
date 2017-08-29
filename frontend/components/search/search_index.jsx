import React from 'react';
import SearchIndexItem from './search_index_item';
import { filterVideo } from '../../util/functions';

class SearchIndex extends React.Component {

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

    return (
      <div className="search-index-container">
        <div id="filter-bar">
          <h4>{filterVideo(this.props.videoIds.length)}</h4>
        </div>
        <ul id="search-index-list">
          { videoIndex }
        </ul>
      </div>
    );
  }

}

export default SearchIndex;
