import { CONTENTS_LIKE } from '../action/index';

const initialState = {
  likeOnOff: false
}

const contentsLikeReducer = (state = initialState, action) => {

  switch (action.type) {
    case CONTENTS_LIKE:
      return Object.assign({}, state, {
        ...action.payload,
      });

    default:
      return state;
  }
};

export default contentsLikeReducer;
