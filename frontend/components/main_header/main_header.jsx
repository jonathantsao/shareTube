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
    this.handleToggleHam = this.handleToggleHam.bind(this);
    this.handleToggleUser = this.handleToggleUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(
      () => {
        return this.props.history.push("/");
      });
  }

  greetings() {
    const buttonText = this.props.currentUser.username[0].toUpperCase();

    if (!this.props.userDropdown) {
      return (
        <div className="greeting">
          <img id="user-toggle-button"
            onClick={this.handleToggleUser} src={this.props.currentUser.image}/>
        </div>
      );
    } else {
      return (
        <div className="greeting">
          <img id="user-toggle-button"
            onClick={this.handleToggleUser} src={this.props.currentUser.image}/>
          <div className="arrow-up"></div>
          <section className="user-toggle-menu">
            <h5 id="greet-user">{this.props.currentUser.username.toUpperCase()}</h5>
            <Link
              to={`/users/${this.props.currentUser.id}`}
              id="user-channel-link">
              <img id="user-channel-link-image" src={this.props.currentUser.image}/>
            </Link>
            <h4 id="greeting-text">Welcome to ShareTube</h4>
            <div className="bar" ></div>
            <Link id="edit-profile-button"
              to={`/users/${this.props.currentUser.id}/edit`}>
              Edit Profile
            </Link>
            <button id="logout-button"
              onClick={this.handleLogout}>Sign Out
            </button>
          </section>
        </div>
      );
    }
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

  handleToggleHam(e) {
    e.preventDefault();
    this.props.toggleDropdownHam();
  }

  handleToggleUser(e) {
    e.preventDefault();
    this.props.toggleDropdownUser();
  }

  hamDropdown() {
    return (
      <button
        id="hamburger-menu"
        onClick={this.handleToggleHam.bind(this)}>
      </button>
    );
  }


  render() {
    const greeting = this.props.currentUser ? this.greetings() : this.links();
    const hamDropdown = this.hamDropdown();
      return (
        <div className="main-nav-list">
          { hamDropdown }
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
