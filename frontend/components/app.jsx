import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import HamburgerContainer from './ham_dropdown/ham_dropdown_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './viewbar/home_container';
import VideoFormContainer from './video/form_container';
import VideoDetailContainer from './video/video_detail_container';
import EditProfileContainer from './session/edit_profile_container';
import SearchIndexContainer from './search/search_index_container';
import ChannelContainer from './channel/channel_container';

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
        <ProtectedRoute path="/users/:userId/edit" component={EditProfileContainer} />
        <Route path="/search" component={SearchIndexContainer} />
        <Route path="/users/:userId" component={ChannelContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
