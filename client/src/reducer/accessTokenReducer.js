import { SET_ACCESSTOKEN } from "../action/index";

const accessTokenReducer = (state = { accessToken: null }, action) => {
    switch (action.type) {
        case SET_ACCESSTOKEN: {
        return {...state,
            accessToken: action.payload.accessToken
        };
    }

    default:
        return state;
    }
};

export default accessTokenReducer;