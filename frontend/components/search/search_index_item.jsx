import React from 'react';
import { viewsParse, timeParse } from '../../util/functions';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {

  render() {
    const video = this.props.video;
    const path = `/videos/${video.id}`;
    return (
      <li className="search-index-item" to={path}>
        <Link to={path}>
          <img className="search-item-thumbnail" src={video.thumbnail_url}/>
        </Link>
        <div className="search-item-right">
          <Link className="search-item-title" to={path}>
            {video.title}
          </Link>
          <Link className="search-item-user" to={`/users/${video.user_id}`}>{video.user.username}
          </Link>
          <Link className="search-item-details-line" to={path}>
            <h5 className="search-item-details">
              {viewsParse(video.views)} · {timeParse(video.upload_time)} ago
            </h5>
          </Link>
          <Link className="search-item-description" to={path}>
            <h5>{video.description}</h5>
          </Link>
        </div>
      </li>
    );
  }

}

export default SearchIndexItem;
