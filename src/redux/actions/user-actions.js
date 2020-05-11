import authTypes from "../types/auth-types";

export const setCurrentUser = user => ({
    type: authTypes.SET_CURRENT_USER,
    payload: user,
});

export const signOut = () => ({
    type: authTypes.SIGN_OUT_USER,
});
