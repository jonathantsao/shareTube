import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import HamburgerContainer from './ham_dropdown/ham_dropdown_container';
import { Route } from 'react-router-dom';
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

    <Route exact path="/" component={HomeContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
