import { connect } from 'react-redux';
import { fetchTask } from 'src/actions/task';
import { refreshLogin } from 'src/actions/auth';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.task.loading,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  tasks: () => {
    const action = fetchTask();
    dispatch(action);
  },
  checkLogin: () => {
    const action = refreshLogin();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
