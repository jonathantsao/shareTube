import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import HamburgerContainer from './ham_dropdown/ham_dropdown_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import HomeContainer from './viewbar/home_container';

const App = () => (
  <div>
    <div className="main-nav">
      <MainHeaderContainer />
    </div>
    <div className="hamburger-nav">
      <HamburgerContainer />
    </div>
    <div className="page-body">
      <Switch>
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
