import React from 'react';


class VideoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      views: 0,
      user_id: null,
      video: null,
      videoImageUrl: null,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.checkFileType = this.checkFileType.bind(this);
  }

  componentDidMount() {
    this.setState({
      user_id: this.props.currentUserId,
    });
  }

  checkFileType(file) {
    return file.type.split("/")[0] === "video";
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    if (!this.checkFileType(file)) {
      this.props.provideErrors(["Only video files are allowed"]);
      return;
    } else {
      this.props.clearErrors();
    }
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({
        title: file.name.split(".")[0],
        video: file,
        videoImageUrl: fileReader.result,
      }, this.nextPage());
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // dropHandler(e) {
  //   e.preventDefault();
  //   const dataTransfer = e.dataTransfer;
  //   if (dataTransfer.items) {
  //
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    // const formData = new formData();
    // formData.append("video[title]", this.state.title);
    this.props.createVideo(this.state).then(
      (newVideoId) => this.props.history.push(`/videos/${newVideoId}`)
    );
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  nextPage() {
    if (this.props.errors.length === 0) {
      this.props.nextPage();
    }
  }

  render() {

    if (this.props.page === 1) {
      let errors = this.props.errors.map((error) => {
        return <h3 key='error' id="video-error">{error}</h3>;
      });

      return (
        <div className="video-form-container">
          <form className="video-form-one">
            { errors }
              <label htmlFor="input-file"
            className="file-input-label">
            </label>
            <h4 id="upload-text-1">Select file to upload</h4>
            <h4 id="upload-text-2">Or drag and drop a video file</h4>

            <input type="file" id="input-file"
              onChange={this.updateFile}
              />
          </form>
        </div>
      );
    } else if (this.props.page === 2) {
      let preview;
      if (this.state.video) {
        preview = (
          <video className="preview-video"
            autoPlay="autoPlay"
            muted="muted"
            src={window.URL.createObjectURL(this.state.video)}>
            Your browser does not support the video tag.
         </video>
       );
     } else {
       preview = <div></div>;
     }

      return (
        <div className="video-form-container">
          <form className="video-form-two">
            <h4 id="upload-info-text">Video Info</h4>
            <input type="text"
              id="upload-title"
              value={this.state.title}
              placeholder="Title"
              onChange={this.handleChange("title")}  />
            <textarea placeholder="Description"
              id="upload-description"
              onChange={this.handleChange("description")}
              value={this.state.description}
              />
            <button
              className="upload-button"
              onClick={this.handleSubmit}>Done
             </button>
             { preview }
          </form>
        </div>
      );

    } else {
      return <div></div>;
    }
  }


}

export default VideoForm;
