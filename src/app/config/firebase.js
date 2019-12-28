import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBa8tBttkXIUN5foiJwSSbpbv9XJ1zd2MU",
    authDomain: "revents-254806.firebaseapp.com",
    databaseURL: "https://revents-254806.firebaseio.com",
    projectId: "revents-254806",
    storageBucket: "revents-254806.appspot.com",
    messagingSenderId: "416093311620",
    appId: "1:416093311620:web:23e753bcf8919800b168d1",
    measurementId: "G-6X0TCJCRP9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;