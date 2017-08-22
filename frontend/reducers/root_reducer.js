import sessionReducer from './session_reducer';
import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
});

export default rootReducer;
