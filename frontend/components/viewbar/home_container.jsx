import React from 'react';
import ViewbarContainer from './viewbar_container';
import { withRouter } from 'react-router-dom';

const HomeContainer = ({ location }) => {
  const path = location.pathname;
  const hot = path === "/hot" ? "first" : "";
  const recent = path === "/recent" ? "first" : "";
  const likes = path === "/likes" ? "first" : "";
  const dislikes = path === "/dislikes" ? "first" : "";
  return (
    <div className="home-index">
      <div>
        <ViewbarContainer filter="all" />
      </div>

      <div className={hot}>
        <ViewbarContainer filter="hot" />
      </div>

      <div className={recent}>
        <ViewbarContainer filter="recent" />
      </div>

      <div className={likes}>
        <ViewbarContainer filter="likes" />
      </div>

      <div className={dislikes}>
        <ViewbarContainer filter="dislikes" />
      </div>

    </div>
  );
};

export default HomeContainer;
