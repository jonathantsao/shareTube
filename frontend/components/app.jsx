import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <div className="main-nav">
      <MainHeaderContainer />
    </div>
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
