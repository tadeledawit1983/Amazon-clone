import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhwTYErUDtjxDO4oi2-zzJmhV3Rtm6B1g",
    authDomain: "website-9e31f.firebaseapp.com",
    projectId: "website-9e31f",
    storageBucket: "website-9e31f.appspot.com",
    messagingSenderId: "195901732960",
    appId: "1:195901732960:web:c9246b78367a5b480ceb05",
    measurementId: "G-V3MEKFVGLX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };