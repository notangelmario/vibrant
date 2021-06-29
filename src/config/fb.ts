import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBmLRJyifAJ6LM2tcXewKK90ZiMmpv6nsY",
    authDomain: "vibrant-music-app.firebaseapp.com",
    projectId: "vibrant-music-app",
    storageBucket: "vibrant-music-app.appspot.com",
    messagingSenderId: "683777334863",
    appId: "1:683777334863:web:ee10b41f71cb84180a143a",
    measurementId: "G-5C78PZJ55G"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const fb = firebase;
export default fb;