import { combineReducers } from "redux";
import authReducer from "./reducers/auth-reducer";
import smeReducer from "./reducers/sme-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    sme: smeReducer,
    user: userReducer,
});

export default rootReducer;
