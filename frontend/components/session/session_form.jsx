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

  render() {
    const buttonText = this.props.formType === "login" ? "Login" : "Signup";
    const otherLink = this.props.formType === "login" ?
    <Link to="/signup">Create Account</Link> :
    <Link to="/login">Already Have an Account? Login Here</Link>;

    const errors = this.props.errors.map((error) => {
      return (<h5>{error}</h5>);
    });

    return(
      <div className="process-form">
        <h2>{ buttonText }</h2>
        { errors }
        <form>
          <label>Username
          <br />
            <input
             onChange={this.handleChange("username")} value={this.state.username}
             type="text" />
          </label>
          <br />

          <label>Password
          <br />
            <input onChange={this.handleChange("password")} value={this.state.password}
            type="password" />
          </label>
          <br />

          <button onClick={this.handleSubmit}>{buttonText}</button>
        </form>
        <br />
        <br />
        { otherLink }
      </div>
    );
  }

}

export default SessionForm;
