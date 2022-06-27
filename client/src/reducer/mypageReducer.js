import { 
    MYPAGE_REVIEWS, 
    MYPAGE_LIKES, 
    REVIEWS_DATE, 
    LIKES_DATE,
    HANDLE_MYPAGE
} from '../action/index';

const mypageInit = {
    mypageLikes: [],
    mypageReviews: [],
    reviewsDate: '',
    likesDate: '',
    handlemypage: null
};

const mypageReducer = (state = mypageInit, action) => {
    switch (action.type) {
        case MYPAGE_LIKES:
            return Object.assign({}, state, {
                mypageLikes: action.payload.mypageLikes,
            });

        case MYPAGE_REVIEWS:
            return Object.assign({}, state, {
                mypageReviews: action.payload.mypageReviews,
            });

        case REVIEWS_DATE:
            return Object.assign({}, state, {
                reviewsDate: action.payload.reviewsDate,
            });

        case LIKES_DATE:
            return Object.assign({}, state, {
                likesDate: action.payload.likesDate,
            });

        case HANDLE_MYPAGE:
            return Object.assign({}, state, {
                handlemypage: action.payload.handlemypage,
            });

    default:
        return state;
    }
};

export default mypageReducer;