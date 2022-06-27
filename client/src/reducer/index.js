import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginReducer";
import loginModalReducer from "./loginModalReducer";
import signupModalReducer from "./signupModalReducer";
import accessTokenReducer from "./accessTokenReducer";
import signupStateReducer from "./signupStateReducer";
import mypageReducer from "./mypageReducer";
import writingListReducer from "./writingListReducer";
import foruReducer from "./foruReducer";
import contentsModalReducer from './contentsModalReducer';
import contentsLikeReducer from './contentsLikeReducer'
import contentsScrollReducer from './contentsScrollReducer'

const rootReducer = combineReducers({
    loginReducer,
    loginModalReducer,
    signupModalReducer,
    accessTokenReducer,
    signupStateReducer,
    mypageReducer,
    writingListReducer,
    foruReducer,
    contentsModalReducer,
    contentsLikeReducer,
    contentsScrollReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["foruReducer", "loginReducer"]
};

export default persistReducer(persistConfig, rootReducer);