import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6p_v-pqD9I1f87Q4bjrnUPHWPrP16vWw",
    authDomain: "smevest-5ac32.firebaseapp.com",
    databaseURL: "https://smevest-5ac32.firebaseio.com",
    projectId: "smevest-5ac32",
    storageBucket: "smevest-5ac32.appspot.com",
    messagingSenderId: "528467885946",
    appId: "1:528467885946:web:236964fe39c761c6efe0c3",
    measurementId: "G-4LYQTK7B2P",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const { uid, displayName, email } = userAuth;
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const createAt = new Date();
        // Store the user in the users collection
        try {
            await userRef.set({
                id: uid,
                displayName,
                email,
                verified: false,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
