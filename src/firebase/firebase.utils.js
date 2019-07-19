import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXvzBo9cE0YcgX9sSJPBiKwa7Qns7GwPQ',
  authDomain: 'crwn-db-42849.firebaseapp.com',
  databaseURL: 'https://crwn-db-42849.firebaseio.com',
  projectId: 'crwn-db-42849',
  storageBucket: '',
  messagingSenderId: '1042777457100',
  appId: '1:1042777457100:web:73081db9cac89ea6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
