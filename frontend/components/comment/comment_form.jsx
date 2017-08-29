import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    let body = "";
    if (this.props.comment) {
      body = this.props.comment.body;
    }
    this.state = {
      user_id: null,
      video_id: null,
      body: body,
      dropdown: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.setState({
      video_id: this.props.videoId,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.setState({
        video_id: nextProps.match.params.videoId,
      });
    }
  }

  handleChange(e) {
    this.setState({
      body: e.currentTarget.value,
    });
  }

  handleDropdown() {
    this.setState({
      dropdown: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      video_id: this.state.video_id,
      user_id: this.props.currentUser.id,
    };
    this.props.createComment(comment);
    this.setState({
      body: "",
      dropdown: false,
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      dropdown: false,
    });
  }

  handleRedirect() {
    this.props.history.push("/login");
  }

  handleEdit(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      video_id: this.props.comment.video_id,
      user_id: this.props.currentUser.id,
      id: this.props.comment.id,
    };
    this.props.editComment(comment);
  }

  render() {

    if (this.props.videoId || this.props.comment) {
      let form;
      let iconText;
      let button = <div></div>;

      let submitButton;
      let cancelButton;
      let cancelMethod = this.handleCancel;
      if (this.state.body === "") {
        submitButton = (<button id="submit-comment-disabled" disabled>Comment</button>);
      } else {
        let submitText = "Comment";
        let submitMethod = this.handleSubmit;

        if (this.props.type === "edit") {
          submitText = "Save";
          submitMethod = this.handleEdit;
          cancelMethod = this.handleEdit;
        }
        submitButton = (<button id="submit-comment"
        type="submit"
          onClick={submitMethod}>{submitText}</button>);
      }
      cancelButton = (<button id="cancel-comment"
      onClick={cancelMethod}>Cancel</button>);

      if (this.state.dropdown) {
        button = (
          <div id="comment-dropdown">
            { cancelButton }
            { submitButton }
          </div>
        );
      }
      if (this.props.currentUser) {
        iconText = (
          <Link className="comment-index-user-icon"
            to={`/users/${this.props.currentUser.id}`}>
            <img src={this.props.currentUser.image}
              id="commenter-icon"/>
          </Link>
        );
        form = (
          <form id="comment-form">
            <textarea id="comment-input"
              placeholder="Add a public comment..."
              value={this.state.body}
              onChange={this.handleChange}
              onClick={this.handleDropdown}
              />
            { button }
          </form>
        );
      } else {
          iconText = <div className="no-icon-div"><p id="no-icon">?</p></div>;
          form = (
            <form id="comment-form">
              <div>
                <div id="comment-arrow"></div>
                <textarea id="comment-input"
                  placeholder="Add a public comment..."
                  onClick={this.handleRedirect}
                  />
              </div>
            </form>
        );
      }
      return (
        <div className="comment-form-container">
          { iconText }
          { form }
        </div>
      );
    } else {
      return <div></div>;
    }

  }

}

export default CommentForm;
