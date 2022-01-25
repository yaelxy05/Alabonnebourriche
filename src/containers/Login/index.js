import { updateUserField, logIn, logOut } from 'src/actions/auth';

import { connect } from 'react-redux';

import LoginForm from 'src/components/Login';

const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
