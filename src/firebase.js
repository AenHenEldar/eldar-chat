import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDiOuLKx0pXiyVWZNsM6_LXb7S2vQn6O5s",
    authDomain: "react-chat-cdd32.firebaseapp.com",
    projectId: "react-chat-cdd32",
    storageBucket: "react-chat-cdd32.appspot.com",
    messagingSenderId: "672240839004",
    appId: "1:672240839004:web:ec648fbf421c339e71b999"
}).auth();