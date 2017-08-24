import React from 'react';
import { Link } from 'react-router-dom';
import { viewsParse, timeParse } from '../../util/functions';

class ViewbarIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.video;
    const path = `/videos/${video.id}`;
    return (
      <div className="viewbar-item">
        <Link className="thumbnail" to={path}><img src={video.thumbnail_url}/></Link>
        <div className="viewbar-item-title">
          <Link to={path}>{video.title}</Link>
        </div>
        <Link className="viewbar-user" to={`/users/${video.user_id}`}>{video.user.username}
        </Link>
        <div className="viewbar-item-details">
          <h5 className="item-details">
            {viewsParse(video.views)} views · {timeParse(video.upload_time)} ago
          </h5>
        </div>
      </div>
    );
  }


}

export default ViewbarIndexItem;
