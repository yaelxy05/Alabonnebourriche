import { TOGGLE } from "src/actions/nav";

const initialState = {
  isShow: true,
};

function navReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isShow: !state.isShow,
      };
    default:
      return state;
  }
}

export default navReducer;
