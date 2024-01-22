// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWnZzXfRsTA9wVIlUBv-n4MnmR1IIrrTw",
    authDomain: "resume-af4db.firebaseapp.com",
    projectId: "resume-af4db",
    storageBucket: "resume-af4db.appspot.com",
    messagingSenderId: "342296246245",
    appId: "1:342296246245:web:ac9523871e5f77c971a10c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
