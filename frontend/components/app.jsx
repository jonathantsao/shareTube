import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import HamburgerContainer from './ham_dropdown/ham_dropdown_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './viewbar/home_container';
import VideoFormContainer from './video/form_container';
import VideoDetailContainer from './video/video_detail_container';

const App = () => (
  <div className="page">
    <div className="main-nav">
      <MainHeaderContainer />
    </div>
    <div className="hamburger-nav">
      <HamburgerContainer />
    </div>
    <div className="page-body">
      <Switch>
        <ProtectedRoute path="/upload" component={VideoFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <Route path="/videos/:videoId" component={VideoDetailContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  </div>
);

// al was here

export default App;
