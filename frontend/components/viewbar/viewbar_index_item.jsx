import React from 'react';
import { Link } from 'react-router-dom';

class ViewbarIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.video;
    const path = `/videos/${video.id}`;
    return (
      <div className="viewbar-item">
        <Link to={path}><img src={video.thumbnail_url}/></Link>
        <div className="viewbar-item-title">
          <Link to={path}>{video.title}</Link>
        </div>
        <Link to={`/users/${video.user_id}`}>{video.user.username}
        </Link>
        <div className="viewbar-item-details">
          <h5 className="item-details">
            {video.views} views · {video.created_at}
          </h5>
        </div>
      </div>
    );
  }


}
