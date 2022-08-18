import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyDYjs0IUT_Bj7Poh6Y91vkI8q5ppA8_0kM",
    authDomain: "communityapt-production.firebaseapp.com",
    projectId: "communityapt-production",
    storageBucket: "communityapt-production.appspot.com",
    messagingSenderId: "918690332003",
    appId: "1:918690332003:web:30b463abec9ed6c534a756",
    measurementId: "G-FHLE8KX4BX"

    /* dev */
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.EACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
})
export const auth= getAuth(app)
export default app