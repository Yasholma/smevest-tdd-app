import { combineReducers } from "redux";
import smeReducer from "./reducers/sme-reducer";

const rootReducer = combineReducers({
    sme: smeReducer,
});

export default rootReducer;
