import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav className="main-nav">
      <h1>ShareTube</h1>
      <GreetingContainer />
    </nav>
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
