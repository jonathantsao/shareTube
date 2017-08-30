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

  componentWillUnmount() {
    this.props.clearSession();
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

  input() {
    return this.props.page === 1 ?
    (
      <input
       onChange={this.handleChange("username")} value={this.state.username}
       type="text"
       id="username-input"
      />
    ) : (
      <input
       onChange={this.handleChange("password")} value={this.state.password}
       type="password"
       id="password-input"
      />
    );
  }

  lastButton() {
    if (this.props.page === 1) {
      return (
        <button id="submit-form-button" type="submit" onClick={() => this.props.sendUsername(this.state.username)}>Next</button>
      );
    } else {
      const buttonText = this.props.formType === "login" ? "Sign In" : "Sign Up";
      return (
        <button id="submit-form-button" type="submit" onClick={this.handleSubmit}>{ buttonText }</button>
      );
    }
  }


  render() {
    const buttonText = this.props.formType === "login" ? "Sign In" : "Sign Up";
    const otherLink = this.props.formType === "login" ?
    <Link onClick={this.props.changeForm} to="/signup">Don't Have an Account? Create One Here</Link> :
    <Link onClick={this.props.changeForm} to="/login">Already Have an Account? Login Here</Link>;

    const errors = this.props.errors.map((error, idx) => {
      return (<li key={`id-${idx}`}>{error}</li >);
    });

    const input = this.input();
    const inputText = this.props.page === 1 ? "Username" : "Password";
    const lastButton = this.lastButton();

    let label = <label>{ inputText }</label>;
    if (this.props.page === 1 && this.state.username !== "") {
      label = <label className="label-active" >{ inputText }</label>;
    } else if (this.props.page === 2 && this.state.password !== "") {
      label = <label className="label-active" >{ inputText }</label>;
    }

    const formGreeting = this.props.page === 1 ?
    (<div className="process-form-greeting">
      <h1>{ buttonText }</h1>
      <p>to continue to ShareTube</p>
    </div>) :
    (<div className="process-form-greeting">
      <h1>Welcome</h1>
      <p>{this.state.username}</p>
    </div>);

    return(
      <div className="process-form-container">
        <div id="session-logo"></div>
        { formGreeting }
        <form className="process-form">
          <br />
          { input }
          <hr />
          { label }
          <br />
          <ul className="errors-list">{ errors }</ul>

          <div className="button-list">
            <button id="demo-button" type="button"
            onClick={this.handleDemo}>Demo Account</button>
          { lastButton }
          </div>
        </form>
        { otherLink }
      </div>
    );
  }

}

export default SessionForm;
