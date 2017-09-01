import React from 'react';
import { connect } from 'react-redux';

const Advertisement = ({ currentUser }) => {
  if (currentUser) {
    return <div></div>;
  } else {
    return <div id="ad-box"><div id="ad"></div></div>;
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStateToProps, null)(Advertisement);
