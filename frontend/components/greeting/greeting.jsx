import React from 'react';
import { Link } from 'react-router-dom';

const greetings = (currentUser, logout) => (
  <div>
    <h1>${currentUser.username}</h1>
    <button onClick={logout}>Logout</button>
  </div>
);

const links = () => (
  <div className="session-links">
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Signup</Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => {
  const greeting = currentUser ? greetings(currentUser, logout) : links();
  return greeting;
};

export default Greeting;
