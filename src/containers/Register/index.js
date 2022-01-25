import { connect } from 'react-redux';

import { updateRegisterField, newUserCreation, signupResponse, signupError } from 'src/actions/register';
import Register from 'src/components/Register';

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  name: state.register.name,
  nameFirst: state.register.nameFirst,
  address: state.register.address,
  phoneNumber: state.register.phoneNumber,
  // message success and error
  response: state.register.response,
  messagesError: state.register.messagesError,

});

const mapDispatchToProps = (dispatch) => ({
  changeFieldRegister: (value, fieldName) => {
    dispatch(updateRegisterField(value, fieldName));
  },

  handleRegister: () => {
    console.log('click');
    dispatch(newUserCreation());
  },
  // on se sert de cette fonction ci-dessous pour re-initialiser
  // le tableau de réponse ds création de cpte
  signupResponse: (response) => {
    dispatch(signupResponse(response));
  },

  signupError: (message) => {
    dispatch(signupError(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
