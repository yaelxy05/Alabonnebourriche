import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  LOG_OUT,
} from "src/actions/auth";

const initialState = {
  // contenu du champ email
  username: "",
  // contenu du champ password
  password: "",
  // indique si l'utilisateur est authentifié
  isLogged: false,
  // token
  token: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      if (action.name === "username") {
        return {
          ...state,
          username: action.newValue,
        };
      }
      if (action.name === "password") {
        return {
          ...state,
          password: action.newValue,
        };
      }
      if (action.name === "confirmPassword") {
        return {
          ...state,
          confirmPassword: action.newValue,
        };
      }
      if (action.name === "lastName") {
        return {
          ...state,
          lastName: action.newValue,
        };
      }
      if (action.name === "firstName") {
        return {
          ...state,
          firstName: action.newValue,
        };
      }
      if (action.name === "address") {
        return {
          ...state,
          address: action.newValue,
        };
      }
      if (action.name === "phoneNumber") {
        return {
          ...state,
          phoneNumber: action.newValue,
        };
      }
      return {
        ...state,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: "",
        password: "",
      };
    
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    default:
      return state;
  }
}

export default authReducer;
