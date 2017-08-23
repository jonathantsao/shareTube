import React from 'react';
import { Link } from 'react-router-dom';

const HamDropdown = ({ currentUser, hamDropdown}) => {
  let channel;
  let hamSubs;

  if (currentUser) {
    channel = (
      <li>
        <Link to={`/users/${currentUser.id}`} >
          <div id="channel-icon"></div> My channel
        </Link>
      </li>
    );
  }
  if (hamDropdown) {
    return (
      <section className="ham-dropdown-menu">
        <ul className="ham-dropdown-list">
          <li>
            <Link to="/">
              <div id="home-icon"></div> Home
            </Link>
          </li>
          { channel }
          <li>
            <Link to="/search/trending">
              <div id="hot-icon"></div> Hot
            </Link>
          </li>
        </ul>
        <ul className="ham-dropdown-subscriptions">

        </ul>

        <hr />
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default HamDropdown;
