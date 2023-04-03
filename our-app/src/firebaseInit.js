import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAoJjrsmcfoCkB-Q446yhlvYH_NUm3uNvQ",
    authDomain: "harmony-firebase-e0c11.firebaseapp.com",
    databaseURL: "https://harmony-firebase-e0c11-default-rtdb.firebaseio.com/",
    projectId: "harmony-firebase-e0c11",
    storageBucket: "harmony-firebase-e0c11.appspot.com",
    messagingSenderId: "799614847534",
    appId: "1:799614847534:web:a23afc2a1c48b37d8d2dbf",
    measurementId: "G-289XZWRDQQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;