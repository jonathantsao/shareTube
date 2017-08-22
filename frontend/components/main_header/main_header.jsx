import React from 'react';
import { Link } from 'react-router-dom';

const greetings = (currentUser, logout) => (
  <div class="greet-user">
    <h1>{currentUser.username}</h1>
    <button onClick={logout}>Logout</button>
  </div>
);

const links = () => (
  <div className="session-links">
    <Link to="/login">Sign In</Link>
  </div>
);

const MainHeader = ({ currentUser, logout }) => {
  const greeting = currentUser ? greetings(currentUser, logout) : links();
  return (
    <div className="main-nav-list">
      <div id="hamburger-menu"></div>
      <Link className="logo-text" to="/">ShareTube</Link>
      { greeting }
    </div>
  );
};

export default MainHeader;
