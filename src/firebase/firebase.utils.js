import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2nsdWduR10Y6yHCzP6k_x1aVznFZPs44",
  authDomain: "crown-db-d4ea4.firebaseapp.com",
  databaseURL: "https://crown-db-d4ea4.firebaseio.com",
  projectId: "crown-db-d4ea4",
  storageBucket: "crown-db-d4ea4.appspot.com",
  messagingSenderId: "282562744816",
  appId: "1:282562744816:web:7d769e2e7ddfd0eabe8d35"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
