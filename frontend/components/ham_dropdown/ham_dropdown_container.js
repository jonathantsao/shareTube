import { connect } from 'react-redux';
import HamDropdown from './ham_dropdown';
import { receiveHamDropdown } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    subscriptions: state.session.subscriptions,
    hamDropdown: state.ui.hamDropdown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHamDropdown: () => dispatch(receiveHamDropdown()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HamDropdown));
