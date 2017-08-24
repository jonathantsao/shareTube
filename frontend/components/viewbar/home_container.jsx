import React from 'react';
import ViewbarContainer from './viewbar_container';

const HomeContainer = () => {
  return (
    <div className="home-index">
      <ViewbarContainer filter="all" />
      <ViewbarContainer filter="recent" />
      <ViewbarContainer filter="hot" />
    </div>
  );
};

export default HomeContainer;
