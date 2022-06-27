import { SET_MESSAGE_MODAL, SET_POST, SET_POSTS } from "../action/index";

const initialState = {
    messageModal: {
        isModalOpen: false,
        content: '',
    },
    post: null,
    posts: null
}

const foruReducer = (state = initialState, action) => { //첫번째 인자는 기본값, 두번째 인자는 액션
    switch (action.type) {//action type으로 분기
        case SET_MESSAGE_MODAL:
            return Object.assign({}, state, {
                messageModal: {
                    ...action.payload,
                },
            });

        case SET_POST:
            return Object.assign({}, state, {
                post: action.payload,
            });

        default:
            return state;
    }
}

export default foruReducer;