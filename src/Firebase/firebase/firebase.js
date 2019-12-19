import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyCcaEhrt52aK3JxPh1E2dHtvdwDq8xgKIQ",
        authDomain: "cmad18a-final-project.firebaseapp.com",
        databaseURL: "https://cmad18a-final-project.firebaseio.com",
        projectId: "cmad18a-final-project",
        storageBucket: "cmad18a-final-project.appspot.com",
        messagingSenderId: "791694068898",
        appId: "1:791694068898:web:7a64fe2424bb69373a9bfb",
        measurementId: "G-2CNWDTD3LC"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;