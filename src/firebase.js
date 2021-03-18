import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnePGPyNRZnIGv474s5M_Zbg42qhv2oYI",
    authDomain: "twitter-word-counter.firebaseapp.com",
    projectId: "twitter-word-counter",
    storageBucket: "twitter-word-counter.appspot.com",
    messagingSenderId: "927819792493",
    appId: "1:927819792493:web:92adbc81b0f0a9898dff64",
    measurementId: "G-58YYSBX6HQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;