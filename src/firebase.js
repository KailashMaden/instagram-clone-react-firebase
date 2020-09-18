// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBTMfC5ciI0b6eE9LbJSDQxlQynjx4PqRQ',
  authDomain: 'instagram-clone-react-ab782.firebaseapp.com',
  databaseURL: 'https://instagram-clone-react-ab782.firebaseio.com',
  projectId: 'instagram-clone-react-ab782',
  storageBucket: 'instagram-clone-react-ab782.appspot.com',
  messagingSenderId: '560562927632',
  appId: '1:560562927632:web:3005214346dff6cedf7295',
  measurementId: 'G-KD63QE5YLK',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default firebaseConfig;
