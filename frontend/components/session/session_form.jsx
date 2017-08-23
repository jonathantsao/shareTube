import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }


  handleDemo(e){
    e.preventDefault();

    setTimeout(() => {
      this.setState({
        username: "demo@demo.com",
        password: "password",
      });
      this.props.processDemo(this.state);
    }, 100);
  }

  render() {
    const buttonText = this.props.formType === "login" ? "Sign In" : "Sign Up";
    const otherLink = this.props.formType === "login" ?
    <Link to="/signup">Don't Have an Account? Create One Here</Link> :
    <Link to="/login">Already Have an Account? Login Here</Link>;

    const errors = this.props.errors.map((error) => {
      return (<h5>{error}</h5>);
    });



    return(
      <div className="process-form-container">
        <div className="process-form-greeting">
          <h1>{ buttonText }</h1>
          <p>to continue to ShareTube</p>
        </div>
        <form className="process-form">
          { errors }
          <br />
          <input
           onChange={this.handleChange("username")} value={this.state.username}
           type="text"
           id="username-input"
          />
          <hr />
          <label>Username</label>
          <br />
          <input onChange={this.handleChange("password")} value={this.state.password}
          type="password"
          id="password-input"
          placeholder="Password" />
          <hr />

          <br />
          <div className="button-list">
            <button id="demo-button"
            onClick={this.handleDemo}>Demo Account</button>
            <button id="submit-form-button" onClick={this.handleSubmit}>{buttonText}</button>
          </div>
        </form>
        { otherLink }
      </div>
    );
  }

}

export default SessionForm;
