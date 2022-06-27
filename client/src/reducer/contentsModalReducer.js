import { CONTENTS_MODAL } from '../action/index';


const initialState = {
  contentsModal: {
    modalOnOff: false,
    info: {}
  }
}

const contentsModalReducer = (state = initialState, action) => {

  switch (action.type) {
    case CONTENTS_MODAL:
      return Object.assign({}, state, {
        contentsModal: {
          ...action.payload,
        },
      });

    default:
      return state;
  }
};

export default contentsModalReducer;
