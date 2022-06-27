export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";
export const ISLOGIN = "ISLOGIN";
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";
export const PROFILE_IMG = "PROFILE_IMG";
export const SIGNUP_STATE = "SIGNUP_STATE";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const MYPAGE_REVIEWS = "MYPAGE_REVIEWS";
export const MYPAGE_LIKES = "MYPAGE_LIKES";
export const SET_MESSAGE_MODAL = 'SET_MESSAGE_MODAL';
export const CONTENTS_MODAL = "CONTENTS_MODAL"
export const SET_POST = 'SET_POST';
export const SET_NICKNAME = 'SET_NICKNAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_IMAGE = 'SET_IMAGE';
export const REVIEWS_DATE = "REVIEWS_DATE";
export const LIKES_DATE = "LIKES_DATE";
export const SCROLL_TOP = "SCROLL_TOP";
export const SET_UPDATE = "SET_UPDATE";
export const SET_WITHDRAW = "SET_WITHDRAW";
export const SET_PASSWORD = "SET_PASSWORD";
export const HANDLE_MYPAGE = "HANDLE_MYPAGE";
export const SET_LIST = 'SET_LIST';
export const SET_GOOGLE_LOGIN = "SET_GOOGLE_LOGIN";
export const SET_KAKAO_LOGIN = "SET_KAKAO_LOGIN";

export const CONTENTS_LIKE = 'CONTENTS_LIKE';

export const login = (isLogin) => {
    return {
        type: LOGIN,
        payload: {
            isLogin
        },
    };
};

export const setGoogleLogin = (googleLogin) => {
    return {
        type: SET_GOOGLE_LOGIN,
        payload: {
            googleLogin
        },
    };
};

export const setKakaoLogin = (kakaoLogin) => {
    return {
        type: SET_KAKAO_LOGIN,
        payload: {
            kakaoLogin
        },
    };
};

export const setUpdateInfo = (updateInfo) => {
    return {
        type: SET_UPDATE,
        payload: {
            updateInfo
        },
    };
};

export const setHandleMypage = (handlemypage) => {
    return {
        type: HANDLE_MYPAGE,
        payload: {
            handlemypage
        },
    };
};

export const setWithdrawModal = (withdrawModal) => {
    return {
        type: SET_WITHDRAW,
        payload: {
            withdrawModal
        },
    };
};

export const setReviewsDate = (reviewsDate) => {
    return {
        type: REVIEWS_DATE,
        payload: {
            reviewsDate
        },
    };
};

export const setLikesDate = (likesDate) => {
    return {
        type: LIKES_DATE,
        payload: {
            likesDate
        },
    };
};

export const setNickname = (nickname) => {
    return {
        type: SET_NICKNAME,
        payload: {
            nickname
        },
    };
};

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        payload: {
            password
        },
    };
};

export const setEmailData = (emaildata) => {
    return {
        type: SET_EMAIL,
        payload: {
            emaildata
        },
    };
};

export const setProfileImage = (profileImage) => {
    return {
        type: SET_IMAGE,
        payload: {
            profileImage
        },
    };
};

export const loginModal = (state) => {
    return {
        type: LOGIN_MODAL,
        payload: { isModal: state }
    };
};

export const signupModal = (state) => {
    return {
        type: SIGNUP_MODAL,
        payload: { isState: state }
    };
}

export const setAccessToken = (state) => {
    return {
        type: SET_ACCESSTOKEN,
        payload: { accessToken: state }
    };
}

export const setMypageReviews = (mypageReviews) => {
    return {
        type: MYPAGE_REVIEWS,
        payload: {
            mypageReviews
        },
    };
}

export const setMypageLikes = (mypageLikes) => {
    return {
        type: MYPAGE_LIKES,
        payload: {
            mypageLikes
        },
    };
}

export const logout = (state) => {
    return {
        type: LOGOUT,
    };
};

export const addToList = (id) => {
    return {
        type: ADD_TO_LIST,
        payload: {
            id
        }
    }
}

export const removeFromList = (id) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: {
            id
        }
    }
}

export const setMessageModal = (boolean, content) => {
    return {
        type: SET_MESSAGE_MODAL,
        payload: {
            isModalOpen: boolean,
            content,
        },
    };
};

export const contentsModal = (boolean, info) => {
    return {
        type: CONTENTS_MODAL,
        payload: {
            modalOnOff: boolean,
            info,
        }
    };
};

export const setPost = (post) => {
    return {
        type: SET_POST,
        payload: post,
    };
};

export const contentsLike = (boolean) => {
    return {
        type: CONTENTS_LIKE,
        payload: {
            likeOnOff: boolean
        }
    };
};

export const scrollTop = (boolean, number) => {
    return {
        type: SCROLL_TOP,
        payload: {
            buttonOnOff: boolean,
            scrollLength: number
        }
    };
};

export const setList = (id) => {
    return {
        type: SET_LIST,
        payload: id
    };
};
