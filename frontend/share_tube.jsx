import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { checkUsername, verifyUsername } from './actions/ui_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preLoadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.checkUsername = checkUsername;
  window.verifyUsername = verifyUsername;
  ReactDOM.render(<Root store={store}/>, root);
});
