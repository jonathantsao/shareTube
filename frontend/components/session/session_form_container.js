import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === "/login") {
    return {
      processForm: user => dispatch(login(user)),
    };
  } else if (ownProps.location.pathname === "/signup") {
    return {
      processForm: user => dispatch(signup(user)),
    };
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
