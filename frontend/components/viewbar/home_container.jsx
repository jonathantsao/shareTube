import React from 'react';
import ViewbarContainer from './viewbar_container';
import { withRouter } from 'react-router-dom';

const HomeContainer = ({ location }) => {
  const path = location.pathname;
  return (
    <div className="home-index">
      <ViewbarContainer filter="all" />
      <ViewbarContainer className={path === "/hot" ? "first" : ""} filter="hot" />
      <ViewbarContainer className={path === "/recent" ? "first" : ""} filter="recent" />
    </div>
  );
};

export default HomeContainer;
