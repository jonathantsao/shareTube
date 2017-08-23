import React from 'react';
import { Link } from 'react-router-dom';

const HamDropdown = ({ currentUser, hamDropdown, location}) => {
  let channel;
  let hamSubs;

  if (currentUser) {
    channel = (
      <li>
        <Link to={`/users/${currentUser.id}`} >
          <div id="channel-icon"></div> <p>My channel</p>
        </Link>
      </li>
    );
  }



  let home;

  if (hamDropdown) {
    if (location.pathname === "/") {
      home = (
        <li id="home-page-hover">
          <Link to="/">
            <div id="home-icon"></div>
            <p>Home</p>
          </Link>
        </li>
      );
    } else {
      home = (
        <li>
          <Link to="/">
            <div id="home-icon"></div>
            <p>Home</p>
          </Link>
        </li>
      );
    }
    return (
      <section className="ham-dropdown-menu">
        <ul className="ham-dropdown-list">
          { home }
          { channel }
          <li>
            <Link to="/search/trending">
              <div id="hot-icon"></div>
              <p>Hot</p>
            </Link>
          </li>
        </ul>
        <ul className="ham-dropdown-subscriptions">

        </ul>

      </section>
    );
  } else {
    return <div></div>;
  }
};

export default HamDropdown;
