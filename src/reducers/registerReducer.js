import { UPDATE_REGISTER_FIELD } from 'src/actions/register';

const initialState = {
  mail: '',
  password: '',
  confirmPassword: '',
  address: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REGISTER_FIELD:
      return {
        ...state,
        mail: action.name === 'mail' ? action.newValue : state.mail,
        password: action.name === 'password' ? action.newValue : state.password,
        confirmPassword:
          action.name === 'confirmPassword'
            ? action.newValue
            : state.confirmPassword,
        address: action.name === 'address' ? action.newValue : state.address,
        lastName: action.name === 'lastName' ? action.newValue : state.lastName,
        firstName:
          action.name === 'firstName' ? action.newValue : state.firstName,
        phoneNumber:
          action.name === 'phoneNumber' ? action.newValue : state.phoneNumber,
      };

    default:
      return state;
  }
}

export default registerReducer;
