import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.props.getComments(nextProps.match.params.videoId);
    }
  }

  componentDidMount() {
    const videoId = this.props.match.params.videoId;
    this.props.getComments(videoId);
  }

  render() {

    if (Object.keys(this.props.comments).length === 0) {
      return <div></div>;
    } else {
      const comments = Object.keys(this.props.comments).map((commentId) => {
        return <CommentIndexItem
          key={`${commentId}`} deleteComment={this.props.deleteComment}
          currentUser={this.props.currentUser} comment={this.props.comments[commentId]}
          videoId={this.props.match.params.videoId} />;
      });
      return (
        <div>
          <ul className="comment-index-list">
            { comments }
          </ul>
        </div>
      );

    }
  }


}

export default CommentIndex;
