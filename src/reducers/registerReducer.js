import { UPDATE_REGISTER_FIELD } from 'src/actions/register';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  name: '',
  phoneNumber: '',
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REGISTER_FIELD:
      return {
        ...state,
        email: action.name === 'email' ? action.newValue : state.email,
        password: action.name === 'password' ? action.newValue : state.password,
        confirmPassword: action.name === 'confirmPassword' ? action.newValue : state.confirmPassword,
        address: action.name === 'address' ? action.newValue : state.address,
        name: action.name === 'name' ? action.newValue : state.name,
        phoneNumber: action.name === 'phoneNumber' ? action.newValue : state.phoneNumber,
      };

    default:
      return state;
  }
}

export default registerReducer;
