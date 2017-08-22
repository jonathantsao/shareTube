import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>ShareTube</h1>
      <GreetingContainer />
    </header>

    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
