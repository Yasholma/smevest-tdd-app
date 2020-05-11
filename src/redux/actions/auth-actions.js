import authTypes from "../types/auth-types";
import {
    auth as firebaseAuth,
    createUserProfileDocument,
} from "../../firebase/firebase.utils";

const authStart = () => ({ type: authTypes.ON_AUTH_START });

const authFail = error => ({
    type: authTypes.ON_AUTH_FAIL,
    payload: error,
});

const signUpSuccess = ({ email, password, category }) => ({
    type: authTypes.ON_SIGN_UP_SUCCESS,
    payload: { email, password, category },
});

const signInSuccess = ({ email, password }) => ({
    type: authTypes.ON_SIGN_IN_SUCCESS,
    payload: { email, password },
});

export const signInAuth = (email, password) => {
    return async dispatch => {
        dispatch(authStart());

        try {
            const userData = await firebaseAuth
                .signInWithEmailAndPassword(email, password)
                .catch(err => {
                    dispatch(authFail({ any: "Incorrect credentials" }));
                });

            if (userData) {
                dispatch(signInSuccess({ email, password }));
            }
        } catch (error) {
            dispatch(authFail({ any: error.message }));
        }
    };
};

export const signUpAuth = (email, password, category) => {
    return async dispatch => {
        dispatch(authStart());

        try {
            const userData = await firebaseAuth
                .createUserWithEmailAndPassword(email, password)
                .catch(err => {
                    if (err.code === "auth/weak-password") {
                        dispatch(authFail({ password: err.message }));
                    } else if (err.code === "auth/invalid-email") {
                        dispatch(authFail({ email: err.message }));
                    } else {
                        dispatch(authFail({ other: err.message }));
                    }
                });

            if (userData) {
                const { user } = userData;
                await createUserProfileDocument(user, { category });
                dispatch(signUpSuccess({ email, password, category }));
            }
        } catch (error) {
            dispatch(authFail(error));
        }
    };
};
