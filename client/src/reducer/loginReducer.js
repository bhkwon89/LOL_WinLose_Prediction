import { 
  LOGIN, 
  SET_NICKNAME, 
  SET_EMAIL,
  SET_IMAGE,
  SET_UPDATE,
  SET_WITHDRAW,
  SET_PASSWORD,
  SET_GOOGLE_LOGIN,
  SET_KAKAO_LOGIN
} from '../action/index';

export const initialState = {
  isLogin: false,
  nickname: '',
  email: '',
  profileImage: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin,
      });

    case SET_NICKNAME:
      return Object.assign({}, state, {
        nickname: action.payload.nickname,
      });

    case SET_EMAIL:
    return Object.assign({}, state, {
      emaildata: action.payload.emaildata,
    });

    case SET_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload.password,
      });

    case SET_IMAGE:
    return Object.assign({}, state, {
      profileImage: action.payload.profileImage,
    });

    case SET_UPDATE:
    return Object.assign({}, state, {
      updateInfo: action.payload.updateInfo,
    });

    case SET_WITHDRAW:
    return Object.assign({}, state, {
      withdrawModal: action.payload.withdrawModal,
    });

    case SET_KAKAO_LOGIN:
    return Object.assign({}, state, {
      kakaoLogin: action.payload.kakaoLogin,
    });

    case SET_GOOGLE_LOGIN:
    return Object.assign({}, state, {
      googleLogin: action.payload.googleLogin,
    });

    default:
      return state;
  }
};

export default loginReducer;