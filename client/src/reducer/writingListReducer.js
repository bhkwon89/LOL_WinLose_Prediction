import {
    REMOVE_FROM_LIST,
    ADD_TO_LIST,
    SET_LIST
} from "../action/index";

const writingListReducer = (state = [], action) => { //첫번째 인자는 기본값, 두번째 인자는 액션
    switch (action.type) {//action type으로 분기
        case ADD_TO_LIST:
            const newAdd = { contents: action.payload.id }
            return [newAdd, ...state]

        case REMOVE_FROM_LIST:
            const currentList = state.filter((el) =>
                el.contents.id !== action.payload.id)
            return [...currentList]

        case SET_LIST:
            const reset = []
            return []

        default:
            return state;
    }
}

export default writingListReducer;