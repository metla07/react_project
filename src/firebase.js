import firebase from "firebase/compat/app";
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCoECs7b7tkn6TIQhdaWXchH54qXZEzr2I",
    authDomain: "first-fire-12f12.firebaseapp.com",
    projectId: "first-fire-12f12",
    storageBucket: "first-fire-12f12.appspot.com",
    messagingSenderId: "998828964433",
    appId: "1:998828964433:web:949a6205ea878b91df1670",
    measurementId: "G-XKRD1ZJPMC"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();