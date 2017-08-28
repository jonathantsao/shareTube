import { connect } from 'react-redux';
import { editProfile } from '../../actions/session_actions';
import EditProfile from './edit_profile';
import { receiveHamDropdown, receiveUserDropdown, clearErrors, receiveErrors } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    hamDropdown: state.ui.hamDropdown,
    userDropdown: state.ui.userDropdown,
    errors: state.ui.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (formData, id) => dispatch(editProfile(formData, id)),
    toggleHamDropdown: () => dispatch(receiveHamDropdown()),
    toggleUserDropdown: () => dispatch(receiveUserDropdown()),
    provideErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
