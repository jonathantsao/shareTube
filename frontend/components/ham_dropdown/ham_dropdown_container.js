import { connect } from 'react-redux';
import HamDropdown from './ham_dropdown';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    hamDropdown: state.ui.hamDropdown,
  };
};

export default withRouter(connect(mapStateToProps, null)(HamDropdown));
