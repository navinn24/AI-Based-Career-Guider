import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import { getStorage} from 'firebase/storage';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwpa7uuj4krumPfwrZuoqdLgqVe8nDGoc",
    authDomain: "ai4career-main-94aee.firebaseapp.com",
    projectId: "ai4career-main-94aee",
    storageBucket: "ai4career-main-94aee.appspot.com",
    messagingSenderId: "440671278440",
    appId: "1:440671278440:web:b51f0deeb85c32fb7672dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const db = getFirestore(app);

export default app;
export { storage, db };