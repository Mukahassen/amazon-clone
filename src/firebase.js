// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDMhtV18_7KAw9c1Sf7EdM6tFMHMGbAymY",
    authDomain: "fir-ac61f.firebaseapp.com",
    projectId: "fir-ac61f",
    storageBucket: "fir-ac61f.appspot.com",
    messagingSenderId: "803683726739",
    appId: "1:803683726739:web:6184353f2161fdb3cea466",
    measurementId: "G-0CTC4CLZ1S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = app.firestore()
export { auth, db };

