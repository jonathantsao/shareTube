import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component, path, loggedIn }) => {
  const Component = component;
  return (<Route
    path={path}
    render={(props) => !loggedIn ?
      (<Component {...props} />) :
      (<Redirect to="/" />)
    }
  />);
};

const Protected = ({ component, path, loggedIn }) => {
  const Component = component;
  return (<Route
    path={path}
    render={(props) => loggedIn ?
      (<Component {...props} />) :
      (<Redirect to="/login" />)
    }
  />);
};

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
