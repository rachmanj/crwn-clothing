import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAFqNzrP-rKNWsG88a51ZqV_yB8m8gdnYc',
  authDomain: 'crown-db-9771c.firebaseapp.com',
  projectId: 'crown-db-9771c',
  storageBucket: 'crown-db-9771c.appspot.com',
  messagingSenderId: '955537368023',
  appId: '1:955537368023:web:31d3c4450277e845d96192',
  measurementId: 'G-X60DL1SHX8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
