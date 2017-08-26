import React from 'react';
import { viewsParse } from '../../util/functions';
import { Link } from 'react-router-dom';

const RelatedVideosIndexItem = ({ video }) => {
  return (
    <Link to={`/videos/${video.id}`}
      className="related-video-item">
      <img
        className="related-video-item-thumbnail"
        src={video.thumbnail_url}/>
      <div className="related-video-item-details">
        <h5 className="related-video-item-title">
          {video.title}
        </h5>
        <h6 className="related-video-item-user">
          {video.user.username}
        </h6>
        <h6 className="related-video-item-views">
          {viewsParse(video.views)}
        </h6>
      </div>
    </Link>
  );
};

export default RelatedVideosIndexItem;
