import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAaCeP35JOO-n0dI3qPb3MT_jbhkzUJoRs",
    authDomain: "onlytodolist.firebaseapp.com",
    projectId: "onlytodolist",
    storageBucket: "onlytodolist.appspot.com",
    messagingSenderId: "120537105475",
    appId: "1:120537105475:web:95c7023ed0e29ca72c40f6",
    measurementId: "G-KKLC7911F1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
