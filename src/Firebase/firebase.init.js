import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

/* this runction initialize the firebase system */

function initializeAuthentication() {
    
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

