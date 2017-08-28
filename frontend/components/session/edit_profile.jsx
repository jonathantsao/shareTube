import React from 'react';

class EditProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image: null,
      image_url: null,
      user_url: this.props.currentUser.image,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }

  componentDidMount() {
    if (this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
    if (this.props.userDropdown) {
      this.props.toggleUserDropdown();
    }
  }

  componentWillUnmount() {
    if (!this.props.hamDropdown) {
      this.props.toggleHamDropdown();
    }
  }

  checkFileType(file) {
    return file.type.split("/")[0] === "image";
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    if (!this.checkFileType(file)) {
      this.props.provideErrors(["Only image files are allowed"]);
      return;
    } else {
      this.props.clearErrors();
    }
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({
        image: file,
        image_url: fileReader.result
      });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[image]", this.state.image);
    const id = this.props.currentUser.id;
    this.props.editProfile(formData, id).then(() => {
      this.setState({
        image_url: null,
        image: null,
      });
      this.props.history.push("/");
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      image_url: null,
      image: null,
    }, this.props.history.push("/"));
  }

  render() {

    let submit = (
      <button id="make-changes-button-disabled" disabled>
        Make Changes
      </button>);
    if (this.state.image) {
      submit = (
        <button id="make-changes-button"
          onClick={this.handleSubmit}>
          Make Changes
        </button>
      );
    }

    const cancel = (
      <button id="make-changes-cancel"
        onClick={this.handleCancel}>
        Cancel
      </button>
    );

    return (
      <div id="edit-form-container">
        <div id="edit-form-greetings">
          <h2 id="edit-form-greeting-1">Edit your profile</h2>
          <h5 id="edit-form-greeting-2">Changes you make here show up across other ShareTube services like Drive, Photos, ShareTube* & others.</h5>
        </div>
        <div id="form-box">
          <form id="edit-form">
            <label htmlFor="photo-input" id="photo-label"><p>Select file to upload</p></label>
            <input id="photo-input"
              onChange={this.updateFile} type="file"></input>
            <img id="user-profile" src={this.state.user_url} />
            <img id="preview"
              src={this.state.image_url}
              onChange={this.handleChange}
              />
            <p id="user-photo-text">Your Photo</p>
            <p id="preview-photo">Preview</p>
          </form>
          <div id="right-user-edit">
            <ul id="user-edit-errors-list">
              <li>{this.props.errors[0]}</li>
            </ul>
            { submit }
            { cancel }
          </div>
        </div>
      </div>
    );
  }


}

export default EditProfile;
