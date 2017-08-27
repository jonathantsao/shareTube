import React from 'react';
import { Link } from 'react-router-dom';
import { timeParse } from '../../util/functions';
import CommentFormContainer from './comment_form_container';

class CommentIndexItem extends React.Component {

  constructor() {
    super();
    this.state = {
      dropdown: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditDropdown = this.handleEditDropdown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dropdown: false,
    });
  }


  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment);
  }

  handleEditDropdown(e) {
    e.preventDefault();
    const dropdown = !this.state.dropdown;
    this.setState({
      dropdown,
    });
  }



  render() {

    let deleteButton = <div></div>;
    let editButton = <div></div>;
    if (this.props.currentUser.id === this.props.comment.user.id) {
      deleteButton = (<button onClick={this.handleDelete} className="delete-comment"></button>);
      editButton = (<button onClick={this.handleEditDropdown} className="edit-comment"></button>);
    }
    let editDropdown = <div></div>;

    if (this.state.dropdown) {
      return (
        <CommentFormContainer type={"edit"}
          comment={this.props.comment}/>
      );
    }

    const comment = this.props.comment;
    return (
      <li className="comment-index-item">

        <Link to={`/users/${comment.user.id}`}
          className="comment-index-user-icon">
          <p>{comment.user.username[0].toUpperCase()}</p>
        </Link>

        <div className="comment-index-item-details">
          <div className="comment-index-create-info">
            <Link to={`/users/${comment.user.id}`} className="comment-index-user-name">
              {comment.user.username}
            </Link>
            <h6 className="comment-index-create-time">
              {timeParse(comment.created_at)}
            </h6>


          </div>
          <div className="comment-body">
            <p className="comment-index-item-body">
              {comment.body}
            </p>
            { deleteButton }
            { editButton }
          </div>
        </div>


      </li>
    );
  }


}

export default CommentIndexItem;
