import { connect } from 'react-redux';

import { updateRegisterField, newUserCreation } from 'src/actions/register';
import Register from 'src/components/Register';

const mapStateToProps = (state) => ({
  mail: state.register.mail,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  firstName: state.register.firstName,
  lastName: state.register.lastName,
  address: state.register.address,
  phoneNumber: state.register.phoneNumber,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldRegister: (value, fieldName) => {
    dispatch(updateRegisterField(value, fieldName));
  },

  handleRegister: () => {
    console.log('click');
    dispatch(newUserCreation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
