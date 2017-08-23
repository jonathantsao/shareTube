import React from 'react';
import { Link } from 'react-router-dom';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.greetings = this.greetings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  greetings() {
    return (
      <div class="greet-user">
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }

  links() {
    return (
      <div className="session-links">
        <Link id="sign-in-button" to="/login">Sign In</Link>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      search: e.currentTarget.value
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      search: "",
    });
  }


  render() {
    const greeting = this.props.currentUser ? this.greetings() : this.links();
    return (
      <div className="main-nav-list">
        <button id="hamburger-menu"></button>
        <Link className="logo-text" to="/">ShareTube</Link>
        <form className="search-form">
          <input
            onChange={this.handleChange}
            value={this.state.search}
            placeholder="Search"
            className="search-bar"
            />
          <button id="search-button" onClick={this.handleSearch} />
        </form>
        <Link to="/upload" className="upload-link"><div id="upload-icon"></div></Link>
        { greeting }
      </div>
    );
  }

}

export default MainHeader;
