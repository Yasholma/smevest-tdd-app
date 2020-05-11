import authTypes from "../types/auth-types";

const INITIAL_STATE = {
    email: "",
    password: "",
    category: "",
    error: null,
    loading: false,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case authTypes.ON_AUTH_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case authTypes.ON_SIGN_UP_SUCCESS:
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                category: payload.category,
                error: null,
                loading: false,
            };
        case authTypes.ON_SIGN_IN_SUCCESS:
            console.log(payload);
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                error: null,
                loading: false,
            };
        case authTypes.ON_AUTH_FAIL:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
