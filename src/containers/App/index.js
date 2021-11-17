import { connect } from 'react-redux';
import { refreshLogin } from 'src/actions/auth';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkLogin: () => {
    const action = refreshLogin();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
