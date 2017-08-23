import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import { verifyUsername, checkUsername, changeForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.ui.errors,
    formType: ownProps.location.pathname.slice(1),
    page: state.ui.session_page,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === "/login") {
    return {
      processForm: user => dispatch(login(user)),
      processDemo: user => dispatch(login(user)),
      sendUsername: username => dispatch(verifyUsername(username)),
      changeForm: () => dispatch(changeForm()),
    };
  } else if (ownProps.location.pathname === "/signup") {
    return {
      processForm: user => dispatch(signup(user)),
      processDemo: user => dispatch(login(user)),
      sendUsername: username => dispatch(checkUsername(username)),
      changeForm: () => dispatch(changeForm()),
    };
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
