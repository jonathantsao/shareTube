import { connect } from 'react-redux';
import MainHeader from './main_header';
import { logout } from '../../actions/session_actions';
import { receiveHamDropdown, receiveUserDropdown } from '../../actions/ui_actions';
import { searchBar } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    hamDropdown: state.ui.hamDropdown,
    userDropdown: state.ui.userDropdown,
    videoTitles: state.ui.videoTitles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleDropdownHam: () => dispatch(receiveHamDropdown()),
    toggleDropdownUser: () => dispatch(receiveUserDropdown()),
    searchBar: (searchQuery) => dispatch(searchBar(searchQuery)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
