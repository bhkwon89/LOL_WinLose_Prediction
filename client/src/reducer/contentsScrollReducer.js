import { SCROLL_TOP } from '../action/index';


const initialState = {
  contentsScroll: {
    buttonOnOff: false,
    scrollLength: 0
  }
}

const contentsScrollReducer = (state = initialState, action) => {

  switch (action.type) {
    case SCROLL_TOP:
      return Object.assign({}, state, {
        contentsScroll: {
          ...action.payload,
        },
      });

    default:
      return state;
  }
};

export default contentsScrollReducer;