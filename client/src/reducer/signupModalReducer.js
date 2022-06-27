import { SIGNUP_MODAL } from '../action/index';

const signupModalReducer = (state = { isState: false }, action) => {
  switch (action.type) {
    case SIGNUP_MODAL:
      return { isState: action.payload.isState };

    default:
      return state;
  }
};

export default signupModalReducer;