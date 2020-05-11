import authTypes from "../types/auth-types";

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case authTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };

        case authTypes.SIGN_OUT_USER:
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};

export default userReducer;
