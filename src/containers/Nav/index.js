import { logOut } from 'src/actions/auth';
import { toggle } from 'src/actions/nav';
import { connect } from 'react-redux';

import Nav from 'src/components/Nav';


const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  isShow: state.nav.isShow
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
  toggleMenu: () => {
    dispatch(toggle());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
